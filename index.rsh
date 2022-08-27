'reach 0.1';

const [isOutcome, PASSED, INPROGRESS] = makeEnum(2);

const DEADLINE = 20;

const state = Bytes(20);

const checkStatus = (hardCap, totalAmt) => {
 const result = totalAmt >= hardCap ? PASSED : INPROGRESS;
   return result;
};

assert(checkStatus(100, 100) == PASSED);
assert(checkStatus(100, 50) == INPROGRESS);

forall(UInt, hardCap => 
 forall(UInt, totalAmt =>  
  assert(isOutcome(checkStatus(hardCap, totalAmt)))));

export const main = Reach.App(() => {
 setOptions({untrustworthyMaps: true});
 const Deployer = Participant('Deployer', {  
  getProject: Object({
   title: Bytes(20),
   link: Bytes(150),
   description: Bytes(180),
   owner: Address,
   contract: Contract,
   id: UInt,
   hardCap: UInt,
   softCap: UInt,
   maxContribution: UInt,
   minContribution: UInt,
   PrivateSaleAmt: UInt,
   tokenName: Bytes(32),
   tokenSymbol: Bytes(8),
   tokenid: UInt
  }),
  getContract: Fun([], Bytes(100)),
  isProject: Bool,
 });

  const objectRepresentation = Struct([
    ["id", UInt],
    ["title", Bytes(20)],
    ["link", Bytes(150)],
    ["description", Bytes(180)],
    ["owner", Address],
    ["contractInfo", Bytes(100)]
  ]);

  const InformFrontend = Events({
    create: [UInt, Bytes(20), Bytes(150), Bytes(180), Address, Bytes(100)],
    that: [state, UInt, UInt]
  });

  const Contributors = API('Contributors', {
  contribute: Fun([UInt], UInt),
  claimRefund: Fun([], Bool),
  claimToken: Fun([], Bool),
  creating: Fun([objectRepresentation], Null),
  contributed: Fun([UInt, UInt], Null),
  timedOut: Fun([UInt, UInt], Null),
 });

 const Projects = Events({
   log: [state, UInt],
   created: [UInt, Bytes(20), Bytes(150), Bytes(180), Address, Bytes(100)],
 });

 init();

 Deployer.only(() => {
  const isProject = declassify(interact.isProject);
  const project = declassify(interact.getProject)
  });
 Deployer.publish(isProject, project);
 Projects.log(state.pad('created'), project.id);
 const name = project.tokenName;
 const symbol = project.tokenSymbol;
 const tok = {name, symbol};
 const tok1 = new Token(tok);
 Projects.log(state.pad('tokenCreated'), project.tokenid);
 commit();

 Deployer.publish().pay([[tok1.supply(), tok1]]);

 if(isProject){
  commit();  
  const end = lastConsensusTime() + DEADLINE;

  Deployer.publish();
  if(balance(tok1) > project.PrivateSaleAmt) {
    transfer(balance(tok1) - project.PrivateSaleAmt).to(project.owner);
  }else {
    transfer(balance(tok1)).to(project.owner);
    transfer(balance()).to(Deployer);
    tok1.burn(tok1.supply());
    tok1.destroy();
    commit();
    exit();
  }
  

  const contributors = new Map(Address, Address);
  const amtContributed = new Map(Address, UInt);
  const contributorsSet = new Set();

  const [count, amtTotal, lastAddress, KeepGoing] = 
  parallelReduce([0, 0, Deployer, true])
  .invariant(balance() == amtTotal)
  .while(lastConsensusTime() <= end && KeepGoing)
  .api_(Contributors.contribute, (amt) => {
    check(amt > 0, "Contribution too small")
    const payment = amt;
    return [payment, (notify) => {
    notify(balance());
    if (contributorsSet.member(this)) {
      const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
      amtContributed[this] = fromMapAmt(amtContributed[this]) + 0;
      const actualAmt = 0;
      return [count + 1, amtTotal + actualAmt, this, checkStatus(project.hardCap, amtTotal + amt) == INPROGRESS ? true : false]
    } else {
      if (amt > project.maxContribution){
        contributors[this] = this;
        contributorsSet.insert(this);
        amtContributed[this] = project.maxContribution;
        const actualAmt = project.maxContribution;
        return [count + 1, amtTotal + actualAmt, this, checkStatus(project.hardCap, amtTotal + amt) == INPROGRESS ? true : false]
      } else if (amt < project.minContribution) {
        contributors[this] = this;
        contributorsSet.insert(this);
        amtContributed[this] = project.minContribution;
        const actualAmt = project.minContribution;
        return [count + 1, amtTotal + actualAmt, this, checkStatus(project.hardCap, amtTotal + amt) == INPROGRESS ? true : false]
      } else {
        contributors[this] = this;
        contributorsSet.insert(this);
        amtContributed[this] = amt;
        const actualAmt = amt;
        return [count + 1, amtTotal + actualAmt, this, checkStatus(project.hardCap, amtTotal + amt) == INPROGRESS ? true : false]
      }
    }
    }]
  })
  .timeout(absoluteTime(end), () => {
    Deployer.publish();
    return [count, amtTotal, lastAddress, KeepGoing];
  });

  if(checkStatus(project.hardCap, amtTotal) == PASSED){
    Projects.log(state.pad('passed'), project.id);
    transfer(balance() * 1 / 100).to(Deployer);
    commit();
    Deployer.publish();

    transfer(balance()).to(project.owner);
    transfer(balance(tok1) * 1 / 100).to(Deployer);
    const fromMapAdd = (m) => fromMaybe(m, (() => lastAddress), ((x) => x));
    const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
    commit();
    Deployer.publish();
    const [currentBalanceTok, newCountTok] = parallelReduce([balance(tok1), count])
    .invariant(balance(tok1) == currentBalanceTok)
    .while(newCountTok > 0 && currentBalanceTok > 0)
    .api(Contributors.claimToken, (notify => {
      if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
      transfer(balance(tok1) * amtTotal / project.PrivateSaleAmt * (fromMapAmt(amtContributed[this]))).to(
        fromMapAdd(contributors[this]));
        contributorsSet.remove(this);
      Projects.log(state.pad('claimPassed'), project.id);
      notify(true);
      return [newCountTok - 1, balance(tok1)];
      }else {
      Projects.log(state.pad('claimFailed'), project.id);
      notify(false);
      return [newCountTok, balance(tok1)];
      }
    }))
  }else {
    if(amtTotal >= project.softCap){
      Projects.log(state.pad('passed'), project.id);
      transfer(balance() * 1 / 100).to(Deployer);
      commit();
      Deployer.publish();

      transfer(balance()).to(project.owner);
      transfer(balance(tok1) * 1 / 100).to(Deployer);
      const fromMapAdd = (m) => fromMaybe(m, (() => lastAddress), ((x) => x));
      const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
      commit();
      Deployer.publish();
      const [currentBalanceTok, newCountTok] = parallelReduce([balance(tok1), count])
      .invariant(balance(tok1) == currentBalanceTok)
      .while(newCountTok > 0 && currentBalanceTok > 0)
      .api(Contributors.claimToken, (notify => {
        if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
        transfer(balance(tok1) * amtTotal / project.PrivateSaleAmt * (fromMapAmt(amtContributed[this]))).to(
          fromMapAdd(contributors[this]));
        contributorsSet.remove(this);
        Projects.log(state.pad('claimPaseed'), project.id);
        notify(true);
        return [balance(tok1), newCountTok - 1];
        }else {
        Projects.log(state.pad('claimFailed'), project.id);
        notify(false);
        return [balance(tok1), newCountTok];
        }
      }))
    
      }else {
        Projects.log(state.pad('failed'), project.id);
        // transfer(balance(tok1)).to(project.owner);
        const fromMapAdd = (m) => fromMaybe(m, (() => lastAddress), ((x) => x));
        const fromMapAmt = (m) => fromMaybe(m, (() => 0), ((x) => x));
        commit();
        Deployer.publish();
        const [newCount, currentBalance] = parallelReduce([count, balance()])
        .invariant(balance() == currentBalance)
        .while(newCount > 0 && currentBalance > 0)
        .api(Contributors.claimRefund, (notify => {
          if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
          transfer(fromMapAmt(amtContributed[this])).to(
            fromMapAdd(contributors[this]));
          contributorsSet.remove(this);
          Projects.log(state.pad('refundPassed'), project.id);
          notify(true);
          return [newCount - 1, balance()];
          }else {
          Projects.log(state.pad('refundFailed'), project.id);
          notify(false);
          return [newCount, balance()]
          }
        }))
      }
    } 
  }else {
    const KeepGoing = parallelReduce(true)
    .invariant(balance() == 0)
    .while(KeepGoing)
    .api(Contributors.creating, (obj, notify) => {
      notify(null);
      const projectStruct = objectRepresentation.fromObject(obj);
      const projectObject = objectRepresentation.toObject(projectStruct);
      InformFrontend.create(
        projectObject.id,
        projectObject.title,
        projectObject.link,
        projectObject.description,
        projectObject.owner,
        projectObject.contractInfo
      );
      return KeepGoing;
    })
    .api(Contributors.contributed, (idNum, valNum, notify) => {
      notify(null);
      const num1 = idNum;
      const num2 = valNum;
      InformFrontend.that(state.pad('contributed'), num1, num2);
      return KeepGoing;
    })
    .api(Contributors.timedOut, (idNum, valNum, notify) => {
      notify(null);
      const num1 = idNum;
      const num2 = valNum;
      InformFrontend.that(state.pad('timedOut'), num1, num2);
      return KeepGoing;
    });  
  }

  transfer(balance(tok1)).to(Deployer);
  transfer(balance()).to(Deployer);
  tok1.burn(tok1.supply());
  if(tok1.destroyed() == false){
    tok1.destroy();
  }

  commit();
 
});