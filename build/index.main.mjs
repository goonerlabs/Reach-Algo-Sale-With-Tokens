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
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  return {
    created: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    log: [ctc1, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc10 = stdlib.T_Object({
    PrivateSaleAmt: ctc3,
    contract: ctc6,
    description: ctc7,
    hardCap: ctc3,
    id: ctc3,
    link: ctc8,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc0,
    softCap: ctc3,
    title: ctc9
    });
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc0
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc3
    });
  const ctc14 = stdlib.T_Data({
    None: ctc11,
    Some: ctc11
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc13;
  
  const map2_ctc = ctc14;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5],
      2: [ctc0, ctc2, ctc3, ctc5],
      3: [ctc0, ctc2, ctc5, ctc10, ctc3, ctc3, ctc3],
      5: [ctc0, ctc2, ctc3, ctc3, ctc0, ctc3, ctc3, ctc0, ctc5, ctc3],
      6: [ctc0, ctc2, ctc3, ctc3, ctc3, ctc3, ctc0, ctc5, ctc3, ctc3],
      10: [ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc3, ctc5, ctc3],
      11: [ctc0, ctc2, ctc3, ctc3, ctc0, ctc3, ctc3, ctc0, ctc5, ctc3],
      12: [ctc0, ctc2, ctc3, ctc3, ctc3, ctc3, ctc0, ctc5, ctc3, ctc3],
      16: [ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc3, ctc5, ctc3],
      17: [ctc0, ctc2, ctc3, ctc3, ctc0, ctc5, ctc3],
      21: [ctc0, ctc2, ctc3, ctc0, ctc3, ctc5, ctc3],
      22: [ctc0, ctc2, ctc10, ctc3, ctc3, ctc3, ctc0, ctc1, ctc3, ctc3, ctc0, ctc3, ctc5, ctc3],
      27: [ctc0, ctc2, ctc5, ctc3]
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
export async function _Contributors_claimRefund21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund21 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  
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
  
  
  const [v1087, v1097, v1151, v1175, v1595, v1602, v1603] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc1, ctc6, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1611 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1151, v1175, v1595, v1602, v1603, v1611],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1615], secs: v1617, time: v1616, didSend: v542, from: v1614 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1619 = null;
      const v1620 = await txn1.getOutput('Contributors_claimRefund', 'v1619', ctc0, v1619);
      
      const v1626 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1614), null);
      let v1627;
      switch (v1626[0]) {
        case 'None': {
          const v1628 = v1626[1];
          v1627 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1629 = v1626[1];
          v1627 = v1629;
          
          break;
          }
        }
      const v1630 = stdlib.ge(v1603, v1627);
      const v1631 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1614), null);
      let v1632;
      switch (v1631[0]) {
        case 'None': {
          const v1633 = v1631[1];
          v1632 = false;
          
          break;
          }
        case 'Some': {
          const v1634 = v1631[1];
          v1632 = true;
          
          break;
          }
        }
      const v1635 = v1630 ? v1632 : false;
      if (v1635) {
        let v1637;
        switch (v1626[0]) {
          case 'None': {
            const v1638 = v1626[1];
            v1637 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1639 = v1626[1];
            v1637 = v1639;
            
            break;
            }
          }
        const v1640 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1614), null);
        let v1641;
        switch (v1640[0]) {
          case 'None': {
            const v1642 = v1640[1];
            v1641 = v1175;
            
            break;
            }
          case 'Some': {
            const v1643 = v1640[1];
            v1641 = v1643;
            
            break;
            }
          }
        const v1647 = stdlib.sub(v1603, v1637);
        sim_r.txns.push({
          kind: 'from',
          to: v1641,
          tok: undefined /* Nothing */
          });
        const v1648 = stdlib.sub(v1595, stdlib.checkedBigNumberify('./index.rsh:208:30:decimal', stdlib.UInt_max, '1'));
        const v3007 = v1648;
        const v3009 = v1602;
        const v3010 = v1647;
        const v3011 = stdlib.gt(v1648, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
        const v3012 = stdlib.gt(v1647, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
        const v3013 = v3011 ? v3012 : false;
        if (v3013) {
          sim_r.isHalt = false;
          }
        else {
          const v3014 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v3015 = v3014[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v3016 = stdlib.sub(v1647, v3015);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3017 = v3014[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3018 = stdlib.sub(v3015, v3017);
          const v3019 = v3014[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3020 = [v3018, v3017, v3019];
          const v3021 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3020);
          const v3022 = v3021[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3023 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3024 = stdlib.sub(v3023, v3017);
          const v3025 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3026 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3027 = [v3025, v3024, v3026];
          const v3028 = stdlib.Array_set(v3021, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3027);
          stdlib.simTokenBurn(sim_r, v1097, v3017);
          const v3029 = v3028[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3030 = v3029[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3030) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1655 = 'refundFailed        ';
        null;
        const v3032 = v1595;
        const v3034 = v1602;
        const v3035 = v1603;
        const v3036 = stdlib.gt(v1595, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
        const v3037 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
        const v3038 = v3036 ? v3037 : false;
        if (v3038) {
          sim_r.isHalt = false;
          }
        else {
          const v3039 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v3040 = v3039[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v3041 = stdlib.sub(v1603, v3040);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3042 = v3039[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3043 = stdlib.sub(v3040, v3042);
          const v3044 = v3039[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3045 = [v3043, v3042, v3044];
          const v3046 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3045);
          const v3047 = v3046[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3048 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3049 = stdlib.sub(v3048, v3042);
          const v3050 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3051 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3052 = [v3050, v3049, v3051];
          const v3053 = stdlib.Array_set(v3046, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3052);
          stdlib.simTokenBurn(sim_r, v1097, v3042);
          const v3054 = v3053[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3055 = v3054[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3055) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc3, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1615], secs: v1617, time: v1616, didSend: v542, from: v1614 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1619 = null;
  const v1620 = await txn1.getOutput('Contributors_claimRefund', 'v1619', ctc0, v1619);
  if (v542) {
    stdlib.protect(ctc0, await interact.out(v1615, v1620), {
      at: './index.rsh:203:14:application',
      fs: ['at ./index.rsh:203:14:application call to [unknown function] (defined at: ./index.rsh:203:14:function exp)', 'at ./index.rsh:204:17:application call to "notify" (defined at: ./index.rsh:203:40:function exp)', 'at ./index.rsh:203:40:application call to [unknown function] (defined at: ./index.rsh:203:40:function exp)'],
      msg: 'out',
      who: 'Contributors_claimRefund'
      });
    }
  else {
    }
  
  const v1626 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1614), null);
  let v1627;
  switch (v1626[0]) {
    case 'None': {
      const v1628 = v1626[1];
      v1627 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1629 = v1626[1];
      v1627 = v1629;
      
      break;
      }
    }
  const v1630 = stdlib.ge(v1603, v1627);
  const v1631 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1614), null);
  let v1632;
  switch (v1631[0]) {
    case 'None': {
      const v1633 = v1631[1];
      v1632 = false;
      
      break;
      }
    case 'Some': {
      const v1634 = v1631[1];
      v1632 = true;
      
      break;
      }
    }
  const v1635 = v1630 ? v1632 : false;
  if (v1635) {
    let v1637;
    switch (v1626[0]) {
      case 'None': {
        const v1638 = v1626[1];
        v1637 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1639 = v1626[1];
        v1637 = v1639;
        
        break;
        }
      }
    const v1640 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1614), null);
    let v1641;
    switch (v1640[0]) {
      case 'None': {
        const v1642 = v1640[1];
        v1641 = v1175;
        
        break;
        }
      case 'Some': {
        const v1643 = v1640[1];
        v1641 = v1643;
        
        break;
        }
      }
    const v1647 = stdlib.sub(v1603, v1637);
    ;
    const v1648 = stdlib.sub(v1595, stdlib.checkedBigNumberify('./index.rsh:208:30:decimal', stdlib.UInt_max, '1'));
    const v3007 = v1648;
    const v3009 = v1602;
    const v3010 = v1647;
    const v3011 = stdlib.gt(v1648, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
    const v3012 = stdlib.gt(v1647, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
    const v3013 = v3011 ? v3012 : false;
    if (v3013) {
      return;
      }
    else {
      const v3014 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
      const v3015 = v3014[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
      const v3016 = stdlib.sub(v1647, v3015);
      ;
      ;
      const v3017 = v3014[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3018 = stdlib.sub(v3015, v3017);
      const v3019 = v3014[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3020 = [v3018, v3017, v3019];
      const v3021 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3020);
      const v3022 = v3021[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3023 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3024 = stdlib.sub(v3023, v3017);
      const v3025 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3026 = v3022[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3027 = [v3025, v3024, v3026];
      const v3028 = stdlib.Array_set(v3021, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3027);
      undefined /* TokenBurn */;
      const v3029 = v3028[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3030 = v3029[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3030) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1655 = 'refundFailed        ';
    null;
    const v3032 = v1595;
    const v3034 = v1602;
    const v3035 = v1603;
    const v3036 = stdlib.gt(v1595, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
    const v3037 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
    const v3038 = v3036 ? v3037 : false;
    if (v3038) {
      return;
      }
    else {
      const v3039 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
      const v3040 = v3039[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
      const v3041 = stdlib.sub(v1603, v3040);
      ;
      ;
      const v3042 = v3039[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3043 = stdlib.sub(v3040, v3042);
      const v3044 = v3039[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3045 = [v3043, v3042, v3044];
      const v3046 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3045);
      const v3047 = v3046[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3048 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3049 = stdlib.sub(v3048, v3042);
      const v3050 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3051 = v3047[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3052 = [v3050, v3049, v3051];
      const v3053 = stdlib.Array_set(v3046, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3052);
      undefined /* TokenBurn */;
      const v3054 = v3053[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3055 = v3054[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3055) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_claimToken10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken10 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  
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
  
  
  const [v1087, v1097, v1151, v1159, v1173, v1175, v1273, v1280, v1281] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1290 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:154:9:application call to [unknown function] (defined at: ./index.rsh:154:9:function exp)', 'at ./index.rsh:154:9:application call to [unknown function] (defined at: ./index.rsh:154:9:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1151, v1159, v1173, v1175, v1273, v1280, v1281, v1290],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1294], secs: v1296, time: v1295, didSend: v311, from: v1293 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1298 = null;
      const v1299 = await txn1.getOutput('Contributors_claimToken', 'v1298', ctc0, v1298);
      
      const v1305 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1293), null);
      let v1306;
      switch (v1305[0]) {
        case 'None': {
          const v1307 = v1305[1];
          v1306 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1308 = v1305[1];
          v1306 = v1308;
          
          break;
          }
        }
      const v1309 = stdlib.ge(v1281, v1306);
      const v1310 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1293), null);
      let v1311;
      switch (v1310[0]) {
        case 'None': {
          const v1312 = v1310[1];
          v1311 = false;
          
          break;
          }
        case 'Some': {
          const v1313 = v1310[1];
          v1311 = true;
          
          break;
          }
        }
      const v1314 = v1309 ? v1311 : false;
      if (v1314) {
        const v1315 = v1280[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
        const v1316 = v1315[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
        const v1317 = stdlib.mul(v1316, v1173);
        const v1319 = stdlib.div(v1317, v1159);
        let v1321;
        switch (v1305[0]) {
          case 'None': {
            const v1322 = v1305[1];
            v1321 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1323 = v1305[1];
            v1321 = v1323;
            
            break;
            }
          }
        const v1324 = stdlib.mul(v1319, v1321);
        const v1325 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1293), null);
        let v1326;
        switch (v1325[0]) {
          case 'None': {
            const v1327 = v1325[1];
            v1326 = v1175;
            
            break;
            }
          case 'Some': {
            const v1328 = v1325[1];
            v1326 = v1328;
            
            break;
            }
          }
        const v1332 = stdlib.sub(v1281, v1324);
        sim_r.txns.push({
          kind: 'from',
          to: v1326,
          tok: undefined /* Nothing */
          });
        const v1333 = stdlib.sub(v1273, stdlib.checkedBigNumberify('./index.rsh:159:29:decimal', stdlib.UInt_max, '1'));
        const v3057 = v1316;
        const v3059 = v1280;
        const v3060 = v1332;
        const v3061 = stdlib.gt(v1316, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
        const v3062 = stdlib.gt(v1333, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
        const v3063 = v3061 ? v3062 : false;
        if (v3063) {
          sim_r.isHalt = false;
          }
        else {
          const v3066 = stdlib.sub(v1332, v1316);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3067 = v1315[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3068 = stdlib.sub(v1316, v3067);
          const v3069 = v1315[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3070 = [v3068, v3067, v3069];
          const v3071 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3070);
          const v3072 = v3071[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3073 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3074 = stdlib.sub(v3073, v3067);
          const v3075 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3076 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3077 = [v3075, v3074, v3076];
          const v3078 = stdlib.Array_set(v3071, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3077);
          stdlib.simTokenBurn(sim_r, v1097, v3067);
          const v3079 = v3078[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3080 = v3079[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3080) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1341 = 'claimFailed         ';
        null;
        const v1342 = v1280[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
        const v1343 = v1342[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
        const v3082 = v1343;
        const v3084 = v1280;
        const v3085 = v1281;
        const v3086 = stdlib.gt(v1343, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
        const v3087 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
        const v3088 = v3086 ? v3087 : false;
        if (v3088) {
          sim_r.isHalt = false;
          }
        else {
          const v3091 = stdlib.sub(v1281, v1343);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3092 = v1342[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3093 = stdlib.sub(v1343, v3092);
          const v3094 = v1342[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3095 = [v3093, v3092, v3094];
          const v3096 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3095);
          const v3097 = v3096[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3099 = stdlib.sub(v3098, v3092);
          const v3100 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3101 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3102 = [v3100, v3099, v3101];
          const v3103 = stdlib.Array_set(v3096, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3102);
          stdlib.simTokenBurn(sim_r, v1097, v3092);
          const v3104 = v3103[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3105 = v3104[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3105) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1294], secs: v1296, time: v1295, didSend: v311, from: v1293 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1298 = null;
  const v1299 = await txn1.getOutput('Contributors_claimToken', 'v1298', ctc0, v1298);
  if (v311) {
    stdlib.protect(ctc0, await interact.out(v1294, v1299), {
      at: './index.rsh:154:10:application',
      fs: ['at ./index.rsh:154:10:application call to [unknown function] (defined at: ./index.rsh:154:10:function exp)', 'at ./index.rsh:155:13:application call to "notify" (defined at: ./index.rsh:154:35:function exp)', 'at ./index.rsh:154:35:application call to [unknown function] (defined at: ./index.rsh:154:35:function exp)'],
      msg: 'out',
      who: 'Contributors_claimToken'
      });
    }
  else {
    }
  
  const v1305 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1293), null);
  let v1306;
  switch (v1305[0]) {
    case 'None': {
      const v1307 = v1305[1];
      v1306 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1308 = v1305[1];
      v1306 = v1308;
      
      break;
      }
    }
  const v1309 = stdlib.ge(v1281, v1306);
  const v1310 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1293), null);
  let v1311;
  switch (v1310[0]) {
    case 'None': {
      const v1312 = v1310[1];
      v1311 = false;
      
      break;
      }
    case 'Some': {
      const v1313 = v1310[1];
      v1311 = true;
      
      break;
      }
    }
  const v1314 = v1309 ? v1311 : false;
  if (v1314) {
    const v1315 = v1280[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
    const v1316 = v1315[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
    const v1317 = stdlib.mul(v1316, v1173);
    const v1319 = stdlib.div(v1317, v1159);
    let v1321;
    switch (v1305[0]) {
      case 'None': {
        const v1322 = v1305[1];
        v1321 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1323 = v1305[1];
        v1321 = v1323;
        
        break;
        }
      }
    const v1324 = stdlib.mul(v1319, v1321);
    const v1325 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1293), null);
    let v1326;
    switch (v1325[0]) {
      case 'None': {
        const v1327 = v1325[1];
        v1326 = v1175;
        
        break;
        }
      case 'Some': {
        const v1328 = v1325[1];
        v1326 = v1328;
        
        break;
        }
      }
    const v1332 = stdlib.sub(v1281, v1324);
    ;
    const v1333 = stdlib.sub(v1273, stdlib.checkedBigNumberify('./index.rsh:159:29:decimal', stdlib.UInt_max, '1'));
    const v3057 = v1316;
    const v3059 = v1280;
    const v3060 = v1332;
    const v3061 = stdlib.gt(v1316, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
    const v3062 = stdlib.gt(v1333, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
    const v3063 = v3061 ? v3062 : false;
    if (v3063) {
      return;
      }
    else {
      const v3066 = stdlib.sub(v1332, v1316);
      ;
      ;
      const v3067 = v1315[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3068 = stdlib.sub(v1316, v3067);
      const v3069 = v1315[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3070 = [v3068, v3067, v3069];
      const v3071 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3070);
      const v3072 = v3071[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3073 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3074 = stdlib.sub(v3073, v3067);
      const v3075 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3076 = v3072[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3077 = [v3075, v3074, v3076];
      const v3078 = stdlib.Array_set(v3071, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3077);
      undefined /* TokenBurn */;
      const v3079 = v3078[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3080 = v3079[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3080) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1341 = 'claimFailed         ';
    null;
    const v1342 = v1280[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
    const v1343 = v1342[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
    const v3082 = v1343;
    const v3084 = v1280;
    const v3085 = v1281;
    const v3086 = stdlib.gt(v1343, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
    const v3087 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
    const v3088 = v3086 ? v3087 : false;
    if (v3088) {
      return;
      }
    else {
      const v3091 = stdlib.sub(v1281, v1343);
      ;
      ;
      const v3092 = v1342[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3093 = stdlib.sub(v1343, v3092);
      const v3094 = v1342[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3095 = [v3093, v3092, v3094];
      const v3096 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3095);
      const v3097 = v3096[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3099 = stdlib.sub(v3098, v3092);
      const v3100 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3101 = v3097[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3102 = [v3100, v3099, v3101];
      const v3103 = stdlib.Array_set(v3096, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3102);
      undefined /* TokenBurn */;
      const v3104 = v3103[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3105 = v3104[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3105) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_claimToken16(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken16 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken16 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  
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
  
  
  const [v1087, v1097, v1151, v1159, v1173, v1175, v1447, v1454, v1455] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1464 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1151, v1159, v1173, v1175, v1447, v1454, v1455, v1464],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1468], secs: v1470, time: v1469, didSend: v439, from: v1467 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1472 = null;
      const v1473 = await txn1.getOutput('Contributors_claimToken', 'v1472', ctc0, v1472);
      
      const v1479 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1467), null);
      let v1480;
      switch (v1479[0]) {
        case 'None': {
          const v1481 = v1479[1];
          v1480 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1482 = v1479[1];
          v1480 = v1482;
          
          break;
          }
        }
      const v1483 = stdlib.ge(v1455, v1480);
      const v1484 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1467), null);
      let v1485;
      switch (v1484[0]) {
        case 'None': {
          const v1486 = v1484[1];
          v1485 = false;
          
          break;
          }
        case 'Some': {
          const v1487 = v1484[1];
          v1485 = true;
          
          break;
          }
        }
      const v1488 = v1483 ? v1485 : false;
      if (v1488) {
        const v1489 = v1454[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
        const v1490 = v1489[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
        const v1491 = stdlib.mul(v1490, v1173);
        const v1493 = stdlib.div(v1491, v1159);
        let v1495;
        switch (v1479[0]) {
          case 'None': {
            const v1496 = v1479[1];
            v1495 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1497 = v1479[1];
            v1495 = v1497;
            
            break;
            }
          }
        const v1498 = stdlib.mul(v1493, v1495);
        const v1499 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1467), null);
        let v1500;
        switch (v1499[0]) {
          case 'None': {
            const v1501 = v1499[1];
            v1500 = v1175;
            
            break;
            }
          case 'Some': {
            const v1502 = v1499[1];
            v1500 = v1502;
            
            break;
            }
          }
        const v1506 = stdlib.sub(v1455, v1498);
        sim_r.txns.push({
          kind: 'from',
          to: v1500,
          tok: undefined /* Nothing */
          });
        const v1509 = stdlib.sub(v1447, stdlib.checkedBigNumberify('./index.rsh:186:46:decimal', stdlib.UInt_max, '1'));
        const v3107 = v1509;
        const v3109 = v1454;
        const v3110 = v1506;
        const v3111 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
        const v3112 = stdlib.gt(v1490, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
        const v3113 = v3111 ? v3112 : false;
        if (v3113) {
          sim_r.isHalt = false;
          }
        else {
          const v3116 = stdlib.sub(v1506, v1490);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3117 = v1489[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3118 = stdlib.sub(v1490, v3117);
          const v3119 = v1489[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3120 = [v3118, v3117, v3119];
          const v3121 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3120);
          const v3122 = v3121[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3123 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3124 = stdlib.sub(v3123, v3117);
          const v3125 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3126 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3127 = [v3125, v3124, v3126];
          const v3128 = stdlib.Array_set(v3121, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3127);
          stdlib.simTokenBurn(sim_r, v1097, v3117);
          const v3129 = v3128[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3130 = v3129[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3130) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1515 = 'claimFailed         ';
        null;
        const v1516 = v1454[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
        const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
        const v3132 = v1447;
        const v3134 = v1454;
        const v3135 = v1455;
        const v3136 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
        const v3137 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
        const v3138 = v3136 ? v3137 : false;
        if (v3138) {
          sim_r.isHalt = false;
          }
        else {
          const v3141 = stdlib.sub(v1455, v1517);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v3142 = v1516[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v3143 = stdlib.sub(v1517, v3142);
          const v3144 = v1516[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3145 = [v3143, v3142, v3144];
          const v3146 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3145);
          const v3147 = v3146[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v3149 = stdlib.sub(v3148, v3142);
          const v3150 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v3151 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v3152 = [v3150, v3149, v3151];
          const v3153 = stdlib.Array_set(v3146, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3152);
          stdlib.simTokenBurn(sim_r, v1097, v3142);
          const v3154 = v3153[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v3155 = v3154[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v3155) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1468], secs: v1470, time: v1469, didSend: v439, from: v1467 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1472 = null;
  const v1473 = await txn1.getOutput('Contributors_claimToken', 'v1472', ctc0, v1472);
  if (v439) {
    stdlib.protect(ctc0, await interact.out(v1468, v1473), {
      at: './index.rsh:181:12:application',
      fs: ['at ./index.rsh:181:12:application call to [unknown function] (defined at: ./index.rsh:181:12:function exp)', 'at ./index.rsh:182:15:application call to "notify" (defined at: ./index.rsh:181:37:function exp)', 'at ./index.rsh:181:37:application call to [unknown function] (defined at: ./index.rsh:181:37:function exp)'],
      msg: 'out',
      who: 'Contributors_claimToken'
      });
    }
  else {
    }
  
  const v1479 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1467), null);
  let v1480;
  switch (v1479[0]) {
    case 'None': {
      const v1481 = v1479[1];
      v1480 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1482 = v1479[1];
      v1480 = v1482;
      
      break;
      }
    }
  const v1483 = stdlib.ge(v1455, v1480);
  const v1484 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1467), null);
  let v1485;
  switch (v1484[0]) {
    case 'None': {
      const v1486 = v1484[1];
      v1485 = false;
      
      break;
      }
    case 'Some': {
      const v1487 = v1484[1];
      v1485 = true;
      
      break;
      }
    }
  const v1488 = v1483 ? v1485 : false;
  if (v1488) {
    const v1489 = v1454[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
    const v1490 = v1489[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
    const v1491 = stdlib.mul(v1490, v1173);
    const v1493 = stdlib.div(v1491, v1159);
    let v1495;
    switch (v1479[0]) {
      case 'None': {
        const v1496 = v1479[1];
        v1495 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1497 = v1479[1];
        v1495 = v1497;
        
        break;
        }
      }
    const v1498 = stdlib.mul(v1493, v1495);
    const v1499 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1467), null);
    let v1500;
    switch (v1499[0]) {
      case 'None': {
        const v1501 = v1499[1];
        v1500 = v1175;
        
        break;
        }
      case 'Some': {
        const v1502 = v1499[1];
        v1500 = v1502;
        
        break;
        }
      }
    const v1506 = stdlib.sub(v1455, v1498);
    ;
    const v1509 = stdlib.sub(v1447, stdlib.checkedBigNumberify('./index.rsh:186:46:decimal', stdlib.UInt_max, '1'));
    const v3107 = v1509;
    const v3109 = v1454;
    const v3110 = v1506;
    const v3111 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
    const v3112 = stdlib.gt(v1490, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
    const v3113 = v3111 ? v3112 : false;
    if (v3113) {
      return;
      }
    else {
      const v3116 = stdlib.sub(v1506, v1490);
      ;
      ;
      const v3117 = v1489[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3118 = stdlib.sub(v1490, v3117);
      const v3119 = v1489[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3120 = [v3118, v3117, v3119];
      const v3121 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3120);
      const v3122 = v3121[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3123 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3124 = stdlib.sub(v3123, v3117);
      const v3125 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3126 = v3122[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3127 = [v3125, v3124, v3126];
      const v3128 = stdlib.Array_set(v3121, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3127);
      undefined /* TokenBurn */;
      const v3129 = v3128[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3130 = v3129[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3130) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1515 = 'claimFailed         ';
    null;
    const v1516 = v1454[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
    const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
    const v3132 = v1447;
    const v3134 = v1454;
    const v3135 = v1455;
    const v3136 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
    const v3137 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
    const v3138 = v3136 ? v3137 : false;
    if (v3138) {
      return;
      }
    else {
      const v3141 = stdlib.sub(v1455, v1517);
      ;
      ;
      const v3142 = v1516[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
      const v3143 = stdlib.sub(v1517, v3142);
      const v3144 = v1516[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3145 = [v3143, v3142, v3144];
      const v3146 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3145);
      const v3147 = v3146[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
      const v3149 = stdlib.sub(v3148, v3142);
      const v3150 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
      const v3151 = v3147[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
      const v3152 = [v3150, v3149, v3151];
      const v3153 = stdlib.Array_set(v3146, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v3152);
      undefined /* TokenBurn */;
      const v3154 = v3153[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
      const v3155 = v3154[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
      if (v3155) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_contribute22(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute22 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute22 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc11 = stdlib.T_Object({
    PrivateSaleAmt: ctc3,
    contract: ctc7,
    description: ctc8,
    hardCap: ctc3,
    id: ctc3,
    link: ctc9,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc3]);
  
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
  
  
  const [v1087, v1097, v1147, v1151, v1154, v1159, v1167, v1172, v1173, v1174, v1175, v1176, v1182, v1183] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22'), [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3]);
  const v1195 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1147, v1151, v1154, v1159, v1167, v1172, v1173, v1174, v1175, v1176, v1182, v1183, v1195],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [v1196, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1203], secs: v1205, time: v1204, didSend: v197, from: v1202 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v1207 = v1203[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
      const v1209 = stdlib.add(v1183, v1207);
      sim_r.txns.push({
        amt: v1207,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1212 = null;
      const v1213 = await txn1.getOutput('Contributors_contribute', 'v1212', ctc0, v1212);
      
      await stdlib.simMapSet(sim_r, 0, v1202, v1202);
      await stdlib.simMapSet(sim_r, 2, v1202, null);
      await stdlib.simMapSet(sim_r, 1, v1202, v1207);
      const v1220 = stdlib.add(v1174, stdlib.checkedBigNumberify('./index.rsh:130:21:decimal', stdlib.UInt_max, '1'));
      const v1221 = stdlib.add(v1173, v1207);
      const v1222 = v1147.hardCap;
      const v1224 = stdlib.ge(v1221, v1222);
      const v1225 = v1224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1226 = stdlib.eq(v1225, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v3156 = v1226;
      const v3157 = v1221;
      const v3158 = v1220;
      const v3159 = v1202;
      const v3160 = v1204;
      const v3162 = v1182;
      const v3163 = v1209;
      const v3164 = stdlib.le(v1176, v1154);
      const v3165 = v3164 ? v1226 : false;
      if (v3165) {
        sim_r.isHalt = false;
        }
      else {
        const v3169 = stdlib.eq(v1225, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v3169) {
          const v3170 = 'passed              ';
          null;
          const v3171 = stdlib.div(v1209, stdlib.checkedBigNumberify('./index.rsh:141:30:decimal', stdlib.UInt_max, '100'));
          const v3172 = stdlib.sub(v1209, v3171);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }
        else {
          const v3247 = v1147.softCap;
          const v3248 = stdlib.ge(v1221, v3247);
          if (v3248) {
            const v3249 = 'passed              ';
            null;
            const v3250 = stdlib.div(v1209, stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, '100'));
            const v3251 = stdlib.sub(v1209, v3250);
            sim_r.txns.push({
              kind: 'from',
              to: v1087,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3326 = 'failed              ';
            null;
            sim_r.isHalt = false;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1203], secs: v1205, time: v1204, didSend: v197, from: v1202 } = txn1;
  undefined /* setApiDetails */;
  const v1207 = v1203[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
  const v1209 = stdlib.add(v1183, v1207);
  ;
  const v1212 = null;
  const v1213 = await txn1.getOutput('Contributors_contribute', 'v1212', ctc0, v1212);
  if (v197) {
    stdlib.protect(ctc0, await interact.out(v1203, v1213), {
      at: './index.rsh:123:9:application',
      fs: ['at ./index.rsh:123:9:application call to [unknown function] (defined at: ./index.rsh:123:9:function exp)', 'at ./index.rsh:126:11:application call to "notify" (defined at: ./index.rsh:125:31:function exp)', 'at ./index.rsh:125:31:application call to [unknown function] (defined at: ./index.rsh:125:31:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v1202, v1202);
  await stdlib.mapSet(map2, v1202, null);
  await stdlib.mapSet(map1, v1202, v1207);
  const v1220 = stdlib.add(v1174, stdlib.checkedBigNumberify('./index.rsh:130:21:decimal', stdlib.UInt_max, '1'));
  const v1221 = stdlib.add(v1173, v1207);
  const v1222 = v1147.hardCap;
  const v1224 = stdlib.ge(v1221, v1222);
  const v1225 = v1224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v1226 = stdlib.eq(v1225, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v3156 = v1226;
  const v3157 = v1221;
  const v3158 = v1220;
  const v3159 = v1202;
  const v3160 = v1204;
  const v3162 = v1182;
  const v3163 = v1209;
  const v3164 = stdlib.le(v1176, v1154);
  const v3165 = v3164 ? v1226 : false;
  if (v3165) {
    return;
    }
  else {
    const v3169 = stdlib.eq(v1225, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v3169) {
      const v3170 = 'passed              ';
      null;
      const v3171 = stdlib.div(v1209, stdlib.checkedBigNumberify('./index.rsh:141:30:decimal', stdlib.UInt_max, '100'));
      const v3172 = stdlib.sub(v1209, v3171);
      ;
      return;
      }
    else {
      const v3247 = v1147.softCap;
      const v3248 = stdlib.ge(v1221, v3247);
      if (v3248) {
        const v3249 = 'passed              ';
        null;
        const v3250 = stdlib.div(v1209, stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, '100'));
        const v3251 = stdlib.sub(v1209, v3250);
        ;
        return;
        }
      else {
        const v3326 = 'failed              ';
        null;
        return;
        }}}
  
  
  };
export async function _Contributors_contributed27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contributed27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contributed27 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc11], ['link', ctc12], ['description', ctc13], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_605: ctc10,
    Contributors_creating0_605: ctc16,
    Contributors_timedOut0_605: ctc10
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
  
  
  const [v1087, v1097, v1788, v1789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v1817 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:217:37:application call to "runContributors_contributed0_605" (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:217:37:application call to [unknown function] (defined at: ./index.rsh:217:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v1827 = ['Contributors_contributed0_605', v1817];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1788, v1789, v1827],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:234:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
      
      switch (v1847[0]) {
        case 'Contributors_contributed0_605': {
          const v1850 = v1847[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v1858 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v1859 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '1')];
          const v1860 = null;
          const v1861 = await txn1.getOutput('Contributors_contributed', 'v1860', ctc0, v1860);
          
          const v1868 = 'contributed         ';
          null;
          const v3386 = v1788;
          const v3387 = v1789;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_605': {
          const v1902 = v1847[1];
          
          break;
          }
        case 'Contributors_timedOut0_605': {
          const v1954 = v1847[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc9, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
  switch (v1847[0]) {
    case 'Contributors_contributed0_605': {
      const v1850 = v1847[1];
      undefined /* setApiDetails */;
      ;
      const v1858 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
      const v1859 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '1')];
      const v1860 = null;
      const v1861 = await txn1.getOutput('Contributors_contributed', 'v1860', ctc0, v1860);
      if (v735) {
        stdlib.protect(ctc0, await interact.out(v1850, v1861), {
          at: './index.rsh:234:10:application',
          fs: ['at ./index.rsh:234:10:application call to [unknown function] (defined at: ./index.rsh:234:10:function exp)', 'at ./index.rsh:235:13:application call to "notify" (defined at: ./index.rsh:234:60:function exp)', 'at ./index.rsh:234:60:application call to [unknown function] (defined at: ./index.rsh:234:60:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v1868 = 'contributed         ';
      null;
      const v3386 = v1788;
      const v3387 = v1789;
      return;
      
      break;
      }
    case 'Contributors_creating0_605': {
      const v1902 = v1847[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_605': {
      const v1954 = v1847[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_creating27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_creating27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_creating27 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc14 = stdlib.T_Struct([['id', ctc3], ['title', ctc10], ['link', ctc11], ['description', ctc12], ['owner', ctc1], ['contractInfo', ctc13]]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_605: ctc16,
    Contributors_creating0_605: ctc15,
    Contributors_timedOut0_605: ctc16
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
  
  
  const [v1087, v1097, v1788, v1789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v1794 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:9:application call to [unknown function] (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:217:37:application call to "runContributors_creating0_605" (defined at: ./index.rsh:220:9:function exp)', 'at ./index.rsh:217:37:application call to [unknown function] (defined at: ./index.rsh:217:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v1813 = ['Contributors_creating0_605', v1794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1788, v1789, v1813],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
      
      switch (v1847[0]) {
        case 'Contributors_contributed0_605': {
          const v1850 = v1847[1];
          
          break;
          }
        case 'Contributors_creating0_605': {
          const v1902 = v1847[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v1922 = v1902[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
          const v1923 = null;
          const v1924 = await txn1.getOutput('Contributors_creating', 'v1923', ctc0, v1923);
          
          const v1936 = v1922.id;
          const v1937 = v1922.title;
          const v1938 = v1922.link;
          const v1939 = v1922.description;
          const v1940 = v1922.owner;
          const v1941 = v1922.contractInfo;
          null;
          const v3470 = v1788;
          const v3471 = v1789;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_605': {
          const v1954 = v1847[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc9, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
  switch (v1847[0]) {
    case 'Contributors_contributed0_605': {
      const v1850 = v1847[1];
      return;
      break;
      }
    case 'Contributors_creating0_605': {
      const v1902 = v1847[1];
      undefined /* setApiDetails */;
      ;
      const v1922 = v1902[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
      const v1923 = null;
      const v1924 = await txn1.getOutput('Contributors_creating', 'v1923', ctc0, v1923);
      if (v735) {
        stdlib.protect(ctc0, await interact.out(v1902, v1924), {
          at: './index.rsh:220:10:application',
          fs: ['at ./index.rsh:220:10:application call to [unknown function] (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:221:13:application call to "notify" (defined at: ./index.rsh:220:47:function exp)', 'at ./index.rsh:220:47:application call to [unknown function] (defined at: ./index.rsh:220:47:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v1936 = v1922.id;
      const v1937 = v1922.title;
      const v1938 = v1922.link;
      const v1939 = v1922.description;
      const v1940 = v1922.owner;
      const v1941 = v1922.contractInfo;
      null;
      const v3470 = v1788;
      const v3471 = v1789;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_605': {
      const v1954 = v1847[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_timedOut27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut27 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc11], ['link', ctc12], ['description', ctc13], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_605: ctc10,
    Contributors_creating0_605: ctc16,
    Contributors_timedOut0_605: ctc10
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
  
  
  const [v1087, v1097, v1788, v1789] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v1831 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:241:9:application call to [unknown function] (defined at: ./index.rsh:241:9:function exp)', 'at ./index.rsh:217:37:application call to "runContributors_timedOut0_605" (defined at: ./index.rsh:241:9:function exp)', 'at ./index.rsh:217:37:application call to [unknown function] (defined at: ./index.rsh:217:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v1841 = ['Contributors_timedOut0_605', v1831];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1097, v1788, v1789, v1841],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
      
      switch (v1847[0]) {
        case 'Contributors_contributed0_605': {
          const v1850 = v1847[1];
          
          break;
          }
        case 'Contributors_creating0_605': {
          const v1902 = v1847[1];
          
          break;
          }
        case 'Contributors_timedOut0_605': {
          const v1954 = v1847[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v1995 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '0')];
          const v1996 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '1')];
          const v1997 = null;
          const v1998 = await txn1.getOutput('Contributors_timedOut', 'v1997', ctc0, v1997);
          
          const v2005 = 'timedOut            ';
          null;
          const v3554 = v1788;
          const v3555 = v1789;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc9, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn1;
  switch (v1847[0]) {
    case 'Contributors_contributed0_605': {
      const v1850 = v1847[1];
      return;
      break;
      }
    case 'Contributors_creating0_605': {
      const v1902 = v1847[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_605': {
      const v1954 = v1847[1];
      undefined /* setApiDetails */;
      ;
      const v1995 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '0')];
      const v1996 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '1')];
      const v1997 = null;
      const v1998 = await txn1.getOutput('Contributors_timedOut', 'v1997', ctc0, v1997);
      if (v735) {
        stdlib.protect(ctc0, await interact.out(v1954, v1998), {
          at: './index.rsh:241:10:application',
          fs: ['at ./index.rsh:241:10:application call to [unknown function] (defined at: ./index.rsh:241:10:function exp)', 'at ./index.rsh:242:13:application call to "notify" (defined at: ./index.rsh:241:57:function exp)', 'at ./index.rsh:241:57:application call to [unknown function] (defined at: ./index.rsh:241:57:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v2005 = 'timedOut            ';
      null;
      const v3554 = v1788;
      const v3555 = v1789;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    name: ctc6,
    symbol: ctc7,
    tokenid: ctc3
    });
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc13 = stdlib.T_Object({
    PrivateSaleAmt: ctc3,
    contract: ctc9,
    description: ctc10,
    hardCap: ctc3,
    id: ctc3,
    link: ctc11,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3, ctc14]);
  const ctc18 = stdlib.T_Array(ctc17, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc21 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc22 = stdlib.T_Struct([['id', ctc3], ['title', ctc12], ['link', ctc11], ['description', ctc10], ['owner', ctc1], ['contractInfo', ctc21]]);
  const ctc23 = stdlib.T_Tuple([ctc22]);
  const ctc24 = stdlib.T_Data({
    Contributors_contributed0_605: ctc20,
    Contributors_creating0_605: ctc23,
    Contributors_timedOut0_605: ctc20
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
  
  
  const v1053 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1054 = [v1053];
  const v1065 = stdlib.protect(ctc8, interact.getParams, 'for Deployer\'s interact field getParams');
  const v1066 = v1065.name;
  const v1067 = v1065.symbol;
  const v1068 = v1065.tokenid;
  const v1069 = stdlib.protect(ctc13, interact.getProject, 'for Deployer\'s interact field getProject');
  const v1081 = stdlib.protect(ctc14, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1081, v1066, v1067, v1068],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:80:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14, ctc6, ctc7, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1088, v1089, v1090, v1091], secs: v1093, time: v1092, didSend: v64, from: v1087 } = txn1;
      
      ;
      const v1094 = '                                                                                                ';
      const v1095 = '                                ';
      const v1096 = stdlib.simTokenNew(sim_r, v1089, v1090, v1094, v1095, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1097 = await txn1.getOutput('internal', 'v1096', ctc15, v1096);
      const v1107 = v1054[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1109 = v1107[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1110 = v1107[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1111 = [stdlib.UInt_max, v1109, v1110];
      const v1112 = stdlib.Array_set(v1054, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1111);
      const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1115 = v1114[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1117 = v1114[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1118 = [v1115, stdlib.UInt_max, v1117];
      const v1119 = stdlib.Array_set(v1112, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1118);
      const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1124 = [v1121, v1122, false];
      const v1125 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1124);
      const v1126 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc14, ctc6, ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1088, v1089, v1090, v1091], secs: v1093, time: v1092, didSend: v64, from: v1087 } = txn1;
  ;
  const v1094 = '                                                                                                ';
  const v1095 = '                                ';
  const v1096 = undefined /* TokenNew */;
  const v1097 = await txn1.getOutput('internal', 'v1096', ctc15, v1096);
  const v1107 = v1054[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1109 = v1107[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1110 = v1107[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1111 = [stdlib.UInt_max, v1109, v1110];
  const v1112 = stdlib.Array_set(v1054, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1111);
  const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1115 = v1114[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1117 = v1114[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1118 = [v1115, stdlib.UInt_max, v1117];
  const v1119 = stdlib.Array_set(v1112, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1118);
  const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1122 = v1120[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1124 = [v1121, v1122, false];
  const v1125 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1124);
  const v1126 = 'tokenCreated        ';
  null;
  const v1127 = v1125[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1128 = v1127[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1087, v1088, v1097, v1125],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1092,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), [[v1128, v1097]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1131, time: v1130, didSend: v90, from: v1129 } = txn2;
      
      const v1132 = v1125[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
      const v1133 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
      ;
      const v1135 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
      const v1136 = stdlib.add(v1135, v1133);
      const v1140 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
      const v1141 = [v1136, v1133, v1140];
      const v1142 = stdlib.Array_set(v1125, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1141);
      sim_r.txns.push({
        amt: v1133,
        kind: 'to',
        tok: v1097
        });
      if (v1088) {
        sim_r.isHalt = false;
        }
      else {
        const v1781 = true;
        const v1782 = v1130;
        const v1788 = v1142;
        const v1789 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v1781;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v2006 = v1788[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v2007 = v2006[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v2011 = stdlib.sub(v1789, v2007);
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v2018 = v2006[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v2024 = stdlib.sub(v2007, v2018);
          const v2028 = v2006[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v2029 = [v2024, v2018, v2028];
          const v2030 = stdlib.Array_set(v1788, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v2029);
          const v2031 = v2030[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v2032 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v2033 = stdlib.sub(v2032, v2018);
          const v2035 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v2037 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v2038 = [v2035, v2033, v2037];
          const v2039 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v2038);
          stdlib.simTokenBurn(sim_r, v1097, v2018);
          const v2040 = v2039[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v2041 = v2040[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v2041) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1097);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc14, ctc15, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1131, time: v1130, didSend: v90, from: v1129 } = txn2;
  const v1132 = v1125[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1133 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  ;
  const v1135 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
  const v1136 = stdlib.add(v1135, v1133);
  const v1140 = v1132[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
  const v1141 = [v1136, v1133, v1140];
  const v1142 = stdlib.Array_set(v1125, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1141);
  ;
  const v1143 = stdlib.addressEq(v1087, v1129);
  stdlib.assert(v1143, {
    at: './index.rsh:86:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v1088) {
    const txn3 = await (ctc.sendrecv({
      args: [v1087, v1097, v1130, v1142, v1069],
      evt_cnt: 1,
      funcNum: 2,
      lct: v1130,
      onlyIf: true,
      out_tys: [ctc13],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v1147], secs: v1149, time: v1148, didSend: v99, from: v1146 } = txn3;
        
        ;
        const v1151 = v1147.id;
        const v1152 = 'created             ';
        null;
        const v1154 = stdlib.add(v1130, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc15, ctc3, ctc18, ctc13],
      waitIfNotPresent: false
      }));
    const {data: [v1147], secs: v1149, time: v1148, didSend: v99, from: v1146 } = txn3;
    ;
    const v1150 = stdlib.addressEq(v1087, v1146);
    stdlib.assert(v1150, {
      at: './index.rsh:93:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1151 = v1147.id;
    const v1152 = 'created             ';
    null;
    const v1154 = stdlib.add(v1130, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn4 = await (ctc.sendrecv({
      args: [v1087, v1097, v1142, v1147, v1148, v1151, v1154],
      evt_cnt: 0,
      funcNum: 3,
      lct: v1148,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:102:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1157, time: v1156, didSend: v108, from: v1155 } = txn4;
        
        ;
        const v1159 = v1147.PrivateSaleAmt;
        const v1160 = v1142[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
        const v1161 = v1160[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
        const v1162 = stdlib.gt(v1159, v1161);
        if (v1162) {
          const v1166 = stdlib.sub(v1161, v1159);
          const v1167 = v1147.owner;
          const v1171 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1166);
          sim_r.txns.push({
            kind: 'from',
            to: v1167,
            tok: undefined /* Nothing */
            });
          const v1172 = true;
          const v1173 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
          const v1174 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
          const v1175 = v1087;
          const v1176 = v1156;
          const v1177 = v1148;
          const v1182 = v1142;
          const v1183 = v1171;
          
          if (await (async () => {
            const v1187 = stdlib.le(v1177, v1154);
            const v1188 = v1187 ? v1172 : false;
            
            return v1188;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1237 = v1147.hardCap;
            const v1238 = stdlib.ge(v1173, v1237);
            const v1239 = v1238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1240 = stdlib.eq(v1239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1240) {
              const v1242 = 'passed              ';
              null;
              const v1244 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:141:30:decimal', stdlib.UInt_max, '100'));
              const v1248 = stdlib.sub(v1183, v1244);
              sim_r.txns.push({
                kind: 'from',
                to: v1087,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1413 = v1147.softCap;
              const v1414 = stdlib.ge(v1173, v1413);
              if (v1414) {
                const v1416 = 'passed              ';
                null;
                const v1418 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, '100'));
                const v1422 = stdlib.sub(v1183, v1418);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1087,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v1588 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1728 = v1147.owner;
          const v1732 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1161);
          sim_r.txns.push({
            kind: 'from',
            to: v1728,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1087,
            tok: undefined /* Nothing */
            });
          const v1739 = v1160[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
          stdlib.simTokenBurn(sim_r, v1097, v1739);
          stdlib.simTokenDestroy(sim_r, v1097);
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
      tys: [ctc1, ctc15, ctc18, ctc13, ctc3, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1157, time: v1156, didSend: v108, from: v1155 } = txn4;
    ;
    const v1158 = stdlib.addressEq(v1087, v1155);
    stdlib.assert(v1158, {
      at: './index.rsh:102:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1159 = v1147.PrivateSaleAmt;
    const v1160 = v1142[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
    const v1161 = v1160[stdlib.checkedBigNumberify('./index.rsh:103:38:application', stdlib.UInt_max, '0')];
    const v1162 = stdlib.gt(v1159, v1161);
    if (v1162) {
      const v1166 = stdlib.sub(v1161, v1159);
      const v1167 = v1147.owner;
      const v1171 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1166);
      ;
      let v1172 = true;
      let v1173 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
      let v1174 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
      let v1175 = v1087;
      let v1176 = v1156;
      let v1177 = v1148;
      let v1182 = v1142;
      let v1183 = v1171;
      
      while (await (async () => {
        const v1187 = stdlib.le(v1177, v1154);
        const v1188 = v1187 ? v1172 : false;
        
        return v1188;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 16,
          out_tys: [ctc16],
          timeoutAt: ['time', v1154],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v1087, v1097, v1147, v1151, v1154, v1159, v1167, v1172, v1173, v1174, v1175, v1176, v1182, v1183],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1176,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:134:14:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1231, time: v1230, didSend: v235, from: v1229 } = txn6;
              
              ;
              const v1234 = 'timeout             ';
              null;
              const cv1172 = v1172;
              const cv1173 = v1173;
              const cv1174 = v1174;
              const cv1175 = v1175;
              const cv1176 = v1230;
              const cv1177 = v1176;
              const cv1182 = v1182;
              const cv1183 = v1183;
              
              await (async () => {
                const v1172 = cv1172;
                const v1173 = cv1173;
                const v1174 = cv1174;
                const v1175 = cv1175;
                const v1176 = cv1176;
                const v1177 = cv1177;
                const v1182 = cv1182;
                const v1183 = cv1183;
                
                if (await (async () => {
                  const v1187 = stdlib.le(v1177, v1154);
                  const v1188 = v1187 ? v1172 : false;
                  
                  return v1188;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1237 = v1147.hardCap;
                  const v1238 = stdlib.ge(v1173, v1237);
                  const v1239 = v1238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v1240 = stdlib.eq(v1239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  if (v1240) {
                    const v1242 = 'passed              ';
                    null;
                    const v1244 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:141:30:decimal', stdlib.UInt_max, '100'));
                    const v1248 = stdlib.sub(v1183, v1244);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1087,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1413 = v1147.softCap;
                    const v1414 = stdlib.ge(v1173, v1413);
                    if (v1414) {
                      const v1416 = 'passed              ';
                      null;
                      const v1418 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, '100'));
                      const v1422 = stdlib.sub(v1183, v1418);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1087,
                        tok: undefined /* Nothing */
                        });
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1588 = 'failed              ';
                      null;
                      sim_r.isHalt = false;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc15, ctc13, ctc3, ctc3, ctc3, ctc1, ctc14, ctc3, ctc3, ctc1, ctc3, ctc18, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1231, time: v1230, didSend: v235, from: v1229 } = txn6;
          ;
          const v1232 = stdlib.addressEq(v1087, v1229);
          stdlib.assert(v1232, {
            at: './index.rsh:134:14:dot',
            fs: ['at ./index.rsh:133:34:application call to [unknown function] (defined at: ./index.rsh:133:34:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1234 = 'timeout             ';
          null;
          const cv1172 = v1172;
          const cv1173 = v1173;
          const cv1174 = v1174;
          const cv1175 = v1175;
          const cv1176 = v1230;
          const cv1177 = v1176;
          const cv1182 = v1182;
          const cv1183 = v1183;
          
          v1172 = cv1172;
          v1173 = cv1173;
          v1174 = cv1174;
          v1175 = cv1175;
          v1176 = cv1176;
          v1177 = cv1177;
          v1182 = cv1182;
          v1183 = cv1183;
          
          continue;
          }
        else {
          const {data: [v1203], secs: v1205, time: v1204, didSend: v197, from: v1202 } = txn5;
          undefined /* setApiDetails */;
          const v1207 = v1203[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
          const v1209 = stdlib.add(v1183, v1207);
          ;
          const v1212 = null;
          await txn5.getOutput('Contributors_contribute', 'v1212', ctc0, v1212);
          await stdlib.mapSet(map0, v1202, v1202);
          await stdlib.mapSet(map2, v1202, null);
          await stdlib.mapSet(map1, v1202, v1207);
          const v1220 = stdlib.add(v1174, stdlib.checkedBigNumberify('./index.rsh:130:21:decimal', stdlib.UInt_max, '1'));
          const v1221 = stdlib.add(v1173, v1207);
          const v1222 = v1147.hardCap;
          const v1224 = stdlib.ge(v1221, v1222);
          const v1225 = v1224 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v1226 = stdlib.eq(v1225, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const cv1172 = v1226;
          const cv1173 = v1221;
          const cv1174 = v1220;
          const cv1175 = v1202;
          const cv1176 = v1204;
          const cv1177 = v1176;
          const cv1182 = v1182;
          const cv1183 = v1209;
          
          v1172 = cv1172;
          v1173 = cv1173;
          v1174 = cv1174;
          v1175 = cv1175;
          v1176 = cv1176;
          v1177 = cv1177;
          v1182 = cv1182;
          v1183 = cv1183;
          
          continue;}
        
        }
      const v1237 = v1147.hardCap;
      const v1238 = stdlib.ge(v1173, v1237);
      const v1239 = v1238 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1240 = stdlib.eq(v1239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1240) {
        const v1242 = 'passed              ';
        null;
        const v1244 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:141:30:decimal', stdlib.UInt_max, '100'));
        const v1248 = stdlib.sub(v1183, v1244);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1087, v1097, v1151, v1159, v1167, v1173, v1174, v1175, v1182, v1248],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1176,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:143:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1251, time: v1250, didSend: v256, from: v1249 } = txn5;
            
            ;
            const v1258 = stdlib.sub(v1248, v1248);
            sim_r.txns.push({
              kind: 'from',
              to: v1167,
              tok: undefined /* Nothing */
              });
            const v1259 = v1182[stdlib.checkedBigNumberify('./index.rsh:146:21:application', stdlib.UInt_max, '0')];
            const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:146:21:application', stdlib.UInt_max, '0')];
            const v1261 = stdlib.div(v1260, stdlib.checkedBigNumberify('./index.rsh:146:34:decimal', stdlib.UInt_max, '100'));
            const v1265 = stdlib.sub(v1258, v1261);
            sim_r.txns.push({
              kind: 'from',
              to: v1087,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc15, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1251, time: v1250, didSend: v256, from: v1249 } = txn5;
        ;
        const v1252 = stdlib.addressEq(v1087, v1249);
        stdlib.assert(v1252, {
          at: './index.rsh:143:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1258 = stdlib.sub(v1248, v1248);
        ;
        const v1259 = v1182[stdlib.checkedBigNumberify('./index.rsh:146:21:application', stdlib.UInt_max, '0')];
        const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:146:21:application', stdlib.UInt_max, '0')];
        const v1261 = stdlib.div(v1260, stdlib.checkedBigNumberify('./index.rsh:146:34:decimal', stdlib.UInt_max, '100'));
        const v1265 = stdlib.sub(v1258, v1261);
        ;
        const txn6 = await (ctc.sendrecv({
          args: [v1087, v1097, v1151, v1159, v1173, v1174, v1175, v1182, v1260, v1265],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1250,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1268, time: v1267, didSend: v273, from: v1266 } = txn6;
            
            ;
            const v1272 = v1260;
            const v1273 = v1174;
            const v1274 = v1267;
            const v1280 = v1182;
            const v1281 = v1265;
            
            if (await (async () => {
              const v1285 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
              const v1286 = stdlib.gt(v1272, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
              const v1287 = v1285 ? v1286 : false;
              
              return v1287;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1348 = v1280[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
              const v1349 = v1348[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
              const v1353 = stdlib.sub(v1281, v1349);
              sim_r.txns.push({
                kind: 'from',
                to: v1087,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1087,
                tok: undefined /* Nothing */
                });
              const v1360 = v1348[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
              const v1366 = stdlib.sub(v1349, v1360);
              const v1370 = v1348[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
              const v1371 = [v1366, v1360, v1370];
              const v1372 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1371);
              const v1373 = v1372[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
              const v1374 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
              const v1375 = stdlib.sub(v1374, v1360);
              const v1377 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
              const v1379 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
              const v1380 = [v1377, v1375, v1379];
              const v1381 = stdlib.Array_set(v1372, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1380);
              stdlib.simTokenBurn(sim_r, v1097, v1360);
              const v1382 = v1381[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
              const v1383 = v1382[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
              if (v1383) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1097);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc15, ctc3, ctc3, ctc3, ctc3, ctc1, ctc18, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1268, time: v1267, didSend: v273, from: v1266 } = txn6;
        ;
        const v1269 = stdlib.addressEq(v1087, v1266);
        stdlib.assert(v1269, {
          at: './index.rsh:150:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1272 = v1260;
        let v1273 = v1174;
        let v1274 = v1267;
        let v1280 = v1182;
        let v1281 = v1265;
        
        while (await (async () => {
          const v1285 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:153:26:decimal', stdlib.UInt_max, '0'));
          const v1286 = stdlib.gt(v1272, stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0'));
          const v1287 = v1285 ? v1286 : false;
          
          return v1287;})()) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc19],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1294], secs: v1296, time: v1295, didSend: v311, from: v1293 } = txn7;
          undefined /* setApiDetails */;
          ;
          const v1298 = null;
          await txn7.getOutput('Contributors_claimToken', 'v1298', ctc0, v1298);
          const v1305 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1293), null);
          let v1306;
          switch (v1305[0]) {
            case 'None': {
              const v1307 = v1305[1];
              v1306 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1308 = v1305[1];
              v1306 = v1308;
              
              break;
              }
            }
          const v1309 = stdlib.ge(v1281, v1306);
          const v1310 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1293), null);
          let v1311;
          switch (v1310[0]) {
            case 'None': {
              const v1312 = v1310[1];
              v1311 = false;
              
              break;
              }
            case 'Some': {
              const v1313 = v1310[1];
              v1311 = true;
              
              break;
              }
            }
          const v1314 = v1309 ? v1311 : false;
          if (v1314) {
            const v1315 = v1280[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
            const v1316 = v1315[stdlib.checkedBigNumberify('./index.rsh:157:23:application', stdlib.UInt_max, '0')];
            const v1317 = stdlib.mul(v1316, v1173);
            const v1319 = stdlib.div(v1317, v1159);
            let v1321;
            switch (v1305[0]) {
              case 'None': {
                const v1322 = v1305[1];
                v1321 = stdlib.checkedBigNumberify('./index.rsh:148:51:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1323 = v1305[1];
                v1321 = v1323;
                
                break;
                }
              }
            const v1324 = stdlib.mul(v1319, v1321);
            const v1325 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1293), null);
            let v1326;
            switch (v1325[0]) {
              case 'None': {
                const v1327 = v1325[1];
                v1326 = v1175;
                
                break;
                }
              case 'Some': {
                const v1328 = v1325[1];
                v1326 = v1328;
                
                break;
                }
              }
            const v1332 = stdlib.sub(v1281, v1324);
            ;
            const v1333 = stdlib.sub(v1273, stdlib.checkedBigNumberify('./index.rsh:159:29:decimal', stdlib.UInt_max, '1'));
            const cv1272 = v1333;
            const cv1273 = v1316;
            const cv1274 = v1295;
            const cv1280 = v1280;
            const cv1281 = v1332;
            
            v1272 = cv1272;
            v1273 = cv1273;
            v1274 = cv1274;
            v1280 = cv1280;
            v1281 = cv1281;
            
            continue;}
          else {
            const v1341 = 'claimFailed         ';
            null;
            const v1342 = v1280[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
            const v1343 = v1342[stdlib.checkedBigNumberify('./index.rsh:162:35:application', stdlib.UInt_max, '0')];
            const cv1272 = v1273;
            const cv1273 = v1343;
            const cv1274 = v1295;
            const cv1280 = v1280;
            const cv1281 = v1281;
            
            v1272 = cv1272;
            v1273 = cv1273;
            v1274 = cv1274;
            v1280 = cv1280;
            v1281 = cv1281;
            
            continue;}
          
          }
        const v1348 = v1280[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
        const v1349 = v1348[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
        const v1353 = stdlib.sub(v1281, v1349);
        ;
        ;
        const v1360 = v1348[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
        const v1366 = stdlib.sub(v1349, v1360);
        const v1370 = v1348[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
        const v1371 = [v1366, v1360, v1370];
        const v1372 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1371);
        const v1373 = v1372[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
        const v1374 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
        const v1375 = stdlib.sub(v1374, v1360);
        const v1377 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
        const v1379 = v1373[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
        const v1380 = [v1377, v1375, v1379];
        const v1381 = stdlib.Array_set(v1372, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1380);
        undefined /* TokenBurn */;
        const v1382 = v1381[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
        const v1383 = v1382[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
        if (v1383) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }
        
        
        
        }
      else {
        const v1413 = v1147.softCap;
        const v1414 = stdlib.ge(v1173, v1413);
        if (v1414) {
          const v1416 = 'passed              ';
          null;
          const v1418 = stdlib.div(v1183, stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, '100'));
          const v1422 = stdlib.sub(v1183, v1418);
          ;
          const txn5 = await (ctc.sendrecv({
            args: [v1087, v1097, v1151, v1159, v1167, v1173, v1174, v1175, v1182, v1422],
            evt_cnt: 0,
            funcNum: 9,
            lct: v1176,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:170:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1425, time: v1424, didSend: v384, from: v1423 } = txn5;
              
              ;
              const v1432 = stdlib.sub(v1422, v1422);
              sim_r.txns.push({
                kind: 'from',
                to: v1167,
                tok: undefined /* Nothing */
                });
              const v1433 = v1182[stdlib.checkedBigNumberify('./index.rsh:173:23:application', stdlib.UInt_max, '0')];
              const v1434 = v1433[stdlib.checkedBigNumberify('./index.rsh:173:23:application', stdlib.UInt_max, '0')];
              const v1435 = stdlib.div(v1434, stdlib.checkedBigNumberify('./index.rsh:173:36:decimal', stdlib.UInt_max, '100'));
              const v1439 = stdlib.sub(v1432, v1435);
              sim_r.txns.push({
                kind: 'from',
                to: v1087,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc15, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1425, time: v1424, didSend: v384, from: v1423 } = txn5;
          ;
          const v1426 = stdlib.addressEq(v1087, v1423);
          stdlib.assert(v1426, {
            at: './index.rsh:170:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1432 = stdlib.sub(v1422, v1422);
          ;
          const v1433 = v1182[stdlib.checkedBigNumberify('./index.rsh:173:23:application', stdlib.UInt_max, '0')];
          const v1434 = v1433[stdlib.checkedBigNumberify('./index.rsh:173:23:application', stdlib.UInt_max, '0')];
          const v1435 = stdlib.div(v1434, stdlib.checkedBigNumberify('./index.rsh:173:36:decimal', stdlib.UInt_max, '100'));
          const v1439 = stdlib.sub(v1432, v1435);
          ;
          const txn6 = await (ctc.sendrecv({
            args: [v1087, v1097, v1151, v1159, v1173, v1174, v1175, v1182, v1434, v1439],
            evt_cnt: 0,
            funcNum: 10,
            lct: v1424,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:177:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1442, time: v1441, didSend: v401, from: v1440 } = txn6;
              
              ;
              const v1446 = v1434;
              const v1447 = v1174;
              const v1448 = v1441;
              const v1454 = v1182;
              const v1455 = v1439;
              
              if (await (async () => {
                const v1459 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
                const v1460 = stdlib.gt(v1446, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
                const v1461 = v1459 ? v1460 : false;
                
                return v1461;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1522 = v1454[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
                const v1523 = v1522[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
                const v1527 = stdlib.sub(v1455, v1523);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1087,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1087,
                  tok: undefined /* Nothing */
                  });
                const v1534 = v1522[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
                const v1540 = stdlib.sub(v1523, v1534);
                const v1544 = v1522[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
                const v1545 = [v1540, v1534, v1544];
                const v1546 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1545);
                const v1547 = v1546[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
                const v1548 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
                const v1549 = stdlib.sub(v1548, v1534);
                const v1551 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
                const v1553 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
                const v1554 = [v1551, v1549, v1553];
                const v1555 = stdlib.Array_set(v1546, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1554);
                stdlib.simTokenBurn(sim_r, v1097, v1534);
                const v1556 = v1555[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
                const v1557 = v1556[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
                if (v1557) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1097);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc15, ctc3, ctc3, ctc3, ctc3, ctc1, ctc18, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1442, time: v1441, didSend: v401, from: v1440 } = txn6;
          ;
          const v1443 = stdlib.addressEq(v1087, v1440);
          stdlib.assert(v1443, {
            at: './index.rsh:177:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1446 = v1434;
          let v1447 = v1174;
          let v1448 = v1441;
          let v1454 = v1182;
          let v1455 = v1439;
          
          while (await (async () => {
            const v1459 = stdlib.gt(v1447, stdlib.checkedBigNumberify('./index.rsh:180:28:decimal', stdlib.UInt_max, '0'));
            const v1460 = stdlib.gt(v1446, stdlib.checkedBigNumberify('./index.rsh:180:53:decimal', stdlib.UInt_max, '0'));
            const v1461 = v1459 ? v1460 : false;
            
            return v1461;})()) {
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1468], secs: v1470, time: v1469, didSend: v439, from: v1467 } = txn7;
            undefined /* setApiDetails */;
            ;
            const v1472 = null;
            await txn7.getOutput('Contributors_claimToken', 'v1472', ctc0, v1472);
            const v1479 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1467), null);
            let v1480;
            switch (v1479[0]) {
              case 'None': {
                const v1481 = v1479[1];
                v1480 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1482 = v1479[1];
                v1480 = v1482;
                
                break;
                }
              }
            const v1483 = stdlib.ge(v1455, v1480);
            const v1484 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1467), null);
            let v1485;
            switch (v1484[0]) {
              case 'None': {
                const v1486 = v1484[1];
                v1485 = false;
                
                break;
                }
              case 'Some': {
                const v1487 = v1484[1];
                v1485 = true;
                
                break;
                }
              }
            const v1488 = v1483 ? v1485 : false;
            if (v1488) {
              const v1489 = v1454[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
              const v1490 = v1489[stdlib.checkedBigNumberify('./index.rsh:184:25:application', stdlib.UInt_max, '0')];
              const v1491 = stdlib.mul(v1490, v1173);
              const v1493 = stdlib.div(v1491, v1159);
              let v1495;
              switch (v1479[0]) {
                case 'None': {
                  const v1496 = v1479[1];
                  v1495 = stdlib.checkedBigNumberify('./index.rsh:175:53:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1497 = v1479[1];
                  v1495 = v1497;
                  
                  break;
                  }
                }
              const v1498 = stdlib.mul(v1493, v1495);
              const v1499 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1467), null);
              let v1500;
              switch (v1499[0]) {
                case 'None': {
                  const v1501 = v1499[1];
                  v1500 = v1175;
                  
                  break;
                  }
                case 'Some': {
                  const v1502 = v1499[1];
                  v1500 = v1502;
                  
                  break;
                  }
                }
              const v1506 = stdlib.sub(v1455, v1498);
              ;
              const v1509 = stdlib.sub(v1447, stdlib.checkedBigNumberify('./index.rsh:186:46:decimal', stdlib.UInt_max, '1'));
              const cv1446 = v1490;
              const cv1447 = v1509;
              const cv1448 = v1469;
              const cv1454 = v1454;
              const cv1455 = v1506;
              
              v1446 = cv1446;
              v1447 = cv1447;
              v1448 = cv1448;
              v1454 = cv1454;
              v1455 = cv1455;
              
              continue;}
            else {
              const v1515 = 'claimFailed         ';
              null;
              const v1516 = v1454[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
              const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:189:24:application', stdlib.UInt_max, '0')];
              const cv1446 = v1517;
              const cv1447 = v1447;
              const cv1448 = v1469;
              const cv1454 = v1454;
              const cv1455 = v1455;
              
              v1446 = cv1446;
              v1447 = cv1447;
              v1448 = cv1448;
              v1454 = cv1454;
              v1455 = cv1455;
              
              continue;}
            
            }
          const v1522 = v1454[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v1523 = v1522[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v1527 = stdlib.sub(v1455, v1523);
          ;
          ;
          const v1534 = v1522[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v1540 = stdlib.sub(v1523, v1534);
          const v1544 = v1522[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v1545 = [v1540, v1534, v1544];
          const v1546 = stdlib.Array_set(v1454, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1545);
          const v1547 = v1546[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v1548 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v1549 = stdlib.sub(v1548, v1534);
          const v1551 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v1553 = v1547[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v1554 = [v1551, v1549, v1553];
          const v1555 = stdlib.Array_set(v1546, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1554);
          undefined /* TokenBurn */;
          const v1556 = v1555[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v1557 = v1556[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v1557) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          
          
          }
        else {
          const v1588 = 'failed              ';
          null;
          const txn5 = await (ctc.sendrecv({
            args: [v1087, v1097, v1151, v1174, v1175, v1182, v1183],
            evt_cnt: 0,
            funcNum: 13,
            lct: v1176,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:199:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1591, time: v1590, didSend: v504, from: v1589 } = txn5;
              
              ;
              const v1594 = v1183;
              const v1595 = v1174;
              const v1596 = v1590;
              const v1602 = v1182;
              const v1603 = v1183;
              
              if (await (async () => {
                const v1606 = stdlib.gt(v1595, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
                const v1607 = stdlib.gt(v1594, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
                const v1608 = v1606 ? v1607 : false;
                
                return v1608;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1661 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
                const v1662 = v1661[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
                const v1666 = stdlib.sub(v1603, v1662);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1087,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1087,
                  tok: undefined /* Nothing */
                  });
                const v1673 = v1661[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
                const v1679 = stdlib.sub(v1662, v1673);
                const v1683 = v1661[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
                const v1684 = [v1679, v1673, v1683];
                const v1685 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1684);
                const v1686 = v1685[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
                const v1687 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
                const v1688 = stdlib.sub(v1687, v1673);
                const v1690 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
                const v1692 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
                const v1693 = [v1690, v1688, v1692];
                const v1694 = stdlib.Array_set(v1685, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1693);
                stdlib.simTokenBurn(sim_r, v1097, v1673);
                const v1695 = v1694[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
                const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
                if (v1696) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1097);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc15, ctc3, ctc3, ctc1, ctc18, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1591, time: v1590, didSend: v504, from: v1589 } = txn5;
          ;
          const v1592 = stdlib.addressEq(v1087, v1589);
          stdlib.assert(v1592, {
            at: './index.rsh:199:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1594 = v1183;
          let v1595 = v1174;
          let v1596 = v1590;
          let v1602 = v1182;
          let v1603 = v1183;
          
          while (await (async () => {
            const v1606 = stdlib.gt(v1595, stdlib.checkedBigNumberify('./index.rsh:202:27:decimal', stdlib.UInt_max, '0'));
            const v1607 = stdlib.gt(v1594, stdlib.checkedBigNumberify('./index.rsh:202:49:decimal', stdlib.UInt_max, '0'));
            const v1608 = v1606 ? v1607 : false;
            
            return v1608;})()) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1615], secs: v1617, time: v1616, didSend: v542, from: v1614 } = txn6;
            undefined /* setApiDetails */;
            ;
            const v1619 = null;
            await txn6.getOutput('Contributors_claimRefund', 'v1619', ctc0, v1619);
            const v1626 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1614), null);
            let v1627;
            switch (v1626[0]) {
              case 'None': {
                const v1628 = v1626[1];
                v1627 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1629 = v1626[1];
                v1627 = v1629;
                
                break;
                }
              }
            const v1630 = stdlib.ge(v1603, v1627);
            const v1631 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1614), null);
            let v1632;
            switch (v1631[0]) {
              case 'None': {
                const v1633 = v1631[1];
                v1632 = false;
                
                break;
                }
              case 'Some': {
                const v1634 = v1631[1];
                v1632 = true;
                
                break;
                }
              }
            const v1635 = v1630 ? v1632 : false;
            if (v1635) {
              let v1637;
              switch (v1626[0]) {
                case 'None': {
                  const v1638 = v1626[1];
                  v1637 = stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1639 = v1626[1];
                  v1637 = v1639;
                  
                  break;
                  }
                }
              const v1640 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1614), null);
              let v1641;
              switch (v1640[0]) {
                case 'None': {
                  const v1642 = v1640[1];
                  v1641 = v1175;
                  
                  break;
                  }
                case 'Some': {
                  const v1643 = v1640[1];
                  v1641 = v1643;
                  
                  break;
                  }
                }
              const v1647 = stdlib.sub(v1603, v1637);
              ;
              const v1648 = stdlib.sub(v1595, stdlib.checkedBigNumberify('./index.rsh:208:30:decimal', stdlib.UInt_max, '1'));
              const cv1594 = v1647;
              const cv1595 = v1648;
              const cv1596 = v1616;
              const cv1602 = v1602;
              const cv1603 = v1647;
              
              v1594 = cv1594;
              v1595 = cv1595;
              v1596 = cv1596;
              v1602 = cv1602;
              v1603 = cv1603;
              
              continue;}
            else {
              const v1655 = 'refundFailed        ';
              null;
              const cv1594 = v1603;
              const cv1595 = v1595;
              const cv1596 = v1616;
              const cv1602 = v1602;
              const cv1603 = v1603;
              
              v1594 = cv1594;
              v1595 = cv1595;
              v1596 = cv1596;
              v1602 = cv1602;
              v1603 = cv1603;
              
              continue;}
            
            }
          const v1661 = v1602[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v1662 = v1661[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
          const v1666 = stdlib.sub(v1603, v1662);
          ;
          ;
          const v1673 = v1661[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
          const v1679 = stdlib.sub(v1662, v1673);
          const v1683 = v1661[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v1684 = [v1679, v1673, v1683];
          const v1685 = stdlib.Array_set(v1602, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1684);
          const v1686 = v1685[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v1687 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
          const v1688 = stdlib.sub(v1687, v1673);
          const v1690 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
          const v1692 = v1686[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
          const v1693 = [v1690, v1688, v1692];
          const v1694 = stdlib.Array_set(v1685, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v1693);
          undefined /* TokenBurn */;
          const v1695 = v1694[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
          const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
          if (v1696) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          }}}
    else {
      const v1728 = v1147.owner;
      const v1732 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1161);
      ;
      ;
      const v1739 = v1160[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    }
  else {
    let v1781 = true;
    let v1782 = v1130;
    let v1788 = v1142;
    let v1789 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v1781;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 19,
        out_tys: [ctc24],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1847], secs: v1849, time: v1848, didSend: v735, from: v1846 } = txn3;
      switch (v1847[0]) {
        case 'Contributors_contributed0_605': {
          const v1850 = v1847[1];
          undefined /* setApiDetails */;
          ;
          const v1858 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v1859 = v1850[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '1')];
          const v1860 = null;
          await txn3.getOutput('Contributors_contributed', 'v1860', ctc0, v1860);
          const v1868 = 'contributed         ';
          null;
          const cv1781 = true;
          const cv1782 = v1848;
          const cv1788 = v1788;
          const cv1789 = v1789;
          
          v1781 = cv1781;
          v1782 = cv1782;
          v1788 = cv1788;
          v1789 = cv1789;
          
          continue;
          break;
          }
        case 'Contributors_creating0_605': {
          const v1902 = v1847[1];
          undefined /* setApiDetails */;
          ;
          const v1922 = v1902[stdlib.checkedBigNumberify('./index.rsh:220:9:spread', stdlib.UInt_max, '0')];
          const v1923 = null;
          await txn3.getOutput('Contributors_creating', 'v1923', ctc0, v1923);
          const v1936 = v1922.id;
          const v1937 = v1922.title;
          const v1938 = v1922.link;
          const v1939 = v1922.description;
          const v1940 = v1922.owner;
          const v1941 = v1922.contractInfo;
          null;
          const cv1781 = true;
          const cv1782 = v1848;
          const cv1788 = v1788;
          const cv1789 = v1789;
          
          v1781 = cv1781;
          v1782 = cv1782;
          v1788 = cv1788;
          v1789 = cv1789;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_605': {
          const v1954 = v1847[1];
          undefined /* setApiDetails */;
          ;
          const v1995 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '0')];
          const v1996 = v1954[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, '1')];
          const v1997 = null;
          await txn3.getOutput('Contributors_timedOut', 'v1997', ctc0, v1997);
          const v2005 = 'timedOut            ';
          null;
          const cv1781 = true;
          const cv1782 = v1848;
          const cv1788 = v1788;
          const cv1789 = v1789;
          
          v1781 = cv1781;
          v1782 = cv1782;
          v1788 = cv1788;
          v1789 = cv1789;
          
          continue;
          break;
          }
        }
      
      }
    const v2006 = v1788[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
    const v2007 = v2006[stdlib.checkedBigNumberify('./index.rsh:250:19:application', stdlib.UInt_max, '0')];
    const v2011 = stdlib.sub(v1789, v2007);
    ;
    ;
    const v2018 = v2006[stdlib.checkedBigNumberify('./index.rsh:252:24:application', stdlib.UInt_max, '1')];
    const v2024 = stdlib.sub(v2007, v2018);
    const v2028 = v2006[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
    const v2029 = [v2024, v2018, v2028];
    const v2030 = stdlib.Array_set(v1788, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v2029);
    const v2031 = v2030[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
    const v2032 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '1')];
    const v2033 = stdlib.sub(v2032, v2018);
    const v2035 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0')];
    const v2037 = v2031[stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '2')];
    const v2038 = [v2035, v2033, v2037];
    const v2039 = stdlib.Array_set(v2030, stdlib.checkedBigNumberify('./index.rsh:252:12:application', stdlib.UInt_max, '0'), v2038);
    undefined /* TokenBurn */;
    const v2040 = v2039[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '0')];
    const v2041 = v2040[stdlib.checkedBigNumberify('./index.rsh:253:20:application', stdlib.UInt_max, '2')];
    if (v2041) {
      return;
      }
    else {
      undefined /* TokenDestroy */;
      return;
      }}
  
  
  
  };
export async function Contributors_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 21) {return _Contributors_claimRefund21(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_claimToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 10) {return _Contributors_claimToken10(ctcTop, interact);}
  if (step == 16) {return _Contributors_claimToken16(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 22) {return _Contributors_contribute22(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 27) {return _Contributors_contributed27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_creating(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 27) {return _Contributors_creating27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 27) {return _Contributors_timedOut27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_claimRefund()byte[0]`, `Contributors_claimToken()byte[0]`, `Contributors_contribute(uint64)byte[0]`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte[0]`, `_Contributors_claimToken8()byte[0]`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte[0]`, `Contributors_claimToken()byte[0]`, `Contributors_contribute(uint64)byte[0]`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte[0]`, `_Contributors_claimToken8()byte[0]`]
    },
  appApproval: `BiA3AAEgCCgDETAGDAJkYDh5CgUWtgMQCyu+8aazB7mZ8YgLifLT/QuR19awCdoDnb3J7gOCnOLlBtSjpeECExs53gPmA+4D9gOXBJ8ExwTPBOAExAEVaQ1AgQFYmQH6Av0Cf/wDoI0GJgkBAAEBAAECAQMBBBi1DjtyY2xhaW1GYWlsZWQAAAAAAAAAAAAI//////////8YtQ47cnBhc3NlZAAAAAAAAAAAAAAAAAAAIjUAMRhBE2AqZEkiWzUBJVs1AjEZIxJBAAoxACghFa9mQhMtNhoAF0lBALciNQQjNQZJIRYMQABfSSEXDEAAH0khGAxAABAhGBJENhoBNf8pNP9QQgC5IRcSRCpCA6RJIRkMQAAaIRkSRDQBSSEJDEAAByEJEkRCAEglEkRCAF8hFhJENhoBNhoCUDX/KzT/UCEar1BCAHhJIRsMQAAnSSEcDEAAGCEcEkQ2GgE2GgJQNf8oNP9QIRqvUEIAUiEbEkQqQgTiSSEdDEAACiEdEkQ2GgFCAjWB2NmQmgISRCpCB2o2GgIXNQQ2GgM2GgEXSYEJDEAHQUmBDwxABEZJIQYMQAH/SSEeDEABQiEeEkQhHzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKBE1/SEgWzX8STUFNfuABJPeprA0+1CwNPsiVUkjDEAAr0khCgxAAE4hChJENPtXARA1+oAIAAAAAAAAB82wKjUHgBhQhKuwdGltZWRPdXQAAAAAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEMFINPsjgeoDWDX6NPo1+YAIAAAAAAAAB4OwKjUHgAQBabAHNPlXAAhQNPlXCBRQNPlXHJZQNPlXsrRQNPmB5gIkWFA0+YGGAyELWFCwNP80/iMyBjT9NPxCEGdINPtXARA1+oAIAAAAAAAAB0SwKjUHgBhQhKuwY29udHJpYnV0ZWQAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEBwhBhJEIRE0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSUlXACA1/yEhWzX+ISJbNf2ABACB0o6wMgY0/Q9ENP8xABJEgBi1DjtydGltZW91dAAAAAAAAAAAAAAAAAA0/hZQsDT/NAMkWzQDIQQhElg0/jT9NAMhI1s0AyEkJFg0A4GWBCNYFzQDISVbNAMhJls0A4GnBCRYMgY0AyEnWzQDISghBlg0AyEpW0ILMUkhEwxAAPdIIRE0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSSEEIRJYNf8hIls1/kk1BTX9gASH0Gf9NP1QsDIGNP4MRDT9FzX8NPyIEDmACAAAAAAAAAS8sCo1BzEAKDEAiBAUKTEAUDX7VyEKNPtMUGYxACgxAIgP/iOBKkxWZjEAKDEAiA/wKTT8FlA1+0lXACE0+1BMVyoBUGY0AyElWzT8CDX7NANXACA0AyRbNP80AyEhWzT+NAMhI1s0AyEkJFgjIjT7NP8hKlsPTSMSNPs0AyEmWyMIMQAyBjQDISdbNAMhKCEGWDQDISlbNPwIQgozSCErNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8kWzX+IQRbNf1XMCA1/IFQWzX7V1gRNfohLFs1+Uk1BTX4gAS2aNLzNPhQsIAIAAAAAAAABlOwKjUHMQCIDyVXIQlJNfciVUAABiI19kIADDT3I1tJNfU19kIAADEAiA8DVyoBSTX0IlVAAAYiNfVCAAYjNfVCAAA0+TT2DzT1EEEAazT3IlVAAAYiNfRCAAw09yNbSTXzNfRCAAAxAIgOw1cAIUk18iJVQAAHNPw180IADTTyVwEgSTXxNfNCAAA0+TT0CTXysSKyATT0sggjshA087IHszT/NP40/TT8NPI0+yMJMgY0+jTyQgyUgBi1DjtycmVmdW5kRmFpbGVkAAAAAAAAAAA0/RZQsDT/NP40/TT8NPk0+zIGNPo0+UIMYEkhCQxAAbNJIS0MQABVIS0SRCEGNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hLFs1/oAEIp+XA7A0/zEAEkQ0/zQDJFs0AyEEWzQDVzggNP40AyEHWzIGNANXWBE0/kIL/UghEzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEHWzX8IQ1bNftXQCA1+iEMWzX5V2gRNfghDls190k1BTX2gATmMm0UNPZQsIAIAAAAAAAABcCwKjUHMQCIDXJXIQlJNfUiVUAABiI19EIADDT1I1tJNfM19EIAADEAiA1QVyoBSTXyIlVAAAYiNfNCAAYjNfNCAAA09zT0DzTzEEEAgTT4VwARIls18jT1IlVAAAYiNfFCAAw09SNbSTXwNfFCAAA08jT7CzT8CjTxCzXwMQCIDPpXACFJNe4iVUAABzT6Ne9CAA007lcBIEk17TXvQgAAsSKyATTwsggjshA077IHszT/NP40/TT8NPs0+jTyNPkjCTIGNPg09zTwCUIJ8icGNP0WULA0/zT+NP00/DT7NPo0+FcAESJbNPkyBjT4NPdCCc1JIQ8MQABiIQ8SRCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE00RzI7A0/zEAEkQ0/zQDJFs0AyEEWzQDIQdbNAMhDVs0A1dIIDQDIQ5bNAMhLlsyBjQDV2gRNAMhL1tCCWRIIRQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hB1s1/CEwWzX7IQxbNfpXaCA1+VeIETX4ITFbNfeABKIFZo6wNP8xABJEsSKyATT3sggjshA0A1c4ILIHszT4VwARIltJNfYhCwo19TT3SQk09Qk19LEisgE09bIII7IQNP+yB7M0/zT+FlA0/RZQNPwWUDT7FlA0+hZQNPlQNPhQNPYWUDT0FlAoSwFXAH9nKUsBV38KZ0ghCTUBMgY1AkIK/EkhBQxAA4VJIQgMQAG/SSUMQAFXSCEPNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEEWzX9IQdbNfwhDVs1+1dAIDX6IQxbNflXaBE1+CEOWzX3STUFNfaABEfkryc09lCwgAgAAAAAAAAFErAqNQcxAIgKzVchCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCICqtXKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQCBNPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNPwKNPELNfAxAIgKVVcAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezNP80/jT9NPw0+zT6NPkjCTTyMgY0+DT3NPAJQgZ0JwY0/RZQsDT/NP40/TT8NPs0+jT5NPhXABEiWzIGNPg090IGTyEIEkQhCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywNP8xABJENP80AyRbNAMhBFs0AyEHWzQDIQ1bNANXSCA0AyEOWzQDIS5bMgY0A1doETQDIS9bQgXtSSEQDEAA0UghEDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEHWzX8ITBbNfshDFs1+ldoIDX5V4gRNfghMVs194AEzJmSXLA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iELCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEINQEyBjUCQghXIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0lKVwAgNf8kWzX+VygRNf0hICESWDX8gASnZcS0sDT/MQASRDT8Ils1+zT9VwARSTX6Ils1+TT7NPkNQQBLNPk0+wk1+DT8ITIkWDX3sSKyATT4sggjshA097IHszT/NP40/DQDgfcDWzQDgf8DWzT7NPcjIiI0/zIGNAOB7wNbNP0iNPgJQgKnsSKyATT5sggjshA0/CEyJFiyB7OxIrIBIjT5CbIII7IQNP+yB7OxIrIBIQWyEDT+siGzQgdUSSMMQAFSSSEKDEAAukghCjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XMBE1/Uk1BTX8gARD/YC7NPxQsDT/MQASRDT8gcwBWzX7gBi1DjtyY3JlYXRlZAAAAAAAAAAAAAAAAAA0+xZQsDQDIQRbgRQINfo0/zT+FlA0/VA0/FAyBhZQNPsWUDT6FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBITMhNFhnJwVLASE1IRRYZ0ghBTUBMgY1AkIGqUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gSFbNf5XKRE1/YAEmouRdLA0/VcAEUk1/CVbNfs0/CJbNPsIFjT7FlA0/FcQAVA1+jT7NP6IBs00/zEAEkQ0A1cgARdBACA0/zT+FlAyBhZQNPpQKEsBVwBBZ0ghCjUBMgY1AkIGJTT/NP4jMgY0+iJCBU5IITaIBnMiNAESRDQESSISTDQCEhFESTUFSUpXAAEXNf9XASA1/lchCDX9gSlbNfyABA144to0/xZRBwhQNP5QNP1QNPwWULAhBq81+yE2iAYnsSKyASEFshCB////////////AbIiIQiyIzT9siU0/rImIQyvsicyA7IoMgqyKbO0PDX6gAgAAAAAAAAESDT6FlCwNPo1+TT7VwARNfgnBzT4VwgIUDT4VxABUEk191cAEUk19lcACCcHUDT2VxABUEk19VcAEUk19FcACDT0VwgIUChQNfOAGLUOO3J0b2tlbkNyZWF0ZWQAAAAAAAAAADT8FlCwMQA0/xZRBwhQNPkWUDTzUChLAVcAOmdIIzUBMgY1AkIE/zX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TT9NPUONPgQQQBqNPE08hZQNPNQNPQWUDT1FlA09hZQNPdQNPgWUQcIUDT5FlA0+hZQNPtQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBITMhNFhnJwVLASE1gWxYZ0ghETUBMgY1AkIEbCMiNPk08yEqWw9NIhJBAGInCDT0FlCwNP8hCwo18DT/NPAJNe+xIrIBNPCyCCOyEDTxsgezNPE08hZQNPQWUDT2FlA091A0+RZQNPoWUDT7UDT+UDTvFlAoSwFXAH9nKUsBV38iZ0ghEDUBMgY1AkID+jT5NPOBmgNbD0EAYicINPQWULA0/yELCjXwNP808Ak177EisgE08LIII7IQNPGyB7M08TTyFlA09BZQNPYWUDT3UDT5FlA0+hZQNPtQNP5QNO8WUChLAVcAf2cpSwFXfyJnSCEUNQEyBjUCQgOMgBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA09BZQsDTxNPIWUDT0FlA0+hZQNPtQNP5QNP8WUChLAVcAcWdIIQY1ATIGNQJCA0I1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwiDTT7Ig0QQQA6NPU09hZQNPcWUDT4FlA0+RZQNPpQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38CZ0ghDzUBMgY1AkIC5jT+VwARSTX0Ils187EisgE087III7IQNPWyB7OxIrIBNP808wmyCCOyEDT1sgezNPQlWzXyNPM08gkWNPIWUDT0VxABUEk18VcAEUk18FcACDTwJVs08gkWUDTwVxABUFcAEVcQARdBAANCAl2xIrIBIQWyEDT2siGzQgJNNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8Ig00+yINEEEAOjT1NPYWUDT3FlA0+BZQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIIRM1ATIGNQJCAg00/lcAEUk19CJbNfOxIrIBNPOyCCOyEDT1sgezsSKyATT/NPMJsggjshA09bIHszT0JVs18jTzNPIJFjTyFlA09FcQAVBJNfFXABFJNfBXAAg08CVbNPIJFlA08FcQAVBXABFXEAEXQQADQgGEsSKyASEFshA09rIhs0IBdDX/Nf41/TX8Nfs1+jX5Nfg19zT8Ig00+yINEEEAKzT3NPgWUDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAcWdIISs1ATIGNQJCAUc0/lcAEUk19iJbNfWxIrIBNPWyCCOyEDT3sgezsSKyATT/NPUJsggjshA097IHszT2JVs19DT1NPQJFjT0FlA09lcQAVBJNfNXABFJNfJXAAg08iVbNPQJFlA08lcQAVBXABFXEAEXQQADQgC+sSKyASEFshA0+LIhs0IArjX/Nf41/TX8Nfs1+jT8QQAgNPo0+xZQNP5QNP8WUChLAVcAQWdIIR81ATIGNQJCAJk0/lcAEUk1+SJbNfixIrIBNPiyCCOyEDT6sgezsSKyATT/NPgJsggjshA0+rIHszT5JVs19zT4NPcJFjT3FlA0+VcQAVBJNfZXABFJNfVXAAg09SVbNPcJFlA09VcQAVBXABFXEAEXQQADQgAQsSKyASEFshA0+7Ihs0IAADEZIRASRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghFa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBCBBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 5,
  stateSize: 616,
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1088",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1089",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T9",
                "name": "v1090",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1091",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1088",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1089",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T9",
                "name": "v1090",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1091",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1468",
                "type": "bool"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T44",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
                "name": "v1615",
                "type": "bool"
              }
            ],
            "internalType": "struct T49",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T50",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
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
                "internalType": "struct T51",
                "name": "v1203",
                "type": "tuple"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T53",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
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
                    "internalType": "enum _enum_T59",
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
                    "internalType": "struct T55",
                    "name": "_Contributors_contributed0_605",
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
                            "internalType": "struct T5",
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
                            "internalType": "struct T19",
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
                            "internalType": "struct T18",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
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
                                "internalType": "bytes4",
                                "name": "elem3",
                                "type": "bytes4"
                              }
                            ],
                            "internalType": "struct T56",
                            "name": "contractInfo",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T57",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T58",
                    "name": "_Contributors_creating0_605",
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
                    "internalType": "struct T55",
                    "name": "_Contributors_timedOut0_605",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v1847",
                "type": "tuple"
              }
            ],
            "internalType": "struct T60",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T61",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
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
                    "name": "_PrivateSaleAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_contract",
                    "type": "address"
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
                    "internalType": "struct T18",
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
                    "internalType": "struct T19",
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
                    "internalType": "struct T5",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1147",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1294",
                "type": "bool"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
        "internalType": "struct T17",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1096",
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
    "name": "_reach_oe_v1212",
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
    "name": "_reach_oe_v1298",
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
    "name": "_reach_oe_v1472",
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
    "name": "_reach_oe_v1619",
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
    "name": "_reach_oe_v1860",
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
    "name": "_reach_oe_v1923",
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
    "name": "_reach_oe_v1997",
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
        "internalType": "struct T5",
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
        "internalType": "struct T19",
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
        "internalType": "struct T18",
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
            "internalType": "bytes4",
            "name": "elem3",
            "type": "bytes4"
          }
        ],
        "indexed": false,
        "internalType": "struct T56",
        "name": "v5",
        "type": "tuple"
      }
    ],
    "name": "create",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
    "inputs": [],
    "name": "Contributors_claimToken",
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
            "internalType": "struct T5",
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
            "internalType": "struct T19",
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
            "internalType": "struct T18",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
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
                "internalType": "bytes4",
                "name": "elem3",
                "type": "bytes4"
              }
            ],
            "internalType": "struct T56",
            "name": "contractInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T57",
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
    "name": "_Contributors_claimToken12",
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
    "name": "_Contributors_claimToken8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1468",
                "type": "bool"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T44",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
                "name": "v1615",
                "type": "bool"
              }
            ],
            "internalType": "struct T49",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T50",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
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
                "internalType": "struct T51",
                "name": "v1203",
                "type": "tuple"
              }
            ],
            "internalType": "struct T52",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T53",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
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
                    "internalType": "enum _enum_T59",
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
                    "internalType": "struct T55",
                    "name": "_Contributors_contributed0_605",
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
                            "internalType": "struct T5",
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
                            "internalType": "struct T19",
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
                            "internalType": "struct T18",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
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
                                "internalType": "bytes4",
                                "name": "elem3",
                                "type": "bytes4"
                              }
                            ],
                            "internalType": "struct T56",
                            "name": "contractInfo",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T57",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T58",
                    "name": "_Contributors_creating0_605",
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
                    "internalType": "struct T55",
                    "name": "_Contributors_timedOut0_605",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v1847",
                "type": "tuple"
              }
            ],
            "internalType": "struct T60",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T61",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
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
                    "name": "_PrivateSaleAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_contract",
                    "type": "address"
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
                    "internalType": "struct T18",
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
                    "internalType": "struct T19",
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
                    "internalType": "struct T5",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1147",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1294",
                "type": "bool"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
        "internalType": "struct T17",
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
  Bytecode: `0x608060405260405162008439380380620084398339810160408190526200002691620007dd565b60008055436003556200003862000491565b604080513381528351602080830191909152808501518051151583850152908101515160608084019190915281840151516001600160c01b0319166080840152015160a082015290517fe6585c59b5c07db1b5b4e230325a24d21f792d3f6b66e3998f7ba3eacdc46dbe9181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000db34156007620003e4565b60408181018051600090819052815160209081018290529151830181905260608401515283810151810151518251918201520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526000196012604051620001b490620005ab565b620001c596959493929190620008f4565b604051809103906000f080158015620001e2573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527ffa393f1d0e7ae11b75283d233ca90437ab6564832194683f484c329abb72b6479060200160405180910390a160c0810180516000199052602080830180515182015183519092019190915280515160409081015183519015159101525190516200026f91906000906200040e565b60e0820181815290515161010083018051919091528051600019602090910152815151604090810151825190151591015290519051620002b391906000906200040e565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620002f492906200040e565b610160820152610180810180516b1d1bdad95b90dc99585d195960a21b905251602083810151606001516040805193516001600160601b0319168452918301527f8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4d910160405180910390a162000369620005b9565b3381526020808401515115158183015260a08301516001600160a01b031660408084019190915261016084015160608401526001600081905543905551620003b4918391016200095f565b60405160208183030381529060405260029080519060200190620003da929190620005e4565b5050505062000a41565b816200040a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200041862000673565b60005b60018110156200046e578481600181106200043a576200043a6200088e565b60200201518282600181106200045457620004546200088e565b6020020152806200046581620009da565b9150506200041b565b50818184600181106200048557620004856200088e565b60200201529392505050565b60408051610200810190915260006101a082018181526101c083018290526101e0830191909152815260208101620004c862000673565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200053062000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200055f62000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200058e62000673565b81526040805160208181019092526000815291015290565b905290565b61108780620073b283390190565b604080516080810182526000808252602082018190529181019190915260608101620005a662000673565b828054620005f29062000a04565b90600052602060002090601f01602090048101928262000616576000855562000661565b82601f106200063157805160ff191683800117855562000661565b8280016001018555821562000661579182015b828111156200066157825182559160200191906001019062000644565b506200066f929150620006c0565b5090565b60405180602001604052806001905b620006a9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006825790505090565b5b808211156200066f5760008155600101620006c1565b604080519081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b6000602082840312156200078357600080fd5b604051602081016001600160401b0381118282101715620007b457634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160c01b031981168114620007d557600080fd5b905292915050565b600081830360a0811215620007f157600080fd5b620007fb620006d7565b835181526080601f19830112156200081257600080fd5b6200081c6200070e565b602085015180151581146200083057600080fd5b81526020603f19840112156200084557600080fd5b6200084f6200073f565b9250604085015183528260208201526200086d866060870162000770565b60408201526080850151606082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620008cc57602081850181015186830182015201620008ae565b81811115620008df576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200090960c0830189620008a4565b82810360208401526200091d8189620008a4565b90508281036040840152620009338188620008a4565b90508281036060840152620009498187620008a4565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401511515818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620009ce57825180518352858101518684015284015115158483015291840191908501906001016200099c565b50505050505092915050565b6000600019821415620009fd57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000a1957607f821691505b6020821081141562000a3b57634e487b7160e01b600052602260045260246000fd5b50919050565b6169618062000a516000396000f3fe6080604052600436106101a35760003560e01c80637f34cc90116100e0578063a93a2bdd11610084578063cadc2e7a11610061578063cadc2e7a146103af578063de736998146103dc578063e00acef1146103ef578063f530abd51461040257005b8063a93a2bdd14610366578063ab53f2c614610379578063c79800371461039c57005b806383230757116100bd57806383230757146103185780638e3147691461032d578063972b4448146103405780639f2518101461035357005b80637f34cc90146102db578063805367bf146102e3578063817d57f3146102eb57005b80634f7b8708116101475780636172e590116101245780636172e5901461029a5780636272318a146102ad5780636d700906146102c057806373b4522c146102c857005b80634f7b8708146102615780635471c5a8146102745780635bc7f7241461028757005b80632c10a159116101805780632c10a1591461020657806339b777f0146102195780633bc5b7bf146102215780633ccb40821461024e57005b8063152b31a2146101ac5780631e93b0f1146101d457806325630a02146101f357005b366101aa57005b005b6101bf6101ba366004615342565b610415565b60405190151581526020015b60405180910390f35b3480156101e057600080fd5b506003545b6040519081526020016101cb565b6101aa61020136600461535f565b610450565b6101aa61021436600461538a565b610474565b6101bf610494565b34801561022d57600080fd5b5061024161023c3660046153a6565b610573565b6040516101cb91906153e9565b6101aa61025c36600461538a565b61059f565b6101aa61026f36600461538a565b6105bf565b6101aa61028236600461538a565b6105df565b6101bf610295366004615421565b6105ff565b6101bf6102a8366004615421565b610645565b6101aa6102bb36600461538a565b61068e565b6101bf6106ae565b6101aa6102d636600461538a565b6106da565b6101bf6106fa565b6101bf610729565b3480156102f757600080fd5b5061030b6103063660046153a6565b610758565b6040516101cb9190615443565b34801561032457600080fd5b506001546101e5565b6101aa61033b36600461538a565b61077e565b6101bf61034e366004615475565b61079e565b6101aa61036136600461538a565b6107ce565b6101aa61037436600461538a565b6107ee565b34801561038557600080fd5b5061038e61080e565b6040516101cb9291906154ba565b6101aa6103aa36600461538a565b6108ab565b3480156103bb57600080fd5b506103cf6103ca3660046153a6565b6108cb565b6040516101cb91906154f4565b6101aa6103ea36600461538a565b6108f1565b6101aa6103fd36600461538a565b610911565b6101aa610410366004615524565b610931565b600061041f61456b565b602081018051516001905251516040015183905261043b61458a565b610445828261094d565b60c001519392505050565b61045861458a565b61047061046a36849003840184615537565b82610d52565b5050565b61047c61458a565b61047061048e36849003840184615636565b82610f80565b60008054600814806104a85750600054600c145b6104b157600080fd5b6000546008141561052557306001600160a01b031663805367bf6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190615679565b905090565b600054600c141561057057306001600160a01b0316637f34cc906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b90565b604080516060810182526000808252602082018190529181019190915261059982611214565b92915050565b6105a761458a565b6104706105b9368490038401846156ed565b826112f0565b6105c761458a565b6104706105d9368490038401846156ed565b82611833565b6105e761458a565b6104706105f936849003840184615636565b82611cfe565b600061060961456b565b60208181018051516000905280515182015186905251518101510183905261062f61458a565b610639828261094d565b60a00151949350505050565b600061064f61456b565b60208181018051516002905280515160609081015187905290515101510183905261067861458a565b610682828261094d565b60e00151949350505050565b61069661458a565b6104706106a836849003840184615709565b82611eb1565b60006106b86145ce565b6020810151600090526106c961458a565b6106d38282611833565b5192915050565b6106e261458a565b6104706106f436849003840184615636565b826121bb565b60006107046145ce565b60208101516000905261071561458a565b61071f8282612529565b6060015192915050565b60006107336145ce565b60208101516000905261074461458a565b61074e82826112f0565b6040015192915050565b604080516060810182526000808252602082018190529181019190915261059982612a6f565b61078661458a565b61047061079836849003840184615636565b82612b38565b60006107a86145f8565b6020810151518390526107b961458a565b6107c38282611eb1565b608001519392505050565b6107d661458a565b6104706107e836849003840184615636565b82612dcd565b6107f661458a565b610470610808368490038401846156ed565b82612529565b60006060600054600280805461082390615760565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90615760565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b50505050509050915091509091565b6108b361458a565b6104706108c536849003840184615636565b82613040565b604080516060810182526000808252602082018190529181019190915261059982613208565b6108f961458a565b61047061090b36849003840184615636565b826132cb565b61091961458a565b61047061092b36849003840184615636565b82613560565b61093961458a565b61047061094b368490038401846157c5565b825b61095d601b60005414603e613728565b815161097890158061097157508251600154145b603f613728565b60008080556002805461098a90615760565b80601f01602080910402602001604051908101604052809291908181526020018280546109b690615760565b8015610a035780601f106109d857610100808354040283529160200191610a03565b820191906000526020600020905b8154815290600101906020018083116109e657829003601f168201915b5050505050806020019051810190610a1b9190615916565b9050610a25614625565b7f6c6b37a1968aa309908bd167a281ccdc80e824957a014a1d4f7d7a9149ed8fcd3385604051610a56929190615a22565b60405180910390a16000602085015151516002811115610a7857610a786153c3565b1415610ba6576020808501515101518152610a953415603b613728565b604051600081527f775218a4bb8bb72e5e0800ca1363e3dccafa3070fa2959341d25909860ca66509060200160405180910390a1600060a0840152602080820180516a18dbdb9d1c9a589d5d195960aa1b905251825180519201516040517ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf393610b3d9392909192516001600160601b03191683526020830191909152604082015260600190565b60405180910390a1610b4d614696565b825181516001600160a01b039182169052602080850151835192169181019190915280820180516001905280514392019190915260408085015182519091015260608085015191510152610ba08161374e565b50610d4c565b6001602085015151516002811115610bc057610bc06153c3565b1415610c6d5760208401515160409081015190820152610be23415603c613728565b604051600081527f9ae60b9daad5647b919653e487488e2edf02eb66cb9b105e7e2bfa8f347d6eec9060200160405180910390a1600060c08401526040808201515180516020820151828401516060840151608085015160a09095015195517fc637fbf488869e7c6eab5d4a5d0974d38f52692be94971287b97d21de5a5ce1e96610b3d9691615b02565b6002602085015151516002811115610c8757610c876153c3565b1415610d4c5760208401515160609081015190820152610ca93415603d613728565b604051600081527fb17ddeb44d37609c2086c1bbe55b7d0c40786d859117733b388e4c42b67c70a99060200160405180910390a1600060e0840152608081018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101610b3d565b50505050565b610d62600260005414600f613728565b8151610d7d901580610d7657508251600154145b6010613728565b600080805560028054610d8f90615760565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbb90615760565b8015610e085780601f10610ddd57610100808354040283529160200191610e08565b820191906000526020600020905b815481529060010190602001808311610deb57829003601f168201915b5050505050806020019051810190610e209190615b53565b9050610e2a6146bf565b7f79fd80465d89724fec35d748f55c7faace9c5029300cfa7f2e8ac3fbb93bc7973385604051610e5b929190615c62565b60405180910390a1610e6f3415600d613728565b8151610e87906001600160a01b03163314600e613728565b80516618dc99585d195960ca1b905280516020850151516080015160405160008051602061690c83398151915292610ec0929091615c90565b60405180910390a160148260400151610ed99190615cbf565b6020820152610ee66146e2565b82516001600160a01b03908116825260208085015190911681830152606080850151604080850191909152878301805151928501929092524360808086018290529251519092015160a08501528483015160c0850152600360005560019190915551610f5491839101615d15565b60405160208183030381529060405260029080519060200190610f78929190614729565b505050505050565b610f90600160005414600b613728565b8151610fab901580610fa457508251600154145b600c613728565b600080805560028054610fbd90615760565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe990615760565b80156110365780601f1061100b57610100808354040283529160200191611036565b820191906000526020600020905b81548152906001019060200180831161101957829003601f168201915b505050505080602001905181019061104e9190615d83565b90506110586147ad565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051611089929190615ddd565b60405180910390a161109d34156008613728565b606082015151602081015190516110b49190615cbf565b8151526060820180515160209081015183519091015280515160409081015183519015159101525181516110eb9190600090613995565b60208201526040820151606083015161111c91611115913391906000602002015160200151613a09565b6009613728565b8151611134906001600160a01b03163314600a613728565b8160200151156111b8576111466147dd565b82516001600160a01b039081168252604080850151909116602080840191909152438284018190528482015160608501526002600055600155905161118d91839101615e1b565b604051602081830303815290604052600290805190602001906111b1929190614729565b5050610d4c565b6111c0614696565b825181516001600160a01b03918216905260408085015183519216602092830152818301805160019052805143908401529184015182519091015251600060609091015261120d8161374e565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611260576112606153c3565b14156112e0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112a1576112a16153c3565b60018111156112b2576112b26153c3565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b611300600a60005414601e613728565b815161131b90158061131457508251600154145b601f613728565b60008080556002805461132d90615760565b80601f016020809104026020016040519081016040528092919081815260200182805461135990615760565b80156113a65780601f1061137b576101008083540402835291602001916113a6565b820191906000526020600020905b81548152906001019060200180831161138957829003601f168201915b50505050508060200190518101906113be9190615ef5565b90506113c8614817565b7f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba544833856040516113f9929190615f12565b60405180910390a161140d3415601d613728565b604051600081527f3d0be85143aebfae6cdc13d50c1bcf40d6810b5dc31fc893a45ebf0b24e173959060200160405180910390a16000602084015261145133613208565b815260008151516001811115611469576114696153c3565b141561147b57600060208201526114ab565b60018151516001811115611491576114916153c3565b14156114ab57805160409081015190820181905260208201525b60006114b633612a6f565b5160018111156114c8576114c86153c3565b14156114da5760006060820152611505565b60016114e533612a6f565b5160018111156114f7576114f76153c3565b141561150557600160608201525b8060200151826101000151101561151d576000611523565b80606001515b1561174e576000815151600181111561153e5761153e6153c3565b1415611550576000608082015261157f565b60018151516001811115611566576115666153c3565b141561157f5780516040015160a0820181905260808201525b8060800151826060015183608001518460e001516000600181106115a5576115a5615e05565b6020020151516115b59190615f3c565b6115bf9190615f5b565b6115c99190615f3c565b60c082015260006115d933611214565b5160018111156115eb576115eb6153c3565b14156116095760a08201516001600160a01b031660e0820152611650565b600161161433611214565b516001811115611626576116266153c3565b14156116505761163533611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015611691573d6000803e3d6000fd5b5061169a61488b565b825181516001600160a01b039182169052602080850151835190831691015260408085015183519091015260608085015183519091015260808085015183519091015260a0808501518351921691015260c08301516116fb90600190615f7d565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c082015161010084015161173c9190615f7d565b602082015160800152610ba081613a21565b610120810180516a18db185a5b51985a5b195960aa1b905251604080840151905160008051602061690c8339815191529261178a929091615c90565b60405180910390a161179a61488b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e0880180515151825190950194909452805143930192909252915181519092019190915261010085015190519091015261120d81613a21565b6118436015600054146030613728565b815161185e90158061185757508251600154145b6031613728565b60008080556002805461187090615760565b80601f016020809104026020016040519081016040528092919081815260200182805461189c90615760565b80156118e95780601f106118be576101008083540402835291602001916118e9565b820191906000526020600020905b8154815290600101906020018083116118cc57829003601f168201915b50505050508060200190518101906119019190615f94565b905061190b614817565b7fc385b531bfdb596e9c4d4fba16778429b84fe13e45047887fd4a68f24be2836d338560405161193c929190615f12565b60405180910390a16119503415602f613728565b604051600081527f792b0876256873fdb79cee1ea7c644726af47cdb1b309a3b9753a69c75880c779060200160405180910390a16000835261199133613208565b8152600081515160018111156119a9576119a96153c3565b14156119bb57600060208201526119eb565b600181515160018111156119d1576119d16153c3565b14156119eb57805160409081015190820181905260208201525b60006119f633612a6f565b516001811115611a0857611a086153c3565b1415611a1a5760006060820152611a45565b6001611a2533612a6f565b516001811115611a3757611a376153c3565b1415611a4557600160608201525b80602001518260c001511015611a5c576000611a62565b80606001515b15611c315760008151516001811115611a7d57611a7d6153c3565b1415611a8f5760006080820152611abe565b60018151516001811115611aa557611aa56153c3565b1415611abe5780516040015160a0820181905260808201525b6000611ac933611214565b516001811115611adb57611adb6153c3565b1415611af95760608201516001600160a01b031660c0820152611b3f565b6001611b0433611214565b516001811115611b1657611b166153c3565b1415611b3f57611b2533611214565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c00151611b539190615f7d565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611b99573d6000803e3d6000fd5b50611ba26148d3565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451931692019190915261010083015190820151526080830151611bfa90600190615f7d565b602080830180519091019190915280514360409091015260a0840151815160600152610100830151905160800152610ba081613c43565b610120810180516b1c99599d5b9911985a5b195960a21b905251604080840151905160008051602061690c83398151915292611c6e929091615c90565b60405180910390a1611c7e6148d3565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a087015182519094019390935291519151015261120d81613c43565b611d0e601160005414602d613728565b8151611d29901580611d2257508251600154145b602e613728565b600080805560028054611d3b90615760565b80601f0160208091040260200160405190810160405280929190818152602001828054611d6790615760565b8015611db45780601f10611d8957610100808354040283529160200191611db4565b820191906000526020600020905b815481529060010190602001808311611d9757829003601f168201915b5050505050806020019051810190611dcc919061601b565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983384604051611dff929190615ddd565b60405180910390a1611e133415602b613728565b8051611e2b906001600160a01b03163314602c613728565b611e336148d3565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a086015183519094019390935251905190910152610d4c81613c43565b611ec16016600054146033613728565b8151611edc901580611ed557508251600154145b6034613728565b600080805560028054611eee90615760565b80601f0160208091040260200160405190810160405280929190818152602001828054611f1a90615760565b8015611f675780601f10611f3c57610100808354040283529160200191611f67565b820191906000526020600020905b815481529060010190602001808311611f4a57829003601f168201915b5050505050806020019051810190611f7f9190616211565b9050611f976040518060200160405280600081525090565b611fa8826080015143106035613728565b60408051338152855160208083019190915286015151518183015290517faebca52b942863fd6d4f05a82294448179986ce7906a1e3170e3cc82bb1d56199181900360600190a1602084015151516120039034146032613728565b604051600081527f533a6f5875447d1c4501e35638c2ca9a66356f330d832b0f0a86c65df810df049060200160405180910390a1600060808401819052338082526004602090815260408084208054600161ff01600160b01b031990911662010000909502949094178417905560068252808420805462ff00ff19168417905560058252909220805460ff19168217815591860151515191018190556101008301516120af9190615cbf565b81526120b9614903565b825181516001600160a01b039182169052602080850151835190831691015260408085018051845190920191909152606080860151845182015260808087015185519091015260a08087015185519091015260c0808701518551941693019290925251015182516001911115612130576001612133565b60005b602083810180519290931490915283519151015261012083015161215990600190615cbf565b6020808301805160400192909252815133606090910152815143608090910152610160850151825160a00152610180850151915160c0019190915285015151516101a08401516121a99190615cbf565b602082015160e0015261120d81613cee565b6121cb6003600054146013613728565b81516121e69015806121df57508251600154145b6014613728565b6000808055600280546121f890615760565b80601f016020809104026020016040519081016040528092919081815260200182805461222490615760565b80156122715780601f1061224657610100808354040283529160200191612271565b820191906000526020600020905b81548152906001019060200180831161225457829003601f168201915b505050505080602001905181019061228991906162fe565b90506122a16040518060200160405280600081525090565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633856040516122d2929190615ddd565b60405180910390a16122e634156011613728565b81516122fe906001600160a01b031633146012613728565b60408201515151606083015151111561243d57606082015151604083015151516123289190615f7d565b808252606083015161010001516040516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561236a573d6000803e3d6000fd5b50612373614903565b825181516001600160a01b03918216905260208085015183519083169082015260608086018051855160409081019190915260a080890151875185015260c0808a01518851608090810191909152845151895184015293516101000151885190881690820152858801805160019052805160009701879052805184018790528a518151981697909501969096528351439084015291880151835190920191909152860151905190920191909152825161242b91615f7d565b602082015160e00152610ba081613cee565b816060015161010001516001600160a01b03166108fc836040015160006001811061246a5761246a615e05565b6020020151516040518115909202916000818181858888f19350505050158015612498573d6000803e3d6000fd5b508151604083015151516001600160a01b03909116906108fc906124bd906000615f7d565b6040518115909202916000818181858888f193505050501580156124e5573d6000803e3d6000fd5b5060208201516040830151612506919060005b6020020151602001516141eb565b61251382602001516141fe565b60008080556001819055610d4c90600290614923565b6125396010600054146029613728565b815161255490158061254d57508251600154145b602a613728565b60008080556002805461256690615760565b80601f016020809104026020016040519081016040528092919081815260200182805461259290615760565b80156125df5780601f106125b4576101008083540402835291602001916125df565b820191906000526020600020905b8154815290600101906020018083116125c257829003601f168201915b50505050508060200190518101906125f79190615ef5565b9050612601614817565b7f69beebeea7b0b108020d81166bc0b515fd9f40ae2df9ed1acacbdd11ce103f8e3385604051612632929190615f12565b60405180910390a161264634156028613728565b604051600081527fa10a5c2f2e67c8a84b41c77215d57182499ee719348688afcef00d5c62d573ec9060200160405180910390a16000602084015261268a33613208565b8152600081515160018111156126a2576126a26153c3565b14156126b457600060208201526126e4565b600181515160018111156126ca576126ca6153c3565b14156126e457805160409081015190820181905260208201525b60006126ef33612a6f565b516001811115612701576127016153c3565b1415612713576000606082015261273e565b600161271e33612a6f565b516001811115612730576127306153c3565b141561273e57600160608201525b8060200151826101000151101561275657600061275c565b80606001515b1561298d5760008151516001811115612777576127776153c3565b141561278957600060808201526127b8565b6001815151600181111561279f5761279f6153c3565b14156127b85780516040015160a0820181905260808201525b8060800151826060015183608001518460e001516000600181106127de576127de615e05565b6020020151516127ee9190615f3c565b6127f89190615f5b565b6128029190615f3c565b60c0820152600061281233611214565b516001811115612824576128246153c3565b14156128425760a08201516001600160a01b031660e0820152612889565b600161284d33611214565b51600181111561285f5761285f6153c3565b14156128895761286e33611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156128ca573d6000803e3d6000fd5b506128d361488b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608086015184519091015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c083015161294490600190615f7d565b602080830180519091019190915280514360409091015260e084015190516060015260c082015161010084015161297b9190615f7d565b602082015160800152610ba081614213565b610120810180516a18db185a5b51985a5b195960aa1b905251604080840151905160008051602061690c833981519152926129c9929091615c90565b60405180910390a16129d961488b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c0890151815190950194909452835143930192909252905182519091015261010085015190519091015261120d81614213565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612abb57612abb6153c3565b14156112e0576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115612afc57612afc6153c3565b6001811115612b0d57612b0d6153c3565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b612b486005600054146017613728565b8151612b63901580612b5c57508251600154145b6018613728565b600080805560028054612b7590615760565b80601f0160208091040260200160405190810160405280929190818152602001828054612ba190615760565b8015612bee5780601f10612bc357610100808354040283529160200191612bee565b820191906000526020600020905b815481529060010190602001808311612bd157829003601f168201915b5050505050806020019051810190612c06919061642e565b9050612c25604051806040016040528060008152602001600081525090565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3385604051612c56929190615ddd565b60405180910390a1612c6a34156015613728565b8151612c82906001600160a01b031633146016613728565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f19350505050158015612cc4573d6000803e3d6000fd5b506101008201515151612cd990606490615f5b565b808252610120830151612cec9080615f7d565b612cf69190615f7d565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612d35573d6000803e3d6000fd5b50612d3e61495d565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e080880151909416908501526101008087018051948601949094529251515192840192909252838101516101208401526006600055436001559051610f54918391016164e3565b612ddd6016600054146038613728565b8151612df8901580612df157508251600154145b6039613728565b600080805560028054612e0a90615760565b80601f0160208091040260200160405190810160405280929190818152602001828054612e3690615760565b8015612e835780601f10612e5857610100808354040283529160200191612e83565b820191906000526020600020905b815481529060010190602001808311612e6657829003601f168201915b5050505050806020019051810190612e9b9190616211565b9050612eb860408051808201909152600060208201908152815290565b612eca8260800151431015603a613728565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353385604051612efb929190615ddd565b60405180910390a1612f0f34156036613728565b8151612f27906001600160a01b031633146037613728565b8051661d1a5b595bdd5d60ca1b90528051606083015160405160008051602061690c83398151915292612f5b929091615c90565b60405180910390a1612f6b614903565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a015188519088169082015260e0808b0151878a0180519115159091526101008c01518151909801979097526101208b01518751909601959095526101408a01518651971696909301959095528351439101526101608701518351909401939093526101808601518251909301929092526101a085015190519091015261120d81613cee565b613050600660005414601b613728565b815161306b90158061306457508251600154145b601c613728565b60008080556002805461307d90615760565b80601f01602080910402602001604051908101604052809291908181526020018280546130a990615760565b80156130f65780601f106130cb576101008083540402835291602001916130f6565b820191906000526020600020905b8154815290600101906020018083116130d957829003601f168201915b505050505080602001905181019061310e9190616594565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051613141929190615ddd565b60405180910390a161315534156019613728565b805161316d906001600160a01b03163314601a613728565b61317561488b565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c81613a21565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115613254576132546153c3565b14156112e0576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115613295576132956153c3565b60018111156132a6576132a66153c3565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6132db600b600054146022613728565b81516132f69015806132ef57508251600154145b6023613728565b60008080556002805461330890615760565b80601f016020809104026020016040519081016040528092919081815260200182805461333490615760565b80156133815780601f1061335657610100808354040283529160200191613381565b820191906000526020600020905b81548152906001019060200180831161336457829003601f168201915b5050505050806020019051810190613399919061642e565b90506133b8604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33856040516133e9929190615ddd565b60405180910390a16133fd34156020613728565b8151613415906001600160a01b031633146021613728565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f19350505050158015613457573d6000803e3d6000fd5b50610100820151515161346c90606490615f5b565b80825261012083015161347f9080615f7d565b6134899190615f7d565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156134c8573d6000803e3d6000fd5b506134d161495d565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600c600055436001559051610f54918391016164e3565b613570600c600054146026613728565b815161358b90158061358457508251600154145b6027613728565b60008080556002805461359d90615760565b80601f01602080910402602001604051908101604052809291908181526020018280546135c990615760565b80156136165780601f106135eb57610100808354040283529160200191613616565b820191906000526020600020905b8154815290600101906020018083116135f957829003601f168201915b505050505080602001905181019061362e9190616594565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3384604051613661929190615ddd565b60405180910390a161367534156024613728565b805161368d906001600160a01b031633146025613728565b61369561488b565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c81614213565b816104705760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6137566149d1565b602082015151156137dd57613769614a25565b8251516001600160a01b039081168252835160209081015190911681830152808401805160409081015181850152905160609081015190840152601b60005543600155516137b9918391016165b1565b60405160208183030381529060405260029080519060200190610d4c929190614729565b8151516020830151604090810151515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613822573d6000803e3d6000fd5b508151516020830151604081015151516060909101516001600160a01b03909216916108fc9161385191615f7d565b6040518115909202916000818181858888f19350505050158015613879573d6000803e3d6000fd5b5060208281015160400151519081015190516138959190615f7d565b815152602082810180516040908101515183015184519093019290925280518201515182015183519015159083015251015181516138d69190600090613995565b6020828101828152915151604080850151919091528482015101515181015191515101516139049190615f7d565b604082810180516020908101939093528284015151820151905190151590820152835182015191840151015161393c919060006124f8565b613950816020015160008360400151613995565b516040015115613970576000808055600181905561047090600290614923565b81516020015161397f906141fe565b6000808055600181905561047090600290614923565b61399d614a40565b60005b60018110156139e9578481600181106139bb576139bb615e05565b60200201518282600181106139d2576139d2615e05565b6020020152806139e1816165f5565b9150506139a0565b50818184600181106139fd576139fd615e05565b60200201529392505050565b6000613a17838530856142d6565b90505b9392505050565b613a296149d1565b600082602001516020015111613a40576000613a49565b60208201515115155b15613ae457613a56614a8b565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152600a6000554360015590516137b99183910161668f565b81515160208301516060015151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613b28573d6000803e3d6000fd5b508151516020830151606081015151516080909101516001600160a01b03909216916108fc91613b5791615f7d565b6040518115909202916000818181858888f19350505050158015613b7f573d6000803e3d6000fd5b506020828101516060015151908101519051613b9b9190615f7d565b815152602082810180516060908101515183015184519093019290925280518201515160409081015184519015159101525101518151613bde9190600090613995565b60208281018281529151516040840151528381015160600151518101519151510151613c0a9190615f7d565b60408281018051602090810193909352828401515182015190519015159101528251810151908301516060015161393c919060006124f8565b613c4b6149d1565b600082602001516020015111613c62576000613c6b565b60208201515115155b15613ae457613c78614aeb565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015190931683850152818601805183015160808087019190915281519094015160a0860152519092015160c084015260156000554360015590516137b99183910161669e565b613d456040805161010081018252600060e08201818152825260208083018290528284018290528351808201855282815260608401526080830182905260a08301829052835190810190935282529060c082015290565b815160800151602083015160a001511115613d61576000613d68565b6020820151515b15613e4057613d75614b3c565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190870152875160c090810151861681880152848901805151151560e0808a019190915281518701516101008a015281518601516101208a0152815190940151909616610140880152855190910151610160870152845101516101808601529251909201516101a084015260166000554360015590516137b991839101616705565b6000826000015160400151606001518360200151602001511015613e65576001613e68565b60005b1415613fc1578051651c185cdcd95960d21b9052805182516060015160405160008051602061690c83398151915292613ea2929091615c90565b60405180910390a16064826020015160e00151613ebf9190615f5b565b602080830182905283015160e00151613ed89190615f7d565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015613f1d573d6000803e3d6000fd5b50613f26614bbc565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601519288019290925281518301518188015281519093015190941660e0860152925101516101008401528382015161012084015260056000554360015590516137b99183910161688b565b815160400151610120015160208084015101511061412d5760608082018051651c185cdcd95960d21b90525183519091015160405160008051602061690c83398151915292614011929091615c90565b60405180910390a16064826020015160e0015161402e9190615f5b565b60808201819052602083015160e001516140489190615f7d565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561408b573d6000803e3d6000fd5b50614094614bbc565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601518389015280518401518289015280519094015190951660e0870152915190930151610100850152840151610120840152600b6000554360015590516137b99183910161688b565b60c0810180516519985a5b195960d21b90525182516060015160405160008051602061690c83398151915292614164929091615c90565b60405180910390a1614174614c2c565b8251516001600160a01b039081168252835160209081015182168184015284516060908101516040808601919091528287018051820151838701528051909201519093166080850152805160c09081015160a0860152905160e001519084015260116000554360015590516137b99183910161689a565b6141f582826143b0565b61047057600080fd5b6142078161448b565b61421057600080fd5b50565b61421b6149d1565b60008260200151602001511161423257600061423b565b60208201515115155b15613ae457614248614a8b565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e0860152519092015161010084015260106000554360015590516137b99183910161668f565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161433d916168ef565b60006040518083038185875af1925050503d806000811461437a576040519150601f19603f3d011682016040523d82523d6000602084013e61437f565b606091505b509150915061439082826001614530565b50808060200190518101906143a59190615679565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016143dc91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161441a91906168ef565b60006040518083038185875af1925050503d8060008114614457576040519150601f19603f3d011682016040523d82523d6000602084013e61445c565b606091505b509150915061446d82826003614530565b50808060200190518101906144829190615679565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916144d2916168ef565b60006040518083038185875af1925050503d806000811461450f576040519150601f19603f3d011682016040523d82523d6000602084013e614514565b606091505b509150915061452582826004614530565b506001949350505050565b6060831561453f575081613a1a565b82511561454f5782518084602001fd5b60405163100960cb60e01b815260048101839052602401613745565b604051806040016040528060008152602001614585614c7d565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b60405180604001604052806000815260200161458560405180602001604052806000151581525090565b60405180604001604052806000815260200161458560408051808201909152600060208201908152815290565b6040805160e081018252600060a0820181815260c0830182905282528251602080820185529181529082015290810161465c614c90565b815260200161467e604051806040016040528060008152602001600081525090565b81526040805160208181019092526000815291015290565b604080516080810182526000918101828152606082019290925290815260208101614585614ca3565b6040805160608101825260009181019182529081905b8152602001600081525090565b6040805160e08101825260008082526020820152908101614701614a40565b815260200161470e614cc2565b81526020016000815260200160008152602001600081525090565b82805461473590615760565b90600052602060002090601f016020900481019282614757576000855561479d565b82601f1061477057805160ff191683800117855561479d565b8280016001018555821561479d579182015b8281111561479d578251825591602001919060010190614782565b506147a9929150614da0565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101614585614a40565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001614585614a40565b604080516101a081018252600061014082018181526101608301829052610180830182905282526020808301829052828401829052606083018290526080830182905260a0830182905260c0830182905260e083018290526101008301829052835190810190935282529061012082015290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b8152602001614585614db5565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081906148c6565b6040518060400160405280614916614ddd565b8152602001614585614e27565b50805461492f90615760565b6000825580601f1061493f575050565b601f0160209004906000526020600020908101906142109190614da0565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016149bd614a40565b815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101614a02614a40565b815260408051606081018252600080825260208281018290529282015291015290565b60408051608081018252600080825260208201529081016146d55b60405180602001604052806001905b614a75604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081614a4f5790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016146d5614a40565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016146d5614a40565b604080516101c08101825260008082526020820152908101614b5c614cc2565b815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016146d5614a40565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016146d5614a40565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016146d5614a40565b6040518060200160405280614585614e70565b6040518060200160405280614585614ecf565b60408051608081018252600080825260208201529081016146d5614a40565b604080516101608101825260008082526020820152908101614d126040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b81526020016000815260200160008152602001614d566040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614585604051806020016040528060006001600160601b03191681525090565b5b808211156147a95760008155600101614da1565b6040518060a001604052806000815260200160008152602001600081526020016146d5614a40565b6040805160e08101825260008082526020820152908101614dfc614cc2565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016146d5614a40565b60408051608081019091528060008152602001614ea0604051806040016040528060008152602001600081525090565b8152602001614ead614c90565b8152602001614585604051806040016040528060008152602001600081525090565b6040518060c0016040528060008152602001614f01604051806020016040528060006001600160601b03191681525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526000602080830182905260408051608081018252838152918201839052818101839052606082019290925291015290565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715614fd057614fd0614f97565b60405290565b60405160a0810167ffffffffffffffff81118282101715614fd057614fd0614f97565b60405160c0810167ffffffffffffffff81118282101715614fd057614fd0614f97565b6040516080810167ffffffffffffffff81118282101715614fd057614fd0614f97565b6040805190810167ffffffffffffffff81118282101715614fd057614fd0614f97565b604051610160810167ffffffffffffffff81118282101715614fd057614fd0614f97565b6040516060810167ffffffffffffffff81118282101715614fd057614fd0614f97565b604051610120810167ffffffffffffffff81118282101715614fd057614fd0614f97565b60405160e0810167ffffffffffffffff81118282101715614fd057614fd0614f97565b6040516101c0810167ffffffffffffffff81118282101715614fd057614fd0614f97565b604051610140810167ffffffffffffffff81118282101715614fd057614fd0614f97565b6001600160601b03198116811461421057600080fd5b60006020828403121561516057600080fd5b615168614fad565b9050813561517581615138565b815292915050565b69ffffffffffffffffffff198116811461421057600080fd5b600060a082840312156151a857600080fd5b6151b0614fd6565b90508135815260208201356020820152604082013560408201526060820135606082015260808201356151e28161517d565b608082015292915050565b600060c082840312156151ff57600080fd5b615207614ff9565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013561524381615138565b60a082015292915050565b6001600160a01b038116811461421057600080fd5b80356112eb8161524e565b600081830361024081121561528257600080fd5b61528a614ff9565b91508235825261529d846020850161514e565b60208301526152af8460408501615196565b60408301526152c18460e085016151ed565b60608301526101a08301356152d58161524e565b8060808401525060806101bf19820112156152ef57600080fd5b506152f861501c565b6101c083013581526101e0830135602082015261020083013560408201526102208301356001600160e01b03198116811461533257600080fd5b606082015260a082015292915050565b6000610240828403121561535557600080fd5b613a1a838361526e565b60006102a0828403121561537257600080fd5b50919050565b60006040828403121561537257600080fd5b60006040828403121561539c57600080fd5b613a1a8383615378565b6000602082840312156153b857600080fd5b8135613a1a8161524e565b634e487b7160e01b600052602160045260246000fd5b60028110614210576142106153c3565b815160608201906153f9816153d9565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561543457600080fd5b50508035926020909101359150565b81516060820190615453816153d9565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121561548757600080fd5b5035919050565b60005b838110156154a9578181015183820152602001615491565b83811115610d4c5750506000910152565b82815260406020820152600082518060408401526154df81606085016020870161548e565b601f01601f1916919091016060019392505050565b81516060820190615504816153d9565b808352506020830151151560208301526040830151604083015292915050565b6000610300828403121561537257600080fd5b60008183036102a081121561554b57600080fd5b61555361503f565b8335815261028080601f198401121561556b57600080fd5b615573614fad565b925061557d615062565b6020860135815261559060408701615263565b60208201526155a287606088016151ed565b60408201526101208087013560608301526101408088013560808401526155cd896101608a01615196565b60a084015261020088013560c084015261022088013560e08401526155f56102408901615263565b6101008401526102608801358284015261561189858a0161514e565b908301525083525060208101919091529392505050565b801515811461421057600080fd5b60006040828403121561564857600080fd5b61565061503f565b82358152602083013561566281615628565b60208201529392505050565b80516112eb81615628565b60006020828403121561568b57600080fd5b8151613a1a81615628565b600081830360408112156156a957600080fd5b6156b161503f565b8335815291506020601f19820112156156c957600080fd5b506156d2614fad565b60208301356156e081615628565b8152602082015292915050565b6000604082840312156156ff57600080fd5b613a1a8383615696565b6000818303604081121561571c57600080fd5b61572461503f565b833581526020601f198301121561573a57600080fd5b615742614fad565b915061574c614fad565b602094850135815282529283015250919050565b600181811c9082168061577457607f821691505b6020821081141561537257634e487b7160e01b600052602260045260246000fd5b6000604082840312156157a757600080fd5b6157af61503f565b9050813581526020820135602082015292915050565b60008183036103008112156157d957600080fd5b6157e161503f565b833581526102e0601f19830112156157f857600080fd5b615800614fad565b61580861501c565b60208601356003811061581a57600080fd5b81526158298760408801615795565b6020820152610240607f198501121561584157600080fd5b615849614fad565b9350615858876080880161526e565b845283604082015261586e876102c08801615795565b606082015281526020820152949350505050565b80516112eb8161524e565b600082601f83011261589e57600080fd5b6158a6614fad565b806060808501868111156158b957600080fd5b855b8181101561590a578281890312156158d35760008081fd5b6158db615086565b81518152602080830151818301526040808401516158f881615628565b908301529086529094019382016158bb565b50919695505050505050565b600060c0828403121561592857600080fd5b61593061501c565b825161593b8161524e565b8152602083015161594b8161524e565b602082015261595d846040850161588d565b604082015260a09290920151606083015250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526001600160601b031960a08201511660a08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b6001600160a01b0383811682528251602080840191909152830151518051610320840192919060038110615a5857615a586153c3565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526001600160601b03196020820151511660c08601526040810151615aa860e0870182615974565b506060810151615abc6101808701826159b1565b508260808201511661024086015260a0810151925050615ae06102608501836159f5565b6060015180516102e0850152602081015161030085015290505b509392505050565b86815285516001600160601b03191660208201526102408101615b286040830187615974565b615b3560e08301866159b1565b6001600160a01b0384166101a08301526143a56101c08301846159f5565b600060c08284031215615b6557600080fd5b615b6d61501c565b8251615b788161524e565b81526020830151615b888161524e565b602082015260408381015190820152615ba4846060850161588d565b60608201529392505050565b805182526020810151615bce60208401826001600160a01b03169052565b506040810151615be160408401826159b1565b506060810151610100818185015260808301519150610120828186015260a08401519250610140615c1481870185615974565b60c08501516101e087015260e0850151610200870152918401516001600160a01b031661022086015283015161024085015282015180516001600160601b0319166102608501529050505050565b60006102c08201905060018060a01b0384168252825160208301526020830151615afa604084018251615bb0565b91516001600160601b0319168252602082015260400190565b634e487b7160e01b600052601160045260246000fd5b60008219821115615cd257615cd2615ca9565b500190565b8060005b6001811015610d4c578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101615cdb565b81516001600160a01b03908116825260208084015190911690820152604080830151610380830191615d4990840182615cd7565b506060830151615d5c60a0840182615bb0565b50608083015161032083015260a083015161034083015260c0909201516103609091015290565b600060c08284031215615d9557600080fd5b615d9d61501c565b8251615da88161524e565b81526020830151615db881615628565b60208201526040830151615dcb8161524e565b6040820152615ba4846060850161588d565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160c0830191615e5890840182615cd7565b5092915050565b60006101608284031215615e7257600080fd5b615e7a6150a9565b9050615e8582615882565b8152615e9360208301615882565b6020820152604082015160408201526060820151606082015260808201516080820152615ec260a08301615882565b60a082015260c082015160c0820152615ede8360e0840161588d565b60e082015261014082015161010082015292915050565b60006101608284031215615f0857600080fd5b613a1a8383615e5f565b6001600160a01b038316815260608101613a1a602083018480518252602090810151511515910152565b6000816000190483118215151615615f5657615f56615ca9565b500290565b600082615f7857634e487b7160e01b600052601260045260246000fd5b500490565b600082821015615f8f57615f8f615ca9565b500390565b60006101208284031215615fa757600080fd5b615faf6150cd565b8251615fba8161524e565b81526020830151615fca8161524e565b6020820152604083810151908201526060830151615fe78161524e565b6060820152608083810151908201526160038460a0850161588d565b60a0820152610100929092015160c083015250919050565b6000610120828403121561602e57600080fd5b6160366150cd565b82516160418161524e565b815260208301516160518161524e565b806020830152506040830151604082015260608301516060820152608083015161607a8161524e565b60808201526160038460a0850161588d565b600060c0828403121561609e57600080fd5b6160a6614ff9565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015161524381615138565b600060a082840312156160f457600080fd5b6160fc614fd6565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516151e28161517d565b60006020828403121561614057600080fd5b616148614fad565b9050815161517581615138565b6000610280828403121561616857600080fd5b616170615062565b90508151815261618260208301615882565b6020820152616194836040840161608c565b60408201526101008083015160608301526101208084015160808401526101406161c0868287016160e2565b60a08501526101e085015160c085015261020085015160e08501526161e86102208601615882565b838501526102408501518285015261620486610260870161612e565b8185015250505092915050565b6000610460828403121561622457600080fd5b61622c6150f0565b61623583615882565b815261624360208401615882565b60208201526162558460408501616155565b60408201526102c083015160608201526102e0830151608082015261030083015160a08201526162886103208401615882565b60c082015261629a610340840161566e565b60e08201526103608301516101008201526103808301516101208201526162c46103a08401615882565b6101408201526103c08301516101608201526162e4846103e0850161588d565b61018082015261044092909201516101a083015250919050565b6000610380828403121561631157600080fd5b6163196150cd565b82516163248161524e565b815260208301516163348161524e565b6020820152616346846040850161588d565b60408201526163588460a08501616155565b6060820152610320830151608082015261034083015160a08201526103609092015160c083015250919050565b6000610180828403121561639857600080fd5b6163a0615114565b90506163ab82615882565b81526163b960208301615882565b602082015260408201516040820152606082015160608201526163de60808301615882565b608082015260a082015160a082015260c082015160c082015261640360e08301615882565b60e08201526101006164178482850161588d565b818301525061016082015161012082015292915050565b6000610180828403121561644157600080fd5b613a1a8383616385565b80516001600160a01b03168252602081015161647260208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c08101516164b560c08401826001600160a01b03169052565b5060e08101516164c860e0840182615cd7565b50610100810151610140830152610120015161016090910152565b6101808101610599828461644b565b6000610180828403121561650557600080fd5b61650d615114565b905061651882615882565b815261652660208301615882565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015261655f60c08301615882565b60c08201526165718360e0840161588d565b60e082015261014082015161010082015261016082015161012082015292915050565b600061018082840312156165a757600080fd5b613a1a83836164f2565b81516001600160a01b0390811682526020808401519091169082015260408083015160c08301916165e490840182615cd7565b50606083015160a083015292915050565b600060001982141561660957616609615ca9565b5060010190565b60018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015161666260a08401826001600160a01b03169052565b5060c081015160c083015260e081015161667f60e0840182615cd7565b5061010001516101409190910152565b61016081016105998284616610565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152506080830151608083015260a08301516166f360a0840182615cd7565b5060c083015161010083015292915050565b81516001600160a01b031681526104608101602083015161673160208401826001600160a01b03169052565b5060408301516167446040840182615bb0565b5060608301516102c083015260808301516102e083015260a083015161030083015260c08301516001600160a01b0390811661032084015260e08401511515610340840152610100840151610360840152610120840151610380840152610140840151166103a08301526101608301516103c08301526101808301516167ce6103e0840182615cd7565b506101a083015161044083015292915050565b80516001600160a01b03168252602081015161680860208401826001600160a01b03169052565b506040810151604083015260608101516060830152608081015161683760808401826001600160a01b03169052565b5060a081015160a083015260c081015160c083015260e081015161686660e08401826001600160a01b03169052565b506101008082015161687a82850182615cd7565b505061012001516101609190910152565b610180810161059982846167e1565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a08301516166f360a0840182615cd7565b6000825161690181846020870161548e565b919091019291505056fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da264697066735822122025cb60f2f301343c03337c9bb62068ca73cb8a1a2c83d210da95dbb811df60ef64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220197bc023f4851c582de85eb1dfd204db5a2eed93e54fde3bdb367bd1b312081364736f6c634300080c0033`,
  BytecodeLen: 33849,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:84:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:142:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:149:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:151:60:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:169:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:176:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:178:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:198:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:200:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  22: {
    at: './index.rsh:120:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  23: {
    at: './index.rsh:110:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:257:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:217:37:after expr stmt semicolon',
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
  "Contributors_claimToken": Contributors_claimToken,
  "Contributors_contribute": Contributors_contribute,
  "Contributors_contributed": Contributors_contributed,
  "Contributors_creating": Contributors_creating,
  "Contributors_timedOut": Contributors_timedOut,
  "Deployer": Deployer
  };
export const _APIs = {
  Contributors: {
    claimRefund: Contributors_claimRefund,
    claimToken: Contributors_claimToken,
    contribute: Contributors_contribute,
    contributed: Contributors_contributed,
    creating: Contributors_creating,
    timedOut: Contributors_timedOut
    }
  };
