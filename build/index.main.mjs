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
  
  
  const [v1253, v1263, v1317, v1341, v1849, v1856, v1857] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc1, ctc6, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1865 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v1317, v1341, v1849, v1856, v1857, v1865],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:231:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1869], secs: v1871, time: v1870, didSend: v698, from: v1868 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1874 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1868), null);
      let v1875;
      switch (v1874[0]) {
        case 'None': {
          const v1876 = v1874[1];
          v1875 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1877 = v1874[1];
          v1875 = v1877;
          
          break;
          }
        }
      const v1878 = stdlib.ge(v1857, v1875);
      const v1879 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1868), null);
      let v1880;
      switch (v1879[0]) {
        case 'None': {
          const v1881 = v1879[1];
          v1880 = false;
          
          break;
          }
        case 'Some': {
          const v1882 = v1879[1];
          v1880 = true;
          
          break;
          }
        }
      const v1883 = v1878 ? v1880 : false;
      if (v1883) {
        let v1885;
        switch (v1874[0]) {
          case 'None': {
            const v1886 = v1874[1];
            v1885 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1887 = v1874[1];
            v1885 = v1887;
            
            break;
            }
          }
        const v1888 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1868), null);
        let v1889;
        switch (v1888[0]) {
          case 'None': {
            const v1890 = v1888[1];
            v1889 = v1341;
            
            break;
            }
          case 'Some': {
            const v1891 = v1888[1];
            v1889 = v1891;
            
            break;
            }
          }
        const v1895 = stdlib.sub(v1857, v1885);
        sim_r.txns.push({
          kind: 'from',
          to: v1889,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1868, undefined /* Nothing */);
        const v1898 = 'refundPassed        ';
        null;
        const v1899 = true;
        const v1900 = await txn1.getOutput('Contributors_claimRefund', 'v1899', ctc7, v1899);
        
        const v1905 = stdlib.sub(v1849, stdlib.checkedBigNumberify('./index.rsh:238:30:decimal', stdlib.UInt_max, '1'));
        const v3368 = v1905;
        const v3370 = v1856;
        const v3371 = v1895;
        const v3372 = stdlib.gt(v1905, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
        const v3373 = stdlib.gt(v1895, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
        const v3374 = v3372 ? v3373 : false;
        if (v3374) {
          sim_r.isHalt = false;
          }
        else {
          const v3375 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v3376 = v3375[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v3377 = stdlib.sub(v1895, v3376);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3378 = v3375[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3379 = stdlib.sub(v3376, v3378);
          const v3380 = v3375[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3381 = [v3379, v3378, v3380];
          const v3382 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3381);
          const v3383 = v3382[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3384 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3385 = stdlib.sub(v3384, v3378);
          const v3386 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3387 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3388 = [v3386, v3385, v3387];
          const v3389 = stdlib.Array_set(v3382, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3388);
          stdlib.simTokenBurn(sim_r, v1263, v3378);
          const v3390 = v3389[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3391 = v3390[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3391) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1912 = 'refundFailed        ';
        null;
        const v1913 = false;
        const v1914 = await txn1.getOutput('Contributors_claimRefund', 'v1913', ctc7, v1913);
        
        const v3393 = v1849;
        const v3395 = v1856;
        const v3396 = v1857;
        const v3397 = stdlib.gt(v1849, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
        const v3398 = stdlib.gt(v1857, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
        const v3399 = v3397 ? v3398 : false;
        if (v3399) {
          sim_r.isHalt = false;
          }
        else {
          const v3400 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v3401 = v3400[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v3402 = stdlib.sub(v1857, v3401);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3403 = v3400[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3404 = stdlib.sub(v3401, v3403);
          const v3405 = v3400[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3406 = [v3404, v3403, v3405];
          const v3407 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3406);
          const v3408 = v3407[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3409 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3410 = stdlib.sub(v3409, v3403);
          const v3411 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3412 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3413 = [v3411, v3410, v3412];
          const v3414 = stdlib.Array_set(v3407, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3413);
          stdlib.simTokenBurn(sim_r, v1263, v3403);
          const v3415 = v3414[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3416 = v3415[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3416) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
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
  const {data: [v1869], secs: v1871, time: v1870, didSend: v698, from: v1868 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1874 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1868), null);
  let v1875;
  switch (v1874[0]) {
    case 'None': {
      const v1876 = v1874[1];
      v1875 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1877 = v1874[1];
      v1875 = v1877;
      
      break;
      }
    }
  const v1878 = stdlib.ge(v1857, v1875);
  const v1879 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1868), null);
  let v1880;
  switch (v1879[0]) {
    case 'None': {
      const v1881 = v1879[1];
      v1880 = false;
      
      break;
      }
    case 'Some': {
      const v1882 = v1879[1];
      v1880 = true;
      
      break;
      }
    }
  const v1883 = v1878 ? v1880 : false;
  if (v1883) {
    let v1885;
    switch (v1874[0]) {
      case 'None': {
        const v1886 = v1874[1];
        v1885 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1887 = v1874[1];
        v1885 = v1887;
        
        break;
        }
      }
    const v1888 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1868), null);
    let v1889;
    switch (v1888[0]) {
      case 'None': {
        const v1890 = v1888[1];
        v1889 = v1341;
        
        break;
        }
      case 'Some': {
        const v1891 = v1888[1];
        v1889 = v1891;
        
        break;
        }
      }
    const v1895 = stdlib.sub(v1857, v1885);
    ;
    await stdlib.mapSet(map2, v1868, undefined /* Nothing */);
    const v1898 = 'refundPassed        ';
    null;
    const v1899 = true;
    const v1900 = await txn1.getOutput('Contributors_claimRefund', 'v1899', ctc7, v1899);
    if (v698) {
      stdlib.protect(ctc0, await interact.out(v1869, v1900), {
        at: './index.rsh:231:14:application',
        fs: ['at ./index.rsh:231:14:application call to [unknown function] (defined at: ./index.rsh:231:14:function exp)', 'at ./index.rsh:237:17:application call to "notify" (defined at: ./index.rsh:231:40:function exp)', 'at ./index.rsh:231:40:application call to [unknown function] (defined at: ./index.rsh:231:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1905 = stdlib.sub(v1849, stdlib.checkedBigNumberify('./index.rsh:238:30:decimal', stdlib.UInt_max, '1'));
    const v3368 = v1905;
    const v3370 = v1856;
    const v3371 = v1895;
    const v3372 = stdlib.gt(v1905, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
    const v3373 = stdlib.gt(v1895, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
    const v3374 = v3372 ? v3373 : false;
    if (v3374) {
      return;
      }
    else {
      const v3375 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
      const v3376 = v3375[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
      const v3377 = stdlib.sub(v1895, v3376);
      ;
      ;
      const v3378 = v3375[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3379 = stdlib.sub(v3376, v3378);
      const v3380 = v3375[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3381 = [v3379, v3378, v3380];
      const v3382 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3381);
      const v3383 = v3382[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3384 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3385 = stdlib.sub(v3384, v3378);
      const v3386 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3387 = v3383[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3388 = [v3386, v3385, v3387];
      const v3389 = stdlib.Array_set(v3382, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3388);
      undefined /* TokenBurn */;
      const v3390 = v3389[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3391 = v3390[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3391) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1912 = 'refundFailed        ';
    null;
    const v1913 = false;
    const v1914 = await txn1.getOutput('Contributors_claimRefund', 'v1913', ctc7, v1913);
    if (v698) {
      stdlib.protect(ctc0, await interact.out(v1869, v1914), {
        at: './index.rsh:231:14:application',
        fs: ['at ./index.rsh:231:14:application call to [unknown function] (defined at: ./index.rsh:231:14:function exp)', 'at ./index.rsh:241:17:application call to "notify" (defined at: ./index.rsh:231:40:function exp)', 'at ./index.rsh:231:40:application call to [unknown function] (defined at: ./index.rsh:231:40:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v3393 = v1849;
    const v3395 = v1856;
    const v3396 = v1857;
    const v3397 = stdlib.gt(v1849, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
    const v3398 = stdlib.gt(v1857, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
    const v3399 = v3397 ? v3398 : false;
    if (v3399) {
      return;
      }
    else {
      const v3400 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
      const v3401 = v3400[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
      const v3402 = stdlib.sub(v1857, v3401);
      ;
      ;
      const v3403 = v3400[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3404 = stdlib.sub(v3401, v3403);
      const v3405 = v3400[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3406 = [v3404, v3403, v3405];
      const v3407 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3406);
      const v3408 = v3407[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3409 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3410 = stdlib.sub(v3409, v3403);
      const v3411 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3412 = v3408[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3413 = [v3411, v3410, v3412];
      const v3414 = stdlib.Array_set(v3407, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3413);
      undefined /* TokenBurn */;
      const v3415 = v3414[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3416 = v3415[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3416) {
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
  
  
  const [v1253, v1263, v1317, v1327, v1339, v1341, v1509, v1516, v1517] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1526 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:176:9:application call to [unknown function] (defined at: ./index.rsh:176:9:function exp)', 'at ./index.rsh:176:9:application call to [unknown function] (defined at: ./index.rsh:176:9:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v1317, v1327, v1339, v1341, v1509, v1516, v1517, v1526],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:176:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1530], secs: v1532, time: v1531, didSend: v447, from: v1529 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1535 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1529), null);
      let v1536;
      switch (v1535[0]) {
        case 'None': {
          const v1537 = v1535[1];
          v1536 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1538 = v1535[1];
          v1536 = v1538;
          
          break;
          }
        }
      const v1539 = stdlib.ge(v1517, v1536);
      const v1540 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1529), null);
      let v1541;
      switch (v1540[0]) {
        case 'None': {
          const v1542 = v1540[1];
          v1541 = false;
          
          break;
          }
        case 'Some': {
          const v1543 = v1540[1];
          v1541 = true;
          
          break;
          }
        }
      const v1544 = v1539 ? v1541 : false;
      if (v1544) {
        const v1545 = v1516[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
        const v1546 = v1545[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
        const v1547 = stdlib.mul(v1546, v1339);
        const v1549 = stdlib.div(v1547, v1327);
        let v1551;
        switch (v1535[0]) {
          case 'None': {
            const v1552 = v1535[1];
            v1551 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1553 = v1535[1];
            v1551 = v1553;
            
            break;
            }
          }
        const v1554 = stdlib.mul(v1549, v1551);
        const v1555 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1529), null);
        let v1556;
        switch (v1555[0]) {
          case 'None': {
            const v1557 = v1555[1];
            v1556 = v1341;
            
            break;
            }
          case 'Some': {
            const v1558 = v1555[1];
            v1556 = v1558;
            
            break;
            }
          }
        const v1562 = stdlib.sub(v1517, v1554);
        sim_r.txns.push({
          kind: 'from',
          to: v1556,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1529, undefined /* Nothing */);
        const v1565 = 'claimPassed         ';
        null;
        const v1566 = true;
        const v1567 = await txn1.getOutput('Contributors_claimToken', 'v1566', ctc7, v1566);
        
        const v1572 = stdlib.sub(v1509, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
        const v3418 = v1546;
        const v3420 = v1516;
        const v3421 = v1562;
        const v3422 = stdlib.gt(v1546, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
        const v3423 = stdlib.gt(v1572, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
        const v3424 = v3422 ? v3423 : false;
        if (v3424) {
          sim_r.isHalt = false;
          }
        else {
          const v3427 = stdlib.sub(v1562, v1546);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3428 = v1545[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3429 = stdlib.sub(v1546, v3428);
          const v3430 = v1545[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3431 = [v3429, v3428, v3430];
          const v3432 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3431);
          const v3433 = v3432[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3434 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3435 = stdlib.sub(v3434, v3428);
          const v3436 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3437 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3438 = [v3436, v3435, v3437];
          const v3439 = stdlib.Array_set(v3432, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3438);
          stdlib.simTokenBurn(sim_r, v1263, v3428);
          const v3440 = v3439[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3441 = v3440[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3441) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1580 = 'claimFailed         ';
        null;
        const v1581 = false;
        const v1582 = await txn1.getOutput('Contributors_claimToken', 'v1581', ctc7, v1581);
        
        const v1587 = v1516[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
        const v1588 = v1587[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
        const v3443 = v1588;
        const v3445 = v1516;
        const v3446 = v1517;
        const v3447 = stdlib.gt(v1588, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
        const v3448 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
        const v3449 = v3447 ? v3448 : false;
        if (v3449) {
          sim_r.isHalt = false;
          }
        else {
          const v3452 = stdlib.sub(v1517, v1588);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3453 = v1587[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3454 = stdlib.sub(v1588, v3453);
          const v3455 = v1587[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3456 = [v3454, v3453, v3455];
          const v3457 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3456);
          const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3459 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3460 = stdlib.sub(v3459, v3453);
          const v3461 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3462 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3463 = [v3461, v3460, v3462];
          const v3464 = stdlib.Array_set(v3457, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3463);
          stdlib.simTokenBurn(sim_r, v1263, v3453);
          const v3465 = v3464[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3466 = v3465[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3466) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
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
  const {data: [v1530], secs: v1532, time: v1531, didSend: v447, from: v1529 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1535 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1529), null);
  let v1536;
  switch (v1535[0]) {
    case 'None': {
      const v1537 = v1535[1];
      v1536 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1538 = v1535[1];
      v1536 = v1538;
      
      break;
      }
    }
  const v1539 = stdlib.ge(v1517, v1536);
  const v1540 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1529), null);
  let v1541;
  switch (v1540[0]) {
    case 'None': {
      const v1542 = v1540[1];
      v1541 = false;
      
      break;
      }
    case 'Some': {
      const v1543 = v1540[1];
      v1541 = true;
      
      break;
      }
    }
  const v1544 = v1539 ? v1541 : false;
  if (v1544) {
    const v1545 = v1516[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
    const v1546 = v1545[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
    const v1547 = stdlib.mul(v1546, v1339);
    const v1549 = stdlib.div(v1547, v1327);
    let v1551;
    switch (v1535[0]) {
      case 'None': {
        const v1552 = v1535[1];
        v1551 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1553 = v1535[1];
        v1551 = v1553;
        
        break;
        }
      }
    const v1554 = stdlib.mul(v1549, v1551);
    const v1555 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1529), null);
    let v1556;
    switch (v1555[0]) {
      case 'None': {
        const v1557 = v1555[1];
        v1556 = v1341;
        
        break;
        }
      case 'Some': {
        const v1558 = v1555[1];
        v1556 = v1558;
        
        break;
        }
      }
    const v1562 = stdlib.sub(v1517, v1554);
    ;
    await stdlib.mapSet(map2, v1529, undefined /* Nothing */);
    const v1565 = 'claimPassed         ';
    null;
    const v1566 = true;
    const v1567 = await txn1.getOutput('Contributors_claimToken', 'v1566', ctc7, v1566);
    if (v447) {
      stdlib.protect(ctc0, await interact.out(v1530, v1567), {
        at: './index.rsh:176:10:application',
        fs: ['at ./index.rsh:176:10:application call to [unknown function] (defined at: ./index.rsh:176:10:function exp)', 'at ./index.rsh:182:13:application call to "notify" (defined at: ./index.rsh:176:35:function exp)', 'at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1572 = stdlib.sub(v1509, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
    const v3418 = v1546;
    const v3420 = v1516;
    const v3421 = v1562;
    const v3422 = stdlib.gt(v1546, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
    const v3423 = stdlib.gt(v1572, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
    const v3424 = v3422 ? v3423 : false;
    if (v3424) {
      return;
      }
    else {
      const v3427 = stdlib.sub(v1562, v1546);
      ;
      ;
      const v3428 = v1545[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3429 = stdlib.sub(v1546, v3428);
      const v3430 = v1545[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3431 = [v3429, v3428, v3430];
      const v3432 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3431);
      const v3433 = v3432[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3434 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3435 = stdlib.sub(v3434, v3428);
      const v3436 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3437 = v3433[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3438 = [v3436, v3435, v3437];
      const v3439 = stdlib.Array_set(v3432, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3438);
      undefined /* TokenBurn */;
      const v3440 = v3439[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3441 = v3440[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3441) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1580 = 'claimFailed         ';
    null;
    const v1581 = false;
    const v1582 = await txn1.getOutput('Contributors_claimToken', 'v1581', ctc7, v1581);
    if (v447) {
      stdlib.protect(ctc0, await interact.out(v1530, v1582), {
        at: './index.rsh:176:10:application',
        fs: ['at ./index.rsh:176:10:application call to [unknown function] (defined at: ./index.rsh:176:10:function exp)', 'at ./index.rsh:186:13:application call to "notify" (defined at: ./index.rsh:176:35:function exp)', 'at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1587 = v1516[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
    const v1588 = v1587[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
    const v3443 = v1588;
    const v3445 = v1516;
    const v3446 = v1517;
    const v3447 = stdlib.gt(v1588, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
    const v3448 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
    const v3449 = v3447 ? v3448 : false;
    if (v3449) {
      return;
      }
    else {
      const v3452 = stdlib.sub(v1517, v1588);
      ;
      ;
      const v3453 = v1587[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3454 = stdlib.sub(v1588, v3453);
      const v3455 = v1587[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3456 = [v3454, v3453, v3455];
      const v3457 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3456);
      const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3459 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3460 = stdlib.sub(v3459, v3453);
      const v3461 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3462 = v3458[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3463 = [v3461, v3460, v3462];
      const v3464 = stdlib.Array_set(v3457, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3463);
      undefined /* TokenBurn */;
      const v3465 = v3464[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3466 = v3465[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3466) {
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
  
  
  const [v1253, v1263, v1317, v1327, v1339, v1341, v1692, v1699, v1700] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc1, ctc6, ctc3, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1709 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:206:11:application call to [unknown function] (defined at: ./index.rsh:206:11:function exp)', 'at ./index.rsh:206:11:application call to [unknown function] (defined at: ./index.rsh:206:11:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v1317, v1327, v1339, v1341, v1692, v1699, v1700, v1709],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1713], secs: v1715, time: v1714, didSend: v585, from: v1712 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1718 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1712), null);
      let v1719;
      switch (v1718[0]) {
        case 'None': {
          const v1720 = v1718[1];
          v1719 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1721 = v1718[1];
          v1719 = v1721;
          
          break;
          }
        }
      const v1722 = stdlib.ge(v1700, v1719);
      const v1723 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1712), null);
      let v1724;
      switch (v1723[0]) {
        case 'None': {
          const v1725 = v1723[1];
          v1724 = false;
          
          break;
          }
        case 'Some': {
          const v1726 = v1723[1];
          v1724 = true;
          
          break;
          }
        }
      const v1727 = v1722 ? v1724 : false;
      if (v1727) {
        const v1728 = v1699[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
        const v1729 = v1728[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
        const v1730 = stdlib.mul(v1729, v1339);
        const v1732 = stdlib.div(v1730, v1327);
        let v1734;
        switch (v1718[0]) {
          case 'None': {
            const v1735 = v1718[1];
            v1734 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1736 = v1718[1];
            v1734 = v1736;
            
            break;
            }
          }
        const v1737 = stdlib.mul(v1732, v1734);
        const v1738 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1712), null);
        let v1739;
        switch (v1738[0]) {
          case 'None': {
            const v1740 = v1738[1];
            v1739 = v1341;
            
            break;
            }
          case 'Some': {
            const v1741 = v1738[1];
            v1739 = v1741;
            
            break;
            }
          }
        const v1745 = stdlib.sub(v1700, v1737);
        sim_r.txns.push({
          kind: 'from',
          to: v1739,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1712, undefined /* Nothing */);
        const v1748 = 'claimPaseed         ';
        null;
        const v1749 = true;
        const v1750 = await txn1.getOutput('Contributors_claimToken', 'v1749', ctc7, v1749);
        
        const v1757 = stdlib.sub(v1692, stdlib.checkedBigNumberify('./index.rsh:213:46:decimal', stdlib.UInt_max, '1'));
        const v3468 = v1757;
        const v3470 = v1699;
        const v3471 = v1745;
        const v3472 = stdlib.gt(v1757, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
        const v3473 = stdlib.gt(v1729, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
        const v3474 = v3472 ? v3473 : false;
        if (v3474) {
          sim_r.isHalt = false;
          }
        else {
          const v3477 = stdlib.sub(v1745, v1729);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3478 = v1728[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3479 = stdlib.sub(v1729, v3478);
          const v3480 = v1728[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3481 = [v3479, v3478, v3480];
          const v3482 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3481);
          const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3485 = stdlib.sub(v3484, v3478);
          const v3486 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3487 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3488 = [v3486, v3485, v3487];
          const v3489 = stdlib.Array_set(v3482, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3488);
          stdlib.simTokenBurn(sim_r, v1263, v3478);
          const v3490 = v3489[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3491 = v3490[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3491) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1763 = 'claimFailed         ';
        null;
        const v1764 = false;
        const v1765 = await txn1.getOutput('Contributors_claimToken', 'v1764', ctc7, v1764);
        
        const v1770 = v1699[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
        const v1771 = v1770[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
        const v3493 = v1692;
        const v3495 = v1699;
        const v3496 = v1700;
        const v3497 = stdlib.gt(v1692, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
        const v3498 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
        const v3499 = v3497 ? v3498 : false;
        if (v3499) {
          sim_r.isHalt = false;
          }
        else {
          const v3502 = stdlib.sub(v1700, v1771);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v3503 = v1770[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v3504 = stdlib.sub(v1771, v3503);
          const v3505 = v1770[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3506 = [v3504, v3503, v3505];
          const v3507 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3506);
          const v3508 = v3507[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3509 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v3510 = stdlib.sub(v3509, v3503);
          const v3511 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v3512 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v3513 = [v3511, v3510, v3512];
          const v3514 = stdlib.Array_set(v3507, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3513);
          stdlib.simTokenBurn(sim_r, v1263, v3503);
          const v3515 = v3514[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v3516 = v3515[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v3516) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
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
  const {data: [v1713], secs: v1715, time: v1714, didSend: v585, from: v1712 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1718 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1712), null);
  let v1719;
  switch (v1718[0]) {
    case 'None': {
      const v1720 = v1718[1];
      v1719 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1721 = v1718[1];
      v1719 = v1721;
      
      break;
      }
    }
  const v1722 = stdlib.ge(v1700, v1719);
  const v1723 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1712), null);
  let v1724;
  switch (v1723[0]) {
    case 'None': {
      const v1725 = v1723[1];
      v1724 = false;
      
      break;
      }
    case 'Some': {
      const v1726 = v1723[1];
      v1724 = true;
      
      break;
      }
    }
  const v1727 = v1722 ? v1724 : false;
  if (v1727) {
    const v1728 = v1699[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
    const v1729 = v1728[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
    const v1730 = stdlib.mul(v1729, v1339);
    const v1732 = stdlib.div(v1730, v1327);
    let v1734;
    switch (v1718[0]) {
      case 'None': {
        const v1735 = v1718[1];
        v1734 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1736 = v1718[1];
        v1734 = v1736;
        
        break;
        }
      }
    const v1737 = stdlib.mul(v1732, v1734);
    const v1738 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1712), null);
    let v1739;
    switch (v1738[0]) {
      case 'None': {
        const v1740 = v1738[1];
        v1739 = v1341;
        
        break;
        }
      case 'Some': {
        const v1741 = v1738[1];
        v1739 = v1741;
        
        break;
        }
      }
    const v1745 = stdlib.sub(v1700, v1737);
    ;
    await stdlib.mapSet(map2, v1712, undefined /* Nothing */);
    const v1748 = 'claimPaseed         ';
    null;
    const v1749 = true;
    const v1750 = await txn1.getOutput('Contributors_claimToken', 'v1749', ctc7, v1749);
    if (v585) {
      stdlib.protect(ctc0, await interact.out(v1713, v1750), {
        at: './index.rsh:206:12:application',
        fs: ['at ./index.rsh:206:12:application call to [unknown function] (defined at: ./index.rsh:206:12:function exp)', 'at ./index.rsh:212:15:application call to "notify" (defined at: ./index.rsh:206:37:function exp)', 'at ./index.rsh:206:37:application call to [unknown function] (defined at: ./index.rsh:206:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1757 = stdlib.sub(v1692, stdlib.checkedBigNumberify('./index.rsh:213:46:decimal', stdlib.UInt_max, '1'));
    const v3468 = v1757;
    const v3470 = v1699;
    const v3471 = v1745;
    const v3472 = stdlib.gt(v1757, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
    const v3473 = stdlib.gt(v1729, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
    const v3474 = v3472 ? v3473 : false;
    if (v3474) {
      return;
      }
    else {
      const v3477 = stdlib.sub(v1745, v1729);
      ;
      ;
      const v3478 = v1728[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3479 = stdlib.sub(v1729, v3478);
      const v3480 = v1728[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3481 = [v3479, v3478, v3480];
      const v3482 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3481);
      const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3485 = stdlib.sub(v3484, v3478);
      const v3486 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3487 = v3483[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3488 = [v3486, v3485, v3487];
      const v3489 = stdlib.Array_set(v3482, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3488);
      undefined /* TokenBurn */;
      const v3490 = v3489[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3491 = v3490[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3491) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1763 = 'claimFailed         ';
    null;
    const v1764 = false;
    const v1765 = await txn1.getOutput('Contributors_claimToken', 'v1764', ctc7, v1764);
    if (v585) {
      stdlib.protect(ctc0, await interact.out(v1713, v1765), {
        at: './index.rsh:206:12:application',
        fs: ['at ./index.rsh:206:12:application call to [unknown function] (defined at: ./index.rsh:206:12:function exp)', 'at ./index.rsh:216:15:application call to "notify" (defined at: ./index.rsh:206:37:function exp)', 'at ./index.rsh:206:37:application call to [unknown function] (defined at: ./index.rsh:206:37:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1770 = v1699[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
    const v1771 = v1770[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
    const v3493 = v1692;
    const v3495 = v1699;
    const v3496 = v1700;
    const v3497 = stdlib.gt(v1692, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
    const v3498 = stdlib.gt(v1771, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
    const v3499 = v3497 ? v3498 : false;
    if (v3499) {
      return;
      }
    else {
      const v3502 = stdlib.sub(v1700, v1771);
      ;
      ;
      const v3503 = v1770[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
      const v3504 = stdlib.sub(v1771, v3503);
      const v3505 = v1770[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3506 = [v3504, v3503, v3505];
      const v3507 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3506);
      const v3508 = v3507[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3509 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
      const v3510 = stdlib.sub(v3509, v3503);
      const v3511 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
      const v3512 = v3508[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
      const v3513 = [v3511, v3510, v3512];
      const v3514 = stdlib.Array_set(v3507, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v3513);
      undefined /* TokenBurn */;
      const v3515 = v3514[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
      const v3516 = v3515[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
      if (v3516) {
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
  
  
  const [v1253, v1263, v1313, v1317, v1320, v1327, v1333, v1338, v1339, v1340, v1341, v1342, v1348, v1349] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22'), [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3]);
  const v1361 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v1362 = v1361[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1364 = stdlib.gt(v1362, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1364, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v1313, v1317, v1320, v1327, v1333, v1338, v1339, v1340, v1341, v1342, v1348, v1349, v1361],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [v1362, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1373], secs: v1375, time: v1374, didSend: v261, from: v1372 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v1377 = v1373[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
      const v1381 = stdlib.add(v1349, v1377);
      sim_r.txns.push({
        amt: v1377,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1386 = v1381;
      const v1387 = await txn1.getOutput('Contributors_contribute', 'v1386', ctc3, v1386);
      
      const v1393 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1372), null);
      let v1394;
      switch (v1393[0]) {
        case 'None': {
          const v1395 = v1393[1];
          v1394 = false;
          
          break;
          }
        case 'Some': {
          const v1396 = v1393[1];
          v1394 = true;
          
          break;
          }
        }
      if (v1394) {
        const v1397 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1372), null);
        let v1398;
        switch (v1397[0]) {
          case 'None': {
            const v1399 = v1397[1];
            v1398 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1400 = v1397[1];
            v1398 = v1400;
            
            break;
            }
          }
        await stdlib.simMapSet(sim_r, 1, v1372, v1398);
        const v1401 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:132:23:decimal', stdlib.UInt_max, '1'));
        const v1402 = v1313.hardCap;
        const v1403 = stdlib.add(v1339, v1377);
        const v1404 = stdlib.ge(v1403, v1402);
        const v1405 = v1404 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1406 = stdlib.eq(v1405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3517 = v1406;
        const v3518 = v1339;
        const v3519 = v1401;
        const v3520 = v1372;
        const v3521 = v1374;
        const v3523 = v1348;
        const v3524 = v1381;
        const v3525 = stdlib.le(v1342, v1320);
        const v3526 = v3525 ? v1406 : false;
        if (v3526) {
          sim_r.isHalt = false;
          }
        else {
          const v3528 = stdlib.ge(v1339, v1402);
          const v3529 = v3528 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v3530 = stdlib.eq(v3529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3530) {
            const v3531 = 'passed              ';
            null;
            const v3532 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
            const v3533 = stdlib.sub(v1381, v3532);
            sim_r.txns.push({
              kind: 'from',
              to: v1253,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3611 = v1313.softCap;
            const v3612 = stdlib.ge(v1339, v3611);
            if (v3612) {
              const v3613 = 'passed              ';
              null;
              const v3614 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
              const v3615 = stdlib.sub(v1381, v3614);
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3693 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v1414 = v1313.maxContribution;
        const v1415 = stdlib.gt(v1377, v1414);
        if (v1415) {
          await stdlib.simMapSet(sim_r, 0, v1372, v1372);
          await stdlib.simMapSet(sim_r, 2, v1372, null);
          await stdlib.simMapSet(sim_r, 1, v1372, v1414);
          const v1419 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:139:25:decimal', stdlib.UInt_max, '1'));
          const v1420 = stdlib.add(v1339, v1414);
          const v1421 = v1313.hardCap;
          const v1422 = stdlib.add(v1339, v1377);
          const v1423 = stdlib.ge(v1422, v1421);
          const v1424 = v1423 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v1425 = stdlib.eq(v1424, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v3754 = v1425;
          const v3755 = v1420;
          const v3756 = v1419;
          const v3757 = v1372;
          const v3758 = v1374;
          const v3760 = v1348;
          const v3761 = v1381;
          const v3762 = stdlib.le(v1342, v1320);
          const v3763 = v3762 ? v1425 : false;
          if (v3763) {
            sim_r.isHalt = false;
            }
          else {
            const v3765 = stdlib.ge(v1420, v1421);
            const v3766 = v3765 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v3767 = stdlib.eq(v3766, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v3767) {
              const v3768 = 'passed              ';
              null;
              const v3769 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
              const v3770 = stdlib.sub(v1381, v3769);
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3848 = v1313.softCap;
              const v3849 = stdlib.ge(v1420, v3848);
              if (v3849) {
                const v3850 = 'passed              ';
                null;
                const v3851 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
                const v3852 = stdlib.sub(v1381, v3851);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v3930 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1433 = v1313.minContribution;
          const v1434 = stdlib.lt(v1377, v1433);
          if (v1434) {
            await stdlib.simMapSet(sim_r, 0, v1372, v1372);
            await stdlib.simMapSet(sim_r, 2, v1372, null);
            await stdlib.simMapSet(sim_r, 1, v1372, v1433);
            const v1438 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:145:25:decimal', stdlib.UInt_max, '1'));
            const v1439 = stdlib.add(v1339, v1433);
            const v1440 = v1313.hardCap;
            const v1441 = stdlib.add(v1339, v1377);
            const v1442 = stdlib.ge(v1441, v1440);
            const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v3991 = v1444;
            const v3992 = v1439;
            const v3993 = v1438;
            const v3994 = v1372;
            const v3995 = v1374;
            const v3997 = v1348;
            const v3998 = v1381;
            const v3999 = stdlib.le(v1342, v1320);
            const v4000 = v3999 ? v1444 : false;
            if (v4000) {
              sim_r.isHalt = false;
              }
            else {
              const v4002 = stdlib.ge(v1439, v1440);
              const v4003 = v4002 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v4004 = stdlib.eq(v4003, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v4004) {
                const v4005 = 'passed              ';
                null;
                const v4006 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
                const v4007 = stdlib.sub(v1381, v4006);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4085 = v1313.softCap;
                const v4086 = stdlib.ge(v1439, v4085);
                if (v4086) {
                  const v4087 = 'passed              ';
                  null;
                  const v4088 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
                  const v4089 = stdlib.sub(v1381, v4088);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1253,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4167 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}
          else {
            await stdlib.simMapSet(sim_r, 0, v1372, v1372);
            await stdlib.simMapSet(sim_r, 2, v1372, null);
            await stdlib.simMapSet(sim_r, 1, v1372, v1377);
            const v1453 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:151:25:decimal', stdlib.UInt_max, '1'));
            const v1454 = stdlib.add(v1339, v1377);
            const v1455 = v1313.hardCap;
            const v1457 = stdlib.ge(v1454, v1455);
            const v1458 = v1457 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1459 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v4228 = v1459;
            const v4229 = v1454;
            const v4230 = v1453;
            const v4231 = v1372;
            const v4232 = v1374;
            const v4234 = v1348;
            const v4235 = v1381;
            const v4236 = stdlib.le(v1342, v1320);
            const v4237 = v4236 ? v1459 : false;
            if (v4237) {
              sim_r.isHalt = false;
              }
            else {
              const v4241 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v4241) {
                const v4242 = 'passed              ';
                null;
                const v4243 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
                const v4244 = stdlib.sub(v1381, v4243);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4322 = v1313.softCap;
                const v4323 = stdlib.ge(v1454, v4322);
                if (v4323) {
                  const v4324 = 'passed              ';
                  null;
                  const v4325 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
                  const v4326 = stdlib.sub(v1381, v4325);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1253,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4404 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc11, ctc3, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc14, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1373], secs: v1375, time: v1374, didSend: v261, from: v1372 } = txn1;
  undefined /* setApiDetails */;
  const v1377 = v1373[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
  const v1378 = stdlib.gt(v1377, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1378, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v1381 = stdlib.add(v1349, v1377);
  ;
  const v1386 = v1381;
  const v1387 = await txn1.getOutput('Contributors_contribute', 'v1386', ctc3, v1386);
  if (v261) {
    stdlib.protect(ctc0, await interact.out(v1373, v1387), {
      at: './index.rsh:123:9:application',
      fs: ['at ./index.rsh:123:9:application call to [unknown function] (defined at: ./index.rsh:123:9:function exp)', 'at ./index.rsh:127:11:application call to "notify" (defined at: ./index.rsh:126:31:function exp)', 'at ./index.rsh:126:31:application call to [unknown function] (defined at: ./index.rsh:126:31:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v1393 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1372), null);
  let v1394;
  switch (v1393[0]) {
    case 'None': {
      const v1395 = v1393[1];
      v1394 = false;
      
      break;
      }
    case 'Some': {
      const v1396 = v1393[1];
      v1394 = true;
      
      break;
      }
    }
  if (v1394) {
    const v1397 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
    let v1398;
    switch (v1397[0]) {
      case 'None': {
        const v1399 = v1397[1];
        v1398 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1400 = v1397[1];
        v1398 = v1400;
        
        break;
        }
      }
    await stdlib.mapSet(map1, v1372, v1398);
    const v1401 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:132:23:decimal', stdlib.UInt_max, '1'));
    const v1402 = v1313.hardCap;
    const v1403 = stdlib.add(v1339, v1377);
    const v1404 = stdlib.ge(v1403, v1402);
    const v1405 = v1404 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v1406 = stdlib.eq(v1405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v3517 = v1406;
    const v3518 = v1339;
    const v3519 = v1401;
    const v3520 = v1372;
    const v3521 = v1374;
    const v3523 = v1348;
    const v3524 = v1381;
    const v3525 = stdlib.le(v1342, v1320);
    const v3526 = v3525 ? v1406 : false;
    if (v3526) {
      return;
      }
    else {
      const v3528 = stdlib.ge(v1339, v1402);
      const v3529 = v3528 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v3530 = stdlib.eq(v3529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v3530) {
        const v3531 = 'passed              ';
        null;
        const v3532 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
        const v3533 = stdlib.sub(v1381, v3532);
        ;
        return;
        }
      else {
        const v3611 = v1313.softCap;
        const v3612 = stdlib.ge(v1339, v3611);
        if (v3612) {
          const v3613 = 'passed              ';
          null;
          const v3614 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
          const v3615 = stdlib.sub(v1381, v3614);
          ;
          return;
          }
        else {
          const v3693 = 'failed              ';
          null;
          return;
          }}}}
  else {
    const v1414 = v1313.maxContribution;
    const v1415 = stdlib.gt(v1377, v1414);
    if (v1415) {
      await stdlib.mapSet(map0, v1372, v1372);
      await stdlib.mapSet(map2, v1372, null);
      await stdlib.mapSet(map1, v1372, v1414);
      const v1419 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:139:25:decimal', stdlib.UInt_max, '1'));
      const v1420 = stdlib.add(v1339, v1414);
      const v1421 = v1313.hardCap;
      const v1422 = stdlib.add(v1339, v1377);
      const v1423 = stdlib.ge(v1422, v1421);
      const v1424 = v1423 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1425 = stdlib.eq(v1424, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v3754 = v1425;
      const v3755 = v1420;
      const v3756 = v1419;
      const v3757 = v1372;
      const v3758 = v1374;
      const v3760 = v1348;
      const v3761 = v1381;
      const v3762 = stdlib.le(v1342, v1320);
      const v3763 = v3762 ? v1425 : false;
      if (v3763) {
        return;
        }
      else {
        const v3765 = stdlib.ge(v1420, v1421);
        const v3766 = v3765 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v3767 = stdlib.eq(v3766, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v3767) {
          const v3768 = 'passed              ';
          null;
          const v3769 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
          const v3770 = stdlib.sub(v1381, v3769);
          ;
          return;
          }
        else {
          const v3848 = v1313.softCap;
          const v3849 = stdlib.ge(v1420, v3848);
          if (v3849) {
            const v3850 = 'passed              ';
            null;
            const v3851 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
            const v3852 = stdlib.sub(v1381, v3851);
            ;
            return;
            }
          else {
            const v3930 = 'failed              ';
            null;
            return;
            }}}}
    else {
      const v1433 = v1313.minContribution;
      const v1434 = stdlib.lt(v1377, v1433);
      if (v1434) {
        await stdlib.mapSet(map0, v1372, v1372);
        await stdlib.mapSet(map2, v1372, null);
        await stdlib.mapSet(map1, v1372, v1433);
        const v1438 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:145:25:decimal', stdlib.UInt_max, '1'));
        const v1439 = stdlib.add(v1339, v1433);
        const v1440 = v1313.hardCap;
        const v1441 = stdlib.add(v1339, v1377);
        const v1442 = stdlib.ge(v1441, v1440);
        const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3991 = v1444;
        const v3992 = v1439;
        const v3993 = v1438;
        const v3994 = v1372;
        const v3995 = v1374;
        const v3997 = v1348;
        const v3998 = v1381;
        const v3999 = stdlib.le(v1342, v1320);
        const v4000 = v3999 ? v1444 : false;
        if (v4000) {
          return;
          }
        else {
          const v4002 = stdlib.ge(v1439, v1440);
          const v4003 = v4002 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v4004 = stdlib.eq(v4003, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v4004) {
            const v4005 = 'passed              ';
            null;
            const v4006 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
            const v4007 = stdlib.sub(v1381, v4006);
            ;
            return;
            }
          else {
            const v4085 = v1313.softCap;
            const v4086 = stdlib.ge(v1439, v4085);
            if (v4086) {
              const v4087 = 'passed              ';
              null;
              const v4088 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
              const v4089 = stdlib.sub(v1381, v4088);
              ;
              return;
              }
            else {
              const v4167 = 'failed              ';
              null;
              return;
              }}}}
      else {
        await stdlib.mapSet(map0, v1372, v1372);
        await stdlib.mapSet(map2, v1372, null);
        await stdlib.mapSet(map1, v1372, v1377);
        const v1453 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:151:25:decimal', stdlib.UInt_max, '1'));
        const v1454 = stdlib.add(v1339, v1377);
        const v1455 = v1313.hardCap;
        const v1457 = stdlib.ge(v1454, v1455);
        const v1458 = v1457 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1459 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v4228 = v1459;
        const v4229 = v1454;
        const v4230 = v1453;
        const v4231 = v1372;
        const v4232 = v1374;
        const v4234 = v1348;
        const v4235 = v1381;
        const v4236 = stdlib.le(v1342, v1320);
        const v4237 = v4236 ? v1459 : false;
        if (v4237) {
          return;
          }
        else {
          const v4241 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v4241) {
            const v4242 = 'passed              ';
            null;
            const v4243 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
            const v4244 = stdlib.sub(v1381, v4243);
            ;
            return;
            }
          else {
            const v4322 = v1313.softCap;
            const v4323 = stdlib.ge(v1454, v4322);
            if (v4323) {
              const v4324 = 'passed              ';
              null;
              const v4325 = stdlib.div(v1381, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
              const v4326 = stdlib.sub(v1381, v4325);
              ;
              return;
              }
            else {
              const v4404 = 'failed              ';
              null;
              return;
              }}}}}}
  
  
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
    Contributors_contributed0_771: ctc10,
    Contributors_creating0_771: ctc16,
    Contributors_timedOut0_771: ctc10
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
  
  
  const [v1253, v1263, v2051, v2052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2080 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:265:9:application call to [unknown function] (defined at: ./index.rsh:265:9:function exp)', 'at ./index.rsh:248:37:application call to "runContributors_contributed0_771" (defined at: ./index.rsh:265:9:function exp)', 'at ./index.rsh:248:37:application call to [unknown function] (defined at: ./index.rsh:248:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v2090 = ['Contributors_contributed0_771', v2080];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v2051, v2052, v2090],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:265:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
      
      switch (v2110[0]) {
        case 'Contributors_contributed0_771': {
          const v2113 = v2110[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v2121 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '0')];
          const v2122 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '1')];
          const v2123 = null;
          const v2124 = await txn1.getOutput('Contributors_contributed', 'v2123', ctc0, v2123);
          
          const v2131 = 'contributed         ';
          null;
          const v4467 = v2051;
          const v4468 = v2052;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_771': {
          const v2165 = v2110[1];
          
          break;
          }
        case 'Contributors_timedOut0_771': {
          const v2217 = v2110[1];
          
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
  const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
  switch (v2110[0]) {
    case 'Contributors_contributed0_771': {
      const v2113 = v2110[1];
      undefined /* setApiDetails */;
      ;
      const v2121 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '0')];
      const v2122 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '1')];
      const v2123 = null;
      const v2124 = await txn1.getOutput('Contributors_contributed', 'v2123', ctc0, v2123);
      if (v901) {
        stdlib.protect(ctc0, await interact.out(v2113, v2124), {
          at: './index.rsh:265:10:application',
          fs: ['at ./index.rsh:265:10:application call to [unknown function] (defined at: ./index.rsh:265:10:function exp)', 'at ./index.rsh:266:13:application call to "notify" (defined at: ./index.rsh:265:60:function exp)', 'at ./index.rsh:265:60:application call to [unknown function] (defined at: ./index.rsh:265:60:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v2131 = 'contributed         ';
      null;
      const v4467 = v2051;
      const v4468 = v2052;
      return;
      
      break;
      }
    case 'Contributors_creating0_771': {
      const v2165 = v2110[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_771': {
      const v2217 = v2110[1];
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
    Contributors_contributed0_771: ctc16,
    Contributors_creating0_771: ctc15,
    Contributors_timedOut0_771: ctc16
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
  
  
  const [v1253, v1263, v2051, v2052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2057 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:251:9:application call to [unknown function] (defined at: ./index.rsh:251:9:function exp)', 'at ./index.rsh:248:37:application call to "runContributors_creating0_771" (defined at: ./index.rsh:251:9:function exp)', 'at ./index.rsh:248:37:application call to [unknown function] (defined at: ./index.rsh:248:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v2076 = ['Contributors_creating0_771', v2057];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v2051, v2052, v2076],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:251:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
      
      switch (v2110[0]) {
        case 'Contributors_contributed0_771': {
          const v2113 = v2110[1];
          
          break;
          }
        case 'Contributors_creating0_771': {
          const v2165 = v2110[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v2185 = v2165[stdlib.checkedBigNumberify('./index.rsh:251:9:spread', stdlib.UInt_max, '0')];
          const v2186 = null;
          const v2187 = await txn1.getOutput('Contributors_creating', 'v2186', ctc0, v2186);
          
          const v2199 = v2185.id;
          const v2200 = v2185.title;
          const v2201 = v2185.link;
          const v2202 = v2185.description;
          const v2203 = v2185.owner;
          const v2204 = v2185.contractInfo;
          null;
          const v4551 = v2051;
          const v4552 = v2052;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_771': {
          const v2217 = v2110[1];
          
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
  const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
  switch (v2110[0]) {
    case 'Contributors_contributed0_771': {
      const v2113 = v2110[1];
      return;
      break;
      }
    case 'Contributors_creating0_771': {
      const v2165 = v2110[1];
      undefined /* setApiDetails */;
      ;
      const v2185 = v2165[stdlib.checkedBigNumberify('./index.rsh:251:9:spread', stdlib.UInt_max, '0')];
      const v2186 = null;
      const v2187 = await txn1.getOutput('Contributors_creating', 'v2186', ctc0, v2186);
      if (v901) {
        stdlib.protect(ctc0, await interact.out(v2165, v2187), {
          at: './index.rsh:251:10:application',
          fs: ['at ./index.rsh:251:10:application call to [unknown function] (defined at: ./index.rsh:251:10:function exp)', 'at ./index.rsh:252:13:application call to "notify" (defined at: ./index.rsh:251:47:function exp)', 'at ./index.rsh:251:47:application call to [unknown function] (defined at: ./index.rsh:251:47:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v2199 = v2185.id;
      const v2200 = v2185.title;
      const v2201 = v2185.link;
      const v2202 = v2185.description;
      const v2203 = v2185.owner;
      const v2204 = v2185.contractInfo;
      null;
      const v4551 = v2051;
      const v4552 = v2052;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_771': {
      const v2217 = v2110[1];
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
    Contributors_contributed0_771: ctc10,
    Contributors_creating0_771: ctc16,
    Contributors_timedOut0_771: ctc10
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
  
  
  const [v1253, v1263, v2051, v2052] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2094 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:272:9:application call to [unknown function] (defined at: ./index.rsh:272:9:function exp)', 'at ./index.rsh:248:37:application call to "runContributors_timedOut0_771" (defined at: ./index.rsh:272:9:function exp)', 'at ./index.rsh:248:37:application call to [unknown function] (defined at: ./index.rsh:248:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v2104 = ['Contributors_timedOut0_771', v2094];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1253, v1263, v2051, v2052, v2104],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:272:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
      
      switch (v2110[0]) {
        case 'Contributors_contributed0_771': {
          const v2113 = v2110[1];
          
          break;
          }
        case 'Contributors_creating0_771': {
          const v2165 = v2110[1];
          
          break;
          }
        case 'Contributors_timedOut0_771': {
          const v2217 = v2110[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v2258 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '0')];
          const v2259 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '1')];
          const v2260 = null;
          const v2261 = await txn1.getOutput('Contributors_timedOut', 'v2260', ctc0, v2260);
          
          const v2268 = 'timedOut            ';
          null;
          const v4635 = v2051;
          const v4636 = v2052;
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
  const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn1;
  switch (v2110[0]) {
    case 'Contributors_contributed0_771': {
      const v2113 = v2110[1];
      return;
      break;
      }
    case 'Contributors_creating0_771': {
      const v2165 = v2110[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_771': {
      const v2217 = v2110[1];
      undefined /* setApiDetails */;
      ;
      const v2258 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '0')];
      const v2259 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '1')];
      const v2260 = null;
      const v2261 = await txn1.getOutput('Contributors_timedOut', 'v2260', ctc0, v2260);
      if (v901) {
        stdlib.protect(ctc0, await interact.out(v2217, v2261), {
          at: './index.rsh:272:10:application',
          fs: ['at ./index.rsh:272:10:application call to [unknown function] (defined at: ./index.rsh:272:10:function exp)', 'at ./index.rsh:273:13:application call to "notify" (defined at: ./index.rsh:272:57:function exp)', 'at ./index.rsh:272:57:application call to [unknown function] (defined at: ./index.rsh:272:57:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v2268 = 'timedOut            ';
      null;
      const v4635 = v2051;
      const v4636 = v2052;
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
    Contributors_contributed0_771: ctc20,
    Contributors_creating0_771: ctc23,
    Contributors_timedOut0_771: ctc20
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
  
  
  const v1219 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1220 = [v1219];
  const v1231 = stdlib.protect(ctc8, interact.getParams, 'for Deployer\'s interact field getParams');
  const v1232 = v1231.name;
  const v1233 = v1231.symbol;
  const v1234 = v1231.tokenid;
  const v1235 = stdlib.protect(ctc13, interact.getProject, 'for Deployer\'s interact field getProject');
  const v1247 = stdlib.protect(ctc14, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1247, v1232, v1233, v1234],
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
      
      const {data: [v1254, v1255, v1256, v1257], secs: v1259, time: v1258, didSend: v64, from: v1253 } = txn1;
      
      ;
      const v1260 = '                                                                                                ';
      const v1261 = '                                ';
      const v1262 = stdlib.simTokenNew(sim_r, v1255, v1256, v1260, v1261, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1263 = await txn1.getOutput('internal', 'v1262', ctc15, v1262);
      const v1273 = v1220[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1275 = v1273[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1276 = v1273[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1277 = [stdlib.UInt_max, v1275, v1276];
      const v1278 = stdlib.Array_set(v1220, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1277);
      const v1280 = v1278[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1281 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1283 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
      const v1284 = [v1281, stdlib.UInt_max, v1283];
      const v1285 = stdlib.Array_set(v1278, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1284);
      const v1286 = v1285[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1287 = v1286[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
      const v1288 = v1286[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
      const v1290 = [v1287, v1288, false];
      const v1291 = stdlib.Array_set(v1285, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1290);
      const v1292 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc14, ctc6, ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1254, v1255, v1256, v1257], secs: v1259, time: v1258, didSend: v64, from: v1253 } = txn1;
  ;
  const v1260 = '                                                                                                ';
  const v1261 = '                                ';
  const v1262 = undefined /* TokenNew */;
  const v1263 = await txn1.getOutput('internal', 'v1262', ctc15, v1262);
  const v1273 = v1220[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1275 = v1273[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1276 = v1273[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1277 = [stdlib.UInt_max, v1275, v1276];
  const v1278 = stdlib.Array_set(v1220, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1277);
  const v1280 = v1278[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1281 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1283 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '2')];
  const v1284 = [v1281, stdlib.UInt_max, v1283];
  const v1285 = stdlib.Array_set(v1278, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1284);
  const v1286 = v1285[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1287 = v1286[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0')];
  const v1288 = v1286[stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '1')];
  const v1290 = [v1287, v1288, false];
  const v1291 = stdlib.Array_set(v1285, stdlib.checkedBigNumberify('./index.rsh:82:24:application', stdlib.UInt_max, '0'), v1290);
  const v1292 = 'tokenCreated        ';
  null;
  const v1293 = v1291[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1294 = v1293[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1253, v1254, v1263, v1291],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1258,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), [[v1294, v1263]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1297, time: v1296, didSend: v90, from: v1295 } = txn2;
      
      const v1298 = v1291[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
      const v1299 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
      ;
      const v1301 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
      const v1302 = stdlib.add(v1301, v1299);
      const v1306 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
      const v1307 = [v1302, v1299, v1306];
      const v1308 = stdlib.Array_set(v1291, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1307);
      sim_r.txns.push({
        amt: v1299,
        kind: 'to',
        tok: v1263
        });
      if (v1254) {
        sim_r.isHalt = false;
        }
      else {
        const v2044 = true;
        const v2045 = v1296;
        const v2051 = v1308;
        const v2052 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v2044;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v2269 = v2051[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v2270 = v2269[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v2274 = stdlib.sub(v2052, v2270);
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v2281 = v2269[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v2287 = stdlib.sub(v2270, v2281);
          const v2291 = v2269[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v2292 = [v2287, v2281, v2291];
          const v2293 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v2292);
          const v2294 = v2293[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v2295 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v2296 = stdlib.sub(v2295, v2281);
          const v2298 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v2300 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v2301 = [v2298, v2296, v2300];
          const v2302 = stdlib.Array_set(v2293, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v2301);
          stdlib.simTokenBurn(sim_r, v1263, v2281);
          const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v2304 = v2303[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v2304) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1263);
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
  const {data: [], secs: v1297, time: v1296, didSend: v90, from: v1295 } = txn2;
  const v1298 = v1291[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '0')];
  const v1299 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:38:application', stdlib.UInt_max, '1')];
  ;
  const v1301 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0')];
  const v1302 = stdlib.add(v1301, v1299);
  const v1306 = v1298[stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '2')];
  const v1307 = [v1302, v1299, v1306];
  const v1308 = stdlib.Array_set(v1291, stdlib.checkedBigNumberify('./index.rsh:86:11:dot', stdlib.UInt_max, '0'), v1307);
  ;
  const v1309 = stdlib.addressEq(v1253, v1295);
  stdlib.assert(v1309, {
    at: './index.rsh:86:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v1254) {
    const txn3 = await (ctc.sendrecv({
      args: [v1253, v1263, v1296, v1308, v1235],
      evt_cnt: 1,
      funcNum: 2,
      lct: v1296,
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
        
        const {data: [v1313], secs: v1315, time: v1314, didSend: v99, from: v1312 } = txn3;
        
        ;
        const v1317 = v1313.id;
        const v1318 = 'created             ';
        null;
        const v1320 = stdlib.add(v1296, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc15, ctc3, ctc18, ctc13],
      waitIfNotPresent: false
      }));
    const {data: [v1313], secs: v1315, time: v1314, didSend: v99, from: v1312 } = txn3;
    ;
    const v1316 = stdlib.addressEq(v1253, v1312);
    stdlib.assert(v1316, {
      at: './index.rsh:93:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1317 = v1313.id;
    const v1318 = 'created             ';
    null;
    const v1320 = stdlib.add(v1296, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn4 = await (ctc.sendrecv({
      args: [v1253, v1263, v1308, v1313, v1314, v1317, v1320],
      evt_cnt: 0,
      funcNum: 3,
      lct: v1314,
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
        
        const {data: [], secs: v1323, time: v1322, didSend: v108, from: v1321 } = txn4;
        
        ;
        const v1325 = v1308[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
        const v1326 = v1325[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
        const v1327 = v1313.PrivateSaleAmt;
        const v1328 = stdlib.gt(v1326, v1327);
        if (v1328) {
          const v1332 = stdlib.sub(v1326, v1327);
          const v1333 = v1313.owner;
          const v1337 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1332);
          sim_r.txns.push({
            kind: 'from',
            to: v1333,
            tok: undefined /* Nothing */
            });
          const v1338 = true;
          const v1339 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
          const v1340 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
          const v1341 = v1253;
          const v1342 = v1322;
          const v1343 = v1314;
          const v1348 = v1308;
          const v1349 = v1337;
          
          if (await (async () => {
            const v1353 = stdlib.le(v1343, v1320);
            const v1354 = v1353 ? v1338 : false;
            
            return v1354;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1473 = v1313.hardCap;
            const v1474 = stdlib.ge(v1339, v1473);
            const v1475 = v1474 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1476 = stdlib.eq(v1475, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1476) {
              const v1478 = 'passed              ';
              null;
              const v1480 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
              const v1484 = stdlib.sub(v1349, v1480);
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1658 = v1313.softCap;
              const v1659 = stdlib.ge(v1339, v1658);
              if (v1659) {
                const v1661 = 'passed              ';
                null;
                const v1663 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
                const v1667 = stdlib.sub(v1349, v1663);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v1842 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1991 = v1313.owner;
          const v1995 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1326);
          sim_r.txns.push({
            kind: 'from',
            to: v1991,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1253,
            tok: undefined /* Nothing */
            });
          const v2002 = v1325[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
          stdlib.simTokenBurn(sim_r, v1263, v2002);
          stdlib.simTokenDestroy(sim_r, v1263);
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
    const {data: [], secs: v1323, time: v1322, didSend: v108, from: v1321 } = txn4;
    ;
    const v1324 = stdlib.addressEq(v1253, v1321);
    stdlib.assert(v1324, {
      at: './index.rsh:102:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1325 = v1308[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
    const v1326 = v1325[stdlib.checkedBigNumberify('./index.rsh:103:13:application', stdlib.UInt_max, '0')];
    const v1327 = v1313.PrivateSaleAmt;
    const v1328 = stdlib.gt(v1326, v1327);
    if (v1328) {
      const v1332 = stdlib.sub(v1326, v1327);
      const v1333 = v1313.owner;
      const v1337 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1332);
      ;
      let v1338 = true;
      let v1339 = stdlib.checkedBigNumberify('./index.rsh:120:22:decimal', stdlib.UInt_max, '0');
      let v1340 = stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0');
      let v1341 = v1253;
      let v1342 = v1322;
      let v1343 = v1314;
      let v1348 = v1308;
      let v1349 = v1337;
      
      while (await (async () => {
        const v1353 = stdlib.le(v1343, v1320);
        const v1354 = v1353 ? v1338 : false;
        
        return v1354;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 16,
          out_tys: [ctc16],
          timeoutAt: ['time', v1320],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v1253, v1263, v1313, v1317, v1320, v1327, v1333, v1338, v1339, v1340, v1341, v1342, v1348, v1349],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1342,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:157:14:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1469, time: v1468, didSend: v373, from: v1467 } = txn6;
              
              ;
              const cv1338 = v1338;
              const cv1339 = v1339;
              const cv1340 = v1340;
              const cv1341 = v1341;
              const cv1342 = v1468;
              const cv1343 = v1342;
              const cv1348 = v1348;
              const cv1349 = v1349;
              
              await (async () => {
                const v1338 = cv1338;
                const v1339 = cv1339;
                const v1340 = cv1340;
                const v1341 = cv1341;
                const v1342 = cv1342;
                const v1343 = cv1343;
                const v1348 = cv1348;
                const v1349 = cv1349;
                
                if (await (async () => {
                  const v1353 = stdlib.le(v1343, v1320);
                  const v1354 = v1353 ? v1338 : false;
                  
                  return v1354;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1473 = v1313.hardCap;
                  const v1474 = stdlib.ge(v1339, v1473);
                  const v1475 = v1474 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v1476 = stdlib.eq(v1475, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  if (v1476) {
                    const v1478 = 'passed              ';
                    null;
                    const v1480 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
                    const v1484 = stdlib.sub(v1349, v1480);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1253,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1658 = v1313.softCap;
                    const v1659 = stdlib.ge(v1339, v1658);
                    if (v1659) {
                      const v1661 = 'passed              ';
                      null;
                      const v1663 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
                      const v1667 = stdlib.sub(v1349, v1663);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1253,
                        tok: undefined /* Nothing */
                        });
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1842 = 'failed              ';
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
          const {data: [], secs: v1469, time: v1468, didSend: v373, from: v1467 } = txn6;
          ;
          const v1470 = stdlib.addressEq(v1253, v1467);
          stdlib.assert(v1470, {
            at: './index.rsh:157:14:dot',
            fs: ['at ./index.rsh:156:34:application call to [unknown function] (defined at: ./index.rsh:156:34:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const cv1338 = v1338;
          const cv1339 = v1339;
          const cv1340 = v1340;
          const cv1341 = v1341;
          const cv1342 = v1468;
          const cv1343 = v1342;
          const cv1348 = v1348;
          const cv1349 = v1349;
          
          v1338 = cv1338;
          v1339 = cv1339;
          v1340 = cv1340;
          v1341 = cv1341;
          v1342 = cv1342;
          v1343 = cv1343;
          v1348 = cv1348;
          v1349 = cv1349;
          
          continue;
          }
        else {
          const {data: [v1373], secs: v1375, time: v1374, didSend: v261, from: v1372 } = txn5;
          undefined /* setApiDetails */;
          const v1377 = v1373[stdlib.checkedBigNumberify('./index.rsh:123:8:spread', stdlib.UInt_max, '0')];
          const v1378 = stdlib.gt(v1377, stdlib.checkedBigNumberify('./index.rsh:124:17:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1378, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:124:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)', 'at ./index.rsh:123:40:application call to [unknown function] (defined at: ./index.rsh:123:40:function exp)'],
            msg: 'Contribution too small',
            who: 'Deployer'
            });
          const v1381 = stdlib.add(v1349, v1377);
          ;
          const v1386 = v1381;
          await txn5.getOutput('Contributors_contribute', 'v1386', ctc3, v1386);
          const v1393 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1372), null);
          let v1394;
          switch (v1393[0]) {
            case 'None': {
              const v1395 = v1393[1];
              v1394 = false;
              
              break;
              }
            case 'Some': {
              const v1396 = v1393[1];
              v1394 = true;
              
              break;
              }
            }
          if (v1394) {
            const v1397 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
            let v1398;
            switch (v1397[0]) {
              case 'None': {
                const v1399 = v1397[1];
                v1398 = stdlib.checkedBigNumberify('./index.rsh:129:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1400 = v1397[1];
                v1398 = v1400;
                
                break;
                }
              }
            await stdlib.mapSet(map1, v1372, v1398);
            const v1401 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:132:23:decimal', stdlib.UInt_max, '1'));
            const v1402 = v1313.hardCap;
            const v1403 = stdlib.add(v1339, v1377);
            const v1404 = stdlib.ge(v1403, v1402);
            const v1405 = v1404 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1406 = stdlib.eq(v1405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv1338 = v1406;
            const cv1339 = v1339;
            const cv1340 = v1401;
            const cv1341 = v1372;
            const cv1342 = v1374;
            const cv1343 = v1342;
            const cv1348 = v1348;
            const cv1349 = v1381;
            
            v1338 = cv1338;
            v1339 = cv1339;
            v1340 = cv1340;
            v1341 = cv1341;
            v1342 = cv1342;
            v1343 = cv1343;
            v1348 = cv1348;
            v1349 = cv1349;
            
            continue;}
          else {
            const v1414 = v1313.maxContribution;
            const v1415 = stdlib.gt(v1377, v1414);
            if (v1415) {
              await stdlib.mapSet(map0, v1372, v1372);
              await stdlib.mapSet(map2, v1372, null);
              await stdlib.mapSet(map1, v1372, v1414);
              const v1419 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:139:25:decimal', stdlib.UInt_max, '1'));
              const v1420 = stdlib.add(v1339, v1414);
              const v1421 = v1313.hardCap;
              const v1422 = stdlib.add(v1339, v1377);
              const v1423 = stdlib.ge(v1422, v1421);
              const v1424 = v1423 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v1425 = stdlib.eq(v1424, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const cv1338 = v1425;
              const cv1339 = v1420;
              const cv1340 = v1419;
              const cv1341 = v1372;
              const cv1342 = v1374;
              const cv1343 = v1342;
              const cv1348 = v1348;
              const cv1349 = v1381;
              
              v1338 = cv1338;
              v1339 = cv1339;
              v1340 = cv1340;
              v1341 = cv1341;
              v1342 = cv1342;
              v1343 = cv1343;
              v1348 = cv1348;
              v1349 = cv1349;
              
              continue;}
            else {
              const v1433 = v1313.minContribution;
              const v1434 = stdlib.lt(v1377, v1433);
              if (v1434) {
                await stdlib.mapSet(map0, v1372, v1372);
                await stdlib.mapSet(map2, v1372, null);
                await stdlib.mapSet(map1, v1372, v1433);
                const v1438 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:145:25:decimal', stdlib.UInt_max, '1'));
                const v1439 = stdlib.add(v1339, v1433);
                const v1440 = v1313.hardCap;
                const v1441 = stdlib.add(v1339, v1377);
                const v1442 = stdlib.ge(v1441, v1440);
                const v1443 = v1442 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1444 = stdlib.eq(v1443, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1338 = v1444;
                const cv1339 = v1439;
                const cv1340 = v1438;
                const cv1341 = v1372;
                const cv1342 = v1374;
                const cv1343 = v1342;
                const cv1348 = v1348;
                const cv1349 = v1381;
                
                v1338 = cv1338;
                v1339 = cv1339;
                v1340 = cv1340;
                v1341 = cv1341;
                v1342 = cv1342;
                v1343 = cv1343;
                v1348 = cv1348;
                v1349 = cv1349;
                
                continue;}
              else {
                await stdlib.mapSet(map0, v1372, v1372);
                await stdlib.mapSet(map2, v1372, null);
                await stdlib.mapSet(map1, v1372, v1377);
                const v1453 = stdlib.add(v1340, stdlib.checkedBigNumberify('./index.rsh:151:25:decimal', stdlib.UInt_max, '1'));
                const v1454 = stdlib.add(v1339, v1377);
                const v1455 = v1313.hardCap;
                const v1457 = stdlib.ge(v1454, v1455);
                const v1458 = v1457 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1459 = stdlib.eq(v1458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1338 = v1459;
                const cv1339 = v1454;
                const cv1340 = v1453;
                const cv1341 = v1372;
                const cv1342 = v1374;
                const cv1343 = v1342;
                const cv1348 = v1348;
                const cv1349 = v1381;
                
                v1338 = cv1338;
                v1339 = cv1339;
                v1340 = cv1340;
                v1341 = cv1341;
                v1342 = cv1342;
                v1343 = cv1343;
                v1348 = cv1348;
                v1349 = cv1349;
                
                continue;}}}}
        
        }
      const v1473 = v1313.hardCap;
      const v1474 = stdlib.ge(v1339, v1473);
      const v1475 = v1474 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1476 = stdlib.eq(v1475, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1476) {
        const v1478 = 'passed              ';
        null;
        const v1480 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:163:30:decimal', stdlib.UInt_max, '100'));
        const v1484 = stdlib.sub(v1349, v1480);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1253, v1263, v1317, v1327, v1333, v1339, v1340, v1341, v1348, v1484],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1342,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1487, time: v1486, didSend: v392, from: v1485 } = txn5;
            
            ;
            const v1494 = stdlib.sub(v1484, v1484);
            sim_r.txns.push({
              kind: 'from',
              to: v1333,
              tok: undefined /* Nothing */
              });
            const v1495 = v1348[stdlib.checkedBigNumberify('./index.rsh:168:21:application', stdlib.UInt_max, '0')];
            const v1496 = v1495[stdlib.checkedBigNumberify('./index.rsh:168:21:application', stdlib.UInt_max, '0')];
            const v1497 = stdlib.div(v1496, stdlib.checkedBigNumberify('./index.rsh:168:34:decimal', stdlib.UInt_max, '100'));
            const v1501 = stdlib.sub(v1494, v1497);
            sim_r.txns.push({
              kind: 'from',
              to: v1253,
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
        const {data: [], secs: v1487, time: v1486, didSend: v392, from: v1485 } = txn5;
        ;
        const v1488 = stdlib.addressEq(v1253, v1485);
        stdlib.assert(v1488, {
          at: './index.rsh:165:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1494 = stdlib.sub(v1484, v1484);
        ;
        const v1495 = v1348[stdlib.checkedBigNumberify('./index.rsh:168:21:application', stdlib.UInt_max, '0')];
        const v1496 = v1495[stdlib.checkedBigNumberify('./index.rsh:168:21:application', stdlib.UInt_max, '0')];
        const v1497 = stdlib.div(v1496, stdlib.checkedBigNumberify('./index.rsh:168:34:decimal', stdlib.UInt_max, '100'));
        const v1501 = stdlib.sub(v1494, v1497);
        ;
        const txn6 = await (ctc.sendrecv({
          args: [v1253, v1263, v1317, v1327, v1339, v1340, v1341, v1348, v1496, v1501],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1486,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1504, time: v1503, didSend: v409, from: v1502 } = txn6;
            
            ;
            const v1508 = v1496;
            const v1509 = v1340;
            const v1510 = v1503;
            const v1516 = v1348;
            const v1517 = v1501;
            
            if (await (async () => {
              const v1521 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
              const v1522 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
              const v1523 = v1521 ? v1522 : false;
              
              return v1523;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1593 = v1516[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
              const v1594 = v1593[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
              const v1598 = stdlib.sub(v1517, v1594);
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
                tok: undefined /* Nothing */
                });
              const v1605 = v1593[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
              const v1611 = stdlib.sub(v1594, v1605);
              const v1615 = v1593[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
              const v1616 = [v1611, v1605, v1615];
              const v1617 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1616);
              const v1618 = v1617[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
              const v1619 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
              const v1620 = stdlib.sub(v1619, v1605);
              const v1622 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
              const v1624 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
              const v1625 = [v1622, v1620, v1624];
              const v1626 = stdlib.Array_set(v1617, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1625);
              stdlib.simTokenBurn(sim_r, v1263, v1605);
              const v1627 = v1626[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
              const v1628 = v1627[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
              if (v1628) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1263);
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
        const {data: [], secs: v1504, time: v1503, didSend: v409, from: v1502 } = txn6;
        ;
        const v1505 = stdlib.addressEq(v1253, v1502);
        stdlib.assert(v1505, {
          at: './index.rsh:172:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1508 = v1496;
        let v1509 = v1340;
        let v1510 = v1503;
        let v1516 = v1348;
        let v1517 = v1501;
        
        while (await (async () => {
          const v1521 = stdlib.gt(v1509, stdlib.checkedBigNumberify('./index.rsh:175:26:decimal', stdlib.UInt_max, '0'));
          const v1522 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:175:51:decimal', stdlib.UInt_max, '0'));
          const v1523 = v1521 ? v1522 : false;
          
          return v1523;})()) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc19],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1530], secs: v1532, time: v1531, didSend: v447, from: v1529 } = txn7;
          undefined /* setApiDetails */;
          ;
          const v1535 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1529), null);
          let v1536;
          switch (v1535[0]) {
            case 'None': {
              const v1537 = v1535[1];
              v1536 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1538 = v1535[1];
              v1536 = v1538;
              
              break;
              }
            }
          const v1539 = stdlib.ge(v1517, v1536);
          const v1540 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1529), null);
          let v1541;
          switch (v1540[0]) {
            case 'None': {
              const v1542 = v1540[1];
              v1541 = false;
              
              break;
              }
            case 'Some': {
              const v1543 = v1540[1];
              v1541 = true;
              
              break;
              }
            }
          const v1544 = v1539 ? v1541 : false;
          if (v1544) {
            const v1545 = v1516[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
            const v1546 = v1545[stdlib.checkedBigNumberify('./index.rsh:178:23:application', stdlib.UInt_max, '0')];
            const v1547 = stdlib.mul(v1546, v1339);
            const v1549 = stdlib.div(v1547, v1327);
            let v1551;
            switch (v1535[0]) {
              case 'None': {
                const v1552 = v1535[1];
                v1551 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1553 = v1535[1];
                v1551 = v1553;
                
                break;
                }
              }
            const v1554 = stdlib.mul(v1549, v1551);
            const v1555 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1529), null);
            let v1556;
            switch (v1555[0]) {
              case 'None': {
                const v1557 = v1555[1];
                v1556 = v1341;
                
                break;
                }
              case 'Some': {
                const v1558 = v1555[1];
                v1556 = v1558;
                
                break;
                }
              }
            const v1562 = stdlib.sub(v1517, v1554);
            ;
            await stdlib.mapSet(map2, v1529, undefined /* Nothing */);
            const v1565 = 'claimPassed         ';
            null;
            const v1566 = true;
            await txn7.getOutput('Contributors_claimToken', 'v1566', ctc14, v1566);
            const v1572 = stdlib.sub(v1509, stdlib.checkedBigNumberify('./index.rsh:183:29:decimal', stdlib.UInt_max, '1'));
            const cv1508 = v1572;
            const cv1509 = v1546;
            const cv1510 = v1531;
            const cv1516 = v1516;
            const cv1517 = v1562;
            
            v1508 = cv1508;
            v1509 = cv1509;
            v1510 = cv1510;
            v1516 = cv1516;
            v1517 = cv1517;
            
            continue;}
          else {
            const v1580 = 'claimFailed         ';
            null;
            const v1581 = false;
            await txn7.getOutput('Contributors_claimToken', 'v1581', ctc14, v1581);
            const v1587 = v1516[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
            const v1588 = v1587[stdlib.checkedBigNumberify('./index.rsh:187:35:application', stdlib.UInt_max, '0')];
            const cv1508 = v1509;
            const cv1509 = v1588;
            const cv1510 = v1531;
            const cv1516 = v1516;
            const cv1517 = v1517;
            
            v1508 = cv1508;
            v1509 = cv1509;
            v1510 = cv1510;
            v1516 = cv1516;
            v1517 = cv1517;
            
            continue;}
          
          }
        const v1593 = v1516[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
        const v1594 = v1593[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
        const v1598 = stdlib.sub(v1517, v1594);
        ;
        ;
        const v1605 = v1593[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
        const v1611 = stdlib.sub(v1594, v1605);
        const v1615 = v1593[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
        const v1616 = [v1611, v1605, v1615];
        const v1617 = stdlib.Array_set(v1516, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1616);
        const v1618 = v1617[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
        const v1619 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
        const v1620 = stdlib.sub(v1619, v1605);
        const v1622 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
        const v1624 = v1618[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
        const v1625 = [v1622, v1620, v1624];
        const v1626 = stdlib.Array_set(v1617, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1625);
        undefined /* TokenBurn */;
        const v1627 = v1626[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
        const v1628 = v1627[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
        if (v1628) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }
        
        
        
        }
      else {
        const v1658 = v1313.softCap;
        const v1659 = stdlib.ge(v1339, v1658);
        if (v1659) {
          const v1661 = 'passed              ';
          null;
          const v1663 = stdlib.div(v1349, stdlib.checkedBigNumberify('./index.rsh:193:32:decimal', stdlib.UInt_max, '100'));
          const v1667 = stdlib.sub(v1349, v1663);
          ;
          const txn5 = await (ctc.sendrecv({
            args: [v1253, v1263, v1317, v1327, v1333, v1339, v1340, v1341, v1348, v1667],
            evt_cnt: 0,
            funcNum: 9,
            lct: v1342,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:195:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1670, time: v1669, didSend: v530, from: v1668 } = txn5;
              
              ;
              const v1677 = stdlib.sub(v1667, v1667);
              sim_r.txns.push({
                kind: 'from',
                to: v1333,
                tok: undefined /* Nothing */
                });
              const v1678 = v1348[stdlib.checkedBigNumberify('./index.rsh:198:23:application', stdlib.UInt_max, '0')];
              const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:198:23:application', stdlib.UInt_max, '0')];
              const v1680 = stdlib.div(v1679, stdlib.checkedBigNumberify('./index.rsh:198:36:decimal', stdlib.UInt_max, '100'));
              const v1684 = stdlib.sub(v1677, v1680);
              sim_r.txns.push({
                kind: 'from',
                to: v1253,
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
          const {data: [], secs: v1670, time: v1669, didSend: v530, from: v1668 } = txn5;
          ;
          const v1671 = stdlib.addressEq(v1253, v1668);
          stdlib.assert(v1671, {
            at: './index.rsh:195:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1677 = stdlib.sub(v1667, v1667);
          ;
          const v1678 = v1348[stdlib.checkedBigNumberify('./index.rsh:198:23:application', stdlib.UInt_max, '0')];
          const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:198:23:application', stdlib.UInt_max, '0')];
          const v1680 = stdlib.div(v1679, stdlib.checkedBigNumberify('./index.rsh:198:36:decimal', stdlib.UInt_max, '100'));
          const v1684 = stdlib.sub(v1677, v1680);
          ;
          const txn6 = await (ctc.sendrecv({
            args: [v1253, v1263, v1317, v1327, v1339, v1340, v1341, v1348, v1679, v1684],
            evt_cnt: 0,
            funcNum: 10,
            lct: v1669,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:202:16:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1687, time: v1686, didSend: v547, from: v1685 } = txn6;
              
              ;
              const v1691 = v1679;
              const v1692 = v1340;
              const v1693 = v1686;
              const v1699 = v1348;
              const v1700 = v1684;
              
              if (await (async () => {
                const v1704 = stdlib.gt(v1692, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
                const v1705 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
                const v1706 = v1704 ? v1705 : false;
                
                return v1706;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1776 = v1699[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
                const v1777 = v1776[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
                const v1781 = stdlib.sub(v1700, v1777);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                const v1788 = v1776[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
                const v1794 = stdlib.sub(v1777, v1788);
                const v1798 = v1776[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
                const v1799 = [v1794, v1788, v1798];
                const v1800 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1799);
                const v1801 = v1800[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
                const v1802 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
                const v1803 = stdlib.sub(v1802, v1788);
                const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
                const v1807 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
                const v1808 = [v1805, v1803, v1807];
                const v1809 = stdlib.Array_set(v1800, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1808);
                stdlib.simTokenBurn(sim_r, v1263, v1788);
                const v1810 = v1809[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
                const v1811 = v1810[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
                if (v1811) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1263);
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
          const {data: [], secs: v1687, time: v1686, didSend: v547, from: v1685 } = txn6;
          ;
          const v1688 = stdlib.addressEq(v1253, v1685);
          stdlib.assert(v1688, {
            at: './index.rsh:202:16:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1691 = v1679;
          let v1692 = v1340;
          let v1693 = v1686;
          let v1699 = v1348;
          let v1700 = v1684;
          
          while (await (async () => {
            const v1704 = stdlib.gt(v1692, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
            const v1705 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:205:53:decimal', stdlib.UInt_max, '0'));
            const v1706 = v1704 ? v1705 : false;
            
            return v1706;})()) {
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1713], secs: v1715, time: v1714, didSend: v585, from: v1712 } = txn7;
            undefined /* setApiDetails */;
            ;
            const v1718 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1712), null);
            let v1719;
            switch (v1718[0]) {
              case 'None': {
                const v1720 = v1718[1];
                v1719 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1721 = v1718[1];
                v1719 = v1721;
                
                break;
                }
              }
            const v1722 = stdlib.ge(v1700, v1719);
            const v1723 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1712), null);
            let v1724;
            switch (v1723[0]) {
              case 'None': {
                const v1725 = v1723[1];
                v1724 = false;
                
                break;
                }
              case 'Some': {
                const v1726 = v1723[1];
                v1724 = true;
                
                break;
                }
              }
            const v1727 = v1722 ? v1724 : false;
            if (v1727) {
              const v1728 = v1699[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
              const v1729 = v1728[stdlib.checkedBigNumberify('./index.rsh:208:25:application', stdlib.UInt_max, '0')];
              const v1730 = stdlib.mul(v1729, v1339);
              const v1732 = stdlib.div(v1730, v1327);
              let v1734;
              switch (v1718[0]) {
                case 'None': {
                  const v1735 = v1718[1];
                  v1734 = stdlib.checkedBigNumberify('./index.rsh:200:53:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1736 = v1718[1];
                  v1734 = v1736;
                  
                  break;
                  }
                }
              const v1737 = stdlib.mul(v1732, v1734);
              const v1738 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1712), null);
              let v1739;
              switch (v1738[0]) {
                case 'None': {
                  const v1740 = v1738[1];
                  v1739 = v1341;
                  
                  break;
                  }
                case 'Some': {
                  const v1741 = v1738[1];
                  v1739 = v1741;
                  
                  break;
                  }
                }
              const v1745 = stdlib.sub(v1700, v1737);
              ;
              await stdlib.mapSet(map2, v1712, undefined /* Nothing */);
              const v1748 = 'claimPaseed         ';
              null;
              const v1749 = true;
              await txn7.getOutput('Contributors_claimToken', 'v1749', ctc14, v1749);
              const v1757 = stdlib.sub(v1692, stdlib.checkedBigNumberify('./index.rsh:213:46:decimal', stdlib.UInt_max, '1'));
              const cv1691 = v1729;
              const cv1692 = v1757;
              const cv1693 = v1714;
              const cv1699 = v1699;
              const cv1700 = v1745;
              
              v1691 = cv1691;
              v1692 = cv1692;
              v1693 = cv1693;
              v1699 = cv1699;
              v1700 = cv1700;
              
              continue;}
            else {
              const v1763 = 'claimFailed         ';
              null;
              const v1764 = false;
              await txn7.getOutput('Contributors_claimToken', 'v1764', ctc14, v1764);
              const v1770 = v1699[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
              const v1771 = v1770[stdlib.checkedBigNumberify('./index.rsh:217:24:application', stdlib.UInt_max, '0')];
              const cv1691 = v1771;
              const cv1692 = v1692;
              const cv1693 = v1714;
              const cv1699 = v1699;
              const cv1700 = v1700;
              
              v1691 = cv1691;
              v1692 = cv1692;
              v1693 = cv1693;
              v1699 = cv1699;
              v1700 = cv1700;
              
              continue;}
            
            }
          const v1776 = v1699[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v1777 = v1776[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v1781 = stdlib.sub(v1700, v1777);
          ;
          ;
          const v1788 = v1776[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v1794 = stdlib.sub(v1777, v1788);
          const v1798 = v1776[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v1799 = [v1794, v1788, v1798];
          const v1800 = stdlib.Array_set(v1699, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1799);
          const v1801 = v1800[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v1802 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v1803 = stdlib.sub(v1802, v1788);
          const v1805 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v1807 = v1801[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v1808 = [v1805, v1803, v1807];
          const v1809 = stdlib.Array_set(v1800, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1808);
          undefined /* TokenBurn */;
          const v1810 = v1809[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v1811 = v1810[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v1811) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          
          
          }
        else {
          const v1842 = 'failed              ';
          null;
          const txn5 = await (ctc.sendrecv({
            args: [v1253, v1263, v1317, v1340, v1341, v1348, v1349],
            evt_cnt: 0,
            funcNum: 13,
            lct: v1342,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:227:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1845, time: v1844, didSend: v660, from: v1843 } = txn5;
              
              ;
              const v1848 = v1349;
              const v1849 = v1340;
              const v1850 = v1844;
              const v1856 = v1348;
              const v1857 = v1349;
              
              if (await (async () => {
                const v1860 = stdlib.gt(v1849, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
                const v1861 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
                const v1862 = v1860 ? v1861 : false;
                
                return v1862;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1924 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
                const v1925 = v1924[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
                const v1929 = stdlib.sub(v1857, v1925);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1253,
                  tok: undefined /* Nothing */
                  });
                const v1936 = v1924[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
                const v1942 = stdlib.sub(v1925, v1936);
                const v1946 = v1924[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
                const v1947 = [v1942, v1936, v1946];
                const v1948 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1947);
                const v1949 = v1948[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
                const v1950 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
                const v1951 = stdlib.sub(v1950, v1936);
                const v1953 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
                const v1955 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
                const v1956 = [v1953, v1951, v1955];
                const v1957 = stdlib.Array_set(v1948, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1956);
                stdlib.simTokenBurn(sim_r, v1263, v1936);
                const v1958 = v1957[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
                const v1959 = v1958[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
                if (v1959) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1263);
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
          const {data: [], secs: v1845, time: v1844, didSend: v660, from: v1843 } = txn5;
          ;
          const v1846 = stdlib.addressEq(v1253, v1843);
          stdlib.assert(v1846, {
            at: './index.rsh:227:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1848 = v1349;
          let v1849 = v1340;
          let v1850 = v1844;
          let v1856 = v1348;
          let v1857 = v1349;
          
          while (await (async () => {
            const v1860 = stdlib.gt(v1849, stdlib.checkedBigNumberify('./index.rsh:230:27:decimal', stdlib.UInt_max, '0'));
            const v1861 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:230:49:decimal', stdlib.UInt_max, '0'));
            const v1862 = v1860 ? v1861 : false;
            
            return v1862;})()) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc19],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1869], secs: v1871, time: v1870, didSend: v698, from: v1868 } = txn6;
            undefined /* setApiDetails */;
            ;
            const v1874 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1868), null);
            let v1875;
            switch (v1874[0]) {
              case 'None': {
                const v1876 = v1874[1];
                v1875 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1877 = v1874[1];
                v1875 = v1877;
                
                break;
                }
              }
            const v1878 = stdlib.ge(v1857, v1875);
            const v1879 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1868), null);
            let v1880;
            switch (v1879[0]) {
              case 'None': {
                const v1881 = v1879[1];
                v1880 = false;
                
                break;
                }
              case 'Some': {
                const v1882 = v1879[1];
                v1880 = true;
                
                break;
                }
              }
            const v1883 = v1878 ? v1880 : false;
            if (v1883) {
              let v1885;
              switch (v1874[0]) {
                case 'None': {
                  const v1886 = v1874[1];
                  v1885 = stdlib.checkedBigNumberify('./index.rsh:225:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1887 = v1874[1];
                  v1885 = v1887;
                  
                  break;
                  }
                }
              const v1888 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1868), null);
              let v1889;
              switch (v1888[0]) {
                case 'None': {
                  const v1890 = v1888[1];
                  v1889 = v1341;
                  
                  break;
                  }
                case 'Some': {
                  const v1891 = v1888[1];
                  v1889 = v1891;
                  
                  break;
                  }
                }
              const v1895 = stdlib.sub(v1857, v1885);
              ;
              await stdlib.mapSet(map2, v1868, undefined /* Nothing */);
              const v1898 = 'refundPassed        ';
              null;
              const v1899 = true;
              await txn6.getOutput('Contributors_claimRefund', 'v1899', ctc14, v1899);
              const v1905 = stdlib.sub(v1849, stdlib.checkedBigNumberify('./index.rsh:238:30:decimal', stdlib.UInt_max, '1'));
              const cv1848 = v1895;
              const cv1849 = v1905;
              const cv1850 = v1870;
              const cv1856 = v1856;
              const cv1857 = v1895;
              
              v1848 = cv1848;
              v1849 = cv1849;
              v1850 = cv1850;
              v1856 = cv1856;
              v1857 = cv1857;
              
              continue;}
            else {
              const v1912 = 'refundFailed        ';
              null;
              const v1913 = false;
              await txn6.getOutput('Contributors_claimRefund', 'v1913', ctc14, v1913);
              const cv1848 = v1857;
              const cv1849 = v1849;
              const cv1850 = v1870;
              const cv1856 = v1856;
              const cv1857 = v1857;
              
              v1848 = cv1848;
              v1849 = cv1849;
              v1850 = cv1850;
              v1856 = cv1856;
              v1857 = cv1857;
              
              continue;}
            
            }
          const v1924 = v1856[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v1925 = v1924[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
          const v1929 = stdlib.sub(v1857, v1925);
          ;
          ;
          const v1936 = v1924[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
          const v1942 = stdlib.sub(v1925, v1936);
          const v1946 = v1924[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v1947 = [v1942, v1936, v1946];
          const v1948 = stdlib.Array_set(v1856, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1947);
          const v1949 = v1948[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v1950 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
          const v1951 = stdlib.sub(v1950, v1936);
          const v1953 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
          const v1955 = v1949[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
          const v1956 = [v1953, v1951, v1955];
          const v1957 = stdlib.Array_set(v1948, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v1956);
          undefined /* TokenBurn */;
          const v1958 = v1957[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
          const v1959 = v1958[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
          if (v1959) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          }}}
    else {
      const v1991 = v1313.owner;
      const v1995 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v1326);
      ;
      ;
      const v2002 = v1325[stdlib.checkedBigNumberify('./index.rsh:108:26:application', stdlib.UInt_max, '1')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    
    
    }
  else {
    let v2044 = true;
    let v2045 = v1296;
    let v2051 = v1308;
    let v2052 = stdlib.checkedBigNumberify('./index.rsh:74:8:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v2044;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 19,
        out_tys: [ctc24],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2110], secs: v2112, time: v2111, didSend: v901, from: v2109 } = txn3;
      switch (v2110[0]) {
        case 'Contributors_contributed0_771': {
          const v2113 = v2110[1];
          undefined /* setApiDetails */;
          ;
          const v2121 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '0')];
          const v2122 = v2113[stdlib.checkedBigNumberify('./index.rsh:265:9:spread', stdlib.UInt_max, '1')];
          const v2123 = null;
          await txn3.getOutput('Contributors_contributed', 'v2123', ctc0, v2123);
          const v2131 = 'contributed         ';
          null;
          const cv2044 = true;
          const cv2045 = v2111;
          const cv2051 = v2051;
          const cv2052 = v2052;
          
          v2044 = cv2044;
          v2045 = cv2045;
          v2051 = cv2051;
          v2052 = cv2052;
          
          continue;
          break;
          }
        case 'Contributors_creating0_771': {
          const v2165 = v2110[1];
          undefined /* setApiDetails */;
          ;
          const v2185 = v2165[stdlib.checkedBigNumberify('./index.rsh:251:9:spread', stdlib.UInt_max, '0')];
          const v2186 = null;
          await txn3.getOutput('Contributors_creating', 'v2186', ctc0, v2186);
          const v2199 = v2185.id;
          const v2200 = v2185.title;
          const v2201 = v2185.link;
          const v2202 = v2185.description;
          const v2203 = v2185.owner;
          const v2204 = v2185.contractInfo;
          null;
          const cv2044 = true;
          const cv2045 = v2111;
          const cv2051 = v2051;
          const cv2052 = v2052;
          
          v2044 = cv2044;
          v2045 = cv2045;
          v2051 = cv2051;
          v2052 = cv2052;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_771': {
          const v2217 = v2110[1];
          undefined /* setApiDetails */;
          ;
          const v2258 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '0')];
          const v2259 = v2217[stdlib.checkedBigNumberify('./index.rsh:272:9:spread', stdlib.UInt_max, '1')];
          const v2260 = null;
          await txn3.getOutput('Contributors_timedOut', 'v2260', ctc0, v2260);
          const v2268 = 'timedOut            ';
          null;
          const cv2044 = true;
          const cv2045 = v2111;
          const cv2051 = v2051;
          const cv2052 = v2052;
          
          v2044 = cv2044;
          v2045 = cv2045;
          v2051 = cv2051;
          v2052 = cv2052;
          
          continue;
          break;
          }
        }
      
      }
    const v2269 = v2051[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
    const v2270 = v2269[stdlib.checkedBigNumberify('./index.rsh:281:19:application', stdlib.UInt_max, '0')];
    const v2274 = stdlib.sub(v2052, v2270);
    ;
    ;
    const v2281 = v2269[stdlib.checkedBigNumberify('./index.rsh:283:24:application', stdlib.UInt_max, '1')];
    const v2287 = stdlib.sub(v2270, v2281);
    const v2291 = v2269[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
    const v2292 = [v2287, v2281, v2291];
    const v2293 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v2292);
    const v2294 = v2293[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
    const v2295 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '1')];
    const v2296 = stdlib.sub(v2295, v2281);
    const v2298 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0')];
    const v2300 = v2294[stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '2')];
    const v2301 = [v2298, v2296, v2300];
    const v2302 = stdlib.Array_set(v2293, stdlib.checkedBigNumberify('./index.rsh:283:12:application', stdlib.UInt_max, '0'), v2301);
    undefined /* TokenBurn */;
    const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '0')];
    const v2304 = v2303[stdlib.checkedBigNumberify('./index.rsh:284:20:application', stdlib.UInt_max, '2')];
    if (v2304) {
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
  appApproval: `BiA4AAEgCCgDETAqBgwCZMQBYDh5CgUWtgMQCyvLsuWKCaz9zPsLifLT/Quc89ONC4Kc4uUGvvGmswfaA5a52M8FExs55gPeA+4D9gOXBJ8ExwTPBOAEFWkNQIEBWJkB+gL9An/8A6CNBiYJAQABAQABAgEDAQQYtQ47cmNsYWltRmFpbGVkAAAAAAAAAAAACP//////////GLUOO3JwYXNzZWQAAAAAAAAAAAAAAAAAACI1ADEYQRWxKmRJIls1ASVbNQIxGSMSQQAKMQAoIRevZkIVfjYaABdJQQC2IjUEIzUGSSEYDEAAUUkhGQxAADFJIRoMQAAQIRoSRDYaATX/KTT/UEIAuCEZEkQ0AUkhCgxAAAchChJEQgAbJRJEQgBtSSEbDEAACiEbEkQ2GgFCAmchGBJEKkIG9UkhHAxAADdJIR0MQAAYIR0SRDYaATYaAlA1/ys0/1AhHq9QQgBfIRwSRDYaATYaAlA1/yg0/1AhHq9QQgBHSSEfDEAACCEfEkQqQgTGgaDG2yMSRCpCCX82GgIXNQQ2GgM2GgEXSYEJDEAJVkmBDwxABh5JIQYMQAHdSSEgDEABQiEgEkQhITQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf5XKBE1/SEiWzX8STUFNfuABJPeprA0+1CwNPsiVUkjDEAAr0khCwxAAE4hCxJENPtXARA1+oAIAAAAAAAACNSwKjUHgBhQhKuwdGltZWRPdXQAAAAAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCExNINPsjgeoDWDX6NPo1+YAIAAAAAAAACIqwKjUHgAQBabAHNPlXAAhQNPlXCBRQNPlXHJZQNPlXsrRQNPmB5gIkWFA0+YGGAyEMWFCwNP80/iMyBjT9NPxCErlINPtXARA1+oAIAAAAAAAACEuwKjUHgBhQhKuwY29udHJpYnV0ZWQAAAAAAAAAAAA0+lcACFA0+lcICFCwNP80/iMyBjT9NPxCEm4hBhJEIRM0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSVcAIDX/ISNbNf6ABACB0o6wMgY0/g9ENP8xABJENP80AyRbNAMhBCEUWDQDISRbNP40AyElWzQDISYkWDQDgZYEI1gXNAMhJ1s0AyEoWzQDgacEJFgyBjQDISlbNAMhKiEGWDQDIStbQg2lSSEVDEACtEghEzQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSkpKSklXACA1/yRbNf4hBCEUWDX9ISRbNfwhI1s1+yElWzX6ISYkWDX5ISdbNfghKFs19yEpWzX2ISohBlg19Uk1BTX0gASH0Gf9NPRQsDIGNPsMRDT0F0k18yINRDQDIStbNPMINfI084gSa4AIAAAAAAAABWo08hZQsDTyFjUHMQCIEkNXKgFJNfAiVUAABiI18UIABiM18UIAADTxQQBvMQCIEiJXIQlJNe8iVUAABiI18EIADDTvI1tJNe418EIAADEAKDEAiBH9KTTwFlA170lXACE071BMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/SENWw9NIxI0+DT3IwgxADIGNPY09TTyQgxnNP2B6gJbNfA08zTwDUEAdDEAKDEAiBGgKTEAUDXvVyEKNO9MUGYxACgxAIgRiiMhCExWZjEAKDEAiBF8KTTwFlA170lXACE071BMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/SENWw9NIxI0+DTwCDT3IwgxADIGNPY09TTyQgvjNP2B8gJbNe808zTvDEEAdDEAKDEAiBEcKTEAUDXuVyEKNO5MUGYxACgxAIgRBiMhCExWZjEAKDEAiBD4KTTvFlA17klXACE07lBMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/SENWw9NIxI0+DTvCDT3IwgxADIGNPY09TTyQgtfMQAoMQCIEKgpMQBQNe5XIQo07kxQZjEAKDEAiBCSIyEITFZmMQAoMQCIEIQpNPMWUDXuSVcAITTuUExXKgFQZjT4NPMINe40/zT+NP00/DT7NPo0+SMiNO40/SENWw9NIxI07jT3IwgxADIGNPY09TTyQgrqSCEsNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8kWzX+IQRbNf1XMCA1/IFQWzX7V1gRNfohLVs1+Uk1BTX4gAS2aNLzNPhQsDEAiA/qVyEJSTX3IlVAAAYiNfZCAAw09yNbSTX1NfZCAAAxAIgPyFcqAUk19CJVQAAGIjX1QgAGIzX1QgAANPk09g809RBBAKc09yJVQAAGIjX0QgAMNPcjW0k18zX0QgAAMQCID4hXACFJNfIiVUAABzT8NfNCAA008lcBIEk18TXzQgAANPk09Ak18rEisgE09LIII7IQNPOyB7MxACgxAIgPSiIhCExWZoAYtQ47cnJlZnVuZFBhc3NlZAAAAAAAAAAANP0WULCACQAAAAAAAAdrAbApNQc0/zT+NP00/DTyNPsjCTIGNPo08kINHYAYtQ47cnJlZnVuZEZhaWxlZAAAAAAAAAAANP0WULCACQAAAAAAAAd5ALAoNQc0/zT+NP00/DT5NPsyBjT6NPlCDNpJIQoMQAHwSSEuDEAAVSEuEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IS1bNf6ABCKflwOwNP8xABJENP80AyRbNAMhBFs0A1c4IDT+NAMhB1syBjQDV1gRNP5CDHdIIRU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hB1s1/CEPWzX7V0AgNfohDls1+VdoETX4IRBbNfdJNQU19oAE5jJtFDT2ULAxAIgN+lchCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCIDdhXKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQC9NPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNPwKNPELNfAxAIgNglcAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezMQAoMQCIDUsiIQhMVmaAGLUOO3JjbGFpbVBhc2VlZAAAAAAAAAAAADT9FlCwgAkAAAAAAAAG1QGwKTUHNP80/jT9NPw0+zT6NPI0+SMJMgY0+DT3NPAJQgo+JwY0/RZQsIAJAAAAAAAABuQAsCg1BzT/NP40/TT8NPs0+jT4VwARIls0+TIGNPg090IKCkkhEQxAAGIhERJEIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATTRHMjsDT/MQASRDT/NAMkWzQDIQRbNAMhB1s0AyEPWzQDV0ggNAMhEFs0AyEvWzIGNANXaBE0AyEwW0IJoUghFjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEHWzX8ITFbNfshDls1+ldoIDX5V4gRNfghMls194AEogVmjrA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iEMCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEKNQEyBjUCQgs5SSEFDEADwkkhCQxAAfxJJQxAAZRIIRE0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQRbNf0hB1s1/CEPWzX7V0AgNfohDls1+VdoETX4IRBbNfdJNQU19oAER+SvJzT2ULAxAIgLGFchCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCICvZXKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQC9NPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNPwKNPELNfAxAIgKoFcAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezMQAoMQCICmkiIQhMVmaAGLUOO3JjbGFpbVBhc3NlZAAAAAAAAAAAADT9FlCwgAkAAAAAAAAGHgGwKTUHNP80/jT9NPw0+zT6NPkjCTTyMgY0+DT3NPAJQgaDJwY0/RZQsIAJAAAAAAAABi0AsCg1BzT/NP40/TT8NPs0+jT5NPhXABEiWzIGNPg090IGTyEJEkQhCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywNP8xABJENP80AyRbNAMhBFs0AyEHWzQDIQ9bNANXSCA0AyEQWzQDIS9bMgY0A1doETQDITBbQgXtSSESDEAA0UghEjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBFs1/SEHWzX8ITFbNfshDls1+ldoIDX5V4gRNfghMls194AEzJmSXLA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iEMCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEJNQEyBjUCQghXIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0lKVwAgNf8kWzX+VygRNf0hIiEUWDX8gASnZcS0sDT/MQASRDT9VwARSTX7Ils1+jT8Ils1+TT6NPkNQQBLNPo0+Qk1+DT8ITMkWDX3sSKyATT4sggjshA097IHszT/NP40/DQDgfcDWzQDgf8DWzT5NPcjIiI0/zIGNAOB7wNbNP0iNPgJQgKnsSKyATT6sggjshA0/CEzJFiyB7OxIrIBIjT6CbIII7IQNP+yB7OxIrIBIQWyEDT+siGzQgdUSSMMQAFSSSELDEAAukghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XMBE1/Uk1BTX8gARD/YC7NPxQsDT/MQASRDT8gcwBWzX7gBi1DjtyY3JlYXRlZAAAAAAAAAAAAAAAAAA0+xZQsDQDIQRbgRQINfo0/zT+FlA0/VA0/FAyBhZQNPsWUDT6FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBITQhNVhnJwVLASE2IRZYZ0ghBTUBMgY1AkIGqUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gSFbNf5XKRE1/YAEmouRdLA0/VcAEUk1/CVbNfs0/CJbNPsIFjT7FlA0/FcQAVA1+jT7NP6IBs00/zEAEkQ0A1cgARdBACA0/zT+FlAyBhZQNPpQKEsBVwBBZ0ghCzUBMgY1AkIGJTT/NP4jMgY0+iJCBU5IITeIBnMiNAESRDQESSISTDQCEhFESTUFSUpXAAEXNf9XASA1/lchCDX9gSlbNfyABA144to0/xZRBwhQNP5QNP1QNPwWULAhBq81+yE3iAYnsSKyASEFshCB////////////AbIiIQmyIzT9siU0/rImIQ6vsicyA7IoMgqyKbO0PDX6gAgAAAAAAAAE7jT6FlCwNPo1+TT7VwARNfgnBzT4VwgIUDT4VxABUEk191cAEUk19lcACCcHUDT2VxABUEk19VcAEUk19FcACDT0VwgIUChQNfOAGLUOO3J0b2tlbkNyZWF0ZWQAAAAAAAAAADT8FlCwMQA0/xZRBwhQNPkWUDTzUChLAVcAOmdIIzUBMgY1AkIE/zX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TT9NPUONPgQQQBqNPE08hZQNPNQNPQWUDT1FlA09hZQNPdQNPgWUQcIUDT5FlA0+hZQNPtQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBITQhNVhnJwVLASE2gWxYZ0ghEzUBMgY1AkIEbCMiNPk08yENWw9NIhJBAGInCDT0FlCwNP8hDAo18DT/NPAJNe+xIrIBNPCyCCOyEDTxsgezNPE08hZQNPQWUDT2FlA091A0+RZQNPoWUDT7UDT+UDTvFlAoSwFXAH9nKUsBV38iZ0ghEjUBMgY1AkID+jT5NPOBmgNbD0EAYicINPQWULA0/yEMCjXwNP808Ak177EisgE08LIII7IQNPGyB7M08TTyFlA09BZQNPYWUDT3UDT5FlA0+hZQNPtQNP5QNO8WUChLAVcAf2cpSwFXfyJnSCEWNQEyBjUCQgOMgBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA09BZQsDTxNPIWUDT0FlA0+hZQNPtQNP5QNP8WUChLAVcAcWdIIQY1ATIGNQJCA0I1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwiDTT7Ig0QQQA6NPU09hZQNPcWUDT4FlA0+RZQNPpQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38CZ0ghETUBMgY1AkIC5jT+VwARSTX0Ils187EisgE087III7IQNPWyB7OxIrIBNP808wmyCCOyEDT1sgezNPQlWzXyNPM08gkWNPIWUDT0VxABUEk18VcAEUk18FcACDTwJVs08gkWUDTwVxABUFcAEVcQARdBAANCAl2xIrIBIQWyEDT2siGzQgJNNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8Ig00+yINEEEAOjT1NPYWUDT3FlA0+BZQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIIRU1ATIGNQJCAg00/lcAEUk19CJbNfOxIrIBNPOyCCOyEDT1sgezsSKyATT/NPMJsggjshA09bIHszT0JVs18jTzNPIJFjTyFlA09FcQAVBJNfFXABFJNfBXAAg08CVbNPIJFlA08FcQAVBXABFXEAEXQQADQgGEsSKyASEFshA09rIhs0IBdDX/Nf41/TX8Nfs1+jX5Nfg19zT8Ig00+yINEEEAKzT3NPgWUDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAcWdIISw1ATIGNQJCAUc0/lcAEUk19iJbNfWxIrIBNPWyCCOyEDT3sgezsSKyATT/NPUJsggjshA097IHszT2JVs19DT1NPQJFjT0FlA09lcQAVBJNfNXABFJNfJXAAg08iVbNPQJFlA08lcQAVBXABFXEAEXQQADQgC+sSKyASEFshA0+LIhs0IArjX/Nf41/TX8Nfs1+jT8QQAgNPo0+xZQNP5QNP8WUChLAVcAQWdIISE1ATIGNQJCAJk0/lcAEUk1+SJbNfixIrIBNPiyCCOyEDT6sgezsSKyATT/NPgJsggjshA0+rIHszT5JVs19zT4NPcJFjT3FlA0+VcQAVBJNfZXABFJNfVXAAg09SVbNPcJFlA09VcQAVBXABFXEAEXQQADQgAQsSKyASEFshA0+7Ihs0IAADEZIRISRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghF6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBCBBBJEOBFPAhJEOBISRIk=`,
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
                "name": "v1254",
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
                "name": "v1255",
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
                "name": "v1256",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1257",
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
                "name": "v1254",
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
                "name": "v1255",
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
                "name": "v1256",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v1257",
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
                "name": "v1713",
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
                "name": "v1869",
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
                "name": "v1373",
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
                    "name": "_Contributors_contributed0_771",
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
                    "name": "_Contributors_creating0_771",
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
                    "name": "_Contributors_timedOut0_771",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v2110",
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
                "name": "v1313",
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
                "name": "v1530",
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
    "name": "_reach_oe_v1262",
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
    "name": "_reach_oe_v1386",
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
    "name": "_reach_oe_v1566",
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
    "name": "_reach_oe_v1581",
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
    "name": "_reach_oe_v1749",
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
    "name": "_reach_oe_v1764",
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
    "name": "_reach_oe_v1899",
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
    "name": "_reach_oe_v1913",
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
    "name": "_reach_oe_v2123",
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
    "name": "_reach_oe_v2186",
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
    "name": "_reach_oe_v2260",
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
                "name": "v1713",
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
                "name": "v1869",
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
                "name": "v1373",
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
                    "name": "_Contributors_contributed0_771",
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
                    "name": "_Contributors_creating0_771",
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
                    "name": "_Contributors_timedOut0_771",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T59",
                "name": "v2110",
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
                "name": "v1313",
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
                "name": "v1530",
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
  Bytecode: `0x608060405260405162008a7238038062008a728339810160408190526200002691620007dd565b60008055436003556200003862000491565b604080513381528351602080830191909152808501518051151583850152908101515160608084019190915281840151516001600160c01b0319166080840152015160a082015290517fe6585c59b5c07db1b5b4e230325a24d21f792d3f6b66e3998f7ba3eacdc46dbe9181900360c00190a180516000908190528151602090810182905282516040019190915281519082015152620000db34156007620003e4565b60408181018051600090819052815160209081018290529151830181905260608401515283810151810151518251918201520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526000196012604051620001b490620005ab565b620001c596959493929190620008f4565b604051809103906000f080158015620001e2573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fed844ad1fb2def42424044bb7eccb7985cb1b699a44616f864b6c83d2e4a3ad89060200160405180910390a160c0810180516000199052602080830180515182015183519092019190915280515160409081015183519015159101525190516200026f91906000906200040e565b60e0820181815290515161010083018051919091528051600019602090910152815151604090810151825190151591015290519051620002b391906000906200040e565b6101208201818152905151610140830180519190915281515160209081015182519091015280516000604090910181905291519051620002f492906200040e565b610160820152610180810180516b1d1bdad95b90dc99585d195960a21b905251602083810151606001516040805193516001600160601b0319168452918301527f8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4d910160405180910390a162000369620005b9565b3381526020808401515115158183015260a08301516001600160a01b031660408084019190915261016084015160608401526001600081905543905551620003b4918391016200095f565b60405160208183030381529060405260029080519060200190620003da929190620005e4565b5050505062000a41565b816200040a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200041862000673565b60005b60018110156200046e578481600181106200043a576200043a6200088e565b60200201518282600181106200045457620004546200088e565b6020020152806200046581620009da565b9150506200041b565b50818184600181106200048557620004856200088e565b60200201529392505050565b60408051610200810190915260006101a082018181526101c083018290526101e0830191909152815260208101620004c862000673565b815260408051606080820183526000808352602080840182905283850182905280860193909352835180840185528181528486015281850181905260808501819052835191820184528082529181018290529182015260a082015260c0016200053062000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200055f62000673565b815260408051606081018252600080825260208281018290529282015291019081526020016200058e62000673565b81526040805160208181019092526000815291015290565b905290565b61108780620079eb83390190565b604080516080810182526000808252602082018190529181019190915260608101620005a662000673565b828054620005f29062000a04565b90600052602060002090601f01602090048101928262000616576000855562000661565b82601f106200063157805160ff191683800117855562000661565b8280016001018555821562000661579182015b828111156200066157825182559160200191906001019062000644565b506200066f929150620006c0565b5090565b60405180602001604052806001905b620006a9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620006825790505090565b5b808211156200066f5760008155600101620006c1565b604080519081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200070857634e487b7160e01b600052604160045260246000fd5b6000602082840312156200078357600080fd5b604051602081016001600160401b0381118282101715620007b457634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160c01b031981168114620007d557600080fd5b905292915050565b600081830360a0811215620007f157600080fd5b620007fb620006d7565b835181526080601f19830112156200081257600080fd5b6200081c6200070e565b602085015180151581146200083057600080fd5b81526020603f19840112156200084557600080fd5b6200084f6200073f565b9250604085015183528260208201526200086d866060870162000770565b60408201526080850151606082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620008cc57602081850181015186830182015201620008ae565b81811115620008df576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200090960c0830189620008a4565b82810360208401526200091d8189620008a4565b90508281036040840152620009338188620008a4565b90508281036060840152620009498187620008a4565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401511515818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620009ce57825180518352858101518684015284015115158483015291840191908501906001016200099c565b50505050505092915050565b6000600019821415620009fd57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000a1957607f821691505b6020821081141562000a3b57634e487b7160e01b600052602260045260246000fd5b50919050565b616f9a8062000a516000396000f3fe6080604052600436106101a35760003560e01c80637f34cc90116100e0578063a93a2bdd11610084578063cadc2e7a11610061578063cadc2e7a146103af578063de736998146103dc578063e00acef1146103ef578063f530abd51461040257005b8063a93a2bdd14610366578063ab53f2c614610379578063c79800371461039c57005b806383230757116100bd57806383230757146103185780638e3147691461032d578063972b4448146103405780639f2518101461035357005b80637f34cc90146102db578063805367bf146102e3578063817d57f3146102eb57005b80634f7b8708116101475780636172e590116101245780636172e5901461029a5780636272318a146102ad5780636d700906146102c057806373b4522c146102c857005b80634f7b8708146102615780635471c5a8146102745780635bc7f7241461028757005b80632c10a159116101805780632c10a1591461020657806339b777f0146102195780633bc5b7bf146102215780633ccb40821461024e57005b8063152b31a2146101ac5780631e93b0f1146101d457806325630a02146101f357005b366101aa57005b005b6101bf6101ba366004615971565b610415565b60405190151581526020015b60405180910390f35b3480156101e057600080fd5b506003545b6040519081526020016101cb565b6101aa61020136600461598e565b610450565b6101aa6102143660046159b9565b610474565b6101bf610494565b34801561022d57600080fd5b5061024161023c3660046159d5565b610573565b6040516101cb9190615a18565b6101aa61025c3660046159b9565b61059f565b6101aa61026f3660046159b9565b6105bf565b6101aa6102823660046159b9565b6105df565b6101bf610295366004615a50565b6105ff565b6101bf6102a8366004615a50565b610645565b6101aa6102bb3660046159b9565b61068e565b6101bf6106ae565b6101aa6102d63660046159b9565b6106da565b6101bf6106fa565b6101bf610729565b3480156102f757600080fd5b5061030b6103063660046159d5565b610758565b6040516101cb9190615a72565b34801561032457600080fd5b506001546101e5565b6101aa61033b3660046159b9565b61077e565b6101e561034e366004615aa4565b61079e565b6101aa6103613660046159b9565b6107ce565b6101aa6103743660046159b9565b6107ee565b34801561038557600080fd5b5061038e61080e565b6040516101cb929190615ae9565b6101aa6103aa3660046159b9565b6108ab565b3480156103bb57600080fd5b506103cf6103ca3660046159d5565b6108cb565b6040516101cb9190615b23565b6101aa6103ea3660046159b9565b6108f1565b6101aa6103fd3660046159b9565b610911565b6101aa610410366004615b53565b610931565b600061041f614b45565b602081018051516001905251516040015183905261043b614b64565b610445828261094d565b60c001519392505050565b610458614b64565b61047061046a36849003840184615b66565b82610d52565b5050565b61047c614b64565b61047061048e36849003840184615c65565b82610f80565b60008054600814806104a85750600054600c145b6104b157600080fd5b6000546008141561052557306001600160a01b031663805367bf6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190615ca8565b905090565b600054600c141561057057306001600160a01b0316637f34cc906040518163ffffffff1660e01b81526004016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b90565b604080516060810182526000808252602082018190529181019190915261059982611214565b92915050565b6105a7614b64565b6104706105b936849003840184615d1c565b826112f0565b6105c7614b64565b6104706105d936849003840184615d1c565b826118ca565b6105e7614b64565b6104706105f936849003840184615c65565b82611e2a565b6000610609614b45565b60208181018051516000905280515182015186905251518101510183905261062f614b64565b610639828261094d565b60a00151949350505050565b600061064f614b45565b602081810180515160029052805151606090810151879052905151015101839052610678614b64565b610682828261094d565b60e00151949350505050565b610696614b64565b6104706106a836849003840184615d38565b82611fdd565b60006106b8614ba8565b6020810151600090526106c9614b64565b6106d382826118ca565b5192915050565b6106e2614b64565b6104706106f436849003840184615c65565b826127a4565b6000610704614ba8565b602081015160009052610715614b64565b61071f8282612b12565b6060015192915050565b6000610733614ba8565b602081015160009052610744614b64565b61074e82826112f0565b6040015192915050565b6040805160608101825260008082526020820181905291810191909152610599826130ef565b610786614b64565b61047061079836849003840184615c65565b826131b8565b60006107a8614bd2565b6020810151518390526107b9614b64565b6107c38282611fdd565b608001519392505050565b6107d6614b64565b6104706107e836849003840184615c65565b8261344d565b6107f6614b64565b61047061080836849003840184615d1c565b82612b12565b60006060600054600280805461082390615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90615d8f565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b50505050509050915091509091565b6108b3614b64565b6104706108c536849003840184615c65565b82613669565b604080516060810182526000808252602082018190529181019190915261059982613831565b6108f9614b64565b61047061090b36849003840184615c65565b826138f4565b610919614b64565b61047061092b36849003840184615c65565b82613b89565b610939614b64565b61047061094b36849003840184615df4565b825b61095d601b60005414603f613d51565b815161097890158061097157508251600154145b6040613d51565b60008080556002805461098a90615d8f565b80601f01602080910402602001604051908101604052809291908181526020018280546109b690615d8f565b8015610a035780601f106109d857610100808354040283529160200191610a03565b820191906000526020600020905b8154815290600101906020018083116109e657829003601f168201915b5050505050806020019051810190610a1b9190615f45565b9050610a25614bff565b7f6c6b37a1968aa309908bd167a281ccdc80e824957a014a1d4f7d7a9149ed8fcd3385604051610a56929190616056565b60405180910390a16000602085015151516002811115610a7857610a786159f2565b1415610ba6576020808501515101518152610a953415603c613d51565b604051600081527f96906766bb2dda89c1d62e75078349b60c82bfa44d91c40b3ac2eb36e21be56f9060200160405180910390a1600060a0840152602080820180516a18dbdb9d1c9a589d5d195960aa1b905251825180519201516040517ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf393610b3d9392909192516001600160601b03191683526020830191909152604082015260600190565b60405180910390a1610b4d614c72565b825181516001600160a01b039182169052602080850151835192169181019190915280820180516001905280514392019190915260408085015182519091015260608085015191510152610ba081613d77565b50610d4c565b6001602085015151516002811115610bc057610bc06159f2565b1415610c6d5760208401515160409081015190820152610be23415603d613d51565b604051600081527f57152638881c222af0e4ccdcacfc120986abc870cb2e3d29e8b14e21bfaa98819060200160405180910390a1600060c08401526040808201515180516020820151828401516060840151608085015160a09095015195517fc637fbf488869e7c6eab5d4a5d0974d38f52692be94971287b97d21de5a5ce1e96610b3d969161613b565b6002602085015151516002811115610c8757610c876159f2565b1415610d4c5760208401515160609081015190820152610ca93415603e613d51565b604051600081527fc4c97a5ed8297f08720a0f7ad61cf60e77de8ecb8a8c9910be9339791a14639e9060200160405180910390a1600060e0840152608081018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39101610b3d565b50505050565b610d62600260005414600f613d51565b8151610d7d901580610d7657508251600154145b6010613d51565b600080805560028054610d8f90615d8f565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbb90615d8f565b8015610e085780601f10610ddd57610100808354040283529160200191610e08565b820191906000526020600020905b815481529060010190602001808311610deb57829003601f168201915b5050505050806020019051810190610e20919061618c565b9050610e2a614c9b565b7f79fd80465d89724fec35d748f55c7faace9c5029300cfa7f2e8ac3fbb93bc7973385604051610e5b92919061629b565b60405180910390a1610e6f3415600d613d51565b8151610e87906001600160a01b03163314600e613d51565b80516618dc99585d195960ca1b9052805160208501515160800151604051600080516020616f4583398151915292610ec09290916162c9565b60405180910390a160148260400151610ed991906162f8565b6020820152610ee6614cbe565b82516001600160a01b03908116825260208085015190911681830152606080850151604080850191909152878301805151928501929092524360808086018290529251519092015160a08501528483015160c0850152600360005560019190915551610f549183910161634e565b60405160208183030381529060405260029080519060200190610f78929190614d05565b505050505050565b610f90600160005414600b613d51565b8151610fab901580610fa457508251600154145b600c613d51565b600080805560028054610fbd90615d8f565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe990615d8f565b80156110365780601f1061100b57610100808354040283529160200191611036565b820191906000526020600020905b81548152906001019060200180831161101957829003601f168201915b505050505080602001905181019061104e91906163bc565b9050611058614d89565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051611089929190616416565b60405180910390a161109d34156008613d51565b606082015151602081015190516110b491906162f8565b8151526060820180515160209081015183519091015280515160409081015183519015159101525181516110eb9190600090613fbe565b60208201526040820151606083015161111c91611115913391906000602002015160200151614032565b6009613d51565b8151611134906001600160a01b03163314600a613d51565b8160200151156111b857611146614db9565b82516001600160a01b039081168252604080850151909116602080840191909152438284018190528482015160608501526002600055600155905161118d91839101616454565b604051602081830303815290604052600290805190602001906111b1929190614d05565b5050610d4c565b6111c0614c72565b825181516001600160a01b03918216905260408085015183519216602092830152818301805160019052805143908401529184015182519091015251600060609091015261120d81613d77565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611260576112606159f2565b14156112e0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112a1576112a16159f2565b60018111156112b2576112b26159f2565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b611300600a60005414601e613d51565b815161131b90158061131457508251600154145b601f613d51565b60008080556002805461132d90615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461135990615d8f565b80156113a65780601f1061137b576101008083540402835291602001916113a6565b820191906000526020600020905b81548152906001019060200180831161138957829003601f168201915b50505050508060200190518101906113be919061652e565b90506113c8614df3565b7f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba544833856040516113f992919061654b565b60405180910390a161140d3415601d613d51565b61141633613831565b81526000815151600181111561142e5761142e6159f2565b14156114405760006020820152611470565b60018151516001811115611456576114566159f2565b141561147057805160409081015190820181905260208201525b600061147b336130ef565b51600181111561148d5761148d6159f2565b141561149f57600060608201526114ca565b60016114aa336130ef565b5160018111156114bc576114bc6159f2565b14156114ca57600160608201525b806020015182610100015110156114e25760006114e8565b80606001515b156117aa5760008151516001811115611503576115036159f2565b14156115155760006080820152611544565b6001815151600181111561152b5761152b6159f2565b14156115445780516040015160a0820181905260808201525b8060800151826060015183608001518460e0015160006001811061156a5761156a61643e565b60200201515161157a9190616575565b6115849190616594565b61158e9190616575565b60c0820152600061159e33611214565b5160018111156115b0576115b06159f2565b14156115ce5760a08201516001600160a01b031660e0820152611615565b60016115d933611214565b5160018111156115eb576115eb6159f2565b1415611615576115fa33611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015611656573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516a18db185a5b54185cdcd95960aa1b905251838201519151600080516020616f45833981519152926116ab92916162c9565b60405180910390a1604051600181527fad5257df63eec820cf3eca15b539964157bf0c2088021c4a62046ee528beb8fd9060200160405180910390a1600160208401526116f6614e69565b825181516001600160a01b039182169052602080850151835190831691015260408085015183519091015260608085015183519091015260808085015183519091015260a0808501518351921691015260c0830151611757906001906165b6565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c082015161010084015161179891906165b6565b602082015160800152610ba08161404a565b610140810180516a18db185a5b51985a5b195960aa1b9052516040808401519051600080516020616f45833981519152926117e69290916162c9565b60405180910390a1604051600081527ff9ff5535a46654b3809f6d07a8613ad3a82da63449c4c3f63507a2bc062e838e9060200160405180910390a160006020840152611831614e69565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e0880180515151825190950194909452805143930192909252915181519092019190915261010085015190519091015261120d8161404a565b6118da6015600054146030613d51565b81516118f59015806118ee57508251600154145b6031613d51565b60008080556002805461190790615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461193390615d8f565b80156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b505050505080602001905181019061199891906165cd565b90506119a2614df3565b7fc385b531bfdb596e9c4d4fba16778429b84fe13e45047887fd4a68f24be2836d33856040516119d392919061654b565b60405180910390a16119e73415602f613d51565b6119f033613831565b815260008151516001811115611a0857611a086159f2565b1415611a1a5760006020820152611a4a565b60018151516001811115611a3057611a306159f2565b1415611a4a57805160409081015190820181905260208201525b6000611a55336130ef565b516001811115611a6757611a676159f2565b1415611a795760006060820152611aa4565b6001611a84336130ef565b516001811115611a9657611a966159f2565b1415611aa457600160608201525b80602001518260c001511015611abb576000611ac1565b80606001515b15611d255760008151516001811115611adc57611adc6159f2565b1415611aee5760006080820152611b1d565b60018151516001811115611b0457611b046159f2565b1415611b1d5780516040015160a0820181905260808201525b6000611b2833611214565b516001811115611b3a57611b3a6159f2565b1415611b585760608201516001600160a01b031660c0820152611b9e565b6001611b6333611214565b516001811115611b7557611b756159f2565b1415611b9e57611b8433611214565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c00151611bb291906165b6565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611bf8573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516b1c99599d5b9914185cdcd95960a21b905251838201519151600080516020616f4583398151915292611c4e92916162c9565b60405180910390a1604051600181527fcaac42ccef21deca22cfb1ba21ffdba6a294cab805082c2afe58fafe12e3c3db9060200160405180910390a160018352611c96614eb1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451931692019190915261010083015190820151526080830151611cee906001906165b6565b602080830180519091019190915280514360409091015260a0840151815160600152610100830151905160800152610ba08161426c565b610140810180516b1c99599d5b9911985a5b195960a21b9052516040808401519051600080516020616f4583398151915292611d629290916162c9565b60405180910390a1604051600081527fd528d479009b07628aa27d06a3234acd764fc8ac247a02d1fd60b06afa99eb0e9060200160405180910390a160008352611daa614eb1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a087015182519094019390935291519151015261120d8161426c565b611e3a601160005414602d613d51565b8151611e55901580611e4e57508251600154145b602e613d51565b600080805560028054611e6790615d8f565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9390615d8f565b8015611ee05780601f10611eb557610100808354040283529160200191611ee0565b820191906000526020600020905b815481529060010190602001808311611ec357829003601f168201915b5050505050806020019051810190611ef89190616654565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983384604051611f2b929190616416565b60405180910390a1611f3f3415602b613d51565b8051611f57906001600160a01b03163314602c613d51565b611f5f614eb1565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a086015183519094019390935251905190910152610d4c8161426c565b611fed6016600054146034613d51565b815161200890158061200157508251600154145b6035613d51565b60008080556002805461201a90615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461204690615d8f565b80156120935780601f1061206857610100808354040283529160200191612093565b820191906000526020600020905b81548152906001019060200180831161207657829003601f168201915b50505050508060200190518101906120ab919061684a565b90506120e16040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b6120f2826080015143106036613d51565b60408051338152855160208083019190915286015151518183015290517faebca52b942863fd6d4f05a82294448179986ce7906a1e3170e3cc82bb1d56199181900360600190a16020840151515161214d9015156032613d51565b602084015151516101a083015161216491906162f8565b81526020840151515161217a9034146033613d51565b80516040519081527f523ce28f183c099e589cbfe22c5f52eb335e4ce6fc057080bfc1d595506254579060200160405180910390a18051608084015260006121c1336130ef565b5160018111156121d3576121d36159f2565b14156121e55760006020820152612210565b60016121f0336130ef565b516001811115612202576122026159f2565b141561221057600160208201525b8060200151156123b757600061222533613831565b516001811115612237576122376159f2565b14156122495760006040820152612287565b600161225433613831565b516001811115612266576122666159f2565b14156122875761227533613831565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff191660019081178255918301519101556122b4614ee1565b825181516001600160a01b03918216905260208085015183519083169082015260408086018051855190920191909152606080870151855182015260808088015186519091015260a08088015186519091015260c08088015186519516940193909352519091015190860151515161010085015160019291612335916162f8565b1015612342576001612345565b60005b60208381018051929093149091526101008501519151015261012083015161236f906001906162f8565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e00152610ba081614317565b604082015160c00151602085015151511115612505573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff191685179055600590915290819020805460ff1916831781559084015160c00151910155612438614ee1565b825181516001600160a01b03918216905260208085015183519083169082015260408086018051855190920191909152606080870151855182015260808088015186519091015260a08088015186519091015260c080880151865195169401939093525190910151908601515151610100850151600192916124b9916162f8565b10156124c65760016124c9565b60005b602083015191149052604083015160c001516101008401516124eb91906162f8565b602080830151015261012083015161236f906001906162f8565b604082015160e00151602085015151511015612639573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff191685179055600590915290819020805460ff1916831781559084015160e00151910155612586614ee1565b825181516001600160a01b03918216905260208085015183519083169082015260408086018051855190920191909152606080870151855182015260808088015186519091015260a08088015186519091015260c08088015186519516940193909352519091015190860151515161010085015160019291612607916162f8565b1015612614576001612617565b60005b602083015191149052604083015160e001516101008401516124eb91906162f8565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff19168317815590860151515191018190556101008301516126aa91906162f8565b60808201526126b7614ee1565b825181516001600160a01b0391821690526020808501518351908316910152604080850180518451909201919091526060808601518451820152608080870151855182015260a08088015186519091015260c0808801518651951694019390935290510151908301516001911115612730576001612733565b60005b602083810180519290931490915260808401519151015261012083015161275c906001906162f8565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e0015261120d81614317565b6127b46003600054146013613d51565b81516127cf9015806127c857508251600154145b6014613d51565b6000808055600280546127e190615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461280d90615d8f565b801561285a5780601f1061282f5761010080835404028352916020019161285a565b820191906000526020600020905b81548152906001019060200180831161283d57829003601f168201915b50505050508060200190518101906128729190616937565b905061288a6040518060200160405280600081525090565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633856040516128bb929190616416565b60405180910390a16128cf34156011613d51565b81516128e7906001600160a01b031633146012613d51565b606082015151604083015151511115612a26576060820151516040830151515161291191906165b6565b808252606083015161010001516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612953573d6000803e3d6000fd5b5061295c614ee1565b825181516001600160a01b03918216905260208085015183519083169082015260608086018051855160409081019190915260a080890151875185015260c0808a01518851608090810191909152845151895184015293516101000151885190881690820152858801805160019052805160009701879052805184018790528a5181519816979095019690965283514390840152918801518351909201919091528601519051909201919091528251612a14916165b6565b602082015160e00152610ba081614317565b816060015161010001516001600160a01b03166108fc8360400151600060018110612a5357612a5361643e565b6020020151516040518115909202916000818181858888f19350505050158015612a81573d6000803e3d6000fd5b508151604083015151516001600160a01b03909116906108fc90612aa69060006165b6565b6040518115909202916000818181858888f19350505050158015612ace573d6000803e3d6000fd5b5060208201516040830151612aef919060005b6020020151602001516147c5565b612afc82602001516147d8565b60008080556001819055610d4c90600290614f01565b612b226010600054146029613d51565b8151612b3d901580612b3657508251600154145b602a613d51565b600080805560028054612b4f90615d8f565b80601f0160208091040260200160405190810160405280929190818152602001828054612b7b90615d8f565b8015612bc85780601f10612b9d57610100808354040283529160200191612bc8565b820191906000526020600020905b815481529060010190602001808311612bab57829003601f168201915b5050505050806020019051810190612be0919061652e565b9050612bea614df3565b7f69beebeea7b0b108020d81166bc0b515fd9f40ae2df9ed1acacbdd11ce103f8e3385604051612c1b92919061654b565b60405180910390a1612c2f34156028613d51565b612c3833613831565b815260008151516001811115612c5057612c506159f2565b1415612c625760006020820152612c92565b60018151516001811115612c7857612c786159f2565b1415612c9257805160409081015190820181905260208201525b6000612c9d336130ef565b516001811115612caf57612caf6159f2565b1415612cc15760006060820152612cec565b6001612ccc336130ef565b516001811115612cde57612cde6159f2565b1415612cec57600160608201525b80602001518261010001511015612d04576000612d0a565b80606001515b15612fd25760008151516001811115612d2557612d256159f2565b1415612d375760006080820152612d66565b60018151516001811115612d4d57612d4d6159f2565b1415612d665780516040015160a0820181905260808201525b8060800151826060015183608001518460e00151600060018110612d8c57612d8c61643e565b602002015151612d9c9190616575565b612da69190616594565b612db09190616575565b60c08201526000612dc033611214565b516001811115612dd257612dd26159f2565b1415612df05760a08201516001600160a01b031660e0820152612e37565b6001612dfb33611214565b516001811115612e0d57612e0d6159f2565b1415612e3757612e1c33611214565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015612e78573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff19169055610120820180516a18db185a5b54185cd9595960aa1b905251838201519151600080516020616f4583398151915292612ecd92916162c9565b60405180910390a1604051600181527ffd68718b48adc9ae23e3063c82be3e2fb2723c36304247c9d13de7b8035de3239060200160405180910390a160016020840152612f18614e69565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608086015184519091015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c0830151612f89906001906165b6565b602080830180519091019190915280514360409091015260e084015190516060015260c0820151610100840151612fc091906165b6565b602082015160800152610ba0816147ed565b610140810180516a18db185a5b51985a5b195960aa1b9052516040808401519051600080516020616f458339815191529261300e9290916162c9565b60405180910390a1604051600081527ffa25ab8eddcd8b0a19c175d8e8bccb9f8f33e65989cb06b5facff3729b16ff0f9060200160405180910390a160006020840152613059614e69565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c0890151815190950194909452835143930192909252905182519091015261010085015190519091015261120d816147ed565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561313b5761313b6159f2565b14156112e0576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561317c5761317c6159f2565b600181111561318d5761318d6159f2565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b6131c86005600054146017613d51565b81516131e39015806131dc57508251600154145b6018613d51565b6000808055600280546131f590615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461322190615d8f565b801561326e5780601f106132435761010080835404028352916020019161326e565b820191906000526020600020905b81548152906001019060200180831161325157829003601f168201915b50505050508060200190518101906132869190616a67565b90506132a5604051806040016040528060008152602001600081525090565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516132d6929190616416565b60405180910390a16132ea34156015613d51565b8151613302906001600160a01b031633146016613d51565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f19350505050158015613344573d6000803e3d6000fd5b50610100820151515161335990606490616594565b80825261012083015161336c90806165b6565b61337691906165b6565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156133b5573d6000803e3d6000fd5b506133be614f3b565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e080880151909416908501526101008087018051948601949094529251515192840192909252838101516101208401526006600055436001559051610f5491839101616b1c565b61345d6016600054146039613d51565b815161347890158061347157508251600154145b603a613d51565b60008080556002805461348a90615d8f565b80601f01602080910402602001604051908101604052809291908181526020018280546134b690615d8f565b80156135035780601f106134d857610100808354040283529160200191613503565b820191906000526020600020905b8154815290600101906020018083116134e657829003601f168201915b505050505080602001905181019061351b919061684a565b905061352f8160800151431015603b613d51565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353384604051613560929190616416565b60405180910390a161357434156037613d51565b805161358c906001600160a01b031633146038613d51565b613594614ee1565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c08089015188519088169082015260e0808a0151878a0180519115159091526101008b01518151909801979097526101208a01518751909601959095526101408901518651971696909301959095528351439101526101608601518351909401939093526101808501518251909301929092526101a0840151905190910152610d4c81614317565b613679600660005414601b613d51565b815161369490158061368d57508251600154145b601c613d51565b6000808055600280546136a690615d8f565b80601f01602080910402602001604051908101604052809291908181526020018280546136d290615d8f565b801561371f5780601f106136f45761010080835404028352916020019161371f565b820191906000526020600020905b81548152906001019060200180831161370257829003601f168201915b50505050508060200190518101906137379190616bcd565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338460405161376a929190616416565b60405180910390a161377e34156019613d51565b8051613796906001600160a01b03163314601a613d51565b61379e614e69565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c8161404a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561387d5761387d6159f2565b14156112e0576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156138be576138be6159f2565b60018111156138cf576138cf6159f2565b81528154610100900460ff161515602082015260019091015460409091015292915050565b613904600b600054146022613d51565b815161391f90158061391857508251600154145b6023613d51565b60008080556002805461393190615d8f565b80601f016020809104026020016040519081016040528092919081815260200182805461395d90615d8f565b80156139aa5780601f1061397f576101008083540402835291602001916139aa565b820191906000526020600020905b81548152906001019060200180831161398d57829003601f168201915b50505050508060200190518101906139c29190616a67565b90506139e1604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3385604051613a12929190616416565b60405180910390a1613a2634156020613d51565b8151613a3e906001600160a01b031633146021613d51565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f19350505050158015613a80573d6000803e3d6000fd5b506101008201515151613a9590606490616594565b808252610120830151613aa890806165b6565b613ab291906165b6565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613af1573d6000803e3d6000fd5b50613afa614f3b565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600c600055436001559051610f5491839101616b1c565b613b99600c600054146026613d51565b8151613bb4901580613bad57508251600154145b6027613d51565b600080805560028054613bc690615d8f565b80601f0160208091040260200160405190810160405280929190818152602001828054613bf290615d8f565b8015613c3f5780601f10613c1457610100808354040283529160200191613c3f565b820191906000526020600020905b815481529060010190602001808311613c2257829003601f168201915b5050505050806020019051810190613c579190616bcd565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a3384604051613c8a929190616416565b60405180910390a1613c9e34156024613d51565b8051613cb6906001600160a01b031633146025613d51565b613cbe614e69565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e085015183519091015261012084015191510152610d4c816147ed565b816104705760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b613d7f614faf565b60208201515115613e0657613d92615003565b8251516001600160a01b039081168252835160209081015190911681830152808401805160409081015181850152905160609081015190840152601b6000554360015551613de291839101616bea565b60405160208183030381529060405260029080519060200190610d4c929190614d05565b8151516020830151604090810151515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613e4b573d6000803e3d6000fd5b508151516020830151604081015151516060909101516001600160a01b03909216916108fc91613e7a916165b6565b6040518115909202916000818181858888f19350505050158015613ea2573d6000803e3d6000fd5b506020828101516040015151908101519051613ebe91906165b6565b81515260208281018051604090810151518301518451909301929092528051820151518201518351901515908301525101518151613eff9190600090613fbe565b602082810182815291515160408085015191909152848201510151518101519151510151613f2d91906165b6565b6040828101805160209081019390935282840151518201519051901515908201528351820151918401510151613f6591906000612ae1565b613f79816020015160008360400151613fbe565b516040015115613f99576000808055600181905561047090600290614f01565b815160200151613fa8906147d8565b6000808055600181905561047090600290614f01565b613fc661501e565b60005b600181101561401257848160018110613fe457613fe461643e565b6020020151828260018110613ffb57613ffb61643e565b60200201528061400a81616c2e565b915050613fc9565b50818184600181106140265761402661643e565b60200201529392505050565b6000614040838530856148b0565b90505b9392505050565b614052614faf565b600082602001516020015111614069576000614072565b60208201515115155b1561410d5761407f615069565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152600a600055436001559051613de291839101616cc8565b81515160208301516060015151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614151573d6000803e3d6000fd5b508151516020830151606081015151516080909101516001600160a01b03909216916108fc91614180916165b6565b6040518115909202916000818181858888f193505050501580156141a8573d6000803e3d6000fd5b5060208281015160600151519081015190516141c491906165b6565b8151526020828101805160609081015151830151845190930192909252805182015151604090810151845190151591015251015181516142079190600090613fbe565b6020828101828152915151604084015152838101516060015151810151915151015161423391906165b6565b604082810180516020908101939093528284015151820151905190151591015282518101519083015160600151613f6591906000612ae1565b614274614faf565b60008260200151602001511161428b576000614294565b60208201515115155b1561410d576142a16150c9565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015190931683850152818601805183015160808087019190915281519094015160a0860152519092015160c08401526015600055436001559051613de291839101616cd7565b61431f61511a565b815160800151602083015160a00151111561433b576000614342565b6020820151515b1561441a5761434f615181565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190870152875160c090810151861681880152848901805151151560e0808a019190915281518701516101008a015281518601516101208a0152815190940151909616610140880152855190910151610160870152845101516101808601529251909201516101a08401526016600055436001559051613de291839101616d3e565b600082600001516040015160600151836020015160200151101561443f576001614442565b60005b141561459b578051651c185cdcd95960d21b90528051825160600151604051600080516020616f458339815191529261447c9290916162c9565b60405180910390a16064826020015160e001516144999190616594565b602080830182905283015160e001516144b291906165b6565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f193505050501580156144f7573d6000803e3d6000fd5b50614500615201565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601519288019290925281518301518188015281519093015190941660e086015292510151610100840152838201516101208401526005600055436001559051613de291839101616ec4565b81516040015161012001516020808401510151106147075760608082018051651c185cdcd95960d21b905251835190910151604051600080516020616f45833981519152926145eb9290916162c9565b60405180910390a16064826020015160e001516146089190616594565b60808201819052602083015160e0015161462291906165b6565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614665573d6000803e3d6000fd5b5061466e615201565b8251516001600160a01b03908116825283516020908101518216818401528451606090810151604080860191909152865160a09081015183870152875160c0908101518616608088015284890180518601518389015280518401518289015280519094015190951660e0870152915190930151610100850152840151610120840152600b600055436001559051613de291839101616ec4565b60c0810180516519985a5b195960d21b905251825160600151604051600080516020616f458339815191529261473e9290916162c9565b60405180910390a161474e615271565b8251516001600160a01b039081168252835160209081015182168184015284516060908101516040808601919091528287018051820151838701528051909201519093166080850152805160c09081015160a0860152905160e00151908401526011600055436001559051613de291839101616ed3565b6147cf828261498a565b61047057600080fd5b6147e181614a65565b6147ea57600080fd5b50565b6147f5614faf565b60008260200151602001511161480c576000614815565b60208201515115155b1561410d57614822615069565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e086015251909201516101008401526010600055436001559051613de291839101616cc8565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161491791616f28565b60006040518083038185875af1925050503d8060008114614954576040519150601f19603f3d011682016040523d82523d6000602084013e614959565b606091505b509150915061496a82826001614b0a565b508080602001905181019061497f9190615ca8565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016149b691815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516149f49190616f28565b60006040518083038185875af1925050503d8060008114614a31576040519150601f19603f3d011682016040523d82523d6000602084013e614a36565b606091505b5091509150614a4782826003614b0a565b5080806020019051810190614a5c9190615ca8565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391614aac91616f28565b60006040518083038185875af1925050503d8060008114614ae9576040519150601f19603f3d011682016040523d82523d6000602084013e614aee565b606091505b5091509150614aff82826004614b0a565b506001949350505050565b60608315614b19575081614043565b825115614b295782518084602001fd5b60405163100960cb60e01b815260048101839052602401613d6e565b604051806040016040528060008152602001614b5f6152c2565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604051806040016040528060008152602001614b5f60405180602001604052806000151581525090565b604051806040016040528060008152602001614b5f60408051808201909152600060208201908152815290565b6040805160e081018252600060a0820181815260c08301829052825282516020808201855291815290820152908101614c366152d5565b8152602001614c58604051806040016040528060008152602001600081525090565b8152602001614b5f60408051602081019091526000815290565b604080516080810182526000918101828152606082019290925290815260208101614b5f6152e8565b6040805160608101825260009181019182529081905b8152602001600081525090565b6040805160e08101825260008082526020820152908101614cdd61501e565b8152602001614cea615307565b81526020016000815260200160008152602001600081525090565b828054614d1190615d8f565b90600052602060002090601f016020900481019282614d335760008555614d79565b82601f10614d4c57805160ff1916838001178555614d79565b82800160010185558215614d79579182015b82811115614d79578251825591602001919060010190614d5e565b50614d859291506153da565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101614b5f61501e565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001614b5f61501e565b604080516101c0810182526000610160820181815261018083018290526101a0830182905282526020808301829052828401829052606083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290528351908101909352825290610120820190614c58565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b8152602001614b5f6153ef565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190614ea4565b6040518060400160405280614ef4615417565b8152602001614b5f615461565b508054614f0d90615d8f565b6000825580601f10614f1d575050565b601f0160209004906000526020600020908101906147ea91906153da565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001614f9b61501e565b815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101614fe061501e565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160808101825260008082526020820152908101614cb15b60405180602001604052806001905b615053604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161502d5790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614cb161501e565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001614cb161501e565b604080516101008101909152600060e0820190815281908152602001600081526020016000815260200161515960408051602081019091526000815290565b81526020016000815260200160008152602001614b5f60408051602081019091526000815290565b604080516101c081018252600080825260208201529081016151a1615307565b815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614cb161501e565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001614cb161501e565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001614cb161501e565b6040518060200160405280614b5f6154aa565b6040518060200160405280614b5f615509565b6040805160808101825260008082526020820152908101614cb161501e565b6040805161016081018252600080825260208201529081016153576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b8152602001600081526020016000815260200161539b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001614b5f60408051602081019091526000815290565b5b80821115614d8557600081556001016153db565b6040518060a00160405280600081526020016000815260200160008152602001614cb161501e565b6040805160e08101825260008082526020820152908101615436615307565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001614cb161501e565b604080516080810190915280600081526020016154da604051806040016040528060008152602001600081525090565b81526020016154e76152d5565b8152602001614b5f604051806040016040528060008152602001600081525090565b6040518060c001604052806000815260200161553060408051602081019091526000815290565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526000602080830182905260408051608081018252838152918201839052818101839052606082019290925291015290565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156155ff576155ff6155c6565b60405290565b60405160a0810167ffffffffffffffff811182821017156155ff576155ff6155c6565b60405160c0810167ffffffffffffffff811182821017156155ff576155ff6155c6565b6040516080810167ffffffffffffffff811182821017156155ff576155ff6155c6565b6040805190810167ffffffffffffffff811182821017156155ff576155ff6155c6565b604051610160810167ffffffffffffffff811182821017156155ff576155ff6155c6565b6040516060810167ffffffffffffffff811182821017156155ff576155ff6155c6565b604051610120810167ffffffffffffffff811182821017156155ff576155ff6155c6565b60405160e0810167ffffffffffffffff811182821017156155ff576155ff6155c6565b6040516101c0810167ffffffffffffffff811182821017156155ff576155ff6155c6565b604051610140810167ffffffffffffffff811182821017156155ff576155ff6155c6565b6001600160601b0319811681146147ea57600080fd5b60006020828403121561578f57600080fd5b6157976155dc565b905081356157a481615767565b815292915050565b69ffffffffffffffffffff19811681146147ea57600080fd5b600060a082840312156157d757600080fd5b6157df615605565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135615811816157ac565b608082015292915050565b600060c0828403121561582e57600080fd5b615836615628565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013561587281615767565b60a082015292915050565b6001600160a01b03811681146147ea57600080fd5b80356112eb8161587d565b60008183036102408112156158b157600080fd5b6158b9615628565b9150823582526158cc846020850161577d565b60208301526158de84604085016157c5565b60408301526158f08460e0850161581c565b60608301526101a08301356159048161587d565b8060808401525060806101bf198201121561591e57600080fd5b5061592761564b565b6101c083013581526101e0830135602082015261020083013560408201526102208301356001600160e01b03198116811461596157600080fd5b606082015260a082015292915050565b6000610240828403121561598457600080fd5b614043838361589d565b60006102a082840312156159a157600080fd5b50919050565b6000604082840312156159a157600080fd5b6000604082840312156159cb57600080fd5b61404383836159a7565b6000602082840312156159e757600080fd5b81356140438161587d565b634e487b7160e01b600052602160045260246000fd5b600281106147ea576147ea6159f2565b81516060820190615a2881615a08565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b60008060408385031215615a6357600080fd5b50508035926020909101359150565b81516060820190615a8281615a08565b8083525060208301511515602083015260408301511515604083015292915050565b600060208284031215615ab657600080fd5b5035919050565b60005b83811015615ad8578181015183820152602001615ac0565b83811115610d4c5750506000910152565b8281526040602082015260008251806040840152615b0e816060850160208701615abd565b601f01601f1916919091016060019392505050565b81516060820190615b3381615a08565b808352506020830151151560208301526040830151604083015292915050565b600061030082840312156159a157600080fd5b60008183036102a0811215615b7a57600080fd5b615b8261566e565b8335815261028080601f1984011215615b9a57600080fd5b615ba26155dc565b9250615bac615691565b60208601358152615bbf60408701615892565b6020820152615bd1876060880161581c565b6040820152610120808701356060830152610140808801356080840152615bfc896101608a016157c5565b60a084015261020088013560c084015261022088013560e0840152615c246102408901615892565b61010084015261026088013582840152615c4089858a0161577d565b908301525083525060208101919091529392505050565b80151581146147ea57600080fd5b600060408284031215615c7757600080fd5b615c7f61566e565b823581526020830135615c9181615c57565b60208201529392505050565b80516112eb81615c57565b600060208284031215615cba57600080fd5b815161404381615c57565b60008183036040811215615cd857600080fd5b615ce061566e565b8335815291506020601f1982011215615cf857600080fd5b50615d016155dc565b6020830135615d0f81615c57565b8152602082015292915050565b600060408284031215615d2e57600080fd5b6140438383615cc5565b60008183036040811215615d4b57600080fd5b615d5361566e565b833581526020601f1983011215615d6957600080fd5b615d716155dc565b9150615d7b6155dc565b602094850135815282529283015250919050565b600181811c90821680615da357607f821691505b602082108114156159a157634e487b7160e01b600052602260045260246000fd5b600060408284031215615dd657600080fd5b615dde61566e565b9050813581526020820135602082015292915050565b6000818303610300811215615e0857600080fd5b615e1061566e565b833581526102e0601f1983011215615e2757600080fd5b615e2f6155dc565b615e3761564b565b602086013560038110615e4957600080fd5b8152615e588760408801615dc4565b6020820152610240607f1985011215615e7057600080fd5b615e786155dc565b9350615e87876080880161589d565b8452836040820152615e9d876102c08801615dc4565b606082015281526020820152949350505050565b80516112eb8161587d565b600082601f830112615ecd57600080fd5b615ed56155dc565b80606080850186811115615ee857600080fd5b855b81811015615f3957828189031215615f025760008081fd5b615f0a6156b5565b8151815260208083015181830152604080840151615f2781615c57565b90830152908652909401938201615eea565b50919695505050505050565b600060c08284031215615f5757600080fd5b615f5f61564b565b8251615f6a8161587d565b81526020830151615f7a8161587d565b6020820152615f8c8460408501615ebc565b604082015260a09290920151606083015250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526bffffffffffffffffffffffff1960a08201511660a08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b6001600160a01b038381168252825160208084019190915283015151805161032084019291906003811061608c5761608c6159f2565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526bffffffffffffffffffffffff196020820151511660c086015260408101516160e160e0870182615fa3565b5060608101516160f5610180870182615fe0565b508260808201511661024086015260a0810151925050616119610260850183616029565b6060015180516102e0850152602081015161030085015290505b509392505050565b86815285516001600160601b031916602082015261024081016161616040830187615fa3565b61616e60e0830186615fe0565b6001600160a01b0384166101a083015261497f6101c0830184616029565b600060c0828403121561619e57600080fd5b6161a661564b565b82516161b18161587d565b815260208301516161c18161587d565b6020820152604083810151908201526161dd8460608501615ebc565b60608201529392505050565b80518252602081015161620760208401826001600160a01b03169052565b50604081015161621a6040840182615fe0565b506060810151610100818185015260808301519150610120828186015260a0840151925061014061624d81870185615fa3565b60c08501516101e087015260e0850151610200870152918401516001600160a01b031661022086015283015161024085015282015180516001600160601b0319166102608501529050505050565b60006102c08201905060018060a01b03841682528251602083015260208301516161336040840182516161e9565b91516001600160601b0319168252602082015260400190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561630b5761630b6162e2565b500190565b8060005b6001811015610d4c578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101616314565b81516001600160a01b0390811682526020808401519091169082015260408083015161038083019161638290840182616310565b50606083015161639560a08401826161e9565b50608083015161032083015260a083015161034083015260c0909201516103609091015290565b600060c082840312156163ce57600080fd5b6163d661564b565b82516163e18161587d565b815260208301516163f181615c57565b602082015260408301516164048161587d565b60408201526161dd8460608501615ebc565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160c083019161649190840182616310565b5092915050565b600061016082840312156164ab57600080fd5b6164b36156d8565b90506164be82615eb1565b81526164cc60208301615eb1565b60208201526040820151604082015260608201516060820152608082015160808201526164fb60a08301615eb1565b60a082015260c082015160c08201526165178360e08401615ebc565b60e082015261014082015161010082015292915050565b6000610160828403121561654157600080fd5b6140438383616498565b6001600160a01b038316815260608101614043602083018480518252602090810151511515910152565b600081600019048311821515161561658f5761658f6162e2565b500290565b6000826165b157634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156165c8576165c86162e2565b500390565b600061012082840312156165e057600080fd5b6165e86156fc565b82516165f38161587d565b815260208301516166038161587d565b60208201526040838101519082015260608301516166208161587d565b60608201526080838101519082015261663c8460a08501615ebc565b60a0820152610100929092015160c083015250919050565b6000610120828403121561666757600080fd5b61666f6156fc565b825161667a8161587d565b8152602083015161668a8161587d565b80602083015250604083015160408201526060830151606082015260808301516166b38161587d565b608082015261663c8460a08501615ebc565b600060c082840312156166d757600080fd5b6166df615628565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015161587281615767565b600060a0828403121561672d57600080fd5b616735615605565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151615811816157ac565b60006020828403121561677957600080fd5b6167816155dc565b905081516157a481615767565b600061028082840312156167a157600080fd5b6167a9615691565b9050815181526167bb60208301615eb1565b60208201526167cd83604084016166c5565b60408201526101008083015160608301526101208084015160808401526101406167f98682870161671b565b60a08501526101e085015160c085015261020085015160e08501526168216102208601615eb1565b838501526102408501518285015261683d866102608701616767565b8185015250505092915050565b6000610460828403121561685d57600080fd5b61686561571f565b61686e83615eb1565b815261687c60208401615eb1565b602082015261688e846040850161678e565b60408201526102c083015160608201526102e0830151608082015261030083015160a08201526168c16103208401615eb1565b60c08201526168d36103408401615c9d565b60e08201526103608301516101008201526103808301516101208201526168fd6103a08401615eb1565b6101408201526103c083015161016082015261691d846103e08501615ebc565b61018082015261044092909201516101a083015250919050565b6000610380828403121561694a57600080fd5b6169526156fc565b825161695d8161587d565b8152602083015161696d8161587d565b602082015261697f8460408501615ebc565b60408201526169918460a0850161678e565b6060820152610320830151608082015261034083015160a08201526103609092015160c083015250919050565b600061018082840312156169d157600080fd5b6169d9615743565b90506169e482615eb1565b81526169f260208301615eb1565b60208201526040820151604082015260608201516060820152616a1760808301615eb1565b608082015260a082015160a082015260c082015160c0820152616a3c60e08301615eb1565b60e0820152610100616a5084828501615ebc565b818301525061016082015161012082015292915050565b60006101808284031215616a7a57600080fd5b61404383836169be565b80516001600160a01b031682526020810151616aab60208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c0810151616aee60c08401826001600160a01b03169052565b5060e0810151616b0160e0840182616310565b50610100810151610140830152610120015161016090910152565b61018081016105998284616a84565b60006101808284031215616b3e57600080fd5b616b46615743565b9050616b5182615eb1565b8152616b5f60208301615eb1565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a0820152616b9860c08301615eb1565b60c0820152616baa8360e08401615ebc565b60e082015261014082015161010082015261016082015161012082015292915050565b60006101808284031215616be057600080fd5b6140438383616b2b565b81516001600160a01b0390811682526020808401519091169082015260408083015160c0830191616c1d90840182616310565b50606083015160a083015292915050565b6000600019821415616c4257616c426162e2565b5060010190565b60018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a0810151616c9b60a08401826001600160a01b03169052565b5060c081015160c083015260e0810151616cb860e0840182616310565b5061010001516101409190910152565b61016081016105998284616c49565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152806060850151166060840152506080830151608083015260a0830151616d2c60a0840182616310565b5060c083015161010083015292915050565b81516001600160a01b0316815261046081016020830151616d6a60208401826001600160a01b03169052565b506040830151616d7d60408401826161e9565b5060608301516102c083015260808301516102e083015260a083015161030083015260c08301516001600160a01b0390811661032084015260e08401511515610340840152610100840151610360840152610120840151610380840152610140840151166103a08301526101608301516103c0830152610180830151616e076103e0840182616310565b506101a083015161044083015292915050565b80516001600160a01b031682526020810151616e4160208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151616e7060808401826001600160a01b03169052565b5060a081015160a083015260c081015160c083015260e0810151616e9f60e08401826001600160a01b03169052565b5061010080820151616eb382850182616310565b505061012001516101609190910152565b61018081016105998284616e1a565b60006101208201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a0830151616d2c60a0840182616310565b60008251616f3a818460208701615abd565b919091019291505056fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220ced9edfe00129bdd44802374ae3221f18fd69923e2234ddca95d21579528087d64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212208f3716d95fca8c02057fc1d75046539429f19cb10fe81a32e07e6a2c3467c61064736f6c634300080c0033`,
  BytecodeLen: 35442,
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
    at: './index.rsh:164:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:171:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:173:60:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:194:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:201:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:203:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:226:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:228:58:after expr stmt semicolon',
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
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:248:37:after expr stmt semicolon',
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
