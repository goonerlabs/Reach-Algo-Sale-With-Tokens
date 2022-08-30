// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Contract;
  return {
    create: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    created: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    log: [ctc1, ctc0],
    that: [ctc1, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    description: ctc1,
    hardCap: ctc2,
    id: ctc2,
    link: ctc3,
    maxContribution: ctc2,
    minContribution: ctc2,
    owner: ctc0,
    softCap: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc0
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc10;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0, ctc5, ctc2, ctc2],
      5: [ctc0, ctc0, ctc2],
      7: [ctc0, ctc0, ctc2],
      9: [ctc0, ctc2, ctc0, ctc2],
      12: [ctc0, ctc2, ctc0, ctc2, ctc2],
      13: [ctc0, ctc5, ctc2, ctc2, ctc0, ctc2, ctc0, ctc6, ctc2, ctc2],
      14: [ctc0],
      17: [ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Contributors_claimRefund12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v719, v742, v751, v942, v950] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v957 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:15:application call to [unknown function] (defined at: ./index.rsh:224:15:function exp)', 'at ./index.rsh:224:15:application call to [unknown function] (defined at: ./index.rsh:224:15:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v742, v751, v942, v950, v957],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:224:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v961], secs: v963, time: v962, didSend: v397, from: v960 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v966 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v960), null);
      let v967;
      switch (v966[0]) {
        case 'None': {
          const v968 = v966[1];
          v967 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v969 = v966[1];
          v967 = v969;
          
          break;
          }
        }
      const v970 = stdlib.ge(v950, v967);
      const v971 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v960), null);
      let v972;
      switch (v971[0]) {
        case 'None': {
          const v973 = v971[1];
          v972 = false;
          
          break;
          }
        case 'Some': {
          const v974 = v971[1];
          v972 = true;
          
          break;
          }
        }
      const v975 = v970 ? v972 : false;
      if (v975) {
        let v977;
        switch (v966[0]) {
          case 'None': {
            const v978 = v966[1];
            v977 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v979 = v966[1];
            v977 = v979;
            
            break;
            }
          }
        const v980 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v960), null);
        let v981;
        switch (v980[0]) {
          case 'None': {
            const v982 = v980[1];
            v981 = v751;
            
            break;
            }
          case 'Some': {
            const v983 = v980[1];
            v981 = v983;
            
            break;
            }
          }
        const v987 = stdlib.sub(v950, v977);
        sim_r.txns.push({
          kind: 'from',
          to: v981,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v960, undefined /* Nothing */);
        const v990 = 'refundPassed        ';
        null;
        const v991 = true;
        const v992 = await txn1.getOutput('Contributors_claimRefund', 'v991', ctc7, v991);
        
        let v999;
        switch (v966[0]) {
          case 'None': {
            const v1000 = v966[1];
            v999 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1001 = v966[1];
            v999 = v1001;
            
            break;
            }
          }
        const v1002 = stdlib.sub(v987, v999);
        const v1991 = v1002;
        const v1993 = v987;
        const v1994 = stdlib.gt(v1002, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
        if (v1994) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1005 = 'refundFailed        ';
        null;
        const v1006 = false;
        const v1007 = await txn1.getOutput('Contributors_claimRefund', 'v1006', ctc7, v1006);
        
        const v1995 = v942;
        const v1997 = v950;
        const v1998 = stdlib.gt(v942, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
        if (v1998) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v961], secs: v963, time: v962, didSend: v397, from: v960 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v966 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v960), null);
  let v967;
  switch (v966[0]) {
    case 'None': {
      const v968 = v966[1];
      v967 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v969 = v966[1];
      v967 = v969;
      
      break;
      }
    }
  const v970 = stdlib.ge(v950, v967);
  const v971 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v960), null);
  let v972;
  switch (v971[0]) {
    case 'None': {
      const v973 = v971[1];
      v972 = false;
      
      break;
      }
    case 'Some': {
      const v974 = v971[1];
      v972 = true;
      
      break;
      }
    }
  const v975 = v970 ? v972 : false;
  if (v975) {
    let v977;
    switch (v966[0]) {
      case 'None': {
        const v978 = v966[1];
        v977 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v979 = v966[1];
        v977 = v979;
        
        break;
        }
      }
    const v980 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v960), null);
    let v981;
    switch (v980[0]) {
      case 'None': {
        const v982 = v980[1];
        v981 = v751;
        
        break;
        }
      case 'Some': {
        const v983 = v980[1];
        v981 = v983;
        
        break;
        }
      }
    const v987 = stdlib.sub(v950, v977);
    ;
    await stdlib.mapSet(map2, v960, undefined /* Nothing */);
    const v990 = 'refundPassed        ';
    null;
    const v991 = true;
    const v992 = await txn1.getOutput('Contributors_claimRefund', 'v991', ctc7, v991);
    if (v397) {
      stdlib.protect(ctc0, await interact.out(v961, v992), {
        at: './index.rsh:224:16:application',
        fs: ['at ./index.rsh:224:16:application call to [unknown function] (defined at: ./index.rsh:224:16:function exp)', 'at ./index.rsh:230:21:application call to "notify" (defined at: ./index.rsh:224:42:function exp)', 'at ./index.rsh:224:42:application call to [unknown function] (defined at: ./index.rsh:224:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    let v999;
    switch (v966[0]) {
      case 'None': {
        const v1000 = v966[1];
        v999 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1001 = v966[1];
        v999 = v1001;
        
        break;
        }
      }
    const v1002 = stdlib.sub(v987, v999);
    const v1991 = v1002;
    const v1993 = v987;
    const v1994 = stdlib.gt(v1002, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
    if (v1994) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v1005 = 'refundFailed        ';
    null;
    const v1006 = false;
    const v1007 = await txn1.getOutput('Contributors_claimRefund', 'v1006', ctc7, v1006);
    if (v397) {
      stdlib.protect(ctc0, await interact.out(v961, v1007), {
        at: './index.rsh:224:16:application',
        fs: ['at ./index.rsh:224:16:application call to [unknown function] (defined at: ./index.rsh:224:16:function exp)', 'at ./index.rsh:234:21:application call to "notify" (defined at: ./index.rsh:224:42:function exp)', 'at ./index.rsh:224:42:application call to [unknown function] (defined at: ./index.rsh:224:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1995 = v942;
    const v1997 = v950;
    const v1998 = stdlib.gt(v942, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
    if (v1998) {
      return;
      }
    else {
      ;
      return;
      }}
  
  
  };
export async function _Contributors_contribute13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc9 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v719, v732, v737, v742, v746, v750, v751, v752, v753, v760] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc1, ctc9, ctc3, ctc3, ctc1, ctc3, ctc1, ctc10, ctc3, ctc3]);
  const v776 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v777 = v776[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v779 = stdlib.gt(v777, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v732, v737, v742, v746, v750, v751, v752, v753, v760, v776],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v777, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v788], secs: v790, time: v789, didSend: v200, from: v787 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
      const v796 = stdlib.add(v760, v792);
      sim_r.txns.push({
        amt: v792,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v801 = v796;
      const v802 = await txn1.getOutput('Contributors_contribute', 'v801', ctc3, v801);
      
      const v808 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v787), null);
      let v809;
      switch (v808[0]) {
        case 'None': {
          const v810 = v808[1];
          v809 = false;
          
          break;
          }
        case 'Some': {
          const v811 = v808[1];
          v809 = true;
          
          break;
          }
        }
      if (v809) {
        const v812 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v787), null);
        let v813;
        switch (v812[0]) {
          case 'None': {
            const v814 = v812[1];
            v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v815 = v812[1];
            v813 = v815;
            
            break;
            }
          }
        await stdlib.simMapSet(sim_r, 1, v787, v813);
        const v816 = v732.hardCap;
        const v817 = stdlib.lt(v750, v816);
        const v818 = v817 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v819 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v820 = v819 ? false : true;
        const v1999 = v750;
        const v2000 = v787;
        const v2001 = v820;
        const v2002 = v789;
        const v2004 = v796;
        const v2005 = stdlib.gt(v737, v753);
        const v2007 = v2005 ? v819 : false;
        if (v2007) {
          sim_r.isHalt = false;
          }
        else {
          const v2011 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2011) {
            const v2012 = 'passed              ';
            null;
            const v2013 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2014 = stdlib.sub(v796, v2013);
            sim_r.txns.push({
              kind: 'from',
              to: v719,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v2021 = v732.softCap;
            const v2022 = stdlib.ge(v750, v2021);
            if (v2022) {
              const v2023 = 'passed              ';
              null;
              const v2024 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2025 = stdlib.sub(v796, v2024);
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v2032 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v826 = v732.maxContribution;
        const v827 = stdlib.gt(v792, v826);
        if (v827) {
          await stdlib.simMapSet(sim_r, 0, v787, v787);
          await stdlib.simMapSet(sim_r, 2, v787, null);
          await stdlib.simMapSet(sim_r, 1, v787, v826);
          const v831 = stdlib.add(v750, v826);
          const v832 = v732.hardCap;
          const v834 = stdlib.lt(v831, v832);
          const v835 = v834 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          const v836 = stdlib.eq(v835, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v837 = v836 ? false : true;
          const v2075 = v831;
          const v2076 = v787;
          const v2077 = v837;
          const v2078 = v789;
          const v2080 = v796;
          const v2081 = stdlib.gt(v737, v753);
          const v2083 = v2081 ? v836 : false;
          if (v2083) {
            sim_r.isHalt = false;
            }
          else {
            const v2087 = stdlib.eq(v835, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v2087) {
              const v2088 = 'passed              ';
              null;
              const v2089 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
              const v2090 = stdlib.sub(v796, v2089);
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v2097 = v732.softCap;
              const v2098 = stdlib.ge(v831, v2097);
              if (v2098) {
                const v2099 = 'passed              ';
                null;
                const v2100 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                const v2101 = stdlib.sub(v796, v2100);
                sim_r.txns.push({
                  kind: 'from',
                  to: v719,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2108 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v843 = v732.minContribution;
          const v844 = stdlib.lt(v792, v843);
          if (v844) {
            await stdlib.simMapSet(sim_r, 0, v787, v787);
            await stdlib.simMapSet(sim_r, 2, v787, null);
            await stdlib.simMapSet(sim_r, 1, v787, v843);
            const v848 = stdlib.add(v750, v843);
            const v849 = v732.hardCap;
            const v851 = stdlib.lt(v848, v849);
            const v852 = v851 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v853 = stdlib.eq(v852, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v854 = v853 ? false : true;
            const v2151 = v848;
            const v2152 = v787;
            const v2153 = v854;
            const v2154 = v789;
            const v2156 = v796;
            const v2157 = stdlib.gt(v737, v753);
            const v2159 = v2157 ? v853 : false;
            if (v2159) {
              sim_r.isHalt = false;
              }
            else {
              const v2163 = stdlib.eq(v852, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v2163) {
                const v2164 = 'passed              ';
                null;
                const v2165 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                const v2166 = stdlib.sub(v796, v2165);
                sim_r.txns.push({
                  kind: 'from',
                  to: v719,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2173 = v732.softCap;
                const v2174 = stdlib.ge(v848, v2173);
                if (v2174) {
                  const v2175 = 'passed              ';
                  null;
                  const v2176 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                  const v2177 = stdlib.sub(v796, v2176);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v719,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v2184 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}
          else {
            await stdlib.simMapSet(sim_r, 0, v787, v787);
            await stdlib.simMapSet(sim_r, 2, v787, null);
            await stdlib.simMapSet(sim_r, 1, v787, v792);
            const v861 = stdlib.add(v750, v792);
            const v862 = v732.hardCap;
            const v864 = stdlib.lt(v861, v862);
            const v865 = v864 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v866 = stdlib.eq(v865, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v867 = v866 ? false : true;
            const v2227 = v861;
            const v2228 = v787;
            const v2229 = v867;
            const v2230 = v789;
            const v2232 = v796;
            const v2233 = stdlib.gt(v737, v753);
            const v2235 = v2233 ? v866 : false;
            if (v2235) {
              sim_r.isHalt = false;
              }
            else {
              const v2239 = stdlib.eq(v865, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v2239) {
                const v2240 = 'passed              ';
                null;
                const v2241 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                const v2242 = stdlib.sub(v796, v2241);
                sim_r.txns.push({
                  kind: 'from',
                  to: v719,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v2249 = v732.softCap;
                const v2250 = stdlib.ge(v861, v2249);
                if (v2250) {
                  const v2251 = 'passed              ';
                  null;
                  const v2252 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                  const v2253 = stdlib.sub(v796, v2252);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v719,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v2260 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc3, ctc3, ctc1, ctc3, ctc1, ctc10, ctc3, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v788], secs: v790, time: v789, didSend: v200, from: v787 } = txn1;
  undefined /* setApiDetails */;
  const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
  const v793 = stdlib.gt(v792, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v793, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v796 = stdlib.add(v760, v792);
  ;
  const v801 = v796;
  const v802 = await txn1.getOutput('Contributors_contribute', 'v801', ctc3, v801);
  if (v200) {
    stdlib.protect(ctc0, await interact.out(v788, v802), {
      at: './index.rsh:116:15:application',
      fs: ['at ./index.rsh:116:15:application call to [unknown function] (defined at: ./index.rsh:116:15:function exp)', 'at ./index.rsh:120:19:application call to "notify" (defined at: ./index.rsh:119:37:function exp)', 'at ./index.rsh:119:37:application call to [unknown function] (defined at: ./index.rsh:119:37:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v808 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v787), null);
  let v809;
  switch (v808[0]) {
    case 'None': {
      const v810 = v808[1];
      v809 = false;
      
      break;
      }
    case 'Some': {
      const v811 = v808[1];
      v809 = true;
      
      break;
      }
    }
  if (v809) {
    const v812 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v787), null);
    let v813;
    switch (v812[0]) {
      case 'None': {
        const v814 = v812[1];
        v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v815 = v812[1];
        v813 = v815;
        
        break;
        }
      }
    await stdlib.mapSet(map1, v787, v813);
    const v816 = v732.hardCap;
    const v817 = stdlib.lt(v750, v816);
    const v818 = v817 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    const v819 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v820 = v819 ? false : true;
    const v1999 = v750;
    const v2000 = v787;
    const v2001 = v820;
    const v2002 = v789;
    const v2004 = v796;
    const v2005 = stdlib.gt(v737, v753);
    const v2007 = v2005 ? v819 : false;
    if (v2007) {
      return;
      }
    else {
      const v2011 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v2011) {
        const v2012 = 'passed              ';
        null;
        const v2013 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
        const v2014 = stdlib.sub(v796, v2013);
        ;
        return;
        }
      else {
        const v2021 = v732.softCap;
        const v2022 = stdlib.ge(v750, v2021);
        if (v2022) {
          const v2023 = 'passed              ';
          null;
          const v2024 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
          const v2025 = stdlib.sub(v796, v2024);
          ;
          return;
          }
        else {
          const v2032 = 'failed              ';
          null;
          return;
          }}}}
  else {
    const v826 = v732.maxContribution;
    const v827 = stdlib.gt(v792, v826);
    if (v827) {
      await stdlib.mapSet(map0, v787, v787);
      await stdlib.mapSet(map2, v787, null);
      await stdlib.mapSet(map1, v787, v826);
      const v831 = stdlib.add(v750, v826);
      const v832 = v732.hardCap;
      const v834 = stdlib.lt(v831, v832);
      const v835 = v834 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v836 = stdlib.eq(v835, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v837 = v836 ? false : true;
      const v2075 = v831;
      const v2076 = v787;
      const v2077 = v837;
      const v2078 = v789;
      const v2080 = v796;
      const v2081 = stdlib.gt(v737, v753);
      const v2083 = v2081 ? v836 : false;
      if (v2083) {
        return;
        }
      else {
        const v2087 = stdlib.eq(v835, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v2087) {
          const v2088 = 'passed              ';
          null;
          const v2089 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
          const v2090 = stdlib.sub(v796, v2089);
          ;
          return;
          }
        else {
          const v2097 = v732.softCap;
          const v2098 = stdlib.ge(v831, v2097);
          if (v2098) {
            const v2099 = 'passed              ';
            null;
            const v2100 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
            const v2101 = stdlib.sub(v796, v2100);
            ;
            return;
            }
          else {
            const v2108 = 'failed              ';
            null;
            return;
            }}}}
    else {
      const v843 = v732.minContribution;
      const v844 = stdlib.lt(v792, v843);
      if (v844) {
        await stdlib.mapSet(map0, v787, v787);
        await stdlib.mapSet(map2, v787, null);
        await stdlib.mapSet(map1, v787, v843);
        const v848 = stdlib.add(v750, v843);
        const v849 = v732.hardCap;
        const v851 = stdlib.lt(v848, v849);
        const v852 = v851 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v853 = stdlib.eq(v852, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v854 = v853 ? false : true;
        const v2151 = v848;
        const v2152 = v787;
        const v2153 = v854;
        const v2154 = v789;
        const v2156 = v796;
        const v2157 = stdlib.gt(v737, v753);
        const v2159 = v2157 ? v853 : false;
        if (v2159) {
          return;
          }
        else {
          const v2163 = stdlib.eq(v852, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2163) {
            const v2164 = 'passed              ';
            null;
            const v2165 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2166 = stdlib.sub(v796, v2165);
            ;
            return;
            }
          else {
            const v2173 = v732.softCap;
            const v2174 = stdlib.ge(v848, v2173);
            if (v2174) {
              const v2175 = 'passed              ';
              null;
              const v2176 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2177 = stdlib.sub(v796, v2176);
              ;
              return;
              }
            else {
              const v2184 = 'failed              ';
              null;
              return;
              }}}}
      else {
        await stdlib.mapSet(map0, v787, v787);
        await stdlib.mapSet(map2, v787, null);
        await stdlib.mapSet(map1, v787, v792);
        const v861 = stdlib.add(v750, v792);
        const v862 = v732.hardCap;
        const v864 = stdlib.lt(v861, v862);
        const v865 = v864 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v866 = stdlib.eq(v865, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v867 = v866 ? false : true;
        const v2227 = v861;
        const v2228 = v787;
        const v2229 = v867;
        const v2230 = v789;
        const v2232 = v796;
        const v2233 = stdlib.gt(v737, v753);
        const v2235 = v2233 ? v866 : false;
        if (v2235) {
          return;
          }
        else {
          const v2239 = stdlib.eq(v865, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2239) {
            const v2240 = 'passed              ';
            null;
            const v2241 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v2242 = stdlib.sub(v796, v2241);
            ;
            return;
            }
          else {
            const v2249 = v732.softCap;
            const v2250 = stdlib.ge(v861, v2249);
            if (v2250) {
              const v2251 = 'passed              ';
              null;
              const v2252 = stdlib.div(v796, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v2253 = stdlib.sub(v796, v2252);
              ;
              return;
              }
            else {
              const v2260 = 'failed              ';
              null;
              return;
              }}}}}}
  
  
  };
export async function _Contributors_contributed17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contributed17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contributed17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_477: ctc6,
    Contributors_creating0_477: ctc12,
    Contributors_timedOut0_477: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v719, v1032] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1060 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:260:11:application call to [unknown function] (defined at: ./index.rsh:260:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_contributed0_477" (defined at: ./index.rsh:260:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v1070 = ['Contributors_contributed0_477', v1060];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v1032, v1070],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:260:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
      
      switch (v1090[0]) {
        case 'Contributors_contributed0_477': {
          const v1093 = v1090[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v1101 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
          const v1102 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
          const v1103 = null;
          const v1104 = await txn1.getOutput('Contributors_contributed', 'v1103', ctc0, v1103);
          
          const v1111 = 'contributed         ';
          null;
          const v2305 = v1032;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_477': {
          const v1145 = v1090[1];
          
          break;
          }
        case 'Contributors_timedOut0_477': {
          const v1197 = v1090[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
  switch (v1090[0]) {
    case 'Contributors_contributed0_477': {
      const v1093 = v1090[1];
      undefined /* setApiDetails */;
      ;
      const v1101 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
      const v1102 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
      const v1103 = null;
      const v1104 = await txn1.getOutput('Contributors_contributed', 'v1103', ctc0, v1103);
      if (v607) {
        stdlib.protect(ctc0, await interact.out(v1093, v1104), {
          at: './index.rsh:260:12:application',
          fs: ['at ./index.rsh:260:12:application call to [unknown function] (defined at: ./index.rsh:260:12:function exp)', 'at ./index.rsh:261:15:application call to "notify" (defined at: ./index.rsh:260:62:function exp)', 'at ./index.rsh:260:62:application call to [unknown function] (defined at: ./index.rsh:260:62:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v1111 = 'contributed         ';
      null;
      const v2305 = v1032;
      return;
      
      break;
      }
    case 'Contributors_creating0_477': {
      const v1145 = v1090[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_477': {
      const v1197 = v1090[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_creating17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_creating17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_creating17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Struct([['id', ctc3], ['title', ctc6], ['link', ctc7], ['description', ctc8], ['owner', ctc1], ['contractInfo', ctc9]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_477: ctc12,
    Contributors_creating0_477: ctc11,
    Contributors_timedOut0_477: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v719, v1032] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1037 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:246:11:application call to [unknown function] (defined at: ./index.rsh:246:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_creating0_477" (defined at: ./index.rsh:246:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v1056 = ['Contributors_creating0_477', v1037];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v1032, v1056],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
      
      switch (v1090[0]) {
        case 'Contributors_contributed0_477': {
          const v1093 = v1090[1];
          
          break;
          }
        case 'Contributors_creating0_477': {
          const v1145 = v1090[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v1165 = v1145[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
          const v1166 = null;
          const v1167 = await txn1.getOutput('Contributors_creating', 'v1166', ctc0, v1166);
          
          const v1179 = v1165.id;
          const v1180 = v1165.title;
          const v1181 = v1165.link;
          const v1182 = v1165.description;
          const v1183 = v1165.owner;
          const v1184 = v1165.contractInfo;
          null;
          const v2317 = v1032;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_477': {
          const v1197 = v1090[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
  switch (v1090[0]) {
    case 'Contributors_contributed0_477': {
      const v1093 = v1090[1];
      return;
      break;
      }
    case 'Contributors_creating0_477': {
      const v1145 = v1090[1];
      undefined /* setApiDetails */;
      ;
      const v1165 = v1145[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
      const v1166 = null;
      const v1167 = await txn1.getOutput('Contributors_creating', 'v1166', ctc0, v1166);
      if (v607) {
        stdlib.protect(ctc0, await interact.out(v1145, v1167), {
          at: './index.rsh:246:12:application',
          fs: ['at ./index.rsh:246:12:application call to [unknown function] (defined at: ./index.rsh:246:12:function exp)', 'at ./index.rsh:247:15:application call to "notify" (defined at: ./index.rsh:246:49:function exp)', 'at ./index.rsh:246:49:application call to [unknown function] (defined at: ./index.rsh:246:49:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v1179 = v1165.id;
      const v1180 = v1165.title;
      const v1181 = v1165.link;
      const v1182 = v1165.description;
      const v1183 = v1165.owner;
      const v1184 = v1165.contractInfo;
      null;
      const v2317 = v1032;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_477': {
      const v1197 = v1090[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_timedOut17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut17 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Contributors_contributed0_477: ctc6,
    Contributors_creating0_477: ctc12,
    Contributors_timedOut0_477: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v719, v1032] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1074 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:267:11:application call to [unknown function] (defined at: ./index.rsh:267:11:function exp)', 'at ./index.rsh:243:37:application call to "runContributors_timedOut0_477" (defined at: ./index.rsh:267:11:function exp)', 'at ./index.rsh:243:37:application call to [unknown function] (defined at: ./index.rsh:243:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v1084 = ['Contributors_timedOut0_477', v1074];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v1032, v1084],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:267:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
      
      switch (v1090[0]) {
        case 'Contributors_contributed0_477': {
          const v1093 = v1090[1];
          
          break;
          }
        case 'Contributors_creating0_477': {
          const v1145 = v1090[1];
          
          break;
          }
        case 'Contributors_timedOut0_477': {
          const v1197 = v1090[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v1238 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
          const v1239 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
          const v1240 = null;
          const v1241 = await txn1.getOutput('Contributors_timedOut', 'v1240', ctc0, v1240);
          
          const v1248 = 'timedOut            ';
          null;
          const v2329 = v1032;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn1;
  switch (v1090[0]) {
    case 'Contributors_contributed0_477': {
      const v1093 = v1090[1];
      return;
      break;
      }
    case 'Contributors_creating0_477': {
      const v1145 = v1090[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_477': {
      const v1197 = v1090[1];
      undefined /* setApiDetails */;
      ;
      const v1238 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
      const v1239 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
      const v1240 = null;
      const v1241 = await txn1.getOutput('Contributors_timedOut', 'v1240', ctc0, v1240);
      if (v607) {
        stdlib.protect(ctc0, await interact.out(v1197, v1241), {
          at: './index.rsh:267:12:application',
          fs: ['at ./index.rsh:267:12:application call to [unknown function] (defined at: ./index.rsh:267:12:function exp)', 'at ./index.rsh:268:15:application call to "notify" (defined at: ./index.rsh:267:59:function exp)', 'at ./index.rsh:267:59:application call to [unknown function] (defined at: ./index.rsh:267:59:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v1248 = 'timedOut            ';
      null;
      const v2329 = v1032;
      return;
      
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc9 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Contract;
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc8], ['link', ctc7], ['description', ctc6], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_477: ctc13,
    Contributors_creating0_477: ctc16,
    Contributors_timedOut0_477: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v708 = stdlib.protect(ctc9, interact.getProject, 'for Deployer\'s interact field getProject');
  const v718 = stdlib.protect(ctc10, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:64:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v721, time: v720, didSend: v48, from: v719 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v721, time: v720, didSend: v48, from: v719 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v719, v718],
    evt_cnt: 1,
    funcNum: 1,
    lct: v720,
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v725], secs: v727, time: v726, didSend: v57, from: v724 } = txn2;
      
      ;
      if (v725) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v725], secs: v727, time: v726, didSend: v57, from: v724 } = txn2;
  ;
  const v728 = stdlib.addressEq(v719, v724);
  stdlib.assert(v728, {
    at: './index.rsh:71:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v725) {
    const txn3 = await (ctc.sendrecv({
      args: [v719, v708],
      evt_cnt: 1,
      funcNum: 2,
      lct: v726,
      onlyIf: true,
      out_tys: [ctc9],
      pay: [stdlib.checkedBigNumberify('./index.rsh:87:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v732], secs: v734, time: v733, didSend: v66, from: v731 } = txn3;
        
        ;
        const v737 = stdlib.add(v733, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '100'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [v732], secs: v734, time: v733, didSend: v66, from: v731 } = txn3;
    ;
    const v735 = stdlib.addressEq(v719, v731);
    stdlib.assert(v735, {
      at: './index.rsh:87:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v737 = stdlib.add(v733, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '100'));
    const txn4 = await (ctc.sendrecv({
      args: [v719, v732, v733, v737],
      evt_cnt: 0,
      funcNum: 3,
      lct: v733,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v740, time: v739, didSend: v73, from: v738 } = txn4;
        
        ;
        const v742 = v732.id;
        const v743 = v732.title;
        const v744 = v732.link;
        const v745 = v732.description;
        const v746 = v732.owner;
        const v747 = await ctc.getContractInfo();
        null;
        const v750 = stdlib.checkedBigNumberify('./index.rsh:113:23:decimal', stdlib.UInt_max, '0');
        const v751 = v719;
        const v752 = false;
        const v753 = v739;
        const v754 = v733;
        const v760 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          const v765 = stdlib.gt(v737, v754);
          const v767 = v752 ? false : true;
          const v768 = v765 ? v767 : false;
          
          return v768;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v879 = v732.hardCap;
          const v880 = stdlib.lt(v750, v879);
          const v881 = v880 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          const v882 = stdlib.eq(v881, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v882) {
            const v884 = 'passed              ';
            null;
            const v886 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
            const v890 = stdlib.sub(v760, v886);
            sim_r.txns.push({
              kind: 'from',
              to: v719,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v908 = v732.softCap;
            const v909 = stdlib.ge(v750, v908);
            if (v909) {
              const v911 = 'passed              ';
              null;
              const v913 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
              const v917 = stdlib.sub(v760, v913);
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v936 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc9, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v740, time: v739, didSend: v73, from: v738 } = txn4;
    ;
    const v741 = stdlib.addressEq(v719, v738);
    stdlib.assert(v741, {
      at: './index.rsh:105:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v742 = v732.id;
    const v743 = v732.title;
    const v744 = v732.link;
    const v745 = v732.description;
    const v746 = v732.owner;
    const v747 = await ctc.getContractInfo();
    null;
    let v750 = stdlib.checkedBigNumberify('./index.rsh:113:23:decimal', stdlib.UInt_max, '0');
    let v751 = v719;
    let v752 = false;
    let v753 = v739;
    let v754 = v733;
    let v760 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      const v765 = stdlib.gt(v737, v754);
      const v767 = v752 ? false : true;
      const v768 = v765 ? v767 : false;
      
      return v768;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc11],
        timeoutAt: ['time', v737],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v719, v732, v737, v742, v746, v750, v751, v752, v753, v760],
          evt_cnt: 0,
          funcNum: 11,
          lct: v753,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:20:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v875, time: v874, didSend: v308, from: v873 } = txn6;
            
            ;
            const cv750 = v750;
            const cv751 = v751;
            const cv752 = v752;
            const cv753 = v874;
            const cv754 = v753;
            const cv760 = v760;
            
            await (async () => {
              const v750 = cv750;
              const v751 = cv751;
              const v752 = cv752;
              const v753 = cv753;
              const v754 = cv754;
              const v760 = cv760;
              
              if (await (async () => {
                const v765 = stdlib.gt(v737, v754);
                const v767 = v752 ? false : true;
                const v768 = v765 ? v767 : false;
                
                return v768;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v879 = v732.hardCap;
                const v880 = stdlib.lt(v750, v879);
                const v881 = v880 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                const v882 = stdlib.eq(v881, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                if (v882) {
                  const v884 = 'passed              ';
                  null;
                  const v886 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
                  const v890 = stdlib.sub(v760, v886);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v719,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v908 = v732.softCap;
                  const v909 = stdlib.ge(v750, v908);
                  if (v909) {
                    const v911 = 'passed              ';
                    null;
                    const v913 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
                    const v917 = stdlib.sub(v760, v913);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v719,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v936 = 'failed              ';
                    null;
                    sim_r.isHalt = false;
                    }}}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc9, ctc3, ctc3, ctc1, ctc3, ctc1, ctc10, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v875, time: v874, didSend: v308, from: v873 } = txn6;
        ;
        const v876 = stdlib.addressEq(v719, v873);
        stdlib.assert(v876, {
          at: './index.rsh:150:20:dot',
          fs: ['at ./index.rsh:149:38:application call to [unknown function] (defined at: ./index.rsh:149:38:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const cv750 = v750;
        const cv751 = v751;
        const cv752 = v752;
        const cv753 = v874;
        const cv754 = v753;
        const cv760 = v760;
        
        v750 = cv750;
        v751 = cv751;
        v752 = cv752;
        v753 = cv753;
        v754 = cv754;
        v760 = cv760;
        
        continue;
        }
      else {
        const {data: [v788], secs: v790, time: v789, didSend: v200, from: v787 } = txn5;
        undefined /* setApiDetails */;
        const v792 = v788[stdlib.checkedBigNumberify('./index.rsh:116:14:spread', stdlib.UInt_max, '0')];
        const v793 = stdlib.gt(v792, stdlib.checkedBigNumberify('./index.rsh:117:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v793, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)', 'at ./index.rsh:116:46:application call to [unknown function] (defined at: ./index.rsh:116:46:function exp)'],
          msg: 'Contribution too small',
          who: 'Deployer'
          });
        const v796 = stdlib.add(v760, v792);
        ;
        const v801 = v796;
        await txn5.getOutput('Contributors_contribute', 'v801', ctc3, v801);
        const v808 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v787), null);
        let v809;
        switch (v808[0]) {
          case 'None': {
            const v810 = v808[1];
            v809 = false;
            
            break;
            }
          case 'Some': {
            const v811 = v808[1];
            v809 = true;
            
            break;
            }
          }
        if (v809) {
          const v812 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v787), null);
          let v813;
          switch (v812[0]) {
            case 'None': {
              const v814 = v812[1];
              v813 = stdlib.checkedBigNumberify('./index.rsh:122:61:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v815 = v812[1];
              v813 = v815;
              
              break;
              }
            }
          await stdlib.mapSet(map1, v787, v813);
          const v816 = v732.hardCap;
          const v817 = stdlib.lt(v750, v816);
          const v818 = v817 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          const v819 = stdlib.eq(v818, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v820 = v819 ? false : true;
          const cv750 = v750;
          const cv751 = v787;
          const cv752 = v820;
          const cv753 = v789;
          const cv754 = v753;
          const cv760 = v796;
          
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v753 = cv753;
          v754 = cv754;
          v760 = cv760;
          
          continue;}
        else {
          const v826 = v732.maxContribution;
          const v827 = stdlib.gt(v792, v826);
          if (v827) {
            await stdlib.mapSet(map0, v787, v787);
            await stdlib.mapSet(map2, v787, null);
            await stdlib.mapSet(map1, v787, v826);
            const v831 = stdlib.add(v750, v826);
            const v832 = v732.hardCap;
            const v834 = stdlib.lt(v831, v832);
            const v835 = v834 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v836 = stdlib.eq(v835, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v837 = v836 ? false : true;
            const cv750 = v831;
            const cv751 = v787;
            const cv752 = v837;
            const cv753 = v789;
            const cv754 = v753;
            const cv760 = v796;
            
            v750 = cv750;
            v751 = cv751;
            v752 = cv752;
            v753 = cv753;
            v754 = cv754;
            v760 = cv760;
            
            continue;}
          else {
            const v843 = v732.minContribution;
            const v844 = stdlib.lt(v792, v843);
            if (v844) {
              await stdlib.mapSet(map0, v787, v787);
              await stdlib.mapSet(map2, v787, null);
              await stdlib.mapSet(map1, v787, v843);
              const v848 = stdlib.add(v750, v843);
              const v849 = v732.hardCap;
              const v851 = stdlib.lt(v848, v849);
              const v852 = v851 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              const v853 = stdlib.eq(v852, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const v854 = v853 ? false : true;
              const cv750 = v848;
              const cv751 = v787;
              const cv752 = v854;
              const cv753 = v789;
              const cv754 = v753;
              const cv760 = v796;
              
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v754 = cv754;
              v760 = cv760;
              
              continue;}
            else {
              await stdlib.mapSet(map0, v787, v787);
              await stdlib.mapSet(map2, v787, null);
              await stdlib.mapSet(map1, v787, v792);
              const v861 = stdlib.add(v750, v792);
              const v862 = v732.hardCap;
              const v864 = stdlib.lt(v861, v862);
              const v865 = v864 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              const v866 = stdlib.eq(v865, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const v867 = v866 ? false : true;
              const cv750 = v861;
              const cv751 = v787;
              const cv752 = v867;
              const cv753 = v789;
              const cv754 = v753;
              const cv760 = v796;
              
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v754 = cv754;
              v760 = cv760;
              
              continue;}}}}
      
      }
    const v879 = v732.hardCap;
    const v880 = stdlib.lt(v750, v879);
    const v881 = v880 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    const v882 = stdlib.eq(v881, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v882) {
      const v884 = 'passed              ';
      null;
      const v886 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:156:32:decimal', stdlib.UInt_max, '100'));
      const v890 = stdlib.sub(v760, v886);
      ;
      const txn5 = await (ctc.sendrecv({
        args: [v719, v746, v890],
        evt_cnt: 0,
        funcNum: 5,
        lct: v753,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v893, time: v892, didSend: v327, from: v891 } = txn5;
          
          ;
          const v900 = stdlib.sub(v890, v890);
          sim_r.txns.push({
            kind: 'from',
            to: v746,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc1, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v893, time: v892, didSend: v327, from: v891 } = txn5;
      ;
      const v894 = stdlib.addressEq(v719, v891);
      stdlib.assert(v894, {
        at: './index.rsh:158:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v900 = stdlib.sub(v890, v890);
      ;
      ;
      return;
      
      
      }
    else {
      const v908 = v732.softCap;
      const v909 = stdlib.ge(v750, v908);
      if (v909) {
        const v911 = 'passed              ';
        null;
        const v913 = stdlib.div(v760, stdlib.checkedBigNumberify('./index.rsh:186:34:decimal', stdlib.UInt_max, '100'));
        const v917 = stdlib.sub(v760, v913);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v719, v746, v917],
          evt_cnt: 0,
          funcNum: 6,
          lct: v753,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:188:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v920, time: v919, didSend: v348, from: v918 } = txn5;
            
            ;
            const v927 = stdlib.sub(v917, v917);
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v719,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc1, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v920, time: v919, didSend: v348, from: v918 } = txn5;
        ;
        const v921 = stdlib.addressEq(v719, v918);
        stdlib.assert(v921, {
          at: './index.rsh:188:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v927 = stdlib.sub(v917, v917);
        ;
        ;
        return;
        
        
        }
      else {
        const v936 = 'failed              ';
        null;
        const txn5 = await (ctc.sendrecv({
          args: [v719, v742, v751, v760],
          evt_cnt: 0,
          funcNum: 7,
          lct: v753,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:220:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v939, time: v938, didSend: v361, from: v937 } = txn5;
            
            ;
            const v942 = v760;
            const v943 = v938;
            const v950 = v760;
            
            if (await (async () => {
              const v954 = stdlib.gt(v942, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
              
              return v954;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc3, ctc1, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v939, time: v938, didSend: v361, from: v937 } = txn5;
        ;
        const v940 = stdlib.addressEq(v719, v937);
        stdlib.assert(v940, {
          at: './index.rsh:220:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v942 = v760;
        let v943 = v938;
        let v950 = v760;
        
        while (await (async () => {
          const v954 = stdlib.gt(v942, stdlib.checkedBigNumberify('./index.rsh:223:35:decimal', stdlib.UInt_max, '0'));
          
          return v954;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc12],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v961], secs: v963, time: v962, didSend: v397, from: v960 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v966 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v960), null);
          let v967;
          switch (v966[0]) {
            case 'None': {
              const v968 = v966[1];
              v967 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v969 = v966[1];
              v967 = v969;
              
              break;
              }
            }
          const v970 = stdlib.ge(v950, v967);
          const v971 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v960), null);
          let v972;
          switch (v971[0]) {
            case 'None': {
              const v973 = v971[1];
              v972 = false;
              
              break;
              }
            case 'Some': {
              const v974 = v971[1];
              v972 = true;
              
              break;
              }
            }
          const v975 = v970 ? v972 : false;
          if (v975) {
            let v977;
            switch (v966[0]) {
              case 'None': {
                const v978 = v966[1];
                v977 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v979 = v966[1];
                v977 = v979;
                
                break;
                }
              }
            const v980 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v960), null);
            let v981;
            switch (v980[0]) {
              case 'None': {
                const v982 = v980[1];
                v981 = v751;
                
                break;
                }
              case 'Some': {
                const v983 = v980[1];
                v981 = v983;
                
                break;
                }
              }
            const v987 = stdlib.sub(v950, v977);
            ;
            await stdlib.mapSet(map2, v960, undefined /* Nothing */);
            const v990 = 'refundPassed        ';
            null;
            const v991 = true;
            await txn6.getOutput('Contributors_claimRefund', 'v991', ctc10, v991);
            let v999;
            switch (v966[0]) {
              case 'None': {
                const v1000 = v966[1];
                v999 = stdlib.checkedBigNumberify('./index.rsh:218:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1001 = v966[1];
                v999 = v1001;
                
                break;
                }
              }
            const v1002 = stdlib.sub(v987, v999);
            const cv942 = v1002;
            const cv943 = v962;
            const cv950 = v987;
            
            v942 = cv942;
            v943 = cv943;
            v950 = cv950;
            
            continue;}
          else {
            const v1005 = 'refundFailed        ';
            null;
            const v1006 = false;
            await txn6.getOutput('Contributors_claimRefund', 'v1006', ctc10, v1006);
            const cv942 = v942;
            const cv943 = v962;
            const cv950 = v950;
            
            v942 = cv942;
            v943 = cv943;
            v950 = cv950;
            
            continue;}
          
          }
        ;
        return;
        
        
        }}
    
    
    
    }
  else {
    const txn3 = await (ctc.sendrecv({
      args: [v719],
      evt_cnt: 0,
      funcNum: 12,
      lct: v726,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:242:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1022, time: v1021, didSend: v467, from: v1020 } = txn3;
        
        ;
        const v1024 = true;
        const v1025 = v1021;
        const v1032 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v1024;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1022, time: v1021, didSend: v467, from: v1020 } = txn3;
    ;
    const v1023 = stdlib.addressEq(v719, v1020);
    stdlib.assert(v1023, {
      at: './index.rsh:242:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    let v1024 = true;
    let v1025 = v1021;
    let v1032 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v1024;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 14,
        out_tys: [ctc17],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1090], secs: v1092, time: v1091, didSend: v607, from: v1089 } = txn4;
      switch (v1090[0]) {
        case 'Contributors_contributed0_477': {
          const v1093 = v1090[1];
          undefined /* setApiDetails */;
          ;
          const v1101 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '0')];
          const v1102 = v1093[stdlib.checkedBigNumberify('./index.rsh:260:11:spread', stdlib.UInt_max, '1')];
          const v1103 = null;
          await txn4.getOutput('Contributors_contributed', 'v1103', ctc0, v1103);
          const v1111 = 'contributed         ';
          null;
          const cv1024 = true;
          const cv1025 = v1091;
          const cv1032 = v1032;
          
          v1024 = cv1024;
          v1025 = cv1025;
          v1032 = cv1032;
          
          continue;
          break;
          }
        case 'Contributors_creating0_477': {
          const v1145 = v1090[1];
          undefined /* setApiDetails */;
          ;
          const v1165 = v1145[stdlib.checkedBigNumberify('./index.rsh:246:11:spread', stdlib.UInt_max, '0')];
          const v1166 = null;
          await txn4.getOutput('Contributors_creating', 'v1166', ctc0, v1166);
          const v1179 = v1165.id;
          const v1180 = v1165.title;
          const v1181 = v1165.link;
          const v1182 = v1165.description;
          const v1183 = v1165.owner;
          const v1184 = v1165.contractInfo;
          null;
          const cv1024 = true;
          const cv1025 = v1091;
          const cv1032 = v1032;
          
          v1024 = cv1024;
          v1025 = cv1025;
          v1032 = cv1032;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_477': {
          const v1197 = v1090[1];
          undefined /* setApiDetails */;
          ;
          const v1238 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '0')];
          const v1239 = v1197[stdlib.checkedBigNumberify('./index.rsh:267:11:spread', stdlib.UInt_max, '1')];
          const v1240 = null;
          await txn4.getOutput('Contributors_timedOut', 'v1240', ctc0, v1240);
          const v1248 = 'timedOut            ';
          null;
          const cv1024 = true;
          const cv1025 = v1091;
          const cv1032 = v1032;
          
          v1024 = cv1024;
          v1025 = cv1025;
          v1032 = cv1032;
          
          continue;
          break;
          }
        }
      
      }
    ;
    return;
    
    
    }
  
  
  
  };
export async function Contributors_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _Contributors_claimRefund12(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 13) {return _Contributors_contribute13(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_contributed17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_creating(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_creating17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 17) {return _Contributors_timedOut17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_claimRefund()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`]
    },
  appApproval: `BiAhAAEgArQBBwwOKgMFDcYDpgPOAwlkCCu+8aazB4z29tAJnPPTjQv+AoKc4uUGEdYD9gOfBKcESAZA/QImBwEAAQEAAQIBAwEEGLUOO3JwYXNzZWQAAAAAAAAAAAAAAAAAACI1ADEYQQtvKmRJIls1ASERWzUCMRkjEkEACjEAKCESr2ZCCzs2GgAXSUEAeCI1BCM1BkkhEwxAAEBJIRQMQAAhSSEVDEAACiEVEkQ2GgFCAmEhFBJENhoBNf8pNP9QQgBwIRMSRDYaATYaAlA1/ys0/1AhFq9QQgBYSSEXDEAAGCEXEkQ2GgE2GgJQNf8oNP9QIRavUEIAOYGWudjPBRJEKkIEgTYaAhc1BDYaAzYaARdJIQUMQAYxSYELDEAB5EkhBgxAAWJJIQcMQAEpIQcSRCEYNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8kWzX+STUFNf2ABJQ87Ck0/VCwNP0iVUkjDEAApUklDEAASSUSRDT9VwEQNfyACAAAAAAAAATYsCo1B4AYUISrsHRpbWVkT3V0AAAAAAAAAAAAAAAANPxXAAhQNPxXCAhQsDT/IzIGNP5CCZRINP0jgY4DWDX8NPw1+4AIAAAAAAAABI6wKjUHgAQFrLtHNPtXAAhQNPtXCBRQNPtXHJZQNPtXsrRQNPuB5gIkWFA0+4GGAyERWFCwNP8jMgY0/kIJPkg0/VcBEDX8gAgAAAAAAAAET7AqNQeAGFCEq7Bjb250cmlidXRlZAAAAAAAAAAAADT8VwAIUDT8VwgIULA0/yMyBjT+Qgj3IQYSRCEHNAESRDQESSISTDQCEhFEKGRJNQM1/4AEyqvON7A0/zEAEkQ0/yMyBiJCCMVIIQs0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSVcAIDX/IQxbNf6ABOPZNjWwMgY0/g9ENP8xABJENP80AyQhDVg0/jQDIQ5bNAMhGSRYNAMhGls0A4H+AyRYNAOBngQjWBcyBjQDIRtbNAMhHFtCBqVJIQ8MQAP5SYEKDEACc0ghCzQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSkpJVwAgNf8kIQ1YNf4hDFs1/SEOWzX8IRkkWDX7IRpbNfohG1s1+Uk1BTX4gAQ36eMgNPhQsDIGNP0MRDT4F0k19yINRDQDIRxbNPcINfY094gId4AIAAAAAAAAAyE09hZQsDT2FjUHMQCICE9XKgFJNfQiVUAABiI19UIABiM19UIAADT1QQBiMQCICC5XIQlJNfMiVUAABiI19EIADDTzI1tJNfI19EIAADEAKDEAiAgJKTT0FlA180lXACE081BMVyoBUGY0/zT+NP00/DT7NPoxACIjNPo0/iEEWwxNIxMyBjT5NPZCBYU0/oHaAls19DT3NPQNQQBrMQAoMQCIB7kpMQBQNfNXIQo080xQZjEAKDEAiAejIyEITFZmMQAoMQCIB5UpNPQWUDXzSVcAITTzUExXKgFQZjT6NPQINfM0/zT+NP00/DT7NPMxACIjNPM0/iEEWwxNIxMyBjT5NPZCBQo0/oHiAls18zT3NPMMQQBrMQAoMQCIBz4pMQBQNfJXIQo08kxQZjEAKDEAiAcoIyEITFZmMQAoMQCIBxopNPMWUDXySVcAITTyUExXKgFQZjT6NPMINfI0/zT+NP00/DT7NPIxACIjNPI0/iEEWwxNIxMyBjT5NPZCBI8xACgxAIgG0ykxAFA18lchCjTyTFBmMQAoMQCIBr0jIQhMVmYxACgxAIgGryk09xZQNfJJVwAhNPJQTFcqAVBmNPo09wg18jT/NP40/TT8NPs08jEAIiM08jT+IQRbDE0jEzIGNPk09kIEJEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKCA1/YFQWzX8STUFNfuABIXjoNA0+1CwMQCIBjBXIQlJNfoiVUAABiI1+UIADDT6I1tJNfg1+UIAADEAiAYOVyoBSTX3IlVAAAYiNfhCAAYjNfhCAAA0/DT5DzT4EEEAuzT6IlVAAAYiNfdCAAw0+iNbSTX2NfdCAAAxAIgFzlcAIUk19SJVQAAHNP019kIADTT1VwEgSTX0NfZCAAA0/DT3CTX1sSKyATT3sggjshA09rIHszEAKDEAiAWQIiEITFZmgBi1DjtycmVmdW5kUGFzc2VkAAAAAAAAAAA0/hZQsIAJAAAAAAAAA98BsCk1BzT6IlVAAAYiNfRCAAw0+iNbSTXzNfRCAAA0/zT+NP009TT0CTIGNPVCBECAGLUOO3JyZWZ1bmRGYWlsZWQAAAAAAAAAADT+FlCwgAkAAAAAAAAD7gCwKDUHNP80/jT9NAMhHVsyBjT8QgQAIQUSRCEPNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hHVs1/oAE4huzqbA0/zEAEkQ0/zQDJFs0A1coIDT+MgY0/kIDukkhCQxAAU1JIQoMQAC1SSEeDEAAV0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IR9bNf6ABGG0rAywNP8xABJEsSKyATT+sggjshA0A1cgILIHs7EisgE0/kkJsggjshA0/7IHs0ID0UghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IR9bNf6ABMyZklywNP8xABJEsSKyATT+sggjshA0A1cgILIHs7EisgE0/kkJsggjshA0/7IHs0IDeiEJEkQhCTQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUEk1A0lXACA1/yQhDVg1/oAEp2XEtLA0/zEAEkQ0/oG8AVs1/TT+geoCJFg1/IAEKIdoiTT9FlA0/oGSA4EUWFA0/lfEllA0/lcAtFA0/FAxGBZQsDT/NP40AyEOWzT9NPwiNP8iMgY0AyEMWyJCAQtJIwxAANJJJQxAAGxIJTQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQU1/oAEXcQYvzT+ULA0/zEAEkQyBiEQCDX9NP80/lAyBhZQNP0WUChLAVcAf2cpSwFXf39nK0sBV/5/ZycESwEhIIFZWGdIIQk1ATIGNQJCAo1IIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABA+/xjQ0/hZRBwhQsDT/MQASRDT+QQAUNP8oSwFXACBnSCU1ATIGNQJCAkI0/yhLAVcAIGdIIQc1ATIGNQJCAi1IgaCNBogChiI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCAfo1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPc0/g00/BQQQQBcNPU09lA09xZQNPgWUDT5UDT6FlA0+1A0/BZRBwhQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBISCBf1hnJwVLAYH8A4EzWGdIIQs1ATIGNQJCAXwiIzT6NPYhBFsMTSISQQBBJwY0+BZQsDT/IRAKNfQ0/zT0CTXzsSKyATT0sggjshA09bIHszT1NPlQNPMWUChLAVcASGdIIQo1ATIGNQJCASs0+jT2gYoDWw9BAEEnBjT4FlCwNP8hEAo19DT/NPQJNfOxIrIBNPSyCCOyEDT1sgezNPU0+VA08xZQKEsBVwBIZ0ghBTUBMgY1AkIA3oAYtQ47cmZhaWxlZAAAAAAAAAAAAAAAAAAANPgWULA09TT4FlA0+1A0/xZQKEsBVwBQZ0ghDzUBMgY1AkIAnzX/Nf41/TX8Nfs1+jT9Ig1BACQ0+jT7FlA0/FA0/RZQNP8WUChLAVcAWGdIIQY1ATIGNQJCAGixIrIBNP+yCCOyEDT6sgezQgA5Nf81/jX9Nfw0/UEAGTT8NP8WUChLAVcAKGdIIRg1ATIGNQJCAC+xIrIBNP+yCCOyEDT8sgezQgAAMRkhChJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEeMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCESr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 5,
  stateSize: 559,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v725",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v788",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T38",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_contributed0_477",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T9",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T8",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T36",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T37",
                    "name": "_Contributors_creating0_477",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_timedOut0_477",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1090",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem5",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hardCap",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_minContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_softCap",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes20",
                        "name": "elem0",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v732",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v961",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1006",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1103",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1166",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1240",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v801",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v991",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "create",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "that",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Contributors_claimRefund",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Contributors_contribute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Contributors_contributed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes20",
                "name": "elem0",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T10",
            "name": "title",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes22",
                "name": "elem4",
                "type": "bytes22"
              }
            ],
            "internalType": "struct T9",
            "name": "link",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem5",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T8",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "contractInfo",
            "type": "address"
          }
        ],
        "internalType": "struct T36",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Contributors_creating",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Contributors_timedOut",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v725",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v788",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T38",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_contributed0_477",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes20",
                                "name": "elem0",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T9",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T8",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T36",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T37",
                    "name": "_Contributors_creating0_477",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T35",
                    "name": "_Contributors_timedOut0_477",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1090",
                "type": "tuple"
              }
            ],
            "internalType": "struct T39",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes20",
                        "name": "elem5",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hardCap",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_link",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_maxContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_minContribution",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_softCap",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes20",
                        "name": "elem0",
                        "type": "bytes20"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v732",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v961",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620046ce380380620046ce8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b614472806200025c6000396000f3fe60806040526004361061012d5760003560e01c80638b9fadc8116100a5578063bf2c5b241161006c578063bf2c5b24146102c2578063c5cfa72e146102d5578063c7980037146102e8578063cadc2e7a146102fb578063d13dd75314610328578063ec4b54291461033b57005b80638b9fadc8146102535780638e31476914610266578063972b4448146102795780639a3e39121461028c578063ab53f2c61461029f57005b80635bc7f724116100f45780635bc7f724146101c05780636172e590146101e35780636d700906146101f657806373b4522c146101fe578063817d57f314610211578063832307571461023e57005b806311faee8c1461013657806318e67cf3146101495780631e93b0f11461015c5780633bc5b7bf1461018057806355887919146101ad57005b3661013457005b005b610134610144366004613367565b61034e565b610134610157366004613367565b610372565b34801561016857600080fd5b506003545b6040519081526020015b60405180910390f35b34801561018c57600080fd5b506101a061019b36600461339f565b610392565b60405161017791906133e2565b6101346101bb366004613367565b6103a9565b6101d36101ce36600461341a565b6103c9565b6040519015158152602001610177565b6101d36101f136600461341a565b61040f565b6101d3610458565b61013461020c366004613367565b610484565b34801561021d57600080fd5b5061023161022c36600461339f565b6104a4565b604051610177919061343c565b34801561024a57600080fd5b5060015461016d565b610134610261366004613367565b6104b5565b610134610274366004613367565b6104d5565b61016d61028736600461346e565b6104f5565b61013461029a366004613367565b610525565b3480156102ab57600080fd5b506102b4610545565b604051610177929190613487565b6101346102d0366004613367565b6105e2565b6101d36102e33660046137de565b610602565b6101346102f6366004613367565b61063d565b34801561030757600080fd5b5061031b61031636600461339f565b61065d565b60405161017791906137fb565b61013461033636600461382b565b61066e565b61013461034936600461383e565b61068e565b610356612cc8565b61036e6103683684900384018461385f565b826106ae565b5050565b61037a612cc8565b61036e61038c368490038401846138ee565b82610843565b61039a612cf6565b6103a382610dbb565b92915050565b6103b1612cc8565b61036e6103c33684900384018461390a565b82610e82565b60006103d3612d19565b6020818101805151600090528051518201518690525151810151018390526103f9612cc8565b6104038282611561565b60400151949350505050565b6000610419612d19565b602081810180515160029052805151606090810151879052905151015101839052610442612cc8565b61044c8282611561565b60800151949350505050565b6000610462612d38565b602081015160009052610473612cc8565b61047d8282610843565b5192915050565b61048c612cc8565b61036e61049e3684900384018461385f565b82611968565b6104ac612cf6565b6103a382611b7f565b6104bd612cc8565b61036e6104cf3684900384018461385f565b82611c33565b6104dd612cc8565b61036e6104ef3684900384018461385f565b82611e12565b60006104ff612d62565b602081015151839052610510612cc8565b61051a8282610e82565b602001519392505050565b61052d612cc8565b61036e61053f368490038401846138ee565b82611fe6565b60006060600054600280805461055a90613961565b80601f016020809104026020016040519081016040528092919081815260200182805461058690613961565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050509050915091509091565b6105ea612cc8565b61036e6105fc3684900384018461385f565b826121ae565b600061060c612d19565b6020810180515160019052515160400151839052610628612cc8565b6106328282611561565b606001519392505050565b610645612cc8565b61036e6106573684900384018461385f565b82612338565b610665612cf6565b6103a382612465565b610676612cc8565b61036e610688368490038401846139c6565b82611561565b610696612cc8565b61036e6106a836849003840184613a83565b82612513565b6106be600e60005414602f6126d7565b81516106d99015806106d257508251600154145b60306126d7565b6000808055600280546106eb90613961565b80601f016020809104026020016040519081016040528092919081815260200182805461071790613961565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190613b61565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33846040516107af929190613b8f565b60405180910390a16107c33415602d6126d7565b80516107db906001600160a01b03163314602e6126d7565b604080516060808201835260008284018181528352835191820184528082526020808301829052828501829052808401928352855184516001600160a01b03909116905282516001905282514391015290519092019190915261083d816126fc565b50505050565b610853600c6000541460216126d7565b815161086e90158061086757508251600154145b60226126d7565b60008080556002805461088090613961565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac90613961565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b50505050508060200190518101906109119190613bb7565b905061091b612d8f565b7f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b6338560405161094c929190613c44565b60405180910390a1610960341560206126d7565b61096933612465565b815260008151516001811115610981576109816133bc565b141561099357600060208201526109c3565b600181515160018111156109a9576109a96133bc565b14156109c357805160409081015190820181905260208201525b60006109ce33611b7f565b5160018111156109e0576109e06133bc565b14156109f25760006060820152610a1d565b60016109fd33611b7f565b516001811115610a0f57610a0f6133bc565b1415610a1d57600160608201525b806020015182608001511015610a34576000610a3a565b80606001515b15610cd75760008151516001811115610a5557610a556133bc565b1415610a675760006080820152610a96565b60018151516001811115610a7d57610a7d6133bc565b1415610a965780516040015160a0820181905260808201525b6000610aa133610dbb565b516001811115610ab357610ab36133bc565b1415610ad15760408201516001600160a01b031660c0820152610b17565b6001610adc33610dbb565b516001811115610aee57610aee6133bc565b1415610b1757610afd33610dbb565b604001516001600160a01b031660e0820181905260c08201525b80608001518260800151610b2b9190613c84565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b71573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516b1c99599d5b9914185cdcd95960a21b90525190840151915160008051602061441d83398151915292610bc99291613c9b565b60405180910390a1604051600181527fd36c07a24c8f207e4311d919f4013b0c064552ad0e34727211eecdbfbc76c6119060200160405180910390a16001835260008151516001811115610c1f57610c1f6133bc565b1415610c32576000610140820152610c63565b60018151516001811115610c4857610c486133bc565b1415610c635780516040015161016082018190526101408201525b610c6b612e47565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216910152610140820151610100830151610cab9190613c84565b6020808301805192909252815143910152610100830151905160400152610cd1816127d6565b5061083d565b610180810180516b1c99599d5b9911985a5b195960a21b905251602083015160405160008051602061441d83398151915292610d14929091613c9b565b60405180910390a1604051600081527fa86ccbc3e1bfe58ea03c35d09178babaf5627752d3152ac479620cce4719270b9060200160405180910390a160008352610d5c612e47565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608501518184018051919091528051439201919091526080850151905190910152610db4816127d6565b5050505050565b610dc3612cf6565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610df257610df26133bc565b1415610e72576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610e3357610e336133bc565b6001811115610e4457610e446133bc565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610e92600d6000541460256126d7565b8151610ead901580610ea657508251600154145b60266126d7565b600080805560028054610ebf90613961565b80601f0160208091040260200160405190810160405280929190818152602001828054610eeb90613961565b8015610f385780601f10610f0d57610100808354040283529160200191610f38565b820191906000526020600020905b815481529060010190602001808311610f1b57829003601f168201915b5050505050806020019051810190610f509190613e24565b9050610f946040518060e001604052806000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b610fa58260400151431060276126d7565b60408051338152855160208083019190915286015151518183015290517f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f29181900360600190a16020840151515161100090151560236126d7565b602084015151516101208301516110179190613ed2565b81526020840151515161102d90341460246126d7565b80516040519081527f5ecacdfac365971c8d6a7048c06655befa2c5feb4ac92f20fd03a050673e22449060200160405180910390a180516020840152600061107433611b7f565b516001811115611086576110866133bc565b141561109857600060208201526110c3565b60016110a333611b7f565b5160018111156110b5576110b56133bc565b14156110c357600160208201525b8060200151156112205760006110d833612465565b5160018111156110ea576110ea6133bc565b14156110fc576000604082015261113a565b600161110733612465565b516001811115611119576111196133bc565b141561113a5761112833612465565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff19166001908117825591830151910155611167612e94565b825181516001600160a01b0391821690526020808501805184518301526040808701518551909101526060808701518551909101526080808701518551941693019290925260a085018051828501805191909152513390830152915101519051600191116111d65760006111d9565b60015b146111e55760016111e8565b60005b6020820180519115156040909201919091528051436060909101526101008401518151608001528251905160a00152610cd1816128ae565b602080830151608001519085015151511115611324573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160800151910181905560a08301516112a89190613ed2565b60808201526112b5612e94565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519091015260808087015185519416938101939093529184018051828501805191909152513390830152915101519051600191116111d65760006111d9565b60208083015160a00151908501515151101561142b573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160a09081015191909201819055908301516113af9190613ed2565b60a08201526113bc612e94565b825181516001600160a01b0391821690526020808501805184518301526040808701518551909101526060808701518551909101526080808701518551941693019290925260a084018051828501805191909152513390830152915101519051600191116111d65760006111d9565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff191683178155908601515151910181905560a083015161149b9190613ed2565b60c08201526114a8612e94565b825181516001600160a01b0391821690526020808501805184518301526040808701518551909101526060808701518551909101526080808701518551941693019290925260c0840180518285018051919091525133908301529151015190516001911161151757600061151a565b60015b14611526576001611529565b60005b6020820180519115156040909201919091528051436060909101526101008401518151608001528251905160a00152610db4816128ae565b61157160116000541460346126d7565b815161158c90158061158557508251600154145b60356126d7565b60008080556002805461159e90613961565b80601f01602080910402602001604051908101604052809291908181526020018280546115ca90613961565b80156116175780601f106115ec57610100808354040283529160200191611617565b820191906000526020600020905b8154815290600101906020018083116115fa57829003601f168201915b505050505080602001905181019061162f9190613eea565b9050611639612ef0565b7f22eceeaaff2766f0b2c4af78eb81d3cbb469fd21d73b1fe42c7ed512b01c842f338560405161166a929190613fa5565b60405180910390a1600060208501515151600281111561168c5761168c6133bc565b14156117b75760208085015151015181526116a9341560316126d7565b604051600081527fbc53cfeed0d9f8b6c0d9dddd88593d2f5e5c6f8214620cf3302877ea7e68e5dc9060200160405180910390a16000604084810191909152602082810180516a18dbdb9d1c9a589d5d195960aa1b9052518351805190830151845192516001600160601b031916835292820152918201527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf3906060015b60405180910390a16040805160608082018352600082840181815283528351918201845280825260208083018290529382015291810191909152825181516001600160a01b03909116905260208082018051600190528051439083015290840151905160400152610cd1816126fc565b60016020850151515160028111156117d1576117d16133bc565b141561188757602084015151604090810151908201526117f3341560326126d7565b604051600081527f53d943d92c19adb28df6f5d11a0acd39286d4c434b760a608da01836db52a49a9060200160405180910390a1600060608085019190915260408083015151805160208201518284015194830151608084015160a09094015194517f5a31e291c4809d043f9e9d4219376d8d7ffd40f7d224c6f958ce7758458b194d96611747969495939490939161407a565b60026020850151515160028111156118a1576118a16133bc565b141561083d57602084015151606090810151908201526118c3341560336126d7565b604051600081527f6b9f4278b26d322580bb4a5e59b00d03b67656efff7f8886acf38fd4da3388ad9060200160405180910390a1600060808481019190915281018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101611747565b61197860036000541460126126d7565b815161199390158061198c57508251600154145b60136126d7565b6000808055600280546119a590613961565b80601f01602080910402602001604051908101604052809291908181526020018280546119d190613961565b8015611a1e5780601f106119f357610100808354040283529160200191611a1e565b820191906000526020600020905b815481529060010190602001808311611a0157829003601f168201915b5050505050806020019051810190611a3691906140d4565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63384604051611a69929190613b8f565b60405180910390a1611a7d341560106126d7565b8051611a95906001600160a01b0316331460116126d7565b60208101516040808201516101008301516060840151845160c09095015193517fd8d5d178d7b3e8cb359428334fdd1811a327db94fe043e010fb363fde503837e95611ae4959091309061407a565b60405180910390a1611af4612e94565b815181516001600160a01b039182169052602080840180518451830152606080860151855160409081019190915282518101518651830152915160c001518551908516608091820152838601805160009081905288518251971696909501959095528451830184905284514392019190915290850151835190910152905160a0015261083d816128ae565b611b87612cf6565b60016001600160a01b03831660009081526006602052604090205460ff166001811115611bb657611bb66133bc565b1415610e72576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611bf757611bf76133bc565b6001811115611c0857611c086133bc565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b611c43600d60005414602a6126d7565b8151611c5e901580611c5757508251600154145b602b6126d7565b600080805560028054611c7090613961565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9c90613961565b8015611ce95780601f10611cbe57610100808354040283529160200191611ce9565b820191906000526020600020905b815481529060010190602001808311611ccc57829003601f168201915b5050505050806020019051810190611d019190613e24565b9050611d158160400151431015602c6126d7565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503384604051611d46929190613b8f565b60405180910390a1611d5a341560286126d7565b8051611d72906001600160a01b0316331460296126d7565b611d7a612e94565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a08088015185880180519190915260c089015181519716969095019590955260e0870151845190151593019290925282514391015261010085015182519091015261012084015190519091015261083d816128ae565b611e2260056000541460166126d7565b8151611e3d901580611e3657508251600154145b60176126d7565b600080805560028054611e4f90613961565b80601f0160208091040260200160405190810160405280929190818152602001828054611e7b90613961565b8015611ec85780601f10611e9d57610100808354040283529160200191611ec8565b820191906000526020600020905b815481529060010190602001808311611eab57829003601f168201915b5050505050806020019051810190611ee091906141a7565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051611f13929190613b8f565b60405180910390a1611f27341560146126d7565b8051611f3f906001600160a01b0316331460156126d7565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015611f80573d6000803e3d6000fd5b50805160408201516001600160a01b03909116906108fc90611fa29080613c84565b6040518115909202916000818181858888f19350505050158015611fca573d6000803e3d6000fd5b5060008080556001819055611fe190600290612f61565b505050565b611ff6600160005414600a6126d7565b815161201190158061200a57508251600154145b600b6126d7565b60008080556002805461202390613961565b80601f016020809104026020016040519081016040528092919081815260200182805461204f90613961565b801561209c5780601f106120715761010080835404028352916020019161209c565b820191906000526020600020905b81548152906001019060200180831161207f57829003601f168201915b50505050508060200190518101906120b49190613b61565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533846040516120e7929190613c44565b60405180910390a16120fb341560086126d7565b8051612113906001600160a01b0316331460096126d7565b602083015151156121765760408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b60405160208183030381529060405260029080519060200190610db4929190612f9b565b60408051602081019091526000815281516001600160a01b0316808252600e6000554360015560408051602081019290925201612152565b6121be600960005414601e6126d7565b81516121d99015806121d257508251600154145b601f6126d7565b6000808055600280546121eb90613961565b80601f016020809104026020016040519081016040528092919081815260200182805461221790613961565b80156122645780601f1061223957610100808354040283529160200191612264565b820191906000526020600020905b81548152906001019060200180831161224757829003601f168201915b505050505080602001905181019061227c91906141c3565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33846040516122af929190613b8f565b60405180910390a16122c33415601c6126d7565b80516122db906001600160a01b03163314601d6126d7565b6122e3612e47565b815181516001600160a01b039182169052602080840151835182015260408085015184519316928101929092526060840180518285018051919091528051439301929092525190519091015261083d816127d6565b612348600760005414601a6126d7565b815161236390158061235c57508251600154145b601b6126d7565b60008080556002805461237590613961565b80601f01602080910402602001604051908101604052809291908181526020018280546123a190613961565b80156123ee5780601f106123c3576101008083540402835291602001916123ee565b820191906000526020600020905b8154815290600101906020018083116123d157829003601f168201915b505050505080602001905181019061240691906141a7565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051612439929190613b8f565b60405180910390a161244d341560186126d7565b8051611f3f906001600160a01b0316331460196126d7565b61246d612cf6565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561249c5761249c6133bc565b1415610e72576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156124dd576124dd6133bc565b60018111156124ee576124ee6133bc565b81528154610100900460ff161515602082015260019091015460409091015292915050565b612523600260005414600e6126d7565b815161253e90158061253757508251600154145b600f6126d7565b60008080556002805461255090613961565b80601f016020809104026020016040519081016040528092919081815260200182805461257c90613961565b80156125c95780601f1061259e576101008083540402835291602001916125c9565b820191906000526020600020905b8154815290600101906020018083116125ac57829003601f168201915b50505050508060200190518101906125e19190613b61565b90506125f96040518060200160405280600081525090565b7fcb3249930622f9383132fcb6b6dce9e421828f4e568a511db48a99b5977a69f5338560405161262a9291906142ca565b60405180910390a161263e3415600c6126d7565b8151612656906001600160a01b03163314600d6126d7565b612661606443613ed2565b815261266b61301f565b82516001600160a01b031681526020808601515181830152436040808401829052845160608501526003600055600191909155516126ab918391016142f8565b604051602081830303815290604052600290805190602001906126cf929190612f9b565b505050505050565b8161036e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561277957604080518082018252600080825260208083018281528551516001600160a01b0316808552868301518601518252601190935543600155845191820192909252905192810192909252906060015b60405160208183030381529060405260029080519060200190611fe1929190612f9b565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156127bc573d6000803e3d6000fd5b50600080805560018190556127d390600290612f61565b50565b60208101515115612779576128256040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528388018051516060808a0191825291518401516080808b01918252600c60005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c001612755565b6128b6613056565b602082015160800151825160400151116128d15760006128e8565b8160200151604001516128e55760016128e8565b60005b156129b1576128f561308f565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152865160809081015185169086015282870180515160a080880191909152815185015190951660c08701528051830151151560e08701528051909101516101008601525190920151610120840152600d60005543600155905161298d91839101614339565b6040516020818303038152906040526002908051906020019061083d929190612f9b565b600082600001516020015160200151836020015160000151106129d55760006129d8565b60015b1415612ae4578051651c185cdcd95960d21b9052805182516060015160405160008051602061441d83398151915292612a12929091613c9b565b60405180910390a16064826020015160a00151612a2f91906143cb565b602080830182905283015160a00151612a489190613c84565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612a8d573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b039081168652885160800151169091528585015190526005909155436001559151909161298d918391016143ed565b815160209081015160e00151908301515110612c045760608082018051651c185cdcd95960d21b90525183519091015160405160008051602061441d83398151915292612b32929091613c9b565b60405180910390a16064826020015160a00151612b4f91906143cb565b60808201819052602083015160a00151612b699190613c84565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612bac573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b0390811686528851608001511690915260a086015190526007909155436001559151909161298d918391016143ed565b60c0810180516519985a5b195960d21b90525182516060015160405160008051602061441d83398151915292612c3b929091613c9b565b60405180910390a160408051608080820183526000808352602080840182815284860183815260608087018581528a51516001600160a01b03908116808a528c5184015186528c87018051880151831686525160a09081015184526009909855436001558a519687015293519885019890985290519091169082015293519184019190915290910161298d565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001612d33613105565b905290565b604051806040016040528060008152602001612d3360405180602001604052806000151581525090565b604051806040016040528060008152602001612d3360408051808201909152600060208201908152815290565b604051806101a00160405280612da3612cf6565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001612e14604051806020016040528060006001600160601b03191681525090565b81526020016000815260200160008152602001612d33604051806020016040528060006001600160601b03191681525090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001612d3360405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280612ea7613118565b8152602001612d336040518060c001604052806000815260200160006001600160a01b031681526020016000151581526020016000815260200160008152602001600081525090565b6040805160e081018252600060a0820181815260c08301829052825282516020808201855291815290820152908101612f2761315f565b8152602001612f49604051806040016040528060008152602001600081525090565b81526040805160208181019092526000815291015290565b508054612f6d90613961565b6000825580601f10612f7d575050565b601f0160209004906000526020600020908101906127d39190613172565b828054612fa790613961565b90600052602060002090601f016020900481019282612fc9576000855561300f565b82601f10612fe257805160ff191683800117855561300f565b8280016001018555821561300f579182015b8281111561300f578251825591602001919060010190612ff4565b5061301b929150613172565b5090565b604051806080016040528060006001600160a01b03168152602001613042613187565b815260200160008152602001600081525090565b6040805161010081018252600060e082018181528252602080830182905282840182905283519081019093528252906060820190612e14565b60405180610140016040528060006001600160a01b031681526020016130b3613187565b8152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160001515815260200160008152602001600081525090565b6040518060200160405280612d33613256565b6040518060a0016040528060006001600160a01b0316815260200161313b613187565b8152602001600081526020016000815260200160006001600160a01b031681525090565b6040518060200160405280612d336132b5565b5b8082111561301b5760008155600101613173565b604080516101e08101909152600061012082018181526101408301829052610160830182905261018083018290526101a083018290526101c083019190915281908152602001600081526020016000815260200161320c6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001612d33604051806020016040528060006001600160601b03191681525090565b60408051608081019091528060008152602001613286604051806040016040528060008152602001600081525090565b815260200161329361315f565b8152602001612d33604051806040016040528060008152602001600081525090565b6040518060c00160405280600081526020016132e7604051806020016040528060006001600160601b03191681525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a0820152910190612d05565b60006040828403121561336157600080fd5b50919050565b60006040828403121561337957600080fd5b613383838361334f565b9392505050565b6001600160a01b03811681146127d357600080fd5b6000602082840312156133b157600080fd5b81356133838161338a565b634e487b7160e01b600052602160045260246000fd5b600281106127d3576127d36133bc565b815160608201906133f2816133d2565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561342d57600080fd5b50508035926020909101359150565b8151606082019061344c816133d2565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121561348057600080fd5b5035919050565b82815260006020604081840152835180604085015260005b818110156134bb5785810183015185820160600152820161349f565b818111156134cd576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561351557634e487b7160e01b600052604160045260246000fd5b6001600160601b0319811681146127d357600080fd5b60006020828403121561366b57600080fd5b6136736134e4565b9050813561368081613643565b815292915050565b69ffffffffffffffffffff19811681146127d357600080fd5b600060a082840312156136b357600080fd5b6136bb61351b565b90508135815260208201356020820152604082013560408201526060820135606082015260808201356136ed81613688565b608082015292915050565b600060c0828403121561370a57600080fd5b61371261354c565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013561374e81613643565b60a082015292915050565b8035610e7d8161338a565b60006101e0828403121561377757600080fd5b61377f61354c565b9050813581526137928360208401613659565b60208201526137a483604084016136a1565b60408201526137b68360e084016136f8565b60608201526101a08201356137ca8161338a565b60808201526101c082013561374e8161338a565b60006101e082840312156137f157600080fd5b6133838383613764565b8151606082019061380b816133d2565b808352506020830151151560208301526040830151604083015292915050565b60006102a0828403121561336157600080fd5b6000610260828403121561336157600080fd5b80151581146127d357600080fd5b60006040828403121561387157600080fd5b61387961357d565b82358152602083013561388b81613851565b60208201529392505050565b600081830360408112156138aa57600080fd5b6138b261357d565b8335815291506020601f19820112156138ca57600080fd5b506138d36134e4565b60208301356138e181613851565b8152602082015292915050565b60006040828403121561390057600080fd5b6133838383613897565b6000818303604081121561391d57600080fd5b61392561357d565b833581526020601f198301121561393b57600080fd5b6139436134e4565b915061394d6134e4565b602094850135815282529283015250919050565b600181811c9082168061397557607f821691505b6020821081141561336157634e487b7160e01b600052602260045260246000fd5b6000604082840312156139a857600080fd5b6139b061357d565b9050813581526020820135602082015292915050565b60008183036102a08112156139da57600080fd5b6139e261357d565b83358152610280601f19830112156139f957600080fd5b613a016134e4565b613a096135ae565b602086013560038110613a1b57600080fd5b8152613a2a8760408801613996565b60208201526101e0607f1985011215613a4257600080fd5b613a4a6134e4565b9350613a598760808801613764565b8452836040820152613a6f876102608801613996565b606082015281526020820152949350505050565b6000818303610260811215613a9757600080fd5b613a9f61357d565b8335815261024080601f1984011215613ab757600080fd5b613abf6134e4565b9250613ac96135df565b613ad687602088016136f8565b815260e08601356020820152610100808701356040830152613afc8861012089016136a1565b60608301526101c087013560808301526101e087013560a0830152613b246102008801613759565b60c083015261022087013560e0830152613b4088848901613659565b9082015283525060208101919091529392505050565b8051610e7d8161338a565b600060208284031215613b7357600080fd5b613b7b6134e4565b8251613b868161338a565b81529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a08284031215613bc957600080fd5b60405160a0810181811067ffffffffffffffff82111715613bfa57634e487b7160e01b600052604160045260246000fd5b6040528251613c088161338a565b8152602083810151908201526040830151613c228161338a565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b038316815260608101613383602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b600082821015613c9657613c96613c6e565b500390565b91516001600160601b0319168252602082015260400190565b600060c08284031215613cc657600080fd5b613cce61354c565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015161374e81613643565b600060a08284031215613d1c57600080fd5b613d2461351b565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516136ed81613688565b600060208284031215613d6857600080fd5b613d706134e4565b9050815161368081613643565b60006102408284031215613d9057600080fd5b613d986135df565b9050613da48383613cb4565b815260c0820151602082015260e08201516040820152610100613dc984828501613d0a565b60608301526101a083015160808301526101c083015160a0830152613df16101e08401613b56565b60c083015261020083015160e0830152613e0f846102208501613d56565b9082015292915050565b8051610e7d81613851565b60006103608284031215613e3757600080fd5b613e3f613611565b613e4883613b56565b8152613e578460208501613d7d565b602082015261026083015160408201526102808301516060820152613e7f6102a08401613b56565b60808201526102c083015160a0820152613e9c6102e08401613b56565b60c0820152613eae6103008401613e19565b60e08201526103208301516101008201526103409092015161012083015250919050565b60008219821115613ee557613ee5613c6e565b500190565b600060408284031215613efc57600080fd5b613f0461357d565b8251613f0f8161338a565b81526020928301519281019290925250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526001600160601b031960a08201511660a08301525050565b6001600160a01b03838116825282516020808401919091528301515180516102c0840192919060038110613fdb57613fdb6133bc565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526001600160601b03196020820151511660c0860152604081015161402b60e0870182613f24565b50606081015161403f610180870182613f61565b506080810151831661024086015260a0015190911661026084015260600151805161028084015260208101516102a08401525b509392505050565b86815285516001600160601b03191660208201526101e081016140a06040830187613f24565b6140ad60e0830186613f61565b6001600160a01b039384166101a0830152919092166101c090920191909152949350505050565b60006102a082840312156140e757600080fd5b6140ef6135ae565b82516140fa8161338a565b81526141098460208501613d7d565b6020820152610260830151604082015261028090920151606083015250919050565b60006060828403121561413d57600080fd5b6040516060810181811067ffffffffffffffff8211171561416e57634e487b7160e01b600052604160045260246000fd5b806040525080915082516141818161338a565b815260208301516141918161338a565b6020820152604092830151920191909152919050565b6000606082840312156141b957600080fd5b613383838361412b565b6000608082840312156141d557600080fd5b6040516080810181811067ffffffffffffffff8211171561420657634e487b7160e01b600052604160045260246000fd5b60405282516142148161338a565b815260208381015190820152604083015161422e8161338a565b60408201526060928301519281019290925250919050565b614251828251613f61565b602081015160c0830152604081015160e0830152606081015161010061427981850183613f24565b60808301516101a085015260a08301516101c085015260c08301516001600160a01b03166101e085015260e083015161020085015290910151516001600160601b0319166102209092019190915250565b60006102808201905060018060a01b0384168252825160208301526020830151614072604084018251614246565b81516001600160a01b031681526020808301516102a083019161431d90840182614246565b5060408301516102608301526060909201516102809091015290565b81516001600160a01b031681526103608101602083015161435d6020840182614246565b506040830151610260830152606083015161028083015260808301516001600160a01b039081166102a084015260a08401516102c084015260c0840151166102e083015260e08301511515610300830152610100830151610320830152610120909201516103409091015290565b6000826143e857634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606081016103a356fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220e4b679ea8e840aece558d72027f17b2e8a09cd60d39156eb4c2619a0c26a0d3064736f6c634300080c0033`,
  BytecodeLen: 18126,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:157:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:187:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:219:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:221:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:113:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:241:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:284:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:243:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contributors_claimRefund": Contributors_claimRefund,
  "Contributors_contribute": Contributors_contribute,
  "Contributors_contributed": Contributors_contributed,
  "Contributors_creating": Contributors_creating,
  "Contributors_timedOut": Contributors_timedOut,
  "Deployer": Deployer
  };
export const _APIs = {
  Contributors: {
    claimRefund: Contributors_claimRefund,
    contribute: Contributors_contribute,
    contributed: Contributors_contributed,
    creating: Contributors_creating,
    timedOut: Contributors_timedOut
    }
  };
