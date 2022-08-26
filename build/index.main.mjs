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
  
  
  const [v1211, v1221, v1275, v1299, v1761, v1768, v1769] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc1, ctc6, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1777 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:214:13:application call to [unknown function] (defined at: ./index.rsh:214:13:function exp)', 'at ./index.rsh:214:13:application call to [unknown function] (defined at: ./index.rsh:214:13:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1275, v1299, v1761, v1768, v1769, v1777],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:214:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1781], secs: v1783, time: v1782, didSend: v656, from: v1780 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1786 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1780), null);
      let v1787;
      switch (v1786[0]) {
        case 'None': {
          const v1788 = v1786[1];
          v1787 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1789 = v1786[1];
          v1787 = v1789;
          
          break;
          }
        }
      const v1790 = stdlib.ge(v1769, v1787);
      const v1791 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1780), null);
      let v1792;
      switch (v1791[0]) {
        case 'None': {
          const v1793 = v1791[1];
          v1792 = false;
          
          break;
          }
        case 'Some': {
          const v1794 = v1791[1];
          v1792 = true;
          
          break;
          }
        }
      const v1795 = v1790 ? v1792 : false;
      if (v1795) {
        let v1797;
        switch (v1786[0]) {
          case 'None': {
            const v1798 = v1786[1];
            v1797 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1799 = v1786[1];
            v1797 = v1799;
            
            break;
            }
          }
        const v1800 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1780), null);
        let v1801;
        switch (v1800[0]) {
          case 'None': {
            const v1802 = v1800[1];
            v1801 = v1299;
            
            break;
            }
          case 'Some': {
            const v1803 = v1800[1];
            v1801 = v1803;
            
            break;
            }
          }
        const v1807 = stdlib.sub(v1769, v1797);
        sim_r.txns.push({
          kind: 'from',
          to: v1801,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1780, undefined /* Nothing */);
        const v1810 = 'refundPassed        ';
        null;
        const v1811 = true;
        const v1812 = await txn1.getOutput('Contributors_claimRefund', 'v1811', ctc7, v1811);
        
        const v1817 = stdlib.sub(v1761, stdlib.checkedBigNumberify('./index.rsh:221:30:decimal', stdlib.UInt_max, '1'));
        const v3216 = v1817;
        const v3218 = v1768;
        const v3219 = v1807;
        const v3220 = stdlib.gt(v1817, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
        const v3221 = stdlib.gt(v1807, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
        const v3222 = v3220 ? v3221 : false;
        if (v3222) {
          sim_r.isHalt = false;
          }
        else {
          const v3223 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v3224 = v3223[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v3225 = stdlib.sub(v1807, v3224);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3226 = v3223[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3227 = stdlib.sub(v3224, v3226);
          const v3228 = v3223[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3229 = [v3227, v3226, v3228];
          const v3230 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3229);
          const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3232 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3233 = stdlib.sub(v3232, v3226);
          const v3234 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3235 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3236 = [v3234, v3233, v3235];
          const v3237 = stdlib.Array_set(v3230, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3236);
          stdlib.simTokenBurn(sim_r, v1221, v3226);
          const v3238 = v3237[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3239) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1824 = 'refundFailed        ';
        null;
        const v1825 = false;
        const v1826 = await txn1.getOutput('Contributors_claimRefund', 'v1825', ctc7, v1825);
        
        const v3241 = v1761;
        const v3243 = v1768;
        const v3244 = v1769;
        const v3245 = stdlib.gt(v1761, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
        const v3246 = stdlib.gt(v1769, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
        const v3247 = v3245 ? v3246 : false;
        if (v3247) {
          sim_r.isHalt = false;
          }
        else {
          const v3248 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v3249 = v3248[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v3250 = stdlib.sub(v1769, v3249);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3251 = v3248[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3252 = stdlib.sub(v3249, v3251);
          const v3253 = v3248[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3254 = [v3252, v3251, v3253];
          const v3255 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3254);
          const v3256 = v3255[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3257 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3258 = stdlib.sub(v3257, v3251);
          const v3259 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3260 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3261 = [v3259, v3258, v3260];
          const v3262 = stdlib.Array_set(v3255, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3261);
          stdlib.simTokenBurn(sim_r, v1221, v3251);
          const v3263 = v3262[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3264 = v3263[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3264) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
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
  const {data: [v1781], secs: v1783, time: v1782, didSend: v656, from: v1780 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1786 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1780), null);
  let v1787;
  switch (v1786[0]) {
    case 'None': {
      const v1788 = v1786[1];
      v1787 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1789 = v1786[1];
      v1787 = v1789;
      
      break;
      }
    }
  const v1790 = stdlib.ge(v1769, v1787);
  const v1791 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1780), null);
  let v1792;
  switch (v1791[0]) {
    case 'None': {
      const v1793 = v1791[1];
      v1792 = false;
      
      break;
      }
    case 'Some': {
      const v1794 = v1791[1];
      v1792 = true;
      
      break;
      }
    }
  const v1795 = v1790 ? v1792 : false;
  if (v1795) {
    let v1797;
    switch (v1786[0]) {
      case 'None': {
        const v1798 = v1786[1];
        v1797 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1799 = v1786[1];
        v1797 = v1799;
        
        break;
        }
      }
    const v1800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1780), null);
    let v1801;
    switch (v1800[0]) {
      case 'None': {
        const v1802 = v1800[1];
        v1801 = v1299;
        
        break;
        }
      case 'Some': {
        const v1803 = v1800[1];
        v1801 = v1803;
        
        break;
        }
      }
    const v1807 = stdlib.sub(v1769, v1797);
    ;
    await stdlib.mapSet(map2, v1780, undefined /* Nothing */);
    const v1810 = 'refundPassed        ';
    null;
    const v1811 = true;
    const v1812 = await txn1.getOutput('Contributors_claimRefund', 'v1811', ctc7, v1811);
    if (v656) {
      stdlib.protect(ctc0, await interact.out(v1781, v1812), {
        at: './index.rsh:214:14:application',
        fs: ['at ./index.rsh:214:14:application call to [unknown function] (defined at: ./index.rsh:214:14:function exp)', 'at ./index.rsh:220:17:application call to "notify" (defined at: ./index.rsh:214:40:function exp)', 'at ./index.rsh:214:40:application call to [unknown function] (defined at: ./index.rsh:214:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1817 = stdlib.sub(v1761, stdlib.checkedBigNumberify('./index.rsh:221:30:decimal', stdlib.UInt_max, '1'));
    const v3216 = v1817;
    const v3218 = v1768;
    const v3219 = v1807;
    const v3220 = stdlib.gt(v1817, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
    const v3221 = stdlib.gt(v1807, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
    const v3222 = v3220 ? v3221 : false;
    if (v3222) {
      return;
      }
    else {
      const v3223 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
      const v3224 = v3223[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
      const v3225 = stdlib.sub(v1807, v3224);
      ;
      ;
      const v3226 = v3223[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3227 = stdlib.sub(v3224, v3226);
      const v3228 = v3223[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3229 = [v3227, v3226, v3228];
      const v3230 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3229);
      const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3232 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3233 = stdlib.sub(v3232, v3226);
      const v3234 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3235 = v3231[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3236 = [v3234, v3233, v3235];
      const v3237 = stdlib.Array_set(v3230, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3236);
      undefined /* TokenBurn */;
      const v3238 = v3237[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3239) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1824 = 'refundFailed        ';
    null;
    const v1825 = false;
    const v1826 = await txn1.getOutput('Contributors_claimRefund', 'v1825', ctc7, v1825);
    if (v656) {
      stdlib.protect(ctc0, await interact.out(v1781, v1826), {
        at: './index.rsh:214:14:application',
        fs: ['at ./index.rsh:214:14:application call to [unknown function] (defined at: ./index.rsh:214:14:function exp)', 'at ./index.rsh:224:17:application call to "notify" (defined at: ./index.rsh:214:40:function exp)', 'at ./index.rsh:214:40:application call to [unknown function] (defined at: ./index.rsh:214:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v3241 = v1761;
    const v3243 = v1768;
    const v3244 = v1769;
    const v3245 = stdlib.gt(v1761, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
    const v3246 = stdlib.gt(v1769, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
    const v3247 = v3245 ? v3246 : false;
    if (v3247) {
      return;
      }
    else {
      const v3248 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
      const v3249 = v3248[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
      const v3250 = stdlib.sub(v1769, v3249);
      ;
      ;
      const v3251 = v3248[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3252 = stdlib.sub(v3249, v3251);
      const v3253 = v3248[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3254 = [v3252, v3251, v3253];
      const v3255 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3254);
      const v3256 = v3255[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3257 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3258 = stdlib.sub(v3257, v3251);
      const v3259 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3260 = v3256[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3261 = [v3259, v3258, v3260];
      const v3262 = stdlib.Array_set(v3255, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3261);
      undefined /* TokenBurn */;
      const v3263 = v3262[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3264 = v3263[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3264) {
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
  
  
  const [v1211, v1221, v1275, v1285, v1297, v1299, v1421, v1428, v1429] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1438 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:159:9:application call to [unknown function] (defined at: ./index.rsh:159:9:function exp)', 'at ./index.rsh:159:9:application call to [unknown function] (defined at: ./index.rsh:159:9:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1275, v1285, v1297, v1299, v1421, v1428, v1429, v1438],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:159:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1442], secs: v1444, time: v1443, didSend: v405, from: v1441 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1447 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1441), null);
      let v1448;
      switch (v1447[0]) {
        case 'None': {
          const v1449 = v1447[1];
          v1448 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1450 = v1447[1];
          v1448 = v1450;
          
          break;
          }
        }
      const v1451 = stdlib.ge(v1429, v1448);
      const v1452 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1441), null);
      let v1453;
      switch (v1452[0]) {
        case 'None': {
          const v1454 = v1452[1];
          v1453 = false;
          
          break;
          }
        case 'Some': {
          const v1455 = v1452[1];
          v1453 = true;
          
          break;
          }
        }
      const v1456 = v1451 ? v1453 : false;
      if (v1456) {
        const v1457 = v1428[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
        const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
        const v1459 = stdlib.mul(v1458, v1297);
        const v1461 = stdlib.div(v1459, v1285);
        let v1463;
        switch (v1447[0]) {
          case 'None': {
            const v1464 = v1447[1];
            v1463 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1465 = v1447[1];
            v1463 = v1465;
            
            break;
            }
          }
        const v1466 = stdlib.mul(v1461, v1463);
        const v1467 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1441), null);
        let v1468;
        switch (v1467[0]) {
          case 'None': {
            const v1469 = v1467[1];
            v1468 = v1299;
            
            break;
            }
          case 'Some': {
            const v1470 = v1467[1];
            v1468 = v1470;
            
            break;
            }
          }
        const v1474 = stdlib.sub(v1429, v1466);
        sim_r.txns.push({
          kind: 'from',
          to: v1468,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1441, undefined /* Nothing */);
        const v1477 = 'claimPassed         ';
        null;
        const v1478 = true;
        const v1479 = await txn1.getOutput('Contributors_claimToken', 'v1478', ctc7, v1478);
        
        const v1484 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:166:29:decimal', stdlib.UInt_max, '1'));
        const v3266 = v1458;
        const v3268 = v1428;
        const v3269 = v1474;
        const v3270 = stdlib.gt(v1458, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
        const v3271 = stdlib.gt(v1484, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
        const v3272 = v3270 ? v3271 : false;
        if (v3272) {
          sim_r.isHalt = false;
          }
        else {
          const v3275 = stdlib.sub(v1474, v1458);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3276 = v1457[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3277 = stdlib.sub(v1458, v3276);
          const v3278 = v1457[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3279 = [v3277, v3276, v3278];
          const v3280 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3279);
          const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3282 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3283 = stdlib.sub(v3282, v3276);
          const v3284 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3285 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3286 = [v3284, v3283, v3285];
          const v3287 = stdlib.Array_set(v3280, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3286);
          stdlib.simTokenBurn(sim_r, v1221, v3276);
          const v3288 = v3287[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3289 = v3288[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3289) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1492 = 'claimFailed         ';
        null;
        const v1493 = false;
        const v1494 = await txn1.getOutput('Contributors_claimToken', 'v1493', ctc7, v1493);
        
        const v1499 = v1428[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
        const v1500 = v1499[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
        const v3291 = v1500;
        const v3293 = v1428;
        const v3294 = v1429;
        const v3295 = stdlib.gt(v1500, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
        const v3296 = stdlib.gt(v1421, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
        const v3297 = v3295 ? v3296 : false;
        if (v3297) {
          sim_r.isHalt = false;
          }
        else {
          const v3300 = stdlib.sub(v1429, v1500);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3301 = v1499[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3302 = stdlib.sub(v1500, v3301);
          const v3303 = v1499[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3304 = [v3302, v3301, v3303];
          const v3305 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3304);
          const v3306 = v3305[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3307 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3308 = stdlib.sub(v3307, v3301);
          const v3309 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3310 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3311 = [v3309, v3308, v3310];
          const v3312 = stdlib.Array_set(v3305, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3311);
          stdlib.simTokenBurn(sim_r, v1221, v3301);
          const v3313 = v3312[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3314 = v3313[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3314) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
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
  const {data: [v1442], secs: v1444, time: v1443, didSend: v405, from: v1441 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1447 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1441), null);
  let v1448;
  switch (v1447[0]) {
    case 'None': {
      const v1449 = v1447[1];
      v1448 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1450 = v1447[1];
      v1448 = v1450;
      
      break;
      }
    }
  const v1451 = stdlib.ge(v1429, v1448);
  const v1452 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1441), null);
  let v1453;
  switch (v1452[0]) {
    case 'None': {
      const v1454 = v1452[1];
      v1453 = false;
      
      break;
      }
    case 'Some': {
      const v1455 = v1452[1];
      v1453 = true;
      
      break;
      }
    }
  const v1456 = v1451 ? v1453 : false;
  if (v1456) {
    const v1457 = v1428[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
    const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
    const v1459 = stdlib.mul(v1458, v1297);
    const v1461 = stdlib.div(v1459, v1285);
    let v1463;
    switch (v1447[0]) {
      case 'None': {
        const v1464 = v1447[1];
        v1463 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1465 = v1447[1];
        v1463 = v1465;
        
        break;
        }
      }
    const v1466 = stdlib.mul(v1461, v1463);
    const v1467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1441), null);
    let v1468;
    switch (v1467[0]) {
      case 'None': {
        const v1469 = v1467[1];
        v1468 = v1299;
        
        break;
        }
      case 'Some': {
        const v1470 = v1467[1];
        v1468 = v1470;
        
        break;
        }
      }
    const v1474 = stdlib.sub(v1429, v1466);
    ;
    await stdlib.mapSet(map2, v1441, undefined /* Nothing */);
    const v1477 = 'claimPassed         ';
    null;
    const v1478 = true;
    const v1479 = await txn1.getOutput('Contributors_claimToken', 'v1478', ctc7, v1478);
    if (v405) {
      stdlib.protect(ctc0, await interact.out(v1442, v1479), {
        at: './index.rsh:159:10:application',
        fs: ['at ./index.rsh:159:10:application call to [unknown function] (defined at: ./index.rsh:159:10:function exp)', 'at ./index.rsh:165:13:application call to "notify" (defined at: ./index.rsh:159:35:function exp)', 'at ./index.rsh:159:35:application call to [unknown function] (defined at: ./index.rsh:159:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1484 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:166:29:decimal', stdlib.UInt_max, '1'));
    const v3266 = v1458;
    const v3268 = v1428;
    const v3269 = v1474;
    const v3270 = stdlib.gt(v1458, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
    const v3271 = stdlib.gt(v1484, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
    const v3272 = v3270 ? v3271 : false;
    if (v3272) {
      return;
      }
    else {
      const v3275 = stdlib.sub(v1474, v1458);
      ;
      ;
      const v3276 = v1457[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3277 = stdlib.sub(v1458, v3276);
      const v3278 = v1457[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3279 = [v3277, v3276, v3278];
      const v3280 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3279);
      const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3282 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3283 = stdlib.sub(v3282, v3276);
      const v3284 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3285 = v3281[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3286 = [v3284, v3283, v3285];
      const v3287 = stdlib.Array_set(v3280, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3286);
      undefined /* TokenBurn */;
      const v3288 = v3287[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3289 = v3288[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3289) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1492 = 'claimFailed         ';
    null;
    const v1493 = false;
    const v1494 = await txn1.getOutput('Contributors_claimToken', 'v1493', ctc7, v1493);
    if (v405) {
      stdlib.protect(ctc0, await interact.out(v1442, v1494), {
        at: './index.rsh:159:10:application',
        fs: ['at ./index.rsh:159:10:application call to [unknown function] (defined at: ./index.rsh:159:10:function exp)', 'at ./index.rsh:169:13:application call to "notify" (defined at: ./index.rsh:159:35:function exp)', 'at ./index.rsh:159:35:application call to [unknown function] (defined at: ./index.rsh:159:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1499 = v1428[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
    const v1500 = v1499[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
    const v3291 = v1500;
    const v3293 = v1428;
    const v3294 = v1429;
    const v3295 = stdlib.gt(v1500, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
    const v3296 = stdlib.gt(v1421, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
    const v3297 = v3295 ? v3296 : false;
    if (v3297) {
      return;
      }
    else {
      const v3300 = stdlib.sub(v1429, v1500);
      ;
      ;
      const v3301 = v1499[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3302 = stdlib.sub(v1500, v3301);
      const v3303 = v1499[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3304 = [v3302, v3301, v3303];
      const v3305 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3304);
      const v3306 = v3305[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3307 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3308 = stdlib.sub(v3307, v3301);
      const v3309 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3310 = v3306[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3311 = [v3309, v3308, v3310];
      const v3312 = stdlib.Array_set(v3305, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3311);
      undefined /* TokenBurn */;
      const v3313 = v3312[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3314 = v3313[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3314) {
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
  
  
  const [v1211, v1221, v1275, v1285, v1297, v1299, v1604, v1611, v1612] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1621 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:189:11:application call to [unknown function] (defined at: ./index.rsh:189:11:function exp)', 'at ./index.rsh:189:11:application call to [unknown function] (defined at: ./index.rsh:189:11:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1275, v1285, v1297, v1299, v1604, v1611, v1612, v1621],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:189:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1625], secs: v1627, time: v1626, didSend: v543, from: v1624 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1630 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1624), null);
      let v1631;
      switch (v1630[0]) {
        case 'None': {
          const v1632 = v1630[1];
          v1631 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1633 = v1630[1];
          v1631 = v1633;
          
          break;
          }
        }
      const v1634 = stdlib.ge(v1612, v1631);
      const v1635 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1624), null);
      let v1636;
      switch (v1635[0]) {
        case 'None': {
          const v1637 = v1635[1];
          v1636 = false;
          
          break;
          }
        case 'Some': {
          const v1638 = v1635[1];
          v1636 = true;
          
          break;
          }
        }
      const v1639 = v1634 ? v1636 : false;
      if (v1639) {
        const v1640 = v1611[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
        const v1641 = v1640[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
        const v1642 = stdlib.mul(v1641, v1297);
        const v1644 = stdlib.div(v1642, v1285);
        let v1646;
        switch (v1630[0]) {
          case 'None': {
            const v1647 = v1630[1];
            v1646 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1648 = v1630[1];
            v1646 = v1648;
            
            break;
            }
          }
        const v1649 = stdlib.mul(v1644, v1646);
        const v1650 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1624), null);
        let v1651;
        switch (v1650[0]) {
          case 'None': {
            const v1652 = v1650[1];
            v1651 = v1299;
            
            break;
            }
          case 'Some': {
            const v1653 = v1650[1];
            v1651 = v1653;
            
            break;
            }
          }
        const v1657 = stdlib.sub(v1612, v1649);
        sim_r.txns.push({
          kind: 'from',
          to: v1651,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1624, undefined /* Nothing */);
        const v1660 = 'claimPaseed         ';
        null;
        const v1661 = true;
        const v1662 = await txn1.getOutput('Contributors_claimToken', 'v1661', ctc7, v1661);
        
        const v1669 = stdlib.sub(v1604, stdlib.checkedBigNumberify('./index.rsh:196:46:decimal', stdlib.UInt_max, '1'));
        const v3316 = v1669;
        const v3318 = v1611;
        const v3319 = v1657;
        const v3320 = stdlib.gt(v1669, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
        const v3321 = stdlib.gt(v1641, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
        const v3322 = v3320 ? v3321 : false;
        if (v3322) {
          sim_r.isHalt = false;
          }
        else {
          const v3325 = stdlib.sub(v1657, v1641);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3326 = v1640[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3327 = stdlib.sub(v1641, v3326);
          const v3328 = v1640[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3329 = [v3327, v3326, v3328];
          const v3330 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3329);
          const v3331 = v3330[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3332 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3333 = stdlib.sub(v3332, v3326);
          const v3334 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3335 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3336 = [v3334, v3333, v3335];
          const v3337 = stdlib.Array_set(v3330, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3336);
          stdlib.simTokenBurn(sim_r, v1221, v3326);
          const v3338 = v3337[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3339 = v3338[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3339) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1675 = 'claimFailed         ';
        null;
        const v1676 = false;
        const v1677 = await txn1.getOutput('Contributors_claimToken', 'v1676', ctc7, v1676);
        
        const v1682 = v1611[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
        const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
        const v3341 = v1604;
        const v3343 = v1611;
        const v3344 = v1612;
        const v3345 = stdlib.gt(v1604, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
        const v3346 = stdlib.gt(v1683, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
        const v3347 = v3345 ? v3346 : false;
        if (v3347) {
          sim_r.isHalt = false;
          }
        else {
          const v3350 = stdlib.sub(v1612, v1683);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v3351 = v1682[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v3352 = stdlib.sub(v1683, v3351);
          const v3353 = v1682[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3354 = [v3352, v3351, v3353];
          const v3355 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3354);
          const v3356 = v3355[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3357 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v3358 = stdlib.sub(v3357, v3351);
          const v3359 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v3360 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v3361 = [v3359, v3358, v3360];
          const v3362 = stdlib.Array_set(v3355, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3361);
          stdlib.simTokenBurn(sim_r, v1221, v3351);
          const v3363 = v3362[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v3364 = v3363[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v3364) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
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
  const {data: [v1625], secs: v1627, time: v1626, didSend: v543, from: v1624 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1630 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1624), null);
  let v1631;
  switch (v1630[0]) {
    case 'None': {
      const v1632 = v1630[1];
      v1631 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1633 = v1630[1];
      v1631 = v1633;
      
      break;
      }
    }
  const v1634 = stdlib.ge(v1612, v1631);
  const v1635 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1624), null);
  let v1636;
  switch (v1635[0]) {
    case 'None': {
      const v1637 = v1635[1];
      v1636 = false;
      
      break;
      }
    case 'Some': {
      const v1638 = v1635[1];
      v1636 = true;
      
      break;
      }
    }
  const v1639 = v1634 ? v1636 : false;
  if (v1639) {
    const v1640 = v1611[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
    const v1641 = v1640[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
    const v1642 = stdlib.mul(v1641, v1297);
    const v1644 = stdlib.div(v1642, v1285);
    let v1646;
    switch (v1630[0]) {
      case 'None': {
        const v1647 = v1630[1];
        v1646 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1648 = v1630[1];
        v1646 = v1648;
        
        break;
        }
      }
    const v1649 = stdlib.mul(v1644, v1646);
    const v1650 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1624), null);
    let v1651;
    switch (v1650[0]) {
      case 'None': {
        const v1652 = v1650[1];
        v1651 = v1299;
        
        break;
        }
      case 'Some': {
        const v1653 = v1650[1];
        v1651 = v1653;
        
        break;
        }
      }
    const v1657 = stdlib.sub(v1612, v1649);
    ;
    await stdlib.mapSet(map2, v1624, undefined /* Nothing */);
    const v1660 = 'claimPaseed         ';
    null;
    const v1661 = true;
    const v1662 = await txn1.getOutput('Contributors_claimToken', 'v1661', ctc7, v1661);
    if (v543) {
      stdlib.protect(ctc0, await interact.out(v1625, v1662), {
        at: './index.rsh:189:12:application',
        fs: ['at ./index.rsh:189:12:application call to [unknown function] (defined at: ./index.rsh:189:12:function exp)', 'at ./index.rsh:195:15:application call to "notify" (defined at: ./index.rsh:189:37:function exp)', 'at ./index.rsh:189:37:application call to [unknown function] (defined at: ./index.rsh:189:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1669 = stdlib.sub(v1604, stdlib.checkedBigNumberify('./index.rsh:196:46:decimal', stdlib.UInt_max, '1'));
    const v3316 = v1669;
    const v3318 = v1611;
    const v3319 = v1657;
    const v3320 = stdlib.gt(v1669, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
    const v3321 = stdlib.gt(v1641, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
    const v3322 = v3320 ? v3321 : false;
    if (v3322) {
      return;
      }
    else {
      const v3325 = stdlib.sub(v1657, v1641);
      ;
      ;
      const v3326 = v1640[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3327 = stdlib.sub(v1641, v3326);
      const v3328 = v1640[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3329 = [v3327, v3326, v3328];
      const v3330 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3329);
      const v3331 = v3330[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3332 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3333 = stdlib.sub(v3332, v3326);
      const v3334 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3335 = v3331[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3336 = [v3334, v3333, v3335];
      const v3337 = stdlib.Array_set(v3330, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3336);
      undefined /* TokenBurn */;
      const v3338 = v3337[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3339 = v3338[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3339) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1675 = 'claimFailed         ';
    null;
    const v1676 = false;
    const v1677 = await txn1.getOutput('Contributors_claimToken', 'v1676', ctc7, v1676);
    if (v543) {
      stdlib.protect(ctc0, await interact.out(v1625, v1677), {
        at: './index.rsh:189:12:application',
        fs: ['at ./index.rsh:189:12:application call to [unknown function] (defined at: ./index.rsh:189:12:function exp)', 'at ./index.rsh:199:15:application call to "notify" (defined at: ./index.rsh:189:37:function exp)', 'at ./index.rsh:189:37:application call to [unknown function] (defined at: ./index.rsh:189:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1682 = v1611[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
    const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
    const v3341 = v1604;
    const v3343 = v1611;
    const v3344 = v1612;
    const v3345 = stdlib.gt(v1604, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
    const v3346 = stdlib.gt(v1683, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
    const v3347 = v3345 ? v3346 : false;
    if (v3347) {
      return;
      }
    else {
      const v3350 = stdlib.sub(v1612, v1683);
      ;
      ;
      const v3351 = v1682[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
      const v3352 = stdlib.sub(v1683, v3351);
      const v3353 = v1682[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3354 = [v3352, v3351, v3353];
      const v3355 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3354);
      const v3356 = v3355[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3357 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
      const v3358 = stdlib.sub(v3357, v3351);
      const v3359 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
      const v3360 = v3356[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
      const v3361 = [v3359, v3358, v3360];
      const v3362 = stdlib.Array_set(v3355, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v3361);
      undefined /* TokenBurn */;
      const v3363 = v3362[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
      const v3364 = v3363[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
      if (v3364) {
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
  
  
  const [v1211, v1221, v1271, v1275, v1278, v1285, v1291, v1296, v1297, v1298, v1299, v1300, v1306, v1307] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22'), [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3]);
  const v1319 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v1320 = v1319[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1322 = stdlib.gt(v1320, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1322, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1271, v1275, v1278, v1285, v1291, v1296, v1297, v1298, v1299, v1300, v1306, v1307, v1319],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [v1320, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1331], secs: v1333, time: v1332, didSend: v261, from: v1330 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v1335 = v1331[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
      const v1339 = stdlib.add(v1307, v1335);
      sim_r.txns.push({
        amt: v1335,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1344 = v1339;
      const v1345 = await txn1.getOutput('Contributors_contribute', 'v1344', ctc3, v1344);
      
      const v1351 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1330), null);
      let v1352;
      switch (v1351[0]) {
        case 'None': {
          const v1353 = v1351[1];
          v1352 = false;
          
          break;
          }
        case 'Some': {
          const v1354 = v1351[1];
          v1352 = true;
          
          break;
          }
        }
      if (v1352) {
        const v1355 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1330), null);
        let v1356;
        switch (v1355[0]) {
          case 'None': {
            const v1357 = v1355[1];
            v1356 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1358 = v1355[1];
            v1356 = v1358;
            
            break;
            }
          }
        const v1359 = stdlib.add(v1356, v1335);
        await stdlib.simMapSet(sim_r, 1, v1330, v1359);
        const v1360 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
        const v1361 = stdlib.add(v1297, v1335);
        const v1362 = v1271.hardCap;
        const v1364 = stdlib.ge(v1361, v1362);
        const v1365 = v1364 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1366 = stdlib.eq(v1365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3365 = v1366;
        const v3366 = v1361;
        const v3367 = v1360;
        const v3368 = v1330;
        const v3369 = v1332;
        const v3371 = v1306;
        const v3372 = v1339;
        const v3373 = stdlib.le(v1300, v1278);
        const v3374 = v3373 ? v1366 : false;
        if (v3374) {
          sim_r.isHalt = false;
          }
        else {
          const v3378 = stdlib.eq(v1365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3378) {
            const v3379 = 'passed              ';
            null;
            const v3380 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
            const v3381 = stdlib.sub(v1339, v3380);
            sim_r.txns.push({
              kind: 'from',
              to: v1211,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3459 = v1271.softCap;
            const v3460 = stdlib.ge(v1361, v3459);
            if (v3460) {
              const v3461 = 'passed              ';
              null;
              const v3462 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
              const v3463 = stdlib.sub(v1339, v3462);
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3541 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        await stdlib.simMapSet(sim_r, 0, v1330, v1330);
        await stdlib.simMapSet(sim_r, 2, v1330, null);
        await stdlib.simMapSet(sim_r, 1, v1330, v1335);
        const v1370 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
        const v1371 = stdlib.add(v1297, v1335);
        const v1372 = v1271.hardCap;
        const v1374 = stdlib.ge(v1371, v1372);
        const v1375 = v1374 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3602 = v1376;
        const v3603 = v1371;
        const v3604 = v1370;
        const v3605 = v1330;
        const v3606 = v1332;
        const v3608 = v1306;
        const v3609 = v1339;
        const v3610 = stdlib.le(v1300, v1278);
        const v3611 = v3610 ? v1376 : false;
        if (v3611) {
          sim_r.isHalt = false;
          }
        else {
          const v3615 = stdlib.eq(v1375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3615) {
            const v3616 = 'passed              ';
            null;
            const v3617 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
            const v3618 = stdlib.sub(v1339, v3617);
            sim_r.txns.push({
              kind: 'from',
              to: v1211,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3696 = v1271.softCap;
            const v3697 = stdlib.ge(v1371, v3696);
            if (v3697) {
              const v3698 = 'passed              ';
              null;
              const v3699 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
              const v3700 = stdlib.sub(v1339, v3699);
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3778 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1331], secs: v1333, time: v1332, didSend: v261, from: v1330 } = txn1;
  undefined /* setApiDetails */;
  const v1335 = v1331[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
  const v1336 = stdlib.gt(v1335, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1336, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v1339 = stdlib.add(v1307, v1335);
  ;
  const v1344 = v1339;
  const v1345 = await txn1.getOutput('Contributors_contribute', 'v1344', ctc3, v1344);
  if (v261) {
    stdlib.protect(ctc0, await interact.out(v1331, v1345), {
      at: './index.rsh:123:9:application',
      fs: ['at ./index.rsh:123:9:application call to [unknown function] (defined at: ./index.rsh:123:9:function exp)', 'at ./index.rsh:127:11:application call to "notify" (defined at: ./index.rsh:126:31:function exp)', 'at ./index.rsh:126:31:application call to [unknown function] (defined at: ./index.rsh:126:31:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v1351 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1330), null);
  let v1352;
  switch (v1351[0]) {
    case 'None': {
      const v1353 = v1351[1];
      v1352 = false;
      
      break;
      }
    case 'Some': {
      const v1354 = v1351[1];
      v1352 = true;
      
      break;
      }
    }
  if (v1352) {
    const v1355 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1330), null);
    let v1356;
    switch (v1355[0]) {
      case 'None': {
        const v1357 = v1355[1];
        v1356 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1358 = v1355[1];
        v1356 = v1358;
        
        break;
        }
      }
    const v1359 = stdlib.add(v1356, v1335);
    await stdlib.mapSet(map1, v1330, v1359);
    const v1360 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
    const v1361 = stdlib.add(v1297, v1335);
    const v1362 = v1271.hardCap;
    const v1364 = stdlib.ge(v1361, v1362);
    const v1365 = v1364 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v1366 = stdlib.eq(v1365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v3365 = v1366;
    const v3366 = v1361;
    const v3367 = v1360;
    const v3368 = v1330;
    const v3369 = v1332;
    const v3371 = v1306;
    const v3372 = v1339;
    const v3373 = stdlib.le(v1300, v1278);
    const v3374 = v3373 ? v1366 : false;
    if (v3374) {
      return;
      }
    else {
      const v3378 = stdlib.eq(v1365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v3378) {
        const v3379 = 'passed              ';
        null;
        const v3380 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
        const v3381 = stdlib.sub(v1339, v3380);
        ;
        return;
        }
      else {
        const v3459 = v1271.softCap;
        const v3460 = stdlib.ge(v1361, v3459);
        if (v3460) {
          const v3461 = 'passed              ';
          null;
          const v3462 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
          const v3463 = stdlib.sub(v1339, v3462);
          ;
          return;
          }
        else {
          const v3541 = 'failed              ';
          null;
          return;
          }}}}
  else {
    await stdlib.mapSet(map0, v1330, v1330);
    await stdlib.mapSet(map2, v1330, null);
    await stdlib.mapSet(map1, v1330, v1335);
    const v1370 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
    const v1371 = stdlib.add(v1297, v1335);
    const v1372 = v1271.hardCap;
    const v1374 = stdlib.ge(v1371, v1372);
    const v1375 = v1374 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v3602 = v1376;
    const v3603 = v1371;
    const v3604 = v1370;
    const v3605 = v1330;
    const v3606 = v1332;
    const v3608 = v1306;
    const v3609 = v1339;
    const v3610 = stdlib.le(v1300, v1278);
    const v3611 = v3610 ? v1376 : false;
    if (v3611) {
      return;
      }
    else {
      const v3615 = stdlib.eq(v1375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v3615) {
        const v3616 = 'passed              ';
        null;
        const v3617 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
        const v3618 = stdlib.sub(v1339, v3617);
        ;
        return;
        }
      else {
        const v3696 = v1271.softCap;
        const v3697 = stdlib.ge(v1371, v3696);
        if (v3697) {
          const v3698 = 'passed              ';
          null;
          const v3699 = stdlib.div(v1339, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
          const v3700 = stdlib.sub(v1339, v3699);
          ;
          return;
          }
        else {
          const v3778 = 'failed              ';
          null;
          return;
          }}}}
  
  
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
    Contributors_contributed0_729: ctc10,
    Contributors_creating0_729: ctc16,
    Contributors_timedOut0_729: ctc10
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
  
  
  const [v1211, v1221, v1963, v1964] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v1992 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:248:9:application call to [unknown function] (defined at: ./index.rsh:248:9:function exp)', 'at ./index.rsh:231:37:application call to "runContributors_contributed0_729" (defined at: ./index.rsh:248:9:function exp)', 'at ./index.rsh:231:37:application call to [unknown function] (defined at: ./index.rsh:231:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v2002 = ['Contributors_contributed0_729', v1992];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1963, v1964, v2002],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:248:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
      
      switch (v2022[0]) {
        case 'Contributors_contributed0_729': {
          const v2025 = v2022[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v2033 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '0')];
          const v2034 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '1')];
          const v2035 = null;
          const v2036 = await txn1.getOutput('Contributors_contributed', 'v2035', ctc0, v2035);
          
          const v2043 = 'contributed         ';
          null;
          const v3841 = v1963;
          const v3842 = v1964;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_729': {
          const v2077 = v2022[1];
          
          break;
          }
        case 'Contributors_timedOut0_729': {
          const v2129 = v2022[1];
          
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
  const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
  switch (v2022[0]) {
    case 'Contributors_contributed0_729': {
      const v2025 = v2022[1];
      undefined /* setApiDetails */;
      ;
      const v2033 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '0')];
      const v2034 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '1')];
      const v2035 = null;
      const v2036 = await txn1.getOutput('Contributors_contributed', 'v2035', ctc0, v2035);
      if (v859) {
        stdlib.protect(ctc0, await interact.out(v2025, v2036), {
          at: './index.rsh:248:10:application',
          fs: ['at ./index.rsh:248:10:application call to [unknown function] (defined at: ./index.rsh:248:10:function exp)', 'at ./index.rsh:249:13:application call to "notify" (defined at: ./index.rsh:248:60:function exp)', 'at ./index.rsh:248:60:application call to [unknown function] (defined at: ./index.rsh:248:60:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v2043 = 'contributed         ';
      null;
      const v3841 = v1963;
      const v3842 = v1964;
      return;
      
      break;
      }
    case 'Contributors_creating0_729': {
      const v2077 = v2022[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_729': {
      const v2129 = v2022[1];
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
    Contributors_contributed0_729: ctc16,
    Contributors_creating0_729: ctc15,
    Contributors_timedOut0_729: ctc16
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
  
  
  const [v1211, v1221, v1963, v1964] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v1969 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:231:37:application call to "runContributors_creating0_729" (defined at: ./index.rsh:234:9:function exp)', 'at ./index.rsh:231:37:application call to [unknown function] (defined at: ./index.rsh:231:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v1988 = ['Contributors_creating0_729', v1969];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1963, v1964, v1988],
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
      
      const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
      
      switch (v2022[0]) {
        case 'Contributors_contributed0_729': {
          const v2025 = v2022[1];
          
          break;
          }
        case 'Contributors_creating0_729': {
          const v2077 = v2022[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v2097 = v2077[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v2098 = null;
          const v2099 = await txn1.getOutput('Contributors_creating', 'v2098', ctc0, v2098);
          
          const v2111 = v2097.id;
          const v2112 = v2097.title;
          const v2113 = v2097.link;
          const v2114 = v2097.description;
          const v2115 = v2097.owner;
          const v2116 = v2097.contractInfo;
          null;
          const v3925 = v1963;
          const v3926 = v1964;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_729': {
          const v2129 = v2022[1];
          
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
  const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
  switch (v2022[0]) {
    case 'Contributors_contributed0_729': {
      const v2025 = v2022[1];
      return;
      break;
      }
    case 'Contributors_creating0_729': {
      const v2077 = v2022[1];
      undefined /* setApiDetails */;
      ;
      const v2097 = v2077[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
      const v2098 = null;
      const v2099 = await txn1.getOutput('Contributors_creating', 'v2098', ctc0, v2098);
      if (v859) {
        stdlib.protect(ctc0, await interact.out(v2077, v2099), {
          at: './index.rsh:234:10:application',
          fs: ['at ./index.rsh:234:10:application call to [unknown function] (defined at: ./index.rsh:234:10:function exp)', 'at ./index.rsh:235:13:application call to "notify" (defined at: ./index.rsh:234:47:function exp)', 'at ./index.rsh:234:47:application call to [unknown function] (defined at: ./index.rsh:234:47:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v2111 = v2097.id;
      const v2112 = v2097.title;
      const v2113 = v2097.link;
      const v2114 = v2097.description;
      const v2115 = v2097.owner;
      const v2116 = v2097.contractInfo;
      null;
      const v3925 = v1963;
      const v3926 = v1964;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_729': {
      const v2129 = v2022[1];
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
    Contributors_contributed0_729: ctc10,
    Contributors_creating0_729: ctc16,
    Contributors_timedOut0_729: ctc10
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
  
  
  const [v1211, v1221, v1963, v1964] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2006 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:255:9:application call to [unknown function] (defined at: ./index.rsh:255:9:function exp)', 'at ./index.rsh:231:37:application call to "runContributors_timedOut0_729" (defined at: ./index.rsh:255:9:function exp)', 'at ./index.rsh:231:37:application call to [unknown function] (defined at: ./index.rsh:231:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v2016 = ['Contributors_timedOut0_729', v2006];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1211, v1221, v1963, v1964, v2016],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:255:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
      
      switch (v2022[0]) {
        case 'Contributors_contributed0_729': {
          const v2025 = v2022[1];
          
          break;
          }
        case 'Contributors_creating0_729': {
          const v2077 = v2022[1];
          
          break;
          }
        case 'Contributors_timedOut0_729': {
          const v2129 = v2022[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v2170 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
          const v2171 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '1')];
          const v2172 = null;
          const v2173 = await txn1.getOutput('Contributors_timedOut', 'v2172', ctc0, v2172);
          
          const v2180 = 'timedOut            ';
          null;
          const v4009 = v1963;
          const v4010 = v1964;
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
  const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn1;
  switch (v2022[0]) {
    case 'Contributors_contributed0_729': {
      const v2025 = v2022[1];
      return;
      break;
      }
    case 'Contributors_creating0_729': {
      const v2077 = v2022[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_729': {
      const v2129 = v2022[1];
      undefined /* setApiDetails */;
      ;
      const v2170 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
      const v2171 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '1')];
      const v2172 = null;
      const v2173 = await txn1.getOutput('Contributors_timedOut', 'v2172', ctc0, v2172);
      if (v859) {
        stdlib.protect(ctc0, await interact.out(v2129, v2173), {
          at: './index.rsh:255:10:application',
          fs: ['at ./index.rsh:255:10:application call to [unknown function] (defined at: ./index.rsh:255:10:function exp)', 'at ./index.rsh:256:13:application call to "notify" (defined at: ./index.rsh:255:57:function exp)', 'at ./index.rsh:255:57:application call to [unknown function] (defined at: ./index.rsh:255:57:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v2180 = 'timedOut            ';
      null;
      const v4009 = v1963;
      const v4010 = v1964;
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
    Contributors_contributed0_729: ctc20,
    Contributors_creating0_729: ctc23,
    Contributors_timedOut0_729: ctc20
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
  
  
  const v1177 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1178 = [v1177];
  const v1189 = stdlib.protect(ctc8, interact.getParams, 'for Deployer\'s interact field getParams');
  const v1190 = v1189.name;
  const v1191 = v1189.symbol;
  const v1192 = v1189.tokenid;
  const v1193 = stdlib.protect(ctc13, interact.getProject, 'for Deployer\'s interact field getProject');
  const v1205 = stdlib.protect(ctc14, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1205, v1190, v1191, v1192],
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
      
      const {data: [v1212, v1213, v1214, v1215], secs: v1217, time: v1216, didSend: v64, from: v1211 } = txn1;
      
      ;
      const v1218 = '                                                                                                ';
      const v1219 = '                                ';
      const v1220 = stdlib.simTokenNew(sim_r, v1213, v1214, v1218, v1219, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1221 = await txn1.getOutput('internal', 'v1220', ctc15, v1220);
      const v1231 = v1178[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1233 = v1231[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1234 = v1231[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1235 = [stdlib.UInt_max, v1233, v1234];
      const v1236 = stdlib.Array_set(v1178, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1235);
      const v1238 = v1236[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1239 = v1238[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1241 = v1238[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1242 = [v1239, stdlib.UInt_max, v1241];
      const v1243 = stdlib.Array_set(v1236, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1242);
      const v1244 = v1243[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1245 = v1244[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1246 = v1244[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1248 = [v1245, v1246, false];
      const v1249 = stdlib.Array_set(v1243, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1248);
      const v1250 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc14, ctc6, ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1212, v1213, v1214, v1215], secs: v1217, time: v1216, didSend: v64, from: v1211 } = txn1;
  ;
  const v1218 = '                                                                                                ';
  const v1219 = '                                ';
  const v1220 = undefined /* TokenNew */;
  const v1221 = await txn1.getOutput('internal', 'v1220', ctc15, v1220);
  const v1231 = v1178[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1233 = v1231[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1234 = v1231[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1235 = [stdlib.UInt_max, v1233, v1234];
  const v1236 = stdlib.Array_set(v1178, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1235);
  const v1238 = v1236[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1239 = v1238[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1241 = v1238[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1242 = [v1239, stdlib.UInt_max, v1241];
  const v1243 = stdlib.Array_set(v1236, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1242);
  const v1244 = v1243[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1245 = v1244[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1246 = v1244[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1248 = [v1245, v1246, false];
  const v1249 = stdlib.Array_set(v1243, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1248);
  const v1250 = 'tokenCreated        ';
  null;
  const v1251 = v1249[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1252 = v1251[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1211, v1212, v1221, v1249],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), [[v1252, v1221]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1255, time: v1254, didSend: v90, from: v1253 } = txn2;
      
      const v1256 = v1249[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
      const v1257 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
      ;
      const v1259 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
      const v1260 = stdlib.add(v1259, v1257);
      const v1264 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
      const v1265 = [v1260, v1257, v1264];
      const v1266 = stdlib.Array_set(v1249, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1265);
      sim_r.txns.push({
        amt: v1257,
        kind: 'to',
        tok: v1221
        });
      if (v1212) {
        sim_r.isHalt = false;
        }
      else {
        const v1956 = true;
        const v1957 = v1254;
        const v1963 = v1266;
        const v1964 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v1956;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v2181 = v1963[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v2182 = v2181[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v2186 = stdlib.sub(v1964, v2182);
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v2193 = v2181[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v2199 = stdlib.sub(v2182, v2193);
          const v2203 = v2181[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v2204 = [v2199, v2193, v2203];
          const v2205 = stdlib.Array_set(v1963, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v2204);
          const v2206 = v2205[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v2207 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v2208 = stdlib.sub(v2207, v2193);
          const v2210 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v2212 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v2213 = [v2210, v2208, v2212];
          const v2214 = stdlib.Array_set(v2205, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v2213);
          stdlib.simTokenBurn(sim_r, v1221, v2193);
          const v2215 = v2214[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v2216 = v2215[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v2216) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1221);
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
  const {data: [], secs: v1255, time: v1254, didSend: v90, from: v1253 } = txn2;
  const v1256 = v1249[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1257 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  ;
  const v1259 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
  const v1260 = stdlib.add(v1259, v1257);
  const v1264 = v1256[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
  const v1265 = [v1260, v1257, v1264];
  const v1266 = stdlib.Array_set(v1249, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1265);
  ;
  const v1267 = stdlib.addressEq(v1211, v1253);
  stdlib.assert(v1267, {
    at: './index.rsh:86:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v1212) {
    const txn3 = await (ctc.sendrecv({
      args: [v1211, v1221, v1254, v1266, v1193],
      evt_cnt: 1,
      funcNum: 2,
      lct: v1254,
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
        
        const {data: [v1271], secs: v1273, time: v1272, didSend: v99, from: v1270 } = txn3;
        
        ;
        const v1275 = v1271.id;
        const v1276 = 'created             ';
        null;
        const v1278 = stdlib.add(v1254, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc15, ctc3, ctc18, ctc13],
      waitIfNotPresent: false
      }));
    const {data: [v1271], secs: v1273, time: v1272, didSend: v99, from: v1270 } = txn3;
    ;
    const v1274 = stdlib.addressEq(v1211, v1270);
    stdlib.assert(v1274, {
      at: './index.rsh:93:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1275 = v1271.id;
    const v1276 = 'created             ';
    null;
    const v1278 = stdlib.add(v1254, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn4 = await (ctc.sendrecv({
      args: [v1211, v1221, v1266, v1271, v1272, v1275, v1278],
      evt_cnt: 0,
      funcNum: 3,
      lct: v1272,
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
        
        const {data: [], secs: v1281, time: v1280, didSend: v108, from: v1279 } = txn4;
        
        ;
        const v1283 = v1266[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
        const v1284 = v1283[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
        const v1285 = v1271.PrivateSaleAmt;
        const v1286 = stdlib.gt(v1284, v1285);
        if (v1286) {
          const v1290 = stdlib.sub(v1284, v1285);
          const v1291 = v1271.owner;
          const v1295 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1290);
          sim_r.txns.push({
            kind: 'from',
            to: v1291,
            tok: undefined /* Nothing */
            });
          const v1296 = true;
          const v1297 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
          const v1298 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
          const v1299 = v1211;
          const v1300 = v1280;
          const v1301 = v1272;
          const v1306 = v1266;
          const v1307 = v1295;
          
          if (await (async () => {
            const v1311 = stdlib.le(v1301, v1278);
            const v1312 = v1311 ? v1296 : false;
            
            return v1312;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1385 = v1271.hardCap;
            const v1386 = stdlib.ge(v1297, v1385);
            const v1387 = v1386 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1388 = stdlib.eq(v1387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1388) {
              const v1390 = 'passed              ';
              null;
              const v1392 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
              const v1396 = stdlib.sub(v1307, v1392);
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1570 = v1271.softCap;
              const v1571 = stdlib.ge(v1297, v1570);
              if (v1571) {
                const v1573 = 'passed              ';
                null;
                const v1575 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
                const v1579 = stdlib.sub(v1307, v1575);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1211,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v1754 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1903 = v1271.owner;
          const v1907 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1284);
          sim_r.txns.push({
            kind: 'from',
            to: v1903,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1211,
            tok: undefined /* Nothing */
            });
          const v1914 = v1283[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
          stdlib.simTokenBurn(sim_r, v1221, v1914);
          stdlib.simTokenDestroy(sim_r, v1221);
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
    const {data: [], secs: v1281, time: v1280, didSend: v108, from: v1279 } = txn4;
    ;
    const v1282 = stdlib.addressEq(v1211, v1279);
    stdlib.assert(v1282, {
      at: './index.rsh:102:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1283 = v1266[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
    const v1284 = v1283[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
    const v1285 = v1271.PrivateSaleAmt;
    const v1286 = stdlib.gt(v1284, v1285);
    if (v1286) {
      const v1290 = stdlib.sub(v1284, v1285);
      const v1291 = v1271.owner;
      const v1295 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1290);
      ;
      let v1296 = true;
      let v1297 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
      let v1298 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
      let v1299 = v1211;
      let v1300 = v1280;
      let v1301 = v1272;
      let v1306 = v1266;
      let v1307 = v1295;
      
      while (await (async () => {
        const v1311 = stdlib.le(v1301, v1278);
        const v1312 = v1311 ? v1296 : false;
        
        return v1312;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 16,
          out_tys: [ctc16],
          timeoutAt: ['time', v1278],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v1211, v1221, v1271, v1275, v1278, v1285, v1291, v1296, v1297, v1298, v1299, v1300, v1306, v1307],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:140:14:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1381, time: v1380, didSend: v331, from: v1379 } = txn6;
              
              ;
              const cv1296 = v1296;
              const cv1297 = v1297;
              const cv1298 = v1298;
              const cv1299 = v1299;
              const cv1300 = v1380;
              const cv1301 = v1300;
              const cv1306 = v1306;
              const cv1307 = v1307;
              
              await (async () => {
                const v1296 = cv1296;
                const v1297 = cv1297;
                const v1298 = cv1298;
                const v1299 = cv1299;
                const v1300 = cv1300;
                const v1301 = cv1301;
                const v1306 = cv1306;
                const v1307 = cv1307;
                
                if (await (async () => {
                  const v1311 = stdlib.le(v1301, v1278);
                  const v1312 = v1311 ? v1296 : false;
                  
                  return v1312;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1385 = v1271.hardCap;
                  const v1386 = stdlib.ge(v1297, v1385);
                  const v1387 = v1386 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v1388 = stdlib.eq(v1387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  if (v1388) {
                    const v1390 = 'passed              ';
                    null;
                    const v1392 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
                    const v1396 = stdlib.sub(v1307, v1392);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1211,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1570 = v1271.softCap;
                    const v1571 = stdlib.ge(v1297, v1570);
                    if (v1571) {
                      const v1573 = 'passed              ';
                      null;
                      const v1575 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
                      const v1579 = stdlib.sub(v1307, v1575);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1211,
                        tok: undefined /* Nothing */
                        });
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1754 = 'failed              ';
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
          const {data: [], secs: v1381, time: v1380, didSend: v331, from: v1379 } = txn6;
          ;
          const v1382 = stdlib.addressEq(v1211, v1379);
          stdlib.assert(v1382, {
            at: './index.rsh:140:14:dot',
            fs: ['at ./index.rsh:139:34:application call to [unknown function] (defined at: ./index.rsh:139:34:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1380;
          const cv1301 = v1300;
          const cv1306 = v1306;
          const cv1307 = v1307;
          
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1301 = cv1301;
          v1306 = cv1306;
          v1307 = cv1307;
          
          continue;
          }
        else {
          const {data: [v1331], secs: v1333, time: v1332, didSend: v261, from: v1330 } = txn5;
          undefined /* setApiDetails */;
          const v1335 = v1331[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
          const v1336 = stdlib.gt(v1335, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1336, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
            msg: 'Contribution too small',
            who: 'Deployer'
            });
          const v1339 = stdlib.add(v1307, v1335);
          ;
          const v1344 = v1339;
          await txn5.getOutput('Contributors_contribute', 'v1344', ctc3, v1344);
          const v1351 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1330), null);
          let v1352;
          switch (v1351[0]) {
            case 'None': {
              const v1353 = v1351[1];
              v1352 = false;
              
              break;
              }
            case 'Some': {
              const v1354 = v1351[1];
              v1352 = true;
              
              break;
              }
            }
          if (v1352) {
            const v1355 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1330), null);
            let v1356;
            switch (v1355[0]) {
              case 'None': {
                const v1357 = v1355[1];
                v1356 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1358 = v1355[1];
                v1356 = v1358;
                
                break;
                }
              }
            const v1359 = stdlib.add(v1356, v1335);
            await stdlib.mapSet(map1, v1330, v1359);
            const v1360 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
            const v1361 = stdlib.add(v1297, v1335);
            const v1362 = v1271.hardCap;
            const v1364 = stdlib.ge(v1361, v1362);
            const v1365 = v1364 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1366 = stdlib.eq(v1365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv1296 = v1366;
            const cv1297 = v1361;
            const cv1298 = v1360;
            const cv1299 = v1330;
            const cv1300 = v1332;
            const cv1301 = v1300;
            const cv1306 = v1306;
            const cv1307 = v1339;
            
            v1296 = cv1296;
            v1297 = cv1297;
            v1298 = cv1298;
            v1299 = cv1299;
            v1300 = cv1300;
            v1301 = cv1301;
            v1306 = cv1306;
            v1307 = cv1307;
            
            continue;}
          else {
            await stdlib.mapSet(map0, v1330, v1330);
            await stdlib.mapSet(map2, v1330, null);
            await stdlib.mapSet(map1, v1330, v1335);
            const v1370 = stdlib.add(v1298, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '1'));
            const v1371 = stdlib.add(v1297, v1335);
            const v1372 = v1271.hardCap;
            const v1374 = stdlib.ge(v1371, v1372);
            const v1375 = v1374 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1376 = stdlib.eq(v1375, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv1296 = v1376;
            const cv1297 = v1371;
            const cv1298 = v1370;
            const cv1299 = v1330;
            const cv1300 = v1332;
            const cv1301 = v1300;
            const cv1306 = v1306;
            const cv1307 = v1339;
            
            v1296 = cv1296;
            v1297 = cv1297;
            v1298 = cv1298;
            v1299 = cv1299;
            v1300 = cv1300;
            v1301 = cv1301;
            v1306 = cv1306;
            v1307 = cv1307;
            
            continue;}}
        
        }
      const v1385 = v1271.hardCap;
      const v1386 = stdlib.ge(v1297, v1385);
      const v1387 = v1386 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1388 = stdlib.eq(v1387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1388) {
        const v1390 = 'passed              ';
        null;
        const v1392 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:146:30:decimal', stdlib.UInt_max, '100'));
        const v1396 = stdlib.sub(v1307, v1392);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1211, v1221, v1275, v1285, v1291, v1297, v1298, v1299, v1306, v1396],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1300,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1399, time: v1398, didSend: v350, from: v1397 } = txn5;
            
            ;
            const v1406 = stdlib.sub(v1396, v1396);
            sim_r.txns.push({
              kind: 'from',
              to: v1291,
              tok: undefined /* Nothing */
              });
            const v1407 = v1306[stdlib.checkedBigNumberify('./index.rsh:151:21:application', stdlib.UInt_max, '0')];
            const v1408 = v1407[stdlib.checkedBigNumberify('./index.rsh:151:21:application', stdlib.UInt_max, '0')];
            const v1409 = stdlib.div(v1408, stdlib.checkedBigNumberify('./index.rsh:151:34:decimal', stdlib.UInt_max, '100'));
            const v1413 = stdlib.sub(v1406, v1409);
            sim_r.txns.push({
              kind: 'from',
              to: v1211,
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
        const {data: [], secs: v1399, time: v1398, didSend: v350, from: v1397 } = txn5;
        ;
        const v1400 = stdlib.addressEq(v1211, v1397);
        stdlib.assert(v1400, {
          at: './index.rsh:148:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1406 = stdlib.sub(v1396, v1396);
        ;
        const v1407 = v1306[stdlib.checkedBigNumberify('./index.rsh:151:21:application', stdlib.UInt_max, '0')];
        const v1408 = v1407[stdlib.checkedBigNumberify('./index.rsh:151:21:application', stdlib.UInt_max, '0')];
        const v1409 = stdlib.div(v1408, stdlib.checkedBigNumberify('./index.rsh:151:34:decimal', stdlib.UInt_max, '100'));
        const v1413 = stdlib.sub(v1406, v1409);
        ;
        const txn6 = await (ctc.sendrecv({
          args: [v1211, v1221, v1275, v1285, v1297, v1298, v1299, v1306, v1408, v1413],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1398,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:155:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1416, time: v1415, didSend: v367, from: v1414 } = txn6;
            
            ;
            const v1420 = v1408;
            const v1421 = v1298;
            const v1422 = v1415;
            const v1428 = v1306;
            const v1429 = v1413;
            
            if (await (async () => {
              const v1433 = stdlib.gt(v1421, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
              const v1434 = stdlib.gt(v1420, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
              const v1435 = v1433 ? v1434 : false;
              
              return v1435;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1505 = v1428[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
              const v1506 = v1505[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
              const v1510 = stdlib.sub(v1429, v1506);
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
                tok: undefined /* Nothing */
                });
              const v1517 = v1505[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
              const v1523 = stdlib.sub(v1506, v1517);
              const v1527 = v1505[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
              const v1528 = [v1523, v1517, v1527];
              const v1529 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1528);
              const v1530 = v1529[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
              const v1531 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
              const v1532 = stdlib.sub(v1531, v1517);
              const v1534 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
              const v1536 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
              const v1537 = [v1534, v1532, v1536];
              const v1538 = stdlib.Array_set(v1529, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1537);
              stdlib.simTokenBurn(sim_r, v1221, v1517);
              const v1539 = v1538[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
              const v1540 = v1539[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
              if (v1540) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1221);
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
        const {data: [], secs: v1416, time: v1415, didSend: v367, from: v1414 } = txn6;
        ;
        const v1417 = stdlib.addressEq(v1211, v1414);
        stdlib.assert(v1417, {
          at: './index.rsh:155:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1420 = v1408;
        let v1421 = v1298;
        let v1422 = v1415;
        let v1428 = v1306;
        let v1429 = v1413;
        
        while (await (async () => {
          const v1433 = stdlib.gt(v1421, stdlib.checkedBigNumberify('./index.rsh:158:26:decimal', stdlib.UInt_max, '0'));
          const v1434 = stdlib.gt(v1420, stdlib.checkedBigNumberify('./index.rsh:158:51:decimal', stdlib.UInt_max, '0'));
          const v1435 = v1433 ? v1434 : false;
          
          return v1435;})()) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc19],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1442], secs: v1444, time: v1443, didSend: v405, from: v1441 } = txn7;
          undefined /* setApiDetails */;
          ;
          const v1447 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1441), null);
          let v1448;
          switch (v1447[0]) {
            case 'None': {
              const v1449 = v1447[1];
              v1448 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1450 = v1447[1];
              v1448 = v1450;
              
              break;
              }
            }
          const v1451 = stdlib.ge(v1429, v1448);
          const v1452 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1441), null);
          let v1453;
          switch (v1452[0]) {
            case 'None': {
              const v1454 = v1452[1];
              v1453 = false;
              
              break;
              }
            case 'Some': {
              const v1455 = v1452[1];
              v1453 = true;
              
              break;
              }
            }
          const v1456 = v1451 ? v1453 : false;
          if (v1456) {
            const v1457 = v1428[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
            const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:161:23:application', stdlib.UInt_max, '0')];
            const v1459 = stdlib.mul(v1458, v1297);
            const v1461 = stdlib.div(v1459, v1285);
            let v1463;
            switch (v1447[0]) {
              case 'None': {
                const v1464 = v1447[1];
                v1463 = stdlib.checkedBigNumberify('./index.rsh:153:51:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1465 = v1447[1];
                v1463 = v1465;
                
                break;
                }
              }
            const v1466 = stdlib.mul(v1461, v1463);
            const v1467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1441), null);
            let v1468;
            switch (v1467[0]) {
              case 'None': {
                const v1469 = v1467[1];
                v1468 = v1299;
                
                break;
                }
              case 'Some': {
                const v1470 = v1467[1];
                v1468 = v1470;
                
                break;
                }
              }
            const v1474 = stdlib.sub(v1429, v1466);
            ;
            await stdlib.mapSet(map2, v1441, undefined /* Nothing */);
            const v1477 = 'claimPassed         ';
            null;
            const v1478 = true;
            await txn7.getOutput('Contributors_claimToken', 'v1478', ctc14, v1478);
            const v1484 = stdlib.sub(v1421, stdlib.checkedBigNumberify('./index.rsh:166:29:decimal', stdlib.UInt_max, '1'));
            const cv1420 = v1484;
            const cv1421 = v1458;
            const cv1422 = v1443;
            const cv1428 = v1428;
            const cv1429 = v1474;
            
            v1420 = cv1420;
            v1421 = cv1421;
            v1422 = cv1422;
            v1428 = cv1428;
            v1429 = cv1429;
            
            continue;}
          else {
            const v1492 = 'claimFailed         ';
            null;
            const v1493 = false;
            await txn7.getOutput('Contributors_claimToken', 'v1493', ctc14, v1493);
            const v1499 = v1428[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
            const v1500 = v1499[stdlib.checkedBigNumberify('./index.rsh:170:35:application', stdlib.UInt_max, '0')];
            const cv1420 = v1421;
            const cv1421 = v1500;
            const cv1422 = v1443;
            const cv1428 = v1428;
            const cv1429 = v1429;
            
            v1420 = cv1420;
            v1421 = cv1421;
            v1422 = cv1422;
            v1428 = cv1428;
            v1429 = cv1429;
            
            continue;}
          
          }
        const v1505 = v1428[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
        const v1506 = v1505[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
        const v1510 = stdlib.sub(v1429, v1506);
        ;
        ;
        const v1517 = v1505[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
        const v1523 = stdlib.sub(v1506, v1517);
        const v1527 = v1505[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
        const v1528 = [v1523, v1517, v1527];
        const v1529 = stdlib.Array_set(v1428, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1528);
        const v1530 = v1529[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
        const v1531 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
        const v1532 = stdlib.sub(v1531, v1517);
        const v1534 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
        const v1536 = v1530[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
        const v1537 = [v1534, v1532, v1536];
        const v1538 = stdlib.Array_set(v1529, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1537);
        undefined /* TokenBurn */;
        const v1539 = v1538[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
        const v1540 = v1539[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
        if (v1540) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }
        
        
        
        }
      else {
        const v1570 = v1271.softCap;
        const v1571 = stdlib.ge(v1297, v1570);
        if (v1571) {
          const v1573 = 'passed              ';
          null;
          const v1575 = stdlib.div(v1307, stdlib.checkedBigNumberify('./index.rsh:176:32:decimal', stdlib.UInt_max, '100'));
          const v1579 = stdlib.sub(v1307, v1575);
          ;
          const txn5 = await (ctc.sendrecv({
            args: [v1211, v1221, v1275, v1285, v1291, v1297, v1298, v1299, v1306, v1579],
            evt_cnt: 0,
            funcNum: 9,
            lct: v1300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1582, time: v1581, didSend: v488, from: v1580 } = txn5;
              
              ;
              const v1589 = stdlib.sub(v1579, v1579);
              sim_r.txns.push({
                kind: 'from',
                to: v1291,
                tok: undefined /* Nothing */
                });
              const v1590 = v1306[stdlib.checkedBigNumberify('./index.rsh:181:23:application', stdlib.UInt_max, '0')];
              const v1591 = v1590[stdlib.checkedBigNumberify('./index.rsh:181:23:application', stdlib.UInt_max, '0')];
              const v1592 = stdlib.div(v1591, stdlib.checkedBigNumberify('./index.rsh:181:36:decimal', stdlib.UInt_max, '100'));
              const v1596 = stdlib.sub(v1589, v1592);
              sim_r.txns.push({
                kind: 'from',
                to: v1211,
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
          const {data: [], secs: v1582, time: v1581, didSend: v488, from: v1580 } = txn5;
          ;
          const v1583 = stdlib.addressEq(v1211, v1580);
          stdlib.assert(v1583, {
            at: './index.rsh:178:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1589 = stdlib.sub(v1579, v1579);
          ;
          const v1590 = v1306[stdlib.checkedBigNumberify('./index.rsh:181:23:application', stdlib.UInt_max, '0')];
          const v1591 = v1590[stdlib.checkedBigNumberify('./index.rsh:181:23:application', stdlib.UInt_max, '0')];
          const v1592 = stdlib.div(v1591, stdlib.checkedBigNumberify('./index.rsh:181:36:decimal', stdlib.UInt_max, '100'));
          const v1596 = stdlib.sub(v1589, v1592);
          ;
          const txn6 = await (ctc.sendrecv({
            args: [v1211, v1221, v1275, v1285, v1297, v1298, v1299, v1306, v1591, v1596],
            evt_cnt: 0,
            funcNum: 10,
            lct: v1581,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1599, time: v1598, didSend: v505, from: v1597 } = txn6;
              
              ;
              const v1603 = v1591;
              const v1604 = v1298;
              const v1605 = v1598;
              const v1611 = v1306;
              const v1612 = v1596;
              
              if (await (async () => {
                const v1616 = stdlib.gt(v1604, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
                const v1617 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
                const v1618 = v1616 ? v1617 : false;
                
                return v1618;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1688 = v1611[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
                const v1689 = v1688[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
                const v1693 = stdlib.sub(v1612, v1689);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1211,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1211,
                  tok: undefined /* Nothing */
                  });
                const v1700 = v1688[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
                const v1706 = stdlib.sub(v1689, v1700);
                const v1710 = v1688[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
                const v1711 = [v1706, v1700, v1710];
                const v1712 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1711);
                const v1713 = v1712[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
                const v1714 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
                const v1715 = stdlib.sub(v1714, v1700);
                const v1717 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
                const v1719 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
                const v1720 = [v1717, v1715, v1719];
                const v1721 = stdlib.Array_set(v1712, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1720);
                stdlib.simTokenBurn(sim_r, v1221, v1700);
                const v1722 = v1721[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
                const v1723 = v1722[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
                if (v1723) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1221);
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
          const {data: [], secs: v1599, time: v1598, didSend: v505, from: v1597 } = txn6;
          ;
          const v1600 = stdlib.addressEq(v1211, v1597);
          stdlib.assert(v1600, {
            at: './index.rsh:185:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1603 = v1591;
          let v1604 = v1298;
          let v1605 = v1598;
          let v1611 = v1306;
          let v1612 = v1596;
          
          while (await (async () => {
            const v1616 = stdlib.gt(v1604, stdlib.checkedBigNumberify('./index.rsh:188:28:decimal', stdlib.UInt_max, '0'));
            const v1617 = stdlib.gt(v1603, stdlib.checkedBigNumberify('./index.rsh:188:53:decimal', stdlib.UInt_max, '0'));
            const v1618 = v1616 ? v1617 : false;
            
            return v1618;})()) {
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1625], secs: v1627, time: v1626, didSend: v543, from: v1624 } = txn7;
            undefined /* setApiDetails */;
            ;
            const v1630 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1624), null);
            let v1631;
            switch (v1630[0]) {
              case 'None': {
                const v1632 = v1630[1];
                v1631 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1633 = v1630[1];
                v1631 = v1633;
                
                break;
                }
              }
            const v1634 = stdlib.ge(v1612, v1631);
            const v1635 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1624), null);
            let v1636;
            switch (v1635[0]) {
              case 'None': {
                const v1637 = v1635[1];
                v1636 = false;
                
                break;
                }
              case 'Some': {
                const v1638 = v1635[1];
                v1636 = true;
                
                break;
                }
              }
            const v1639 = v1634 ? v1636 : false;
            if (v1639) {
              const v1640 = v1611[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
              const v1641 = v1640[stdlib.checkedBigNumberify('./index.rsh:191:25:application', stdlib.UInt_max, '0')];
              const v1642 = stdlib.mul(v1641, v1297);
              const v1644 = stdlib.div(v1642, v1285);
              let v1646;
              switch (v1630[0]) {
                case 'None': {
                  const v1647 = v1630[1];
                  v1646 = stdlib.checkedBigNumberify('./index.rsh:183:53:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1648 = v1630[1];
                  v1646 = v1648;
                  
                  break;
                  }
                }
              const v1649 = stdlib.mul(v1644, v1646);
              const v1650 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1624), null);
              let v1651;
              switch (v1650[0]) {
                case 'None': {
                  const v1652 = v1650[1];
                  v1651 = v1299;
                  
                  break;
                  }
                case 'Some': {
                  const v1653 = v1650[1];
                  v1651 = v1653;
                  
                  break;
                  }
                }
              const v1657 = stdlib.sub(v1612, v1649);
              ;
              await stdlib.mapSet(map2, v1624, undefined /* Nothing */);
              const v1660 = 'claimPaseed         ';
              null;
              const v1661 = true;
              await txn7.getOutput('Contributors_claimToken', 'v1661', ctc14, v1661);
              const v1669 = stdlib.sub(v1604, stdlib.checkedBigNumberify('./index.rsh:196:46:decimal', stdlib.UInt_max, '1'));
              const cv1603 = v1641;
              const cv1604 = v1669;
              const cv1605 = v1626;
              const cv1611 = v1611;
              const cv1612 = v1657;
              
              v1603 = cv1603;
              v1604 = cv1604;
              v1605 = cv1605;
              v1611 = cv1611;
              v1612 = cv1612;
              
              continue;}
            else {
              const v1675 = 'claimFailed         ';
              null;
              const v1676 = false;
              await txn7.getOutput('Contributors_claimToken', 'v1676', ctc14, v1676);
              const v1682 = v1611[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
              const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:200:24:application', stdlib.UInt_max, '0')];
              const cv1603 = v1683;
              const cv1604 = v1604;
              const cv1605 = v1626;
              const cv1611 = v1611;
              const cv1612 = v1612;
              
              v1603 = cv1603;
              v1604 = cv1604;
              v1605 = cv1605;
              v1611 = cv1611;
              v1612 = cv1612;
              
              continue;}
            
            }
          const v1688 = v1611[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v1689 = v1688[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v1693 = stdlib.sub(v1612, v1689);
          ;
          ;
          const v1700 = v1688[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v1706 = stdlib.sub(v1689, v1700);
          const v1710 = v1688[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v1711 = [v1706, v1700, v1710];
          const v1712 = stdlib.Array_set(v1611, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1711);
          const v1713 = v1712[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v1714 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v1715 = stdlib.sub(v1714, v1700);
          const v1717 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v1719 = v1713[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v1720 = [v1717, v1715, v1719];
          const v1721 = stdlib.Array_set(v1712, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1720);
          undefined /* TokenBurn */;
          const v1722 = v1721[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v1723 = v1722[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v1723) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          
          
          }
        else {
          const v1754 = 'failed              ';
          null;
          const txn5 = await (ctc.sendrecv({
            args: [v1211, v1221, v1275, v1298, v1299, v1306, v1307],
            evt_cnt: 0,
            funcNum: 13,
            lct: v1300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1757, time: v1756, didSend: v618, from: v1755 } = txn5;
              
              ;
              const v1760 = v1307;
              const v1761 = v1298;
              const v1762 = v1756;
              const v1768 = v1306;
              const v1769 = v1307;
              
              if (await (async () => {
                const v1772 = stdlib.gt(v1761, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
                const v1773 = stdlib.gt(v1760, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
                const v1774 = v1772 ? v1773 : false;
                
                return v1774;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1836 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
                const v1837 = v1836[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
                const v1841 = stdlib.sub(v1769, v1837);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1211,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1211,
                  tok: undefined /* Nothing */
                  });
                const v1848 = v1836[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
                const v1854 = stdlib.sub(v1837, v1848);
                const v1858 = v1836[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
                const v1859 = [v1854, v1848, v1858];
                const v1860 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1859);
                const v1861 = v1860[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
                const v1862 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
                const v1863 = stdlib.sub(v1862, v1848);
                const v1865 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
                const v1867 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
                const v1868 = [v1865, v1863, v1867];
                const v1869 = stdlib.Array_set(v1860, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1868);
                stdlib.simTokenBurn(sim_r, v1221, v1848);
                const v1870 = v1869[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
                const v1871 = v1870[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
                if (v1871) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1221);
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
          const {data: [], secs: v1757, time: v1756, didSend: v618, from: v1755 } = txn5;
          ;
          const v1758 = stdlib.addressEq(v1211, v1755);
          stdlib.assert(v1758, {
            at: './index.rsh:210:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1760 = v1307;
          let v1761 = v1298;
          let v1762 = v1756;
          let v1768 = v1306;
          let v1769 = v1307;
          
          while (await (async () => {
            const v1772 = stdlib.gt(v1761, stdlib.checkedBigNumberify('./index.rsh:213:27:decimal', stdlib.UInt_max, '0'));
            const v1773 = stdlib.gt(v1760, stdlib.checkedBigNumberify('./index.rsh:213:49:decimal', stdlib.UInt_max, '0'));
            const v1774 = v1772 ? v1773 : false;
            
            return v1774;})()) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1781], secs: v1783, time: v1782, didSend: v656, from: v1780 } = txn6;
            undefined /* setApiDetails */;
            ;
            const v1786 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1780), null);
            let v1787;
            switch (v1786[0]) {
              case 'None': {
                const v1788 = v1786[1];
                v1787 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1789 = v1786[1];
                v1787 = v1789;
                
                break;
                }
              }
            const v1790 = stdlib.ge(v1769, v1787);
            const v1791 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1780), null);
            let v1792;
            switch (v1791[0]) {
              case 'None': {
                const v1793 = v1791[1];
                v1792 = false;
                
                break;
                }
              case 'Some': {
                const v1794 = v1791[1];
                v1792 = true;
                
                break;
                }
              }
            const v1795 = v1790 ? v1792 : false;
            if (v1795) {
              let v1797;
              switch (v1786[0]) {
                case 'None': {
                  const v1798 = v1786[1];
                  v1797 = stdlib.checkedBigNumberify('./index.rsh:208:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1799 = v1786[1];
                  v1797 = v1799;
                  
                  break;
                  }
                }
              const v1800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1780), null);
              let v1801;
              switch (v1800[0]) {
                case 'None': {
                  const v1802 = v1800[1];
                  v1801 = v1299;
                  
                  break;
                  }
                case 'Some': {
                  const v1803 = v1800[1];
                  v1801 = v1803;
                  
                  break;
                  }
                }
              const v1807 = stdlib.sub(v1769, v1797);
              ;
              await stdlib.mapSet(map2, v1780, undefined /* Nothing */);
              const v1810 = 'refundPassed        ';
              null;
              const v1811 = true;
              await txn6.getOutput('Contributors_claimRefund', 'v1811', ctc14, v1811);
              const v1817 = stdlib.sub(v1761, stdlib.checkedBigNumberify('./index.rsh:221:30:decimal', stdlib.UInt_max, '1'));
              const cv1760 = v1807;
              const cv1761 = v1817;
              const cv1762 = v1782;
              const cv1768 = v1768;
              const cv1769 = v1807;
              
              v1760 = cv1760;
              v1761 = cv1761;
              v1762 = cv1762;
              v1768 = cv1768;
              v1769 = cv1769;
              
              continue;}
            else {
              const v1824 = 'refundFailed        ';
              null;
              const v1825 = false;
              await txn6.getOutput('Contributors_claimRefund', 'v1825', ctc14, v1825);
              const cv1760 = v1769;
              const cv1761 = v1761;
              const cv1762 = v1782;
              const cv1768 = v1768;
              const cv1769 = v1769;
              
              v1760 = cv1760;
              v1761 = cv1761;
              v1762 = cv1762;
              v1768 = cv1768;
              v1769 = cv1769;
              
              continue;}
            
            }
          const v1836 = v1768[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v1837 = v1836[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
          const v1841 = stdlib.sub(v1769, v1837);
          ;
          ;
          const v1848 = v1836[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
          const v1854 = stdlib.sub(v1837, v1848);
          const v1858 = v1836[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v1859 = [v1854, v1848, v1858];
          const v1860 = stdlib.Array_set(v1768, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1859);
          const v1861 = v1860[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v1862 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
          const v1863 = stdlib.sub(v1862, v1848);
          const v1865 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
          const v1867 = v1861[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
          const v1868 = [v1865, v1863, v1867];
          const v1869 = stdlib.Array_set(v1860, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v1868);
          undefined /* TokenBurn */;
          const v1870 = v1869[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
          const v1871 = v1870[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
          if (v1871) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          }}}
    else {
      const v1903 = v1271.owner;
      const v1907 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1284);
      ;
      ;
      const v1914 = v1283[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    }
  else {
    let v1956 = true;
    let v1957 = v1254;
    let v1963 = v1266;
    let v1964 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v1956;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 19,
        out_tys: [ctc24],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2022], secs: v2024, time: v2023, didSend: v859, from: v2021 } = txn3;
      switch (v2022[0]) {
        case 'Contributors_contributed0_729': {
          const v2025 = v2022[1];
          undefined /* setApiDetails */;
          ;
          const v2033 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '0')];
          const v2034 = v2025[stdlib.checkedBigNumberify('./index.rsh:248:9:spread', stdlib.UInt_max, '1')];
          const v2035 = null;
          await txn3.getOutput('Contributors_contributed', 'v2035', ctc0, v2035);
          const v2043 = 'contributed         ';
          null;
          const cv1956 = true;
          const cv1957 = v2023;
          const cv1963 = v1963;
          const cv1964 = v1964;
          
          v1956 = cv1956;
          v1957 = cv1957;
          v1963 = cv1963;
          v1964 = cv1964;
          
          continue;
          break;
          }
        case 'Contributors_creating0_729': {
          const v2077 = v2022[1];
          undefined /* setApiDetails */;
          ;
          const v2097 = v2077[stdlib.checkedBigNumberify('./index.rsh:234:9:spread', stdlib.UInt_max, '0')];
          const v2098 = null;
          await txn3.getOutput('Contributors_creating', 'v2098', ctc0, v2098);
          const v2111 = v2097.id;
          const v2112 = v2097.title;
          const v2113 = v2097.link;
          const v2114 = v2097.description;
          const v2115 = v2097.owner;
          const v2116 = v2097.contractInfo;
          null;
          const cv1956 = true;
          const cv1957 = v2023;
          const cv1963 = v1963;
          const cv1964 = v1964;
          
          v1956 = cv1956;
          v1957 = cv1957;
          v1963 = cv1963;
          v1964 = cv1964;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_729': {
          const v2129 = v2022[1];
          undefined /* setApiDetails */;
          ;
          const v2170 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
          const v2171 = v2129[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '1')];
          const v2172 = null;
          await txn3.getOutput('Contributors_timedOut', 'v2172', ctc0, v2172);
          const v2180 = 'timedOut            ';
          null;
          const cv1956 = true;
          const cv1957 = v2023;
          const cv1963 = v1963;
          const cv1964 = v1964;
          
          v1956 = cv1956;
          v1957 = cv1957;
          v1963 = cv1963;
          v1964 = cv1964;
          
          continue;
          break;
          }
        }
      
      }
    const v2181 = v1963[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
    const v2182 = v2181[stdlib.checkedBigNumberify('./index.rsh:264:19:application', stdlib.UInt_max, '0')];
    const v2186 = stdlib.sub(v1964, v2182);
    ;
    ;
    const v2193 = v2181[stdlib.checkedBigNumberify('./index.rsh:266:24:application', stdlib.UInt_max, '1')];
    const v2199 = stdlib.sub(v2182, v2193);
    const v2203 = v2181[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
    const v2204 = [v2199, v2193, v2203];
    const v2205 = stdlib.Array_set(v1963, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v2204);
    const v2206 = v2205[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
    const v2207 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '1')];
    const v2208 = stdlib.sub(v2207, v2193);
    const v2210 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0')];
    const v2212 = v2206[stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '2')];
    const v2213 = [v2210, v2208, v2212];
    const v2214 = stdlib.Array_set(v2205, stdlib.checkedBigNumberify('./index.rsh:266:12:application', stdlib.UInt_max, '0'), v2213);
    undefined /* TokenBurn */;
    const v2215 = v2214[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '0')];
    const v2216 = v2215[stdlib.checkedBigNumberify('./index.rsh:267:20:application', stdlib.UInt_max, '2')];
    if (v2216) {
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
    impure: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte`, `_Contributors_claimToken8()byte`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte`, `_Contributors_claimToken8()byte`]
    },
  appApproval: `BiA4AAEgCCgDETAGDAJkYCo4eQoFFrYDEMQBCyvLsuWKCaz9zPsLifLT/Quc89ONC4Kc4uUGvvGmswfaA5a52M8FExs55gPeA+4D9gOXBJ8ExwTPBOAEFWkNQIEBWJkB+gL9An/8A6CNBiYJAQABAQABAgEDAQQYtQ47cmNsYWltRmFpbGVkAAAAAAAAAAAACP//////////GLUOO3JwYXNzZWQAAAAAAAAAAAAAAAAAACI1ADEYQRSwKmRJIls1ASVbNQIxGSMSQQAKMQAoIRevZkIUfTYaABdJQQC2IjUEIzUGSSEYDEAAUUkhGQxAADFJIRoMQAAQIRoSRDYaATX/KTT/UEIAuCEZEkQ0AUkhCQxAAAchCRJEQgAbJRJEQgBtSSEbDEAACiEbEkQ2GgFCAmchGBJEKkIF9EkhHAxAADdJIR0MQAAYIR0SRDYaATYaAlA1/ys0/1AhHq9QQgBfIRwSRDYaATYaAlA1/yg0/1AhHq9QQgBHSSEfDEAACCEfEkQqQgPFgaDG2yMSRCpCCH42GgIXNQQ2GgM2GgEXSYEJDEAIVUmBDwxABR1JIQYMQAHdSSEgDEABQiEgEkQhITQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKBE1/SEiWzX8STUFNfuABJPeprA0+1CwNPsiVUkjDEAAr0khCgxAAE4hChJENPtXARA1+oAIAAAAAAAACHywKjUHgBhQhKuwdGltZWRPdXQAAAAAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEhJINPsjgeoDWDX6NPo1+YAIAAAAAAAACDKwKjUHgAQBabAHNPlXAAhQNPlXCBRQNPlXHJZQNPlXsrRQNPmB5gIkWFA0+YGGAyELWFCwNP80/iMyBjT9NPxCEbhINPtXARA1+oAIAAAAAAAAB/OwKjUHgBhQhKuwY29udHJpYnV0ZWQAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEW0hBhJEIRI0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSVcAIDX/ISNbNf6ABACB0o6wMgY0/g9ENP8xABJENP80AyRbNAMhBCETWDQDISRbNP40AyElWzQDISYkWDQDgZYEI1gXNAMhJ1s0AyEoWzQDgacEJFgyBjQDISlbNAMhKiEGWDQDIStbQgykSSEUDEABs0ghEjQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSkpKSklXACA1/yRbNf4hBCETWDX9ISRbNfwhI1s1+yElWzX6ISYkWDX5ISdbNfghKFs19yEpWzX2ISohBlg19Uk1BTX0gASH0Gf9NPRQsDIGNPsMRDT0F0k18yINRDQDIStbNPMINfI084gRaoAIAAAAAAAABUA08hZQsDTyFjUHMQCIEUJXKgFJNfAiVUAABiI18UIABiM18UIAADTxQQB2MQCIESFXIQlJNe8iVUAABiI18EIADDTvI1tJNe418EIAADEAKDEAiBD8KTTwNPMIFlA170lXACE071BMVyoBUGY0+DTzCDXvNP80/jT9NPw0+zT6NPkjIjTvNP0hFVsPTSMSNO809yMIMQAyBjT2NPU08kILXzEAKDEAiBCoKTEAUDXwVyEKNPBMUGYxACgxAIgQkiMhDUxWZjEAKDEAiBCEKTTzFlA18ElXACE08FBMVyoBUGY0+DTzCDXwNP80/jT9NPw0+zT6NPkjIjTwNP0hFVsPTSMSNPA09yMIMQAyBjT2NPU08kIK6kghLDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/JFs1/iEEWzX9VzAgNfyBUFs1+1dYETX6IS1bNflJNQU1+IAEtmjS8zT4ULAxAIgP6lchCUk19yJVQAAGIjX2QgAMNPcjW0k19TX2QgAAMQCID8hXKgFJNfQiVUAABiI19UIABiM19UIAADT5NPYPNPUQQQCnNPciVUAABiI19EIADDT3I1tJNfM19EIAADEAiA+IVwAhSTXyIlVAAAc0/DXzQgANNPJXASBJNfE180IAADT5NPQJNfKxIrIBNPSyCCOyEDTzsgezMQAoMQCID0oiIQ1MVmaAGLUOO3JyZWZ1bmRQYXNzZWQAAAAAAAAAADT9FlCwgAkAAAAAAAAHEwGwKTUHNP80/jT9NPw08jT7IwkyBjT6NPJCDR2AGLUOO3JyZWZ1bmRGYWlsZWQAAAAAAAAAADT9FlCwgAkAAAAAAAAHIQCwKDUHNP80/jT9NPw0+TT7MgY0+jT5QgzaSSEJDEAB8EkhLgxAAFUhLhJEIQY0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEtWzX+gAQin5cDsDT/MQASRDT/NAMkWzQDIQRbNANXOCA0/jQDIQdbMgY0A1dYETT+Qgx3SCEUNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEEWzX9IQdbNfwhDls1+1dAIDX6IQxbNflXaBE1+CEPWzX3STUFNfaABOYybRQ09lCwMQCIDfpXIQlJNfUiVUAABiI19EIADDT1I1tJNfM19EIAADEAiA3YVyoBSTXyIlVAAAYiNfNCAAYjNfNCAAA09zT0DzTzEEEAvTT4VwARIls18jT1IlVAAAYiNfFCAAw09SNbSTXwNfFCAAA08jT7CzT8CjTxCzXwMQCIDYJXACFJNe4iVUAABzT6Ne9CAA007lcBIEk17TXvQgAAsSKyATTwsggjshA077IHszEAKDEAiA1LIiENTFZmgBi1DjtyY2xhaW1QYXNlZWQAAAAAAAAAAAA0/RZQsIAJAAAAAAAABn0BsCk1BzT/NP40/TT8NPs0+jTyNPkjCTIGNPg09zTwCUIKPicGNP0WULCACQAAAAAAAAaMALAoNQc0/zT+NP00/DT7NPo0+FcAESJbNPkyBjT4NPdCCgpJIRAMQABiIRASRCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE00RzI7A0/zEAEkQ0/zQDJFs0AyEEWzQDIQdbNAMhDls0A1dIIDQDIQ9bNAMhL1syBjQDV2gRNAMhMFtCCaFIIRY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hB1s1/CExWzX7IQxbNfpXaCA1+VeIETX4ITJbNfeABKIFZo6wNP8xABJEsSKyATT3sggjshA0A1c4ILIHszT4VwARIltJNfYhCwo19TT3SQk09Qk19LEisgE09bIII7IQNP+yB7M0/zT+FlA0/RZQNPwWUDT7FlA0+hZQNPlQNPhQNPYWUDT0FlAoSwFXAH9nKUsBV38KZ0ghCTUBMgY1AkILOUkhBQxAA8JJIQgMQAH8SSUMQAGUSCEQNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEEWzX9IQdbNfwhDls1+1dAIDX6IQxbNflXaBE1+CEPWzX3STUFNfaABEfkryc09lCwMQCICxhXIQlJNfUiVUAABiI19EIADDT1I1tJNfM19EIAADEAiAr2VyoBSTXyIlVAAAYiNfNCAAYjNfNCAAA09zT0DzTzEEEAvTT4VwARIls18jT1IlVAAAYiNfFCAAw09SNbSTXwNfFCAAA08jT7CzT8CjTxCzXwMQCICqBXACFJNe4iVUAABzT6Ne9CAA007lcBIEk17TXvQgAAsSKyATTwsggjshA077IHszEAKDEAiAppIiENTFZmgBi1DjtyY2xhaW1QYXNzZWQAAAAAAAAAAAA0/RZQsIAJAAAAAAAABcYBsCk1BzT/NP40/TT8NPs0+jT5Iwk08jIGNPg09zTwCUIGgycGNP0WULCACQAAAAAAAAXVALAoNQc0/zT+NP00/DT7NPo0+TT4VwARIlsyBjT4NPdCBk8hCBJEIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gARhtKwMsDT/MQASRDT/NAMkWzQDIQRbNAMhB1s0AyEOWzQDV0ggNAMhD1s0AyEvWzIGNANXaBE0AyEwW0IF7UkhEQxAANFIIRE0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hB1s1/CExWzX7IQxbNfpXaCA1+VeIETX4ITJbNfeABMyZklywNP8xABJEsSKyATT3sggjshA0A1c4ILIHszT4VwARIltJNfYhCwo19TT3SQk09Qk19LEisgE09bIII7IQNP+yB7M0/zT+FlA0/RZQNPwWUDT7FlA0+hZQNPlQNPhQNPYWUDT0FlAoSwFXAH9nKUsBV38KZ0ghCDUBMgY1AkIIVyEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSlcAIDX/JFs1/lcoETX9ISIhE1g1/IAEp2XEtLA0/zEAEkQ0/VcAEUk1+yJbNfo0/CJbNfk0+jT5DUEASzT6NPkJNfg0/CEzJFg197EisgE0+LIII7IQNPeyB7M0/zT+NPw0A4H3A1s0A4H/A1s0+TT3IyIiNP8yBjQDge8DWzT9IjT4CUICp7EisgE0+rIII7IQNPwhMyRYsgezsSKyASI0+gmyCCOyEDT/sgezsSKyASEFshA0/rIhs0IHVEkjDEABUkkhCgxAALpIIQo0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+VzARNf1JNQU1/IAEQ/2AuzT8ULA0/zEAEkQ0/IHMAVs1+4AYtQ47cmNyZWF0ZWQAAAAAAAAAAAAAAAAANPsWULA0AyEEW4EUCDX6NP80/hZQNP1QNPxQMgYWUDT7FlA0+hZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASE0ITVYZycFSwEhNiEWWGdIIQU1ATIGNQJCBqlIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/4EhWzX+VykRNf2ABJqLkXSwNP1XABFJNfwlWzX7NPwiWzT7CBY0+xZQNPxXEAFQNfo0+zT+iAbNNP8xABJENANXIAEXQQAgNP80/hZQMgYWUDT6UChLAVcAQWdIIQo1ATIGNQJCBiU0/zT+IzIGNPoiQgVOSCE3iAZzIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwABFzX/VwEgNf5XIQg1/YEpWzX8gAQNeOLaNP8WUQcIUDT+UDT9UDT8FlCwIQavNfshN4gGJ7EisgEhBbIQgf///////////wGyIiEIsiM0/bIlNP6yJiEMr7InMgOyKDIKsimztDw1+oAIAAAAAAAABMQ0+hZQsDT6Nfk0+1cAETX4Jwc0+FcICFA0+FcQAVBJNfdXABFJNfZXAAgnB1A09lcQAVBJNfVXABFJNfRXAAg09FcICFAoUDXzgBi1DjtydG9rZW5DcmVhdGVkAAAAAAAAAAA0/BZQsDEANP8WUQcIUDT5FlA081AoSwFXADpnSCM1ATIGNQJCBP81/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE0/TT1DjT4EEEAajTxNPIWUDTzUDT0FlA09RZQNPYWUDT3UDT4FlEHCFA0+RZQNPoWUDT7UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASE0ITVYZycFSwEhNoFsWGdIIRI1ATIGNQJCBGwjIjT5NPMhFVsPTSISQQBiJwg09BZQsDT/IQsKNfA0/zTwCTXvsSKyATTwsggjshA08bIHszTxNPIWUDT0FlA09hZQNPdQNPkWUDT6FlA0+1A0/lA07xZQKEsBVwB/ZylLAVd/ImdIIRE1ATIGNQJCA/o0+TTzgZoDWw9BAGInCDT0FlCwNP8hCwo18DT/NPAJNe+xIrIBNPCyCCOyEDTxsgezNPE08hZQNPQWUDT2FlA091A0+RZQNPoWUDT7UDT+UDTvFlAoSwFXAH9nKUsBV38iZ0ghFjUBMgY1AkIDjIAYtQ47cmZhaWxlZAAAAAAAAAAAAAAAAAAANPQWULA08TTyFlA09BZQNPoWUDT7UDT+UDT/FlAoSwFXAHFnSCEGNQEyBjUCQgNCNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8Ig00+yINEEEAOjT1NPYWUDT3FlA0+BZQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIIRA1ATIGNQJCAuY0/lcAEUk19CJbNfOxIrIBNPOyCCOyEDT1sgezsSKyATT/NPMJsggjshA09bIHszT0JVs18jTzNPIJFjTyFlA09FcQAVBJNfFXABFJNfBXAAg08CVbNPIJFlA08FcQAVBXABFXEAEXQQADQgJdsSKyASEFshA09rIhs0ICTTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/CINNPsiDRBBADo09TT2FlA09xZQNPgWUDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfwJnSCEUNQEyBjUCQgINNP5XABFJNfQiWzXzsSKyATTzsggjshA09bIHs7EisgE0/zTzCbIII7IQNPWyB7M09CVbNfI08zTyCRY08hZQNPRXEAFQSTXxVwARSTXwVwAINPAlWzTyCRZQNPBXEAFQVwARVxABF0EAA0IBhLEisgEhBbIQNPayIbNCAXQ1/zX+Nf01/DX7Nfo1+TX4Nfc0/CINNPsiDRBBACs09zT4FlA0+RZQNPpQNPwWUDT+UDT/FlAoSwFXAHFnSCEsNQEyBjUCQgFHNP5XABFJNfYiWzX1sSKyATT1sggjshA097IHs7EisgE0/zT1CbIII7IQNPeyB7M09iVbNfQ09TT0CRY09BZQNPZXEAFQSTXzVwARSTXyVwAINPIlWzT0CRZQNPJXEAFQVwARVxABF0EAA0IAvrEisgEhBbIQNPiyIbNCAK41/zX+Nf01/DX7Nfo0/EEAIDT6NPsWUDT+UDT/FlAoSwFXAEFnSCEhNQEyBjUCQgCZNP5XABFJNfkiWzX4sSKyATT4sggjshA0+rIHs7EisgE0/zT4CbIII7IQNPqyB7M0+SVbNfc0+DT3CRY09xZQNPlXEAFQSTX2VwARSTX1VwAINPUlWzT3CRZQNPVXEAFQVwARVxABF0EAA0IAELEisgEhBbIQNPuyIbNCAAAxGSEREkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQgxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIReviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQgQQSRDgRTwISRDgSEkSJ`,
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
                "name": "v1212",
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
                "name": "v1213",
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
                "name": "v1214",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1215",
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
                "name": "v1212",
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
                "name": "v1213",
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
                "name": "v1214",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1215",
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
                "name": "v1625",
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
                "name": "v1781",
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
                "name": "v1331",
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
                    "name": "_Contributors_contributed0_729",
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
                    "name": "_Contributors_creating0_729",
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
                    "name": "_Contributors_timedOut0_729",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v2022",
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
                "name": "v1271",
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
                "name": "v1442",
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
    "name": "_reach_oe_v1220",
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
    "name": "_reach_oe_v1344",
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
    "name": "_reach_oe_v1478",
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
    "name": "_reach_oe_v1493",
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
    "name": "_reach_oe_v1661",
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
    "name": "_reach_oe_v1676",
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
    "name": "_reach_oe_v1811",
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
    "name": "_reach_oe_v1825",
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
    "name": "_reach_oe_v2035",
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
    "name": "_reach_oe_v2098",
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
    "name": "_reach_oe_v2172",
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
                "name": "v1625",
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
                "name": "v1781",
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
                "name": "v1331",
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
                    "name": "_Contributors_contributed0_729",
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
                    "name": "_Contributors_creating0_729",
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
                    "name": "_Contributors_timedOut0_729",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v2022",
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
                "name": "v1271",
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
                "name": "v1442",
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
  Bytecode: `0x608060405260405162008820380380620088208339810160408190526200002691620007dd565b60008055436003556200003862000491565b604080513381528351602080830191909152808501518051151583850152908101515160608084019190915281840151516001600160c01b0319166080840152015160a082015290517fe6585c59b5c07db1b5b4e230325a24d21f792d3f6b66e3998f7ba3eacdc46dbe9181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000db34156007620003e4565b60408181018051600090819052815160209081018290529151830181905260608401515283810151810151518251918201520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526000196012604051620001b490620005ab565b620001c596959493929190620008f4565b604051809103906000f080158015620001e2573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fa3dd4bb75e8baa0fcc23b88f64cf9ca5417aebf04f540c32fb20b29d42e2359b9060200160405180910390a160c0810180516000199052602080830180515182015183519092019190915280515160409081015183519015159101525190516200026f91906000906200040e565b60e0820181815290515161010083018051919091528051600019602090910152815151604090810151825190151591015290519051620002b391906000906200040e565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620002f492906200040e565b610160820152610180810180516b1d1bdad95b90dc99585d195960a21b905251602083810151606001516040805193516001600160601b0319168452918301527f8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4d910160405180910390a162000369620005b9565b3381526020808401515115158183015260a08301516001600160a01b031660408084019190915261016084015160608401526001600081905543905551620003b4918391016200095f565b60405160208183030381529060405260029080519060200190620003da929190620005e4565b5050505062000a41565b816200040a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200041862000673565b60005b60018110156200046e578481600181106200043a576200043a6200088e565b60200201518282600181106200045457620004546200088e565b6020020152806200046581620009da565b9150506200041b565b50818184600181106200048557620004856200088e565b60200201529392505050565b60408051610200810190915260006101a082018181526101c083018290526101e0830191909152815260208101620004c862000673565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200053062000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200055f62000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200058e62000673565b81526040805160208181019092526000815291015290565b905290565b611087806200779983390190565b604080516080810182526000808252602082018190529181019190915260608101620005a662000673565b828054620005f29062000a04565b90600052602060002090601f01602090048101928262000616576000855562000661565b82601f106200063157805160ff191683800117855562000661565b8280016001018555821562000661579182015b828111156200066157825182559160200191906001019062000644565b506200066f929150620006c0565b5090565b60405180602001604052806001905b620006a9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006825790505090565b5b808211156200066f5760008155600101620006c1565b604080519081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b6000602082840312156200078357600080fd5b604051602081016001600160401b0381118282101715620007b457634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160c01b031981168114620007d557600080fd5b905292915050565b600081830360a0811215620007f157600080fd5b620007fb620006d7565b835181526080601f19830112156200081257600080fd5b6200081c6200070e565b602085015180151581146200083057600080fd5b81526020603f19840112156200084557600080fd5b6200084f6200073f565b9250604085015183528260208201526200086d866060870162000770565b60408201526080850151606082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620008cc57602081850181015186830182015201620008ae565b81811115620008df576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200090960c0830189620008a4565b82810360208401526200091d8189620008a4565b90508281036040840152620009338188620008a4565b90508281036060840152620009498187620008a4565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401511515818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620009ce57825180518352858101518684015284015115158483015291840191908501906001016200099c565b50505050505092915050565b6000600019821415620009fd57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000a1957607f821691505b6020821081141562000a3b57634e487b7160e01b600052602260045260246000fd5b50919050565b616d488062000a516000396000f3fe6080604052600436106101a35760003560e01c80637f34cc90116100e0578063a93a2bdd11610084578063cadc2e7a11610061578063cadc2e7a146103af578063de736998146103dc578063e00acef1146103ef578063f530abd51461040257005b8063a93a2bdd14610366578063ab53f2c614610379578063c79800371461039c57005b806383230757116100bd57806383230757146103185780638e3147691461032d578063972b4448146103405780639f2518101461035357005b80637f34cc90146102db578063805367bf146102e3578063817d57f3146102eb57005b80634f7b8708116101475780636172e590116101245780636172e5901461029a5780636272318a146102ad5780636d700906146102c057806373b4522c146102c857005b80634f7b8708146102615780635471c5a8146102745780635bc7f7241461028757005b80632c10a159116101805780632c10a1591461020657806339b777f0146102195780633bc5b7bf146102215780633ccb40821461024e57005b8063152b31a2146101ac5780631e93b0f1146101d457806325630a02146101f357005b366101aa57005b005b6101bf6101ba36600461571f565b610415565b60405190151581526020015b60405180910390f35b3480156101e057600080fd5b506003545b6040519081526020016101cb565b6101aa61020136600461573c565b610450565b6101aa610214366004615767565b610474565b6101bf610494565b34801561022d57600080fd5b5061024161023c366004615783565b610573565b6040516101cb91906157c6565b6101aa61025c366004615767565b61059f565b6101aa61026f366004615767565b6105bf565b6101aa610282366004615767565b6105df565b6101bf6102953660046157fe565b6105ff565b6101bf6102a83660046157fe565b610645565b6101aa6102bb366004615767565b61068e565b6101bf6106ae565b6101aa6102d6366004615767565b6106da565b6101bf6106fa565b6101bf610729565b3480156102f757600080fd5b5061030b610306366004615783565b610758565b6040516101cb9190615820565b34801561032457600080fd5b506001546101e5565b6101aa61033b366004615767565b61077e565b6101e561034e366004615852565b61079e565b6101aa610361366004615767565b6107ce565b6101aa610374366004615767565b6107ee565b34801561038557600080fd5b5061038e61080e565b6040516101cb929190615897565b6101aa6103aa366004615767565b6108ab565b3480156103bb57600080fd5b506103cf6103ca366004615783565b6108cb565b6040516101cb91906158d1565b6101aa6103ea366004615767565b6108f1565b6101aa6103fd366004615767565b610911565b6101aa610410366004615901565b610931565b600061041f6148f3565b602081018051516001905251516040015183905261043b614912565b610445828261094d565b60c001519392505050565b610458614912565b61047061046a36849003840184615914565b82610d52565b5050565b61047c614912565b61047061048e36849003840184615a13565b82610f80565b60008054600814806104a85750600054600c145b6104b157600080fd5b6000546008141561052557306001600160a01b031663805367bf6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190615a56565b905090565b600054600c141561057057306001600160a01b0316637f34cc906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b90565b604080516060810182526000808252602082018190529181019190915261059982611214565b92915050565b6105a7614912565b6104706105b936849003840184615aca565b826112f0565b6105c7614912565b6104706105d936849003840184615aca565b826118ca565b6105e7614912565b6104706105f936849003840184615a13565b82611e2a565b60006106096148f3565b60208181018051516000905280515182015186905251518101510183905261062f614912565b610639828261094d565b60a00151949350505050565b600061064f6148f3565b602081810180515160029052805151606090810151879052905151015101839052610678614912565b610682828261094d565b60e00151949350505050565b610696614912565b6104706106a836849003840184615ae6565b82611fdd565b60006106b8614956565b6020810151600090526106c9614912565b6106d382826118ca565b5192915050565b6106e2614912565b6104706106f436849003840184615a13565b82612552565b6000610704614956565b602081015160009052610715614912565b61071f82826128c0565b6060015192915050565b6000610733614956565b602081015160009052610744614912565b61074e82826112f0565b6040015192915050565b604080516060810182526000808252602082018190529181019190915261059982612e9d565b610786614912565b61047061079836849003840184615a13565b82612f66565b60006107a8614980565b6020810151518390526107b9614912565b6107c38282611fdd565b608001519392505050565b6107d6614912565b6104706107e836849003840184615a13565b826131fb565b6107f6614912565b61047061080836849003840184615aca565b826128c0565b60006060600054600280805461082390615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90615b3d565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b50505050509050915091509091565b6108b3614912565b6104706108c536849003840184615a13565b82613417565b6040805160608101825260008082526020820181905291810191909152610599826135df565b6108f9614912565b61047061090b36849003840184615a13565b826136a2565b610919614912565b61047061092b36849003840184615a13565b82613937565b610939614912565b61047061094b36849003840184615ba2565b825b61095d601b60005414603f613aff565b815161097890158061097157508251600154145b6040613aff565b60008080556002805461098a90615b3d565b80601f01602080910402602001604051908101604052809291908181526020018280546109b690615b3d565b8015610a035780601f106109d857610100808354040283529160200191610a03565b820191906000526020600020905b8154815290600101906020018083116109e657829003601f168201915b5050505050806020019051810190610a1b9190615cf3565b9050610a256149ad565b7f6c6b37a1968aa309908bd167a281ccdc80e824957a014a1d4f7d7a9149ed8fcd3385604051610a56929190615e04565b60405180910390a16000602085015151516002811115610a7857610a786157a0565b1415610ba6576020808501515101518152610a953415603c613aff565b604051600081527f1e1d7d57b94061182d0fa82da1fc8fa6f6ab09ba12d7f44b36b82ab5d80565bc9060200160405180910390a1600060a0840152602080820180516a18dbdb9d1c9a589d5d195960aa1b905251825180519201516040517ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf393610b3d9392909192516001600160601b03191683526020830191909152604082015260600190565b60405180910390a1610b4d614a20565b825181516001600160a01b039182169052602080850151835192169181019190915280820180516001905280514392019190915260408085015182519091015260608085015191510152610ba081613b25565b50610d4c565b6001602085015151516002811115610bc057610bc06157a0565b1415610c6d5760208401515160409081015190820152610be23415603d613aff565b604051600081527f48bb4ed91ba9c104f167990404b4d2abdf37507efb477945e8a9ab1feabc19349060200160405180910390a1600060c08401526040808201515180516020820151828401516060840151608085015160a09095015195517fc637fbf488869e7c6eab5d4a5d0974d38f52692be94971287b97d21de5a5ce1e96610b3d9691615ee9565b6002602085015151516002811115610c8757610c876157a0565b1415610d4c5760208401515160609081015190820152610ca93415603e613aff565b604051600081527f5807f05d579872066a960d2302b3cb18712c2e0d69d974a3b1e97cb92ba1daa99060200160405180910390a1600060e0840152608081018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101610b3d565b50505050565b610d62600260005414600f613aff565b8151610d7d901580610d7657508251600154145b6010613aff565b600080805560028054610d8f90615b3d565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbb90615b3d565b8015610e085780601f10610ddd57610100808354040283529160200191610e08565b820191906000526020600020905b815481529060010190602001808311610deb57829003601f168201915b5050505050806020019051810190610e209190615f3a565b9050610e2a614a49565b7f79fd80465d89724fec35d748f55c7faace9c5029300cfa7f2e8ac3fbb93bc7973385604051610e5b929190616049565b60405180910390a1610e6f3415600d613aff565b8151610e87906001600160a01b03163314600e613aff565b80516618dc99585d195960ca1b9052805160208501515160800151604051600080516020616cf383398151915292610ec0929091616077565b60405180910390a160148260400151610ed991906160a6565b6020820152610ee6614a6c565b82516001600160a01b03908116825260208085015190911681830152606080850151604080850191909152878301805151928501929092524360808086018290529251519092015160a08501528483015160c0850152600360005560019190915551610f54918391016160fc565b60405160208183030381529060405260029080519060200190610f78929190614ab3565b505050505050565b610f90600160005414600b613aff565b8151610fab901580610fa457508251600154145b600c613aff565b600080805560028054610fbd90615b3d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe990615b3d565b80156110365780601f1061100b57610100808354040283529160200191611036565b820191906000526020600020905b81548152906001019060200180831161101957829003601f168201915b505050505080602001905181019061104e919061616a565b9050611058614b37565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133856040516110899291906161c4565b60405180910390a161109d34156008613aff565b606082015151602081015190516110b491906160a6565b8151526060820180515160209081015183519091015280515160409081015183519015159101525181516110eb9190600090613d6c565b60208201526040820151606083015161111c91611115913391906000602002015160200151613de0565b6009613aff565b8151611134906001600160a01b03163314600a613aff565b8160200151156111b857611146614b67565b82516001600160a01b039081168252604080850151909116602080840191909152438284018190528482015160608501526002600055600155905161118d91839101616202565b604051602081830303815290604052600290805190602001906111b1929190614ab3565b5050610d4c565b6111c0614a20565b825181516001600160a01b03918216905260408085015183519216602092830152818301805160019052805143908401529184015182519091015251600060609091015261120d81613b25565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611260576112606157a0565b14156112e0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112a1576112a16157a0565b60018111156112b2576112b26157a0565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b611300600a60005414601e613aff565b815161131b90158061131457508251600154145b601f613aff565b60008080556002805461132d90615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461135990615b3d565b80156113a65780601f1061137b576101008083540402835291602001916113a6565b820191906000526020600020905b81548152906001019060200180831161138957829003601f168201915b50505050508060200190518101906113be91906162dc565b90506113c8614ba1565b7f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba544833856040516113f99291906162f9565b60405180910390a161140d3415601d613aff565b611416336135df565b81526000815151600181111561142e5761142e6157a0565b14156114405760006020820152611470565b60018151516001811115611456576114566157a0565b141561147057805160409081015190820181905260208201525b600061147b33612e9d565b51600181111561148d5761148d6157a0565b141561149f57600060608201526114ca565b60016114aa33612e9d565b5160018111156114bc576114bc6157a0565b14156114ca57600160608201525b806020015182610100015110156114e25760006114e8565b80606001515b156117aa5760008151516001811115611503576115036157a0565b14156115155760006080820152611544565b6001815151600181111561152b5761152b6157a0565b14156115445780516040015160a0820181905260808201525b8060800151826060015183608001518460e0015160006001811061156a5761156a6161ec565b60200201515161157a9190616323565b6115849190616342565b61158e9190616323565b60c0820152600061159e33611214565b5160018111156115b0576115b06157a0565b14156115ce5760a08201516001600160a01b031660e0820152611615565b60016115d933611214565b5160018111156115eb576115eb6157a0565b1415611615576115fa33611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015611656573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516a18db185a5b54185cdcd95960aa1b905251838201519151600080516020616cf3833981519152926116ab9291616077565b60405180910390a1604051600181527fd975936740dbd1f87e841d9d00c1fd7524f5cd28ce39cdc65457a831072b27b19060200160405180910390a1600160208401526116f6614c17565b825181516001600160a01b039182169052602080850151835190831691015260408085015183519091015260608085015183519091015260808085015183519091015260a0808501518351921691015260c083015161175790600190616364565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c08201516101008401516117989190616364565b602082015160800152610ba081613df8565b610140810180516a18db185a5b51985a5b195960aa1b9052516040808401519051600080516020616cf3833981519152926117e6929091616077565b60405180910390a1604051600081527f9c7224d185fb96648af7c88e592f71016f2ddf21f23e1d9622fa1cb7b48e19419060200160405180910390a160006020840152611831614c17565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e0880180515151825190950194909452805143930192909252915181519092019190915261010085015190519091015261120d81613df8565b6118da6015600054146030613aff565b81516118f59015806118ee57508251600154145b6031613aff565b60008080556002805461190790615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461193390615b3d565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b5050505050806020019051810190611998919061637b565b90506119a2614ba1565b7fc385b531bfdb596e9c4d4fba16778429b84fe13e45047887fd4a68f24be2836d33856040516119d39291906162f9565b60405180910390a16119e73415602f613aff565b6119f0336135df565b815260008151516001811115611a0857611a086157a0565b1415611a1a5760006020820152611a4a565b60018151516001811115611a3057611a306157a0565b1415611a4a57805160409081015190820181905260208201525b6000611a5533612e9d565b516001811115611a6757611a676157a0565b1415611a795760006060820152611aa4565b6001611a8433612e9d565b516001811115611a9657611a966157a0565b1415611aa457600160608201525b80602001518260c001511015611abb576000611ac1565b80606001515b15611d255760008151516001811115611adc57611adc6157a0565b1415611aee5760006080820152611b1d565b60018151516001811115611b0457611b046157a0565b1415611b1d5780516040015160a0820181905260808201525b6000611b2833611214565b516001811115611b3a57611b3a6157a0565b1415611b585760608201516001600160a01b031660c0820152611b9e565b6001611b6333611214565b516001811115611b7557611b756157a0565b1415611b9e57611b8433611214565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c00151611bb29190616364565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611bf8573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516b1c99599d5b9914185cdcd95960a21b905251838201519151600080516020616cf383398151915292611c4e9291616077565b60405180910390a1604051600181527f04c8564c92960dee48283750f521dcae161e93dc4258b410e7d75b21113053179060200160405180910390a160018352611c96614c5f565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451931692019190915261010083015190820151526080830151611cee90600190616364565b602080830180519091019190915280514360409091015260a0840151815160600152610100830151905160800152610ba08161401a565b610140810180516b1c99599d5b9911985a5b195960a21b9052516040808401519051600080516020616cf383398151915292611d62929091616077565b60405180910390a1604051600081527f5b191421125e93e7a87e68bcbf3ba8f140651eff7f586b31b719fb5d7978b5c89060200160405180910390a160008352611daa614c5f565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a087015182519094019390935291519151015261120d8161401a565b611e3a601160005414602d613aff565b8151611e55901580611e4e57508251600154145b602e613aff565b600080805560028054611e6790615b3d565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9390615b3d565b8015611ee05780601f10611eb557610100808354040283529160200191611ee0565b820191906000526020600020905b815481529060010190602001808311611ec357829003601f168201915b5050505050806020019051810190611ef89190616402565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983384604051611f2b9291906161c4565b60405180910390a1611f3f3415602b613aff565b8051611f57906001600160a01b03163314602c613aff565b611f5f614c5f565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a086015183519094019390935251905190910152610d4c8161401a565b611fed6016600054146034613aff565b815161200890158061200157508251600154145b6035613aff565b60008080556002805461201a90615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461204690615b3d565b80156120935780601f1061206857610100808354040283529160200191612093565b820191906000526020600020905b81548152906001019060200180831161207657829003601f168201915b50505050508060200190518101906120ab91906165f8565b90506120e86040518060c0016040528060008152602001600015158152602001600081526020016000815260200160008152602001600081525090565b6120f9826080015143106036613aff565b60408051338152855160208083019190915286015151518183015290517faebca52b942863fd6d4f05a82294448179986ce7906a1e3170e3cc82bb1d56199181900360600190a1602084015151516121549015156032613aff565b602084015151516101a083015161216b91906160a6565b8152602084015151516121819034146033613aff565b80516040519081527fdf98784b6a2866f073a75e850d32f42bddc1555ec58083914ff2b0e101eadc959060200160405180910390a18051608084015260006121c833612e9d565b5160018111156121da576121da6157a0565b14156121ec5760006020820152612217565b60016121f733612e9d565b516001811115612209576122096157a0565b141561221757600160208201525b8060200151156123e757600061222c336135df565b51600181111561223e5761223e6157a0565b1415612250576000604082015261228e565b600161225b336135df565b51600181111561226d5761226d6157a0565b141561228e5761227c336135df565b60409081015160608301819052908201525b33600090815260056020908152604091829020805460ff191660011790558501515151908201516122bf91906160a6565b3360009081526005602090815260409091206001019190915584015151516101008301516122ed91906160a6565b60808201526122fa614c8f565b825181516001600160a01b0391821690526020808501518351908316910152604080850180518451909201919091526060808601518451820152608080870151855182015260a08088015186519091015260c0808801518651951694019390935290510151908301516001911115612373576001612376565b60005b602083810180519290931490915260808401519151015261012083015161239f906001906160a6565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e00152610ba0816140c5565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff191683178155908601515151910181905561010083015161245891906160a6565b60a0820152612465614c8f565b825181516001600160a01b039182169052602080850151835190831691015260408085018051845190920191909152606080860151845182015260808087015185519091015260a080870151855182015260c08088015186519516940193909352905101519083015160019111156124de5760016124e1565b60005b602083810180519290931490915260a08401519151015261012083015161250a906001906160a6565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e0015261120d816140c5565b6125626003600054146013613aff565b815161257d90158061257657508251600154145b6014613aff565b60008080556002805461258f90615b3d565b80601f01602080910402602001604051908101604052809291908181526020018280546125bb90615b3d565b80156126085780601f106125dd57610100808354040283529160200191612608565b820191906000526020600020905b8154815290600101906020018083116125eb57829003601f168201915b505050505080602001905181019061262091906166e5565b90506126386040518060200160405280600081525090565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633856040516126699291906161c4565b60405180910390a161267d34156011613aff565b8151612695906001600160a01b031633146012613aff565b6060820151516040830151515111156127d457606082015151604083015151516126bf9190616364565b808252606083015161010001516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612701573d6000803e3d6000fd5b5061270a614c8f565b825181516001600160a01b03918216905260208085015183519083169082015260608086018051855160409081019190915260a080890151875185015260c0808a01518851608090810191909152845151895184015293516101000151885190881690820152858801805160019052805160009701879052805184018790528a51815198169790950196909652835143908401529188015183519092019190915286015190519092019190915282516127c291616364565b602082015160e00152610ba0816140c5565b816060015161010001516001600160a01b03166108fc8360400151600060018110612801576128016161ec565b6020020151516040518115909202916000818181858888f1935050505015801561282f573d6000803e3d6000fd5b508151604083015151516001600160a01b03909116906108fc90612854906000616364565b6040518115909202916000818181858888f1935050505015801561287c573d6000803e3d6000fd5b506020820151604083015161289d919060005b602002015160200151614573565b6128aa8260200151614586565b60008080556001819055610d4c90600290614caf565b6128d06010600054146029613aff565b81516128eb9015806128e457508251600154145b602a613aff565b6000808055600280546128fd90615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461292990615b3d565b80156129765780601f1061294b57610100808354040283529160200191612976565b820191906000526020600020905b81548152906001019060200180831161295957829003601f168201915b505050505080602001905181019061298e91906162dc565b9050612998614ba1565b7f69beebeea7b0b108020d81166bc0b515fd9f40ae2df9ed1acacbdd11ce103f8e33856040516129c99291906162f9565b60405180910390a16129dd34156028613aff565b6129e6336135df565b8152600081515160018111156129fe576129fe6157a0565b1415612a105760006020820152612a40565b60018151516001811115612a2657612a266157a0565b1415612a4057805160409081015190820181905260208201525b6000612a4b33612e9d565b516001811115612a5d57612a5d6157a0565b1415612a6f5760006060820152612a9a565b6001612a7a33612e9d565b516001811115612a8c57612a8c6157a0565b1415612a9a57600160608201525b80602001518261010001511015612ab2576000612ab8565b80606001515b15612d805760008151516001811115612ad357612ad36157a0565b1415612ae55760006080820152612b14565b60018151516001811115612afb57612afb6157a0565b1415612b145780516040015160a0820181905260808201525b8060800151826060015183608001518460e00151600060018110612b3a57612b3a6161ec565b602002015151612b4a9190616323565b612b549190616342565b612b5e9190616323565b60c08201526000612b6e33611214565b516001811115612b8057612b806157a0565b1415612b9e5760a08201516001600160a01b031660e0820152612be5565b6001612ba933611214565b516001811115612bbb57612bbb6157a0565b1415612be557612bca33611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015612c26573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516a18db185a5b54185cd9595960aa1b905251838201519151600080516020616cf383398151915292612c7b9291616077565b60405180910390a1604051600181527f73e5349ed2c41c830129ec119f3bfd261e62e89dc41e2c722a7b7ce63cd05dde9060200160405180910390a160016020840152612cc6614c17565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608086015184519091015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c0830151612d3790600190616364565b602080830180519091019190915280514360409091015260e084015190516060015260c0820151610100840151612d6e9190616364565b602082015160800152610ba08161459b565b610140810180516a18db185a5b51985a5b195960aa1b9052516040808401519051600080516020616cf383398151915292612dbc929091616077565b60405180910390a1604051600081527f05cd345833f140ef42da2ed82ecce338c56c9fcd9bf97f505c0d255a9086e87b9060200160405180910390a160006020840152612e07614c17565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c0890151815190950194909452835143930192909252905182519091015261010085015190519091015261120d8161459b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612ee957612ee96157a0565b14156112e0576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115612f2a57612f2a6157a0565b6001811115612f3b57612f3b6157a0565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b612f766005600054146017613aff565b8151612f91901580612f8a57508251600154145b6018613aff565b600080805560028054612fa390615b3d565b80601f0160208091040260200160405190810160405280929190818152602001828054612fcf90615b3d565b801561301c5780601f10612ff15761010080835404028352916020019161301c565b820191906000526020600020905b815481529060010190602001808311612fff57829003601f168201915b50505050508060200190518101906130349190616815565b9050613053604051806040016040528060008152602001600081525090565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516130849291906161c4565b60405180910390a161309834156015613aff565b81516130b0906001600160a01b031633146016613aff565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f193505050501580156130f2573d6000803e3d6000fd5b50610100820151515161310790606490616342565b80825261012083015161311a9080616364565b6131249190616364565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613163573d6000803e3d6000fd5b5061316c614ce9565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e080880151909416908501526101008087018051948601949094529251515192840192909252838101516101208401526006600055436001559051610f54918391016168ca565b61320b6016600054146039613aff565b815161322690158061321f57508251600154145b603a613aff565b60008080556002805461323890615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461326490615b3d565b80156132b15780601f10613286576101008083540402835291602001916132b1565b820191906000526020600020905b81548152906001019060200180831161329457829003601f168201915b50505050508060200190518101906132c991906165f8565b90506132dd8160800151431015603b613aff565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338460405161330e9291906161c4565b60405180910390a161332234156037613aff565b805161333a906001600160a01b031633146038613aff565b613342614c8f565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c08089015188519088169082015260e0808a0151878a0180519115159091526101008b01518151909801979097526101208a01518751909601959095526101408901518651971696909301959095528351439101526101608601518351909401939093526101808501518251909301929092526101a0840151905190910152610d4c816140c5565b613427600660005414601b613aff565b815161344290158061343b57508251600154145b601c613aff565b60008080556002805461345490615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461348090615b3d565b80156134cd5780601f106134a2576101008083540402835291602001916134cd565b820191906000526020600020905b8154815290600101906020018083116134b057829003601f168201915b50505050508060200190518101906134e5919061697b565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516135189291906161c4565b60405180910390a161352c34156019613aff565b8051613544906001600160a01b03163314601a613aff565b61354c614c17565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c81613df8565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561362b5761362b6157a0565b14156112e0576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561366c5761366c6157a0565b600181111561367d5761367d6157a0565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6136b2600b600054146022613aff565b81516136cd9015806136c657508251600154145b6023613aff565b6000808055600280546136df90615b3d565b80601f016020809104026020016040519081016040528092919081815260200182805461370b90615b3d565b80156137585780601f1061372d57610100808354040283529160200191613758565b820191906000526020600020905b81548152906001019060200180831161373b57829003601f168201915b50505050508060200190518101906137709190616815565b905061378f604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33856040516137c09291906161c4565b60405180910390a16137d434156020613aff565b81516137ec906001600160a01b031633146021613aff565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f1935050505015801561382e573d6000803e3d6000fd5b50610100820151515161384390606490616342565b8082526101208301516138569080616364565b6138609190616364565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561389f573d6000803e3d6000fd5b506138a8614ce9565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600c600055436001559051610f54918391016168ca565b613947600c600054146026613aff565b815161396290158061395b57508251600154145b6027613aff565b60008080556002805461397490615b3d565b80601f01602080910402602001604051908101604052809291908181526020018280546139a090615b3d565b80156139ed5780601f106139c2576101008083540402835291602001916139ed565b820191906000526020600020905b8154815290600101906020018083116139d057829003601f168201915b5050505050806020019051810190613a05919061697b565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3384604051613a389291906161c4565b60405180910390a1613a4c34156024613aff565b8051613a64906001600160a01b031633146025613aff565b613a6c614c17565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c8161459b565b816104705760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613b2d614d5d565b60208201515115613bb457613b40614db1565b8251516001600160a01b039081168252835160209081015190911681830152808401805160409081015181850152905160609081015190840152601b6000554360015551613b9091839101616998565b60405160208183030381529060405260029080519060200190610d4c929190614ab3565b8151516020830151604090810151515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613bf9573d6000803e3d6000fd5b508151516020830151604081015151516060909101516001600160a01b03909216916108fc91613c2891616364565b6040518115909202916000818181858888f19350505050158015613c50573d6000803e3d6000fd5b506020828101516040015151908101519051613c6c9190616364565b81515260208281018051604090810151518301518451909301929092528051820151518201518351901515908301525101518151613cad9190600090613d6c565b602082810182815291515160408085015191909152848201510151518101519151510151613cdb9190616364565b6040828101805160209081019390935282840151518201519051901515908201528351820151918401510151613d139190600061288f565b613d27816020015160008360400151613d6c565b516040015115613d47576000808055600181905561047090600290614caf565b815160200151613d5690614586565b6000808055600181905561047090600290614caf565b613d74614dcc565b60005b6001811015613dc057848160018110613d9257613d926161ec565b6020020151828260018110613da957613da96161ec565b602002015280613db8816169dc565b915050613d77565b5081818460018110613dd457613dd46161ec565b60200201529392505050565b6000613dee8385308561465e565b90505b9392505050565b613e00614d5d565b600082602001516020015111613e17576000613e20565b60208201515115155b15613ebb57613e2d614e17565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152600a600055436001559051613b9091839101616a76565b81515160208301516060015151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613eff573d6000803e3d6000fd5b508151516020830151606081015151516080909101516001600160a01b03909216916108fc91613f2e91616364565b6040518115909202916000818181858888f19350505050158015613f56573d6000803e3d6000fd5b506020828101516060015151908101519051613f729190616364565b815152602082810180516060908101515183015184519093019290925280518201515160409081015184519015159101525101518151613fb59190600090613d6c565b60208281018281529151516040840151528381015160600151518101519151510151613fe19190616364565b604082810180516020908101939093528284015151820151905190151591015282518101519083015160600151613d139190600061288f565b614022614d5d565b600082602001516020015111614039576000614042565b60208201515115155b15613ebb5761404f614e77565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015190931683850152818601805183015160808087019190915281519094015160a0860152519092015160c08401526015600055436001559051613b9091839101616a85565b6140cd614ec8565b815160800151602083015160a0015111156140e95760006140f0565b6020820151515b156141c8576140fd614f2f565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190870152875160c090810151861681880152848901805151151560e0808a019190915281518701516101008a015281518601516101208a0152815190940151909616610140880152855190910151610160870152845101516101808601529251909201516101a08401526016600055436001559051613b9091839101616aec565b60008260000151604001516060015183602001516020015110156141ed5760016141f0565b60005b1415614349578051651c185cdcd95960d21b90528051825160600151604051600080516020616cf38339815191529261422a929091616077565b60405180910390a16064826020015160e001516142479190616342565b602080830182905283015160e001516142609190616364565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156142a5573d6000803e3d6000fd5b506142ae614faf565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601519288019290925281518301518188015281519093015190941660e086015292510151610100840152838201516101208401526005600055436001559051613b9091839101616c72565b81516040015161012001516020808401510151106144b55760608082018051651c185cdcd95960d21b905251835190910151604051600080516020616cf383398151915292614399929091616077565b60405180910390a16064826020015160e001516143b69190616342565b60808201819052602083015160e001516143d09190616364565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614413573d6000803e3d6000fd5b5061441c614faf565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601518389015280518401518289015280519094015190951660e0870152915190930151610100850152840151610120840152600b600055436001559051613b9091839101616c72565b60c0810180516519985a5b195960d21b905251825160600151604051600080516020616cf3833981519152926144ec929091616077565b60405180910390a16144fc61501f565b8251516001600160a01b039081168252835160209081015182168184015284516060908101516040808601919091528287018051820151838701528051909201519093166080850152805160c09081015160a0860152905160e00151908401526011600055436001559051613b9091839101616c81565b61457d8282614738565b61047057600080fd5b61458f81614813565b61459857600080fd5b50565b6145a3614d5d565b6000826020015160200151116145ba5760006145c3565b60208201515115155b15613ebb576145d0614e17565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e086015251909201516101008401526010600055436001559051613b9091839101616a76565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916146c591616cd6565b60006040518083038185875af1925050503d8060008114614702576040519150601f19603f3d011682016040523d82523d6000602084013e614707565b606091505b5091509150614718828260016148b8565b508080602001905181019061472d9190615a56565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161476491815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516147a29190616cd6565b60006040518083038185875af1925050503d80600081146147df576040519150601f19603f3d011682016040523d82523d6000602084013e6147e4565b606091505b50915091506147f5828260036148b8565b508080602001905181019061480a9190615a56565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b03861691839161485a91616cd6565b60006040518083038185875af1925050503d8060008114614897576040519150601f19603f3d011682016040523d82523d6000602084013e61489c565b606091505b50915091506148ad828260046148b8565b506001949350505050565b606083156148c7575081613df1565b8251156148d75782518084602001fd5b60405163100960cb60e01b815260048101839052602401613b1c565b60405180604001604052806000815260200161490d615070565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b60405180604001604052806000815260200161490d60405180602001604052806000151581525090565b60405180604001604052806000815260200161490d60408051808201909152600060208201908152815290565b6040805160e081018252600060a0820181815260c083018290528252825160208082018552918152908201529081016149e4615083565b8152602001614a06604051806040016040528060008152602001600081525090565b815260200161490d60408051602081019091526000815290565b60408051608081018252600091810182815260608201929092529081526020810161490d615096565b6040805160608101825260009181019182529081905b8152602001600081525090565b6040805160e08101825260008082526020820152908101614a8b614dcc565b8152602001614a986150b5565b81526020016000815260200160008152602001600081525090565b828054614abf90615b3d565b90600052602060002090601f016020900481019282614ae15760008555614b27565b82601f10614afa57805160ff1916838001178555614b27565b82800160010185558215614b27579182015b82811115614b27578251825591602001919060010190614b0c565b50614b33929150615188565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161490d614dcc565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161490d614dcc565b604080516101c0810182526000610160820181815261018083018290526101a0830182905282526020808301829052828401829052606083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290528351908101909352825290610120820190614a06565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b815260200161490d61519d565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190614c52565b6040518060400160405280614ca26151c5565b815260200161490d61520f565b508054614cbb90615b3d565b6000825580601f10614ccb575050565b601f0160209004906000526020600020908101906145989190615188565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001614d49614dcc565b815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101614d8e614dcc565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160808101825260008082526020820152908101614a5f5b60405180602001604052806001905b614e01604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081614ddb5790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614a5f614dcc565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001614a5f614dcc565b604080516101008101909152600060e08201908152819081526020016000815260200160008152602001614f0760408051602081019091526000815290565b8152602001600081526020016000815260200161490d60408051602081019091526000815290565b604080516101c08101825260008082526020820152908101614f4f6150b5565b815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614a5f614dcc565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001614a5f614dcc565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001614a5f614dcc565b604051806020016040528061490d615258565b604051806020016040528061490d6152b7565b6040805160808101825260008082526020820152908101614a5f614dcc565b6040805161016081018252600080825260208201529081016151056040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b815260200160008152602001600081526020016151496040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b031681526020016000815260200161490d60408051602081019091526000815290565b5b80821115614b335760008155600101615189565b6040518060a00160405280600081526020016000815260200160008152602001614a5f614dcc565b6040805160e081018252600080825260208201529081016151e46150b5565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001614a5f614dcc565b60408051608081019091528060008152602001615288604051806040016040528060008152602001600081525090565b8152602001615295615083565b815260200161490d604051806040016040528060008152602001600081525090565b6040518060c00160405280600081526020016152de60408051602081019091526000815290565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526000602080830182905260408051608081018252838152918201839052818101839052606082019290925291015290565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156153ad576153ad615374565b60405290565b60405160a0810167ffffffffffffffff811182821017156153ad576153ad615374565b60405160c0810167ffffffffffffffff811182821017156153ad576153ad615374565b6040516080810167ffffffffffffffff811182821017156153ad576153ad615374565b6040805190810167ffffffffffffffff811182821017156153ad576153ad615374565b604051610160810167ffffffffffffffff811182821017156153ad576153ad615374565b6040516060810167ffffffffffffffff811182821017156153ad576153ad615374565b604051610120810167ffffffffffffffff811182821017156153ad576153ad615374565b60405160e0810167ffffffffffffffff811182821017156153ad576153ad615374565b6040516101c0810167ffffffffffffffff811182821017156153ad576153ad615374565b604051610140810167ffffffffffffffff811182821017156153ad576153ad615374565b6001600160601b03198116811461459857600080fd5b60006020828403121561553d57600080fd5b61554561538a565b9050813561555281615515565b815292915050565b69ffffffffffffffffffff198116811461459857600080fd5b600060a0828403121561558557600080fd5b61558d6153b3565b90508135815260208201356020820152604082013560408201526060820135606082015260808201356155bf8161555a565b608082015292915050565b600060c082840312156155dc57600080fd5b6155e46153d6565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013561562081615515565b60a082015292915050565b6001600160a01b038116811461459857600080fd5b80356112eb8161562b565b600081830361024081121561565f57600080fd5b6156676153d6565b91508235825261567a846020850161552b565b602083015261568c8460408501615573565b604083015261569e8460e085016155ca565b60608301526101a08301356156b28161562b565b8060808401525060806101bf19820112156156cc57600080fd5b506156d56153f9565b6101c083013581526101e0830135602082015261020083013560408201526102208301356001600160e01b03198116811461570f57600080fd5b606082015260a082015292915050565b6000610240828403121561573257600080fd5b613df1838361564b565b60006102a0828403121561574f57600080fd5b50919050565b60006040828403121561574f57600080fd5b60006040828403121561577957600080fd5b613df18383615755565b60006020828403121561579557600080fd5b8135613df18161562b565b634e487b7160e01b600052602160045260246000fd5b60028110614598576145986157a0565b815160608201906157d6816157b6565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561581157600080fd5b50508035926020909101359150565b81516060820190615830816157b6565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121561586457600080fd5b5035919050565b60005b8381101561588657818101518382015260200161586e565b83811115610d4c5750506000910152565b82815260406020820152600082518060408401526158bc81606085016020870161586b565b601f01601f1916919091016060019392505050565b815160608201906158e1816157b6565b808352506020830151151560208301526040830151604083015292915050565b6000610300828403121561574f57600080fd5b60008183036102a081121561592857600080fd5b61593061541c565b8335815261028080601f198401121561594857600080fd5b61595061538a565b925061595a61543f565b6020860135815261596d60408701615640565b602082015261597f87606088016155ca565b60408201526101208087013560608301526101408088013560808401526159aa896101608a01615573565b60a084015261020088013560c084015261022088013560e08401526159d26102408901615640565b610100840152610260880135828401526159ee89858a0161552b565b908301525083525060208101919091529392505050565b801515811461459857600080fd5b600060408284031215615a2557600080fd5b615a2d61541c565b823581526020830135615a3f81615a05565b60208201529392505050565b80516112eb81615a05565b600060208284031215615a6857600080fd5b8151613df181615a05565b60008183036040811215615a8657600080fd5b615a8e61541c565b8335815291506020601f1982011215615aa657600080fd5b50615aaf61538a565b6020830135615abd81615a05565b8152602082015292915050565b600060408284031215615adc57600080fd5b613df18383615a73565b60008183036040811215615af957600080fd5b615b0161541c565b833581526020601f1983011215615b1757600080fd5b615b1f61538a565b9150615b2961538a565b602094850135815282529283015250919050565b600181811c90821680615b5157607f821691505b6020821081141561574f57634e487b7160e01b600052602260045260246000fd5b600060408284031215615b8457600080fd5b615b8c61541c565b9050813581526020820135602082015292915050565b6000818303610300811215615bb657600080fd5b615bbe61541c565b833581526102e0601f1983011215615bd557600080fd5b615bdd61538a565b615be56153f9565b602086013560038110615bf757600080fd5b8152615c068760408801615b72565b6020820152610240607f1985011215615c1e57600080fd5b615c2661538a565b9350615c35876080880161564b565b8452836040820152615c4b876102c08801615b72565b606082015281526020820152949350505050565b80516112eb8161562b565b600082601f830112615c7b57600080fd5b615c8361538a565b80606080850186811115615c9657600080fd5b855b81811015615ce757828189031215615cb05760008081fd5b615cb8615463565b8151815260208083015181830152604080840151615cd581615a05565b90830152908652909401938201615c98565b50919695505050505050565b600060c08284031215615d0557600080fd5b615d0d6153f9565b8251615d188161562b565b81526020830151615d288161562b565b6020820152615d3a8460408501615c6a565b604082015260a09290920151606083015250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526bffffffffffffffffffffffff1960a08201511660a08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b6001600160a01b0383811682528251602080840191909152830151518051610320840192919060038110615e3a57615e3a6157a0565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526bffffffffffffffffffffffff196020820151511660c08601526040810151615e8f60e0870182615d51565b506060810151615ea3610180870182615d8e565b508260808201511661024086015260a0810151925050615ec7610260850183615dd7565b6060015180516102e0850152602081015161030085015290505b509392505050565b86815285516001600160601b03191660208201526102408101615f0f6040830187615d51565b615f1c60e0830186615d8e565b6001600160a01b0384166101a083015261472d6101c0830184615dd7565b600060c08284031215615f4c57600080fd5b615f546153f9565b8251615f5f8161562b565b81526020830151615f6f8161562b565b602082015260408381015190820152615f8b8460608501615c6a565b60608201529392505050565b805182526020810151615fb560208401826001600160a01b03169052565b506040810151615fc86040840182615d8e565b506060810151610100818185015260808301519150610120828186015260a08401519250610140615ffb81870185615d51565b60c08501516101e087015260e0850151610200870152918401516001600160a01b031661022086015283015161024085015282015180516001600160601b0319166102608501529050505050565b60006102c08201905060018060a01b0384168252825160208301526020830151615ee1604084018251615f97565b91516001600160601b0319168252602082015260400190565b634e487b7160e01b600052601160045260246000fd5b600082198211156160b9576160b9616090565b500190565b8060005b6001811015610d4c5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016160c2565b81516001600160a01b03908116825260208084015190911690820152604080830151610380830191616130908401826160be565b50606083015161614360a0840182615f97565b50608083015161032083015260a083015161034083015260c0909201516103609091015290565b600060c0828403121561617c57600080fd5b6161846153f9565b825161618f8161562b565b8152602083015161619f81615a05565b602082015260408301516161b28161562b565b6040820152615f8b8460608501615c6a565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160c083019161623f908401826160be565b5092915050565b6000610160828403121561625957600080fd5b616261615486565b905061626c82615c5f565b815261627a60208301615c5f565b60208201526040820151604082015260608201516060820152608082015160808201526162a960a08301615c5f565b60a082015260c082015160c08201526162c58360e08401615c6a565b60e082015261014082015161010082015292915050565b600061016082840312156162ef57600080fd5b613df18383616246565b6001600160a01b038316815260608101613df1602083018480518252602090810151511515910152565b600081600019048311821515161561633d5761633d616090565b500290565b60008261635f57634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561637657616376616090565b500390565b6000610120828403121561638e57600080fd5b6163966154aa565b82516163a18161562b565b815260208301516163b18161562b565b60208201526040838101519082015260608301516163ce8161562b565b6060820152608083810151908201526163ea8460a08501615c6a565b60a0820152610100929092015160c083015250919050565b6000610120828403121561641557600080fd5b61641d6154aa565b82516164288161562b565b815260208301516164388161562b565b80602083015250604083015160408201526060830151606082015260808301516164618161562b565b60808201526163ea8460a08501615c6a565b600060c0828403121561648557600080fd5b61648d6153d6565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015161562081615515565b600060a082840312156164db57600080fd5b6164e36153b3565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516155bf8161555a565b60006020828403121561652757600080fd5b61652f61538a565b9050815161555281615515565b6000610280828403121561654f57600080fd5b61655761543f565b90508151815261656960208301615c5f565b602082015261657b8360408401616473565b60408201526101008083015160608301526101208084015160808401526101406165a7868287016164c9565b60a08501526101e085015160c085015261020085015160e08501526165cf6102208601615c5f565b83850152610240850151828501526165eb866102608701616515565b8185015250505092915050565b6000610460828403121561660b57600080fd5b6166136154cd565b61661c83615c5f565b815261662a60208401615c5f565b602082015261663c846040850161653c565b60408201526102c083015160608201526102e0830151608082015261030083015160a082015261666f6103208401615c5f565b60c08201526166816103408401615a4b565b60e08201526103608301516101008201526103808301516101208201526166ab6103a08401615c5f565b6101408201526103c08301516101608201526166cb846103e08501615c6a565b61018082015261044092909201516101a083015250919050565b600061038082840312156166f857600080fd5b6167006154aa565b825161670b8161562b565b8152602083015161671b8161562b565b602082015261672d8460408501615c6a565b604082015261673f8460a0850161653c565b6060820152610320830151608082015261034083015160a08201526103609092015160c083015250919050565b6000610180828403121561677f57600080fd5b6167876154f1565b905061679282615c5f565b81526167a060208301615c5f565b602082015260408201516040820152606082015160608201526167c560808301615c5f565b608082015260a082015160a082015260c082015160c08201526167ea60e08301615c5f565b60e08201526101006167fe84828501615c6a565b818301525061016082015161012082015292915050565b6000610180828403121561682857600080fd5b613df1838361676c565b80516001600160a01b03168252602081015161685960208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015161689c60c08401826001600160a01b03169052565b5060e08101516168af60e08401826160be565b50610100810151610140830152610120015161016090910152565b61018081016105998284616832565b600061018082840312156168ec57600080fd5b6168f46154f1565b90506168ff82615c5f565b815261690d60208301615c5f565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015261694660c08301615c5f565b60c08201526169588360e08401615c6a565b60e082015261014082015161010082015261016082015161012082015292915050565b6000610180828403121561698e57600080fd5b613df183836168d9565b81516001600160a01b0390811682526020808401519091169082015260408083015160c08301916169cb908401826160be565b50606083015160a083015292915050565b60006000198214156169f0576169f0616090565b5060010190565b60018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a0810151616a4960a08401826001600160a01b03169052565b5060c081015160c083015260e0810151616a6660e08401826160be565b5061010001516101409190910152565b610160810161059982846169f7565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152506080830151608083015260a0830151616ada60a08401826160be565b5060c083015161010083015292915050565b81516001600160a01b0316815261046081016020830151616b1860208401826001600160a01b03169052565b506040830151616b2b6040840182615f97565b5060608301516102c083015260808301516102e083015260a083015161030083015260c08301516001600160a01b0390811661032084015260e08401511515610340840152610100840151610360840152610120840151610380840152610140840151166103a08301526101608301516103c0830152610180830151616bb56103e08401826160be565b506101a083015161044083015292915050565b80516001600160a01b031682526020810151616bef60208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151616c1e60808401826001600160a01b03169052565b5060a081015160a083015260c081015160c083015260e0810151616c4d60e08401826001600160a01b03169052565b5061010080820151616c61828501826160be565b505061012001516101609190910152565b61018081016105998284616bc8565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a0830151616ada60a08401826160be565b60008251616ce881846020870161586b565b919091019291505056fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da264697066735822122033e3a12ffd0652be4a1f6b8a33838aaf24efb8cd1f4fecdba653ce1752ac089164736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220e2a668df0a15f2c3e49a707741780452cf824ad53c3ef102bd4d46ab2ec144b764736f6c634300080c0033`,
  BytecodeLen: 34848,
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
    at: './index.rsh:147:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:154:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:156:60:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:177:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:184:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:186:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:209:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:211:58:after expr stmt semicolon',
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
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:271:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:231:37:after expr stmt semicolon',
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
