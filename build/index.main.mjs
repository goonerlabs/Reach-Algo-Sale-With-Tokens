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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc9 = stdlib.T_Object({
    PrivateSaleAmt: ctc2,
    contract: ctc3,
    description: ctc4,
    hardCap: ctc2,
    id: ctc2,
    link: ctc5,
    maxContribution: ctc2,
    minContribution: ctc2,
    owner: ctc0,
    softCap: ctc2,
    title: ctc6,
    tokenName: ctc7,
    tokenSymbol: ctc8,
    tokenid: ctc2
    });
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Data({
    None: ctc13,
    Some: ctc0
    });
  const ctc15 = stdlib.T_Data({
    None: ctc13,
    Some: ctc2
    });
  const ctc16 = stdlib.T_Data({
    None: ctc13,
    Some: ctc13
    });
  const map0_ctc = ctc14;
  
  const map1_ctc = ctc15;
  
  const map2_ctc = ctc16;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc9, ctc2, ctc10, ctc12],
      2: [ctc0, ctc9, ctc2, ctc10, ctc2, ctc12, ctc2],
      4: [ctc0, ctc2, ctc10, ctc2, ctc0, ctc2, ctc2, ctc0, ctc12, ctc2],
      5: [ctc0, ctc2, ctc10, ctc2, ctc2, ctc2, ctc0, ctc12, ctc2, ctc2],
      9: [ctc0, ctc2, ctc10, ctc2, ctc2, ctc0, ctc2, ctc12, ctc2],
      10: [ctc0, ctc2, ctc10, ctc2, ctc0, ctc2, ctc2, ctc0, ctc12, ctc2],
      11: [ctc0, ctc2, ctc10, ctc2, ctc2, ctc2, ctc0, ctc12, ctc2, ctc2],
      15: [ctc0, ctc2, ctc10, ctc2, ctc2, ctc0, ctc2, ctc12, ctc2],
      16: [ctc0, ctc2, ctc10, ctc2, ctc0, ctc12, ctc2],
      20: [ctc0, ctc2, ctc10, ctc0, ctc2, ctc12, ctc2],
      21: [ctc0, ctc9, ctc2, ctc10, ctc2, ctc2, ctc0, ctc1, ctc2, ctc2, ctc0, ctc2, ctc12, ctc2],
      26: [ctc0, ctc10, ctc12, ctc2]
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
export async function _Contributors_claimRefund20(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund20 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund20 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1237, v1242, v1249, v1319, v1827, v1834, v1835] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), [ctc1, ctc3, ctc6, ctc1, ctc3, ctc9, ctc3]);
  const v1843 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:222:13:application call to [unknown function] (defined at: ./index.rsh:222:13:function exp)', 'at ./index.rsh:222:13:application call to [unknown function] (defined at: ./index.rsh:222:13:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1242, v1249, v1319, v1827, v1834, v1835, v1843],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:222:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1847], secs: v1849, time: v1848, didSend: v686, from: v1846 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1852 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1846), null);
      let v1853;
      switch (v1852[0]) {
        case 'None': {
          const v1854 = v1852[1];
          v1853 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1855 = v1852[1];
          v1853 = v1855;
          
          break;
          }
        }
      const v1856 = stdlib.ge(v1835, v1853);
      const v1857 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1846), null);
      let v1858;
      switch (v1857[0]) {
        case 'None': {
          const v1859 = v1857[1];
          v1858 = false;
          
          break;
          }
        case 'Some': {
          const v1860 = v1857[1];
          v1858 = true;
          
          break;
          }
        }
      const v1861 = v1856 ? v1858 : false;
      if (v1861) {
        let v1863;
        switch (v1852[0]) {
          case 'None': {
            const v1864 = v1852[1];
            v1863 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1865 = v1852[1];
            v1863 = v1865;
            
            break;
            }
          }
        const v1866 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1846), null);
        let v1867;
        switch (v1866[0]) {
          case 'None': {
            const v1868 = v1866[1];
            v1867 = v1319;
            
            break;
            }
          case 'Some': {
            const v1869 = v1866[1];
            v1867 = v1869;
            
            break;
            }
          }
        const v1873 = stdlib.sub(v1835, v1863);
        sim_r.txns.push({
          kind: 'from',
          to: v1867,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1846, undefined /* Nothing */);
        const v1876 = 'refundPassed        ';
        null;
        const v1877 = true;
        const v1878 = await txn1.getOutput('Contributors_claimRefund', 'v1877', ctc7, v1877);
        
        const v1883 = stdlib.sub(v1827, stdlib.checkedBigNumberify('./index.rsh:229:30:decimal', stdlib.UInt_max, '1'));
        const v3320 = v1883;
        const v3322 = v1834;
        const v3323 = v1873;
        const v3324 = stdlib.gt(v1883, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
        const v3325 = stdlib.gt(v1873, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
        const v3326 = v3324 ? v3325 : false;
        if (v3326) {
          sim_r.isHalt = false;
          }
        else {
          const v3327 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v3328 = v3327[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v3329 = stdlib.sub(v1873, v3328);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3330 = v3327[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3331 = stdlib.sub(v3328, v3330);
          const v3332 = v3327[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3333 = [v3331, v3330, v3332];
          const v3334 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3333);
          const v3335 = v3334[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3336 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3337 = stdlib.sub(v3336, v3330);
          const v3338 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3339 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3340 = [v3338, v3337, v3339];
          const v3341 = stdlib.Array_set(v3334, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3340);
          stdlib.simTokenBurn(sim_r, v1249, v3330);
          const v3342 = v3341[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3343 = v3342[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3343) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1890 = 'refundFailed        ';
        null;
        const v1891 = false;
        const v1892 = await txn1.getOutput('Contributors_claimRefund', 'v1891', ctc7, v1891);
        
        const v3345 = v1827;
        const v3347 = v1834;
        const v3348 = v1835;
        const v3349 = stdlib.gt(v1827, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
        const v3350 = stdlib.gt(v1835, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
        const v3351 = v3349 ? v3350 : false;
        if (v3351) {
          sim_r.isHalt = false;
          }
        else {
          const v3352 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v3353 = v3352[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v3354 = stdlib.sub(v1835, v3353);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3355 = v3352[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3356 = stdlib.sub(v3353, v3355);
          const v3357 = v3352[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3358 = [v3356, v3355, v3357];
          const v3359 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3358);
          const v3360 = v3359[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3361 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3362 = stdlib.sub(v3361, v3355);
          const v3363 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3364 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3365 = [v3363, v3362, v3364];
          const v3366 = stdlib.Array_set(v3359, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3365);
          stdlib.simTokenBurn(sim_r, v1249, v3355);
          const v3367 = v3366[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3368 = v3367[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3368) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
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
    tys: [ctc1, ctc3, ctc6, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1847], secs: v1849, time: v1848, didSend: v686, from: v1846 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1852 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1846), null);
  let v1853;
  switch (v1852[0]) {
    case 'None': {
      const v1854 = v1852[1];
      v1853 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1855 = v1852[1];
      v1853 = v1855;
      
      break;
      }
    }
  const v1856 = stdlib.ge(v1835, v1853);
  const v1857 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1846), null);
  let v1858;
  switch (v1857[0]) {
    case 'None': {
      const v1859 = v1857[1];
      v1858 = false;
      
      break;
      }
    case 'Some': {
      const v1860 = v1857[1];
      v1858 = true;
      
      break;
      }
    }
  const v1861 = v1856 ? v1858 : false;
  if (v1861) {
    let v1863;
    switch (v1852[0]) {
      case 'None': {
        const v1864 = v1852[1];
        v1863 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1865 = v1852[1];
        v1863 = v1865;
        
        break;
        }
      }
    const v1866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1846), null);
    let v1867;
    switch (v1866[0]) {
      case 'None': {
        const v1868 = v1866[1];
        v1867 = v1319;
        
        break;
        }
      case 'Some': {
        const v1869 = v1866[1];
        v1867 = v1869;
        
        break;
        }
      }
    const v1873 = stdlib.sub(v1835, v1863);
    ;
    await stdlib.mapSet(map2, v1846, undefined /* Nothing */);
    const v1876 = 'refundPassed        ';
    null;
    const v1877 = true;
    const v1878 = await txn1.getOutput('Contributors_claimRefund', 'v1877', ctc7, v1877);
    if (v686) {
      stdlib.protect(ctc0, await interact.out(v1847, v1878), {
        at: './index.rsh:222:14:application',
        fs: ['at ./index.rsh:222:14:application call to [unknown function] (defined at: ./index.rsh:222:14:function exp)', 'at ./index.rsh:228:17:application call to "notify" (defined at: ./index.rsh:222:40:function exp)', 'at ./index.rsh:222:40:application call to [unknown function] (defined at: ./index.rsh:222:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1883 = stdlib.sub(v1827, stdlib.checkedBigNumberify('./index.rsh:229:30:decimal', stdlib.UInt_max, '1'));
    const v3320 = v1883;
    const v3322 = v1834;
    const v3323 = v1873;
    const v3324 = stdlib.gt(v1883, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
    const v3325 = stdlib.gt(v1873, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
    const v3326 = v3324 ? v3325 : false;
    if (v3326) {
      return;
      }
    else {
      const v3327 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
      const v3328 = v3327[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
      const v3329 = stdlib.sub(v1873, v3328);
      ;
      ;
      const v3330 = v3327[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3331 = stdlib.sub(v3328, v3330);
      const v3332 = v3327[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3333 = [v3331, v3330, v3332];
      const v3334 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3333);
      const v3335 = v3334[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3336 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3337 = stdlib.sub(v3336, v3330);
      const v3338 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3339 = v3335[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3340 = [v3338, v3337, v3339];
      const v3341 = stdlib.Array_set(v3334, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3340);
      undefined /* TokenBurn */;
      const v3342 = v3341[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3343 = v3342[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3343) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1890 = 'refundFailed        ';
    null;
    const v1891 = false;
    const v1892 = await txn1.getOutput('Contributors_claimRefund', 'v1891', ctc7, v1891);
    if (v686) {
      stdlib.protect(ctc0, await interact.out(v1847, v1892), {
        at: './index.rsh:222:14:application',
        fs: ['at ./index.rsh:222:14:application call to [unknown function] (defined at: ./index.rsh:222:14:function exp)', 'at ./index.rsh:232:17:application call to "notify" (defined at: ./index.rsh:222:40:function exp)', 'at ./index.rsh:222:40:application call to [unknown function] (defined at: ./index.rsh:222:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v3345 = v1827;
    const v3347 = v1834;
    const v3348 = v1835;
    const v3349 = stdlib.gt(v1827, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
    const v3350 = stdlib.gt(v1835, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
    const v3351 = v3349 ? v3350 : false;
    if (v3351) {
      return;
      }
    else {
      const v3352 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
      const v3353 = v3352[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
      const v3354 = stdlib.sub(v1835, v3353);
      ;
      ;
      const v3355 = v3352[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3356 = stdlib.sub(v3353, v3355);
      const v3357 = v3352[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3358 = [v3356, v3355, v3357];
      const v3359 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3358);
      const v3360 = v3359[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3361 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3362 = stdlib.sub(v3361, v3355);
      const v3363 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3364 = v3360[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3365 = [v3363, v3362, v3364];
      const v3366 = stdlib.Array_set(v3359, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3365);
      undefined /* TokenBurn */;
      const v3367 = v3366[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3368 = v3367[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3368) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_claimToken9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken9 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1237, v1242, v1249, v1305, v1317, v1319, v1487, v1494, v1495] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1504 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:167:9:application call to [unknown function] (defined at: ./index.rsh:167:9:function exp)', 'at ./index.rsh:167:9:application call to [unknown function] (defined at: ./index.rsh:167:9:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1242, v1249, v1305, v1317, v1319, v1487, v1494, v1495, v1504],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:167:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1508], secs: v1510, time: v1509, didSend: v435, from: v1507 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1513 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1507), null);
      let v1514;
      switch (v1513[0]) {
        case 'None': {
          const v1515 = v1513[1];
          v1514 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1516 = v1513[1];
          v1514 = v1516;
          
          break;
          }
        }
      const v1517 = stdlib.ge(v1495, v1514);
      const v1518 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1507), null);
      let v1519;
      switch (v1518[0]) {
        case 'None': {
          const v1520 = v1518[1];
          v1519 = false;
          
          break;
          }
        case 'Some': {
          const v1521 = v1518[1];
          v1519 = true;
          
          break;
          }
        }
      const v1522 = v1517 ? v1519 : false;
      if (v1522) {
        const v1523 = v1494[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
        const v1524 = v1523[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
        const v1525 = stdlib.mul(v1524, v1317);
        const v1527 = stdlib.div(v1525, v1305);
        let v1529;
        switch (v1513[0]) {
          case 'None': {
            const v1530 = v1513[1];
            v1529 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1531 = v1513[1];
            v1529 = v1531;
            
            break;
            }
          }
        const v1532 = stdlib.mul(v1527, v1529);
        const v1533 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1507), null);
        let v1534;
        switch (v1533[0]) {
          case 'None': {
            const v1535 = v1533[1];
            v1534 = v1319;
            
            break;
            }
          case 'Some': {
            const v1536 = v1533[1];
            v1534 = v1536;
            
            break;
            }
          }
        const v1540 = stdlib.sub(v1495, v1532);
        sim_r.txns.push({
          kind: 'from',
          to: v1534,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1507, undefined /* Nothing */);
        const v1543 = 'claimPassed         ';
        null;
        const v1544 = true;
        const v1545 = await txn1.getOutput('Contributors_claimToken', 'v1544', ctc7, v1544);
        
        const v1550 = stdlib.sub(v1487, stdlib.checkedBigNumberify('./index.rsh:174:29:decimal', stdlib.UInt_max, '1'));
        const v3370 = v1524;
        const v3372 = v1494;
        const v3373 = v1540;
        const v3374 = stdlib.gt(v1524, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
        const v3375 = stdlib.gt(v1550, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
        const v3376 = v3374 ? v3375 : false;
        if (v3376) {
          sim_r.isHalt = false;
          }
        else {
          const v3379 = stdlib.sub(v1540, v1524);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3380 = v1523[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3381 = stdlib.sub(v1524, v3380);
          const v3382 = v1523[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3383 = [v3381, v3380, v3382];
          const v3384 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3383);
          const v3385 = v3384[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3386 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3387 = stdlib.sub(v3386, v3380);
          const v3388 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3389 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3390 = [v3388, v3387, v3389];
          const v3391 = stdlib.Array_set(v3384, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3390);
          stdlib.simTokenBurn(sim_r, v1249, v3380);
          const v3392 = v3391[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3393 = v3392[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3393) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1558 = 'claimFailed         ';
        null;
        const v1559 = false;
        const v1560 = await txn1.getOutput('Contributors_claimToken', 'v1559', ctc7, v1559);
        
        const v1565 = v1494[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
        const v1566 = v1565[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
        const v3395 = v1566;
        const v3397 = v1494;
        const v3398 = v1495;
        const v3399 = stdlib.gt(v1566, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
        const v3400 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
        const v3401 = v3399 ? v3400 : false;
        if (v3401) {
          sim_r.isHalt = false;
          }
        else {
          const v3404 = stdlib.sub(v1495, v1566);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3405 = v1565[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3406 = stdlib.sub(v1566, v3405);
          const v3407 = v1565[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3408 = [v3406, v3405, v3407];
          const v3409 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3408);
          const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3411 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3412 = stdlib.sub(v3411, v3405);
          const v3413 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3414 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3415 = [v3413, v3412, v3414];
          const v3416 = stdlib.Array_set(v3409, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3415);
          stdlib.simTokenBurn(sim_r, v1249, v3405);
          const v3417 = v3416[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3418) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
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
    tys: [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1508], secs: v1510, time: v1509, didSend: v435, from: v1507 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1513 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1507), null);
  let v1514;
  switch (v1513[0]) {
    case 'None': {
      const v1515 = v1513[1];
      v1514 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1516 = v1513[1];
      v1514 = v1516;
      
      break;
      }
    }
  const v1517 = stdlib.ge(v1495, v1514);
  const v1518 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1507), null);
  let v1519;
  switch (v1518[0]) {
    case 'None': {
      const v1520 = v1518[1];
      v1519 = false;
      
      break;
      }
    case 'Some': {
      const v1521 = v1518[1];
      v1519 = true;
      
      break;
      }
    }
  const v1522 = v1517 ? v1519 : false;
  if (v1522) {
    const v1523 = v1494[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
    const v1524 = v1523[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
    const v1525 = stdlib.mul(v1524, v1317);
    const v1527 = stdlib.div(v1525, v1305);
    let v1529;
    switch (v1513[0]) {
      case 'None': {
        const v1530 = v1513[1];
        v1529 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1531 = v1513[1];
        v1529 = v1531;
        
        break;
        }
      }
    const v1532 = stdlib.mul(v1527, v1529);
    const v1533 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1507), null);
    let v1534;
    switch (v1533[0]) {
      case 'None': {
        const v1535 = v1533[1];
        v1534 = v1319;
        
        break;
        }
      case 'Some': {
        const v1536 = v1533[1];
        v1534 = v1536;
        
        break;
        }
      }
    const v1540 = stdlib.sub(v1495, v1532);
    ;
    await stdlib.mapSet(map2, v1507, undefined /* Nothing */);
    const v1543 = 'claimPassed         ';
    null;
    const v1544 = true;
    const v1545 = await txn1.getOutput('Contributors_claimToken', 'v1544', ctc7, v1544);
    if (v435) {
      stdlib.protect(ctc0, await interact.out(v1508, v1545), {
        at: './index.rsh:167:10:application',
        fs: ['at ./index.rsh:167:10:application call to [unknown function] (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:173:13:application call to "notify" (defined at: ./index.rsh:167:35:function exp)', 'at ./index.rsh:167:35:application call to [unknown function] (defined at: ./index.rsh:167:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1550 = stdlib.sub(v1487, stdlib.checkedBigNumberify('./index.rsh:174:29:decimal', stdlib.UInt_max, '1'));
    const v3370 = v1524;
    const v3372 = v1494;
    const v3373 = v1540;
    const v3374 = stdlib.gt(v1524, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
    const v3375 = stdlib.gt(v1550, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
    const v3376 = v3374 ? v3375 : false;
    if (v3376) {
      return;
      }
    else {
      const v3379 = stdlib.sub(v1540, v1524);
      ;
      ;
      const v3380 = v1523[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3381 = stdlib.sub(v1524, v3380);
      const v3382 = v1523[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3383 = [v3381, v3380, v3382];
      const v3384 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3383);
      const v3385 = v3384[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3386 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3387 = stdlib.sub(v3386, v3380);
      const v3388 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3389 = v3385[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3390 = [v3388, v3387, v3389];
      const v3391 = stdlib.Array_set(v3384, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3390);
      undefined /* TokenBurn */;
      const v3392 = v3391[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3393 = v3392[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3393) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1558 = 'claimFailed         ';
    null;
    const v1559 = false;
    const v1560 = await txn1.getOutput('Contributors_claimToken', 'v1559', ctc7, v1559);
    if (v435) {
      stdlib.protect(ctc0, await interact.out(v1508, v1560), {
        at: './index.rsh:167:10:application',
        fs: ['at ./index.rsh:167:10:application call to [unknown function] (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:177:13:application call to "notify" (defined at: ./index.rsh:167:35:function exp)', 'at ./index.rsh:167:35:application call to [unknown function] (defined at: ./index.rsh:167:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1565 = v1494[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
    const v1566 = v1565[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
    const v3395 = v1566;
    const v3397 = v1494;
    const v3398 = v1495;
    const v3399 = stdlib.gt(v1566, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
    const v3400 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
    const v3401 = v3399 ? v3400 : false;
    if (v3401) {
      return;
      }
    else {
      const v3404 = stdlib.sub(v1495, v1566);
      ;
      ;
      const v3405 = v1565[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3406 = stdlib.sub(v1566, v3405);
      const v3407 = v1565[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3408 = [v3406, v3405, v3407];
      const v3409 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3408);
      const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3411 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3412 = stdlib.sub(v3411, v3405);
      const v3413 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3414 = v3410[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3415 = [v3413, v3412, v3414];
      const v3416 = stdlib.Array_set(v3409, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3415);
      undefined /* TokenBurn */;
      const v3417 = v3416[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3418) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_claimToken15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken15 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v1237, v1242, v1249, v1305, v1317, v1319, v1670, v1677, v1678] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1687 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:11:function exp)', 'at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:11:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1242, v1249, v1305, v1317, v1319, v1670, v1677, v1678, v1687],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1691], secs: v1693, time: v1692, didSend: v573, from: v1690 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1696 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1690), null);
      let v1697;
      switch (v1696[0]) {
        case 'None': {
          const v1698 = v1696[1];
          v1697 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1699 = v1696[1];
          v1697 = v1699;
          
          break;
          }
        }
      const v1700 = stdlib.ge(v1678, v1697);
      const v1701 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1690), null);
      let v1702;
      switch (v1701[0]) {
        case 'None': {
          const v1703 = v1701[1];
          v1702 = false;
          
          break;
          }
        case 'Some': {
          const v1704 = v1701[1];
          v1702 = true;
          
          break;
          }
        }
      const v1705 = v1700 ? v1702 : false;
      if (v1705) {
        const v1706 = v1677[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
        const v1707 = v1706[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
        const v1708 = stdlib.mul(v1707, v1317);
        const v1710 = stdlib.div(v1708, v1305);
        let v1712;
        switch (v1696[0]) {
          case 'None': {
            const v1713 = v1696[1];
            v1712 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1714 = v1696[1];
            v1712 = v1714;
            
            break;
            }
          }
        const v1715 = stdlib.mul(v1710, v1712);
        const v1716 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1690), null);
        let v1717;
        switch (v1716[0]) {
          case 'None': {
            const v1718 = v1716[1];
            v1717 = v1319;
            
            break;
            }
          case 'Some': {
            const v1719 = v1716[1];
            v1717 = v1719;
            
            break;
            }
          }
        const v1723 = stdlib.sub(v1678, v1715);
        sim_r.txns.push({
          kind: 'from',
          to: v1717,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1690, undefined /* Nothing */);
        const v1726 = 'claimPaseed         ';
        null;
        const v1727 = true;
        const v1728 = await txn1.getOutput('Contributors_claimToken', 'v1727', ctc7, v1727);
        
        const v1735 = stdlib.sub(v1670, stdlib.checkedBigNumberify('./index.rsh:204:46:decimal', stdlib.UInt_max, '1'));
        const v3420 = v1735;
        const v3422 = v1677;
        const v3423 = v1723;
        const v3424 = stdlib.gt(v1735, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
        const v3425 = stdlib.gt(v1707, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
        const v3426 = v3424 ? v3425 : false;
        if (v3426) {
          sim_r.isHalt = false;
          }
        else {
          const v3429 = stdlib.sub(v1723, v1707);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3430 = v1706[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3431 = stdlib.sub(v1707, v3430);
          const v3432 = v1706[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3433 = [v3431, v3430, v3432];
          const v3434 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3433);
          const v3435 = v3434[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3436 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3437 = stdlib.sub(v3436, v3430);
          const v3438 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3439 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3440 = [v3438, v3437, v3439];
          const v3441 = stdlib.Array_set(v3434, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3440);
          stdlib.simTokenBurn(sim_r, v1249, v3430);
          const v3442 = v3441[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3443 = v3442[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3443) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1741 = 'claimFailed         ';
        null;
        const v1742 = false;
        const v1743 = await txn1.getOutput('Contributors_claimToken', 'v1742', ctc7, v1742);
        
        const v1748 = v1677[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
        const v1749 = v1748[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
        const v3445 = v1670;
        const v3447 = v1677;
        const v3448 = v1678;
        const v3449 = stdlib.gt(v1670, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
        const v3450 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
        const v3451 = v3449 ? v3450 : false;
        if (v3451) {
          sim_r.isHalt = false;
          }
        else {
          const v3454 = stdlib.sub(v1678, v1749);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v3455 = v1748[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v3456 = stdlib.sub(v1749, v3455);
          const v3457 = v1748[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3458 = [v3456, v3455, v3457];
          const v3459 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3458);
          const v3460 = v3459[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3461 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v3462 = stdlib.sub(v3461, v3455);
          const v3463 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v3464 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v3465 = [v3463, v3462, v3464];
          const v3466 = stdlib.Array_set(v3459, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3465);
          stdlib.simTokenBurn(sim_r, v1249, v3455);
          const v3467 = v3466[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v3468 = v3467[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v3468) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
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
    tys: [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1691], secs: v1693, time: v1692, didSend: v573, from: v1690 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1696 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1690), null);
  let v1697;
  switch (v1696[0]) {
    case 'None': {
      const v1698 = v1696[1];
      v1697 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1699 = v1696[1];
      v1697 = v1699;
      
      break;
      }
    }
  const v1700 = stdlib.ge(v1678, v1697);
  const v1701 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1690), null);
  let v1702;
  switch (v1701[0]) {
    case 'None': {
      const v1703 = v1701[1];
      v1702 = false;
      
      break;
      }
    case 'Some': {
      const v1704 = v1701[1];
      v1702 = true;
      
      break;
      }
    }
  const v1705 = v1700 ? v1702 : false;
  if (v1705) {
    const v1706 = v1677[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
    const v1707 = v1706[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
    const v1708 = stdlib.mul(v1707, v1317);
    const v1710 = stdlib.div(v1708, v1305);
    let v1712;
    switch (v1696[0]) {
      case 'None': {
        const v1713 = v1696[1];
        v1712 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1714 = v1696[1];
        v1712 = v1714;
        
        break;
        }
      }
    const v1715 = stdlib.mul(v1710, v1712);
    const v1716 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1690), null);
    let v1717;
    switch (v1716[0]) {
      case 'None': {
        const v1718 = v1716[1];
        v1717 = v1319;
        
        break;
        }
      case 'Some': {
        const v1719 = v1716[1];
        v1717 = v1719;
        
        break;
        }
      }
    const v1723 = stdlib.sub(v1678, v1715);
    ;
    await stdlib.mapSet(map2, v1690, undefined /* Nothing */);
    const v1726 = 'claimPaseed         ';
    null;
    const v1727 = true;
    const v1728 = await txn1.getOutput('Contributors_claimToken', 'v1727', ctc7, v1727);
    if (v573) {
      stdlib.protect(ctc0, await interact.out(v1691, v1728), {
        at: './index.rsh:197:12:application',
        fs: ['at ./index.rsh:197:12:application call to [unknown function] (defined at: ./index.rsh:197:12:function exp)', 'at ./index.rsh:203:15:application call to "notify" (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1735 = stdlib.sub(v1670, stdlib.checkedBigNumberify('./index.rsh:204:46:decimal', stdlib.UInt_max, '1'));
    const v3420 = v1735;
    const v3422 = v1677;
    const v3423 = v1723;
    const v3424 = stdlib.gt(v1735, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
    const v3425 = stdlib.gt(v1707, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
    const v3426 = v3424 ? v3425 : false;
    if (v3426) {
      return;
      }
    else {
      const v3429 = stdlib.sub(v1723, v1707);
      ;
      ;
      const v3430 = v1706[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3431 = stdlib.sub(v1707, v3430);
      const v3432 = v1706[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3433 = [v3431, v3430, v3432];
      const v3434 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3433);
      const v3435 = v3434[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3436 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3437 = stdlib.sub(v3436, v3430);
      const v3438 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3439 = v3435[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3440 = [v3438, v3437, v3439];
      const v3441 = stdlib.Array_set(v3434, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3440);
      undefined /* TokenBurn */;
      const v3442 = v3441[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3443 = v3442[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3443) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1741 = 'claimFailed         ';
    null;
    const v1742 = false;
    const v1743 = await txn1.getOutput('Contributors_claimToken', 'v1742', ctc7, v1742);
    if (v573) {
      stdlib.protect(ctc0, await interact.out(v1691, v1743), {
        at: './index.rsh:197:12:application',
        fs: ['at ./index.rsh:197:12:application call to [unknown function] (defined at: ./index.rsh:197:12:function exp)', 'at ./index.rsh:207:15:application call to "notify" (defined at: ./index.rsh:197:37:function exp)', 'at ./index.rsh:197:37:application call to [unknown function] (defined at: ./index.rsh:197:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1748 = v1677[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
    const v1749 = v1748[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
    const v3445 = v1670;
    const v3447 = v1677;
    const v3448 = v1678;
    const v3449 = stdlib.gt(v1670, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
    const v3450 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
    const v3451 = v3449 ? v3450 : false;
    if (v3451) {
      return;
      }
    else {
      const v3454 = stdlib.sub(v1678, v1749);
      ;
      ;
      const v3455 = v1748[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
      const v3456 = stdlib.sub(v1749, v3455);
      const v3457 = v1748[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3458 = [v3456, v3455, v3457];
      const v3459 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3458);
      const v3460 = v3459[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3461 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
      const v3462 = stdlib.sub(v3461, v3455);
      const v3463 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
      const v3464 = v3460[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
      const v3465 = [v3463, v3462, v3464];
      const v3466 = stdlib.Array_set(v3459, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v3465);
      undefined /* TokenBurn */;
      const v3467 = v3466[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
      const v3468 = v3467[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
      if (v3468) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  
  
  };
export async function _Contributors_contribute21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute21 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc12 = stdlib.T_Object({
    PrivateSaleAmt: ctc3,
    contract: ctc6,
    description: ctc7,
    hardCap: ctc3,
    id: ctc3,
    link: ctc8,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc9,
    tokenName: ctc10,
    tokenSymbol: ctc11,
    tokenid: ctc3
    });
  const ctc13 = stdlib.T_Token;
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc17 = stdlib.T_Tuple([ctc3]);
  
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
  
  
  const [v1237, v1239, v1242, v1249, v1298, v1305, v1311, v1316, v1317, v1318, v1319, v1320, v1326, v1327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc1, ctc12, ctc3, ctc13, ctc3, ctc3, ctc1, ctc14, ctc3, ctc3, ctc1, ctc3, ctc16, ctc3]);
  const v1339 = stdlib.protect(ctc17, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v1340 = v1339[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1342 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:115:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1342, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1239, v1242, v1249, v1298, v1305, v1311, v1316, v1317, v1318, v1319, v1320, v1326, v1327, v1339],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [v1340, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1351], secs: v1353, time: v1352, didSend: v249, from: v1350 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v1355 = v1351[stdlib.checkedBigNumberify('./index.rsh:114:8:spread', stdlib.UInt_max, '0')];
      const v1359 = stdlib.add(v1327, v1355);
      sim_r.txns.push({
        amt: v1355,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1364 = v1359;
      const v1365 = await txn1.getOutput('Contributors_contribute', 'v1364', ctc3, v1364);
      
      const v1371 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1350), null);
      let v1372;
      switch (v1371[0]) {
        case 'None': {
          const v1373 = v1371[1];
          v1372 = false;
          
          break;
          }
        case 'Some': {
          const v1374 = v1371[1];
          v1372 = true;
          
          break;
          }
        }
      if (v1372) {
        const v1375 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1350), null);
        let v1376;
        switch (v1375[0]) {
          case 'None': {
            const v1377 = v1375[1];
            v1376 = stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1378 = v1375[1];
            v1376 = v1378;
            
            break;
            }
          }
        await stdlib.simMapSet(sim_r, 1, v1350, v1376);
        const v1379 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:123:23:decimal', stdlib.UInt_max, '1'));
        const v1380 = v1239.hardCap;
        const v1381 = stdlib.add(v1317, v1355);
        const v1382 = stdlib.ge(v1381, v1380);
        const v1383 = v1382 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1384 = stdlib.eq(v1383, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3469 = v1384;
        const v3470 = v1317;
        const v3471 = v1379;
        const v3472 = v1350;
        const v3473 = v1352;
        const v3475 = v1326;
        const v3476 = v1359;
        const v3477 = stdlib.le(v1320, v1298);
        const v3478 = v3477 ? v1384 : false;
        if (v3478) {
          sim_r.isHalt = false;
          }
        else {
          const v3480 = stdlib.ge(v1317, v1380);
          const v3481 = v3480 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v3482 = stdlib.eq(v3481, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3482) {
            const v3483 = 'passed              ';
            null;
            const v3484 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
            const v3485 = stdlib.sub(v1359, v3484);
            sim_r.txns.push({
              kind: 'from',
              to: v1237,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3563 = v1239.softCap;
            const v3564 = stdlib.ge(v1317, v3563);
            if (v3564) {
              const v3565 = 'passed              ';
              null;
              const v3566 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
              const v3567 = stdlib.sub(v1359, v3566);
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3645 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v1392 = v1239.maxContribution;
        const v1393 = stdlib.gt(v1355, v1392);
        if (v1393) {
          await stdlib.simMapSet(sim_r, 0, v1350, v1350);
          await stdlib.simMapSet(sim_r, 2, v1350, null);
          await stdlib.simMapSet(sim_r, 1, v1350, v1392);
          const v1397 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '1'));
          const v1398 = stdlib.add(v1317, v1392);
          const v1399 = v1239.hardCap;
          const v1400 = stdlib.add(v1317, v1355);
          const v1401 = stdlib.ge(v1400, v1399);
          const v1402 = v1401 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v3706 = v1403;
          const v3707 = v1398;
          const v3708 = v1397;
          const v3709 = v1350;
          const v3710 = v1352;
          const v3712 = v1326;
          const v3713 = v1359;
          const v3714 = stdlib.le(v1320, v1298);
          const v3715 = v3714 ? v1403 : false;
          if (v3715) {
            sim_r.isHalt = false;
            }
          else {
            const v3717 = stdlib.ge(v1398, v1399);
            const v3718 = v3717 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v3719 = stdlib.eq(v3718, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v3719) {
              const v3720 = 'passed              ';
              null;
              const v3721 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
              const v3722 = stdlib.sub(v1359, v3721);
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3800 = v1239.softCap;
              const v3801 = stdlib.ge(v1398, v3800);
              if (v3801) {
                const v3802 = 'passed              ';
                null;
                const v3803 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
                const v3804 = stdlib.sub(v1359, v3803);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v3882 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1411 = v1239.minContribution;
          const v1412 = stdlib.lt(v1355, v1411);
          if (v1412) {
            await stdlib.simMapSet(sim_r, 0, v1350, v1350);
            await stdlib.simMapSet(sim_r, 2, v1350, null);
            await stdlib.simMapSet(sim_r, 1, v1350, v1411);
            const v1416 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:136:25:decimal', stdlib.UInt_max, '1'));
            const v1417 = stdlib.add(v1317, v1411);
            const v1418 = v1239.hardCap;
            const v1419 = stdlib.add(v1317, v1355);
            const v1420 = stdlib.ge(v1419, v1418);
            const v1421 = v1420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1422 = stdlib.eq(v1421, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v3943 = v1422;
            const v3944 = v1417;
            const v3945 = v1416;
            const v3946 = v1350;
            const v3947 = v1352;
            const v3949 = v1326;
            const v3950 = v1359;
            const v3951 = stdlib.le(v1320, v1298);
            const v3952 = v3951 ? v1422 : false;
            if (v3952) {
              sim_r.isHalt = false;
              }
            else {
              const v3954 = stdlib.ge(v1417, v1418);
              const v3955 = v3954 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v3956 = stdlib.eq(v3955, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v3956) {
                const v3957 = 'passed              ';
                null;
                const v3958 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
                const v3959 = stdlib.sub(v1359, v3958);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4037 = v1239.softCap;
                const v4038 = stdlib.ge(v1417, v4037);
                if (v4038) {
                  const v4039 = 'passed              ';
                  null;
                  const v4040 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
                  const v4041 = stdlib.sub(v1359, v4040);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1237,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4119 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}
          else {
            await stdlib.simMapSet(sim_r, 0, v1350, v1350);
            await stdlib.simMapSet(sim_r, 2, v1350, null);
            await stdlib.simMapSet(sim_r, 1, v1350, v1355);
            const v1431 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:142:25:decimal', stdlib.UInt_max, '1'));
            const v1432 = stdlib.add(v1317, v1355);
            const v1433 = v1239.hardCap;
            const v1435 = stdlib.ge(v1432, v1433);
            const v1436 = v1435 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v4180 = v1437;
            const v4181 = v1432;
            const v4182 = v1431;
            const v4183 = v1350;
            const v4184 = v1352;
            const v4186 = v1326;
            const v4187 = v1359;
            const v4188 = stdlib.le(v1320, v1298);
            const v4189 = v4188 ? v1437 : false;
            if (v4189) {
              sim_r.isHalt = false;
              }
            else {
              const v4193 = stdlib.eq(v1436, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v4193) {
                const v4194 = 'passed              ';
                null;
                const v4195 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
                const v4196 = stdlib.sub(v1359, v4195);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4274 = v1239.softCap;
                const v4275 = stdlib.ge(v1432, v4274);
                if (v4275) {
                  const v4276 = 'passed              ';
                  null;
                  const v4277 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
                  const v4278 = stdlib.sub(v1359, v4277);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1237,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4356 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc12, ctc3, ctc13, ctc3, ctc3, ctc1, ctc14, ctc3, ctc3, ctc1, ctc3, ctc16, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1351], secs: v1353, time: v1352, didSend: v249, from: v1350 } = txn1;
  undefined /* setApiDetails */;
  const v1355 = v1351[stdlib.checkedBigNumberify('./index.rsh:114:8:spread', stdlib.UInt_max, '0')];
  const v1356 = stdlib.gt(v1355, stdlib.checkedBigNumberify('./index.rsh:115:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1356, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v1359 = stdlib.add(v1327, v1355);
  ;
  const v1364 = v1359;
  const v1365 = await txn1.getOutput('Contributors_contribute', 'v1364', ctc3, v1364);
  if (v249) {
    stdlib.protect(ctc0, await interact.out(v1351, v1365), {
      at: './index.rsh:114:9:application',
      fs: ['at ./index.rsh:114:9:application call to [unknown function] (defined at: ./index.rsh:114:9:function exp)', 'at ./index.rsh:118:11:application call to "notify" (defined at: ./index.rsh:117:31:function exp)', 'at ./index.rsh:117:31:application call to [unknown function] (defined at: ./index.rsh:117:31:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v1371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1350), null);
  let v1372;
  switch (v1371[0]) {
    case 'None': {
      const v1373 = v1371[1];
      v1372 = false;
      
      break;
      }
    case 'Some': {
      const v1374 = v1371[1];
      v1372 = true;
      
      break;
      }
    }
  if (v1372) {
    const v1375 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1350), null);
    let v1376;
    switch (v1375[0]) {
      case 'None': {
        const v1377 = v1375[1];
        v1376 = stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1378 = v1375[1];
        v1376 = v1378;
        
        break;
        }
      }
    await stdlib.mapSet(map1, v1350, v1376);
    const v1379 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:123:23:decimal', stdlib.UInt_max, '1'));
    const v1380 = v1239.hardCap;
    const v1381 = stdlib.add(v1317, v1355);
    const v1382 = stdlib.ge(v1381, v1380);
    const v1383 = v1382 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v1384 = stdlib.eq(v1383, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v3469 = v1384;
    const v3470 = v1317;
    const v3471 = v1379;
    const v3472 = v1350;
    const v3473 = v1352;
    const v3475 = v1326;
    const v3476 = v1359;
    const v3477 = stdlib.le(v1320, v1298);
    const v3478 = v3477 ? v1384 : false;
    if (v3478) {
      return;
      }
    else {
      const v3480 = stdlib.ge(v1317, v1380);
      const v3481 = v3480 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v3482 = stdlib.eq(v3481, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v3482) {
        const v3483 = 'passed              ';
        null;
        const v3484 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
        const v3485 = stdlib.sub(v1359, v3484);
        ;
        return;
        }
      else {
        const v3563 = v1239.softCap;
        const v3564 = stdlib.ge(v1317, v3563);
        if (v3564) {
          const v3565 = 'passed              ';
          null;
          const v3566 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
          const v3567 = stdlib.sub(v1359, v3566);
          ;
          return;
          }
        else {
          const v3645 = 'failed              ';
          null;
          return;
          }}}}
  else {
    const v1392 = v1239.maxContribution;
    const v1393 = stdlib.gt(v1355, v1392);
    if (v1393) {
      await stdlib.mapSet(map0, v1350, v1350);
      await stdlib.mapSet(map2, v1350, null);
      await stdlib.mapSet(map1, v1350, v1392);
      const v1397 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '1'));
      const v1398 = stdlib.add(v1317, v1392);
      const v1399 = v1239.hardCap;
      const v1400 = stdlib.add(v1317, v1355);
      const v1401 = stdlib.ge(v1400, v1399);
      const v1402 = v1401 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v3706 = v1403;
      const v3707 = v1398;
      const v3708 = v1397;
      const v3709 = v1350;
      const v3710 = v1352;
      const v3712 = v1326;
      const v3713 = v1359;
      const v3714 = stdlib.le(v1320, v1298);
      const v3715 = v3714 ? v1403 : false;
      if (v3715) {
        return;
        }
      else {
        const v3717 = stdlib.ge(v1398, v1399);
        const v3718 = v3717 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v3719 = stdlib.eq(v3718, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v3719) {
          const v3720 = 'passed              ';
          null;
          const v3721 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
          const v3722 = stdlib.sub(v1359, v3721);
          ;
          return;
          }
        else {
          const v3800 = v1239.softCap;
          const v3801 = stdlib.ge(v1398, v3800);
          if (v3801) {
            const v3802 = 'passed              ';
            null;
            const v3803 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
            const v3804 = stdlib.sub(v1359, v3803);
            ;
            return;
            }
          else {
            const v3882 = 'failed              ';
            null;
            return;
            }}}}
    else {
      const v1411 = v1239.minContribution;
      const v1412 = stdlib.lt(v1355, v1411);
      if (v1412) {
        await stdlib.mapSet(map0, v1350, v1350);
        await stdlib.mapSet(map2, v1350, null);
        await stdlib.mapSet(map1, v1350, v1411);
        const v1416 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:136:25:decimal', stdlib.UInt_max, '1'));
        const v1417 = stdlib.add(v1317, v1411);
        const v1418 = v1239.hardCap;
        const v1419 = stdlib.add(v1317, v1355);
        const v1420 = stdlib.ge(v1419, v1418);
        const v1421 = v1420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1422 = stdlib.eq(v1421, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3943 = v1422;
        const v3944 = v1417;
        const v3945 = v1416;
        const v3946 = v1350;
        const v3947 = v1352;
        const v3949 = v1326;
        const v3950 = v1359;
        const v3951 = stdlib.le(v1320, v1298);
        const v3952 = v3951 ? v1422 : false;
        if (v3952) {
          return;
          }
        else {
          const v3954 = stdlib.ge(v1417, v1418);
          const v3955 = v3954 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v3956 = stdlib.eq(v3955, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3956) {
            const v3957 = 'passed              ';
            null;
            const v3958 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
            const v3959 = stdlib.sub(v1359, v3958);
            ;
            return;
            }
          else {
            const v4037 = v1239.softCap;
            const v4038 = stdlib.ge(v1417, v4037);
            if (v4038) {
              const v4039 = 'passed              ';
              null;
              const v4040 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
              const v4041 = stdlib.sub(v1359, v4040);
              ;
              return;
              }
            else {
              const v4119 = 'failed              ';
              null;
              return;
              }}}}
      else {
        await stdlib.mapSet(map0, v1350, v1350);
        await stdlib.mapSet(map2, v1350, null);
        await stdlib.mapSet(map1, v1350, v1355);
        const v1431 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:142:25:decimal', stdlib.UInt_max, '1'));
        const v1432 = stdlib.add(v1317, v1355);
        const v1433 = v1239.hardCap;
        const v1435 = stdlib.ge(v1432, v1433);
        const v1436 = v1435 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v4180 = v1437;
        const v4181 = v1432;
        const v4182 = v1431;
        const v4183 = v1350;
        const v4184 = v1352;
        const v4186 = v1326;
        const v4187 = v1359;
        const v4188 = stdlib.le(v1320, v1298);
        const v4189 = v4188 ? v1437 : false;
        if (v4189) {
          return;
          }
        else {
          const v4193 = stdlib.eq(v1436, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v4193) {
            const v4194 = 'passed              ';
            null;
            const v4195 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
            const v4196 = stdlib.sub(v1359, v4195);
            ;
            return;
            }
          else {
            const v4274 = v1239.softCap;
            const v4275 = stdlib.ge(v1432, v4274);
            if (v4275) {
              const v4276 = 'passed              ';
              null;
              const v4277 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
              const v4278 = stdlib.sub(v1359, v4277);
              ;
              return;
              }
            else {
              const v4356 = 'failed              ';
              null;
              return;
              }}}}}}
  
  
  };
export async function _Contributors_contributed26(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contributed26 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contributed26 expects to receive an interact object as its second argument.`));}
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
    Contributors_contributed0_759: ctc10,
    Contributors_creating0_759: ctc16,
    Contributors_timedOut0_759: ctc10
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
  
  
  const [v1237, v1249, v2029, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), [ctc1, ctc6, ctc9, ctc3]);
  const v2058 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:256:9:application call to [unknown function] (defined at: ./index.rsh:256:9:function exp)', 'at ./index.rsh:239:37:application call to "runContributors_contributed0_759" (defined at: ./index.rsh:256:9:function exp)', 'at ./index.rsh:239:37:application call to [unknown function] (defined at: ./index.rsh:239:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v2068 = ['Contributors_contributed0_759', v2058];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1249, v2029, v2030, v2068],
    evt_cnt: 1,
    funcNum: 18,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:256:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
      
      switch (v2088[0]) {
        case 'Contributors_contributed0_759': {
          const v2091 = v2088[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v2099 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
          const v2100 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '1')];
          const v2101 = null;
          const v2102 = await txn1.getOutput('Contributors_contributed', 'v2101', ctc0, v2101);
          
          const v2109 = 'contributed         ';
          null;
          const v4419 = v2029;
          const v4420 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_759': {
          const v2143 = v2088[1];
          
          break;
          }
        case 'Contributors_timedOut0_759': {
          const v2195 = v2088[1];
          
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
  const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
  switch (v2088[0]) {
    case 'Contributors_contributed0_759': {
      const v2091 = v2088[1];
      undefined /* setApiDetails */;
      ;
      const v2099 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
      const v2100 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '1')];
      const v2101 = null;
      const v2102 = await txn1.getOutput('Contributors_contributed', 'v2101', ctc0, v2101);
      if (v889) {
        stdlib.protect(ctc0, await interact.out(v2091, v2102), {
          at: './index.rsh:256:10:application',
          fs: ['at ./index.rsh:256:10:application call to [unknown function] (defined at: ./index.rsh:256:10:function exp)', 'at ./index.rsh:257:13:application call to "notify" (defined at: ./index.rsh:256:60:function exp)', 'at ./index.rsh:256:60:application call to [unknown function] (defined at: ./index.rsh:256:60:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v2109 = 'contributed         ';
      null;
      const v4419 = v2029;
      const v4420 = v2030;
      return;
      
      break;
      }
    case 'Contributors_creating0_759': {
      const v2143 = v2088[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_759': {
      const v2195 = v2088[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_creating26(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_creating26 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_creating26 expects to receive an interact object as its second argument.`));}
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
    Contributors_contributed0_759: ctc16,
    Contributors_creating0_759: ctc15,
    Contributors_timedOut0_759: ctc16
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
  
  
  const [v1237, v1249, v2029, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), [ctc1, ctc6, ctc9, ctc3]);
  const v2035 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:242:9:application call to [unknown function] (defined at: ./index.rsh:242:9:function exp)', 'at ./index.rsh:239:37:application call to "runContributors_creating0_759" (defined at: ./index.rsh:242:9:function exp)', 'at ./index.rsh:239:37:application call to [unknown function] (defined at: ./index.rsh:239:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v2054 = ['Contributors_creating0_759', v2035];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1249, v2029, v2030, v2054],
    evt_cnt: 1,
    funcNum: 18,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
      
      switch (v2088[0]) {
        case 'Contributors_contributed0_759': {
          const v2091 = v2088[1];
          
          break;
          }
        case 'Contributors_creating0_759': {
          const v2143 = v2088[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v2163 = v2143[stdlib.checkedBigNumberify('./index.rsh:242:9:spread', stdlib.UInt_max, '0')];
          const v2164 = null;
          const v2165 = await txn1.getOutput('Contributors_creating', 'v2164', ctc0, v2164);
          
          const v2177 = v2163.id;
          const v2178 = v2163.title;
          const v2179 = v2163.link;
          const v2180 = v2163.description;
          const v2181 = v2163.owner;
          const v2182 = v2163.contractInfo;
          null;
          const v4503 = v2029;
          const v4504 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_759': {
          const v2195 = v2088[1];
          
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
  const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
  switch (v2088[0]) {
    case 'Contributors_contributed0_759': {
      const v2091 = v2088[1];
      return;
      break;
      }
    case 'Contributors_creating0_759': {
      const v2143 = v2088[1];
      undefined /* setApiDetails */;
      ;
      const v2163 = v2143[stdlib.checkedBigNumberify('./index.rsh:242:9:spread', stdlib.UInt_max, '0')];
      const v2164 = null;
      const v2165 = await txn1.getOutput('Contributors_creating', 'v2164', ctc0, v2164);
      if (v889) {
        stdlib.protect(ctc0, await interact.out(v2143, v2165), {
          at: './index.rsh:242:10:application',
          fs: ['at ./index.rsh:242:10:application call to [unknown function] (defined at: ./index.rsh:242:10:function exp)', 'at ./index.rsh:243:13:application call to "notify" (defined at: ./index.rsh:242:47:function exp)', 'at ./index.rsh:242:47:application call to [unknown function] (defined at: ./index.rsh:242:47:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v2177 = v2163.id;
      const v2178 = v2163.title;
      const v2179 = v2163.link;
      const v2180 = v2163.description;
      const v2181 = v2163.owner;
      const v2182 = v2163.contractInfo;
      null;
      const v4503 = v2029;
      const v4504 = v2030;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_759': {
      const v2195 = v2088[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Contributors_timedOut26(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut26 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_timedOut26 expects to receive an interact object as its second argument.`));}
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
    Contributors_contributed0_759: ctc10,
    Contributors_creating0_759: ctc16,
    Contributors_timedOut0_759: ctc10
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
  
  
  const [v1237, v1249, v2029, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), [ctc1, ctc6, ctc9, ctc3]);
  const v2072 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:263:9:application call to [unknown function] (defined at: ./index.rsh:263:9:function exp)', 'at ./index.rsh:239:37:application call to "runContributors_timedOut0_759" (defined at: ./index.rsh:263:9:function exp)', 'at ./index.rsh:239:37:application call to [unknown function] (defined at: ./index.rsh:239:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v2082 = ['Contributors_timedOut0_759', v2072];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1237, v1249, v2029, v2030, v2082],
    evt_cnt: 1,
    funcNum: 18,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:263:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
      
      switch (v2088[0]) {
        case 'Contributors_contributed0_759': {
          const v2091 = v2088[1];
          
          break;
          }
        case 'Contributors_creating0_759': {
          const v2143 = v2088[1];
          
          break;
          }
        case 'Contributors_timedOut0_759': {
          const v2195 = v2088[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v2236 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '0')];
          const v2237 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '1')];
          const v2238 = null;
          const v2239 = await txn1.getOutput('Contributors_timedOut', 'v2238', ctc0, v2238);
          
          const v2246 = 'timedOut            ';
          null;
          const v4587 = v2029;
          const v4588 = v2030;
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
  const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn1;
  switch (v2088[0]) {
    case 'Contributors_contributed0_759': {
      const v2091 = v2088[1];
      return;
      break;
      }
    case 'Contributors_creating0_759': {
      const v2143 = v2088[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_759': {
      const v2195 = v2088[1];
      undefined /* setApiDetails */;
      ;
      const v2236 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '0')];
      const v2237 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '1')];
      const v2238 = null;
      const v2239 = await txn1.getOutput('Contributors_timedOut', 'v2238', ctc0, v2238);
      if (v889) {
        stdlib.protect(ctc0, await interact.out(v2195, v2239), {
          at: './index.rsh:263:10:application',
          fs: ['at ./index.rsh:263:10:application call to [unknown function] (defined at: ./index.rsh:263:10:function exp)', 'at ./index.rsh:264:13:application call to "notify" (defined at: ./index.rsh:263:57:function exp)', 'at ./index.rsh:263:57:application call to [unknown function] (defined at: ./index.rsh:263:57:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v2246 = 'timedOut            ';
      null;
      const v4587 = v2029;
      const v4588 = v2030;
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
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc12 = stdlib.T_Object({
    PrivateSaleAmt: ctc3,
    contract: ctc6,
    description: ctc7,
    hardCap: ctc3,
    id: ctc3,
    link: ctc8,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    softCap: ctc3,
    title: ctc9,
    tokenName: ctc10,
    tokenSymbol: ctc11,
    tokenid: ctc3
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Token;
  const ctc15 = stdlib.T_Tuple([ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc13]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc20 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc21 = stdlib.T_Struct([['id', ctc3], ['title', ctc9], ['link', ctc8], ['description', ctc7], ['owner', ctc1], ['contractInfo', ctc20]]);
  const ctc22 = stdlib.T_Tuple([ctc21]);
  const ctc23 = stdlib.T_Data({
    Contributors_contributed0_759: ctc19,
    Contributors_creating0_759: ctc22,
    Contributors_timedOut0_759: ctc19
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
  
  
  const v1207 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1208 = [v1207];
  const v1219 = stdlib.protect(ctc12, interact.getProject, 'for Deployer\'s interact field getProject');
  const v1234 = stdlib.protect(ctc13, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1234, v1219],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:78:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13, ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1238, v1239], secs: v1241, time: v1240, didSend: v58, from: v1237 } = txn1;
      
      ;
      const v1242 = v1239.id;
      const v1243 = 'created             ';
      null;
      const v1244 = v1239.tokenName;
      const v1245 = v1239.tokenSymbol;
      const v1246 = '                                                                                                ';
      const v1247 = '                                ';
      const v1248 = stdlib.simTokenNew(sim_r, v1244, v1245, v1246, v1247, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1249 = await txn1.getOutput('internal', 'v1248', ctc14, v1248);
      const v1259 = v1208[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
      const v1261 = v1259[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '1')];
      const v1262 = v1259[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '2')];
      const v1263 = [stdlib.UInt_max, v1261, v1262];
      const v1264 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1263);
      const v1266 = v1264[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
      const v1267 = v1266[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
      const v1269 = v1266[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '2')];
      const v1270 = [v1267, stdlib.UInt_max, v1269];
      const v1271 = stdlib.Array_set(v1264, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1270);
      const v1272 = v1271[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
      const v1273 = v1272[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
      const v1274 = v1272[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '1')];
      const v1276 = [v1273, v1274, false];
      const v1277 = stdlib.Array_set(v1271, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1276);
      const v1278 = v1239.tokenid;
      const v1279 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1238, v1239], secs: v1241, time: v1240, didSend: v58, from: v1237 } = txn1;
  ;
  const v1242 = v1239.id;
  const v1243 = 'created             ';
  null;
  const v1244 = v1239.tokenName;
  const v1245 = v1239.tokenSymbol;
  const v1246 = '                                                                                                ';
  const v1247 = '                                ';
  const v1248 = undefined /* TokenNew */;
  const v1249 = await txn1.getOutput('internal', 'v1248', ctc14, v1248);
  const v1259 = v1208[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
  const v1261 = v1259[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '1')];
  const v1262 = v1259[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '2')];
  const v1263 = [stdlib.UInt_max, v1261, v1262];
  const v1264 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1263);
  const v1266 = v1264[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
  const v1267 = v1266[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
  const v1269 = v1266[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '2')];
  const v1270 = [v1267, stdlib.UInt_max, v1269];
  const v1271 = stdlib.Array_set(v1264, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1270);
  const v1272 = v1271[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
  const v1273 = v1272[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0')];
  const v1274 = v1272[stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '1')];
  const v1276 = [v1273, v1274, false];
  const v1277 = stdlib.Array_set(v1271, stdlib.checkedBigNumberify('./index.rsh:83:24:application', stdlib.UInt_max, '0'), v1276);
  const v1278 = v1239.tokenid;
  const v1279 = 'tokenCreated        ';
  null;
  const v1280 = v1277[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '0')];
  const v1281 = v1280[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1237, v1238, v1239, v1242, v1249, v1277],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1240,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '0'), [[v1281, v1249]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1284, time: v1283, didSend: v89, from: v1282 } = txn2;
      
      const v1285 = v1277[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '0')];
      const v1286 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '1')];
      ;
      const v1288 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '0')];
      const v1289 = stdlib.add(v1288, v1286);
      const v1293 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '2')];
      const v1294 = [v1289, v1286, v1293];
      const v1295 = stdlib.Array_set(v1277, stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '0'), v1294);
      sim_r.txns.push({
        amt: v1286,
        kind: 'to',
        tok: v1249
        });
      if (v1238) {
        const v1298 = stdlib.add(v1283, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        }
      else {
        const v2022 = true;
        const v2023 = v1283;
        const v2029 = v1295;
        const v2030 = stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v2022;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v2247 = v2029[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v2248 = v2247[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v2252 = stdlib.sub(v2030, v2248);
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v2259 = v2247[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v2265 = stdlib.sub(v2248, v2259);
          const v2269 = v2247[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v2270 = [v2265, v2259, v2269];
          const v2271 = stdlib.Array_set(v2029, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v2270);
          const v2272 = v2271[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v2274 = stdlib.sub(v2273, v2259);
          const v2276 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v2278 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v2279 = [v2276, v2274, v2278];
          const v2280 = stdlib.Array_set(v2271, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v2279);
          stdlib.simTokenBurn(sim_r, v1249, v2259);
          const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v2282 = v2281[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v2282) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1249);
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
    tys: [ctc1, ctc13, ctc12, ctc3, ctc14, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1284, time: v1283, didSend: v89, from: v1282 } = txn2;
  const v1285 = v1277[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '0')];
  const v1286 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:38:application', stdlib.UInt_max, '1')];
  ;
  const v1288 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '0')];
  const v1289 = stdlib.add(v1288, v1286);
  const v1293 = v1285[stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '2')];
  const v1294 = [v1289, v1286, v1293];
  const v1295 = stdlib.Array_set(v1277, stdlib.checkedBigNumberify('./index.rsh:87:11:dot', stdlib.UInt_max, '0'), v1294);
  ;
  const v1296 = stdlib.addressEq(v1237, v1282);
  stdlib.assert(v1296, {
    at: './index.rsh:87:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v1238) {
    const v1298 = stdlib.add(v1283, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn3 = await (ctc.sendrecv({
      args: [v1237, v1239, v1242, v1249, v1283, v1295, v1298],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1283,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1301, time: v1300, didSend: v96, from: v1299 } = txn3;
        
        ;
        const v1303 = v1295[stdlib.checkedBigNumberify('./index.rsh:94:13:application', stdlib.UInt_max, '0')];
        const v1304 = v1303[stdlib.checkedBigNumberify('./index.rsh:94:13:application', stdlib.UInt_max, '0')];
        const v1305 = v1239.PrivateSaleAmt;
        const v1306 = stdlib.gt(v1304, v1305);
        if (v1306) {
          const v1310 = stdlib.sub(v1304, v1305);
          const v1311 = v1239.owner;
          const v1315 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1310);
          sim_r.txns.push({
            kind: 'from',
            to: v1311,
            tok: undefined /* Nothing */
            });
          const v1316 = true;
          const v1317 = stdlib.checkedBigNumberify('./index.rsh:111:22:decimal', stdlib.UInt_max, '0');
          const v1318 = stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, '0');
          const v1319 = v1237;
          const v1320 = v1300;
          const v1321 = v1283;
          const v1326 = v1295;
          const v1327 = v1315;
          
          if (await (async () => {
            const v1331 = stdlib.le(v1321, v1298);
            const v1332 = v1331 ? v1316 : false;
            
            return v1332;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1451 = v1239.hardCap;
            const v1452 = stdlib.ge(v1317, v1451);
            const v1453 = v1452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1454 = stdlib.eq(v1453, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1454) {
              const v1456 = 'passed              ';
              null;
              const v1458 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
              const v1462 = stdlib.sub(v1327, v1458);
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1636 = v1239.softCap;
              const v1637 = stdlib.ge(v1317, v1636);
              if (v1637) {
                const v1639 = 'passed              ';
                null;
                const v1641 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
                const v1645 = stdlib.sub(v1327, v1641);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v1820 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1969 = v1239.owner;
          const v1973 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1304);
          sim_r.txns.push({
            kind: 'from',
            to: v1969,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1237,
            tok: undefined /* Nothing */
            });
          const v1980 = v1303[stdlib.checkedBigNumberify('./index.rsh:99:26:application', stdlib.UInt_max, '1')];
          stdlib.simTokenBurn(sim_r, v1249, v1980);
          stdlib.simTokenDestroy(sim_r, v1249);
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
      tys: [ctc1, ctc12, ctc3, ctc14, ctc3, ctc17, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1301, time: v1300, didSend: v96, from: v1299 } = txn3;
    ;
    const v1302 = stdlib.addressEq(v1237, v1299);
    stdlib.assert(v1302, {
      at: './index.rsh:93:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1303 = v1295[stdlib.checkedBigNumberify('./index.rsh:94:13:application', stdlib.UInt_max, '0')];
    const v1304 = v1303[stdlib.checkedBigNumberify('./index.rsh:94:13:application', stdlib.UInt_max, '0')];
    const v1305 = v1239.PrivateSaleAmt;
    const v1306 = stdlib.gt(v1304, v1305);
    if (v1306) {
      const v1310 = stdlib.sub(v1304, v1305);
      const v1311 = v1239.owner;
      const v1315 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1310);
      ;
      let v1316 = true;
      let v1317 = stdlib.checkedBigNumberify('./index.rsh:111:22:decimal', stdlib.UInt_max, '0');
      let v1318 = stdlib.checkedBigNumberify('./index.rsh:111:19:decimal', stdlib.UInt_max, '0');
      let v1319 = v1237;
      let v1320 = v1300;
      let v1321 = v1283;
      let v1326 = v1295;
      let v1327 = v1315;
      
      while (await (async () => {
        const v1331 = stdlib.le(v1321, v1298);
        const v1332 = v1331 ? v1316 : false;
        
        return v1332;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 15,
          out_tys: [ctc15],
          timeoutAt: ['time', v1298],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v1237, v1239, v1242, v1249, v1298, v1305, v1311, v1316, v1317, v1318, v1319, v1320, v1326, v1327],
            evt_cnt: 0,
            funcNum: 16,
            lct: v1320,
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
              
              const {data: [], secs: v1447, time: v1446, didSend: v361, from: v1445 } = txn5;
              
              ;
              const cv1316 = v1316;
              const cv1317 = v1317;
              const cv1318 = v1318;
              const cv1319 = v1319;
              const cv1320 = v1446;
              const cv1321 = v1320;
              const cv1326 = v1326;
              const cv1327 = v1327;
              
              await (async () => {
                const v1316 = cv1316;
                const v1317 = cv1317;
                const v1318 = cv1318;
                const v1319 = cv1319;
                const v1320 = cv1320;
                const v1321 = cv1321;
                const v1326 = cv1326;
                const v1327 = cv1327;
                
                if (await (async () => {
                  const v1331 = stdlib.le(v1321, v1298);
                  const v1332 = v1331 ? v1316 : false;
                  
                  return v1332;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1451 = v1239.hardCap;
                  const v1452 = stdlib.ge(v1317, v1451);
                  const v1453 = v1452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v1454 = stdlib.eq(v1453, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  if (v1454) {
                    const v1456 = 'passed              ';
                    null;
                    const v1458 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
                    const v1462 = stdlib.sub(v1327, v1458);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1237,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1636 = v1239.softCap;
                    const v1637 = stdlib.ge(v1317, v1636);
                    if (v1637) {
                      const v1639 = 'passed              ';
                      null;
                      const v1641 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
                      const v1645 = stdlib.sub(v1327, v1641);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1237,
                        tok: undefined /* Nothing */
                        });
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1820 = 'failed              ';
                      null;
                      sim_r.isHalt = false;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc12, ctc3, ctc14, ctc3, ctc3, ctc1, ctc13, ctc3, ctc3, ctc1, ctc3, ctc17, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1447, time: v1446, didSend: v361, from: v1445 } = txn5;
          ;
          const v1448 = stdlib.addressEq(v1237, v1445);
          stdlib.assert(v1448, {
            at: './index.rsh:148:14:dot',
            fs: ['at ./index.rsh:147:34:application call to [unknown function] (defined at: ./index.rsh:147:34:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const cv1316 = v1316;
          const cv1317 = v1317;
          const cv1318 = v1318;
          const cv1319 = v1319;
          const cv1320 = v1446;
          const cv1321 = v1320;
          const cv1326 = v1326;
          const cv1327 = v1327;
          
          v1316 = cv1316;
          v1317 = cv1317;
          v1318 = cv1318;
          v1319 = cv1319;
          v1320 = cv1320;
          v1321 = cv1321;
          v1326 = cv1326;
          v1327 = cv1327;
          
          continue;
          }
        else {
          const {data: [v1351], secs: v1353, time: v1352, didSend: v249, from: v1350 } = txn4;
          undefined /* setApiDetails */;
          const v1355 = v1351[stdlib.checkedBigNumberify('./index.rsh:114:8:spread', stdlib.UInt_max, '0')];
          const v1356 = stdlib.gt(v1355, stdlib.checkedBigNumberify('./index.rsh:115:17:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1356, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:115:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)', 'at ./index.rsh:114:40:application call to [unknown function] (defined at: ./index.rsh:114:40:function exp)'],
            msg: 'Contribution too small',
            who: 'Deployer'
            });
          const v1359 = stdlib.add(v1327, v1355);
          ;
          const v1364 = v1359;
          await txn4.getOutput('Contributors_contribute', 'v1364', ctc3, v1364);
          const v1371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1350), null);
          let v1372;
          switch (v1371[0]) {
            case 'None': {
              const v1373 = v1371[1];
              v1372 = false;
              
              break;
              }
            case 'Some': {
              const v1374 = v1371[1];
              v1372 = true;
              
              break;
              }
            }
          if (v1372) {
            const v1375 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1350), null);
            let v1376;
            switch (v1375[0]) {
              case 'None': {
                const v1377 = v1375[1];
                v1376 = stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1378 = v1375[1];
                v1376 = v1378;
                
                break;
                }
              }
            await stdlib.mapSet(map1, v1350, v1376);
            const v1379 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:123:23:decimal', stdlib.UInt_max, '1'));
            const v1380 = v1239.hardCap;
            const v1381 = stdlib.add(v1317, v1355);
            const v1382 = stdlib.ge(v1381, v1380);
            const v1383 = v1382 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1384 = stdlib.eq(v1383, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv1316 = v1384;
            const cv1317 = v1317;
            const cv1318 = v1379;
            const cv1319 = v1350;
            const cv1320 = v1352;
            const cv1321 = v1320;
            const cv1326 = v1326;
            const cv1327 = v1359;
            
            v1316 = cv1316;
            v1317 = cv1317;
            v1318 = cv1318;
            v1319 = cv1319;
            v1320 = cv1320;
            v1321 = cv1321;
            v1326 = cv1326;
            v1327 = cv1327;
            
            continue;}
          else {
            const v1392 = v1239.maxContribution;
            const v1393 = stdlib.gt(v1355, v1392);
            if (v1393) {
              await stdlib.mapSet(map0, v1350, v1350);
              await stdlib.mapSet(map2, v1350, null);
              await stdlib.mapSet(map1, v1350, v1392);
              const v1397 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:130:25:decimal', stdlib.UInt_max, '1'));
              const v1398 = stdlib.add(v1317, v1392);
              const v1399 = v1239.hardCap;
              const v1400 = stdlib.add(v1317, v1355);
              const v1401 = stdlib.ge(v1400, v1399);
              const v1402 = v1401 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v1403 = stdlib.eq(v1402, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const cv1316 = v1403;
              const cv1317 = v1398;
              const cv1318 = v1397;
              const cv1319 = v1350;
              const cv1320 = v1352;
              const cv1321 = v1320;
              const cv1326 = v1326;
              const cv1327 = v1359;
              
              v1316 = cv1316;
              v1317 = cv1317;
              v1318 = cv1318;
              v1319 = cv1319;
              v1320 = cv1320;
              v1321 = cv1321;
              v1326 = cv1326;
              v1327 = cv1327;
              
              continue;}
            else {
              const v1411 = v1239.minContribution;
              const v1412 = stdlib.lt(v1355, v1411);
              if (v1412) {
                await stdlib.mapSet(map0, v1350, v1350);
                await stdlib.mapSet(map2, v1350, null);
                await stdlib.mapSet(map1, v1350, v1411);
                const v1416 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:136:25:decimal', stdlib.UInt_max, '1'));
                const v1417 = stdlib.add(v1317, v1411);
                const v1418 = v1239.hardCap;
                const v1419 = stdlib.add(v1317, v1355);
                const v1420 = stdlib.ge(v1419, v1418);
                const v1421 = v1420 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1422 = stdlib.eq(v1421, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1316 = v1422;
                const cv1317 = v1417;
                const cv1318 = v1416;
                const cv1319 = v1350;
                const cv1320 = v1352;
                const cv1321 = v1320;
                const cv1326 = v1326;
                const cv1327 = v1359;
                
                v1316 = cv1316;
                v1317 = cv1317;
                v1318 = cv1318;
                v1319 = cv1319;
                v1320 = cv1320;
                v1321 = cv1321;
                v1326 = cv1326;
                v1327 = cv1327;
                
                continue;}
              else {
                await stdlib.mapSet(map0, v1350, v1350);
                await stdlib.mapSet(map2, v1350, null);
                await stdlib.mapSet(map1, v1350, v1355);
                const v1431 = stdlib.add(v1318, stdlib.checkedBigNumberify('./index.rsh:142:25:decimal', stdlib.UInt_max, '1'));
                const v1432 = stdlib.add(v1317, v1355);
                const v1433 = v1239.hardCap;
                const v1435 = stdlib.ge(v1432, v1433);
                const v1436 = v1435 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1437 = stdlib.eq(v1436, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1316 = v1437;
                const cv1317 = v1432;
                const cv1318 = v1431;
                const cv1319 = v1350;
                const cv1320 = v1352;
                const cv1321 = v1320;
                const cv1326 = v1326;
                const cv1327 = v1359;
                
                v1316 = cv1316;
                v1317 = cv1317;
                v1318 = cv1318;
                v1319 = cv1319;
                v1320 = cv1320;
                v1321 = cv1321;
                v1326 = cv1326;
                v1327 = cv1327;
                
                continue;}}}}
        
        }
      const v1451 = v1239.hardCap;
      const v1452 = stdlib.ge(v1317, v1451);
      const v1453 = v1452 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1454 = stdlib.eq(v1453, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1454) {
        const v1456 = 'passed              ';
        null;
        const v1458 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '100'));
        const v1462 = stdlib.sub(v1327, v1458);
        ;
        const txn4 = await (ctc.sendrecv({
          args: [v1237, v1242, v1249, v1305, v1311, v1317, v1318, v1319, v1326, v1462],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1320,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1465, time: v1464, didSend: v380, from: v1463 } = txn4;
            
            ;
            const v1472 = stdlib.sub(v1462, v1462);
            sim_r.txns.push({
              kind: 'from',
              to: v1311,
              tok: undefined /* Nothing */
              });
            const v1473 = v1326[stdlib.checkedBigNumberify('./index.rsh:159:21:application', stdlib.UInt_max, '0')];
            const v1474 = v1473[stdlib.checkedBigNumberify('./index.rsh:159:21:application', stdlib.UInt_max, '0')];
            const v1475 = stdlib.div(v1474, stdlib.checkedBigNumberify('./index.rsh:159:34:decimal', stdlib.UInt_max, '100'));
            const v1479 = stdlib.sub(v1472, v1475);
            sim_r.txns.push({
              kind: 'from',
              to: v1237,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc3, ctc14, ctc3, ctc1, ctc3, ctc3, ctc1, ctc17, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1465, time: v1464, didSend: v380, from: v1463 } = txn4;
        ;
        const v1466 = stdlib.addressEq(v1237, v1463);
        stdlib.assert(v1466, {
          at: './index.rsh:156:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1472 = stdlib.sub(v1462, v1462);
        ;
        const v1473 = v1326[stdlib.checkedBigNumberify('./index.rsh:159:21:application', stdlib.UInt_max, '0')];
        const v1474 = v1473[stdlib.checkedBigNumberify('./index.rsh:159:21:application', stdlib.UInt_max, '0')];
        const v1475 = stdlib.div(v1474, stdlib.checkedBigNumberify('./index.rsh:159:34:decimal', stdlib.UInt_max, '100'));
        const v1479 = stdlib.sub(v1472, v1475);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1237, v1242, v1249, v1305, v1317, v1318, v1319, v1326, v1474, v1479],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1464,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1482, time: v1481, didSend: v397, from: v1480 } = txn5;
            
            ;
            const v1486 = v1474;
            const v1487 = v1318;
            const v1488 = v1481;
            const v1494 = v1326;
            const v1495 = v1479;
            
            if (await (async () => {
              const v1499 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
              const v1500 = stdlib.gt(v1486, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
              const v1501 = v1499 ? v1500 : false;
              
              return v1501;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1571 = v1494[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
              const v1572 = v1571[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
              const v1576 = stdlib.sub(v1495, v1572);
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              const v1583 = v1571[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
              const v1589 = stdlib.sub(v1572, v1583);
              const v1593 = v1571[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
              const v1594 = [v1589, v1583, v1593];
              const v1595 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1594);
              const v1596 = v1595[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
              const v1597 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
              const v1598 = stdlib.sub(v1597, v1583);
              const v1600 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
              const v1602 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
              const v1603 = [v1600, v1598, v1602];
              const v1604 = stdlib.Array_set(v1595, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1603);
              stdlib.simTokenBurn(sim_r, v1249, v1583);
              const v1605 = v1604[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
              const v1606 = v1605[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
              if (v1606) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1249);
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
          tys: [ctc1, ctc3, ctc14, ctc3, ctc3, ctc3, ctc1, ctc17, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1482, time: v1481, didSend: v397, from: v1480 } = txn5;
        ;
        const v1483 = stdlib.addressEq(v1237, v1480);
        stdlib.assert(v1483, {
          at: './index.rsh:163:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1486 = v1474;
        let v1487 = v1318;
        let v1488 = v1481;
        let v1494 = v1326;
        let v1495 = v1479;
        
        while (await (async () => {
          const v1499 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:166:26:decimal', stdlib.UInt_max, '0'));
          const v1500 = stdlib.gt(v1486, stdlib.checkedBigNumberify('./index.rsh:166:51:decimal', stdlib.UInt_max, '0'));
          const v1501 = v1499 ? v1500 : false;
          
          return v1501;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 7,
            out_tys: [ctc18],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1508], secs: v1510, time: v1509, didSend: v435, from: v1507 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v1513 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1507), null);
          let v1514;
          switch (v1513[0]) {
            case 'None': {
              const v1515 = v1513[1];
              v1514 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1516 = v1513[1];
              v1514 = v1516;
              
              break;
              }
            }
          const v1517 = stdlib.ge(v1495, v1514);
          const v1518 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1507), null);
          let v1519;
          switch (v1518[0]) {
            case 'None': {
              const v1520 = v1518[1];
              v1519 = false;
              
              break;
              }
            case 'Some': {
              const v1521 = v1518[1];
              v1519 = true;
              
              break;
              }
            }
          const v1522 = v1517 ? v1519 : false;
          if (v1522) {
            const v1523 = v1494[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
            const v1524 = v1523[stdlib.checkedBigNumberify('./index.rsh:169:23:application', stdlib.UInt_max, '0')];
            const v1525 = stdlib.mul(v1524, v1317);
            const v1527 = stdlib.div(v1525, v1305);
            let v1529;
            switch (v1513[0]) {
              case 'None': {
                const v1530 = v1513[1];
                v1529 = stdlib.checkedBigNumberify('./index.rsh:161:51:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1531 = v1513[1];
                v1529 = v1531;
                
                break;
                }
              }
            const v1532 = stdlib.mul(v1527, v1529);
            const v1533 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1507), null);
            let v1534;
            switch (v1533[0]) {
              case 'None': {
                const v1535 = v1533[1];
                v1534 = v1319;
                
                break;
                }
              case 'Some': {
                const v1536 = v1533[1];
                v1534 = v1536;
                
                break;
                }
              }
            const v1540 = stdlib.sub(v1495, v1532);
            ;
            await stdlib.mapSet(map2, v1507, undefined /* Nothing */);
            const v1543 = 'claimPassed         ';
            null;
            const v1544 = true;
            await txn6.getOutput('Contributors_claimToken', 'v1544', ctc13, v1544);
            const v1550 = stdlib.sub(v1487, stdlib.checkedBigNumberify('./index.rsh:174:29:decimal', stdlib.UInt_max, '1'));
            const cv1486 = v1550;
            const cv1487 = v1524;
            const cv1488 = v1509;
            const cv1494 = v1494;
            const cv1495 = v1540;
            
            v1486 = cv1486;
            v1487 = cv1487;
            v1488 = cv1488;
            v1494 = cv1494;
            v1495 = cv1495;
            
            continue;}
          else {
            const v1558 = 'claimFailed         ';
            null;
            const v1559 = false;
            await txn6.getOutput('Contributors_claimToken', 'v1559', ctc13, v1559);
            const v1565 = v1494[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
            const v1566 = v1565[stdlib.checkedBigNumberify('./index.rsh:178:35:application', stdlib.UInt_max, '0')];
            const cv1486 = v1487;
            const cv1487 = v1566;
            const cv1488 = v1509;
            const cv1494 = v1494;
            const cv1495 = v1495;
            
            v1486 = cv1486;
            v1487 = cv1487;
            v1488 = cv1488;
            v1494 = cv1494;
            v1495 = cv1495;
            
            continue;}
          
          }
        const v1571 = v1494[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
        const v1572 = v1571[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
        const v1576 = stdlib.sub(v1495, v1572);
        ;
        ;
        const v1583 = v1571[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
        const v1589 = stdlib.sub(v1572, v1583);
        const v1593 = v1571[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
        const v1594 = [v1589, v1583, v1593];
        const v1595 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1594);
        const v1596 = v1595[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
        const v1597 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
        const v1598 = stdlib.sub(v1597, v1583);
        const v1600 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
        const v1602 = v1596[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
        const v1603 = [v1600, v1598, v1602];
        const v1604 = stdlib.Array_set(v1595, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1603);
        undefined /* TokenBurn */;
        const v1605 = v1604[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
        const v1606 = v1605[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
        if (v1606) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }
        
        
        
        }
      else {
        const v1636 = v1239.softCap;
        const v1637 = stdlib.ge(v1317, v1636);
        if (v1637) {
          const v1639 = 'passed              ';
          null;
          const v1641 = stdlib.div(v1327, stdlib.checkedBigNumberify('./index.rsh:184:32:decimal', stdlib.UInt_max, '100'));
          const v1645 = stdlib.sub(v1327, v1641);
          ;
          const txn4 = await (ctc.sendrecv({
            args: [v1237, v1242, v1249, v1305, v1311, v1317, v1318, v1319, v1326, v1645],
            evt_cnt: 0,
            funcNum: 8,
            lct: v1320,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:186:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1648, time: v1647, didSend: v518, from: v1646 } = txn4;
              
              ;
              const v1655 = stdlib.sub(v1645, v1645);
              sim_r.txns.push({
                kind: 'from',
                to: v1311,
                tok: undefined /* Nothing */
                });
              const v1656 = v1326[stdlib.checkedBigNumberify('./index.rsh:189:23:application', stdlib.UInt_max, '0')];
              const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:189:23:application', stdlib.UInt_max, '0')];
              const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:189:36:decimal', stdlib.UInt_max, '100'));
              const v1662 = stdlib.sub(v1655, v1658);
              sim_r.txns.push({
                kind: 'from',
                to: v1237,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc3, ctc14, ctc3, ctc1, ctc3, ctc3, ctc1, ctc17, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1648, time: v1647, didSend: v518, from: v1646 } = txn4;
          ;
          const v1649 = stdlib.addressEq(v1237, v1646);
          stdlib.assert(v1649, {
            at: './index.rsh:186:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1655 = stdlib.sub(v1645, v1645);
          ;
          const v1656 = v1326[stdlib.checkedBigNumberify('./index.rsh:189:23:application', stdlib.UInt_max, '0')];
          const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:189:23:application', stdlib.UInt_max, '0')];
          const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:189:36:decimal', stdlib.UInt_max, '100'));
          const v1662 = stdlib.sub(v1655, v1658);
          ;
          const txn5 = await (ctc.sendrecv({
            args: [v1237, v1242, v1249, v1305, v1317, v1318, v1319, v1326, v1657, v1662],
            evt_cnt: 0,
            funcNum: 9,
            lct: v1647,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:193:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1665, time: v1664, didSend: v535, from: v1663 } = txn5;
              
              ;
              const v1669 = v1657;
              const v1670 = v1318;
              const v1671 = v1664;
              const v1677 = v1326;
              const v1678 = v1662;
              
              if (await (async () => {
                const v1682 = stdlib.gt(v1670, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
                const v1683 = stdlib.gt(v1669, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
                const v1684 = v1682 ? v1683 : false;
                
                return v1684;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1754 = v1677[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
                const v1755 = v1754[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
                const v1759 = stdlib.sub(v1678, v1755);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                const v1766 = v1754[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
                const v1772 = stdlib.sub(v1755, v1766);
                const v1776 = v1754[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
                const v1777 = [v1772, v1766, v1776];
                const v1778 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1777);
                const v1779 = v1778[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
                const v1780 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
                const v1781 = stdlib.sub(v1780, v1766);
                const v1783 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
                const v1785 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
                const v1786 = [v1783, v1781, v1785];
                const v1787 = stdlib.Array_set(v1778, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1786);
                stdlib.simTokenBurn(sim_r, v1249, v1766);
                const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
                const v1789 = v1788[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
                if (v1789) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1249);
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
            tys: [ctc1, ctc3, ctc14, ctc3, ctc3, ctc3, ctc1, ctc17, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1665, time: v1664, didSend: v535, from: v1663 } = txn5;
          ;
          const v1666 = stdlib.addressEq(v1237, v1663);
          stdlib.assert(v1666, {
            at: './index.rsh:193:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1669 = v1657;
          let v1670 = v1318;
          let v1671 = v1664;
          let v1677 = v1326;
          let v1678 = v1662;
          
          while (await (async () => {
            const v1682 = stdlib.gt(v1670, stdlib.checkedBigNumberify('./index.rsh:196:28:decimal', stdlib.UInt_max, '0'));
            const v1683 = stdlib.gt(v1669, stdlib.checkedBigNumberify('./index.rsh:196:53:decimal', stdlib.UInt_max, '0'));
            const v1684 = v1682 ? v1683 : false;
            
            return v1684;})()) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 11,
              out_tys: [ctc18],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1691], secs: v1693, time: v1692, didSend: v573, from: v1690 } = txn6;
            undefined /* setApiDetails */;
            ;
            const v1696 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1690), null);
            let v1697;
            switch (v1696[0]) {
              case 'None': {
                const v1698 = v1696[1];
                v1697 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1699 = v1696[1];
                v1697 = v1699;
                
                break;
                }
              }
            const v1700 = stdlib.ge(v1678, v1697);
            const v1701 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1690), null);
            let v1702;
            switch (v1701[0]) {
              case 'None': {
                const v1703 = v1701[1];
                v1702 = false;
                
                break;
                }
              case 'Some': {
                const v1704 = v1701[1];
                v1702 = true;
                
                break;
                }
              }
            const v1705 = v1700 ? v1702 : false;
            if (v1705) {
              const v1706 = v1677[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
              const v1707 = v1706[stdlib.checkedBigNumberify('./index.rsh:199:25:application', stdlib.UInt_max, '0')];
              const v1708 = stdlib.mul(v1707, v1317);
              const v1710 = stdlib.div(v1708, v1305);
              let v1712;
              switch (v1696[0]) {
                case 'None': {
                  const v1713 = v1696[1];
                  v1712 = stdlib.checkedBigNumberify('./index.rsh:191:53:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1714 = v1696[1];
                  v1712 = v1714;
                  
                  break;
                  }
                }
              const v1715 = stdlib.mul(v1710, v1712);
              const v1716 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1690), null);
              let v1717;
              switch (v1716[0]) {
                case 'None': {
                  const v1718 = v1716[1];
                  v1717 = v1319;
                  
                  break;
                  }
                case 'Some': {
                  const v1719 = v1716[1];
                  v1717 = v1719;
                  
                  break;
                  }
                }
              const v1723 = stdlib.sub(v1678, v1715);
              ;
              await stdlib.mapSet(map2, v1690, undefined /* Nothing */);
              const v1726 = 'claimPaseed         ';
              null;
              const v1727 = true;
              await txn6.getOutput('Contributors_claimToken', 'v1727', ctc13, v1727);
              const v1735 = stdlib.sub(v1670, stdlib.checkedBigNumberify('./index.rsh:204:46:decimal', stdlib.UInt_max, '1'));
              const cv1669 = v1707;
              const cv1670 = v1735;
              const cv1671 = v1692;
              const cv1677 = v1677;
              const cv1678 = v1723;
              
              v1669 = cv1669;
              v1670 = cv1670;
              v1671 = cv1671;
              v1677 = cv1677;
              v1678 = cv1678;
              
              continue;}
            else {
              const v1741 = 'claimFailed         ';
              null;
              const v1742 = false;
              await txn6.getOutput('Contributors_claimToken', 'v1742', ctc13, v1742);
              const v1748 = v1677[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
              const v1749 = v1748[stdlib.checkedBigNumberify('./index.rsh:208:24:application', stdlib.UInt_max, '0')];
              const cv1669 = v1749;
              const cv1670 = v1670;
              const cv1671 = v1692;
              const cv1677 = v1677;
              const cv1678 = v1678;
              
              v1669 = cv1669;
              v1670 = cv1670;
              v1671 = cv1671;
              v1677 = cv1677;
              v1678 = cv1678;
              
              continue;}
            
            }
          const v1754 = v1677[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v1755 = v1754[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v1759 = stdlib.sub(v1678, v1755);
          ;
          ;
          const v1766 = v1754[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v1772 = stdlib.sub(v1755, v1766);
          const v1776 = v1754[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v1777 = [v1772, v1766, v1776];
          const v1778 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1777);
          const v1779 = v1778[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v1780 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v1781 = stdlib.sub(v1780, v1766);
          const v1783 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v1785 = v1779[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v1786 = [v1783, v1781, v1785];
          const v1787 = stdlib.Array_set(v1778, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1786);
          undefined /* TokenBurn */;
          const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v1789 = v1788[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v1789) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          
          
          }
        else {
          const v1820 = 'failed              ';
          null;
          const txn4 = await (ctc.sendrecv({
            args: [v1237, v1242, v1249, v1318, v1319, v1326, v1327],
            evt_cnt: 0,
            funcNum: 12,
            lct: v1320,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:218:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1823, time: v1822, didSend: v648, from: v1821 } = txn4;
              
              ;
              const v1826 = v1327;
              const v1827 = v1318;
              const v1828 = v1822;
              const v1834 = v1326;
              const v1835 = v1327;
              
              if (await (async () => {
                const v1838 = stdlib.gt(v1827, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
                const v1839 = stdlib.gt(v1826, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
                const v1840 = v1838 ? v1839 : false;
                
                return v1840;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1902 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
                const v1903 = v1902[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
                const v1907 = stdlib.sub(v1835, v1903);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1237,
                  tok: undefined /* Nothing */
                  });
                const v1914 = v1902[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
                const v1920 = stdlib.sub(v1903, v1914);
                const v1924 = v1902[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
                const v1925 = [v1920, v1914, v1924];
                const v1926 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1925);
                const v1927 = v1926[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
                const v1928 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
                const v1929 = stdlib.sub(v1928, v1914);
                const v1931 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
                const v1933 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
                const v1934 = [v1931, v1929, v1933];
                const v1935 = stdlib.Array_set(v1926, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1934);
                stdlib.simTokenBurn(sim_r, v1249, v1914);
                const v1936 = v1935[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
                const v1937 = v1936[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
                if (v1937) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1249);
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
            tys: [ctc1, ctc3, ctc14, ctc3, ctc1, ctc17, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1823, time: v1822, didSend: v648, from: v1821 } = txn4;
          ;
          const v1824 = stdlib.addressEq(v1237, v1821);
          stdlib.assert(v1824, {
            at: './index.rsh:218:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1826 = v1327;
          let v1827 = v1318;
          let v1828 = v1822;
          let v1834 = v1326;
          let v1835 = v1327;
          
          while (await (async () => {
            const v1838 = stdlib.gt(v1827, stdlib.checkedBigNumberify('./index.rsh:221:27:decimal', stdlib.UInt_max, '0'));
            const v1839 = stdlib.gt(v1826, stdlib.checkedBigNumberify('./index.rsh:221:49:decimal', stdlib.UInt_max, '0'));
            const v1840 = v1838 ? v1839 : false;
            
            return v1840;})()) {
            const txn5 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 14,
              out_tys: [ctc18],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1847], secs: v1849, time: v1848, didSend: v686, from: v1846 } = txn5;
            undefined /* setApiDetails */;
            ;
            const v1852 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1846), null);
            let v1853;
            switch (v1852[0]) {
              case 'None': {
                const v1854 = v1852[1];
                v1853 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1855 = v1852[1];
                v1853 = v1855;
                
                break;
                }
              }
            const v1856 = stdlib.ge(v1835, v1853);
            const v1857 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1846), null);
            let v1858;
            switch (v1857[0]) {
              case 'None': {
                const v1859 = v1857[1];
                v1858 = false;
                
                break;
                }
              case 'Some': {
                const v1860 = v1857[1];
                v1858 = true;
                
                break;
                }
              }
            const v1861 = v1856 ? v1858 : false;
            if (v1861) {
              let v1863;
              switch (v1852[0]) {
                case 'None': {
                  const v1864 = v1852[1];
                  v1863 = stdlib.checkedBigNumberify('./index.rsh:216:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1865 = v1852[1];
                  v1863 = v1865;
                  
                  break;
                  }
                }
              const v1866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1846), null);
              let v1867;
              switch (v1866[0]) {
                case 'None': {
                  const v1868 = v1866[1];
                  v1867 = v1319;
                  
                  break;
                  }
                case 'Some': {
                  const v1869 = v1866[1];
                  v1867 = v1869;
                  
                  break;
                  }
                }
              const v1873 = stdlib.sub(v1835, v1863);
              ;
              await stdlib.mapSet(map2, v1846, undefined /* Nothing */);
              const v1876 = 'refundPassed        ';
              null;
              const v1877 = true;
              await txn5.getOutput('Contributors_claimRefund', 'v1877', ctc13, v1877);
              const v1883 = stdlib.sub(v1827, stdlib.checkedBigNumberify('./index.rsh:229:30:decimal', stdlib.UInt_max, '1'));
              const cv1826 = v1873;
              const cv1827 = v1883;
              const cv1828 = v1848;
              const cv1834 = v1834;
              const cv1835 = v1873;
              
              v1826 = cv1826;
              v1827 = cv1827;
              v1828 = cv1828;
              v1834 = cv1834;
              v1835 = cv1835;
              
              continue;}
            else {
              const v1890 = 'refundFailed        ';
              null;
              const v1891 = false;
              await txn5.getOutput('Contributors_claimRefund', 'v1891', ctc13, v1891);
              const cv1826 = v1835;
              const cv1827 = v1827;
              const cv1828 = v1848;
              const cv1834 = v1834;
              const cv1835 = v1835;
              
              v1826 = cv1826;
              v1827 = cv1827;
              v1828 = cv1828;
              v1834 = cv1834;
              v1835 = cv1835;
              
              continue;}
            
            }
          const v1902 = v1834[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v1903 = v1902[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
          const v1907 = stdlib.sub(v1835, v1903);
          ;
          ;
          const v1914 = v1902[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
          const v1920 = stdlib.sub(v1903, v1914);
          const v1924 = v1902[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v1925 = [v1920, v1914, v1924];
          const v1926 = stdlib.Array_set(v1834, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1925);
          const v1927 = v1926[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v1928 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
          const v1929 = stdlib.sub(v1928, v1914);
          const v1931 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
          const v1933 = v1927[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
          const v1934 = [v1931, v1929, v1933];
          const v1935 = stdlib.Array_set(v1926, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v1934);
          undefined /* TokenBurn */;
          const v1936 = v1935[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
          const v1937 = v1936[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
          if (v1937) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          }}}
    else {
      const v1969 = v1239.owner;
      const v1973 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1304);
      ;
      ;
      const v1980 = v1303[stdlib.checkedBigNumberify('./index.rsh:99:26:application', stdlib.UInt_max, '1')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    }
  else {
    let v2022 = true;
    let v2023 = v1283;
    let v2029 = v1295;
    let v2030 = stdlib.checkedBigNumberify('./index.rsh:72:8:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v2022;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 18,
        out_tys: [ctc23],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2088], secs: v2090, time: v2089, didSend: v889, from: v2087 } = txn3;
      switch (v2088[0]) {
        case 'Contributors_contributed0_759': {
          const v2091 = v2088[1];
          undefined /* setApiDetails */;
          ;
          const v2099 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
          const v2100 = v2091[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '1')];
          const v2101 = null;
          await txn3.getOutput('Contributors_contributed', 'v2101', ctc0, v2101);
          const v2109 = 'contributed         ';
          null;
          const cv2022 = true;
          const cv2023 = v2089;
          const cv2029 = v2029;
          const cv2030 = v2030;
          
          v2022 = cv2022;
          v2023 = cv2023;
          v2029 = cv2029;
          v2030 = cv2030;
          
          continue;
          break;
          }
        case 'Contributors_creating0_759': {
          const v2143 = v2088[1];
          undefined /* setApiDetails */;
          ;
          const v2163 = v2143[stdlib.checkedBigNumberify('./index.rsh:242:9:spread', stdlib.UInt_max, '0')];
          const v2164 = null;
          await txn3.getOutput('Contributors_creating', 'v2164', ctc0, v2164);
          const v2177 = v2163.id;
          const v2178 = v2163.title;
          const v2179 = v2163.link;
          const v2180 = v2163.description;
          const v2181 = v2163.owner;
          const v2182 = v2163.contractInfo;
          null;
          const cv2022 = true;
          const cv2023 = v2089;
          const cv2029 = v2029;
          const cv2030 = v2030;
          
          v2022 = cv2022;
          v2023 = cv2023;
          v2029 = cv2029;
          v2030 = cv2030;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_759': {
          const v2195 = v2088[1];
          undefined /* setApiDetails */;
          ;
          const v2236 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '0')];
          const v2237 = v2195[stdlib.checkedBigNumberify('./index.rsh:263:9:spread', stdlib.UInt_max, '1')];
          const v2238 = null;
          await txn3.getOutput('Contributors_timedOut', 'v2238', ctc0, v2238);
          const v2246 = 'timedOut            ';
          null;
          const cv2022 = true;
          const cv2023 = v2089;
          const cv2029 = v2029;
          const cv2030 = v2030;
          
          v2022 = cv2022;
          v2023 = cv2023;
          v2029 = cv2029;
          v2030 = cv2030;
          
          continue;
          break;
          }
        }
      
      }
    const v2247 = v2029[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
    const v2248 = v2247[stdlib.checkedBigNumberify('./index.rsh:272:19:application', stdlib.UInt_max, '0')];
    const v2252 = stdlib.sub(v2030, v2248);
    ;
    ;
    const v2259 = v2247[stdlib.checkedBigNumberify('./index.rsh:274:24:application', stdlib.UInt_max, '1')];
    const v2265 = stdlib.sub(v2248, v2259);
    const v2269 = v2247[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
    const v2270 = [v2265, v2259, v2269];
    const v2271 = stdlib.Array_set(v2029, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v2270);
    const v2272 = v2271[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
    const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '1')];
    const v2274 = stdlib.sub(v2273, v2259);
    const v2276 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0')];
    const v2278 = v2272[stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '2')];
    const v2279 = [v2276, v2274, v2278];
    const v2280 = stdlib.Array_set(v2271, stdlib.checkedBigNumberify('./index.rsh:274:12:application', stdlib.UInt_max, '0'), v2279);
    undefined /* TokenBurn */;
    const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '0')];
    const v2282 = v2281[stdlib.checkedBigNumberify('./index.rsh:275:20:application', stdlib.UInt_max, '2')];
    if (v2282) {
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
  if (step == 20) {return _Contributors_claimRefund20(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_claimToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Contributors_claimToken9(ctcTop, interact);}
  if (step == 15) {return _Contributors_claimToken15(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 21) {return _Contributors_contribute21(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 26) {return _Contributors_contributed26(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_creating(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_creating expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 26) {return _Contributors_creating26(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 26) {return _Contributors_timedOut26(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken11()byte`, `_Contributors_claimToken7()byte`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,byte[100]))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken11()byte`, `_Contributors_claimToken7()byte`]
    },
  appApproval: `BiA6AAEgCCgwAioDC2TmAxHEAWAFCRA4eQR/BxWWBIYEjgSeBA8U/QL8AyuuncnAB6z9zPsLifLT/Quc89ONC4Kc4uUGvvGmswfaA5a52M8FEhqmBMcEzwT3BP8EkAVpDECBAQpYmQH6AqCNBiYKAQABAQABAgEDAQQBBRi1DjtyY2xhaW1GYWlsZWQAAAAAAAAAAAAI//////////8YtQ47cnBhc3NlZAAAAAAAAAAAAAAAAAAAIjUAMRhBFaUqZEkiWzUBJVs1AjEZIxJBAAoxACghIK9mQhVyNhoAF0lBALciNQQjNQZJISEMQABSSSEiDEAAMkkhIwxAABAhIxJENhoBNf8pNP9QQgC5ISISRDQBSSEJDEAAByEJEkRCAHQhFhJEQgAVSSEkDEAACiEkEkQ2GgFCAmshIRJEKkIJ2EkhJQxAADdJISYMQAAYISYSRDYaATYaAlA1/ys0/1AhJ69QQgBfISUSRDYaATYaAlA1/yg0/1AhJ69QQgBHSSEoDEAACCEoEkQqQgTOgafQtFUSRCpCBqU2GgIXNQQ2GgM2GgEXSSEQDEAIhkmBDgxABiZJIREMQAHhSSEpDEABQiEpEkQhKjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKBE1/YE5WzX8STUFNfuABMwRo/w0+1CwNPsiVUkjDEAAr0khBgxAAE4hBhJENPtXARA1+oAIAAAAAAAACL6wKjUHgBhQhKuwdGltZWRPdXQAAAAAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEwZINPsjgeoDWDX6NPo1+YAIAAAAAAAACHSwKjUHgAQBabAHNPlXAAhQNPlXCBRQNPlXHJZQNPlXsrRQNPmB5gIkWFA0+YGGAyEKWFCwNP80/iMyBjT9NPxCEqxINPtXARA1+oAIAAAAAAAACDWwKjUHgBhQhKuwY29udHJpYnV0ZWQAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEmEhERJEIRc0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQJwZkUEk1A0lXACA1/yEYWzX+gAQARWqOsDIGNP4PRDT/MQASRDT/NAMkIQtYNAMhGVs0AyEaWzT+NAMhG1s0AyErJFg0A4HGBCNYFzQDISxbNAMhLVs0A4HXBCRYMgY0AyEuWzQDIS8hDFg0AyEwW0INiUkhHAxAArhIIRc0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQJwZkUEk1A0lKSkpKSVcAIDX/JCELWDX+IRlbNf0hGls1/CEYWzX7IRtbNfohKyRYNfkhLFs1+CEtWzX3IS5bNfYhLyEMWDX1STUFNfSABJg/VEo09FCwMgY0+wxENPQXSTXzIg1ENAMhMFs08wg18jTziBJWgAgAAAAAAAAFVDTyFlCwNPIWNQcxAIgSLlcqAUk18CJVQAAGIjXxQgAGIzXxQgAANPFBAG8xAIgSDVchCUk17yJVQAAGIjXwQgAMNO8jW0k17jXwQgAAMQAoMQCIEegpNPAWUDXvSVcAITTvUExXKgFQZjT/NP40/TT8NPs0+jT5IyI0+DTzCDT+IQ1bD00jEjT4NPcjCDEAMgY09jT1NPJCDEc0/oHqAls18DTzNPANQQB0MQAoMQCIEYspMQBQNe9XIQo070xQZjEAKDEAiBF1IyEHTFZmMQAoMQCIEWcpNPAWUDXvSVcAITTvUExXKgFQZjT/NP40/TT8NPs0+jT5IyI0+DTzCDT+IQ1bD00jEjT4NPAINPcjCDEAMgY09jT1NPJCC8M0/oHyAls17zTzNO8MQQB0MQAoMQCIEQcpMQBQNe5XIQo07kxQZjEAKDEAiBDxIyEHTFZmMQAoMQCIEOMpNO8WUDXuSVcAITTuUExXKgFQZjT/NP40/TT8NPs0+jT5IyI0+DTzCDT+IQ1bD00jEjT4NO8INPcjCDEAMgY09jT1NPJCCz8xACgxAIgQkykxAFA17lchCjTuTFBmMQAoMQCIEH0jIQdMVmYxACgxAIgQbyk08xZQNe5JVwAhNO5QTFcqAVBmNPg08wg17jT/NP40/TT8NPs0+jT5IyI07jT+IQ1bD00jEjTuNPcjCDEAMgY09jT1NPJCCspIIR00ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yRbNf4hBFs1/VcwIDX8gVBbNftXWBE1+iExWzX5STUFNfiABMs2+P40+FCwMQCID9VXIQlJNfciVUAABiI19kIADDT3I1tJNfU19kIAADEAiA+zVyoBSTX0IlVAAAYiNfVCAAYjNfVCAAA0+TT2DzT1EEEApzT3IlVAAAYiNfRCAAw09yNbSTXzNfRCAAAxAIgPc1cAIUk18iJVQAAHNPw180IADTTyVwEgSTXxNfNCAAA0+TT0CTXysSKyATT0sggjshA087IHszEAKDEAiA81IiEHTFZmgBi1DjtycmVmdW5kUGFzc2VkAAAAAAAAAAA0/hZQsIAJAAAAAAAAB1UBsCk1BzT/NP40/TT8NPI0+yMJMgY0+jTyQg0IgBi1DjtycmVmdW5kRmFpbGVkAAAAAAAAAAA0/hZQsIAJAAAAAAAAB2MAsCg1BzT/NP40/TT8NPk0+zIGNPo0+UIMxUkhCQxAAfBJITIMQABVITISRCERNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hMVs1/oAEyqvON7A0/zEAEkQ0/zQDJFs0AyEEWzQDVzggNP40AyEFWzIGNANXWBE0/kIMYkghHDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEFWzX8IRJbNftXQCA1+iEOWzX5V2gRNfghE1s190k1BTX2gASf3Ju1NPZQsDEAiA3lVyEJSTX1IlVAAAYiNfRCAAw09SNbSTXzNfRCAAAxAIgNw1cqAUk18iJVQAAGIjXzQgAGIzXzQgAANPc09A808xBBAL00+FcAESJbNfI09SJVQAAGIjXxQgAMNPUjW0k18DXxQgAANPI0+ws0/Ao08Qs18DEAiA1tVwAhSTXuIlVAAAc0+jXvQgANNO5XASBJNe0170IAALEisgE08LIII7IQNO+yB7MxACgxAIgNNiIhB0xWZoAYtQ47cmNsYWltUGFzZWVkAAAAAAAAAAAANP4WULCACQAAAAAAAAa/AbApNQc0/zT+NP00/DT7NPo08jT5IwkyBjT4NPc08AlCCiknBzT+FlCwgAkAAAAAAAAGzgCwKDUHNP80/jT9NPw0+zT6NPhXABEiWzT5MgY0+DT3Qgn1IRASRCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrA0/zEAEkQ0/zQDJFs0AyEEWzQDIQVbNAMhEls0A1dIIDQDIRNbNAMhM1syBjQDV2gRNAMhNFtCCZNJIRQMQAOsSSEWDEACa0klDEAA0UghNTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEFWzX8ITZbNfshDls1+ldoIDX5V4gRNfghN1s194AEF/zbLrA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iEKCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEJNQEyBjUCQgsXSCEQNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEEWzX9IQVbNfwhEls1+1dAIDX6IQ5bNflXaBE1+CETWzX3STUFNfaABNyqJt409lCwMQCICwpXIQlJNfUiVUAABiI19EIADDT1I1tJNfM19EIAADEAiAroVyoBSTXyIlVAAAYiNfNCAAYjNfNCAAA09zT0DzTzEEEAvTT4VwARIls18jT1IlVAAAYiNfFCAAw09SNbSTXwNfFCAAA08jT7CzT8CjTxCzXwMQCICpJXACFJNe4iVUAABzT6Ne9CAA007lcBIEk17TXvQgAAsSKyATTwsggjshA077IHszEAKDEAiApbIiEHTFZmgBi1DjtyY2xhaW1QYXNzZWQAAAAAAAAAAAA0/hZQsIAJAAAAAAAABggBsCk1BzT/NP40/TT8NPs0+jT5Iwk08jIGNPg09zTwCUIGdScHNP4WULCACQAAAAAAAAYXALAoNQc0/zT+NP00/DT7NPo0+TT4VwARIlsyBjT4NPdCBkFJIQ8MQABiIQ8SRCEPNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDJFs0AyEEWzQDIQVbNAMhEls0A1dIIDQDIRNbNAMhM1syBjQDV2gRNAMhNFtCBdhIIRQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hBVs1/CE2WzX7IQ5bNfpXaCA1+VeIETX4ITdbNfeABJEnNPOwNP8xABJEsSKyATT3sggjshA0A1c4ILIHszT4VwARIltJNfYhCgo19TT3SQk09Qk19LEisgE09bIII7IQNP+yB7M0/zT+FlA0/RZQNPwWUDT7FlA0+hZQNPlQNPhQNPYWUDT0FlAoSwFXAH9nKUsBV38KZ0ghDzUBMgY1AkIISUkjDEAB00khBgxAAOchBhJEIQY0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSUpXACA1/yQhC1g1/iEaWzX9IRshDFg1/IAEQbFATbA0/zEAEkQ0/FcAEUk1+yJbNfo0/iJbNfk0+jT5DUEASTT6NPkJNfg0/iE4JFg197EisgE0+LIII7IQNPeyB7M0/zT+NAMhGVs0/TQDga8EWzT5NPcjIiI0/zIGNAMhGFs0/CI0+AlCAoGxIrIBNPqyCCOyEDT+ITgkWLIHs7EisgEiNPoJsggjshA0/7IHs7EisgEhCLIQNP2yIbNCBzlIIzQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSklXACA1/4EhIQtYNf6BhwRbNf2BjwRbNfyBlwQhDFg1+4AEmouRdLA0+1cAEUk1+iVbNfk0+iJbNPkIFjT5FlA0+lcQAVA1+DT5NPyIB1k0/zEAEkQ0A1cgARdBAFQyBiEdCDX3NP80/lA0/RZQNPwWUDIGFlA0+FA09xZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEeIRVYZycFSwEhH4E7WGdIIQY1ATIGNQJCBn00/zT8IzIGNPgiQgWmSCE5iAbLIjQBEkQ0BEkiEkw0AhIRREk1BUlXAAEXNf8jIQtYNf6ABBufgxs0/xZRBwhQNP5QsCEMrzX9NP6BzAFbNfyAGLUOO3JjcmVhdGVkAAAAAAAAAAAAAAAAADT8FlCwITmIBmmxIrIBIQiyEIH///////////8BsiKBBrIjNP6B1gMlWLIlNP6BtgMkWLImIQ6vsicyA7IoMgqyKbO0PDX7gAgAAAAAAAAE4DT7FlCwNPs1+jT9VwARNfknCDT5VwgIUDT5VxABUEk1+FcAEUk191cACCcIUDT3VxABUEk19lcAEUk19VcACDT1VwgIUChQNfSAGLUOO3J0b2tlbkNyZWF0ZWQAAAAAAAAAADT+gd4DJVhQsDEANP8WUQcIUDT+UDT8FlA0+hZQNPRQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEeIRVYZycFSwEhH4EsWGdIIzUBMgY1AkIFCjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TT9NPUONPgQQQB1NPE08lA08xZQNPQWUDT1FlA09hZQNPdQNPgWUQcIUDT5FlA0+hZQNPtQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBIR4hFVhnJwVLASEfIRVYZycGSwGB+wSBHVhnSCEXNQEyBjUCQgRsIyI0+TTyIQ1bD00iEkEAYicJNPMWULA0/yEKCjXwNP808Ak177EisgE08LIII7IQNPGyB7M08TTzFlA09BZQNPYWUDT3UDT5FlA0+hZQNPtQNP5QNO8WUChLAVcAf2cpSwFXfyJnSCEUNQEyBjUCQgP6NPk08oGaA1sPQQBiJwk08xZQsDT/IQoKNfA0/zTwCTXvsSKyATTwsggjshA08bIHszTxNPMWUDT0FlA09hZQNPdQNPkWUDT6FlA0+1A0/lA07xZQKEsBVwB/ZylLAVd/ImdIITU1ATIGNQJCA4yAGLUOO3JmYWlsZWQAAAAAAAAAAAAAAAAAADTzFlCwNPE08xZQNPQWUDT6FlA0+1A0/lA0/xZQKEsBVwBxZ0ghETUBMgY1AkIDQjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/CINNPsiDRBBADo09TT2FlA09xZQNPgWUDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfwJnSCEQNQEyBjUCQgLmNP5XABFJNfQiWzXzsSKyATTzsggjshA09bIHs7EisgE0/zTzCbIII7IQNPWyB7M09CVbNfI08zTyCRY08hZQNPRXEAFQSTXxVwARSTXwVwAINPAlWzTyCRZQNPBXEAFQVwARVxABF0EAA0ICXbEisgEhCLIQNPeyIbNCAk01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwiDTT7Ig0QQQA6NPU09hZQNPcWUDT4FlA0+RZQNPpQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38CZ0ghHDUBMgY1AkICDTT+VwARSTX0Ils187EisgE087III7IQNPWyB7OxIrIBNP808wmyCCOyEDT1sgezNPQlWzXyNPM08gkWNPIWUDT0VxABUEk18VcAEUk18FcACDTwJVs08gkWUDTwVxABUFcAEVcQARdBAANCAYSxIrIBIQiyEDT3siGzQgF0Nf81/jX9Nfw1+zX6Nfk1+DX3NPwiDTT7Ig0QQQArNPc0+BZQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwBxZ0ghHTUBMgY1AkIBRzT+VwARSTX2Ils19bEisgE09bIII7IQNPeyB7OxIrIBNP809QmyCCOyEDT3sgezNPYlWzX0NPU09AkWNPQWUDT2VxABUEk181cAEUk18lcACDTyJVs09AkWUDTyVxABUFcAEVcQARdBAANCAL6xIrIBIQiyEDT5siGzQgCuNf81/jX9Nfw1+zX6NPxBACA0+jT7FlA0/lA0/xZQKEsBVwBBZ0ghKjUBMgY1AkIAmTT+VwARSTX5Ils1+LEisgE0+LIII7IQNPqyB7OxIrIBNP80+AmyCCOyEDT6sgezNPklWzX3NPg09wkWNPcWUDT5VxABUEk19lcAEUk19VcACDT1JVs09wkWUDT1VxABUFcAEVcQARdBAANCABCxIrIBIQiyEDT7siGzQgAAMRkhDxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEWMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEgr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEUEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 6,
  stateSize: 664,
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
                "name": "v1238",
                "type": "bool"
              },
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
                    "internalType": "struct T6",
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
                    "internalType": "struct T7",
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
                    "internalType": "struct T3",
                    "name": "_title",
                    "type": "tuple"
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
                    "name": "_tokenName",
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
                    "name": "_tokenSymbol",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tokenid",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v1239",
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
                "name": "v1238",
                "type": "bool"
              },
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
                    "internalType": "struct T6",
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
                    "internalType": "struct T7",
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
                    "internalType": "struct T3",
                    "name": "_title",
                    "type": "tuple"
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
                    "name": "_tokenName",
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
                    "name": "_tokenSymbol",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tokenid",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v1239",
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
        "internalType": "struct T20",
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
                "internalType": "bool",
                "name": "v1691",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T41",
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
        "internalType": "struct T20",
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
                "internalType": "bool",
                "name": "v1847",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T47",
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T48",
                "name": "v1351",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T56",
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
                    "internalType": "struct T52",
                    "name": "_Contributors_contributed0_759",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T7",
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
                            "internalType": "struct T6",
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
                            "internalType": "struct T53",
                            "name": "contractInfo",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T54",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T55",
                    "name": "_Contributors_creating0_759",
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
                    "internalType": "struct T52",
                    "name": "_Contributors_timedOut0_759",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T56",
                "name": "v2088",
                "type": "tuple"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e18",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1508",
                "type": "bool"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
    "name": "_reach_oe_v1248",
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
    "name": "_reach_oe_v1364",
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
    "name": "_reach_oe_v1544",
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
    "name": "_reach_oe_v1559",
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
    "name": "_reach_oe_v1727",
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
    "name": "_reach_oe_v1742",
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
    "name": "_reach_oe_v1877",
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
    "name": "_reach_oe_v1891",
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
    "name": "_reach_oe_v2101",
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
    "name": "_reach_oe_v2164",
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
    "name": "_reach_oe_v2238",
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
        "internalType": "struct T3",
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
        "internalType": "struct T7",
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
        "internalType": "struct T6",
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
        "internalType": "struct T53",
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
        "internalType": "struct T3",
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
        "internalType": "struct T3",
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
            "internalType": "struct T3",
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
            "internalType": "struct T7",
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
            "internalType": "struct T6",
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
            "internalType": "struct T53",
            "name": "contractInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct T54",
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
    "name": "_Contributors_claimToken11",
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
    "name": "_Contributors_claimToken7",
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
        "internalType": "struct T20",
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
                "internalType": "bool",
                "name": "v1691",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T41",
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
        "internalType": "struct T20",
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
                "internalType": "bool",
                "name": "v1847",
                "type": "bool"
              }
            ],
            "internalType": "struct T46",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T47",
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T48",
                "name": "v1351",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T56",
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
                    "internalType": "struct T52",
                    "name": "_Contributors_contributed0_759",
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
                            "internalType": "struct T3",
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
                            "internalType": "struct T7",
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
                            "internalType": "struct T6",
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
                            "internalType": "struct T53",
                            "name": "contractInfo",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T54",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T55",
                    "name": "_Contributors_creating0_759",
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
                    "internalType": "struct T52",
                    "name": "_Contributors_timedOut0_759",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T56",
                "name": "v2088",
                "type": "tuple"
              }
            ],
            "internalType": "struct T57",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T58",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m18",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1508",
                "type": "bool"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T35",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
  Bytecode: `0x608060405260405162008c8b38038062008c8b833981016040819052620000269162000a80565b600080554360035562000038620004c3565b7f25ea26a0032fba1f424caef15c206a77e705c5f33445553b6723f55ff08e67ce33836040516200006b92919062000d36565b60405180910390a180516000908190528151602090810182905282516040019190915281519082015152620000a33415600762000416565b604081810180516618dc99585d195960ca1b90525160208481015181015160800151835192516001600160601b03191683529082015260008051602062008c6b833981519152910160405180910390a16060810180516000908190528151602090810182905291516040908101829052608084015191909152838201518201516101600151518151928301520160408051601f19818403018152908290526020848101518101516101800151516001600160c01b031916908301529060280160408051808303601f1901815282825260608581015180516020808301519286015190870191909152938501528301919091529060800160408051601f19818403018152828252608086015151602084015291016040516020818303038152906040526000196012604051620001d890620005ef565b620001e99695949392919062000ddf565b604051809103906000f08015801562000206573d6000803e3d6000fd5b506001600160a01b031660a0820181905260c082018190526040519081527fa51c01b42c166d2ccad54e4d513293ce72c769e48113a673b126c5abbe3a29129060200160405180910390a160e08101805160001990526020808301805151820151835190920191909152805151604090810151835190151591015251905162000293919060009062000440565b610100820181815290515161012083018051919091528051600019602090910152815151604090810151825190151591015290519051620002d8919060009062000440565b610140820181815290515161016083018051919091528151516020908101518251909101528051600060409091018190529151905162000319929062000440565b6101808201526101a080820180516b1d1bdad95b90dc99585d195960a21b905251602084810151810151909201516040805192516001600160601b03191683529282015260008051602062008c6b833981519152910160405180910390a162000381620005fd565b338152602080840180515115158284015280518201516040808501919091529051820151608090810151606085015260c08501516001600160a01b03169084015261018084015160a08401526001600081905543905551620003e69183910162000e4a565b604051602081830303815290604052600290805190602001906200040c92919062000702565b5050505062000f50565b816200043c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200044a62000791565b60005b6001811015620004a0578481600181106200046c576200046c62000d79565b602002015182826001811062000486576200048662000d79565b602002015280620004978162000ee9565b9150506200044d565b5081818460018110620004b757620004b762000d79565b60200201529392505050565b60408051610220810190915260006101c082018181526101e08301829052610200830191909152815260208101620004fa62000791565b815260408051602080820183526000808352818501929092528251606080820185528382528183018490528185018490528486019190915283518083018552838152818601526080850183905260a08501839052835190810184528281529081018290529182015260c082015260e0016200057462000791565b81526040805160608101825260008082526020828101829052928201529101908152602001620005a362000791565b81526040805160608101825260008082526020828101829052928201529101908152602001620005d262000791565b81526040805160208181019092526000815291015290565b905290565b6110878062007be483390190565b6040805160c080820183526000808352602080840182905284516101c081018652828152808201839052855180850187528381528083018490528087018490526060808201859052608080830186905260a0808401879052848a019390935281840186905280840186905288518084018a52868152808601879052808a0187905291820186905281018590529082015292830182905260e08301829052610100830182905261012083018290528451808201865282815261014084015284518082018652828152610160840152845190810185528181526101808301526101a0820152909182019081526000602082018190526040820152606001620005ea62000791565b828054620007109062000f13565b90600052602060002090601f0160209004810192826200073457600085556200077f565b82601f106200074f57805160ff19168380011785556200077f565b828001600101855582156200077f579182015b828111156200077f57825182559160200191906001019062000762565b506200078d929150620007de565b5090565b60405180602001604052806001905b620007c7604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620007a05790505090565b5b808211156200078d5760008155600101620007df565b604051602081016001600160401b03811182821017156200082657634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b03811182821017156200082657634e487b7160e01b600052604160045260246000fd5b6040516101c081016001600160401b03811182821017156200082657634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620008a757600080fd5b919050565b80516001600160601b031981168114620008a757600080fd5b600060c08284031215620008d857600080fd5b60405160c081016001600160401b03811182821017156200090957634e487b7160e01b600052604160045260246000fd5b806040525080915082518152602083015160208201526040830151604082015260608301516060820152608083015160808201526200094b60a08401620008ac565b60a08201525092915050565b600060a082840312156200096a57600080fd5b60405160a081016001600160401b03811182821017156200099b57634e487b7160e01b600052604160045260246000fd5b60409081528351825260208085015190830152838101519082015260608084015190820152608083015190915081906001600160501b031981168114620009e157600080fd5b6080919091015292915050565b60006020828403121562000a0157600080fd5b62000a0b620007f5565b905062000a1882620008ac565b815292915050565b60006020828403121562000a3357600080fd5b62000a3d620007f5565b9151825250919050565b60006020828403121562000a5a57600080fd5b62000a64620007f5565b82519091506001600160c01b03198116811462000a1857600080fd5b600081830361032081121562000a9557600080fd5b62000a9f6200082c565b8351815261030080601f198401121562000ab857600080fd5b62000ac26200082c565b6020860151801515811462000ad657600080fd5b81526102e0603f19850181131562000aed57600080fd5b62000af76200085d565b94506040870151855262000b0e606088016200088f565b602086015262000b228860808901620008c5565b604086015261014080880151606087015261016080890151608088015261018062000b508b828c0162000957565b60a08901526102208a015160c08901526102408a015160e089015262000b7a6102608b016200088f565b6101008901526102808a015161012089015262000b9c8b6102a08c01620009ee565b8389015262000bb08b6102c08c0162000a20565b8289015262000bc28b858c0162000a47565b908801525050509401516101a08301526020848101929092529081019290925250919050565b80518252602081015162000c0760208401826001600160a01b03169052565b50604081015162000c576040840182805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b506060810151610100818185015260808301519150610120828186015260a0840151925061014062000cbd81870185805182526020808201519083015260408082015190830152606080820151908301526080908101516001600160501b031916910152565b60c08501516101e087015260e0850151610200870152918401516001600160a01b0316610220860152830151610240850152820151516001600160601b0319166102608401525061016081015151610280830152610180810151516001600160c01b0319166102a08301526101a001516102c090910152565b6001600160a01b0383168152815160208083019190915280830151805115156040840152015161034082019062000d71606084018262000be8565b509392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000db75760208185018101518683018201520162000d99565b8181111562000dca576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000df460c083018962000d8f565b828103602084015262000e08818962000d8f565b9050828103604084015262000e1e818862000d8f565b9050828103606084015262000e34818762000d8f565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401511515818401526040808501516103c085019392919062000e828287018262000be8565b506060808701516103208701528360808801511661034087015260a08701519350610360860160005b600181101562000edd578551805183528581015186840152840151151584830152948401949082019060010162000eab565b50505050505092915050565b600060001982141562000f0c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000f2857607f821691505b6020821081141562000f4a57634e487b7160e01b600052602260045260246000fd5b50919050565b616c848062000f606000396000f3fe60806040526004361061018b5760003560e01c8063817d57f3116100e0578063972b444811610084578063cadc2e7a11610061578063cadc2e7a14610384578063de736998146103b1578063e533a29d146103c4578063f19b4352146103d757005b8063972b44481461033b578063a7661d541461034e578063ab53f2c61461036157005b80638e314769116100bd5780638e314769146102fa5780638f3c54f41461030d5780639282f91614610320578063928eb3511461033357005b8063817d57f3146102a557806383230757146102d2578063891a587f146102e757005b806339b777f0116101475780635bc7f724116101245780635bc7f724146102645780636172e590146102775780636d7009061461028a5780637eea518c1461029257005b806339b777f01461021c5780633bc5b7bf146102245780634b7ab5451461025157005b806311faee8c14610194578063152b31a2146101a757806316013779146101cf578063190bbe9f146101e25780631e93b0f1146101ea5780632c10a1591461020957005b3661019257005b005b6101926101a23660046153f2565b6103ea565b6101ba6101b5366004615781565b61040e565b60405190151581526020015b60405180910390f35b6101926101dd3660046153f2565b610449565b6101ba610469565b3480156101f657600080fd5b506003545b6040519081526020016101c6565b6101926102173660046153f2565b610498565b6101ba6104b8565b34801561023057600080fd5b5061024461023f36600461579e565b610597565b6040516101c691906157e1565b61019261025f3660046153f2565b6105c3565b6101ba610272366004615819565b6105e3565b6101ba610285366004615819565b610629565b6101ba610672565b6101926102a03660046153f2565b61069e565b3480156102b157600080fd5b506102c56102c036600461579e565b6106be565b6040516101c6919061583b565b3480156102de57600080fd5b506001546101fb565b6101926102f53660046153f2565b6106e4565b6101926103083660046153f2565b610704565b61019261031b3660046153f2565b610724565b61019261032e36600461586d565b610744565b6101ba610764565b6101fb610349366004615880565b610793565b61019261035c3660046153f2565b6107c3565b34801561036d57600080fd5b506103766107e3565b6040516101c69291906158c5565b34801561039057600080fd5b506103a461039f36600461579e565b610880565b6040516101c691906158ff565b6101926103bf3660046153f2565b6108a6565b6101926103d23660046153f2565b6108c6565b6101926103e53660046153f2565b6108e6565b6103f261496d565b61040a6104043684900384018461593d565b82610906565b5050565b60006104186149b1565b602081018051516001905251516040015183905261043461496d565b61043e8282610abf565b60c001519392505050565b61045161496d565b61040a610463368490038401846159cc565b82610ebe565b60006104736149d0565b60208101516000905261048461496d565b61048e8282610ebe565b6060015192915050565b6104a061496d565b61040a6104b23684900384018461593d565b826114a2565b60008054600714806104cc5750600054600b145b6104d557600080fd5b6000546007141561054957306001600160a01b031663928eb3516040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610520573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054491906159f3565b905090565b600054600b141561059457306001600160a01b031663190bbe9f6040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610520573d6000803e3d6000fd5b90565b60408051606081018252600080825260208201819052918101919091526105bd8261175e565b92915050565b6105cb61496d565b61040a6105dd36849003840184615a10565b8261183a565b60006105ed6149b1565b60208181018051516000905280515182015186905251518101510183905261061361496d565b61061d8282610abf565b60a00151949350505050565b60006106336149b1565b60208181018051516002905280515160609081015187905290515101510183905261065c61496d565b6106668282610abf565b60e00151949350505050565b600061067c6149d0565b60208101516000905261068d61496d565b6106978282611ff8565b5192915050565b6106a661496d565b61040a6106b83684900384018461593d565b82612558565b60408051606081018252600080825260208201819052918101919091526105bd826128c3565b6106ec61496d565b61040a6106fe368490038401846159cc565b82611ff8565b61070c61496d565b61040a61071e3684900384018461593d565b8261298c565b61072c61496d565b61040a61073e368490038401846159cc565b82612b54565b61074c61496d565b61040a61075e36849003840184615a97565b82610abf565b600061076e6149d0565b60208101516000905261077f61496d565b6107898282612b54565b6040015192915050565b600061079d6149fa565b6020810151518390526107ae61496d565b6107b8828261183a565b608001519392505050565b6107cb61496d565b61040a6107dd3684900384018461593d565b82613130565b6000606060005460028080546107f890615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461082490615b54565b80156108715780601f1061084657610100808354040283529160200191610871565b820191906000526020600020905b81548152906001019060200180831161085457829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526105bd826133f1565b6108ae61496d565b61040a6108c03684900384018461593d565b826134b4565b6108ce61496d565b61040a6108e03684900384018461593d565b8261367c565b6108ee61496d565b61040a6109003684900384018461593d565b82613911565b6109166010600054146029613b2d565b815161093190158061092a57508251600154145b602a613b2d565b60008080556002805461094390615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461096f90615b54565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b50505050508060200190518101906109d49190615c1d565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf3384604051610a07929190615ca4565b60405180910390a1610a1b34156027613b2d565b8051610a33906001600160a01b031633146028613b2d565b610a3b614a27565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a086015183519094019390935251905190910152610ab981613b53565b50505050565b610acf601a60005414603b613b2d565b8151610aea901580610ae357508251600154145b603c613b2d565b600080805560028054610afc90615b54565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2890615b54565b8015610b755780601f10610b4a57610100808354040283529160200191610b75565b820191906000526020600020905b815481529060010190602001808311610b5857829003601f168201915b5050505050806020019051810190610b8d9190615ccc565b9050610b97614a60565b7feec74e3d42debb5b65bba690e1226439300166975dcf151b04d8a5ec5868f3093385604051610bc8929190615ddd565b60405180910390a16000602085015151516002811115610bea57610bea6157bb565b1415610d18576020808501515101518152610c0734156038613b2d565b604051600081527fbf56c404e0cdd4759eb81e7ad6df8daad4df454fccdf92003b5b22e7ddd258779060200160405180910390a1600060a0840152602080820180516a18dbdb9d1c9a589d5d195960aa1b905251825180519201516040517ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf393610caf9392909192516001600160601b03191683526020830191909152604082015260600190565b60405180910390a1610cbf614ad3565b825181516001600160a01b039182169052602080850151835192169181019190915280820180516001905280514392019190915260408085015182519091015260608085015191510152610d1281613dda565b50610ab9565b6001602085015151516002811115610d3257610d326157bb565b1415610ddf5760208401515160409081015190820152610d5434156039613b2d565b604051600081527fdc9a3aa657ad1b9da372b08f362496880ceedf97dcb4c1559182a7ed3f0e0d6b9060200160405180910390a1600060c08401526040808201515180516020820151828401516060840151608085015160a09095015195517fc637fbf488869e7c6eab5d4a5d0974d38f52692be94971287b97d21de5a5ce1e96610caf9691615ec1565b6002602085015151516002811115610df957610df96157bb565b1415610ab95760208401515160609081015190820152610e1b3415603a613b2d565b604051600081527f89fea8592ccd3c45d9664335ae9b1628432f65dfb4b191e7f81eaa2583309bf09060200160405180910390a1600060e0840152608081018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101610caf565b610ece600f600054146025613b2d565b8151610ee9901580610ee257508251600154145b6026613b2d565b600080805560028054610efb90615b54565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2790615b54565b8015610f745780601f10610f4957610100808354040283529160200191610f74565b820191906000526020600020905b815481529060010190602001808311610f5757829003601f168201915b5050505050806020019051810190610f8c9190615fa8565b9050610f96614afc565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b7891392733385604051610fc7929190615fc5565b60405180910390a1610fdb34156024613b2d565b610fe4336133f1565b815260008151516001811115610ffc57610ffc6157bb565b141561100e576000602082015261103e565b60018151516001811115611024576110246157bb565b141561103e57805160409081015190820181905260208201525b6000611049336128c3565b51600181111561105b5761105b6157bb565b141561106d5760006060820152611098565b6001611078336128c3565b51600181111561108a5761108a6157bb565b141561109857600160608201525b806020015182610100015110156110b05760006110b6565b80606001515b1561137e57600081515160018111156110d1576110d16157bb565b14156110e35760006080820152611112565b600181515160018111156110f9576110f96157bb565b14156111125780516040015160a0820181905260808201525b8060800151826060015183608001518460e0015160006001811061113857611138615fef565b602002015151611148919061601b565b611152919061603a565b61115c919061601b565b60c0820152600061116c3361175e565b51600181111561117e5761117e6157bb565b141561119c5760a08201516001600160a01b031660e08201526111e3565b60016111a73361175e565b5160018111156111b9576111b96157bb565b14156111e3576111c83361175e565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015611224573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516a18db185a5b54185cd9595960aa1b905251908401519151600080516020616c2f8339815191529261127b929161605c565b60405180910390a1604051600181527f9d5aae254366974e075d14f861d85f32b39477faba66936ddf1a41213913773b9060200160405180910390a1600160208401526112c6614b72565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841691015260608086015184519091015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c083015161133590600190616075565b602080830180519091019190915280514360409091015260e084015190516060015260c082015161010084015161136c9190616075565b602082015160800152610d1281613fe7565b610140810180516a18db185a5b51985a5b195960aa1b9052516020830151604051600080516020616c2f833981519152926113ba92909161605c565b60405180910390a1604051600081527fcbee918d9ab5c5bd1e10bbe19179aaaaffaba80446a31b9ac3a48312a41234e99060200160405180910390a160006020840152611405614b72565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c0890151815190950194909452835143930192909252905182519091015261010085015190519091015261149b81613fe7565b5050505050565b6114b2600160005414600b613b2d565b81516114cd9015806114c657508251600154145b600c613b2d565b6000808055600280546114df90615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461150b90615b54565b80156115585780601f1061152d57610100808354040283529160200191611558565b820191906000526020600020905b81548152906001019060200180831161153b57829003601f168201915b505050505080602001905181019061157091906162a6565b905061157a614bb1565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133856040516115ab929190615ca4565b60405180910390a16115bf34156008613b2d565b60a082015151602081015190516115d6919061632c565b81515260a08201805151602090810151835190910152805151604090810151835190151591015251815161160d91906000906140aa565b6020820152608082015160a083015161163e9161163791339190600060200201516020015161411e565b6009613b2d565b8151611656906001600160a01b03163314600a613b2d565b8160200151156117095761166b60144361632c565b6040820152611678614bef565b82516001600160a01b0390811682526040808501516020808501919091526060808701518386015260808088015190941690850152439284018390528481015160a08501528482015160c08501526002600055600192909255516116de9183910161645f565b60405160208183030381529060405260029080519060200190611702929190614c3d565b5050610ab9565b611711614ad3565b825181516001600160a01b03918216905260808401518251911660209182015280820180516001905280514390830152908301518151604001525160006060919091015261149b81613dda565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156117aa576117aa6157bb565b141561182a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156117eb576117eb6157bb565b60018111156117fc576117fc6157bb565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b61184a6015600054146030613b2d565b815161186590158061185e57508251600154145b6031613b2d565b60008080556002805461187790615b54565b80601f01602080910402602001604051908101604052809291908181526020018280546118a390615b54565b80156118f05780601f106118c5576101008083540402835291602001916118f0565b820191906000526020600020905b8154815290600101906020018083116118d357829003601f168201915b505050505080602001905181019061190891906164cf565b905061193e6040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b61194f826080015143106032613b2d565b60408051338152855160208083019190915286015151518183015290517fb9297d4b7f10b499fc5f315d265282570f2fa0e1c922922d1a20415e3ee7e5429181900360600190a1602084015151516119aa901515602e613b2d565b602084015151516101a08301516119c1919061632c565b8152602084015151516119d7903414602f613b2d565b80516040519081527f4332590572ee16bc54acc5295a9b9c76a319dad30da623cb84f8d816ca559bb69060200160405180910390a1805160808401526000611a1e336128c3565b516001811115611a3057611a306157bb565b1415611a425760006020820152611a6d565b6001611a4d336128c3565b516001811115611a5f57611a5f6157bb565b1415611a6d57600160208201525b806020015115611c11576000611a82336133f1565b516001811115611a9457611a946157bb565b1415611aa65760006040820152611ae4565b6001611ab1336133f1565b516001811115611ac357611ac36157bb565b1415611ae457611ad2336133f1565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff19166001908117825591830151910155611b11614cc1565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519085169082015260808088015186519091015260a08088015186519091015260c08088015186519516940193909352519091015190860151515161010085015160019291611b8f9161632c565b1015611b9c576001611b9f565b60005b602083810180519290931490915261010085015191510152610120830151611bc99060019061632c565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e00152610d1281614136565b60208083015160c001519085015151511115611d5b573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160c00151910155611c90614cc1565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519085169082015260808088015186519091015260a08088015186519091015260c08088015186519516940193909352519091015190860151515161010085015160019291611d0e9161632c565b1015611d1b576001611d1e565b60005b60208381015191909214905283015160c00151610100840151611d41919061632c565b6020808301510152610120830151611bc99060019061632c565b60208083015160e001519085015151511015611e8b573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160e00151910155611dda614cc1565b825181516001600160a01b03918216905260208085018051845183015260408087015185519091015260608087015185519085169082015260808088015186519091015260a08088015186519091015260c08088015186519516940193909352519091015190860151515161010085015160019291611e589161632c565b1015611e65576001611e68565b60005b60208381015191909214905283015160e00151610100840151611d41919061632c565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559086015151519101819055610100830151611efc919061632c565b6080820152611f09614cc1565b825181516001600160a01b03918216905260208085018051845190920191909152604080860151845190910152606080860151845190841690820152608080870151855182015260a08088015186519091015260c0808801518651951694019390935290510151908301516001911115611f84576001611f87565b60005b6020838101805192909314909152608084015191510152610120830151611fb09060019061632c565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e0015261149b81614136565b612008601460005414602c613b2d565b815161202390158061201c57508251600154145b602d613b2d565b60008080556002805461203590615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461206190615b54565b80156120ae5780601f10612083576101008083540402835291602001916120ae565b820191906000526020600020905b81548152906001019060200180831161209157829003601f168201915b50505050508060200190518101906120c691906165bd565b90506120d0614afc565b7f1ed6ed56f0470e1af9be4761b3c156f20b39129ee8d14c41b9e55de5c2b8afb03385604051612101929190615fc5565b60405180910390a16121153415602b613b2d565b61211e336133f1565b815260008151516001811115612136576121366157bb565b14156121485760006020820152612178565b6001815151600181111561215e5761215e6157bb565b141561217857805160409081015190820181905260208201525b6000612183336128c3565b516001811115612195576121956157bb565b14156121a757600060608201526121d2565b60016121b2336128c3565b5160018111156121c4576121c46157bb565b14156121d257600160608201525b80602001518260c0015110156121e95760006121ef565b80606001515b15612453576000815151600181111561220a5761220a6157bb565b141561221c576000608082015261224b565b60018151516001811115612232576122326157bb565b141561224b5780516040015160a0820181905260808201525b60006122563361175e565b516001811115612268576122686157bb565b14156122865760608201516001600160a01b031660c08201526122cc565b60016122913361175e565b5160018111156122a3576122a36157bb565b14156122cc576122b23361175e565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c001516122e09190616075565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612326573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516b1c99599d5b9914185cdcd95960a21b905251908401519151600080516020616c2f8339815191529261237e929161605c565b60405180910390a1604051600181527f1caa275c573280d9ca40f68307445d186a35f0f6a52456dd1e971cb0634afe979060200160405180910390a1600183526123c6614a27565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845193169201919091526101008301519082015152608083015161241c90600190616075565b602080830180519091019190915280514360409091015260a0840151815160600152610100830151905160800152610d1281613b53565b610140810180516b1c99599d5b9911985a5b195960a21b9052516020830151604051600080516020616c2f8339815191529261249092909161605c565b60405180910390a1604051600081527f73bb73faddb256829fe69b6d72c57ee59ca3573b5ae0b6ddf8232c4e1d9a14da9060200160405180910390a1600083526124d8614a27565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a087015182519094019390935291519151015261149b81613b53565b612568600260005414600f613b2d565b815161258390158061257c57508251600154145b6010613b2d565b60008080556002805461259590615b54565b80601f01602080910402602001604051908101604052809291908181526020018280546125c190615b54565b801561260e5780601f106125e35761010080835404028352916020019161260e565b820191906000526020600020905b8154815290600101906020018083116125f157829003601f168201915b5050505050806020019051810190612626919061662c565b905061263e6040518060200160405280600081525090565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338560405161266f929190615ca4565b60405180910390a16126833415600d613b2d565b815161269b906001600160a01b03163314600e613b2d565b60208201515160a0830151515111156127d75760208201515160a083015151516126c59190616075565b808252602083015161010001516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612707573d6000803e3d6000fd5b50612710614cc1565b825181516001600160a01b039182169052602080850180518451830152604080870151855182015260608088015186519086169082015260c0808901518751608090810191909152845151885160a09081019190915294516101000151885190881690830152858801805160019052805160009701879052805190940186905289518451971696909201959095528151439082015287015181518301529086015190519092019190915282516127c591616075565b602082015160e00152610d1281614136565b816020015161010001516001600160a01b03166108fc8360a0015160006001811061280457612804615fef565b6020020151516040518115909202916000818181858888f19350505050158015612832573d6000803e3d6000fd5b50815160a083015151516001600160a01b03909116906108fc90612857906000616075565b6040518115909202916000818181858888f1935050505015801561287f573d6000803e3d6000fd5b50606082015160a08301516128a0919060005b6020020151602001516145ed565b6128ad8260600151614600565b60008080556001819055610ab990600290614ce1565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561290f5761290f6157bb565b141561182a576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115612950576129506157bb565b6001811115612961576129616157bb565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b61299c6005600054146017613b2d565b81516129b79015806129b057508251600154145b6018613b2d565b6000808055600280546129c990615b54565b80601f01602080910402602001604051908101604052809291908181526020018280546129f590615b54565b8015612a425780601f10612a1757610100808354040283529160200191612a42565b820191906000526020600020905b815481529060010190602001808311612a2557829003601f168201915b5050505050806020019051810190612a5a9190616758565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051612a8d929190615ca4565b60405180910390a1612aa134156015613b2d565b8051612ab9906001600160a01b031633146016613b2d565b612ac1614b72565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610ab981614615565b612b64600960005414601a613b2d565b8151612b7f901580612b7857508251600154145b601b613b2d565b600080805560028054612b9190615b54565b80601f0160208091040260200160405190810160405280929190818152602001828054612bbd90615b54565b8015612c0a5780601f10612bdf57610100808354040283529160200191612c0a565b820191906000526020600020905b815481529060010190602001808311612bed57829003601f168201915b5050505050806020019051810190612c229190615fa8565b9050612c2c614afc565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3385604051612c5d929190615fc5565b60405180910390a1612c7134156019613b2d565b612c7a336133f1565b815260008151516001811115612c9257612c926157bb565b1415612ca45760006020820152612cd4565b60018151516001811115612cba57612cba6157bb565b1415612cd457805160409081015190820181905260208201525b6000612cdf336128c3565b516001811115612cf157612cf16157bb565b1415612d035760006060820152612d2e565b6001612d0e336128c3565b516001811115612d2057612d206157bb565b1415612d2e57600160608201525b80602001518261010001511015612d46576000612d4c565b80606001515b156130105760008151516001811115612d6757612d676157bb565b1415612d795760006080820152612da8565b60018151516001811115612d8f57612d8f6157bb565b1415612da85780516040015160a0820181905260808201525b8060800151826060015183608001518460e00151600060018110612dce57612dce615fef565b602002015151612dde919061601b565b612de8919061603a565b612df2919061601b565b60c08201526000612e023361175e565b516001811115612e1457612e146157bb565b1415612e325760a08201516001600160a01b031660e0820152612e79565b6001612e3d3361175e565b516001811115612e4f57612e4f6157bb565b1415612e7957612e5e3361175e565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015612eba573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516a18db185a5b54185cdcd95960aa1b905251908401519151600080516020616c2f83398151915292612f11929161605c565b60405180910390a1604051600181527fcc25824019bccc49cd0eaca14031a775879515cbfeb1787333115860780282239060200160405180910390a160016020840152612f5c614b72565b825181516001600160a01b039182169052602080850151835190910152604080850151835190831691015260608085015183519091015260808085015183519091015260a0808501518351921691015260c0830151612fbd90600190616075565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c0820151610100840151612ffe9190616075565b602082015160800152610d1281614615565b610140810180516a18db185a5b51985a5b195960aa1b9052516020830151604051600080516020616c2f8339815191529261304c92909161605c565b60405180910390a1604051600081527fddd2627fda5740e9974d8488e07cd3f3eb9cad00309c54d79d2e072c05f7c6259060200160405180910390a160006020840152613097614b72565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e0880180515151825190950194909452805143930192909252915181519092019190915261010085015190519091015261149b81614615565b6131406004600054146013613b2d565b815161315b90158061315457508251600154145b6014613b2d565b60008080556002805461316d90615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461319990615b54565b80156131e65780601f106131bb576101008083540402835291602001916131e6565b820191906000526020600020905b8154815290600101906020018083116131c957829003601f168201915b50505050508060200190518101906131fe919061681e565b905061321d604051806040016040528060008152602001600081525090565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338560405161324e929190615ca4565b60405180910390a161326234156011613b2d565b815161327a906001600160a01b031633146012613b2d565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f193505050501580156132bc573d6000803e3d6000fd5b5061010082015151516132d19060649061603a565b8082526101208301516132e49080616075565b6132ee9190616075565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561332d573d6000803e3d6000fd5b50613336614d1b565b82516001600160a01b039081168252602080850151818401526040808601518316818501526060808701519085015260a080870151608086015260c0808801519186019190915260e0808801519094169085015261010080870180519486019490945292515151928401929092528381015161012084015260056000554360015590516133c5918391016168d3565b604051602081830303815290604052600290805190602001906133e9929190614c3d565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561343d5761343d6157bb565b141561182a576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561347e5761347e6157bb565b600181111561348f5761348f6157bb565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6134c4600b600054146022613b2d565b81516134df9015806134d857508251600154145b6023613b2d565b6000808055600280546134f190615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461351d90615b54565b801561356a5780601f1061353f5761010080835404028352916020019161356a565b820191906000526020600020905b81548152906001019060200180831161354d57829003601f168201915b50505050508060200190518101906135829190616758565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516135b5929190615ca4565b60405180910390a16135c934156020613b2d565b80516135e1906001600160a01b031633146021613b2d565b6135e9614b72565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610ab981613fe7565b61368c600a60005414601e613b2d565b81516136a79015806136a057508251600154145b601f613b2d565b6000808055600280546136b990615b54565b80601f01602080910402602001604051908101604052809291908181526020018280546136e590615b54565b80156137325780601f1061370757610100808354040283529160200191613732565b820191906000526020600020905b81548152906001019060200180831161371557829003601f168201915b505050505080602001905181019061374a919061681e565b9050613769604051806040016040528060008152602001600081525090565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338560405161379a929190615ca4565b60405180910390a16137ae3415601c613b2d565b81516137c6906001600160a01b03163314601d613b2d565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f19350505050158015613808573d6000803e3d6000fd5b50610100820151515161381d9060649061603a565b8082526101208301516138309080616075565b61383a9190616075565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613879573d6000803e3d6000fd5b50613882614d1b565b82516001600160a01b039081168252602080850151818401526040808601518316818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600b6000554360015590516133c5918391016168d3565b6139216015600054146035613b2d565b815161393c90158061393557508251600154145b6036613b2d565b60008080556002805461394e90615b54565b80601f016020809104026020016040519081016040528092919081815260200182805461397a90615b54565b80156139c75780601f1061399c576101008083540402835291602001916139c7565b820191906000526020600020905b8154815290600101906020018083116139aa57829003601f168201915b50505050508060200190518101906139df91906164cf565b90506139f381608001514310156037613b2d565b7fda00a95c1dcc12171d6effb435667fe1e6639deaf742996695658fb05741b8d73384604051613a24929190615ca4565b60405180910390a1613a3834156033613b2d565b8051613a50906001600160a01b031633146034613b2d565b613a58614cc1565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190851690820152608080870151865182015260a080880151875182015260c08089015188519088169082015260e0808a0151878a0180519115159091526101008b01518151909801979097526101208a01518751909601959095526101408901518651971696909301959095528351439101526101608601518351909401939093526101808501518251909301929092526101a0840151905190910152610ab981614136565b8161040a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613b5b614d8f565b600082602001516020015111613b72576000613b7b565b60208201515115155b15613c2257613b88614de3565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152818601805183015160808087019190915281519094015160a0860152519092015160c08401526014600055436001559051613bfe918391016168e2565b60405160208183030381529060405260029080519060200190610ab9929190614c3d565b81515160208301516060015151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613c66573d6000803e3d6000fd5b508151516020830151606081015151516080909101516001600160a01b03909216916108fc91613c9591616075565b6040518115909202916000818181858888f19350505050158015613cbd573d6000803e3d6000fd5b506020828101516060015151908101519051613cd99190616075565b815152602082810180516060908101515183015184519093019290925280518201515160409081015184519015159101525101518151613d1c91906000906140aa565b60208281018281529151516040840151528381015160600151518101519151510151613d489190616075565b604082810180516020908101939093528284015151820151905190151590820152835101519083015160600151613d8191906000612892565b613d958160200151600083604001516140aa565b516040015115613db5576000808055600181905561040a90600290614ce1565b815160400151613dc490614600565b6000808055600181905561040a90600290614ce1565b613de2614d8f565b60208201515115613e4557613df5614e34565b8251516001600160a01b039081168252835160209081015190911681830152808401805160409081015181850152905160609081015190840152601a6000554360015551613bfe91839101616949565b8151516020830151604090810151515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613e8a573d6000803e3d6000fd5b508151516020830151604081015151516060909101516001600160a01b03909216916108fc91613eb991616075565b6040518115909202916000818181858888f19350505050158015613ee1573d6000803e3d6000fd5b506020828101516040015151908101519051613efd9190616075565b81515260208281018051604090810151518301518451909301929092528051820151518201518351901515908301525101518151613f3e91906000906140aa565b602082810182815291515160408085015191909152848201510151518101519151510151613f6c9190616075565b6040828101805160209081019390935282840151518201519051901515908201528351820151918401510151613fa491906000612892565b613fb88160200151600083604001516140aa565b516040015115613fd8576000808055600181905561040a90600290614ce1565b815160200151613dc490614600565b613fef614d8f565b60008260200151602001511161400657600061400f565b60208201515115155b15613c225761401c614e53565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152600f600055436001559051613bfe91839101616a0c565b6140b2614eaf565b60005b60018110156140fe578481600181106140d0576140d0615fef565b60200201518282600181106140e7576140e7615fef565b6020020152806140f681616a1b565b9150506140b5565b508181846001811061411257614112615fef565b60200201529392505050565b600061412c838530856146d8565b90505b9392505050565b61413e614efa565b815160800151602083015160a00151111561415a576000614161565b6020820151515b156142395761416e614f61565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151841681860152865160809081015181870152875160a09081015190870152875160c090810151861681880152848901805151151560e0808a019190915281518701516101008a015281518601516101208a0152815190940151909616610140880152855190910151610160870152845101516101808601529251909201516101a08401526015600055436001559051613bfe91839101616a36565b600082600001516020015160600151836020015160200151101561425e576001614261565b60005b14156143bc578051651c185cdcd95960d21b9052805182516040908101519051600080516020616c2f8339815191529261429c92909161605c565b60405180910390a16064826020015160e001516142b9919061603a565b602080830182905283015160e001516142d29190616075565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015614317573d6000803e3d6000fd5b50614320614ff5565b8251516001600160a01b03908116825283516040908101516020808501919091528551606090810151841683860152865160a09081015182870152875160c0908101518616608088015283890180518501519288019290925281518501518188015281519092015190941660e08601529251909201516101008401528381015161012084015260046000554360015551613bfe91839101616bae565b81600001516020015161012001518260200151602001511061452c57606081018051651c185cdcd95960d21b90525182516040908101519051600080516020616c2f8339815191529261441092909161605c565b60405180910390a16064826020015160e0015161442d919061603a565b60808201819052602083015160e001516144479190616075565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561448a573d6000803e3d6000fd5b50614493614ff5565b8251516001600160a01b03908116825283516040908101516020808501919091528551606090810151841683860152865160a09081015182870152875160c0908101518616608088015283890180518501518389015280518601518289015280519093015190951660e087015290519093015161010085015291840151610120840152600a6000554360015551613bfe91839101616bae565b60c0810180516519985a5b195960d21b90525182516040908101519051600080516020616c2f8339815191529261456492909161605c565b60405180910390a1614574615065565b8251516001600160a01b039081168252835160409081015160208085019190915285516060908101518416838601528187018051840151828701528051909101519093166080850152825160c09081015160a0860152925160e001519284019290925260106000554360015551613bfe91839101616bbd565b6145f782826147b2565b61040a57600080fd5b6146098161488d565b61461257600080fd5b50565b61461d614d8f565b60008260200151602001511161463457600061463d565b60208201515115155b15613c225761464a614e53565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e086015251909201516101008401526009600055436001559051613bfe91839101616a0c565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161473f91616c12565b60006040518083038185875af1925050503d806000811461477c576040519150601f19603f3d011682016040523d82523d6000602084013e614781565b606091505b509150915061479282826001614932565b50808060200190518101906147a791906159f3565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016147de91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161481c9190616c12565b60006040518083038185875af1925050503d8060008114614859576040519150601f19603f3d011682016040523d82523d6000602084013e61485e565b606091505b509150915061486f82826003614932565b508080602001905181019061488491906159f3565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916148d491616c12565b60006040518083038185875af1925050503d8060008114614911576040519150601f19603f3d011682016040523d82523d6000602084013e614916565b606091505b509150915061492782826004614932565b506001949350505050565b6060831561494157508161412f565b8251156149515782518084602001fd5b60405163100960cb60e01b815260048101839052602401613b4a565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060400160405280600081526020016149cb6150b6565b905290565b6040518060400160405280600081526020016149cb60405180602001604052806000151581525090565b6040518060400160405280600081526020016149cb60408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b81526020016149cb6150c9565b6040805160e081018252600060a0820181815260c08301829052825282516020808201855291815290820152908101614a976150f1565b8152602001614ab9604051806040016040528060008152602001600081525090565b81526020016149cb60408051602081019091526000815290565b6040805160808101825260009181018281526060820192909252908152602081016149cb614e34565b604080516101c0810182526000610160820181815261018083018290526101a0830182905282526020808301829052828401829052606083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290528351908101909352825290610120820190614ab9565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190614a53565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101614be2614eaf565b8152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001614c12615104565b81526020016000815260200160006001600160a01b0316815260200160008152602001614be2614eaf565b828054614c4990615b54565b90600052602060002090601f016020900481019282614c6b5760008555614cb1565b82601f10614c8457805160ff1916838001178555614cb1565b82800160010185558215614cb1579182015b82811115614cb1578251825591602001919060010190614c96565b50614cbd929150615202565b5090565b6040518060400160405280614cd4615217565b81526020016149cb615275565b508054614ced90615b54565b6000825580601f10614cfd575050565b601f0160209004906000526020600020908101906146129190615202565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001614d7b614eaf565b815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101614dc0614eaf565b815260408051606081018252600080825260208281018290529282015291015290565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001614be2614eaf565b6040805160808101825260008082526020820152908101614be2614eaf565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614be25b60405180602001604052806001905b614ee4604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081614ebe5790505090565b604080516101008101909152600060e08201908152819081526020016000815260200160008152602001614f3960408051602081019091526000815290565b815260200160008152602001600081526020016149cb60408051602081019091526000815290565b604051806101c0016040528060006001600160a01b03168152602001614f85615104565b81526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614be2614eaf565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001614be2614eaf565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001614be2614eaf565b60405180602001604052806149cb6152be565b6040518060a00160405280600081526020016000815260200160008152602001614be2614eaf565b60405180602001604052806149cb61531d565b604080516101c081018252600080825260208201529081016151546040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b815260200160008152602001600081526020016151986040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016151d760408051602081019091526000815290565b8152604080516020808201835260008083528185019290925282519081018352908152910190614be2565b5b80821115614cbd5760008155600101615203565b6040518060e0016040528060006001600160a01b0316815260200161523a615104565b81526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001614be2614eaf565b604080516080810190915280600081526020016152ee604051806040016040528060008152602001600081525090565b81526020016152fb6150f1565b81526020016149cb604051806040016040528060008152602001600081525090565b6040518060c001604052806000815260200161534460408051602081019091526000815290565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526000602080830182905260408051608081018252838152918201839052818101839052606082019290925291015290565b6000604082840312156153ec57600080fd5b50919050565b60006040828403121561540457600080fd5b61412f83836153da565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156154475761544761540e565b60405290565b60405160c0810167ffffffffffffffff811182821017156154475761544761540e565b6040516080810167ffffffffffffffff811182821017156154475761544761540e565b6040516020810167ffffffffffffffff811182821017156154475761544761540e565b6040805190810167ffffffffffffffff811182821017156154475761544761540e565b6040516060810167ffffffffffffffff811182821017156154475761544761540e565b60405160e0810167ffffffffffffffff811182821017156154475761544761540e565b604051610120810167ffffffffffffffff811182821017156154475761544761540e565b6040516101c0810167ffffffffffffffff811182821017156154475761544761540e565b604051610140810167ffffffffffffffff811182821017156154475761544761540e565b6001600160601b03198116811461461257600080fd5b69ffffffffffffffffffff198116811461461257600080fd5b600060a082840312156155cc57600080fd5b6155d4615424565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135615606816155a1565b608082015292915050565b600060c0828403121561562357600080fd5b61562b61544d565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a08201356156678161558b565b60a082015292915050565b6001600160a01b038116811461461257600080fd5b803561183581615672565b6000608082840312156156a457600080fd5b6156ac615470565b9050813581526020820135602082015260408201356040820152606082013563ffffffff60e01b811681146156e057600080fd5b606082015292915050565b60008183036102408112156156ff57600080fd5b61570761544d565b8335815291506020601f198201121561571f57600080fd5b50615728615493565b60208301356157368161558b565b8152602082015261574a83604084016155ba565b604082015261575c8360e08401615611565b606082015261576e6101a08301615687565b6080820152615667836101c08401615692565b6000610240828403121561579457600080fd5b61412f83836156eb565b6000602082840312156157b057600080fd5b813561412f81615672565b634e487b7160e01b600052602160045260246000fd5b60028110614612576146126157bb565b815160608201906157f1816157d1565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000806040838503121561582c57600080fd5b50508035926020909101359150565b8151606082019061584b816157d1565b8083525060208301511515602083015260408301511515604083015292915050565b600061030082840312156153ec57600080fd5b60006020828403121561589257600080fd5b5035919050565b60005b838110156158b457818101518382015260200161589c565b83811115610ab95750506000910152565b82815260406020820152600082518060408401526158ea816060850160208701615899565b601f01601f1916919091016060019392505050565b8151606082019061590f816157d1565b808352506020830151151560208301526040830151604083015292915050565b801515811461461257600080fd5b60006040828403121561594f57600080fd5b6159576154b6565b8235815260208301356159698161592f565b60208201529392505050565b6000818303604081121561598857600080fd5b6159906154b6565b8335815291506020601f19820112156159a857600080fd5b506159b1615493565b60208301356159bf8161592f565b8152602082015292915050565b6000604082840312156159de57600080fd5b61412f8383615975565b80516118358161592f565b600060208284031215615a0557600080fd5b815161412f8161592f565b60008183036040811215615a2357600080fd5b615a2b6154b6565b833581526020601f1983011215615a4157600080fd5b615a49615493565b9150615a53615493565b602094850135815282529283015250919050565b600060408284031215615a7957600080fd5b615a816154b6565b9050813581526020820135602082015292915050565b6000818303610300811215615aab57600080fd5b615ab36154b6565b833581526102e0601f1983011215615aca57600080fd5b615ad2615493565b615ada615470565b602086013560038110615aec57600080fd5b8152615afb8760408801615a67565b6020820152610240607f1985011215615b1357600080fd5b615b1b615493565b9350615b2a87608088016156eb565b8452836040820152615b40876102c08801615a67565b606082015281526020820152949350505050565b600181811c90821680615b6857607f821691505b602082108114156153ec57634e487b7160e01b600052602260045260246000fd5b805161183581615672565b600082601f830112615ba557600080fd5b615bad615493565b80606080850186811115615bc057600080fd5b855b81811015615c1157828189031215615bda5760008081fd5b615be26154d9565b8151815260208083015181830152604080840151615bff8161592f565b90830152908652909401938201615bc2565b50919695505050505050565b60006101208284031215615c3057600080fd5b615c386154fc565b8251615c4381615672565b8152602083810151908201526040830151615c5d81615672565b6040820152606083810151908201526080830151615c7a81615672565b6080820152615c8c8460a08501615b94565b60a0820152610100929092015160c083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060c08284031215615cde57600080fd5b615ce6615470565b8251615cf181615672565b81526020830151615d0181615672565b6020820152615d138460408501615b94565b604082015260a09290920151606083015250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526bffffffffffffffffffffffff1960a08201511660a08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b6001600160a01b0383811682528251602080840191909152830151518051610320840192919060038110615e1357615e136157bb565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526bffffffffffffffffffffffff196020820151511660c08601526040810151615e6860e0870182615d2a565b506060810151615e7c610180870182615d67565b508260808201511661024086015260a0810151925050615ea0610260850183615db0565b6060015180516102e085015260208101516103008501529050509392505050565b86815285516001600160601b03191660208201526102408101615ee76040830187615d2a565b615ef460e0830186615d67565b6001600160a01b0384166101a08301526147a76101c0830184615db0565b60006101608284031215615f2557600080fd5b615f2d61551f565b9050615f3882615b89565b815260208201516020820152615f5060408301615b89565b60408201526060820151606082015260808201516080820152615f7560a08301615b89565b60a082015260c082015160c0820152615f918360e08401615b94565b60e082015261014082015161010082015292915050565b60006101608284031215615fbb57600080fd5b61412f8383615f12565b6001600160a01b03831681526060810161412f602083018480518252602090810151511515910152565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561603557616035616005565b500290565b60008261605757634e487b7160e01b600052601260045260246000fd5b500490565b91516001600160601b0319168252602082015260400190565b60008282101561608757616087616005565b500390565b600060c0828403121561609e57600080fd5b6160a661544d565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a08201516156678161558b565b600060a082840312156160f457600080fd5b6160fc615424565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151615606816155a1565b60006020828403121561614057600080fd5b616148615493565b905081516161558161558b565b815292915050565b60006020828403121561616f57600080fd5b616177615493565b9151825250919050565b60006020828403121561619357600080fd5b61619b615493565b82519091506001600160c01b03198116811461615557600080fd5b60006102e082840312156161c957600080fd5b6161d1615543565b9050815181526161e360208301615b89565b60208201526161f5836040840161608c565b6040820152610100808301516060830152610120808401516080840152610140616221868287016160e2565b60a08501526101e085015160c085015261020085015160e08501526162496102208601615b89565b838501526102408501518285015261626586610260870161612e565b8185015250505061627a83610280840161615d565b61016082015261628e836102a08401616181565b6101808201526102c08201516101a082015292915050565b60006103c082840312156162b957600080fd5b6162c161544d565b82516162cc81615672565b815260208301516162dc8161592f565b60208201526162ee84604085016161b6565b6040820152610320830151606082015261034083015161630d81615672565b6080820152616320846103608501615b94565b60a08201529392505050565b6000821982111561633f5761633f616005565b500190565b80518252602081015161636260208401826001600160a01b03169052565b5060408101516163756040840182615d67565b506060810151610100818185015260808301519150610120828186015260a084015192506101406163a881870185615d2a565b60c08501516101e087015260e0850151610200870152918401516001600160a01b0316610220860152830151610240850152820151516001600160601b0319166102608401525061016081015151610280830152610180810151516001600160c01b0319166102a08301526101a001516102c090910152565b8060005b6001811015610ab9578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101616425565b81516001600160a01b0390811682526020808401516103e08401929161648790850182616344565b506040840151610300840152606084015116610320830152608083015161034083015260a08301516164bd610360840182616421565b5060c08301516103c083015292915050565b60006104c082840312156164e257600080fd5b6164ea615543565b6164f383615b89565b815261650284602085016161b6565b6020820152610300830151604082015261651f6103208401615b89565b6060820152610340830151608082015261036083015160a08201526165476103808401615b89565b60c08201526165596103a084016159e8565b60e08201526103c08301516101008201526103e08301516101208201526165836104008401615b89565b6101408201526104208301516101608201526165a3846104408501615b94565b6101808201526104a092909201516101a083015250919050565b600061012082840312156165d057600080fd5b6165d86154fc565b82516165e381615672565b81526020838101519082015260408301516165fd81615672565b6040820152606083015161661081615672565b606082015260808381015190820152615c8c8460a08501615b94565b60006103e0828403121561663f57600080fd5b6166476154fc565b825161665281615672565b815261666184602085016161b6565b6020820152610300830151604082015261032083015161668081615672565b6060820152610340830151608082015261669e846103608501615b94565b60a08201526103c0929092015160c083015250919050565b600061018082840312156166c957600080fd5b6166d1615567565b90506166dc82615b89565b8152602082015160208201526166f460408301615b89565b6040820152606082015160608201526080820151608082015260a082015160a082015261672360c08301615b89565b60c08201526167358360e08401615b94565b60e082015261014082015161010082015261016082015161012082015292915050565b6000610180828403121561676b57600080fd5b61412f83836166b6565b6000610180828403121561678857600080fd5b616790615567565b905061679b82615b89565b8152602082015160208201526167b360408301615b89565b6040820152606082015160608201526167ce60808301615b89565b608082015260a082015160a082015260c082015160c08201526167f360e08301615b89565b60e082015261010061680784828501615b94565b818301525061016082015161012082015292915050565b6000610180828403121561683157600080fd5b61412f8383616775565b80516001600160a01b0316825260208101516020830152604081015161686c60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c08101516168a560c08401826001600160a01b03169052565b5060e08101516168b860e0840182616421565b50610100810151610140830152610120015161016090910152565b61018081016105bd828461683b565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152806060850151166060840152506080830151608083015260a083015161693760a0840182616421565b5060c083015161010083015292915050565b81516001600160a01b0390811682526020808401519091169082015260408083015160c083019161697c90840182616421565b50606083015160a083015292915050565b60018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a08101516169df60a08401826001600160a01b03169052565b5060c081015160c083015260e08101516169fc60e0840182616421565b5061010001516101409190910152565b61016081016105bd828461698d565b6000600019821415616a2f57616a2f616005565b5060010190565b81516001600160a01b031681526104c081016020830151616a5a6020840182616344565b50604083015161030083015260608301516001600160a01b03908116610320840152608084015161034084015260a084015161036084015260c0840151811661038084015260e084015115156103a08401526101008401516103c08401526101208401516103e084015261014084015116610400830152610160830151610420830152610180830151616af1610440840182616421565b506101a08301516104a083015292915050565b80516001600160a01b03168252602081015160208301526040810151616b3560408401826001600160a01b03169052565b50606081015160608301526080810151616b5a60808401826001600160a01b03169052565b5060a081015160a083015260c081015160c083015260e0810151616b8960e08401826001600160a01b03169052565b5061010080820151616b9d82850182616421565b505061012001516101609190910152565b61018081016105bd8284616b04565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152606084015160608401528060808501511660808401525060a083015161693760a0840182616421565b60008251616c24818460208701615899565b919091019291505056fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220d80e6e8d3d8a0a5ce81fe54ddde88a9740dd4ad43b32fa781f4899d91cdad78364736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212203a43b8ec2ae59ed439c7b29125a7ed705060e0a5fab441a922441e5da139701c64736f6c634300080c00338e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4d`,
  BytecodeLen: 35979,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:85:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:155:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:162:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:164:60:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:185:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:192:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:194:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:217:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:219:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:111:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  22: {
    at: './index.rsh:101:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:279:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:239:37:after expr stmt semicolon',
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
