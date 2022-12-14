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
  
  
  const [v746, v769, v778, v965, v973] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v980 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:207:15:application call to [unknown function] (defined at: ./index.rsh:207:15:function exp)', 'at ./index.rsh:207:15:application call to [unknown function] (defined at: ./index.rsh:207:15:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v769, v778, v965, v973, v980],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:207:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v984], secs: v986, time: v985, didSend: v424, from: v983 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v989 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v983), null);
      let v990;
      switch (v989[0]) {
        case 'None': {
          const v991 = v989[1];
          v990 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v992 = v989[1];
          v990 = v992;
          
          break;
          }
        }
      const v993 = stdlib.ge(v973, v990);
      const v994 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v983), null);
      let v995;
      switch (v994[0]) {
        case 'None': {
          const v996 = v994[1];
          v995 = false;
          
          break;
          }
        case 'Some': {
          const v997 = v994[1];
          v995 = true;
          
          break;
          }
        }
      const v998 = v993 ? v995 : false;
      if (v998) {
        let v1000;
        switch (v989[0]) {
          case 'None': {
            const v1001 = v989[1];
            v1000 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1002 = v989[1];
            v1000 = v1002;
            
            break;
            }
          }
        const v1003 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v983), null);
        let v1004;
        switch (v1003[0]) {
          case 'None': {
            const v1005 = v1003[1];
            v1004 = v778;
            
            break;
            }
          case 'Some': {
            const v1006 = v1003[1];
            v1004 = v1006;
            
            break;
            }
          }
        const v1010 = stdlib.sub(v973, v1000);
        sim_r.txns.push({
          kind: 'from',
          to: v1004,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v983, undefined /* Nothing */);
        const v1013 = 'refundPassed        ';
        null;
        const v1014 = true;
        const v1015 = await txn1.getOutput('Contributors_claimRefund', 'v1014', ctc7, v1014);
        
        let v1022;
        switch (v989[0]) {
          case 'None': {
            const v1023 = v989[1];
            v1022 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1024 = v989[1];
            v1022 = v1024;
            
            break;
            }
          }
        const v1025 = stdlib.sub(v1010, v1022);
        const v1934 = v1025;
        const v1936 = v1010;
        const v1937 = stdlib.gt(v1025, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
        if (v1937) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v746,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1028 = 'refundFailed        ';
        null;
        const v1029 = false;
        const v1030 = await txn1.getOutput('Contributors_claimRefund', 'v1029', ctc7, v1029);
        
        const v1938 = v965;
        const v1940 = v973;
        const v1941 = stdlib.gt(v965, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
        if (v1941) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v746,
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
  const {data: [v984], secs: v986, time: v985, didSend: v424, from: v983 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v989 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v983), null);
  let v990;
  switch (v989[0]) {
    case 'None': {
      const v991 = v989[1];
      v990 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v992 = v989[1];
      v990 = v992;
      
      break;
      }
    }
  const v993 = stdlib.ge(v973, v990);
  const v994 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v983), null);
  let v995;
  switch (v994[0]) {
    case 'None': {
      const v996 = v994[1];
      v995 = false;
      
      break;
      }
    case 'Some': {
      const v997 = v994[1];
      v995 = true;
      
      break;
      }
    }
  const v998 = v993 ? v995 : false;
  if (v998) {
    let v1000;
    switch (v989[0]) {
      case 'None': {
        const v1001 = v989[1];
        v1000 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1002 = v989[1];
        v1000 = v1002;
        
        break;
        }
      }
    const v1003 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v983), null);
    let v1004;
    switch (v1003[0]) {
      case 'None': {
        const v1005 = v1003[1];
        v1004 = v778;
        
        break;
        }
      case 'Some': {
        const v1006 = v1003[1];
        v1004 = v1006;
        
        break;
        }
      }
    const v1010 = stdlib.sub(v973, v1000);
    ;
    await stdlib.mapSet(map2, v983, undefined /* Nothing */);
    const v1013 = 'refundPassed        ';
    null;
    const v1014 = true;
    const v1015 = await txn1.getOutput('Contributors_claimRefund', 'v1014', ctc7, v1014);
    if (v424) {
      stdlib.protect(ctc0, await interact.out(v984, v1015), {
        at: './index.rsh:207:16:application',
        fs: ['at ./index.rsh:207:16:application call to [unknown function] (defined at: ./index.rsh:207:16:function exp)', 'at ./index.rsh:213:21:application call to "notify" (defined at: ./index.rsh:207:51:function exp)', 'at ./index.rsh:207:51:application call to [unknown function] (defined at: ./index.rsh:207:51:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    let v1022;
    switch (v989[0]) {
      case 'None': {
        const v1023 = v989[1];
        v1022 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1024 = v989[1];
        v1022 = v1024;
        
        break;
        }
      }
    const v1025 = stdlib.sub(v1010, v1022);
    const v1934 = v1025;
    const v1936 = v1010;
    const v1937 = stdlib.gt(v1025, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
    if (v1937) {
      return;
      }
    else {
      ;
      return;
      }}
  else {
    const v1028 = 'refundFailed        ';
    null;
    const v1029 = false;
    const v1030 = await txn1.getOutput('Contributors_claimRefund', 'v1029', ctc7, v1029);
    if (v424) {
      stdlib.protect(ctc0, await interact.out(v984, v1030), {
        at: './index.rsh:207:16:application',
        fs: ['at ./index.rsh:207:16:application call to [unknown function] (defined at: ./index.rsh:207:16:function exp)', 'at ./index.rsh:217:21:application call to "notify" (defined at: ./index.rsh:207:51:function exp)', 'at ./index.rsh:207:51:application call to [unknown function] (defined at: ./index.rsh:207:51:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1938 = v965;
    const v1940 = v973;
    const v1941 = stdlib.gt(v965, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
    if (v1941) {
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
  
  
  const [v746, v759, v764, v769, v773, v777, v778, v779, v780, v787] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc1, ctc9, ctc3, ctc3, ctc1, ctc3, ctc1, ctc10, ctc3, ctc3]);
  const v803 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v804 = v803[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v806 = stdlib.gt(v804, stdlib.checkedBigNumberify('./index.rsh:118:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v806, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v813 = v759.maxContribution;
  const v814 = stdlib.gt(v804, v813);
  const v816 = v759.minContribution;
  const v817 = stdlib.lt(v804, v816);
  const v819 = v817 ? v813 : v804;
  const v820 = v814 ? v813 : v819;
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v759, v764, v769, v773, v777, v778, v779, v780, v787, v803],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v820, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v841], secs: v843, time: v842, didSend: v264, from: v840 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v845 = v841[stdlib.checkedBigNumberify('./index.rsh:117:14:spread', stdlib.UInt_max, '0')];
      const v853 = v759.maxContribution;
      const v854 = stdlib.gt(v845, v853);
      const v856 = v759.minContribution;
      const v857 = stdlib.lt(v845, v856);
      const v859 = v857 ? v853 : v845;
      const v860 = v854 ? v853 : v859;
      const v862 = stdlib.add(v787, v860);
      sim_r.txns.push({
        amt: v860,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v880 = v862;
      const v881 = await txn1.getOutput('Contributors_contribute', 'v880', ctc3, v880);
      
      await stdlib.simMapSet(sim_r, 0, v840, v840);
      await stdlib.simMapSet(sim_r, 2, v840, null);
      await stdlib.simMapSet(sim_r, 1, v840, v845);
      const v888 = stdlib.add(v777, v845);
      const v889 = v759.hardCap;
      const v891 = stdlib.lt(v888, v889);
      const v892 = v891 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v893 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v894 = v893 ? false : true;
      const v1942 = v888;
      const v1943 = v840;
      const v1944 = v894;
      const v1945 = v842;
      const v1947 = v862;
      const v1948 = stdlib.gt(v764, v780);
      const v1950 = v1948 ? v893 : false;
      if (v1950) {
        sim_r.isHalt = false;
        }
      else {
        const v1954 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v1954) {
          const v1955 = 'passed              ';
          null;
          const v1956 = stdlib.div(v862, stdlib.checkedBigNumberify('./index.rsh:139:32:decimal', stdlib.UInt_max, '100'));
          const v1957 = stdlib.sub(v862, v1956);
          sim_r.txns.push({
            kind: 'from',
            to: v746,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }
        else {
          const v1964 = v759.softCap;
          const v1965 = stdlib.ge(v888, v1964);
          if (v1965) {
            const v1966 = 'passed              ';
            null;
            const v1967 = stdlib.div(v862, stdlib.checkedBigNumberify('./index.rsh:169:34:decimal', stdlib.UInt_max, '100'));
            const v1968 = stdlib.sub(v862, v1967);
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v1975 = 'failed              ';
            null;
            sim_r.isHalt = false;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc3, ctc3, ctc1, ctc3, ctc1, ctc10, ctc3, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v841], secs: v843, time: v842, didSend: v264, from: v840 } = txn1;
  undefined /* setApiDetails */;
  const v845 = v841[stdlib.checkedBigNumberify('./index.rsh:117:14:spread', stdlib.UInt_max, '0')];
  const v846 = stdlib.gt(v845, stdlib.checkedBigNumberify('./index.rsh:118:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v846, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v853 = v759.maxContribution;
  const v854 = stdlib.gt(v845, v853);
  const v856 = v759.minContribution;
  const v857 = stdlib.lt(v845, v856);
  const v859 = v857 ? v853 : v845;
  const v860 = v854 ? v853 : v859;
  const v862 = stdlib.add(v787, v860);
  ;
  const v880 = v862;
  const v881 = await txn1.getOutput('Contributors_contribute', 'v880', ctc3, v880);
  if (v264) {
    stdlib.protect(ctc0, await interact.out(v841, v881), {
      at: './index.rsh:117:15:application',
      fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:15:function exp)', 'at ./index.rsh:124:19:application call to "notify" (defined at: ./index.rsh:123:37:function exp)', 'at ./index.rsh:123:37:application call to [unknown function] (defined at: ./index.rsh:123:37:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v840, v840);
  await stdlib.mapSet(map2, v840, null);
  await stdlib.mapSet(map1, v840, v845);
  const v888 = stdlib.add(v777, v845);
  const v889 = v759.hardCap;
  const v891 = stdlib.lt(v888, v889);
  const v892 = v891 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  const v893 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v894 = v893 ? false : true;
  const v1942 = v888;
  const v1943 = v840;
  const v1944 = v894;
  const v1945 = v842;
  const v1947 = v862;
  const v1948 = stdlib.gt(v764, v780);
  const v1950 = v1948 ? v893 : false;
  if (v1950) {
    return;
    }
  else {
    const v1954 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v1954) {
      const v1955 = 'passed              ';
      null;
      const v1956 = stdlib.div(v862, stdlib.checkedBigNumberify('./index.rsh:139:32:decimal', stdlib.UInt_max, '100'));
      const v1957 = stdlib.sub(v862, v1956);
      ;
      return;
      }
    else {
      const v1964 = v759.softCap;
      const v1965 = stdlib.ge(v888, v1964);
      if (v1965) {
        const v1966 = 'passed              ';
        null;
        const v1967 = stdlib.div(v862, stdlib.checkedBigNumberify('./index.rsh:169:34:decimal', stdlib.UInt_max, '100'));
        const v1968 = stdlib.sub(v862, v1967);
        ;
        return;
        }
      else {
        const v1975 = 'failed              ';
        null;
        return;
        }}}
  
  
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
    Contributors_contributed0_504: ctc6,
    Contributors_creating0_504: ctc12,
    Contributors_timedOut0_504: ctc6
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
  
  
  const [v746, v1055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1083 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:11:application call to [unknown function] (defined at: ./index.rsh:243:11:function exp)', 'at ./index.rsh:226:37:application call to "runContributors_contributed0_504" (defined at: ./index.rsh:243:11:function exp)', 'at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v1093 = ['Contributors_contributed0_504', v1083];
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v1055, v1093],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:243:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
      
      switch (v1113[0]) {
        case 'Contributors_contributed0_504': {
          const v1116 = v1113[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v1124 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '0')];
          const v1125 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '1')];
          const v1126 = null;
          const v1127 = await txn1.getOutput('Contributors_contributed', 'v1126', ctc0, v1126);
          
          const v1134 = 'contributed         ';
          null;
          const v2020 = v1055;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_504': {
          const v1168 = v1113[1];
          
          break;
          }
        case 'Contributors_timedOut0_504': {
          const v1220 = v1113[1];
          
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
  const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
  switch (v1113[0]) {
    case 'Contributors_contributed0_504': {
      const v1116 = v1113[1];
      undefined /* setApiDetails */;
      ;
      const v1124 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '0')];
      const v1125 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '1')];
      const v1126 = null;
      const v1127 = await txn1.getOutput('Contributors_contributed', 'v1126', ctc0, v1126);
      if (v634) {
        stdlib.protect(ctc0, await interact.out(v1116, v1127), {
          at: './index.rsh:243:12:application',
          fs: ['at ./index.rsh:243:12:application call to [unknown function] (defined at: ./index.rsh:243:12:function exp)', 'at ./index.rsh:244:15:application call to "notify" (defined at: ./index.rsh:243:62:function exp)', 'at ./index.rsh:243:62:application call to [unknown function] (defined at: ./index.rsh:243:62:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v1134 = 'contributed         ';
      null;
      const v2020 = v1055;
      return;
      
      break;
      }
    case 'Contributors_creating0_504': {
      const v1168 = v1113[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_504': {
      const v1220 = v1113[1];
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
    Contributors_contributed0_504: ctc12,
    Contributors_creating0_504: ctc11,
    Contributors_timedOut0_504: ctc12
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
  
  
  const [v746, v1055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1060 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:229:11:application call to [unknown function] (defined at: ./index.rsh:229:11:function exp)', 'at ./index.rsh:226:37:application call to "runContributors_creating0_504" (defined at: ./index.rsh:229:11:function exp)', 'at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v1079 = ['Contributors_creating0_504', v1060];
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v1055, v1079],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:229:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
      
      switch (v1113[0]) {
        case 'Contributors_contributed0_504': {
          const v1116 = v1113[1];
          
          break;
          }
        case 'Contributors_creating0_504': {
          const v1168 = v1113[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v1188 = v1168[stdlib.checkedBigNumberify('./index.rsh:229:11:spread', stdlib.UInt_max, '0')];
          const v1189 = null;
          const v1190 = await txn1.getOutput('Contributors_creating', 'v1189', ctc0, v1189);
          
          const v1202 = v1188.id;
          const v1203 = v1188.title;
          const v1204 = v1188.link;
          const v1205 = v1188.description;
          const v1206 = v1188.owner;
          const v1207 = v1188.contractInfo;
          null;
          const v2032 = v1055;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_504': {
          const v1220 = v1113[1];
          
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
  const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
  switch (v1113[0]) {
    case 'Contributors_contributed0_504': {
      const v1116 = v1113[1];
      return;
      break;
      }
    case 'Contributors_creating0_504': {
      const v1168 = v1113[1];
      undefined /* setApiDetails */;
      ;
      const v1188 = v1168[stdlib.checkedBigNumberify('./index.rsh:229:11:spread', stdlib.UInt_max, '0')];
      const v1189 = null;
      const v1190 = await txn1.getOutput('Contributors_creating', 'v1189', ctc0, v1189);
      if (v634) {
        stdlib.protect(ctc0, await interact.out(v1168, v1190), {
          at: './index.rsh:229:12:application',
          fs: ['at ./index.rsh:229:12:application call to [unknown function] (defined at: ./index.rsh:229:12:function exp)', 'at ./index.rsh:230:15:application call to "notify" (defined at: ./index.rsh:229:49:function exp)', 'at ./index.rsh:229:49:application call to [unknown function] (defined at: ./index.rsh:229:49:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v1202 = v1188.id;
      const v1203 = v1188.title;
      const v1204 = v1188.link;
      const v1205 = v1188.description;
      const v1206 = v1188.owner;
      const v1207 = v1188.contractInfo;
      null;
      const v2032 = v1055;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_504': {
      const v1220 = v1113[1];
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
    Contributors_contributed0_504: ctc6,
    Contributors_creating0_504: ctc12,
    Contributors_timedOut0_504: ctc6
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
  
  
  const [v746, v1055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3]);
  const v1097 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)', 'at ./index.rsh:226:37:application call to "runContributors_timedOut0_504" (defined at: ./index.rsh:250:11:function exp)', 'at ./index.rsh:226:37:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v1107 = ['Contributors_timedOut0_504', v1097];
  
  const txn1 = await (ctc.sendrecv({
    args: [v746, v1055, v1107],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:250:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
      
      switch (v1113[0]) {
        case 'Contributors_contributed0_504': {
          const v1116 = v1113[1];
          
          break;
          }
        case 'Contributors_creating0_504': {
          const v1168 = v1113[1];
          
          break;
          }
        case 'Contributors_timedOut0_504': {
          const v1220 = v1113[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v1261 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '0')];
          const v1262 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '1')];
          const v1263 = null;
          const v1264 = await txn1.getOutput('Contributors_timedOut', 'v1263', ctc0, v1263);
          
          const v1271 = 'timedOut            ';
          null;
          const v2044 = v1055;
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
  const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn1;
  switch (v1113[0]) {
    case 'Contributors_contributed0_504': {
      const v1116 = v1113[1];
      return;
      break;
      }
    case 'Contributors_creating0_504': {
      const v1168 = v1113[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_504': {
      const v1220 = v1113[1];
      undefined /* setApiDetails */;
      ;
      const v1261 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '0')];
      const v1262 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '1')];
      const v1263 = null;
      const v1264 = await txn1.getOutput('Contributors_timedOut', 'v1263', ctc0, v1263);
      if (v634) {
        stdlib.protect(ctc0, await interact.out(v1220, v1264), {
          at: './index.rsh:250:12:application',
          fs: ['at ./index.rsh:250:12:application call to [unknown function] (defined at: ./index.rsh:250:12:function exp)', 'at ./index.rsh:251:15:application call to "notify" (defined at: ./index.rsh:250:59:function exp)', 'at ./index.rsh:250:59:application call to [unknown function] (defined at: ./index.rsh:250:59:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v1271 = 'timedOut            ';
      null;
      const v2044 = v1055;
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
    Contributors_contributed0_504: ctc13,
    Contributors_creating0_504: ctc16,
    Contributors_timedOut0_504: ctc13
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
  
  
  const v735 = stdlib.protect(ctc9, interact.getProject, 'for Deployer\'s interact field getProject');
  const v745 = stdlib.protect(ctc10, interact.isProject, 'for Deployer\'s interact field isProject');
  
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
      
      const {data: [], secs: v748, time: v747, didSend: v48, from: v746 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v748, time: v747, didSend: v48, from: v746 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v746, v745],
    evt_cnt: 1,
    funcNum: 1,
    lct: v747,
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
      
      const {data: [v752], secs: v754, time: v753, didSend: v57, from: v751 } = txn2;
      
      ;
      if (v752) {
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
  const {data: [v752], secs: v754, time: v753, didSend: v57, from: v751 } = txn2;
  ;
  const v755 = stdlib.addressEq(v746, v751);
  stdlib.assert(v755, {
    at: './index.rsh:71:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v752) {
    const txn3 = await (ctc.sendrecv({
      args: [v746, v735],
      evt_cnt: 1,
      funcNum: 2,
      lct: v753,
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
        
        const {data: [v759], secs: v761, time: v760, didSend: v66, from: v758 } = txn3;
        
        ;
        const v764 = stdlib.add(v760, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '100'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [v759], secs: v761, time: v760, didSend: v66, from: v758 } = txn3;
    ;
    const v762 = stdlib.addressEq(v746, v758);
    stdlib.assert(v762, {
      at: './index.rsh:87:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v764 = stdlib.add(v760, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '100'));
    const txn4 = await (ctc.sendrecv({
      args: [v746, v759, v760, v764],
      evt_cnt: 0,
      funcNum: 3,
      lct: v760,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v767, time: v766, didSend: v73, from: v765 } = txn4;
        
        ;
        const v769 = v759.id;
        const v770 = v759.title;
        const v771 = v759.link;
        const v772 = v759.description;
        const v773 = v759.owner;
        const v774 = await ctc.getContractInfo();
        null;
        const v777 = stdlib.checkedBigNumberify('./index.rsh:114:23:decimal', stdlib.UInt_max, '0');
        const v778 = v746;
        const v779 = false;
        const v780 = v766;
        const v781 = v760;
        const v787 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          const v792 = stdlib.gt(v764, v781);
          const v794 = v779 ? false : true;
          const v795 = v792 ? v794 : false;
          
          return v795;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v902 = v759.hardCap;
          const v903 = stdlib.lt(v777, v902);
          const v904 = v903 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          const v905 = stdlib.eq(v904, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v905) {
            const v907 = 'passed              ';
            null;
            const v909 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:139:32:decimal', stdlib.UInt_max, '100'));
            const v913 = stdlib.sub(v787, v909);
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v931 = v759.softCap;
            const v932 = stdlib.ge(v777, v931);
            if (v932) {
              const v934 = 'passed              ';
              null;
              const v936 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:169:34:decimal', stdlib.UInt_max, '100'));
              const v940 = stdlib.sub(v787, v936);
              sim_r.txns.push({
                kind: 'from',
                to: v746,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v959 = 'failed              ';
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
    const {data: [], secs: v767, time: v766, didSend: v73, from: v765 } = txn4;
    ;
    const v768 = stdlib.addressEq(v746, v765);
    stdlib.assert(v768, {
      at: './index.rsh:106:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v769 = v759.id;
    const v770 = v759.title;
    const v771 = v759.link;
    const v772 = v759.description;
    const v773 = v759.owner;
    const v774 = await ctc.getContractInfo();
    null;
    let v777 = stdlib.checkedBigNumberify('./index.rsh:114:23:decimal', stdlib.UInt_max, '0');
    let v778 = v746;
    let v779 = false;
    let v780 = v766;
    let v781 = v760;
    let v787 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      const v792 = stdlib.gt(v764, v781);
      const v794 = v779 ? false : true;
      const v795 = v792 ? v794 : false;
      
      return v795;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 10,
        out_tys: [ctc11],
        timeoutAt: ['time', v764],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v746, v759, v764, v769, v773, v777, v778, v779, v780, v787],
          evt_cnt: 0,
          funcNum: 11,
          lct: v780,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:133:20:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v898, time: v897, didSend: v335, from: v896 } = txn6;
            
            ;
            const cv777 = v777;
            const cv778 = v778;
            const cv779 = v779;
            const cv780 = v897;
            const cv781 = v780;
            const cv787 = v787;
            
            await (async () => {
              const v777 = cv777;
              const v778 = cv778;
              const v779 = cv779;
              const v780 = cv780;
              const v781 = cv781;
              const v787 = cv787;
              
              if (await (async () => {
                const v792 = stdlib.gt(v764, v781);
                const v794 = v779 ? false : true;
                const v795 = v792 ? v794 : false;
                
                return v795;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v902 = v759.hardCap;
                const v903 = stdlib.lt(v777, v902);
                const v904 = v903 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                const v905 = stdlib.eq(v904, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                if (v905) {
                  const v907 = 'passed              ';
                  null;
                  const v909 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:139:32:decimal', stdlib.UInt_max, '100'));
                  const v913 = stdlib.sub(v787, v909);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v931 = v759.softCap;
                  const v932 = stdlib.ge(v777, v931);
                  if (v932) {
                    const v934 = 'passed              ';
                    null;
                    const v936 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:169:34:decimal', stdlib.UInt_max, '100'));
                    const v940 = stdlib.sub(v787, v936);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v746,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v959 = 'failed              ';
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
        const {data: [], secs: v898, time: v897, didSend: v335, from: v896 } = txn6;
        ;
        const v899 = stdlib.addressEq(v746, v896);
        stdlib.assert(v899, {
          at: './index.rsh:133:20:dot',
          fs: ['at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const cv777 = v777;
        const cv778 = v778;
        const cv779 = v779;
        const cv780 = v897;
        const cv781 = v780;
        const cv787 = v787;
        
        v777 = cv777;
        v778 = cv778;
        v779 = cv779;
        v780 = cv780;
        v781 = cv781;
        v787 = cv787;
        
        continue;
        }
      else {
        const {data: [v841], secs: v843, time: v842, didSend: v264, from: v840 } = txn5;
        undefined /* setApiDetails */;
        const v845 = v841[stdlib.checkedBigNumberify('./index.rsh:117:14:spread', stdlib.UInt_max, '0')];
        const v846 = stdlib.gt(v845, stdlib.checkedBigNumberify('./index.rsh:118:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v846, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)', 'at ./index.rsh:117:46:application call to [unknown function] (defined at: ./index.rsh:117:46:function exp)'],
          msg: 'Contribution too small',
          who: 'Deployer'
          });
        const v853 = v759.maxContribution;
        const v854 = stdlib.gt(v845, v853);
        const v856 = v759.minContribution;
        const v857 = stdlib.lt(v845, v856);
        const v859 = v857 ? v853 : v845;
        const v860 = v854 ? v853 : v859;
        const v862 = stdlib.add(v787, v860);
        ;
        const v880 = v862;
        await txn5.getOutput('Contributors_contribute', 'v880', ctc3, v880);
        await stdlib.mapSet(map0, v840, v840);
        await stdlib.mapSet(map2, v840, null);
        await stdlib.mapSet(map1, v840, v845);
        const v888 = stdlib.add(v777, v845);
        const v889 = v759.hardCap;
        const v891 = stdlib.lt(v888, v889);
        const v892 = v891 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v893 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v894 = v893 ? false : true;
        const cv777 = v888;
        const cv778 = v840;
        const cv779 = v894;
        const cv780 = v842;
        const cv781 = v780;
        const cv787 = v862;
        
        v777 = cv777;
        v778 = cv778;
        v779 = cv779;
        v780 = cv780;
        v781 = cv781;
        v787 = cv787;
        
        continue;}
      
      }
    const v902 = v759.hardCap;
    const v903 = stdlib.lt(v777, v902);
    const v904 = v903 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    const v905 = stdlib.eq(v904, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v905) {
      const v907 = 'passed              ';
      null;
      const v909 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:139:32:decimal', stdlib.UInt_max, '100'));
      const v913 = stdlib.sub(v787, v909);
      ;
      const txn5 = await (ctc.sendrecv({
        args: [v746, v773, v913],
        evt_cnt: 0,
        funcNum: 5,
        lct: v780,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:141:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v916, time: v915, didSend: v354, from: v914 } = txn5;
          
          ;
          const v923 = stdlib.sub(v913, v913);
          sim_r.txns.push({
            kind: 'from',
            to: v773,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v746,
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
      const {data: [], secs: v916, time: v915, didSend: v354, from: v914 } = txn5;
      ;
      const v917 = stdlib.addressEq(v746, v914);
      stdlib.assert(v917, {
        at: './index.rsh:141:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v923 = stdlib.sub(v913, v913);
      ;
      ;
      return;
      
      
      }
    else {
      const v931 = v759.softCap;
      const v932 = stdlib.ge(v777, v931);
      if (v932) {
        const v934 = 'passed              ';
        null;
        const v936 = stdlib.div(v787, stdlib.checkedBigNumberify('./index.rsh:169:34:decimal', stdlib.UInt_max, '100'));
        const v940 = stdlib.sub(v787, v936);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v746, v773, v940],
          evt_cnt: 0,
          funcNum: 6,
          lct: v780,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:171:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v943, time: v942, didSend: v375, from: v941 } = txn5;
            
            ;
            const v950 = stdlib.sub(v940, v940);
            sim_r.txns.push({
              kind: 'from',
              to: v773,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v746,
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
        const {data: [], secs: v943, time: v942, didSend: v375, from: v941 } = txn5;
        ;
        const v944 = stdlib.addressEq(v746, v941);
        stdlib.assert(v944, {
          at: './index.rsh:171:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v950 = stdlib.sub(v940, v940);
        ;
        ;
        return;
        
        
        }
      else {
        const v959 = 'failed              ';
        null;
        const txn5 = await (ctc.sendrecv({
          args: [v746, v769, v778, v787],
          evt_cnt: 0,
          funcNum: 7,
          lct: v780,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:203:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v962, time: v961, didSend: v388, from: v960 } = txn5;
            
            ;
            const v965 = v787;
            const v966 = v961;
            const v973 = v787;
            
            if (await (async () => {
              const v977 = stdlib.gt(v965, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
              
              return v977;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v746,
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
        const {data: [], secs: v962, time: v961, didSend: v388, from: v960 } = txn5;
        ;
        const v963 = stdlib.addressEq(v746, v960);
        stdlib.assert(v963, {
          at: './index.rsh:203:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v965 = v787;
        let v966 = v961;
        let v973 = v787;
        
        while (await (async () => {
          const v977 = stdlib.gt(v965, stdlib.checkedBigNumberify('./index.rsh:206:35:decimal', stdlib.UInt_max, '0'));
          
          return v977;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 9,
            out_tys: [ctc12],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v984], secs: v986, time: v985, didSend: v424, from: v983 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v989 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v983), null);
          let v990;
          switch (v989[0]) {
            case 'None': {
              const v991 = v989[1];
              v990 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v992 = v989[1];
              v990 = v992;
              
              break;
              }
            }
          const v993 = stdlib.ge(v973, v990);
          const v994 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v983), null);
          let v995;
          switch (v994[0]) {
            case 'None': {
              const v996 = v994[1];
              v995 = false;
              
              break;
              }
            case 'Some': {
              const v997 = v994[1];
              v995 = true;
              
              break;
              }
            }
          const v998 = v993 ? v995 : false;
          if (v998) {
            let v1000;
            switch (v989[0]) {
              case 'None': {
                const v1001 = v989[1];
                v1000 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1002 = v989[1];
                v1000 = v1002;
                
                break;
                }
              }
            const v1003 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v983), null);
            let v1004;
            switch (v1003[0]) {
              case 'None': {
                const v1005 = v1003[1];
                v1004 = v778;
                
                break;
                }
              case 'Some': {
                const v1006 = v1003[1];
                v1004 = v1006;
                
                break;
                }
              }
            const v1010 = stdlib.sub(v973, v1000);
            ;
            await stdlib.mapSet(map2, v983, undefined /* Nothing */);
            const v1013 = 'refundPassed        ';
            null;
            const v1014 = true;
            await txn6.getOutput('Contributors_claimRefund', 'v1014', ctc10, v1014);
            let v1022;
            switch (v989[0]) {
              case 'None': {
                const v1023 = v989[1];
                v1022 = stdlib.checkedBigNumberify('./index.rsh:201:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1024 = v989[1];
                v1022 = v1024;
                
                break;
                }
              }
            const v1025 = stdlib.sub(v1010, v1022);
            const cv965 = v1025;
            const cv966 = v985;
            const cv973 = v1010;
            
            v965 = cv965;
            v966 = cv966;
            v973 = cv973;
            
            continue;}
          else {
            const v1028 = 'refundFailed        ';
            null;
            const v1029 = false;
            await txn6.getOutput('Contributors_claimRefund', 'v1029', ctc10, v1029);
            const cv965 = v965;
            const cv966 = v985;
            const cv973 = v973;
            
            v965 = cv965;
            v966 = cv966;
            v973 = cv973;
            
            continue;}
          
          }
        ;
        return;
        
        
        }}
    
    
    
    }
  else {
    const txn3 = await (ctc.sendrecv({
      args: [v746],
      evt_cnt: 0,
      funcNum: 12,
      lct: v753,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:225:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1045, time: v1044, didSend: v494, from: v1043 } = txn3;
        
        ;
        const v1047 = true;
        const v1048 = v1044;
        const v1055 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v1047;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v746,
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
    const {data: [], secs: v1045, time: v1044, didSend: v494, from: v1043 } = txn3;
    ;
    const v1046 = stdlib.addressEq(v746, v1043);
    stdlib.assert(v1046, {
      at: './index.rsh:225:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    let v1047 = true;
    let v1048 = v1044;
    let v1055 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v1047;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 14,
        out_tys: [ctc17],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1113], secs: v1115, time: v1114, didSend: v634, from: v1112 } = txn4;
      switch (v1113[0]) {
        case 'Contributors_contributed0_504': {
          const v1116 = v1113[1];
          undefined /* setApiDetails */;
          ;
          const v1124 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '0')];
          const v1125 = v1116[stdlib.checkedBigNumberify('./index.rsh:243:11:spread', stdlib.UInt_max, '1')];
          const v1126 = null;
          await txn4.getOutput('Contributors_contributed', 'v1126', ctc0, v1126);
          const v1134 = 'contributed         ';
          null;
          const cv1047 = true;
          const cv1048 = v1114;
          const cv1055 = v1055;
          
          v1047 = cv1047;
          v1048 = cv1048;
          v1055 = cv1055;
          
          continue;
          break;
          }
        case 'Contributors_creating0_504': {
          const v1168 = v1113[1];
          undefined /* setApiDetails */;
          ;
          const v1188 = v1168[stdlib.checkedBigNumberify('./index.rsh:229:11:spread', stdlib.UInt_max, '0')];
          const v1189 = null;
          await txn4.getOutput('Contributors_creating', 'v1189', ctc0, v1189);
          const v1202 = v1188.id;
          const v1203 = v1188.title;
          const v1204 = v1188.link;
          const v1205 = v1188.description;
          const v1206 = v1188.owner;
          const v1207 = v1188.contractInfo;
          null;
          const cv1047 = true;
          const cv1048 = v1114;
          const cv1055 = v1055;
          
          v1047 = cv1047;
          v1048 = cv1048;
          v1055 = cv1055;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_504': {
          const v1220 = v1113[1];
          undefined /* setApiDetails */;
          ;
          const v1261 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '0')];
          const v1262 = v1220[stdlib.checkedBigNumberify('./index.rsh:250:11:spread', stdlib.UInt_max, '1')];
          const v1263 = null;
          await txn4.getOutput('Contributors_timedOut', 'v1263', ctc0, v1263);
          const v1271 = 'timedOut            ';
          null;
          const cv1047 = true;
          const cv1048 = v1114;
          const cv1055 = v1055;
          
          v1047 = cv1047;
          v1048 = cv1048;
          v1055 = cv1055;
          
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
  appApproval: `BiAhAAEgAgcMDgMFDcYDpgPOAwlkCCu+8aazB4z29tAJnPPTjQv+AoKc4uUGEdYD9gOfBKcEKrQBSAZA/QImBwEAAQEAAQIBAwEEGLUOO3JwYXNzZWQAAAAAAAAAAAAAAAAAACI1ADEYQQoJKmRJIls1ASEPWzUCMRkjEkEACjEAKCEQr2ZCCdU2GgAXSUEAeCI1BCM1BkkhEQxAAEBJIRIMQAAhSSETDEAACiETEkQ2GgFCAmEhEhJENhoBNf8pNP9QQgBwIRESRDYaATYaAlA1/ys0/1AhFK9QQgBYSSEVDEAAGCEVEkQ2GgE2GgJQNf8oNP9QIRSvUEIAOYGWudjPBRJEKkIDGzYaAhc1BDYaAzYaARdJIQQMQATLSYELDEAB5EkhBQxAAWJJIQYMQAEpIQYSRCEWNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8kWzX+STUFNf2ABJQ87Ck0/VCwNP0iVUkjDEAApUklDEAASSUSRDT9VwEQNfyACAAAAAAAAATvsCo1B4AYUISrsHRpbWVkT3V0AAAAAAAAAAAAAAAANPxXAAhQNPxXCAhQsDT/IzIGNP5CCC5INP0jgY4DWDX8NPw1+4AIAAAAAAAABKWwKjUHgAQFrLtHNPtXAAhQNPtXCBRQNPtXHJZQNPtXsrRQNPuB5gIkWFA0+4GGAyEPWFCwNP8jMgY0/kIH2Eg0/VcBEDX8gAgAAAAAAAAEZrAqNQeAGFCEq7Bjb250cmlidXRlZAAAAAAAAAAAADT8VwAIUDT8VwgIULA0/yMyBjT+QgeRIQUSRCEGNAESRDQESSISTDQCEhFEKGRJNQM1/4AEyqvON7A0/zEAEkQ0/yMyBiJCB19IIQk0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSVcAIDX/IQpbNf6ABOPZNjWwMgY0/g9ENP8xABJENP80AyQhC1g0/jQDIQxbNAMhFyRYNAMhGFs0A4H+AyRYNAOBngQjWBcyBjQDIRlbNAMhGltCBT9JIQ0MQAKTSYEKDEABDUghCTQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJJCELWDX/IQpbNf5JNQU1/YAEN+njIDT9ULAyBjT+DEQ0/RdJNfwiDUQ0/4HaAls1+zT8NPs0/DT/geICWwxNNPs0/DT7DU01+jQDIRpbNPoINfk0+ogHDoAIAAAAAAAAA3A0+RZQsDT5FjUHMQAoMQCIBuMpMQBQNfhXIQo0+ExQZjEAKDEAiAbNIyEbTFZmMQAoMQCIBr8pNPwWUDX4SVcAITT4UExXKgFQZjQDIRhbNPwINfg0A1cAIDT/NP40AyEMWzQDIRckWDT4MQAiIzT4NP8hHFsMTSMTMgY0AyEZWzT5QgQkSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoIDX9gVBbNfxJNQU1+4AEheOg0DT7ULAxAIgGMFchCUk1+iJVQAAGIjX5QgAMNPojW0k1+DX5QgAAMQCIBg5XKgFJNfciVUAABiI1+EIABiM1+EIAADT8NPkPNPgQQQC7NPoiVUAABiI190IADDT6I1tJNfY190IAADEAiAXOVwAhSTX1IlVAAAc0/TX2QgANNPVXASBJNfQ19kIAADT8NPcJNfWxIrIBNPeyCCOyEDT2sgezMQAoMQCIBZAiIRtMVmaAGLUOO3JyZWZ1bmRQYXNzZWQAAAAAAAAAADT+FlCwgAkAAAAAAAAD9gGwKTUHNPoiVUAABiI19EIADDT6I1tJNfM19EIAADT/NP40/TT1NPQJMgY09UIEQIAYtQ47cnJlZnVuZEZhaWxlZAAAAAAAAAAANP4WULCACQAAAAAAAAQFALAoNQc0/zT+NP00AyEdWzIGNPxCBAAhBBJEIQ00ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEdWzX+gATiG7OpsDT/MQASRDT/NAMkWzQDVyggNP4yBjT+QgO6SSEHDEABTUkhCAxAALVJIR4MQABXSCEENAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hH1s1/oAEYbSsDLA0/zEAEkSxIrIBNP6yCCOyEDQDVyAgsgezsSKyATT+SQmyCCOyEDT/sgezQgPRSCEINAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hH1s1/oAEzJmSXLA0/zEAEkSxIrIBNP6yCCOyEDQDVyAgsgezsSKyATT+SQmyCCOyEDT/sgezQgN6IQcSRCEHNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQSTUDSVcAIDX/JCELWDX+gASnZcS0sDT/MQASRDT+gbwBWzX9NP6B6gIkWDX8gAQoh2iJNP0WUDT+gZIDgRRYUDT+V8SWUDT+VwC0UDT8UDEYFlCwNP80/jQDIQxbNP00/CI0/yIyBjQDIQpbIkIBC0kjDEAA0kklDEAAbEglNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BTX+gARdxBi/NP5QsDT/MQASRDIGIQ4INf00/zT+UDIGFlA0/RZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEggVlYZ0ghBzUBMgY1AkICjUgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAED7/GNDT+FlEHCFCwNP8xABJENP5BABQ0/yhLAVcAIGdIJTUBMgY1AkICQjT/KEsBVwAgZ0ghBjUBMgY1AkICLUiBoI0GiAKGIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIB+jX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU09zT+DTT8FBBBAFw09TT2UDT3FlA0+BZQNPlQNPoWUDT7UDT8FlEHCFA0/RZQNP8WUChLAVcAf2cpSwFXf39nK0sBV/5/ZycESwEhIIF/WGcnBUsBgfwDgTNYZ0ghCTUBMgY1AkIBfCIjNPo09iEcWwxNIhJBAEEnBjT4FlCwNP8hDgo19DT/NPQJNfOxIrIBNPSyCCOyEDT1sgezNPU0+VA08xZQKEsBVwBIZ0ghCDUBMgY1AkIBKzT6NPaBigNbD0EAQScGNPgWULA0/yEOCjX0NP809Ak187EisgE09LIII7IQNPWyB7M09TT5UDTzFlAoSwFXAEhnSCEENQEyBjUCQgDegBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA0+BZQsDT1NPgWUDT7UDT/FlAoSwFXAFBnSCENNQEyBjUCQgCfNf81/jX9Nfw1+zX6NP0iDUEAJDT6NPsWUDT8UDT9FlA0/xZQKEsBVwBYZ0ghBTUBMgY1AkIAaLEisgE0/7III7IQNPqyB7NCADk1/zX+Nf01/DT9QQAZNPw0/xZQKEsBVwAoZ0ghFjUBMgY1AkIAL7EisgE0/7III7IQNPyyB7NCAAAxGSEIEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIR4xNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIRCviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v752",
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
                "name": "v841",
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
                    "name": "_Contributors_contributed0_504",
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
                    "name": "_Contributors_creating0_504",
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
                    "name": "_Contributors_timedOut0_504",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1113",
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
                "name": "v759",
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
                "name": "v984",
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
    "name": "_reach_oe_v1014",
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
    "name": "_reach_oe_v1029",
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
    "name": "_reach_oe_v1126",
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
    "name": "_reach_oe_v1189",
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
    "name": "_reach_oe_v1263",
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
    "name": "_reach_oe_v880",
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
                "name": "v752",
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
                "name": "v841",
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
                    "name": "_Contributors_contributed0_504",
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
                    "name": "_Contributors_creating0_504",
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
                    "name": "_Contributors_timedOut0_504",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T38",
                "name": "v1113",
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
                "name": "v759",
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
                "name": "v984",
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
  Bytecode: `0x60806040526040516200433d3803806200433d8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b6140e1806200025c6000396000f3fe60806040526004361061012d5760003560e01c80638b9fadc8116100a5578063bf2c5b241161006c578063bf2c5b24146102c2578063c5cfa72e146102d5578063c7980037146102e8578063cadc2e7a146102fb578063d13dd75314610328578063ec4b54291461033b57005b80638b9fadc8146102535780638e31476914610266578063972b4448146102795780639a3e39121461028c578063ab53f2c61461029f57005b80635bc7f724116100f45780635bc7f724146101c05780636172e590146101e35780636d700906146101f657806373b4522c146101fe578063817d57f314610211578063832307571461023e57005b806311faee8c1461013657806318e67cf3146101495780631e93b0f11461015c5780633bc5b7bf1461018057806355887919146101ad57005b3661013457005b005b610134610144366004612fd6565b61034e565b610134610157366004612fd6565b610372565b34801561016857600080fd5b506003545b6040519081526020015b60405180910390f35b34801561018c57600080fd5b506101a061019b36600461300e565b610392565b6040516101779190613051565b6101346101bb366004612fd6565b6103a9565b6101d36101ce366004613089565b6103c9565b6040519015158152602001610177565b6101d36101f1366004613089565b61040f565b6101d3610458565b61013461020c366004612fd6565b610484565b34801561021d57600080fd5b5061023161022c36600461300e565b6104a4565b60405161017791906130ab565b34801561024a57600080fd5b5060015461016d565b610134610261366004612fd6565b6104b5565b610134610274366004612fd6565b6104d5565b61016d6102873660046130dd565b6104f5565b61013461029a366004612fd6565b610525565b3480156102ab57600080fd5b506102b4610545565b6040516101779291906130f6565b6101346102d0366004612fd6565b6105e2565b6101d36102e336600461344d565b610602565b6101346102f6366004612fd6565b61063d565b34801561030757600080fd5b5061031b61031636600461300e565b61065d565b604051610177919061346a565b61013461033636600461349a565b61066e565b6101346103493660046134ad565b61068e565b610356612937565b61036e610368368490038401846134ce565b826106ae565b5050565b61037a612937565b61036e61038c3684900384018461355d565b82610843565b61039a612965565b6103a382610dbb565b92915050565b6103b1612937565b61036e6103c336849003840184613579565b82610e82565b60006103d3612988565b6020818101805151600090528051518201518690525151810151018390526103f9612937565b61040382826111d0565b60400151949350505050565b6000610419612988565b602081810180515160029052805151606090810151879052905151015101839052610442612937565b61044c82826111d0565b60800151949350505050565b60006104626129a7565b602081015160009052610473612937565b61047d8282610843565b5192915050565b61048c612937565b61036e61049e368490038401846134ce565b826115d7565b6104ac612965565b6103a3826117ee565b6104bd612937565b61036e6104cf368490038401846134ce565b826118a2565b6104dd612937565b61036e6104ef368490038401846134ce565b82611a81565b60006104ff6129d1565b602081015151839052610510612937565b61051a8282610e82565b602001519392505050565b61052d612937565b61036e61053f3684900384018461355d565b82611c55565b60006060600054600280805461055a906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610586906135d0565b80156105d35780601f106105a8576101008083540402835291602001916105d3565b820191906000526020600020905b8154815290600101906020018083116105b657829003601f168201915b50505050509050915091509091565b6105ea612937565b61036e6105fc368490038401846134ce565b82611e1d565b600061060c612988565b6020810180515160019052515160400151839052610628612937565b61063282826111d0565b606001519392505050565b610645612937565b61036e610657368490038401846134ce565b82611fa7565b610665612965565b6103a3826120d4565b610676612937565b61036e61068836849003840184613635565b826111d0565b610696612937565b61036e6106a8368490038401846136f2565b82612182565b6106be600e60005414602f612346565b81516106d99015806106d257508251600154145b6030612346565b6000808055600280546106eb906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906135d0565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c91906137d0565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33846040516107af9291906137fe565b60405180910390a16107c33415602d612346565b80516107db906001600160a01b03163314602e612346565b604080516060808201835260008284018181528352835191820184528082526020808301829052828501829052808401928352855184516001600160a01b03909116905282516001905282514391015290519092019190915261083d8161236b565b50505050565b610853600c600054146021612346565b815161086e90158061086757508251600154145b6022612346565b600080805560028054610880906135d0565b80601f01602080910402602001604051908101604052809291908181526020018280546108ac906135d0565b80156108f95780601f106108ce576101008083540402835291602001916108f9565b820191906000526020600020905b8154815290600101906020018083116108dc57829003601f168201915b50505050508060200190518101906109119190613826565b905061091b6129fe565b7f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b6338560405161094c9291906138b3565b60405180910390a161096034156020612346565b610969336120d4565b8152600081515160018111156109815761098161302b565b141561099357600060208201526109c3565b600181515160018111156109a9576109a961302b565b14156109c357805160409081015190820181905260208201525b60006109ce336117ee565b5160018111156109e0576109e061302b565b14156109f25760006060820152610a1d565b60016109fd336117ee565b516001811115610a0f57610a0f61302b565b1415610a1d57600160608201525b806020015182608001511015610a34576000610a3a565b80606001515b15610cd75760008151516001811115610a5557610a5561302b565b1415610a675760006080820152610a96565b60018151516001811115610a7d57610a7d61302b565b1415610a965780516040015160a0820181905260808201525b6000610aa133610dbb565b516001811115610ab357610ab361302b565b1415610ad15760408201516001600160a01b031660c0820152610b17565b6001610adc33610dbb565b516001811115610aee57610aee61302b565b1415610b1757610afd33610dbb565b604001516001600160a01b031660e0820181905260c08201525b80608001518260800151610b2b91906138f3565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b71573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516b1c99599d5b9914185cdcd95960a21b90525190840151915160008051602061408c83398151915292610bc9929161390a565b60405180910390a1604051600181527ffaf86582c4f611f0e8b1545b20114f5ba32d6055d1595e0b59f6e8bb37483b2d9060200160405180910390a16001835260008151516001811115610c1f57610c1f61302b565b1415610c32576000610140820152610c63565b60018151516001811115610c4857610c4861302b565b1415610c635780516040015161016082018190526101408201525b610c6b612ab6565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216910152610140820151610100830151610cab91906138f3565b6020808301805192909252815143910152610100830151905160400152610cd181612445565b5061083d565b610180810180516b1c99599d5b9911985a5b195960a21b905251602083015160405160008051602061408c83398151915292610d1492909161390a565b60405180910390a1604051600081527fd64068c90fa057a3daf5cea40d6d45db7c43174e5e31e896a55134326e3352d09060200160405180910390a160008352610d5c612ab6565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608501518184018051919091528051439201919091526080850151905190910152610db481612445565b5050505050565b610dc3612965565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610df257610df261302b565b1415610e72576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610e3357610e3361302b565b6001811115610e4457610e4461302b565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610e92600d600054146025612346565b8151610ead901580610ea657508251600154145b6026612346565b600080805560028054610ebf906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610eeb906135d0565b8015610f385780601f10610f0d57610100808354040283529160200191610f38565b820191906000526020600020905b815481529060010190602001808311610f1b57829003601f168201915b5050505050806020019051810190610f509190613a93565b9050610f7660405180606001604052806000815260200160008152602001600081525090565b610f87826040015143106027612346565b60408051338152855160208083019190915286015151518183015290517f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f29181900360600190a160208401515151610fe29015156023612346565b60208083015160800151908501515151116110265760208083015160a00151908501515151106110185760208401515151611030565b816020015160800151611030565b8160200151608001515b8082526101208301516110439190613b41565b602082015280516110579034146024612346565b7f5e1e7b6bd4e184db561e4ef52bfc49c324410390a8a6fb823a3c135b13435bff816020015160405161108c91815260200190565b60405180910390a1602081810151848201523360008181526004835260408082208054600161ff01600160b01b031990911662010000909502949094178417905560068452808220805462ff00ff191684179055600584529020805460ff191682178155918601515151910181905560a083015161110a9190613b41565b6040820152611117612b03565b825181516001600160a01b039182169052602080850180518451830152604080870151855182015260608088015186519091015260808088015186519516940193909352918401805182850180519190915251339083015291510151905160019111611184576000611187565b60015b14611193576001611196565b60005b60208083018051921515604090930192909252815143606090910152610100850151825160800152830151905160a00152610db48161251d565b6111e06011600054146034612346565b81516111fb9015806111f457508251600154145b6035612346565b60008080556002805461120d906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611239906135d0565b80156112865780601f1061125b57610100808354040283529160200191611286565b820191906000526020600020905b81548152906001019060200180831161126957829003601f168201915b505050505080602001905181019061129e9190613b59565b90506112a8612b5f565b7f22eceeaaff2766f0b2c4af78eb81d3cbb469fd21d73b1fe42c7ed512b01c842f33856040516112d9929190613c14565b60405180910390a160006020850151515160028111156112fb576112fb61302b565b141561142657602080850151510151815261131834156031612346565b604051600081527f1837c98b32c78bb7e6c1187cc42c9687bbc2daf81a136f26ca147d3f1761af929060200160405180910390a16000604084810191909152602082810180516a18dbdb9d1c9a589d5d195960aa1b9052518351805190830151845192516001600160601b031916835292820152918201527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf3906060015b60405180910390a16040805160608082018352600082840181815283528351918201845280825260208083018290529382015291810191909152825181516001600160a01b03909116905260208082018051600190528051439083015290840151905160400152610cd18161236b565b60016020850151515160028111156114405761144061302b565b14156114f6576020840151516040908101519082015261146234156032612346565b604051600081527fad0630c61dc923d64dde0cbe2751bb96d8910c0f40d13548965fa281eecb4a079060200160405180910390a1600060608085019190915260408083015151805160208201518284015194830151608084015160a09094015194517f5a31e291c4809d043f9e9d4219376d8d7ffd40f7d224c6f958ce7758458b194d966113b69694959394909391613ce9565b60026020850151515160028111156115105761151061302b565b141561083d576020840151516060908101519082015261153234156033612346565b604051600081527fb507582e4b8b4ecc3ddb70c60df9a06b7b1631ab1ed8aeb96fbf16cbe1b04c8b9060200160405180910390a1600060808481019190915281018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf391016113b6565b6115e76003600054146012612346565b81516116029015806115fb57508251600154145b6013612346565b600080805560028054611614906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611640906135d0565b801561168d5780601f106116625761010080835404028352916020019161168d565b820191906000526020600020905b81548152906001019060200180831161167057829003601f168201915b50505050508060200190518101906116a59190613d43565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633846040516116d89291906137fe565b60405180910390a16116ec34156010612346565b8051611704906001600160a01b031633146011612346565b60208101516040808201516101008301516060840151845160c09095015193517fd8d5d178d7b3e8cb359428334fdd1811a327db94fe043e010fb363fde503837e956117539590913090613ce9565b60405180910390a1611763612b03565b815181516001600160a01b039182169052602080840180518451830152606080860151855160409081019190915282518101518651830152915160c001518551908516608091820152838601805160009081905288518251971696909501959095528451830184905284514392019190915290850151835190910152905160a0015261083d8161251d565b6117f6612965565b60016001600160a01b03831660009081526006602052604090205460ff1660018111156118255761182561302b565b1415610e72576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156118665761186661302b565b60018111156118775761187761302b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b6118b2600d60005414602a612346565b81516118cd9015806118c657508251600154145b602b612346565b6000808055600280546118df906135d0565b80601f016020809104026020016040519081016040528092919081815260200182805461190b906135d0565b80156119585780601f1061192d57610100808354040283529160200191611958565b820191906000526020600020905b81548152906001019060200180831161193b57829003601f168201915b50505050508060200190518101906119709190613a93565b90506119848160400151431015602c612346565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033846040516119b59291906137fe565b60405180910390a16119c934156028612346565b80516119e1906001600160a01b031633146029612346565b6119e9612b03565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a08088015185880180519190915260c089015181519716969095019590955260e0870151845190151593019290925282514391015261010085015182519091015261012084015190519091015261083d8161251d565b611a916005600054146016612346565b8151611aac901580611aa557508251600154145b6017612346565b600080805560028054611abe906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611aea906135d0565b8015611b375780601f10611b0c57610100808354040283529160200191611b37565b820191906000526020600020905b815481529060010190602001808311611b1a57829003601f168201915b5050505050806020019051810190611b4f9190613e16565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051611b829291906137fe565b60405180910390a1611b9634156014612346565b8051611bae906001600160a01b031633146015612346565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015611bef573d6000803e3d6000fd5b50805160408201516001600160a01b03909116906108fc90611c1190806138f3565b6040518115909202916000818181858888f19350505050158015611c39573d6000803e3d6000fd5b5060008080556001819055611c5090600290612bd0565b505050565b611c65600160005414600a612346565b8151611c80901580611c7957508251600154145b600b612346565b600080805560028054611c92906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611cbe906135d0565b8015611d0b5780601f10611ce057610100808354040283529160200191611d0b565b820191906000526020600020905b815481529060010190602001808311611cee57829003601f168201915b5050505050806020019051810190611d2391906137d0565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153384604051611d569291906138b3565b60405180910390a1611d6a34156008612346565b8051611d82906001600160a01b031633146009612346565b60208301515115611de55760408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b60405160208183030381529060405260029080519060200190610db4929190612c0a565b60408051602081019091526000815281516001600160a01b0316808252600e6000554360015560408051602081019290925201611dc1565b611e2d600960005414601e612346565b8151611e48901580611e4157508251600154145b601f612346565b600080805560028054611e5a906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611e86906135d0565b8015611ed35780601f10611ea857610100808354040283529160200191611ed3565b820191906000526020600020905b815481529060010190602001808311611eb657829003601f168201915b5050505050806020019051810190611eeb9190613e32565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051611f1e9291906137fe565b60405180910390a1611f323415601c612346565b8051611f4a906001600160a01b03163314601d612346565b611f52612ab6565b815181516001600160a01b039182169052602080840151835182015260408085015184519316928101929092526060840180518285018051919091528051439301929092525190519091015261083d81612445565b611fb7600760005414601a612346565b8151611fd2901580611fcb57508251600154145b601b612346565b600080805560028054611fe4906135d0565b80601f0160208091040260200160405190810160405280929190818152602001828054612010906135d0565b801561205d5780601f106120325761010080835404028352916020019161205d565b820191906000526020600020905b81548152906001019060200180831161204057829003601f168201915b50505050508060200190518101906120759190613e16565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516120a89291906137fe565b60405180910390a16120bc34156018612346565b8051611bae906001600160a01b031633146019612346565b6120dc612965565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561210b5761210b61302b565b1415610e72576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561214c5761214c61302b565b600181111561215d5761215d61302b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b612192600260005414600e612346565b81516121ad9015806121a657508251600154145b600f612346565b6000808055600280546121bf906135d0565b80601f01602080910402602001604051908101604052809291908181526020018280546121eb906135d0565b80156122385780601f1061220d57610100808354040283529160200191612238565b820191906000526020600020905b81548152906001019060200180831161221b57829003601f168201915b505050505080602001905181019061225091906137d0565b90506122686040518060200160405280600081525090565b7fcb3249930622f9383132fcb6b6dce9e421828f4e568a511db48a99b5977a69f53385604051612299929190613f39565b60405180910390a16122ad3415600c612346565b81516122c5906001600160a01b03163314600d612346565b6122d0606443613b41565b81526122da612c8e565b82516001600160a01b0316815260208086015151818301524360408084018290528451606085015260036000556001919091555161231a91839101613f67565b6040516020818303038152906040526002908051906020019061233e929190612c0a565b505050505050565b8161036e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156123e857604080518082018252600080825260208083018281528551516001600160a01b0316808552868301518601518252601190935543600155845191820192909252905192810192909252906060015b60405160208183030381529060405260029080519060200190611c50929190612c0a565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561242b573d6000803e3d6000fd5b506000808055600181905561244290600290612bd0565b50565b602081015151156123e8576124946040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528388018051516060808a0191825291518401516080808b01918252600c60005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c0016123c4565b612525612cc5565b60208201516080015182516040015111612540576000612557565b816020015160400151612554576001612557565b60005b1561262057612564612cfe565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152865160809081015185169086015282870180515160a080880191909152815185015190951660c08701528051830151151560e08701528051909101516101008601525190920151610120840152600d6000554360015590516125fc91839101613fa8565b6040516020818303038152906040526002908051906020019061083d929190612c0a565b60008260000151602001516020015183602001516000015110612644576000612647565b60015b1415612753578051651c185cdcd95960d21b9052805182516060015160405160008051602061408c8339815191529261268192909161390a565b60405180910390a16064826020015160a0015161269e919061403a565b602080830182905283015160a001516126b791906138f3565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156126fc573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b03908116865288516080015116909152858501519052600590915543600155915190916125fc9183910161405c565b815160209081015160e001519083015151106128735760608082018051651c185cdcd95960d21b90525183519091015160405160008051602061408c833981519152926127a192909161390a565b60405180910390a16064826020015160a001516127be919061403a565b60808201819052602083015160a001516127d891906138f3565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561281b573d6000803e3d6000fd5b5060408051606081018252600080825260208083018281528385018381528751516001600160a01b0390811686528851608001511690915260a08601519052600790915543600155915190916125fc9183910161405c565b60c0810180516519985a5b195960d21b90525182516060015160405160008051602061408c833981519152926128aa92909161390a565b60405180910390a160408051608080820183526000808352602080840182815284860183815260608087018581528a51516001600160a01b03908116808a528c5184015186528c87018051880151831686525160a09081015184526009909855436001558a51968701529351988501989098529051909116908201529351918401919091529091016125fc565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016129a2612d74565b905290565b6040518060400160405280600081526020016129a260405180602001604052806000151581525090565b6040518060400160405280600081526020016129a260408051808201909152600060208201908152815290565b604051806101a00160405280612a12612965565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001612a83604051806020016040528060006001600160601b03191681525090565b815260200160008152602001600081526020016129a2604051806020016040528060006001600160601b03191681525090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016129a260405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280612b16612d87565b81526020016129a26040518060c001604052806000815260200160006001600160a01b031681526020016000151581526020016000815260200160008152602001600081525090565b6040805160e081018252600060a0820181815260c08301829052825282516020808201855291815290820152908101612b96612dce565b8152602001612bb8604051806040016040528060008152602001600081525090565b81526040805160208181019092526000815291015290565b508054612bdc906135d0565b6000825580601f10612bec575050565b601f0160209004906000526020600020908101906124429190612de1565b828054612c16906135d0565b90600052602060002090601f016020900481019282612c385760008555612c7e565b82601f10612c5157805160ff1916838001178555612c7e565b82800160010185558215612c7e579182015b82811115612c7e578251825591602001919060010190612c63565b50612c8a929150612de1565b5090565b604051806080016040528060006001600160a01b03168152602001612cb1612df6565b815260200160008152602001600081525090565b6040805161010081018252600060e082018181528252602080830182905282840182905283519081019093528252906060820190612a83565b60405180610140016040528060006001600160a01b03168152602001612d22612df6565b8152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160001515815260200160008152602001600081525090565b60405180602001604052806129a2612ec5565b6040518060a0016040528060006001600160a01b03168152602001612daa612df6565b8152602001600081526020016000815260200160006001600160a01b031681525090565b60405180602001604052806129a2612f24565b5b80821115612c8a5760008155600101612de2565b604080516101e08101909152600061012082018181526101408301829052610160830182905261018083018290526101a083018290526101c0830191909152819081526020016000815260200160008152602001612e7b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016129a2604051806020016040528060006001600160601b03191681525090565b60408051608081019091528060008152602001612ef5604051806040016040528060008152602001600081525090565b8152602001612f02612dce565b81526020016129a2604051806040016040528060008152602001600081525090565b6040518060c0016040528060008152602001612f56604051806020016040528060006001600160601b03191681525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a0820152910190612974565b600060408284031215612fd057600080fd5b50919050565b600060408284031215612fe857600080fd5b612ff28383612fbe565b9392505050565b6001600160a01b038116811461244257600080fd5b60006020828403121561302057600080fd5b8135612ff281612ff9565b634e487b7160e01b600052602160045260246000fd5b600281106124425761244261302b565b8151606082019061306181613041565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561309c57600080fd5b50508035926020909101359150565b815160608201906130bb81613041565b8083525060208301511515602083015260408301511515604083015292915050565b6000602082840312156130ef57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b8181101561312a5785810183015185820160600152820161310e565b8181111561313c576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561318457634e487b7160e01b600052604160045260246000fd5b6001600160601b03198116811461244257600080fd5b6000602082840312156132da57600080fd5b6132e2613153565b905081356132ef816132b2565b815292915050565b69ffffffffffffffffffff198116811461244257600080fd5b600060a0828403121561332257600080fd5b61332a61318a565b905081358152602082013560208201526040820135604082015260608201356060820152608082013561335c816132f7565b608082015292915050565b600060c0828403121561337957600080fd5b6133816131bb565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a08201356133bd816132b2565b60a082015292915050565b8035610e7d81612ff9565b60006101e082840312156133e657600080fd5b6133ee6131bb565b90508135815261340183602084016132c8565b60208201526134138360408401613310565b60408201526134258360e08401613367565b60608201526101a082013561343981612ff9565b60808201526101c08201356133bd81612ff9565b60006101e0828403121561346057600080fd5b612ff283836133d3565b8151606082019061347a81613041565b808352506020830151151560208301526040830151604083015292915050565b60006102a08284031215612fd057600080fd5b60006102608284031215612fd057600080fd5b801515811461244257600080fd5b6000604082840312156134e057600080fd5b6134e86131ec565b8235815260208301356134fa816134c0565b60208201529392505050565b6000818303604081121561351957600080fd5b6135216131ec565b8335815291506020601f198201121561353957600080fd5b50613542613153565b6020830135613550816134c0565b8152602082015292915050565b60006040828403121561356f57600080fd5b612ff28383613506565b6000818303604081121561358c57600080fd5b6135946131ec565b833581526020601f19830112156135aa57600080fd5b6135b2613153565b91506135bc613153565b602094850135815282529283015250919050565b600181811c908216806135e457607f821691505b60208210811415612fd057634e487b7160e01b600052602260045260246000fd5b60006040828403121561361757600080fd5b61361f6131ec565b9050813581526020820135602082015292915050565b60008183036102a081121561364957600080fd5b6136516131ec565b83358152610280601f198301121561366857600080fd5b613670613153565b61367861321d565b60208601356003811061368a57600080fd5b81526136998760408801613605565b60208201526101e0607f19850112156136b157600080fd5b6136b9613153565b93506136c887608088016133d3565b84528360408201526136de876102608801613605565b606082015281526020820152949350505050565b600081830361026081121561370657600080fd5b61370e6131ec565b8335815261024080601f198401121561372657600080fd5b61372e613153565b925061373861324e565b6137458760208801613367565b815260e0860135602082015261010080870135604083015261376b886101208901613310565b60608301526101c087013560808301526101e087013560a083015261379361020088016133c8565b60c083015261022087013560e08301526137af888489016132c8565b9082015283525060208101919091529392505050565b8051610e7d81612ff9565b6000602082840312156137e257600080fd5b6137ea613153565b82516137f581612ff9565b81529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a0828403121561383857600080fd5b60405160a0810181811067ffffffffffffffff8211171561386957634e487b7160e01b600052604160045260246000fd5b604052825161387781612ff9565b815260208381015190820152604083015161389181612ff9565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b038316815260608101612ff2602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b600082821015613905576139056138dd565b500390565b91516001600160601b0319168252602082015260400190565b600060c0828403121561393557600080fd5b61393d6131bb565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a08201516133bd816132b2565b600060a0828403121561398b57600080fd5b61399361318a565b905081518152602082015160208201526040820151604082015260608201516060820152608082015161335c816132f7565b6000602082840312156139d757600080fd5b6139df613153565b905081516132ef816132b2565b600061024082840312156139ff57600080fd5b613a0761324e565b9050613a138383613923565b815260c0820151602082015260e08201516040820152610100613a3884828501613979565b60608301526101a083015160808301526101c083015160a0830152613a606101e084016137c5565b60c083015261020083015160e0830152613a7e8461022085016139c5565b9082015292915050565b8051610e7d816134c0565b60006103608284031215613aa657600080fd5b613aae613280565b613ab7836137c5565b8152613ac684602085016139ec565b602082015261026083015160408201526102808301516060820152613aee6102a084016137c5565b60808201526102c083015160a0820152613b0b6102e084016137c5565b60c0820152613b1d6103008401613a88565b60e08201526103208301516101008201526103409092015161012083015250919050565b60008219821115613b5457613b546138dd565b500190565b600060408284031215613b6b57600080fd5b613b736131ec565b8251613b7e81612ff9565b81526020928301519281019290925250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526001600160601b031960a08201511660a08301525050565b6001600160a01b03838116825282516020808401919091528301515180516102c0840192919060038110613c4a57613c4a61302b565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526001600160601b03196020820151511660c08601526040810151613c9a60e0870182613b93565b506060810151613cae610180870182613bd0565b506080810151831661024086015260a0015190911661026084015260600151805161028084015260208101516102a08401525b509392505050565b86815285516001600160601b03191660208201526101e08101613d0f6040830187613b93565b613d1c60e0830186613bd0565b6001600160a01b039384166101a0830152919092166101c090920191909152949350505050565b60006102a08284031215613d5657600080fd5b613d5e61321d565b8251613d6981612ff9565b8152613d7884602085016139ec565b6020820152610260830151604082015261028090920151606083015250919050565b600060608284031215613dac57600080fd5b6040516060810181811067ffffffffffffffff82111715613ddd57634e487b7160e01b600052604160045260246000fd5b80604052508091508251613df081612ff9565b81526020830151613e0081612ff9565b6020820152604092830151920191909152919050565b600060608284031215613e2857600080fd5b612ff28383613d9a565b600060808284031215613e4457600080fd5b6040516080810181811067ffffffffffffffff82111715613e7557634e487b7160e01b600052604160045260246000fd5b6040528251613e8381612ff9565b8152602083810151908201526040830151613e9d81612ff9565b60408201526060928301519281019290925250919050565b613ec0828251613bd0565b602081015160c0830152604081015160e08301526060810151610100613ee881850183613b93565b60808301516101a085015260a08301516101c085015260c08301516001600160a01b03166101e085015260e083015161020085015290910151516001600160601b0319166102209092019190915250565b60006102808201905060018060a01b0384168252825160208301526020830151613ce1604084018251613eb5565b81516001600160a01b031681526020808301516102a0830191613f8c90840182613eb5565b5060408301516102608301526060909201516102809091015290565b81516001600160a01b0316815261036081016020830151613fcc6020840182613eb5565b506040830151610260830152606083015161028083015260808301516001600160a01b039081166102a084015260a08401516102c084015260c0840151166102e083015260e08301511515610300830152610100830151610320830152610120909201516103409091015290565b60008261405757634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606081016103a356fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da26469706673582212204fc7c3458f791a8ed5bf0ab8b39f910284f77d8de169fa7bd5bb43940cde0d7a64736f6c634300080c0033`,
  BytecodeLen: 17213,
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
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:140:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:267:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:170:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:267:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:202:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:267:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:204:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:114:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:224:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:267:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:226:37:after expr stmt semicolon',
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
