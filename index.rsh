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
   title: Bytes(48),
   link: Bytes(128),
   description: Bytes(200),
   owner: Address,
   contract: Contract,
   id: UInt,
   hardCap: UInt,
   softCap: UInt,
   maxContribution: UInt,
   minContribution: UInt,
   PrivateSaleAmt: UInt,
  }),
  getParams: Object({
   name: Bytes(32),
   symbol: Bytes(8),
   tokenid: UInt
  }),
 });

  const Contributors = API('Contributors', {
  contribute: Fun([UInt], Null),
  claimRefund: Fun([], Null),
  claimToken: Fun([], Null),
 });

 const Projects = Events({
   log: [state, UInt]
 });

 init();

 Deployer.only(() => {
 const project = declassify(interact.getProject);
 const {name, symbol, tokenid} = declassify(interact.getParams)
 });
 Deployer.publish(project, name, symbol, tokenid);
 Projects.log(state.pad('created'), project.id);

 const tok = {name, symbol};
  const tok1 = new Token(tok);
 Projects.log(state.pad('tokenCreated'), tokenid);
 commit();

 Deployer.publish().pay([[tok1.supply(), tok1]]);
 

 const end = lastConsensusTime() + DEADLINE;

 commit();

 Deployer.publish();
 if(project.PrivateSaleAmt > balance(tok1)) {
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
  const payment = amt;
  return [payment, (notify) => {
   notify(null);
   contributors[this] = this;
   contributorsSet.insert(this);
   amtContributed[this] = payment;
   return [count + 1, amtTotal + amt, this, checkStatus(project.hardCap, amtTotal + amt) == INPROGRESS ? true : false]
  }]
 })
 .timeout(absoluteTime(end), () => {
  Deployer.publish();
  Projects.log(state.pad('timeout'), project.id);
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
    notify(null);
    if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
     transfer(balance(tok1) * amtTotal / project.PrivateSaleAmt * (fromMapAmt(amtContributed[this]))).to(
      fromMapAdd(contributors[this]));
     return [newCountTok - 1, balance(tok1)];
    }else {
     Projects.log(state.pad('claimFailed'), project.id);
     return [newCountTok, balance(tok1)];
    }
   }))
 } else {
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
    notify(null);
    if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
     transfer(balance(tok1) * amtTotal / project.PrivateSaleAmt * (fromMapAmt(amtContributed[this]))).to(
      fromMapAdd(contributors[this]));
     return [balance(tok1), newCountTok - 1];
    }else {
     Projects.log(state.pad('claimFailed'), project.id);
     return [balance(tok1), newCountTok];
    }
   }))
   
  } else {
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
    notify(null);
    if(balance() >= fromMapAmt(amtContributed[this]) && contributorsSet.member(this)) {
     transfer(fromMapAmt(amtContributed[this])).to(
      fromMapAdd(contributors[this]));
     return [newCount - 1, balance()];
    }else {
     Projects.log(state.pad('refundFailed'), project.id);
     return [newCount, balance()]
    }
   }))
  }
 }
 transfer(balance()).to(Deployer);
 transfer(balance(tok1)).to(project.owner);
 commit();
});