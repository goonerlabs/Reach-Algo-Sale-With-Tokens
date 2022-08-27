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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Object({
    description: ctc5,
    hardCap: ctc0,
    id: ctc0,
    link: ctc6,
    maxContribution: ctc0,
    minContribution: ctc0,
    owner: ctc4,
    privateSaleAmt: ctc0,
    softCap: ctc0,
    title: ctc7,
    tokenName: ctc8,
    tokenSymbol: ctc9,
    tokenid: ctc0
    });
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Data({
    None: ctc13,
    Some: ctc4
    });
  const ctc15 = stdlib.T_Data({
    None: ctc13,
    Some: ctc0
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
      1: [ctc3, ctc4],
      2: [ctc4, ctc1, ctc10, ctc11, ctc0, ctc12, ctc3],
      3: [ctc4, ctc10, ctc11, ctc0, ctc12, ctc0, ctc3, ctc0],
      5: [ctc4, ctc0, ctc12, ctc0, ctc4, ctc0, ctc0, ctc4, ctc3, ctc0],
      6: [ctc4, ctc0, ctc12, ctc0, ctc0, ctc0, ctc4, ctc3, ctc0, ctc0],
      10: [ctc4, ctc0, ctc12, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0],
      11: [ctc4, ctc0, ctc12, ctc0, ctc4, ctc0, ctc0, ctc4, ctc3, ctc0],
      12: [ctc4, ctc0, ctc12, ctc0, ctc0, ctc0, ctc4, ctc3, ctc0, ctc0],
      16: [ctc4, ctc0, ctc12, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0],
      17: [ctc4, ctc0, ctc12, ctc0, ctc4, ctc3, ctc0],
      21: [ctc4, ctc0, ctc12, ctc4, ctc0, ctc3, ctc0],
      22: [ctc4, ctc10, ctc0, ctc12, ctc0, ctc0, ctc4, ctc1, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0],
      27: [ctc4, ctc12, ctc3, ctc0]
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
  
  
  const [v1245, v1258, v1265, v1340, v1848, v1855, v1856] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc1, ctc3, ctc6, ctc1, ctc3, ctc9, ctc3]);
  const v1864 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:15:application call to [unknown function] (defined at: ./index.rsh:221:15:function exp)', 'at ./index.rsh:221:15:application call to [unknown function] (defined at: ./index.rsh:221:15:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1258, v1265, v1340, v1848, v1855, v1856, v1864],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1868], secs: v1870, time: v1869, didSend: v697, from: v1867 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1873 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1867), null);
      let v1874;
      switch (v1873[0]) {
        case 'None': {
          const v1875 = v1873[1];
          v1874 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1876 = v1873[1];
          v1874 = v1876;
          
          break;
          }
        }
      const v1877 = stdlib.ge(v1856, v1874);
      const v1878 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1867), null);
      let v1879;
      switch (v1878[0]) {
        case 'None': {
          const v1880 = v1878[1];
          v1879 = false;
          
          break;
          }
        case 'Some': {
          const v1881 = v1878[1];
          v1879 = true;
          
          break;
          }
        }
      const v1882 = v1877 ? v1879 : false;
      if (v1882) {
        let v1884;
        switch (v1873[0]) {
          case 'None': {
            const v1885 = v1873[1];
            v1884 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1886 = v1873[1];
            v1884 = v1886;
            
            break;
            }
          }
        const v1887 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1867), null);
        let v1888;
        switch (v1887[0]) {
          case 'None': {
            const v1889 = v1887[1];
            v1888 = v1340;
            
            break;
            }
          case 'Some': {
            const v1890 = v1887[1];
            v1888 = v1890;
            
            break;
            }
          }
        const v1894 = stdlib.sub(v1856, v1884);
        sim_r.txns.push({
          kind: 'from',
          to: v1888,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1867, undefined /* Nothing */);
        const v1897 = 'refundPassed        ';
        null;
        const v1898 = true;
        const v1899 = await txn1.getOutput('Contributors_claimRefund', 'v1898', ctc7, v1898);
        
        const v1904 = stdlib.sub(v1848, stdlib.checkedBigNumberify('./index.rsh:228:34:decimal', stdlib.UInt_max, '1'));
        const v3367 = v1904;
        const v3369 = v1855;
        const v3370 = v1894;
        const v3371 = stdlib.gt(v1904, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
        const v3372 = stdlib.gt(v1894, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
        const v3373 = v3371 ? v3372 : false;
        if (v3373) {
          sim_r.isHalt = false;
          }
        else {
          const v3374 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v3375 = v3374[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v3376 = stdlib.sub(v1894, v3375);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3377 = v3374[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3378 = stdlib.sub(v3375, v3377);
          const v3379 = v3374[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3380 = [v3378, v3377, v3379];
          const v3381 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3380);
          const v3382 = v3381[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3383 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3384 = stdlib.sub(v3383, v3377);
          const v3385 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3386 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3387 = [v3385, v3384, v3386];
          const v3388 = stdlib.Array_set(v3381, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3387);
          stdlib.simTokenBurn(sim_r, v1265, v3377);
          const v3389 = v3388[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3390 = v3389[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3390) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1911 = 'refundFailed        ';
        null;
        const v1912 = false;
        const v1913 = await txn1.getOutput('Contributors_claimRefund', 'v1912', ctc7, v1912);
        
        const v3392 = v1848;
        const v3394 = v1855;
        const v3395 = v1856;
        const v3396 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
        const v3397 = stdlib.gt(v1856, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
        const v3398 = v3396 ? v3397 : false;
        if (v3398) {
          sim_r.isHalt = false;
          }
        else {
          const v3399 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v3400 = v3399[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v3401 = stdlib.sub(v1856, v3400);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3402 = v3399[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3403 = stdlib.sub(v3400, v3402);
          const v3404 = v3399[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3405 = [v3403, v3402, v3404];
          const v3406 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3405);
          const v3407 = v3406[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3408 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3409 = stdlib.sub(v3408, v3402);
          const v3410 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3411 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3412 = [v3410, v3409, v3411];
          const v3413 = stdlib.Array_set(v3406, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3412);
          stdlib.simTokenBurn(sim_r, v1265, v3402);
          const v3414 = v3413[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3415 = v3414[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3415) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
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
  const {data: [v1868], secs: v1870, time: v1869, didSend: v697, from: v1867 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1873 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1867), null);
  let v1874;
  switch (v1873[0]) {
    case 'None': {
      const v1875 = v1873[1];
      v1874 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1876 = v1873[1];
      v1874 = v1876;
      
      break;
      }
    }
  const v1877 = stdlib.ge(v1856, v1874);
  const v1878 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1867), null);
  let v1879;
  switch (v1878[0]) {
    case 'None': {
      const v1880 = v1878[1];
      v1879 = false;
      
      break;
      }
    case 'Some': {
      const v1881 = v1878[1];
      v1879 = true;
      
      break;
      }
    }
  const v1882 = v1877 ? v1879 : false;
  if (v1882) {
    let v1884;
    switch (v1873[0]) {
      case 'None': {
        const v1885 = v1873[1];
        v1884 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1886 = v1873[1];
        v1884 = v1886;
        
        break;
        }
      }
    const v1887 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1867), null);
    let v1888;
    switch (v1887[0]) {
      case 'None': {
        const v1889 = v1887[1];
        v1888 = v1340;
        
        break;
        }
      case 'Some': {
        const v1890 = v1887[1];
        v1888 = v1890;
        
        break;
        }
      }
    const v1894 = stdlib.sub(v1856, v1884);
    ;
    await stdlib.mapSet(map2, v1867, undefined /* Nothing */);
    const v1897 = 'refundPassed        ';
    null;
    const v1898 = true;
    const v1899 = await txn1.getOutput('Contributors_claimRefund', 'v1898', ctc7, v1898);
    if (v697) {
      stdlib.protect(ctc0, await interact.out(v1868, v1899), {
        at: './index.rsh:221:16:application',
        fs: ['at ./index.rsh:221:16:application call to [unknown function] (defined at: ./index.rsh:221:16:function exp)', 'at ./index.rsh:227:21:application call to "notify" (defined at: ./index.rsh:221:42:function exp)', 'at ./index.rsh:221:42:application call to [unknown function] (defined at: ./index.rsh:221:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v1904 = stdlib.sub(v1848, stdlib.checkedBigNumberify('./index.rsh:228:34:decimal', stdlib.UInt_max, '1'));
    const v3367 = v1904;
    const v3369 = v1855;
    const v3370 = v1894;
    const v3371 = stdlib.gt(v1904, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
    const v3372 = stdlib.gt(v1894, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
    const v3373 = v3371 ? v3372 : false;
    if (v3373) {
      return;
      }
    else {
      const v3374 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
      const v3375 = v3374[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
      const v3376 = stdlib.sub(v1894, v3375);
      ;
      ;
      const v3377 = v3374[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3378 = stdlib.sub(v3375, v3377);
      const v3379 = v3374[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3380 = [v3378, v3377, v3379];
      const v3381 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3380);
      const v3382 = v3381[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3383 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3384 = stdlib.sub(v3383, v3377);
      const v3385 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3386 = v3382[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3387 = [v3385, v3384, v3386];
      const v3388 = stdlib.Array_set(v3381, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3387);
      undefined /* TokenBurn */;
      const v3389 = v3388[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3390 = v3389[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3390) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1911 = 'refundFailed        ';
    null;
    const v1912 = false;
    const v1913 = await txn1.getOutput('Contributors_claimRefund', 'v1912', ctc7, v1912);
    if (v697) {
      stdlib.protect(ctc0, await interact.out(v1868, v1913), {
        at: './index.rsh:221:16:application',
        fs: ['at ./index.rsh:221:16:application call to [unknown function] (defined at: ./index.rsh:221:16:function exp)', 'at ./index.rsh:231:21:application call to "notify" (defined at: ./index.rsh:221:42:function exp)', 'at ./index.rsh:221:42:application call to [unknown function] (defined at: ./index.rsh:221:42:function exp)'],
        msg: 'out',
        who: 'Contributors_claimRefund'
        });
      }
    else {
      }
    
    const v3392 = v1848;
    const v3394 = v1855;
    const v3395 = v1856;
    const v3396 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
    const v3397 = stdlib.gt(v1856, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
    const v3398 = v3396 ? v3397 : false;
    if (v3398) {
      return;
      }
    else {
      const v3399 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
      const v3400 = v3399[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
      const v3401 = stdlib.sub(v1856, v3400);
      ;
      ;
      const v3402 = v3399[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3403 = stdlib.sub(v3400, v3402);
      const v3404 = v3399[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3405 = [v3403, v3402, v3404];
      const v3406 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3405);
      const v3407 = v3406[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3408 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3409 = stdlib.sub(v3408, v3402);
      const v3410 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3411 = v3407[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3412 = [v3410, v3409, v3411];
      const v3413 = stdlib.Array_set(v3406, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3412);
      undefined /* TokenBurn */;
      const v3414 = v3413[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3415 = v3414[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3415) {
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
  
  
  const [v1245, v1258, v1265, v1321, v1338, v1340, v1508, v1515, v1516] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1525 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)', 'at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1258, v1265, v1321, v1338, v1340, v1508, v1515, v1516, v1525],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:166:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1529], secs: v1531, time: v1530, didSend: v446, from: v1528 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1534 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1528), null);
      let v1535;
      switch (v1534[0]) {
        case 'None': {
          const v1536 = v1534[1];
          v1535 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1537 = v1534[1];
          v1535 = v1537;
          
          break;
          }
        }
      const v1538 = stdlib.ge(v1516, v1535);
      const v1539 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1528), null);
      let v1540;
      switch (v1539[0]) {
        case 'None': {
          const v1541 = v1539[1];
          v1540 = false;
          
          break;
          }
        case 'Some': {
          const v1542 = v1539[1];
          v1540 = true;
          
          break;
          }
        }
      const v1543 = v1538 ? v1540 : false;
      if (v1543) {
        const v1544 = v1515[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
        const v1545 = v1544[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
        const v1546 = stdlib.mul(v1545, v1338);
        const v1548 = stdlib.div(v1546, v1321);
        let v1550;
        switch (v1534[0]) {
          case 'None': {
            const v1551 = v1534[1];
            v1550 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1552 = v1534[1];
            v1550 = v1552;
            
            break;
            }
          }
        const v1553 = stdlib.mul(v1548, v1550);
        const v1554 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1528), null);
        let v1555;
        switch (v1554[0]) {
          case 'None': {
            const v1556 = v1554[1];
            v1555 = v1340;
            
            break;
            }
          case 'Some': {
            const v1557 = v1554[1];
            v1555 = v1557;
            
            break;
            }
          }
        const v1561 = stdlib.sub(v1516, v1553);
        sim_r.txns.push({
          kind: 'from',
          to: v1555,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1528, undefined /* Nothing */);
        const v1564 = 'claimPassed         ';
        null;
        const v1565 = true;
        const v1566 = await txn1.getOutput('Contributors_claimToken', 'v1565', ctc7, v1565);
        
        const v1571 = stdlib.sub(v1508, stdlib.checkedBigNumberify('./index.rsh:173:35:decimal', stdlib.UInt_max, '1'));
        const v3417 = v1545;
        const v3419 = v1515;
        const v3420 = v1561;
        const v3421 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
        const v3422 = stdlib.gt(v1571, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
        const v3423 = v3421 ? v3422 : false;
        if (v3423) {
          sim_r.isHalt = false;
          }
        else {
          const v3426 = stdlib.sub(v1561, v1545);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3427 = v1544[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3428 = stdlib.sub(v1545, v3427);
          const v3429 = v1544[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3430 = [v3428, v3427, v3429];
          const v3431 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3430);
          const v3432 = v3431[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3433 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3434 = stdlib.sub(v3433, v3427);
          const v3435 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3436 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3437 = [v3435, v3434, v3436];
          const v3438 = stdlib.Array_set(v3431, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3437);
          stdlib.simTokenBurn(sim_r, v1265, v3427);
          const v3439 = v3438[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3440 = v3439[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3440) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1579 = 'claimFailed         ';
        null;
        const v1580 = false;
        const v1581 = await txn1.getOutput('Contributors_claimToken', 'v1580', ctc7, v1580);
        
        const v1586 = v1515[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
        const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
        const v3442 = v1587;
        const v3444 = v1515;
        const v3445 = v1516;
        const v3446 = stdlib.gt(v1587, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
        const v3447 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
        const v3448 = v3446 ? v3447 : false;
        if (v3448) {
          sim_r.isHalt = false;
          }
        else {
          const v3451 = stdlib.sub(v1516, v1587);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3452 = v1586[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3453 = stdlib.sub(v1587, v3452);
          const v3454 = v1586[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3455 = [v3453, v3452, v3454];
          const v3456 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3455);
          const v3457 = v3456[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3459 = stdlib.sub(v3458, v3452);
          const v3460 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3461 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3462 = [v3460, v3459, v3461];
          const v3463 = stdlib.Array_set(v3456, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3462);
          stdlib.simTokenBurn(sim_r, v1265, v3452);
          const v3464 = v3463[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3465 = v3464[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3465) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
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
  const {data: [v1529], secs: v1531, time: v1530, didSend: v446, from: v1528 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1534 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1528), null);
  let v1535;
  switch (v1534[0]) {
    case 'None': {
      const v1536 = v1534[1];
      v1535 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1537 = v1534[1];
      v1535 = v1537;
      
      break;
      }
    }
  const v1538 = stdlib.ge(v1516, v1535);
  const v1539 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1528), null);
  let v1540;
  switch (v1539[0]) {
    case 'None': {
      const v1541 = v1539[1];
      v1540 = false;
      
      break;
      }
    case 'Some': {
      const v1542 = v1539[1];
      v1540 = true;
      
      break;
      }
    }
  const v1543 = v1538 ? v1540 : false;
  if (v1543) {
    const v1544 = v1515[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
    const v1545 = v1544[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
    const v1546 = stdlib.mul(v1545, v1338);
    const v1548 = stdlib.div(v1546, v1321);
    let v1550;
    switch (v1534[0]) {
      case 'None': {
        const v1551 = v1534[1];
        v1550 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1552 = v1534[1];
        v1550 = v1552;
        
        break;
        }
      }
    const v1553 = stdlib.mul(v1548, v1550);
    const v1554 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1528), null);
    let v1555;
    switch (v1554[0]) {
      case 'None': {
        const v1556 = v1554[1];
        v1555 = v1340;
        
        break;
        }
      case 'Some': {
        const v1557 = v1554[1];
        v1555 = v1557;
        
        break;
        }
      }
    const v1561 = stdlib.sub(v1516, v1553);
    ;
    await stdlib.mapSet(map2, v1528, undefined /* Nothing */);
    const v1564 = 'claimPassed         ';
    null;
    const v1565 = true;
    const v1566 = await txn1.getOutput('Contributors_claimToken', 'v1565', ctc7, v1565);
    if (v446) {
      stdlib.protect(ctc0, await interact.out(v1529, v1566), {
        at: './index.rsh:166:14:application',
        fs: ['at ./index.rsh:166:14:application call to [unknown function] (defined at: ./index.rsh:166:14:function exp)', 'at ./index.rsh:172:19:application call to "notify" (defined at: ./index.rsh:166:39:function exp)', 'at ./index.rsh:166:39:application call to [unknown function] (defined at: ./index.rsh:166:39:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1571 = stdlib.sub(v1508, stdlib.checkedBigNumberify('./index.rsh:173:35:decimal', stdlib.UInt_max, '1'));
    const v3417 = v1545;
    const v3419 = v1515;
    const v3420 = v1561;
    const v3421 = stdlib.gt(v1545, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
    const v3422 = stdlib.gt(v1571, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
    const v3423 = v3421 ? v3422 : false;
    if (v3423) {
      return;
      }
    else {
      const v3426 = stdlib.sub(v1561, v1545);
      ;
      ;
      const v3427 = v1544[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3428 = stdlib.sub(v1545, v3427);
      const v3429 = v1544[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3430 = [v3428, v3427, v3429];
      const v3431 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3430);
      const v3432 = v3431[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3433 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3434 = stdlib.sub(v3433, v3427);
      const v3435 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3436 = v3432[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3437 = [v3435, v3434, v3436];
      const v3438 = stdlib.Array_set(v3431, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3437);
      undefined /* TokenBurn */;
      const v3439 = v3438[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3440 = v3439[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3440) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1579 = 'claimFailed         ';
    null;
    const v1580 = false;
    const v1581 = await txn1.getOutput('Contributors_claimToken', 'v1580', ctc7, v1580);
    if (v446) {
      stdlib.protect(ctc0, await interact.out(v1529, v1581), {
        at: './index.rsh:166:14:application',
        fs: ['at ./index.rsh:166:14:application call to [unknown function] (defined at: ./index.rsh:166:14:function exp)', 'at ./index.rsh:176:19:application call to "notify" (defined at: ./index.rsh:166:39:function exp)', 'at ./index.rsh:166:39:application call to [unknown function] (defined at: ./index.rsh:166:39:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1586 = v1515[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
    const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
    const v3442 = v1587;
    const v3444 = v1515;
    const v3445 = v1516;
    const v3446 = stdlib.gt(v1587, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
    const v3447 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
    const v3448 = v3446 ? v3447 : false;
    if (v3448) {
      return;
      }
    else {
      const v3451 = stdlib.sub(v1516, v1587);
      ;
      ;
      const v3452 = v1586[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3453 = stdlib.sub(v1587, v3452);
      const v3454 = v1586[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3455 = [v3453, v3452, v3454];
      const v3456 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3455);
      const v3457 = v3456[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3459 = stdlib.sub(v3458, v3452);
      const v3460 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3461 = v3457[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3462 = [v3460, v3459, v3461];
      const v3463 = stdlib.Array_set(v3456, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3462);
      undefined /* TokenBurn */;
      const v3464 = v3463[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3465 = v3464[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3465) {
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
  
  
  const [v1245, v1258, v1265, v1321, v1338, v1340, v1691, v1698, v1699] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc1, ctc3, ctc6, ctc3, ctc3, ctc1, ctc3, ctc9, ctc3]);
  const v1708 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:15:application call to [unknown function] (defined at: ./index.rsh:196:15:function exp)', 'at ./index.rsh:196:15:application call to [unknown function] (defined at: ./index.rsh:196:15:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1258, v1265, v1321, v1338, v1340, v1691, v1698, v1699, v1708],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:196:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1712], secs: v1714, time: v1713, didSend: v584, from: v1711 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1717 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1711), null);
      let v1718;
      switch (v1717[0]) {
        case 'None': {
          const v1719 = v1717[1];
          v1718 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1720 = v1717[1];
          v1718 = v1720;
          
          break;
          }
        }
      const v1721 = stdlib.ge(v1699, v1718);
      const v1722 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1711), null);
      let v1723;
      switch (v1722[0]) {
        case 'None': {
          const v1724 = v1722[1];
          v1723 = false;
          
          break;
          }
        case 'Some': {
          const v1725 = v1722[1];
          v1723 = true;
          
          break;
          }
        }
      const v1726 = v1721 ? v1723 : false;
      if (v1726) {
        const v1727 = v1698[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
        const v1728 = v1727[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
        const v1729 = stdlib.mul(v1728, v1338);
        const v1731 = stdlib.div(v1729, v1321);
        let v1733;
        switch (v1717[0]) {
          case 'None': {
            const v1734 = v1717[1];
            v1733 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1735 = v1717[1];
            v1733 = v1735;
            
            break;
            }
          }
        const v1736 = stdlib.mul(v1731, v1733);
        const v1737 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1711), null);
        let v1738;
        switch (v1737[0]) {
          case 'None': {
            const v1739 = v1737[1];
            v1738 = v1340;
            
            break;
            }
          case 'Some': {
            const v1740 = v1737[1];
            v1738 = v1740;
            
            break;
            }
          }
        const v1744 = stdlib.sub(v1699, v1736);
        sim_r.txns.push({
          kind: 'from',
          to: v1738,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1711, undefined /* Nothing */);
        const v1747 = 'claimPassed         ';
        null;
        const v1748 = true;
        const v1749 = await txn1.getOutput('Contributors_claimToken', 'v1748', ctc7, v1748);
        
        const v1756 = stdlib.sub(v1691, stdlib.checkedBigNumberify('./index.rsh:203:52:decimal', stdlib.UInt_max, '1'));
        const v3467 = v1756;
        const v3469 = v1698;
        const v3470 = v1744;
        const v3471 = stdlib.gt(v1756, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
        const v3472 = stdlib.gt(v1728, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
        const v3473 = v3471 ? v3472 : false;
        if (v3473) {
          sim_r.isHalt = false;
          }
        else {
          const v3476 = stdlib.sub(v1744, v1728);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3477 = v1727[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3478 = stdlib.sub(v1728, v3477);
          const v3479 = v1727[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3480 = [v3478, v3477, v3479];
          const v3481 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3480);
          const v3482 = v3481[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3484 = stdlib.sub(v3483, v3477);
          const v3485 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3486 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3487 = [v3485, v3484, v3486];
          const v3488 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3487);
          stdlib.simTokenBurn(sim_r, v1265, v3477);
          const v3489 = v3488[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3490 = v3489[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3490) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1762 = 'claimFailed         ';
        null;
        const v1763 = false;
        const v1764 = await txn1.getOutput('Contributors_claimToken', 'v1763', ctc7, v1763);
        
        const v1769 = v1698[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
        const v1770 = v1769[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
        const v3492 = v1691;
        const v3494 = v1698;
        const v3495 = v1699;
        const v3496 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
        const v3497 = stdlib.gt(v1770, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
        const v3498 = v3496 ? v3497 : false;
        if (v3498) {
          sim_r.isHalt = false;
          }
        else {
          const v3501 = stdlib.sub(v1699, v1770);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v3502 = v1769[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v3503 = stdlib.sub(v1770, v3502);
          const v3504 = v1769[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3505 = [v3503, v3502, v3504];
          const v3506 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3505);
          const v3507 = v3506[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3508 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v3509 = stdlib.sub(v3508, v3502);
          const v3510 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v3511 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v3512 = [v3510, v3509, v3511];
          const v3513 = stdlib.Array_set(v3506, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3512);
          stdlib.simTokenBurn(sim_r, v1265, v3502);
          const v3514 = v3513[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v3515 = v3514[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v3515) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
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
  const {data: [v1712], secs: v1714, time: v1713, didSend: v584, from: v1711 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1717 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1711), null);
  let v1718;
  switch (v1717[0]) {
    case 'None': {
      const v1719 = v1717[1];
      v1718 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1720 = v1717[1];
      v1718 = v1720;
      
      break;
      }
    }
  const v1721 = stdlib.ge(v1699, v1718);
  const v1722 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1711), null);
  let v1723;
  switch (v1722[0]) {
    case 'None': {
      const v1724 = v1722[1];
      v1723 = false;
      
      break;
      }
    case 'Some': {
      const v1725 = v1722[1];
      v1723 = true;
      
      break;
      }
    }
  const v1726 = v1721 ? v1723 : false;
  if (v1726) {
    const v1727 = v1698[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
    const v1728 = v1727[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
    const v1729 = stdlib.mul(v1728, v1338);
    const v1731 = stdlib.div(v1729, v1321);
    let v1733;
    switch (v1717[0]) {
      case 'None': {
        const v1734 = v1717[1];
        v1733 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1735 = v1717[1];
        v1733 = v1735;
        
        break;
        }
      }
    const v1736 = stdlib.mul(v1731, v1733);
    const v1737 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1711), null);
    let v1738;
    switch (v1737[0]) {
      case 'None': {
        const v1739 = v1737[1];
        v1738 = v1340;
        
        break;
        }
      case 'Some': {
        const v1740 = v1737[1];
        v1738 = v1740;
        
        break;
        }
      }
    const v1744 = stdlib.sub(v1699, v1736);
    ;
    await stdlib.mapSet(map2, v1711, undefined /* Nothing */);
    const v1747 = 'claimPassed         ';
    null;
    const v1748 = true;
    const v1749 = await txn1.getOutput('Contributors_claimToken', 'v1748', ctc7, v1748);
    if (v584) {
      stdlib.protect(ctc0, await interact.out(v1712, v1749), {
        at: './index.rsh:196:16:application',
        fs: ['at ./index.rsh:196:16:application call to [unknown function] (defined at: ./index.rsh:196:16:function exp)', 'at ./index.rsh:202:21:application call to "notify" (defined at: ./index.rsh:196:41:function exp)', 'at ./index.rsh:196:41:application call to [unknown function] (defined at: ./index.rsh:196:41:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1756 = stdlib.sub(v1691, stdlib.checkedBigNumberify('./index.rsh:203:52:decimal', stdlib.UInt_max, '1'));
    const v3467 = v1756;
    const v3469 = v1698;
    const v3470 = v1744;
    const v3471 = stdlib.gt(v1756, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
    const v3472 = stdlib.gt(v1728, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
    const v3473 = v3471 ? v3472 : false;
    if (v3473) {
      return;
      }
    else {
      const v3476 = stdlib.sub(v1744, v1728);
      ;
      ;
      const v3477 = v1727[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3478 = stdlib.sub(v1728, v3477);
      const v3479 = v1727[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3480 = [v3478, v3477, v3479];
      const v3481 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3480);
      const v3482 = v3481[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3484 = stdlib.sub(v3483, v3477);
      const v3485 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3486 = v3482[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3487 = [v3485, v3484, v3486];
      const v3488 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3487);
      undefined /* TokenBurn */;
      const v3489 = v3488[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3490 = v3489[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3490) {
        return;
        }
      else {
        undefined /* TokenDestroy */;
        return;
        }}}
  else {
    const v1762 = 'claimFailed         ';
    null;
    const v1763 = false;
    const v1764 = await txn1.getOutput('Contributors_claimToken', 'v1763', ctc7, v1763);
    if (v584) {
      stdlib.protect(ctc0, await interact.out(v1712, v1764), {
        at: './index.rsh:196:16:application',
        fs: ['at ./index.rsh:196:16:application call to [unknown function] (defined at: ./index.rsh:196:16:function exp)', 'at ./index.rsh:206:21:application call to "notify" (defined at: ./index.rsh:196:41:function exp)', 'at ./index.rsh:196:41:application call to [unknown function] (defined at: ./index.rsh:196:41:function exp)'],
        msg: 'out',
        who: 'Contributors_claimToken'
        });
      }
    else {
      }
    
    const v1769 = v1698[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
    const v1770 = v1769[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
    const v3492 = v1691;
    const v3494 = v1698;
    const v3495 = v1699;
    const v3496 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
    const v3497 = stdlib.gt(v1770, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
    const v3498 = v3496 ? v3497 : false;
    if (v3498) {
      return;
      }
    else {
      const v3501 = stdlib.sub(v1699, v1770);
      ;
      ;
      const v3502 = v1769[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
      const v3503 = stdlib.sub(v1770, v3502);
      const v3504 = v1769[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3505 = [v3503, v3502, v3504];
      const v3506 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3505);
      const v3507 = v3506[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3508 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
      const v3509 = stdlib.sub(v3508, v3502);
      const v3510 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
      const v3511 = v3507[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
      const v3512 = [v3510, v3509, v3511];
      const v3513 = stdlib.Array_set(v3506, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v3512);
      undefined /* TokenBurn */;
      const v3514 = v3513[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
      const v3515 = v3514[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
      if (v3515) {
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc11 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    privateSaleAmt: ctc3,
    softCap: ctc3,
    title: ctc8,
    tokenName: ctc9,
    tokenSymbol: ctc10,
    tokenid: ctc3
    });
  const ctc12 = stdlib.T_Token;
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc13]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc16 = stdlib.T_Tuple([ctc3]);
  
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
  
  
  const [v1245, v1253, v1258, v1265, v1314, v1321, v1327, v1337, v1338, v1339, v1340, v1341, v1347, v1348] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '22'), [ctc1, ctc11, ctc3, ctc12, ctc3, ctc3, ctc1, ctc13, ctc3, ctc3, ctc1, ctc3, ctc15, ctc3]);
  const v1360 = stdlib.protect(ctc16, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v1361 = v1360[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1363 = stdlib.gt(v1361, stdlib.checkedBigNumberify('./index.rsh:114:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1363, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1253, v1258, v1265, v1314, v1321, v1327, v1337, v1338, v1339, v1340, v1341, v1347, v1348, v1360],
    evt_cnt: 1,
    funcNum: 16,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v1361, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1372], secs: v1374, time: v1373, didSend: v260, from: v1371 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v1376 = v1372[stdlib.checkedBigNumberify('./index.rsh:113:14:spread', stdlib.UInt_max, '0')];
      const v1380 = stdlib.add(v1348, v1376);
      sim_r.txns.push({
        amt: v1376,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1385 = v1380;
      const v1386 = await txn1.getOutput('Contributors_contribute', 'v1385', ctc3, v1385);
      
      const v1392 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1371), null);
      let v1393;
      switch (v1392[0]) {
        case 'None': {
          const v1394 = v1392[1];
          v1393 = false;
          
          break;
          }
        case 'Some': {
          const v1395 = v1392[1];
          v1393 = true;
          
          break;
          }
        }
      if (v1393) {
        const v1396 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1371), null);
        let v1397;
        switch (v1396[0]) {
          case 'None': {
            const v1398 = v1396[1];
            v1397 = stdlib.checkedBigNumberify('./index.rsh:119:61:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1399 = v1396[1];
            v1397 = v1399;
            
            break;
            }
          }
        await stdlib.simMapSet(sim_r, 1, v1371, v1397);
        const v1400 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:122:31:decimal', stdlib.UInt_max, '1'));
        const v1401 = v1253.hardCap;
        const v1402 = stdlib.add(v1338, v1376);
        const v1403 = stdlib.ge(v1402, v1401);
        const v1404 = v1403 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1405 = stdlib.eq(v1404, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3516 = v1405;
        const v3517 = v1338;
        const v3518 = v1400;
        const v3519 = v1371;
        const v3520 = v1373;
        const v3522 = v1347;
        const v3523 = v1380;
        const v3524 = stdlib.le(v1341, v1314);
        const v3525 = v3524 ? v1405 : false;
        if (v3525) {
          sim_r.isHalt = false;
          }
        else {
          const v3527 = stdlib.ge(v1338, v1401);
          const v3528 = v3527 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v3529 = stdlib.eq(v3528, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v3529) {
            const v3530 = 'passed              ';
            null;
            const v3531 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
            const v3532 = stdlib.sub(v1380, v3531);
            sim_r.txns.push({
              kind: 'from',
              to: v1245,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v3610 = v1253.softCap;
            const v3611 = stdlib.ge(v1338, v3610);
            if (v3611) {
              const v3612 = 'passed              ';
              null;
              const v3613 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
              const v3614 = stdlib.sub(v1380, v3613);
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3692 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v1413 = v1253.maxContribution;
        const v1414 = stdlib.gt(v1376, v1413);
        if (v1414) {
          await stdlib.simMapSet(sim_r, 0, v1371, v1371);
          await stdlib.simMapSet(sim_r, 2, v1371, null);
          await stdlib.simMapSet(sim_r, 1, v1371, v1413);
          const v1418 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:129:33:decimal', stdlib.UInt_max, '1'));
          const v1419 = stdlib.add(v1338, v1413);
          const v1420 = v1253.hardCap;
          const v1421 = stdlib.add(v1338, v1376);
          const v1422 = stdlib.ge(v1421, v1420);
          const v1423 = v1422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v3753 = v1424;
          const v3754 = v1419;
          const v3755 = v1418;
          const v3756 = v1371;
          const v3757 = v1373;
          const v3759 = v1347;
          const v3760 = v1380;
          const v3761 = stdlib.le(v1341, v1314);
          const v3762 = v3761 ? v1424 : false;
          if (v3762) {
            sim_r.isHalt = false;
            }
          else {
            const v3764 = stdlib.ge(v1419, v1420);
            const v3765 = v3764 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v3766 = stdlib.eq(v3765, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v3766) {
              const v3767 = 'passed              ';
              null;
              const v3768 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
              const v3769 = stdlib.sub(v1380, v3768);
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v3847 = v1253.softCap;
              const v3848 = stdlib.ge(v1419, v3847);
              if (v3848) {
                const v3849 = 'passed              ';
                null;
                const v3850 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
                const v3851 = stdlib.sub(v1380, v3850);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v3929 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1432 = v1253.minContribution;
          const v1433 = stdlib.lt(v1376, v1432);
          if (v1433) {
            await stdlib.simMapSet(sim_r, 0, v1371, v1371);
            await stdlib.simMapSet(sim_r, 2, v1371, null);
            await stdlib.simMapSet(sim_r, 1, v1371, v1432);
            const v1437 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:135:33:decimal', stdlib.UInt_max, '1'));
            const v1438 = stdlib.add(v1338, v1432);
            const v1439 = v1253.hardCap;
            const v1440 = stdlib.add(v1338, v1376);
            const v1441 = stdlib.ge(v1440, v1439);
            const v1442 = v1441 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1443 = stdlib.eq(v1442, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v3990 = v1443;
            const v3991 = v1438;
            const v3992 = v1437;
            const v3993 = v1371;
            const v3994 = v1373;
            const v3996 = v1347;
            const v3997 = v1380;
            const v3998 = stdlib.le(v1341, v1314);
            const v3999 = v3998 ? v1443 : false;
            if (v3999) {
              sim_r.isHalt = false;
              }
            else {
              const v4001 = stdlib.ge(v1438, v1439);
              const v4002 = v4001 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v4003 = stdlib.eq(v4002, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v4003) {
                const v4004 = 'passed              ';
                null;
                const v4005 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
                const v4006 = stdlib.sub(v1380, v4005);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4084 = v1253.softCap;
                const v4085 = stdlib.ge(v1438, v4084);
                if (v4085) {
                  const v4086 = 'passed              ';
                  null;
                  const v4087 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
                  const v4088 = stdlib.sub(v1380, v4087);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1245,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4166 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}
          else {
            await stdlib.simMapSet(sim_r, 0, v1371, v1371);
            await stdlib.simMapSet(sim_r, 2, v1371, null);
            await stdlib.simMapSet(sim_r, 1, v1371, v1376);
            const v1452 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:141:33:decimal', stdlib.UInt_max, '1'));
            const v1453 = stdlib.add(v1338, v1376);
            const v1454 = v1253.hardCap;
            const v1456 = stdlib.ge(v1453, v1454);
            const v1457 = v1456 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v4227 = v1458;
            const v4228 = v1453;
            const v4229 = v1452;
            const v4230 = v1371;
            const v4231 = v1373;
            const v4233 = v1347;
            const v4234 = v1380;
            const v4235 = stdlib.le(v1341, v1314);
            const v4236 = v4235 ? v1458 : false;
            if (v4236) {
              sim_r.isHalt = false;
              }
            else {
              const v4240 = stdlib.eq(v1457, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v4240) {
                const v4241 = 'passed              ';
                null;
                const v4242 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
                const v4243 = stdlib.sub(v1380, v4242);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v4321 = v1253.softCap;
                const v4322 = stdlib.ge(v1453, v4321);
                if (v4322) {
                  const v4323 = 'passed              ';
                  null;
                  const v4324 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
                  const v4325 = stdlib.sub(v1380, v4324);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v1245,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v4403 = 'failed              ';
                  null;
                  sim_r.isHalt = false;
                  }}}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc11, ctc3, ctc12, ctc3, ctc3, ctc1, ctc13, ctc3, ctc3, ctc1, ctc3, ctc15, ctc3, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1372], secs: v1374, time: v1373, didSend: v260, from: v1371 } = txn1;
  undefined /* setApiDetails */;
  const v1376 = v1372[stdlib.checkedBigNumberify('./index.rsh:113:14:spread', stdlib.UInt_max, '0')];
  const v1377 = stdlib.gt(v1376, stdlib.checkedBigNumberify('./index.rsh:114:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1377, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)'],
    msg: 'Contribution too small',
    who: 'Contributors_contribute'
    });
  const v1380 = stdlib.add(v1348, v1376);
  ;
  const v1385 = v1380;
  const v1386 = await txn1.getOutput('Contributors_contribute', 'v1385', ctc3, v1385);
  if (v260) {
    stdlib.protect(ctc0, await interact.out(v1372, v1386), {
      at: './index.rsh:113:15:application',
      fs: ['at ./index.rsh:113:15:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)', 'at ./index.rsh:117:19:application call to "notify" (defined at: ./index.rsh:116:37:function exp)', 'at ./index.rsh:116:37:application call to [unknown function] (defined at: ./index.rsh:116:37:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  const v1392 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1371), null);
  let v1393;
  switch (v1392[0]) {
    case 'None': {
      const v1394 = v1392[1];
      v1393 = false;
      
      break;
      }
    case 'Some': {
      const v1395 = v1392[1];
      v1393 = true;
      
      break;
      }
    }
  if (v1393) {
    const v1396 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1371), null);
    let v1397;
    switch (v1396[0]) {
      case 'None': {
        const v1398 = v1396[1];
        v1397 = stdlib.checkedBigNumberify('./index.rsh:119:61:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1399 = v1396[1];
        v1397 = v1399;
        
        break;
        }
      }
    await stdlib.mapSet(map1, v1371, v1397);
    const v1400 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:122:31:decimal', stdlib.UInt_max, '1'));
    const v1401 = v1253.hardCap;
    const v1402 = stdlib.add(v1338, v1376);
    const v1403 = stdlib.ge(v1402, v1401);
    const v1404 = v1403 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v1405 = stdlib.eq(v1404, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v3516 = v1405;
    const v3517 = v1338;
    const v3518 = v1400;
    const v3519 = v1371;
    const v3520 = v1373;
    const v3522 = v1347;
    const v3523 = v1380;
    const v3524 = stdlib.le(v1341, v1314);
    const v3525 = v3524 ? v1405 : false;
    if (v3525) {
      return;
      }
    else {
      const v3527 = stdlib.ge(v1338, v1401);
      const v3528 = v3527 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v3529 = stdlib.eq(v3528, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v3529) {
        const v3530 = 'passed              ';
        null;
        const v3531 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
        const v3532 = stdlib.sub(v1380, v3531);
        ;
        return;
        }
      else {
        const v3610 = v1253.softCap;
        const v3611 = stdlib.ge(v1338, v3610);
        if (v3611) {
          const v3612 = 'passed              ';
          null;
          const v3613 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
          const v3614 = stdlib.sub(v1380, v3613);
          ;
          return;
          }
        else {
          const v3692 = 'failed              ';
          null;
          return;
          }}}}
  else {
    const v1413 = v1253.maxContribution;
    const v1414 = stdlib.gt(v1376, v1413);
    if (v1414) {
      await stdlib.mapSet(map0, v1371, v1371);
      await stdlib.mapSet(map2, v1371, null);
      await stdlib.mapSet(map1, v1371, v1413);
      const v1418 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:129:33:decimal', stdlib.UInt_max, '1'));
      const v1419 = stdlib.add(v1338, v1413);
      const v1420 = v1253.hardCap;
      const v1421 = stdlib.add(v1338, v1376);
      const v1422 = stdlib.ge(v1421, v1420);
      const v1423 = v1422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v3753 = v1424;
      const v3754 = v1419;
      const v3755 = v1418;
      const v3756 = v1371;
      const v3757 = v1373;
      const v3759 = v1347;
      const v3760 = v1380;
      const v3761 = stdlib.le(v1341, v1314);
      const v3762 = v3761 ? v1424 : false;
      if (v3762) {
        return;
        }
      else {
        const v3764 = stdlib.ge(v1419, v1420);
        const v3765 = v3764 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v3766 = stdlib.eq(v3765, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v3766) {
          const v3767 = 'passed              ';
          null;
          const v3768 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
          const v3769 = stdlib.sub(v1380, v3768);
          ;
          return;
          }
        else {
          const v3847 = v1253.softCap;
          const v3848 = stdlib.ge(v1419, v3847);
          if (v3848) {
            const v3849 = 'passed              ';
            null;
            const v3850 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
            const v3851 = stdlib.sub(v1380, v3850);
            ;
            return;
            }
          else {
            const v3929 = 'failed              ';
            null;
            return;
            }}}}
    else {
      const v1432 = v1253.minContribution;
      const v1433 = stdlib.lt(v1376, v1432);
      if (v1433) {
        await stdlib.mapSet(map0, v1371, v1371);
        await stdlib.mapSet(map2, v1371, null);
        await stdlib.mapSet(map1, v1371, v1432);
        const v1437 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:135:33:decimal', stdlib.UInt_max, '1'));
        const v1438 = stdlib.add(v1338, v1432);
        const v1439 = v1253.hardCap;
        const v1440 = stdlib.add(v1338, v1376);
        const v1441 = stdlib.ge(v1440, v1439);
        const v1442 = v1441 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1443 = stdlib.eq(v1442, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v3990 = v1443;
        const v3991 = v1438;
        const v3992 = v1437;
        const v3993 = v1371;
        const v3994 = v1373;
        const v3996 = v1347;
        const v3997 = v1380;
        const v3998 = stdlib.le(v1341, v1314);
        const v3999 = v3998 ? v1443 : false;
        if (v3999) {
          return;
          }
        else {
          const v4001 = stdlib.ge(v1438, v1439);
          const v4002 = v4001 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v4003 = stdlib.eq(v4002, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v4003) {
            const v4004 = 'passed              ';
            null;
            const v4005 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
            const v4006 = stdlib.sub(v1380, v4005);
            ;
            return;
            }
          else {
            const v4084 = v1253.softCap;
            const v4085 = stdlib.ge(v1438, v4084);
            if (v4085) {
              const v4086 = 'passed              ';
              null;
              const v4087 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
              const v4088 = stdlib.sub(v1380, v4087);
              ;
              return;
              }
            else {
              const v4166 = 'failed              ';
              null;
              return;
              }}}}
      else {
        await stdlib.mapSet(map0, v1371, v1371);
        await stdlib.mapSet(map2, v1371, null);
        await stdlib.mapSet(map1, v1371, v1376);
        const v1452 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:141:33:decimal', stdlib.UInt_max, '1'));
        const v1453 = stdlib.add(v1338, v1376);
        const v1454 = v1253.hardCap;
        const v1456 = stdlib.ge(v1453, v1454);
        const v1457 = v1456 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v4227 = v1458;
        const v4228 = v1453;
        const v4229 = v1452;
        const v4230 = v1371;
        const v4231 = v1373;
        const v4233 = v1347;
        const v4234 = v1380;
        const v4235 = stdlib.le(v1341, v1314);
        const v4236 = v4235 ? v1458 : false;
        if (v4236) {
          return;
          }
        else {
          const v4240 = stdlib.eq(v1457, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v4240) {
            const v4241 = 'passed              ';
            null;
            const v4242 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
            const v4243 = stdlib.sub(v1380, v4242);
            ;
            return;
            }
          else {
            const v4321 = v1253.softCap;
            const v4322 = stdlib.ge(v1453, v4321);
            if (v4322) {
              const v4323 = 'passed              ';
              null;
              const v4324 = stdlib.div(v1380, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
              const v4325 = stdlib.sub(v1380, v4324);
              ;
              return;
              }
            else {
              const v4403 = 'failed              ';
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
  const ctc14 = stdlib.T_Contract;
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc11], ['link', ctc12], ['description', ctc13], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_770: ctc10,
    Contributors_creating0_770: ctc16,
    Contributors_timedOut0_770: ctc10
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
  
  
  const [v1245, v1265, v2050, v2051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2079 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:255:11:application call to [unknown function] (defined at: ./index.rsh:255:11:function exp)', 'at ./index.rsh:238:37:application call to "runContributors_contributed0_770" (defined at: ./index.rsh:255:11:function exp)', 'at ./index.rsh:238:37:application call to [unknown function] (defined at: ./index.rsh:238:37:function exp)'],
    msg: 'in',
    who: 'Contributors_contributed'
    });
  const v2089 = ['Contributors_contributed0_770', v2079];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1265, v2050, v2051, v2089],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:255:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
      
      switch (v2109[0]) {
        case 'Contributors_contributed0_770': {
          const v2112 = v2109[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_contributed"
            });
          ;
          const v2120 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '0')];
          const v2121 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '1')];
          const v2122 = null;
          const v2123 = await txn1.getOutput('Contributors_contributed', 'v2122', ctc0, v2122);
          
          const v2130 = 'contributed         ';
          null;
          const v4466 = v2050;
          const v4467 = v2051;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_creating0_770': {
          const v2164 = v2109[1];
          
          break;
          }
        case 'Contributors_timedOut0_770': {
          const v2216 = v2109[1];
          
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
  const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
  switch (v2109[0]) {
    case 'Contributors_contributed0_770': {
      const v2112 = v2109[1];
      undefined /* setApiDetails */;
      ;
      const v2120 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '0')];
      const v2121 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '1')];
      const v2122 = null;
      const v2123 = await txn1.getOutput('Contributors_contributed', 'v2122', ctc0, v2122);
      if (v900) {
        stdlib.protect(ctc0, await interact.out(v2112, v2123), {
          at: './index.rsh:255:12:application',
          fs: ['at ./index.rsh:255:12:application call to [unknown function] (defined at: ./index.rsh:255:12:function exp)', 'at ./index.rsh:256:15:application call to "notify" (defined at: ./index.rsh:255:62:function exp)', 'at ./index.rsh:255:62:application call to [unknown function] (defined at: ./index.rsh:255:62:function exp)'],
          msg: 'out',
          who: 'Contributors_contributed'
          });
        }
      else {
        }
      
      const v2130 = 'contributed         ';
      null;
      const v4466 = v2050;
      const v4467 = v2051;
      return;
      
      break;
      }
    case 'Contributors_creating0_770': {
      const v2164 = v2109[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_770': {
      const v2216 = v2109[1];
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
  const ctc13 = stdlib.T_Contract;
  const ctc14 = stdlib.T_Struct([['id', ctc3], ['title', ctc10], ['link', ctc11], ['description', ctc12], ['owner', ctc1], ['contractInfo', ctc13]]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_770: ctc16,
    Contributors_creating0_770: ctc15,
    Contributors_timedOut0_770: ctc16
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
  
  
  const [v1245, v1265, v2050, v2051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2056 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:241:11:application call to [unknown function] (defined at: ./index.rsh:241:11:function exp)', 'at ./index.rsh:238:37:application call to "runContributors_creating0_770" (defined at: ./index.rsh:241:11:function exp)', 'at ./index.rsh:238:37:application call to [unknown function] (defined at: ./index.rsh:238:37:function exp)'],
    msg: 'in',
    who: 'Contributors_creating'
    });
  const v2075 = ['Contributors_creating0_770', v2056];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1265, v2050, v2051, v2075],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
      
      switch (v2109[0]) {
        case 'Contributors_contributed0_770': {
          const v2112 = v2109[1];
          
          break;
          }
        case 'Contributors_creating0_770': {
          const v2164 = v2109[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_creating"
            });
          ;
          const v2184 = v2164[stdlib.checkedBigNumberify('./index.rsh:241:11:spread', stdlib.UInt_max, '0')];
          const v2185 = null;
          const v2186 = await txn1.getOutput('Contributors_creating', 'v2185', ctc0, v2185);
          
          const v2198 = v2184.id;
          const v2199 = v2184.title;
          const v2200 = v2184.link;
          const v2201 = v2184.description;
          const v2202 = v2184.owner;
          const v2203 = v2184.contractInfo;
          null;
          const v4550 = v2050;
          const v4551 = v2051;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributors_timedOut0_770': {
          const v2216 = v2109[1];
          
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
  const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
  switch (v2109[0]) {
    case 'Contributors_contributed0_770': {
      const v2112 = v2109[1];
      return;
      break;
      }
    case 'Contributors_creating0_770': {
      const v2164 = v2109[1];
      undefined /* setApiDetails */;
      ;
      const v2184 = v2164[stdlib.checkedBigNumberify('./index.rsh:241:11:spread', stdlib.UInt_max, '0')];
      const v2185 = null;
      const v2186 = await txn1.getOutput('Contributors_creating', 'v2185', ctc0, v2185);
      if (v900) {
        stdlib.protect(ctc0, await interact.out(v2164, v2186), {
          at: './index.rsh:241:12:application',
          fs: ['at ./index.rsh:241:12:application call to [unknown function] (defined at: ./index.rsh:241:12:function exp)', 'at ./index.rsh:242:15:application call to "notify" (defined at: ./index.rsh:241:49:function exp)', 'at ./index.rsh:241:49:application call to [unknown function] (defined at: ./index.rsh:241:49:function exp)'],
          msg: 'out',
          who: 'Contributors_creating'
          });
        }
      else {
        }
      
      const v2198 = v2184.id;
      const v2199 = v2184.title;
      const v2200 = v2184.link;
      const v2201 = v2184.description;
      const v2202 = v2184.owner;
      const v2203 = v2184.contractInfo;
      null;
      const v4550 = v2050;
      const v4551 = v2051;
      return;
      
      break;
      }
    case 'Contributors_timedOut0_770': {
      const v2216 = v2109[1];
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
  const ctc14 = stdlib.T_Contract;
  const ctc15 = stdlib.T_Struct([['id', ctc3], ['title', ctc11], ['link', ctc12], ['description', ctc13], ['owner', ctc1], ['contractInfo', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Contributors_contributed0_770: ctc10,
    Contributors_creating0_770: ctc16,
    Contributors_timedOut0_770: ctc10
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
  
  
  const [v1245, v1265, v2050, v2051] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc1, ctc6, ctc9, ctc3]);
  const v2093 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:11:application call to [unknown function] (defined at: ./index.rsh:262:11:function exp)', 'at ./index.rsh:238:37:application call to "runContributors_timedOut0_770" (defined at: ./index.rsh:262:11:function exp)', 'at ./index.rsh:238:37:application call to [unknown function] (defined at: ./index.rsh:238:37:function exp)'],
    msg: 'in',
    who: 'Contributors_timedOut'
    });
  const v2103 = ['Contributors_timedOut0_770', v2093];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1245, v1265, v2050, v2051, v2103],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
      
      switch (v2109[0]) {
        case 'Contributors_contributed0_770': {
          const v2112 = v2109[1];
          
          break;
          }
        case 'Contributors_creating0_770': {
          const v2164 = v2109[1];
          
          break;
          }
        case 'Contributors_timedOut0_770': {
          const v2216 = v2109[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributors_timedOut"
            });
          ;
          const v2257 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '0')];
          const v2258 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '1')];
          const v2259 = null;
          const v2260 = await txn1.getOutput('Contributors_timedOut', 'v2259', ctc0, v2259);
          
          const v2267 = 'timedOut            ';
          null;
          const v4634 = v2050;
          const v4635 = v2051;
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
  const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn1;
  switch (v2109[0]) {
    case 'Contributors_contributed0_770': {
      const v2112 = v2109[1];
      return;
      break;
      }
    case 'Contributors_creating0_770': {
      const v2164 = v2109[1];
      return;
      break;
      }
    case 'Contributors_timedOut0_770': {
      const v2216 = v2109[1];
      undefined /* setApiDetails */;
      ;
      const v2257 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '0')];
      const v2258 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '1')];
      const v2259 = null;
      const v2260 = await txn1.getOutput('Contributors_timedOut', 'v2259', ctc0, v2259);
      if (v900) {
        stdlib.protect(ctc0, await interact.out(v2216, v2260), {
          at: './index.rsh:262:12:application',
          fs: ['at ./index.rsh:262:12:application call to [unknown function] (defined at: ./index.rsh:262:12:function exp)', 'at ./index.rsh:263:15:application call to "notify" (defined at: ./index.rsh:262:59:function exp)', 'at ./index.rsh:262:59:application call to [unknown function] (defined at: ./index.rsh:262:59:function exp)'],
          msg: 'out',
          who: 'Contributors_timedOut'
          });
        }
      else {
        }
      
      const v2267 = 'timedOut            ';
      null;
      const v4634 = v2050;
      const v4635 = v2051;
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
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc11 = stdlib.T_Object({
    description: ctc6,
    hardCap: ctc3,
    id: ctc3,
    link: ctc7,
    maxContribution: ctc3,
    minContribution: ctc3,
    owner: ctc1,
    privateSaleAmt: ctc3,
    softCap: ctc3,
    title: ctc8,
    tokenName: ctc9,
    tokenSymbol: ctc10,
    tokenid: ctc3
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Contract;
  const ctc14 = stdlib.T_Token;
  const ctc15 = stdlib.T_Tuple([ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc12]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc20 = stdlib.T_Struct([['id', ctc3], ['title', ctc8], ['link', ctc7], ['description', ctc6], ['owner', ctc1], ['contractInfo', ctc13]]);
  const ctc21 = stdlib.T_Tuple([ctc20]);
  const ctc22 = stdlib.T_Data({
    Contributors_contributed0_770: ctc19,
    Contributors_creating0_770: ctc21,
    Contributors_timedOut0_770: ctc19
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
  
  
  const v1218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1219 = [v1218];
  const v1230 = stdlib.protect(ctc11, interact.getProject, 'for Deployer\'s interact field getProject');
  const v1244 = stdlib.protect(ctc12, interact.isProject, 'for Deployer\'s interact field isProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1247, time: v1246, didSend: v52, from: v1245 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1247, time: v1246, didSend: v52, from: v1245 } = txn1;
  ;
  const v1250 = stdlib.protect(ctc13, await interact.getContract(), {
    at: './index.rsh:75:57:application',
    fs: ['at ./index.rsh:72:16:application call to [unknown function] (defined at: ./index.rsh:72:20:function exp)'],
    msg: 'getContract',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1219, v1245, v1244, v1230, v1250],
    evt_cnt: 3,
    funcNum: 1,
    lct: v1246,
    onlyIf: true,
    out_tys: [ctc12, ctc11, ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:77:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1252, v1253, v1254], secs: v1256, time: v1255, didSend: v64, from: v1251 } = txn2;
      
      ;
      const v1258 = v1253.id;
      const v1259 = 'created             ';
      null;
      const v1260 = v1253.tokenName;
      const v1261 = v1253.tokenSymbol;
      const v1262 = '                                                                                                ';
      const v1263 = '                                ';
      const v1264 = stdlib.simTokenNew(sim_r, v1260, v1261, v1262, v1263, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1265 = await txn2.getOutput('internal', 'v1264', ctc14, v1264);
      const v1275 = v1219[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1277 = v1275[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '1')];
      const v1278 = v1275[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '2')];
      const v1279 = [stdlib.UInt_max, v1277, v1278];
      const v1280 = stdlib.Array_set(v1219, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1279);
      const v1282 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1283 = v1282[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1285 = v1282[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '2')];
      const v1286 = [v1283, stdlib.UInt_max, v1285];
      const v1287 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1286);
      const v1288 = v1287[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1289 = v1288[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1290 = v1288[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '1')];
      const v1292 = [v1289, v1290, false];
      const v1293 = stdlib.Array_set(v1287, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1292);
      const v1294 = v1253.tokenid;
      const v1295 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc17, ctc1, ctc12, ctc11, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1252, v1253, v1254], secs: v1256, time: v1255, didSend: v64, from: v1251 } = txn2;
  ;
  const v1257 = stdlib.addressEq(v1245, v1251);
  stdlib.assert(v1257, {
    at: './index.rsh:77:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1258 = v1253.id;
  const v1259 = 'created             ';
  null;
  const v1260 = v1253.tokenName;
  const v1261 = v1253.tokenSymbol;
  const v1262 = '                                                                                                ';
  const v1263 = '                                ';
  const v1264 = undefined /* TokenNew */;
  const v1265 = await txn2.getOutput('internal', 'v1264', ctc14, v1264);
  const v1275 = v1219[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
  const v1277 = v1275[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '1')];
  const v1278 = v1275[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '2')];
  const v1279 = [stdlib.UInt_max, v1277, v1278];
  const v1280 = stdlib.Array_set(v1219, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1279);
  const v1282 = v1280[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
  const v1283 = v1282[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
  const v1285 = v1282[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '2')];
  const v1286 = [v1283, stdlib.UInt_max, v1285];
  const v1287 = stdlib.Array_set(v1280, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1286);
  const v1288 = v1287[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
  const v1289 = v1288[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0')];
  const v1290 = v1288[stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '1')];
  const v1292 = [v1289, v1290, false];
  const v1293 = stdlib.Array_set(v1287, stdlib.checkedBigNumberify('./index.rsh:82:25:application', stdlib.UInt_max, '0'), v1292);
  const v1294 = v1253.tokenid;
  const v1295 = 'tokenCreated        ';
  null;
  const v1296 = v1293[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '0')];
  const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '1')];
  
  const txn3 = await (ctc.sendrecv({
    args: [v1245, v1252, v1253, v1254, v1258, v1265, v1293],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1255,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '0'), [[v1297, v1265]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1300, time: v1299, didSend: v95, from: v1298 } = txn3;
      
      const v1301 = v1293[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '0')];
      const v1302 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '1')];
      ;
      const v1304 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '0')];
      const v1305 = stdlib.add(v1304, v1302);
      const v1309 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '2')];
      const v1310 = [v1305, v1302, v1309];
      const v1311 = stdlib.Array_set(v1293, stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '0'), v1310);
      sim_r.txns.push({
        amt: v1302,
        kind: 'to',
        tok: v1265
        });
      if (v1252) {
        const v1314 = stdlib.add(v1299, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
        sim_r.isHalt = false;
        }
      else {
        const v2043 = true;
        const v2044 = v1299;
        const v2050 = v1311;
        const v2051 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          
          return v2043;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v2268 = v2050[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v2273 = stdlib.sub(v2051, v2269);
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v2280 = v2268[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v2286 = stdlib.sub(v2269, v2280);
          const v2290 = v2268[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v2291 = [v2286, v2280, v2290];
          const v2292 = stdlib.Array_set(v2050, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v2291);
          const v2293 = v2292[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v2294 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v2295 = stdlib.sub(v2294, v2280);
          const v2297 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v2299 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v2300 = [v2297, v2295, v2299];
          const v2301 = stdlib.Array_set(v2292, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v2300);
          stdlib.simTokenBurn(sim_r, v1265, v2280);
          const v2302 = v2301[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v2303) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1265);
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
    tys: [ctc1, ctc12, ctc11, ctc13, ctc3, ctc14, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1300, time: v1299, didSend: v95, from: v1298 } = txn3;
  const v1301 = v1293[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '0')];
  const v1302 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:39:application', stdlib.UInt_max, '1')];
  ;
  const v1304 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '0')];
  const v1305 = stdlib.add(v1304, v1302);
  const v1309 = v1301[stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '2')];
  const v1310 = [v1305, v1302, v1309];
  const v1311 = stdlib.Array_set(v1293, stdlib.checkedBigNumberify('./index.rsh:86:12:dot', stdlib.UInt_max, '0'), v1310);
  ;
  const v1312 = stdlib.addressEq(v1245, v1298);
  stdlib.assert(v1312, {
    at: './index.rsh:86:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  if (v1252) {
    const v1314 = stdlib.add(v1299, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
    const txn4 = await (ctc.sendrecv({
      args: [v1245, v1253, v1254, v1258, v1265, v1299, v1311, v1314],
      evt_cnt: 0,
      funcNum: 3,
      lct: v1299,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:92:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1317, time: v1316, didSend: v102, from: v1315 } = txn4;
        
        ;
        const v1319 = v1311[stdlib.checkedBigNumberify('./index.rsh:93:16:application', stdlib.UInt_max, '0')];
        const v1320 = v1319[stdlib.checkedBigNumberify('./index.rsh:93:16:application', stdlib.UInt_max, '0')];
        const v1321 = v1253.privateSaleAmt;
        const v1322 = stdlib.gt(v1320, v1321);
        if (v1322) {
          const v1326 = stdlib.sub(v1320, v1321);
          const v1327 = v1253.owner;
          const v1331 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0'), v1326);
          sim_r.txns.push({
            kind: 'from',
            to: v1327,
            tok: undefined /* Nothing */
            });
          const v1333 = v1253.title;
          const v1334 = v1253.link;
          const v1335 = v1253.description;
          null;
          const v1337 = true;
          const v1338 = stdlib.checkedBigNumberify('./index.rsh:110:26:decimal', stdlib.UInt_max, '0');
          const v1339 = stdlib.checkedBigNumberify('./index.rsh:110:23:decimal', stdlib.UInt_max, '0');
          const v1340 = v1245;
          const v1341 = v1316;
          const v1342 = v1299;
          const v1347 = v1311;
          const v1348 = v1331;
          
          if (await (async () => {
            const v1352 = stdlib.le(v1342, v1314);
            const v1353 = v1352 ? v1337 : false;
            
            return v1353;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1472 = v1253.hardCap;
            const v1473 = stdlib.ge(v1338, v1472);
            const v1474 = v1473 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1475 = stdlib.eq(v1474, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1475) {
              const v1477 = 'passed              ';
              null;
              const v1479 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
              const v1483 = stdlib.sub(v1348, v1479);
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1657 = v1253.softCap;
              const v1658 = stdlib.ge(v1338, v1657);
              if (v1658) {
                const v1660 = 'passed              ';
                null;
                const v1662 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
                const v1666 = stdlib.sub(v1348, v1662);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }
              else {
                const v1841 = 'failed              ';
                null;
                sim_r.isHalt = false;
                }}}}
        else {
          const v1990 = v1253.owner;
          const v1994 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0'), v1320);
          sim_r.txns.push({
            kind: 'from',
            to: v1990,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1245,
            tok: undefined /* Nothing */
            });
          const v2001 = v1319[stdlib.checkedBigNumberify('./index.rsh:98:28:application', stdlib.UInt_max, '1')];
          stdlib.simTokenBurn(sim_r, v1265, v2001);
          stdlib.simTokenDestroy(sim_r, v1265);
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
      tys: [ctc1, ctc11, ctc13, ctc3, ctc14, ctc3, ctc17, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1317, time: v1316, didSend: v102, from: v1315 } = txn4;
    ;
    const v1318 = stdlib.addressEq(v1245, v1315);
    stdlib.assert(v1318, {
      at: './index.rsh:92:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v1319 = v1311[stdlib.checkedBigNumberify('./index.rsh:93:16:application', stdlib.UInt_max, '0')];
    const v1320 = v1319[stdlib.checkedBigNumberify('./index.rsh:93:16:application', stdlib.UInt_max, '0')];
    const v1321 = v1253.privateSaleAmt;
    const v1322 = stdlib.gt(v1320, v1321);
    if (v1322) {
      const v1326 = stdlib.sub(v1320, v1321);
      const v1327 = v1253.owner;
      const v1331 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0'), v1326);
      ;
      const v1333 = v1253.title;
      const v1334 = v1253.link;
      const v1335 = v1253.description;
      null;
      let v1337 = true;
      let v1338 = stdlib.checkedBigNumberify('./index.rsh:110:26:decimal', stdlib.UInt_max, '0');
      let v1339 = stdlib.checkedBigNumberify('./index.rsh:110:23:decimal', stdlib.UInt_max, '0');
      let v1340 = v1245;
      let v1341 = v1316;
      let v1342 = v1299;
      let v1347 = v1311;
      let v1348 = v1331;
      
      while (await (async () => {
        const v1352 = stdlib.le(v1342, v1314);
        const v1353 = v1352 ? v1337 : false;
        
        return v1353;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 16,
          out_tys: [ctc15],
          timeoutAt: ['time', v1314],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v1245, v1253, v1258, v1265, v1314, v1321, v1327, v1337, v1338, v1339, v1340, v1341, v1347, v1348],
            evt_cnt: 0,
            funcNum: 17,
            lct: v1341,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:147:20:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1468, time: v1467, didSend: v372, from: v1466 } = txn6;
              
              ;
              const cv1337 = v1337;
              const cv1338 = v1338;
              const cv1339 = v1339;
              const cv1340 = v1340;
              const cv1341 = v1467;
              const cv1342 = v1341;
              const cv1347 = v1347;
              const cv1348 = v1348;
              
              await (async () => {
                const v1337 = cv1337;
                const v1338 = cv1338;
                const v1339 = cv1339;
                const v1340 = cv1340;
                const v1341 = cv1341;
                const v1342 = cv1342;
                const v1347 = cv1347;
                const v1348 = cv1348;
                
                if (await (async () => {
                  const v1352 = stdlib.le(v1342, v1314);
                  const v1353 = v1352 ? v1337 : false;
                  
                  return v1353;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1472 = v1253.hardCap;
                  const v1473 = stdlib.ge(v1338, v1472);
                  const v1474 = v1473 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  const v1475 = stdlib.eq(v1474, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  if (v1475) {
                    const v1477 = 'passed              ';
                    null;
                    const v1479 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
                    const v1483 = stdlib.sub(v1348, v1479);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v1245,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1657 = v1253.softCap;
                    const v1658 = stdlib.ge(v1338, v1657);
                    if (v1658) {
                      const v1660 = 'passed              ';
                      null;
                      const v1662 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
                      const v1666 = stdlib.sub(v1348, v1662);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v1245,
                        tok: undefined /* Nothing */
                        });
                      sim_r.isHalt = false;
                      }
                    else {
                      const v1841 = 'failed              ';
                      null;
                      sim_r.isHalt = false;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc1, ctc11, ctc3, ctc14, ctc3, ctc3, ctc1, ctc12, ctc3, ctc3, ctc1, ctc3, ctc17, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1468, time: v1467, didSend: v372, from: v1466 } = txn6;
          ;
          const v1469 = stdlib.addressEq(v1245, v1466);
          stdlib.assert(v1469, {
            at: './index.rsh:147:20:dot',
            fs: ['at ./index.rsh:146:40:application call to [unknown function] (defined at: ./index.rsh:146:40:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const cv1337 = v1337;
          const cv1338 = v1338;
          const cv1339 = v1339;
          const cv1340 = v1340;
          const cv1341 = v1467;
          const cv1342 = v1341;
          const cv1347 = v1347;
          const cv1348 = v1348;
          
          v1337 = cv1337;
          v1338 = cv1338;
          v1339 = cv1339;
          v1340 = cv1340;
          v1341 = cv1341;
          v1342 = cv1342;
          v1347 = cv1347;
          v1348 = cv1348;
          
          continue;
          }
        else {
          const {data: [v1372], secs: v1374, time: v1373, didSend: v260, from: v1371 } = txn5;
          undefined /* setApiDetails */;
          const v1376 = v1372[stdlib.checkedBigNumberify('./index.rsh:113:14:spread', stdlib.UInt_max, '0')];
          const v1377 = stdlib.gt(v1376, stdlib.checkedBigNumberify('./index.rsh:114:23:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1377, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:114:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)', 'at ./index.rsh:113:46:application call to [unknown function] (defined at: ./index.rsh:113:46:function exp)'],
            msg: 'Contribution too small',
            who: 'Deployer'
            });
          const v1380 = stdlib.add(v1348, v1376);
          ;
          const v1385 = v1380;
          await txn5.getOutput('Contributors_contribute', 'v1385', ctc3, v1385);
          const v1392 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1371), null);
          let v1393;
          switch (v1392[0]) {
            case 'None': {
              const v1394 = v1392[1];
              v1393 = false;
              
              break;
              }
            case 'Some': {
              const v1395 = v1392[1];
              v1393 = true;
              
              break;
              }
            }
          if (v1393) {
            const v1396 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1371), null);
            let v1397;
            switch (v1396[0]) {
              case 'None': {
                const v1398 = v1396[1];
                v1397 = stdlib.checkedBigNumberify('./index.rsh:119:61:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1399 = v1396[1];
                v1397 = v1399;
                
                break;
                }
              }
            await stdlib.mapSet(map1, v1371, v1397);
            const v1400 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:122:31:decimal', stdlib.UInt_max, '1'));
            const v1401 = v1253.hardCap;
            const v1402 = stdlib.add(v1338, v1376);
            const v1403 = stdlib.ge(v1402, v1401);
            const v1404 = v1403 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1405 = stdlib.eq(v1404, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const cv1337 = v1405;
            const cv1338 = v1338;
            const cv1339 = v1400;
            const cv1340 = v1371;
            const cv1341 = v1373;
            const cv1342 = v1341;
            const cv1347 = v1347;
            const cv1348 = v1380;
            
            v1337 = cv1337;
            v1338 = cv1338;
            v1339 = cv1339;
            v1340 = cv1340;
            v1341 = cv1341;
            v1342 = cv1342;
            v1347 = cv1347;
            v1348 = cv1348;
            
            continue;}
          else {
            const v1413 = v1253.maxContribution;
            const v1414 = stdlib.gt(v1376, v1413);
            if (v1414) {
              await stdlib.mapSet(map0, v1371, v1371);
              await stdlib.mapSet(map2, v1371, null);
              await stdlib.mapSet(map1, v1371, v1413);
              const v1418 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:129:33:decimal', stdlib.UInt_max, '1'));
              const v1419 = stdlib.add(v1338, v1413);
              const v1420 = v1253.hardCap;
              const v1421 = stdlib.add(v1338, v1376);
              const v1422 = stdlib.ge(v1421, v1420);
              const v1423 = v1422 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v1424 = stdlib.eq(v1423, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const cv1337 = v1424;
              const cv1338 = v1419;
              const cv1339 = v1418;
              const cv1340 = v1371;
              const cv1341 = v1373;
              const cv1342 = v1341;
              const cv1347 = v1347;
              const cv1348 = v1380;
              
              v1337 = cv1337;
              v1338 = cv1338;
              v1339 = cv1339;
              v1340 = cv1340;
              v1341 = cv1341;
              v1342 = cv1342;
              v1347 = cv1347;
              v1348 = cv1348;
              
              continue;}
            else {
              const v1432 = v1253.minContribution;
              const v1433 = stdlib.lt(v1376, v1432);
              if (v1433) {
                await stdlib.mapSet(map0, v1371, v1371);
                await stdlib.mapSet(map2, v1371, null);
                await stdlib.mapSet(map1, v1371, v1432);
                const v1437 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:135:33:decimal', stdlib.UInt_max, '1'));
                const v1438 = stdlib.add(v1338, v1432);
                const v1439 = v1253.hardCap;
                const v1440 = stdlib.add(v1338, v1376);
                const v1441 = stdlib.ge(v1440, v1439);
                const v1442 = v1441 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1443 = stdlib.eq(v1442, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1337 = v1443;
                const cv1338 = v1438;
                const cv1339 = v1437;
                const cv1340 = v1371;
                const cv1341 = v1373;
                const cv1342 = v1341;
                const cv1347 = v1347;
                const cv1348 = v1380;
                
                v1337 = cv1337;
                v1338 = cv1338;
                v1339 = cv1339;
                v1340 = cv1340;
                v1341 = cv1341;
                v1342 = cv1342;
                v1347 = cv1347;
                v1348 = cv1348;
                
                continue;}
              else {
                await stdlib.mapSet(map0, v1371, v1371);
                await stdlib.mapSet(map2, v1371, null);
                await stdlib.mapSet(map1, v1371, v1376);
                const v1452 = stdlib.add(v1339, stdlib.checkedBigNumberify('./index.rsh:141:33:decimal', stdlib.UInt_max, '1'));
                const v1453 = stdlib.add(v1338, v1376);
                const v1454 = v1253.hardCap;
                const v1456 = stdlib.ge(v1453, v1454);
                const v1457 = v1456 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v1458 = stdlib.eq(v1457, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const cv1337 = v1458;
                const cv1338 = v1453;
                const cv1339 = v1452;
                const cv1340 = v1371;
                const cv1341 = v1373;
                const cv1342 = v1341;
                const cv1347 = v1347;
                const cv1348 = v1380;
                
                v1337 = cv1337;
                v1338 = cv1338;
                v1339 = cv1339;
                v1340 = cv1340;
                v1341 = cv1341;
                v1342 = cv1342;
                v1347 = cv1347;
                v1348 = cv1348;
                
                continue;}}}}
        
        }
      const v1472 = v1253.hardCap;
      const v1473 = stdlib.ge(v1338, v1472);
      const v1474 = v1473 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1475 = stdlib.eq(v1474, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v1475) {
        const v1477 = 'passed              ';
        null;
        const v1479 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:153:32:decimal', stdlib.UInt_max, '100'));
        const v1483 = stdlib.sub(v1348, v1479);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1245, v1258, v1265, v1321, v1327, v1338, v1339, v1340, v1347, v1483],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1341,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1486, time: v1485, didSend: v391, from: v1484 } = txn5;
            
            ;
            const v1493 = stdlib.sub(v1483, v1483);
            sim_r.txns.push({
              kind: 'from',
              to: v1327,
              tok: undefined /* Nothing */
              });
            const v1494 = v1347[stdlib.checkedBigNumberify('./index.rsh:158:23:application', stdlib.UInt_max, '0')];
            const v1495 = v1494[stdlib.checkedBigNumberify('./index.rsh:158:23:application', stdlib.UInt_max, '0')];
            const v1496 = stdlib.div(v1495, stdlib.checkedBigNumberify('./index.rsh:158:36:decimal', stdlib.UInt_max, '100'));
            const v1500 = stdlib.sub(v1493, v1496);
            sim_r.txns.push({
              kind: 'from',
              to: v1245,
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
        const {data: [], secs: v1486, time: v1485, didSend: v391, from: v1484 } = txn5;
        ;
        const v1487 = stdlib.addressEq(v1245, v1484);
        stdlib.assert(v1487, {
          at: './index.rsh:155:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1493 = stdlib.sub(v1483, v1483);
        ;
        const v1494 = v1347[stdlib.checkedBigNumberify('./index.rsh:158:23:application', stdlib.UInt_max, '0')];
        const v1495 = v1494[stdlib.checkedBigNumberify('./index.rsh:158:23:application', stdlib.UInt_max, '0')];
        const v1496 = stdlib.div(v1495, stdlib.checkedBigNumberify('./index.rsh:158:36:decimal', stdlib.UInt_max, '100'));
        const v1500 = stdlib.sub(v1493, v1496);
        ;
        const txn6 = await (ctc.sendrecv({
          args: [v1245, v1258, v1265, v1321, v1338, v1339, v1340, v1347, v1495, v1500],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1485,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:162:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1503, time: v1502, didSend: v408, from: v1501 } = txn6;
            
            ;
            const v1507 = v1495;
            const v1508 = v1339;
            const v1509 = v1502;
            const v1515 = v1347;
            const v1516 = v1500;
            
            if (await (async () => {
              const v1520 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
              const v1521 = stdlib.gt(v1507, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
              const v1522 = v1520 ? v1521 : false;
              
              return v1522;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1592 = v1515[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
              const v1593 = v1592[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
              const v1597 = stdlib.sub(v1516, v1593);
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
                tok: undefined /* Nothing */
                });
              const v1604 = v1592[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
              const v1610 = stdlib.sub(v1593, v1604);
              const v1614 = v1592[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
              const v1615 = [v1610, v1604, v1614];
              const v1616 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1615);
              const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
              const v1618 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
              const v1619 = stdlib.sub(v1618, v1604);
              const v1621 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
              const v1623 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
              const v1624 = [v1621, v1619, v1623];
              const v1625 = stdlib.Array_set(v1616, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1624);
              stdlib.simTokenBurn(sim_r, v1265, v1604);
              const v1626 = v1625[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
              const v1627 = v1626[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
              if (v1627) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1265);
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
        const {data: [], secs: v1503, time: v1502, didSend: v408, from: v1501 } = txn6;
        ;
        const v1504 = stdlib.addressEq(v1245, v1501);
        stdlib.assert(v1504, {
          at: './index.rsh:162:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1507 = v1495;
        let v1508 = v1339;
        let v1509 = v1502;
        let v1515 = v1347;
        let v1516 = v1500;
        
        while (await (async () => {
          const v1520 = stdlib.gt(v1508, stdlib.checkedBigNumberify('./index.rsh:165:30:decimal', stdlib.UInt_max, '0'));
          const v1521 = stdlib.gt(v1507, stdlib.checkedBigNumberify('./index.rsh:165:55:decimal', stdlib.UInt_max, '0'));
          const v1522 = v1520 ? v1521 : false;
          
          return v1522;})()) {
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc18],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1529], secs: v1531, time: v1530, didSend: v446, from: v1528 } = txn7;
          undefined /* setApiDetails */;
          ;
          const v1534 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1528), null);
          let v1535;
          switch (v1534[0]) {
            case 'None': {
              const v1536 = v1534[1];
              v1535 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1537 = v1534[1];
              v1535 = v1537;
              
              break;
              }
            }
          const v1538 = stdlib.ge(v1516, v1535);
          const v1539 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1528), null);
          let v1540;
          switch (v1539[0]) {
            case 'None': {
              const v1541 = v1539[1];
              v1540 = false;
              
              break;
              }
            case 'Some': {
              const v1542 = v1539[1];
              v1540 = true;
              
              break;
              }
            }
          const v1543 = v1538 ? v1540 : false;
          if (v1543) {
            const v1544 = v1515[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
            const v1545 = v1544[stdlib.checkedBigNumberify('./index.rsh:168:29:application', stdlib.UInt_max, '0')];
            const v1546 = stdlib.mul(v1545, v1338);
            const v1548 = stdlib.div(v1546, v1321);
            let v1550;
            switch (v1534[0]) {
              case 'None': {
                const v1551 = v1534[1];
                v1550 = stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1552 = v1534[1];
                v1550 = v1552;
                
                break;
                }
              }
            const v1553 = stdlib.mul(v1548, v1550);
            const v1554 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1528), null);
            let v1555;
            switch (v1554[0]) {
              case 'None': {
                const v1556 = v1554[1];
                v1555 = v1340;
                
                break;
                }
              case 'Some': {
                const v1557 = v1554[1];
                v1555 = v1557;
                
                break;
                }
              }
            const v1561 = stdlib.sub(v1516, v1553);
            ;
            await stdlib.mapSet(map2, v1528, undefined /* Nothing */);
            const v1564 = 'claimPassed         ';
            null;
            const v1565 = true;
            await txn7.getOutput('Contributors_claimToken', 'v1565', ctc12, v1565);
            const v1571 = stdlib.sub(v1508, stdlib.checkedBigNumberify('./index.rsh:173:35:decimal', stdlib.UInt_max, '1'));
            const cv1507 = v1571;
            const cv1508 = v1545;
            const cv1509 = v1530;
            const cv1515 = v1515;
            const cv1516 = v1561;
            
            v1507 = cv1507;
            v1508 = cv1508;
            v1509 = cv1509;
            v1515 = cv1515;
            v1516 = cv1516;
            
            continue;}
          else {
            const v1579 = 'claimFailed         ';
            null;
            const v1580 = false;
            await txn7.getOutput('Contributors_claimToken', 'v1580', ctc12, v1580);
            const v1586 = v1515[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
            const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:177:41:application', stdlib.UInt_max, '0')];
            const cv1507 = v1508;
            const cv1508 = v1587;
            const cv1509 = v1530;
            const cv1515 = v1515;
            const cv1516 = v1516;
            
            v1507 = cv1507;
            v1508 = cv1508;
            v1509 = cv1509;
            v1515 = cv1515;
            v1516 = cv1516;
            
            continue;}
          
          }
        const v1592 = v1515[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
        const v1593 = v1592[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
        const v1597 = stdlib.sub(v1516, v1593);
        ;
        ;
        const v1604 = v1592[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
        const v1610 = stdlib.sub(v1593, v1604);
        const v1614 = v1592[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
        const v1615 = [v1610, v1604, v1614];
        const v1616 = stdlib.Array_set(v1515, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1615);
        const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
        const v1618 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
        const v1619 = stdlib.sub(v1618, v1604);
        const v1621 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
        const v1623 = v1617[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
        const v1624 = [v1621, v1619, v1623];
        const v1625 = stdlib.Array_set(v1616, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1624);
        undefined /* TokenBurn */;
        const v1626 = v1625[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
        const v1627 = v1626[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
        if (v1627) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }
        
        
        
        }
      else {
        const v1657 = v1253.softCap;
        const v1658 = stdlib.ge(v1338, v1657);
        if (v1658) {
          const v1660 = 'passed              ';
          null;
          const v1662 = stdlib.div(v1348, stdlib.checkedBigNumberify('./index.rsh:183:34:decimal', stdlib.UInt_max, '100'));
          const v1666 = stdlib.sub(v1348, v1662);
          ;
          const txn5 = await (ctc.sendrecv({
            args: [v1245, v1258, v1265, v1321, v1327, v1338, v1339, v1340, v1347, v1666],
            evt_cnt: 0,
            funcNum: 9,
            lct: v1341,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:185:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1669, time: v1668, didSend: v529, from: v1667 } = txn5;
              
              ;
              const v1676 = stdlib.sub(v1666, v1666);
              sim_r.txns.push({
                kind: 'from',
                to: v1327,
                tok: undefined /* Nothing */
                });
              const v1677 = v1347[stdlib.checkedBigNumberify('./index.rsh:188:25:application', stdlib.UInt_max, '0')];
              const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:188:25:application', stdlib.UInt_max, '0')];
              const v1679 = stdlib.div(v1678, stdlib.checkedBigNumberify('./index.rsh:188:38:decimal', stdlib.UInt_max, '100'));
              const v1683 = stdlib.sub(v1676, v1679);
              sim_r.txns.push({
                kind: 'from',
                to: v1245,
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
          const {data: [], secs: v1669, time: v1668, didSend: v529, from: v1667 } = txn5;
          ;
          const v1670 = stdlib.addressEq(v1245, v1667);
          stdlib.assert(v1670, {
            at: './index.rsh:185:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v1676 = stdlib.sub(v1666, v1666);
          ;
          const v1677 = v1347[stdlib.checkedBigNumberify('./index.rsh:188:25:application', stdlib.UInt_max, '0')];
          const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:188:25:application', stdlib.UInt_max, '0')];
          const v1679 = stdlib.div(v1678, stdlib.checkedBigNumberify('./index.rsh:188:38:decimal', stdlib.UInt_max, '100'));
          const v1683 = stdlib.sub(v1676, v1679);
          ;
          const txn6 = await (ctc.sendrecv({
            args: [v1245, v1258, v1265, v1321, v1338, v1339, v1340, v1347, v1678, v1683],
            evt_cnt: 0,
            funcNum: 10,
            lct: v1668,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:192:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1686, time: v1685, didSend: v546, from: v1684 } = txn6;
              
              ;
              const v1690 = v1678;
              const v1691 = v1339;
              const v1692 = v1685;
              const v1698 = v1347;
              const v1699 = v1683;
              
              if (await (async () => {
                const v1703 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
                const v1704 = stdlib.gt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
                const v1705 = v1703 ? v1704 : false;
                
                return v1705;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1775 = v1698[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
                const v1776 = v1775[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
                const v1780 = stdlib.sub(v1699, v1776);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                const v1787 = v1775[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
                const v1793 = stdlib.sub(v1776, v1787);
                const v1797 = v1775[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
                const v1798 = [v1793, v1787, v1797];
                const v1799 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1798);
                const v1800 = v1799[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
                const v1801 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
                const v1802 = stdlib.sub(v1801, v1787);
                const v1804 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
                const v1806 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
                const v1807 = [v1804, v1802, v1806];
                const v1808 = stdlib.Array_set(v1799, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1807);
                stdlib.simTokenBurn(sim_r, v1265, v1787);
                const v1809 = v1808[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
                const v1810 = v1809[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
                if (v1810) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1265);
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
          const {data: [], secs: v1686, time: v1685, didSend: v546, from: v1684 } = txn6;
          ;
          const v1687 = stdlib.addressEq(v1245, v1684);
          stdlib.assert(v1687, {
            at: './index.rsh:192:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1690 = v1678;
          let v1691 = v1339;
          let v1692 = v1685;
          let v1698 = v1347;
          let v1699 = v1683;
          
          while (await (async () => {
            const v1703 = stdlib.gt(v1691, stdlib.checkedBigNumberify('./index.rsh:195:32:decimal', stdlib.UInt_max, '0'));
            const v1704 = stdlib.gt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:57:decimal', stdlib.UInt_max, '0'));
            const v1705 = v1703 ? v1704 : false;
            
            return v1705;})()) {
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc18],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1712], secs: v1714, time: v1713, didSend: v584, from: v1711 } = txn7;
            undefined /* setApiDetails */;
            ;
            const v1717 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1711), null);
            let v1718;
            switch (v1717[0]) {
              case 'None': {
                const v1719 = v1717[1];
                v1718 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1720 = v1717[1];
                v1718 = v1720;
                
                break;
                }
              }
            const v1721 = stdlib.ge(v1699, v1718);
            const v1722 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1711), null);
            let v1723;
            switch (v1722[0]) {
              case 'None': {
                const v1724 = v1722[1];
                v1723 = false;
                
                break;
                }
              case 'Some': {
                const v1725 = v1722[1];
                v1723 = true;
                
                break;
                }
              }
            const v1726 = v1721 ? v1723 : false;
            if (v1726) {
              const v1727 = v1698[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
              const v1728 = v1727[stdlib.checkedBigNumberify('./index.rsh:198:31:application', stdlib.UInt_max, '0')];
              const v1729 = stdlib.mul(v1728, v1338);
              const v1731 = stdlib.div(v1729, v1321);
              let v1733;
              switch (v1717[0]) {
                case 'None': {
                  const v1734 = v1717[1];
                  v1733 = stdlib.checkedBigNumberify('./index.rsh:190:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1735 = v1717[1];
                  v1733 = v1735;
                  
                  break;
                  }
                }
              const v1736 = stdlib.mul(v1731, v1733);
              const v1737 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1711), null);
              let v1738;
              switch (v1737[0]) {
                case 'None': {
                  const v1739 = v1737[1];
                  v1738 = v1340;
                  
                  break;
                  }
                case 'Some': {
                  const v1740 = v1737[1];
                  v1738 = v1740;
                  
                  break;
                  }
                }
              const v1744 = stdlib.sub(v1699, v1736);
              ;
              await stdlib.mapSet(map2, v1711, undefined /* Nothing */);
              const v1747 = 'claimPassed         ';
              null;
              const v1748 = true;
              await txn7.getOutput('Contributors_claimToken', 'v1748', ctc12, v1748);
              const v1756 = stdlib.sub(v1691, stdlib.checkedBigNumberify('./index.rsh:203:52:decimal', stdlib.UInt_max, '1'));
              const cv1690 = v1728;
              const cv1691 = v1756;
              const cv1692 = v1713;
              const cv1698 = v1698;
              const cv1699 = v1744;
              
              v1690 = cv1690;
              v1691 = cv1691;
              v1692 = cv1692;
              v1698 = cv1698;
              v1699 = cv1699;
              
              continue;}
            else {
              const v1762 = 'claimFailed         ';
              null;
              const v1763 = false;
              await txn7.getOutput('Contributors_claimToken', 'v1763', ctc12, v1763);
              const v1769 = v1698[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
              const v1770 = v1769[stdlib.checkedBigNumberify('./index.rsh:207:30:application', stdlib.UInt_max, '0')];
              const cv1690 = v1770;
              const cv1691 = v1691;
              const cv1692 = v1713;
              const cv1698 = v1698;
              const cv1699 = v1699;
              
              v1690 = cv1690;
              v1691 = cv1691;
              v1692 = cv1692;
              v1698 = cv1698;
              v1699 = cv1699;
              
              continue;}
            
            }
          const v1775 = v1698[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v1776 = v1775[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v1780 = stdlib.sub(v1699, v1776);
          ;
          ;
          const v1787 = v1775[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v1793 = stdlib.sub(v1776, v1787);
          const v1797 = v1775[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v1798 = [v1793, v1787, v1797];
          const v1799 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1798);
          const v1800 = v1799[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v1801 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v1802 = stdlib.sub(v1801, v1787);
          const v1804 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v1806 = v1800[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v1807 = [v1804, v1802, v1806];
          const v1808 = stdlib.Array_set(v1799, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1807);
          undefined /* TokenBurn */;
          const v1809 = v1808[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v1810 = v1809[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v1810) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          
          
          }
        else {
          const v1841 = 'failed              ';
          null;
          const txn5 = await (ctc.sendrecv({
            args: [v1245, v1258, v1265, v1339, v1340, v1347, v1348],
            evt_cnt: 0,
            funcNum: 13,
            lct: v1341,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:217:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              stdlib.simMapDupe(sim_r, 2, map2);
              
              const {data: [], secs: v1844, time: v1843, didSend: v659, from: v1842 } = txn5;
              
              ;
              const v1847 = v1348;
              const v1848 = v1339;
              const v1849 = v1843;
              const v1855 = v1347;
              const v1856 = v1348;
              
              if (await (async () => {
                const v1859 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
                const v1860 = stdlib.gt(v1847, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
                const v1861 = v1859 ? v1860 : false;
                
                return v1861;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1923 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
                const v1924 = v1923[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
                const v1928 = stdlib.sub(v1856, v1924);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1245,
                  tok: undefined /* Nothing */
                  });
                const v1935 = v1923[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
                const v1941 = stdlib.sub(v1924, v1935);
                const v1945 = v1923[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
                const v1946 = [v1941, v1935, v1945];
                const v1947 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1946);
                const v1948 = v1947[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
                const v1949 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
                const v1950 = stdlib.sub(v1949, v1935);
                const v1952 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
                const v1954 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
                const v1955 = [v1952, v1950, v1954];
                const v1956 = stdlib.Array_set(v1947, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1955);
                stdlib.simTokenBurn(sim_r, v1265, v1935);
                const v1957 = v1956[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
                const v1958 = v1957[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
                if (v1958) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1265);
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
          const {data: [], secs: v1844, time: v1843, didSend: v659, from: v1842 } = txn5;
          ;
          const v1845 = stdlib.addressEq(v1245, v1842);
          stdlib.assert(v1845, {
            at: './index.rsh:217:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          let v1847 = v1348;
          let v1848 = v1339;
          let v1849 = v1843;
          let v1855 = v1347;
          let v1856 = v1348;
          
          while (await (async () => {
            const v1859 = stdlib.gt(v1848, stdlib.checkedBigNumberify('./index.rsh:220:29:decimal', stdlib.UInt_max, '0'));
            const v1860 = stdlib.gt(v1847, stdlib.checkedBigNumberify('./index.rsh:220:51:decimal', stdlib.UInt_max, '0'));
            const v1861 = v1859 ? v1860 : false;
            
            return v1861;})()) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 15,
              out_tys: [ctc18],
              timeoutAt: undefined /* mto */,
              waitIfNotPresent: false
              }));
            const {data: [v1868], secs: v1870, time: v1869, didSend: v697, from: v1867 } = txn6;
            undefined /* setApiDetails */;
            ;
            const v1873 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1867), null);
            let v1874;
            switch (v1873[0]) {
              case 'None': {
                const v1875 = v1873[1];
                v1874 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1876 = v1873[1];
                v1874 = v1876;
                
                break;
                }
              }
            const v1877 = stdlib.ge(v1856, v1874);
            const v1878 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1867), null);
            let v1879;
            switch (v1878[0]) {
              case 'None': {
                const v1880 = v1878[1];
                v1879 = false;
                
                break;
                }
              case 'Some': {
                const v1881 = v1878[1];
                v1879 = true;
                
                break;
                }
              }
            const v1882 = v1877 ? v1879 : false;
            if (v1882) {
              let v1884;
              switch (v1873[0]) {
                case 'None': {
                  const v1885 = v1873[1];
                  v1884 = stdlib.checkedBigNumberify('./index.rsh:215:55:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1886 = v1873[1];
                  v1884 = v1886;
                  
                  break;
                  }
                }
              const v1887 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1867), null);
              let v1888;
              switch (v1887[0]) {
                case 'None': {
                  const v1889 = v1887[1];
                  v1888 = v1340;
                  
                  break;
                  }
                case 'Some': {
                  const v1890 = v1887[1];
                  v1888 = v1890;
                  
                  break;
                  }
                }
              const v1894 = stdlib.sub(v1856, v1884);
              ;
              await stdlib.mapSet(map2, v1867, undefined /* Nothing */);
              const v1897 = 'refundPassed        ';
              null;
              const v1898 = true;
              await txn6.getOutput('Contributors_claimRefund', 'v1898', ctc12, v1898);
              const v1904 = stdlib.sub(v1848, stdlib.checkedBigNumberify('./index.rsh:228:34:decimal', stdlib.UInt_max, '1'));
              const cv1847 = v1894;
              const cv1848 = v1904;
              const cv1849 = v1869;
              const cv1855 = v1855;
              const cv1856 = v1894;
              
              v1847 = cv1847;
              v1848 = cv1848;
              v1849 = cv1849;
              v1855 = cv1855;
              v1856 = cv1856;
              
              continue;}
            else {
              const v1911 = 'refundFailed        ';
              null;
              const v1912 = false;
              await txn6.getOutput('Contributors_claimRefund', 'v1912', ctc12, v1912);
              const cv1847 = v1856;
              const cv1848 = v1848;
              const cv1849 = v1869;
              const cv1855 = v1855;
              const cv1856 = v1856;
              
              v1847 = cv1847;
              v1848 = cv1848;
              v1849 = cv1849;
              v1855 = cv1855;
              v1856 = cv1856;
              
              continue;}
            
            }
          const v1923 = v1855[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v1924 = v1923[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
          const v1928 = stdlib.sub(v1856, v1924);
          ;
          ;
          const v1935 = v1923[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
          const v1941 = stdlib.sub(v1924, v1935);
          const v1945 = v1923[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v1946 = [v1941, v1935, v1945];
          const v1947 = stdlib.Array_set(v1855, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1946);
          const v1948 = v1947[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v1949 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
          const v1950 = stdlib.sub(v1949, v1935);
          const v1952 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
          const v1954 = v1948[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
          const v1955 = [v1952, v1950, v1954];
          const v1956 = stdlib.Array_set(v1947, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v1955);
          undefined /* TokenBurn */;
          const v1957 = v1956[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
          const v1958 = v1957[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
          if (v1958) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }
          
          }}}
    else {
      const v1990 = v1253.owner;
      const v1994 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0'), v1320);
      ;
      ;
      const v2001 = v1319[stdlib.checkedBigNumberify('./index.rsh:98:28:application', stdlib.UInt_max, '1')];
      undefined /* TokenBurn */;
      undefined /* TokenDestroy */;
      return;
      }
    
    }
  else {
    let v2043 = true;
    let v2044 = v1299;
    let v2050 = v1311;
    let v2051 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      
      return v2043;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 19,
        out_tys: [ctc22],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v2109], secs: v2111, time: v2110, didSend: v900, from: v2108 } = txn4;
      switch (v2109[0]) {
        case 'Contributors_contributed0_770': {
          const v2112 = v2109[1];
          undefined /* setApiDetails */;
          ;
          const v2120 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '0')];
          const v2121 = v2112[stdlib.checkedBigNumberify('./index.rsh:255:11:spread', stdlib.UInt_max, '1')];
          const v2122 = null;
          await txn4.getOutput('Contributors_contributed', 'v2122', ctc0, v2122);
          const v2130 = 'contributed         ';
          null;
          const cv2043 = true;
          const cv2044 = v2110;
          const cv2050 = v2050;
          const cv2051 = v2051;
          
          v2043 = cv2043;
          v2044 = cv2044;
          v2050 = cv2050;
          v2051 = cv2051;
          
          continue;
          break;
          }
        case 'Contributors_creating0_770': {
          const v2164 = v2109[1];
          undefined /* setApiDetails */;
          ;
          const v2184 = v2164[stdlib.checkedBigNumberify('./index.rsh:241:11:spread', stdlib.UInt_max, '0')];
          const v2185 = null;
          await txn4.getOutput('Contributors_creating', 'v2185', ctc0, v2185);
          const v2198 = v2184.id;
          const v2199 = v2184.title;
          const v2200 = v2184.link;
          const v2201 = v2184.description;
          const v2202 = v2184.owner;
          const v2203 = v2184.contractInfo;
          null;
          const cv2043 = true;
          const cv2044 = v2110;
          const cv2050 = v2050;
          const cv2051 = v2051;
          
          v2043 = cv2043;
          v2044 = cv2044;
          v2050 = cv2050;
          v2051 = cv2051;
          
          continue;
          break;
          }
        case 'Contributors_timedOut0_770': {
          const v2216 = v2109[1];
          undefined /* setApiDetails */;
          ;
          const v2257 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '0')];
          const v2258 = v2216[stdlib.checkedBigNumberify('./index.rsh:262:11:spread', stdlib.UInt_max, '1')];
          const v2259 = null;
          await txn4.getOutput('Contributors_timedOut', 'v2259', ctc0, v2259);
          const v2267 = 'timedOut            ';
          null;
          const cv2043 = true;
          const cv2044 = v2110;
          const cv2050 = v2050;
          const cv2051 = v2051;
          
          v2043 = cv2043;
          v2044 = cv2044;
          v2050 = cv2050;
          v2051 = cv2051;
          
          continue;
          break;
          }
        }
      
      }
    const v2268 = v2050[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
    const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:271:19:application', stdlib.UInt_max, '0')];
    const v2273 = stdlib.sub(v2051, v2269);
    ;
    ;
    const v2280 = v2268[stdlib.checkedBigNumberify('./index.rsh:273:24:application', stdlib.UInt_max, '1')];
    const v2286 = stdlib.sub(v2269, v2280);
    const v2290 = v2268[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
    const v2291 = [v2286, v2280, v2290];
    const v2292 = stdlib.Array_set(v2050, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v2291);
    const v2293 = v2292[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
    const v2294 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '1')];
    const v2295 = stdlib.sub(v2294, v2280);
    const v2297 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0')];
    const v2299 = v2293[stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '2')];
    const v2300 = [v2297, v2295, v2299];
    const v2301 = stdlib.Array_set(v2292, stdlib.checkedBigNumberify('./index.rsh:273:12:application', stdlib.UInt_max, '0'), v2300);
    undefined /* TokenBurn */;
    const v2302 = v2301[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '0')];
    const v2303 = v2302[stdlib.checkedBigNumberify('./index.rsh:274:21:application', stdlib.UInt_max, '2')];
    if (v2303) {
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
    impure: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte`, `_Contributors_claimToken8()byte`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte`, `Contributors_claimToken()byte`, `Contributors_contribute(uint64)uint64`, `Contributors_contributed(uint64,uint64)byte[0]`, `Contributors_creating((uint64,byte[20],byte[150],byte[180],address,uint64))byte[0]`, `Contributors_timedOut(uint64,uint64)byte[0]`, `_Contributors_claimToken12()byte`, `_Contributors_claimToken8()byte`]
    },
  appApproval: `BiA5AAEgCAMRKDAqDALeA7QBYAY4eQpkBX8WjgT+A4YElgSeBBAV/QL8AyvLsuWKCZzz040LrP3M+wuM9vbQCYKc4uUGvvGmswf+Apa52M8FExu/BMcE7wT3BIgFaQ1AgQELWJkB6gIUoI0GJgsBAAEBAAECAQMBBAEFGLUOO3JjbGFpbVBhc3NlZAAAAAAAAAAAABi1DjtyY2xhaW1GYWlsZWQAAAAAAAAAAAAI//////////8YtQ47cnBhc3NlZAAAAAAAAAAAAAAAAAAAIjUAMRhBFgkqZEkiWzUBJVs1AjEZIxJBAAoxACghH69mQhXWNhoAF0lBALYiNQQjNQZJISAMQABRSSEhDEAAK0khIgxAABohIhJENAFJIQkMQAAHIQkSREIAKyUSREIAfSEhEkQ2GgFCAoFJISMMQAAQISMSRDYaATX/KTT/UEIAjSEgEkQqQgb8SSEkDEAAN0khJQxAABghJRJENhoBNhoCUDX/KzT/UCEmr1BCAF8hJBJENhoBNhoCUDX/KDT/UCEmr1BCAEdJIScMQAAIIScSRCpCBM2BoMbbIxJEKkIJbjYaAhc1BDYaAzYaARdJgQkMQAlFSYEPDEAGJUkhBQxAAeBJISgMQAFBISgSRCEpNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/lcoETX9gTlbNfxJNQU1+4AEnyKd1DT7ULA0+yJVSSMMQACuSSEKDEAATiEKEkQ0+1cBEDX6gAgAAAAAAAAI07AqNQeAGFCEq7B0aW1lZE91dAAAAAAAAAAAAAAAADT6VwAIUDT6VwgIULA0/zT+IzIGNP00/EITa0g0+yOBjgNYNfo0+jX5gAgAAAAAAAAIibAqNQeABAWsu0c0+VcACFA0+VcIFFA0+VccllA0+VeytFA0+YHmAiRYUDT5gYYDJVhQsDT/NP4jMgY0/TT8QhMSSDT7VwEQNfqACAAAAAAAAAhKsCo1B4AYUISrsGNvbnRyaWJ1dGVkAAAAAAAAAAAANPpXAAhQNPpXCAhQsDT/NP4jMgY0/TT8QhLHIQUSRCEVNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUCcGZFBJNQNJVwAgNf8hFls1/oAEAIHSjrAyBjT+D0Q0/zEAEkQ0/zQDJCELWDQDIRdbNAMhGFs0/jQDIRlbNAMhGiRYNAOBvgQjWBc0AyEqWzQDIStbNAOBzwQkWDIGNAMhLFs0AyEtIQVYNAMhLltCDe9JIRsMQAK4SCEVNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUCcGZFBJNQNJSkpKSklXACA1/yQhC1g1/iEXWzX9IRhbNfwhFls1+yEZWzX6IRokWDX5ISpbNfghK1s19yEsWzX2IS0hBVg19Uk1BTX0gASH0Gf9NPRQsDIGNPsMRDT0F0k18yINRDQDIS5bNPMINfI084gSvIAIAAAAAAAABWk08hZQsDTyFjUHMQCIEpRXKgFJNfAiVUAABiI18UIABiM18UIAADTxQQBvMQCIEnNXIQlJNe8iVUAABiI18EIADDTvI1tJNe418EIAADEAKDEAiBJOKTTwFlA170lXACE071BMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/iEMWw9NIxI0+DT3IwgxADIGNPY09TTyQgytNP6B2gJbNfA08zTwDUEAdDEAKDEAiBHxKTEAUDXvVyEKNO9MUGYxACgxAIgR2yMhCExWZjEAKDEAiBHNKTTwFlA170lXACE071BMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/iEMWw9NIxI0+DTwCDT3IwgxADIGNPY09TTyQgwpNP6B4gJbNe808zTvDEEAdDEAKDEAiBFtKTEAUDXuVyEKNO5MUGYxACgxAIgRVyMhCExWZjEAKDEAiBFJKTTvFlA17klXACE07lBMVyoBUGY0/zT+NP00/DT7NPo0+SMiNPg08wg0/iEMWw9NIxI0+DTvCDT3IwgxADIGNPY09TTyQgulMQAoMQCIEPkpMQBQNe5XIQo07kxQZjEAKDEAiBDjIyEITFZmMQAoMQCIENUpNPMWUDXuSVcAITTuUExXKgFQZjT4NPMINe40/zT+NP00/DT7NPo0+SMiNO40/iEMWw9NIxI07jT3IwgxADIGNPY09TTyQgswSCEcNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8kWzX+IQZbNf1XMCA1/IFQWzX7V1gRNfohL1s1+Uk1BTX4gAS2aNLzNPhQsDEAiBA7VyEJSTX3IlVAAAYiNfZCAAw09yNbSTX1NfZCAAAxAIgQGVcqAUk19CJVQAAGIjX1QgAGIzX1QgAANPk09g809RBBAKc09yJVQAAGIjX0QgAMNPcjW0k18zX0QgAAMQCID9lXACFJNfIiVUAABzT8NfNCAA008lcBIEk18TXzQgAANPk09Ak18rEisgE09LIII7IQNPOyB7MxACgxAIgPmyIhCExWZoAYtQ47cnJlZnVuZFBhc3NlZAAAAAAAAAAANP4WULCACQAAAAAAAAdqAbApNQc0/zT+NP00/DTyNPsjCTIGNPo08kINboAYtQ47cnJlZnVuZEZhaWxlZAAAAAAAAAAANP4WULCACQAAAAAAAAd4ALAoNQc0/zT+NP00/DT5NPsyBjT6NPlCDStJIQkMQAHYSSEwDEAAVSEwEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IS9bNf6ABCKflwOwNP8xABJENP80AyRbNAMhBls0A1c4IDT+NAMhB1syBjQDV1gRNP5CDMhIIRs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQZbNf0hB1s1/CEPWzX7V0AgNfohDVs1+VdoETX4IRBbNfdJNQU19oAE5jJtFDT2ULAxAIgOS1chCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCIDilXKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQClNPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNPwKNPELNfAxAIgN01cAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezMQAoMQCIDZwiIQhMVmYnBzT+FlCwgAkAAAAAAAAG1AGwKTUHNP80/jT9NPw0+zT6NPI0+SMJMgY0+DT3NPAJQgqnJwg0/hZQsIAJAAAAAAAABuMAsCg1BzT/NP40/TT8NPs0+jT4VwARIls0+TIGNPg090IKc0khEQxAAGIhERJEIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATTRHMjsDT/MQASRDT/NAMkWzQDIQZbNAMhB1s0AyEPWzQDV0ggNAMhEFs0AyExWzIGNANXaBE0AyEyW0IKCkghMzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBls1/SEHWzX8ITRbNfshDVs1+ldoIDX5V4gRNfghNVs194AEogVmjrA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iESCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEJNQEyBjUCQguiSSEEDEAD2UkhDgxAAeRJJQxAAXxIIRE0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQZbNf0hB1s1/CEPWzX7V0AgNfohDVs1+VdoETX4IRBbNfdJNQU19oAER+SvJzT2ULAxAIgLgVchCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCIC19XKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQClNPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNPwKNPELNfAxAIgLCVcAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezMQAoMQCICtIiIQhMVmYnBzT+FlCwgAkAAAAAAAAGHQGwKTUHNP80/jT9NPw0+zT6NPkjCTTyMgY0+DT3NPAJQgcEJwg0/hZQsIAJAAAAAAAABiwAsCg1BzT/NP40/TT8NPs0+jT5NPhXABEiWzIGNPg090IG0CEOEkQhDjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywNP8xABJENP80AyRbNAMhBls0AyEHWzQDIQ9bNANXSCA0AyEQWzQDITFbMgY0A1doETQDITJbQgZuSSETDEAA0UghEzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/yRbNf4hBls1/SEHWzX8ITRbNfshDVs1+ldoIDX5V4gRNfghNVs194AEzJmSXLA0/zEAEkSxIrIBNPeyCCOyEDQDVzggsgezNPhXABEiW0k19iESCjX1NPdJCTT1CTX0sSKyATT1sggjshA0/7IHszT/NP4WUDT9FlA0/BZQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfwpnSCEONQEyBjUCQgjYIQQSRCEENAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0lKSVcAIDX/JCELWDX+IRhbNf0hFls1/CEaIQVYNfuABKdlxLSwNP8xABJENPtXABFJNfoiWzX5NP6BigNbNfg0+TT4DUEAcDT5NPgJNfc0/iE2JFg19rEisgE097III7IQNPayB7OABCiHaIk0/RZQNP6BmgMhN1hQNP5XxJZQNP5XALRQNPZQNAMhFyVYULA0/zT+NP00/DQDga8EWzT4NPYjIiI0/zIGNAMhGVs0+yI09wlCAu6xIrIBNPmyCCOyEDT+ITYkWLIHs7EisgEiNPkJsggjshA0/7IHs7EisgEhBLIQNPyyIbNCB6ZJIwxAAnlJIQoMQADwSCEKNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0lKSlcAIDX/gSEhC1g1/oH/A1s1/YGHBFs1/IGPBFs1+4GXBCEFWDX6gARBsUBNsDT6VwARSTX5JVs1+DT5Ils0+AgWNPgWUDT5VxABUDX3NPg0+4gHsjT/MQASRDQDVyABF0EAWDIGITcINfY0/zT+UDT9FlA0/BZQNPsWUDIGFlA091A09hZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEdIRRYZycFSwEhHoE7WGdIIQQ1ATIGNQJCBtI0/zT7IzIGNPciQgX7SCM0ARJENARJIhJMNAISEUQoZEk1A0lXABE1/1cRIDX+STUFSUlXAAEXNf0jIQtYNfyB3wNbNfuABPilm4g0/RZRBwhQNPxQNPsWULA0/jEAEkQ0/IG8AVs1+oAYtQ47cmNyZWF0ZWQAAAAAAAAAAAAAAAAANPoWULAhOIgGp7EisgEhBLIQgf///////////wGyIiEOsiM0/IHOAyVYsiU0/IGuAyRYsiYhDa+yJzIDsigyCrIps7Q8NfmACAAAAAAAAATwNPkWULA0+TX4NP9XABE19ycJNPdXCAhQNPdXEAFQSTX2VwARSTX1VwAIJwlQNPVXEAFQSTX0VwARSTXzVwAINPNXCAhQKFA18oAYtQ47cnRva2VuQ3JlYXRlZAAAAAAAAAAANPyB1gMlWFCwNP40/RZRBwhQNPxQNPsWUDT6FlA0+BZQNPJQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEdIRRYZycFSwEhHoEsWGdIIQo1ATIGNQJCBUNIITiIBZ4iNAESRDQESSISTDQCEhFEgARfDav6sCEFrzX/NP8xAFAoSwFXADFnSCM1ATIGNQJCBQo1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE0/TT1DjT4EEEAdTTxNPJQNPMWUDT0FlA09RZQNPYWUDT3UDT4FlEHCFA0+RZQNPoWUDT7UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/n9nJwRLASEdIRRYZycFSwEhHiEUWGcnBksBgfsEIRxYZ0ghFTUBMgY1AkIEbCMiNPk08iEMWw9NIhJBAGInCjTzFlCwNP8hEgo18DT/NPAJNe+xIrIBNPCyCCOyEDTxsgezNPE08xZQNPQWUDT2FlA091A0+RZQNPoWUDT7UDT+UDTvFlAoSwFXAH9nKUsBV38iZ0ghEzUBMgY1AkID+jT5NPKBkgNbD0EAYicKNPMWULA0/yESCjXwNP808Ak177EisgE08LIII7IQNPGyB7M08TTzFlA09BZQNPYWUDT3UDT5FlA0+hZQNPtQNP5QNO8WUChLAVcAf2cpSwFXfyJnSCEzNQEyBjUCQgOMgBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA08xZQsDTxNPMWUDT0FlA0+hZQNPtQNP5QNP8WUChLAVcAcWdIIQU1ATIGNQJCA0I1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwiDTT7Ig0QQQA6NPU09hZQNPcWUDT4FlA0+RZQNPpQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38CZ0ghETUBMgY1AkIC5jT+VwARSTX0Ils187EisgE087III7IQNPWyB7OxIrIBNP808wmyCCOyEDT1sgezNPQlWzXyNPM08gkWNPIWUDT0VxABUEk18VcAEUk18FcACDTwJVs08gkWUDTwVxABUFcAEVcQARdBAANCAl2xIrIBIQSyEDT3siGzQgJNNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8Ig00+yINEEEAOjT1NPYWUDT3FlA0+BZQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIIRs1ATIGNQJCAg00/lcAEUk19CJbNfOxIrIBNPOyCCOyEDT1sgezsSKyATT/NPMJsggjshA09bIHszT0JVs18jTzNPIJFjTyFlA09FcQAVBJNfFXABFJNfBXAAg08CVbNPIJFlA08FcQAVBXABFXEAEXQQADQgGEsSKyASEEshA097Ihs0IBdDX/Nf41/TX8Nfs1+jX5Nfg19zT8Ig00+yINEEEAKzT3NPgWUDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAcWdIIRw1ATIGNQJCAUc0/lcAEUk19iJbNfWxIrIBNPWyCCOyEDT3sgezsSKyATT/NPUJsggjshA097IHszT2JVs19DT1NPQJFjT0FlA09lcQAVBJNfNXABFJNfJXAAg08iVbNPQJFlA08lcQAVBXABFXEAEXQQADQgC+sSKyASEEshA0+bIhs0IArjX/Nf41/TX8Nfs1+jT8QQAgNPo0+xZQNP5QNP8WUChLAVcAQWdIISk1ATIGNQJCAJk0/lcAEUk1+SJbNfixIrIBNPiyCCOyEDT6sgezsSKyATT/NPgJsggjshA0+rIHszT5JVs19zT4NPcJFjT3FlA0+VcQAVBJNfZXABFJNfVXAAg09SVbNPcJFlA09VcQAVBXABFXEAEXQQADQgAQsSKyASEEshA0+7Ihs0IAADEZIRMSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBBzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghH6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBCBBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 6,
  stateSize: 656,
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                "name": "v1252",
                "type": "bool"
              },
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
                    "internalType": "struct T9",
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
                    "internalType": "struct T10",
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
                    "name": "_privateSaleAmt",
                    "type": "uint256"
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
                    "internalType": "struct T8",
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
                    "internalType": "struct T11",
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
                    "internalType": "struct T12",
                    "name": "_tokenSymbol",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tokenid",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1253",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1254",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
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
        "internalType": "struct T7",
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
                "name": "v1712",
                "type": "bool"
              }
            ],
            "internalType": "struct T41",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T42",
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
        "internalType": "struct T7",
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
                "name": "v1868",
                "type": "bool"
              }
            ],
            "internalType": "struct T47",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T48",
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
                "internalType": "struct T49",
                "name": "v1372",
                "type": "tuple"
              }
            ],
            "internalType": "struct T50",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T51",
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
        "internalType": "struct T7",
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
                    "internalType": "struct T53",
                    "name": "_Contributors_contributed0_770",
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
                            "internalType": "struct T8",
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
                            "internalType": "struct T10",
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
                            "internalType": "struct T9",
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
                        "internalType": "struct T54",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T55",
                    "name": "_Contributors_creating0_770",
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
                    "internalType": "struct T53",
                    "name": "_Contributors_timedOut0_770",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T56",
                "name": "v2109",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                "name": "v1529",
                "type": "bool"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
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
        "internalType": "struct T7",
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
    "name": "_reach_oe_v1264",
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
    "name": "_reach_oe_v1385",
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
    "name": "_reach_oe_v1565",
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
    "name": "_reach_oe_v1580",
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
    "name": "_reach_oe_v1748",
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
    "name": "_reach_oe_v1763",
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
    "name": "_reach_oe_v1898",
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
    "name": "_reach_oe_v1912",
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
    "name": "_reach_oe_v2122",
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
    "name": "_reach_oe_v2185",
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
    "name": "_reach_oe_v2259",
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
        "internalType": "struct T8",
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
        "internalType": "struct T10",
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
        "internalType": "struct T9",
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
        "internalType": "struct T8",
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
        "internalType": "struct T10",
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
        "internalType": "struct T9",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
            "internalType": "struct T8",
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
            "internalType": "struct T10",
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
            "internalType": "struct T9",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1252",
                "type": "bool"
              },
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
                    "internalType": "struct T9",
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
                    "internalType": "struct T10",
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
                    "name": "_privateSaleAmt",
                    "type": "uint256"
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
                    "internalType": "struct T8",
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
                    "internalType": "struct T11",
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
                    "internalType": "struct T12",
                    "name": "_tokenSymbol",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tokenid",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1253",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1254",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
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
        "internalType": "struct T7",
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
                "name": "v1712",
                "type": "bool"
              }
            ],
            "internalType": "struct T41",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T42",
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
        "internalType": "struct T7",
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
                "name": "v1868",
                "type": "bool"
              }
            ],
            "internalType": "struct T47",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T48",
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
                "internalType": "struct T49",
                "name": "v1372",
                "type": "tuple"
              }
            ],
            "internalType": "struct T50",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T51",
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
        "internalType": "struct T7",
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
                    "internalType": "struct T53",
                    "name": "_Contributors_contributed0_770",
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
                            "internalType": "struct T8",
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
                            "internalType": "struct T10",
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
                            "internalType": "struct T9",
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
                        "internalType": "struct T54",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T55",
                    "name": "_Contributors_creating0_770",
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
                    "internalType": "struct T53",
                    "name": "_Contributors_timedOut0_770",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T56",
                "name": "v2109",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                "name": "v1529",
                "type": "bool"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T36",
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
        "internalType": "struct T7",
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
  Bytecode: `0x6080604052604051620090ad380380620090ad833981016040819052620000269162000287565b6000805543600355620000386200013b565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415600762000111565b620000b962000172565b6020808301518252338282015260016000819055439055604051620000e191839101620002f2565b604051602081830303815290604052600290805190602001906200010792919062000194565b5050505062000393565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200016d62000223565b905290565b60405180604001604052806200018762000223565b8152600060209091015290565b828054620001a29062000356565b90600052602060002090601f016020900481019282620001c6576000855562000211565b82601f10620001e157805160ff191683800117855562000211565b8280016001018555821562000211579182015b8281111562000211578251825591602001919060010190620001f4565b506200021f92915062000270565b5090565b60405180602001604052806001905b62000259604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002325790505090565b5b808211156200021f576000815560010162000271565b6000604082840312156200029a57600080fd5b604080519081016001600160401b0381118282101715620002cb57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002e657600080fd5b60208201529392505050565b815160808201908260005b600181101562000339578251805183526020808201518185015260409182015115159184019190915290920191606090910190600101620002fd565b505050602092909201516001600160a01b03166060919091015290565b600181811c908216806200036b57607f821691505b602082108114156200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b618d0a80620003a36000396000f3fe608060405260043610620001c75760003560e01c8063805367bf11620000f3578063a93a2bdd116200008f578063c79800371162000069578063c7980037146200042f578063cadc2e7a1462000446578063de736998146200047a578063e00acef1146200049157005b8063a93a2bdd14620003d9578063ab53f2c614620003f0578063c5cfa72e146200041857005b80638e31476911620000cd5780638e314769146200037d578063972b444814620003945780639c5d7f1e14620003ab5780639f25181014620003c257005b8063805367bf1462000328578063817d57f3146200033257806383230757146200036657005b80636172e590116200016357806373b4522c116200013d57806373b4522c14620002d95780637e3f1eed14620002f05780637eea518c14620003075780637f34cc90146200031e57005b80636172e59014620002a15780636272318a14620002b85780636d70090614620002cf57005b80633ccb408211620001a15780633ccb408214620002455780634f7b8708146200025c5780635471c5a814620002735780635bc7f724146200028a57005b80631e93b0f114620001d157806339b777f014620001f65780633bc5b7bf146200021157005b36620001cf57005b005b348015620001de57600080fd5b506003545b6040519081526020015b60405180910390f35b62000200620004a8565b6040519015158152602001620001ed565b3480156200021e57600080fd5b50620002366200023036600462005f52565b6200058f565b604051620001ed919062005f9b565b620001cf6200025636600462005fee565b620005aa565b620001cf6200026d36600462005fee565b620005d4565b620001cf6200028436600462005fee565b620005fa565b620002006200029b3660046200600d565b62000620565b62000200620002b23660046200600d565b6200066c565b620001cf620002c936600462005fee565b620006bb565b62000200620006e1565b620001cf620002ea36600462005fee565b62000713565b620001cf6200030136600462006030565b62000739565b620001cf6200031836600462005fee565b6200075f565b6200020062000785565b62000200620007ba565b3480156200033f57600080fd5b50620003576200035136600462005f52565b620007ef565b604051620001ed919062006044565b3480156200037357600080fd5b50600154620001e3565b620001cf6200038e36600462005fee565b62000804565b620001e3620003a536600462006078565b6200082a565b620001cf620003bc36600462006092565b62000860565b620001cf620003d336600462005fee565b62000886565b620001cf620003ea36600462005fee565b620008ac565b348015620003fd57600080fd5b5062000408620008d2565b604051620001ed92919062006103565b6200020062000429366004620064c2565b62000977565b620001cf6200044036600462005fee565b620009b8565b3480156200045357600080fd5b506200046b6200046536600462005f52565b620009de565b604051620001ed9190620064e2565b620001cf6200048b36600462005fee565b620009f3565b620001cf620004a236600462005fee565b62000a19565b6000805460081480620004bd5750600054600c145b620004c757600080fd5b600054600814156200053f57306001600160a01b031663805367bf6040518163ffffffff1660e01b81526004016020604051808303816000875af115801562000514573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200053a919062006530565b905090565b600054600c14156200058c57306001600160a01b0316637f34cc906040518163ffffffff1660e01b81526004016020604051808303816000875af115801562000514573d6000803e3d6000fd5b90565b62000599620052e1565b620005a48262000a3f565b92915050565b620005b462005304565b620005d0620005c936849003840184620065af565b8262000b12565b5050565b620005de62005304565b620005d0620005f336849003840184620065af565b8262001161565b6200060462005304565b620005d06200061936849003840184620065ce565b826200171c565b60006200062c62005348565b6020818101805151600090528051518201518690525151810151018390526200065462005304565b620006608282620018e8565b60a00151949350505050565b60006200067862005348565b602081810180515160029052805151606090810151879052905151015101839052620006a362005304565b620006af8282620018e8565b60e00151949350505050565b620006c562005304565b620005d0620006da368490038401846200660b565b8262001d0e565b6000620006ed62005369565b6020810151600090526200070062005304565b6200070c828262001161565b5192915050565b6200071d62005304565b620005d06200073236849003840184620065ce565b8262002520565b6200074362005304565b620005d06200075836849003840184620066d4565b8262002925565b6200076962005304565b620005d06200077e36849003840184620065ce565b8262002ddd565b60006200079162005369565b602081015160009052620007a462005304565b620007b08282620030d4565b6060015192915050565b6000620007c662005369565b602081015160009052620007d962005304565b620007e5828262000b12565b6040015192915050565b620007f9620052e1565b620005a48262003715565b6200080e62005304565b620005d06200082336849003840184620065ce565b82620037d5565b60006200083662005394565b6020810151518390526200084962005304565b62000855828262001d0e565b608001519392505050565b6200086a62005304565b620005d06200087f368490038401846200686c565b82620018e8565b6200089062005304565b620005d0620008a536849003840184620065ce565b8262003a8c565b620008b662005304565b620005d0620008cb36849003840184620065af565b82620030d4565b600060606000546002808054620008e9906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462000917906200693b565b8015620009685780601f106200093c5761010080835404028352916020019162000968565b820191906000526020600020905b8154815290600101906020018083116200094a57829003601f168201915b50505050509050915091509091565b60006200098362005348565b6020810180515160019052515160400151839052620009a162005304565b620009ad8282620018e8565b60c001519392505050565b620009c262005304565b620005d0620009d736849003840184620065ce565b8262003cc3565b620009e8620052e1565b620005a48262003ea4565b620009fd62005304565b620005d062000a1236849003840184620065ce565b8262003f5e565b62000a2362005304565b620005d062000a3836849003840184620065ce565b8262004215565b62000a49620052e1565b60016001600160a01b03831660009081526004602052604090205460ff16600181111562000a7b5762000a7b62005f72565b141562000b02576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111562000ac05762000ac062005f72565b600181111562000ad45762000ad462005f72565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b62000b24600a60005414601e620043f6565b815162000b4290158062000b3a57508251600154145b601f620043f6565b60008080556002805462000b56906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462000b84906200693b565b801562000bd55780601f1062000ba95761010080835404028352916020019162000bd5565b820191906000526020600020905b81548152906001019060200180831162000bb757829003601f168201915b505050505080602001905181019062000bef919062006ab4565b905062000bfb620053c2565b7f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba5448338560405162000c2e92919062006ad4565b60405180910390a162000c443415601d620043f6565b62000c4f3362003ea4565b81526000815151600181111562000c6a5762000c6a62005f72565b141562000c7e576000602082015262000cb2565b6001815151600181111562000c975762000c9762005f72565b141562000cb257805160409081015190820181905260208201525b600062000cbf3362003715565b51600181111562000cd45762000cd462005f72565b141562000ce8576000606082015262000d19565b600162000cf53362003715565b51600181111562000d0a5762000d0a62005f72565b141562000d1957600160608201525b8060200151826101000151101562000d3357600062000d39565b80606001515b1562001032576000815151600181111562000d585762000d5862005f72565b141562000d6c576000608082015262000d9f565b6001815151600181111562000d855762000d8562005f72565b141562000d9f5780516040015160a0820181905260808201525b8060800151826060015183608001518460e0015160006001811062000dc85762000dc862006aff565b60200201515162000dda919062006b2b565b62000de6919062006b4d565b62000df2919062006b2b565b60c0820152600062000e043362000a3f565b51600181111562000e195762000e1962005f72565b141562000e395760a08201516001600160a01b031660e082015262000e88565b600162000e463362000a3f565b51600181111562000e5b5762000e5b62005f72565b141562000e885762000e6d3362000a3f565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f1935050505015801562000eca573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516a18db185a5b54185cdcd95960aa1b90525190840151915160008051602062008cb58339815191529262000f24929162006b70565b60405180910390a1604051600181527f252e3f10778e93eb1e3010cc200a556a941f28869c4bccfd68bb6fc4ffffe6fa9060200160405180910390a16001602084015262000f716200545a565b825181516001600160a01b039182169052602080850151835190910152604080850151835190831691015260608085015183519091015260808085015183519091015260a0808501518351921691015260c083015162000fd49060019062006b89565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c082015161010084015162001017919062006b89565b6020820151608001526200102b816200441d565b506200115b565b610140810180516a18db185a5b51985a5b195960aa1b905251602083015160405160008051602062008cb5833981519152926200107192909162006b70565b60405180910390a1604051600081527f4103fc4f0bceac1b6d59c47eac5b63db02cf6e1d00ac4ea071af4ad83f2d39759060200160405180910390a160006020840152620010be6200545a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e0880180515151825190950194909452805143930192909252915181519092019190915261010085015190519091015262001159816200441d565b505b50505050565b620011736015600054146030620043f6565b8151620011919015806200118957508251600154145b6031620043f6565b600080805560028054620011a5906200693b565b80601f0160208091040260200160405190810160405280929190818152602001828054620011d3906200693b565b8015620012245780601f10620011f85761010080835404028352916020019162001224565b820191906000526020600020905b8154815290600101906020018083116200120657829003601f168201915b50505050508060200190518101906200123e919062006ba3565b90506200124a620054a4565b7fc385b531bfdb596e9c4d4fba16778429b84fe13e45047887fd4a68f24be2836d33856040516200127d92919062006ad4565b60405180910390a1620012933415602f620043f6565b6200129e3362003ea4565b815260008151516001811115620012b957620012b962005f72565b1415620012cd576000602082015262001301565b60018151516001811115620012e657620012e662005f72565b14156200130157805160409081015190820181905260208201525b60006200130e3362003715565b51600181111562001323576200132362005f72565b141562001337576000606082015262001368565b6001620013443362003715565b51600181111562001359576200135962005f72565b14156200136857600160608201525b80602001518260c0015110156200138157600062001387565b80606001515b15620016105760008151516001811115620013a657620013a662005f72565b1415620013ba5760006080820152620013ed565b60018151516001811115620013d357620013d362005f72565b1415620013ed5780516040015160a0820181905260808201525b6000620013fa3362000a3f565b5160018111156200140f576200140f62005f72565b14156200142f5760608201516001600160a01b031660c08201526200147d565b60016200143c3362000a3f565b51600181111562001451576200145162005f72565b14156200147d57620014633362000a3f565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c0015162001493919062006b89565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620014da573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516b1c99599d5b9914185cdcd95960a21b90525190840151915160008051602062008cb58339815191529262001535929162006b70565b60405180910390a1604051600181527f3d3b102553941c564a07aa3184c9e24296fb47183da5466912450f058ccdc7d19060200160405180910390a1600183526200157f62005521565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915261010083015190820151526080830151620015d79060019062006b89565b602080830180519091019190915280514360409091015260a08401518151606001526101008301519051608001526200102b81620046dc565b610140810180516b1c99599d5b9911985a5b195960a21b905251602083015160405160008051602062008cb5833981519152926200165092909162006b70565b60405180910390a1604051600081527ff6f63e4509f0c531870ca8380c5aa4b834e8a8ebfb74335ca7ac758855c9754c9060200160405180910390a1600083526200169a62005521565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a08701518251909401939093529151915101526200115981620046dc565b6200172e601160005414602d620043f6565b81516200174c9015806200174457508251600154145b602e620043f6565b60008080556002805462001760906200693b565b80601f01602080910402602001604051908101604052809291908181526020018280546200178e906200693b565b8015620017df5780601f10620017b357610100808354040283529160200191620017df565b820191906000526020600020905b815481529060010190602001808311620017c157829003601f168201915b5050505050806020019051810190620017f9919062006c35565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f790076429833846040516200182e92919062006caf565b60405180910390a1620018443415602b620043f6565b80516200185e906001600160a01b03163314602c620043f6565b6200186862005521565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a0860151835190940193909352519051909101526200115b81620046dc565b620018fa601b60005414603f620043f6565b8151620019189015806200191057508251600154145b6040620043f6565b6000808055600280546200192c906200693b565b80601f01602080910402602001604051908101604052809291908181526020018280546200195a906200693b565b8015620019ab5780601f106200197f57610100808354040283529160200191620019ab565b820191906000526020600020905b8154815290600101906020018083116200198d57829003601f168201915b5050505050806020019051810190620019c5919062006cd7565b9050620019d162005552565b7f0358519de19804342fe654a88182e30bcc73fe91fa1b81787f096a342cdf2ada338560405162001a0492919062006dc4565b60405180910390a1600060208501515151600281111562001a295762001a2962005f72565b141562001b5957602080850151510151815262001a493415603c620043f6565b604051600081527f0fbdb69a941e4ae3a8075fcd54209e7c2e73b335328863f887c2123d8ae7a6da9060200160405180910390a1600060a0840152602080820180516a18dbdb9d1c9a589d5d195960aa1b905251825180519201516040517ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf39362001af29392909192516001600160601b03191683526020830191909152604082015260600190565b60405180910390a162001b04620055ae565b825181516001600160a01b0391821690526020808501518351921691810191909152808201805160019052805143920191909152604080850151825190910152606080850151915101526200102b8162004790565b600160208501515151600281111562001b765762001b7662005f72565b141562001c28576020840151516040908101519082015262001b9b3415603d620043f6565b604051600081527fbc8a57b03e556e57b40d9bff249fba78fa29950b270697a94e9e3e6dddccc5519060200160405180910390a1600060c08401526040808201515180516020820151828401516060840151608085015160a09095015195517f5a31e291c4809d043f9e9d4219376d8d7ffd40f7d224c6f958ce7758458b194d9662001af2969162006ea4565b600260208501515151600281111562001c455762001c4562005f72565b14156200115b576020840151516060908101519082015262001c6a3415603e620043f6565b604051600081527f583723a9d561676b00cfcdab5a1c2f132e70652bfd734b1f8260620fc6724e049060200160405180910390a1600060e0840152608081018051671d1a5b595913dd5d60c21b90525160608083015180516020918201516040805195516001600160601b031916865292850191909152908301527ff1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf3910162001af2565b62001d206016600054146034620043f6565b815162001d3e90158062001d3657508251600154145b6035620043f6565b60008080556002805462001d52906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462001d80906200693b565b801562001dd15780601f1062001da55761010080835404028352916020019162001dd1565b820191906000526020600020905b81548152906001019060200180831162001db357829003601f168201915b505050505080602001905181019062001deb919062007118565b905062001e226040518060a00160405280600081526020016000151581526020016000815260200160008152602001600081525090565b62001e35826080015143106036620043f6565b60408051338152855160208083019190915286015151518183015290517faebca52b942863fd6d4f05a82294448179986ce7906a1e3170e3cc82bb1d56199181900360600190a16020840151515162001e929015156032620043f6565b602084015151516101a083015162001eab919062007217565b81526020840151515162001ec39034146033620043f6565b80516040519081527f4525458a2051c2394749567e375a77a76847cf4dcf131ddf726032d9c42b902a9060200160405180910390a180516080840152600062001f0c3362003715565b51600181111562001f215762001f2162005f72565b141562001f35576000602082015262001f66565b600162001f423362003715565b51600181111562001f575762001f5762005f72565b141562001f6657600160208201525b8060200151156200212357600062001f7e3362003ea4565b51600181111562001f935762001f9362005f72565b141562001fa7576000604082015262001fed565b600162001fb43362003ea4565b51600181111562001fc95762001fc962005f72565b141562001fed5762001fdb3362003ea4565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff191660019081178255918301519101556200201c620055d9565b825181516001600160a01b039182169052602080850180518451830152604080870151855190910152606080870151855190851691015260808087015185519091015260a08087015185519091015260c080870151855194169301929092529051810151908601515151610100850151600192916200209b9162007217565b1015620020aa576001620020ad565b60005b602083810180519290931490915261010085015191510152610120830151620020d99060019062007217565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e001526200102b81620049b7565b60208083015160800151908501515151111562002277573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160800151910155620021a5620055d9565b825181516001600160a01b039182169052602080850180518451830152604080870151855190910152606080870151855190851691015260808087015185519091015260a08087015185519091015260c08087015185519416930192909252905181015190860151515161010085015160019291620022249162007217565b10156200223357600162002236565b60005b602083810151919092149052830151608001516101008401516200225b919062007217565b6020808301510152610120830151620020d99060019062007217565b60208083015160a001519085015151511015620023af573360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff1916831781559084015160a00151910155620022f9620055d9565b825181516001600160a01b039182169052602080850180518451830152604080870151855190910152606080870151855190851691015260808087015185519091015260a08087015185519091015260c08087015185519416930192909252905181015190860151515161010085015160019291620023789162007217565b1015620023875760016200238a565b60005b60208381015191909214905283015160a001516101008401516200225b919062007217565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560068252808320805462ff00ff19168517905560058252909120805460ff191683178155908601515151910181905561010083015162002422919062007217565b608082015262002431620055d9565b825181516001600160a01b0391821690526020808501805184518301526040808701518551909101526060808701518551908516910152608080870151855182015260a08088015186519091015260c08088015186519516940193909352510151908301516001911115620024a8576001620024ab565b60005b6020838101805192909314909152608084015191510152610120830151620024d69060019062007217565b60208201805160400191909152805133606090910152805143608090910152610160840151815160a00152610180840151815160c001528251905160e001526200115981620049b7565b620025326003600054146013620043f6565b8151620025509015806200254857508251600154145b6014620043f6565b60008080556002805462002564906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462002592906200693b565b8015620025e35780601f10620025b757610100808354040283529160200191620025e3565b820191906000526020600020905b815481529060010190602001808311620025c557829003601f168201915b5050505050806020019051810190620025fd919062007232565b9050620026166040518060200160405280600081525090565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633856040516200264992919062006caf565b60405180910390a16200265f34156011620043f6565b815162002679906001600160a01b031633146012620043f6565b602082015160e0015160c0830151515111156200282d57602082015160e0015160c08301515151620026ac919062006b89565b808252602083015160c001516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015620026ee573d6000803e3d6000fd5b50606080830151602084015161012081015192810151815160c09092015160408088015190517fd8d5d178d7b3e8cb359428334fdd1811a327db94fe043e010fb363fde503837e966200274996959094939092909162006ea4565b60405180910390a16200275b620055d9565b825181516001600160a01b039182169052602080850180518451830152606080870151855160409081019190915260808089015187519087169084015260e0808a0151885183015284510151875160a090810191909152935160c090810151885190881690820152858801805160019052805160009701879052805190930186905289518351971696909301959095528051439501949094528187015184519092019190915280860151925101919091528251620028199162006b89565b602082015160e001526200102b81620049b7565b816020015160c001516001600160a01b03166108fc8360c001516000600181106200285c576200285c62006aff565b6020020151516040518115909202916000818181858888f193505050501580156200288b573d6000803e3d6000fd5b50815160c083015151516001600160a01b03909116906108fc90620028b290600062006b89565b6040518115909202916000818181858888f19350505050158015620028db573d6000803e3d6000fd5b50608082015160c0830151620028fe919060005b60200201516020015162004e9a565b6200290d826080015162004eb0565b600080805560018190556200115b90600290620055fd565b62002937600160005414600a620043f6565b8151620029559015806200294d57508251600154145b600b620043f6565b60008080556002805462002969906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462002997906200693b565b8015620029e85780601f10620029bc57610100808354040283529160200191620029e8565b820191906000526020600020905b815481529060010190602001808311620029ca57829003601f168201915b505050505080602001905181019062002a029190620072d7565b905062002a0e6200563c565b7f65632764417557999a38203badceeaeff33aaa57bd42e05929f7b6b79e9dbc61338560405162002a41929190620073d1565b60405180910390a162002a5734156008620043f6565b602082015162002a74906001600160a01b031633146009620043f6565b80516618dc99585d195960ca1b905280516020808601510151604090810151905160008051602062008cb58339815191529262002ab392909162006b70565b60405180910390a16020818101805160009081905281518301819052905160409081018290528084015191909152858201518201516101400151518151928301520160408051601f19818403018152908290526020868101518101516101600151516001600160c01b031916908301529060280160408051808303601f1901815282825260208581015180518183015191850151928601529284019290925260608301919091529060800160408051808303601f19018152828252858201515160208401529101604051602081830303815290604052600019601260405162002b9c9062005716565b62002bad9695949392919062007426565b604051809103906000f08015801562002bca573d6000803e3d6000fd5b506001600160a01b031660608201819052608082018190526040519081527fcd43205ff36512db88b1a292f81ea40efe47693b2746b9cef04fdb1a079e39039060200160405180910390a160a081018051600019905282515160209081015182519091015282515160409081015182519015159101528251905162002c53919060009062004ec8565b60c0820181815290515160e08301805191909152805160001960209091015281515160409081015182519015159101529051905162002c96919060009062004ec8565b610100820181815290515161012083018051919091528151516020908101518251909101528051600060409091018190529151905162002cd7929062004ec8565b610140820152610160810180516b1d1bdad95b90dc99585d195960a21b9052516020808601510151610180015160405160008051602062008cb58339815191529262002d2592909162006b70565b60405180910390a162002d3762005724565b6020808401516001600160a01b0390811683528682018051511515848401528051830151604080860191909152815181015183166060860152905183015181015160808086019190915285015190911660a084015261014084015160c08401526002600055436001555162002daf91839101620074d1565b6040516020818303038152906040526002908051906020019062002dd592919062005769565b505050505050565b62002def600260005414600f620043f6565b815162002e0d90158062002e0557508251600154145b6010620043f6565b60008080556002805462002e21906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462002e4f906200693b565b801562002ea05780601f1062002e745761010080835404028352916020019162002ea0565b820191906000526020600020905b81548152906001019060200180831162002e8257829003601f168201915b505050505080602001905181019062002eba919062007548565b905062002ec6620057f8565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338560405162002ef992919062006caf565b60405180910390a162002f0f3415600c620043f6565b60c0820151516020810151905162002f28919062007217565b81515260c08201805151602090810151835190910152805151604090810151835190151591015251815162002f61919060009062004ec8565b602082015260a082015160c083015162002f969162002f8e91339190600060200201516020015162004f4b565b600d620043f6565b815162002fb0906001600160a01b03163314600e620043f6565b8160200151156200307c5762002fc860144362007217565b604082015262002fd762005838565b82516001600160a01b0390811682526040808501516020808501919091526060808701518416838601526080808801519186019190915260a08088015190941690850152439284018390528481015160c08501528482015160e08501526003600055600192909255516200304e91839101620075ef565b604051602081830303815290604052600290805190602001906200307492919062005769565b50506200115b565b62003086620055ae565b825181516001600160a01b03918216905260a0840151825191166020918201528082018051600190528051439083015290830151815160400152516000606090910152620011598162004790565b620030e66010600054146029620043f6565b815162003104901580620030fc57508251600154145b602a620043f6565b60008080556002805462003118906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462003146906200693b565b8015620031975780601f106200316b5761010080835404028352916020019162003197565b820191906000526020600020905b8154815290600101906020018083116200317957829003601f168201915b5050505050806020019051810190620031b1919062006ab4565b9050620031bd620053c2565b7f69beebeea7b0b108020d81166bc0b515fd9f40ae2df9ed1acacbdd11ce103f8e3385604051620031f092919062006ad4565b60405180910390a16200320634156028620043f6565b620032113362003ea4565b8152600081515160018111156200322c576200322c62005f72565b141562003240576000602082015262003274565b6001815151600181111562003259576200325962005f72565b14156200327457805160409081015190820181905260208201525b6000620032813362003715565b51600181111562003296576200329662005f72565b1415620032aa5760006060820152620032db565b6001620032b73362003715565b516001811115620032cc57620032cc62005f72565b1415620032db57600160608201525b80602001518261010001511015620032f5576000620032fb565b80606001515b15620035f157600081515160018111156200331a576200331a62005f72565b14156200332e576000608082015262003361565b6001815151600181111562003347576200334762005f72565b1415620033615780516040015160a0820181905260808201525b8060800151826060015183608001518460e001516000600181106200338a576200338a62006aff565b6020020151516200339c919062006b2b565b620033a8919062006b4d565b620033b4919062006b2b565b60c08201526000620033c63362000a3f565b516001811115620033db57620033db62005f72565b1415620033fb5760a08201516001600160a01b031660e08201526200344a565b6001620034083362000a3f565b5160018111156200341d576200341d62005f72565b14156200344a576200342f3362000a3f565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156200348c573d6000803e3d6000fd5b5033600090815260066020908152604091829020805462ffffff19169055610120830180516a18db185a5b54185cdcd95960aa1b90525190840151915160008051602062008cb583398151915292620034e6929162006b70565b60405180910390a1604051600181527f5b9c2256bf87017eedbe543df4072f1e75ed21f95819bcaee2b9d0fef861699b9060200160405180910390a160016020840152620035336200545a565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841691015260608086015184519091015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c0830151620035a49060019062006b89565b602080830180519091019190915280514360409091015260e084015190516060015260c0820151610100840151620035dd919062006b89565b6020820151608001526200102b8162004f65565b610140810180516a18db185a5b51985a5b195960aa1b905251602083015160405160008051602062008cb5833981519152926200363092909162006b70565b60405180910390a1604051600081527f2ffae322aa1cd1817e4c47ff434d089bc4aa9d7652c7e7e6921594ab2a5532e39060200160405180910390a1600060208401526200367d6200545a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c08901518151909501949094528351439301929092529051825190910152610100850151905190910152620011598162004f65565b6200371f620052e1565b60016001600160a01b03831660009081526006602052604090205460ff16600181111562003751576200375162005f72565b141562000b02576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111562003796576200379662005f72565b6001811115620037aa57620037aa62005f72565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b620037e76005600054146017620043f6565b815162003805901580620037fd57508251600154145b6018620043f6565b60008080556002805462003819906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462003847906200693b565b8015620038985780601f106200386c5761010080835404028352916020019162003898565b820191906000526020600020905b8154815290600101906020018083116200387a57829003601f168201915b5050505050806020019051810190620038b291906200772c565b9050620038d2604051806040016040528060008152602001600081525090565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516200390592919062006caf565b60405180910390a16200391b34156015620043f6565b815162003935906001600160a01b031633146016620043f6565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f1935050505015801562003978573d6000803e3d6000fd5b5061010082015151516200398f9060649062006b4d565b808252610120830151620039a4908062006b89565b620039b0919062006b89565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620039f0573d6000803e3d6000fd5b50620039fb62005889565b82516001600160a01b039081168252602080850151818401526040808601518316818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600660005543600155905162002daf91839101620077e8565b62003a9e6016600054146039620043f6565b815162003abc90158062003ab457508251600154145b603a620043f6565b60008080556002805462003ad0906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462003afe906200693b565b801562003b4f5780601f1062003b235761010080835404028352916020019162003b4f565b820191906000526020600020905b81548152906001019060200180831162003b3157829003601f168201915b505050505080602001905181019062003b69919062007118565b905062003b7f8160800151431015603b620043f6565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338460405162003bb292919062006caf565b60405180910390a162003bc834156037620043f6565b805162003be2906001600160a01b031633146038620043f6565b62003bec620055d9565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190851690820152608080870151865182015260a080880151875182015260c08089015188519088169082015260e0808a0151878a0180519115159091526101008b01518151909801979097526101208a01518751909601959095526101408901518651971696909301959095528351439101526101608601518351909401939093526101808501518251909301929092526101a08401519051909101526200115b81620049b7565b62003cd5600660005414601b620043f6565b815162003cf390158062003ceb57508251600154145b601c620043f6565b60008080556002805462003d07906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462003d35906200693b565b801562003d865780601f1062003d5a5761010080835404028352916020019162003d86565b820191906000526020600020905b81548152906001019060200180831162003d6857829003601f168201915b505050505080602001905181019062003da09190620078a6565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338460405162003dd592919062006caf565b60405180910390a162003deb34156019620043f6565b805162003e05906001600160a01b03163314601a620043f6565b62003e0f6200545a565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e0850151835190910152610120840151915101526200115b816200441d565b62003eae620052e1565b60016001600160a01b03831660009081526005602052604090205460ff16600181111562003ee05762003ee062005f72565b141562000b02576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111562003f255762003f2562005f72565b600181111562003f395762003f3962005f72565b81528154610100900460ff161515602082015260019091015460409091015292915050565b62003f70600b600054146022620043f6565b815162003f8e90158062003f8657508251600154145b6023620043f6565b60008080556002805462003fa2906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462003fd0906200693b565b8015620040215780601f1062003ff55761010080835404028352916020019162004021565b820191906000526020600020905b8154815290600101906020018083116200400357829003601f168201915b50505050508060200190518101906200403b91906200772c565b90506200405b604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33856040516200408e92919062006caf565b60405180910390a1620040a434156020620043f6565b8151620040be906001600160a01b031633146021620043f6565b81608001516001600160a01b03166108fc8361012001519081150290604051600060405180830381858888f1935050505015801562004101573d6000803e3d6000fd5b506101008201515151620041189060649062006b4d565b8082526101208301516200412d908062006b89565b62004139919062006b89565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562004179573d6000803e3d6000fd5b506200418462005889565b82516001600160a01b039081168252602080850151818401526040808601518316818501526060808701519085015260a080870151608086015260c0808801519186019190915260e08088015190941690850152610100808701805194860194909452925151519284019290925283810151610120840152600c60005543600155905162002daf91839101620077e8565b62004227600c600054146026620043f6565b8151620042459015806200423d57508251600154145b6027620043f6565b60008080556002805462004259906200693b565b80601f016020809104026020016040519081016040528092919081815260200182805462004287906200693b565b8015620042d85780601f10620042ac57610100808354040283529160200191620042d8565b820191906000526020600020905b815481529060010190602001808311620042ba57829003601f168201915b5050505050806020019051810190620042f29190620078a6565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a33846040516200432792919062006caf565b60405180910390a16200433d34156024620043f6565b805162004357906001600160a01b031633146025620043f6565b620043616200545a565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e0850151835190910152610120840151915101526200115b8162004f65565b81620005d05760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b62004427620058ff565b6000826020015160200151116200444057600062004449565b60208201515115155b156200450f576200445962005955565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152600a600055436001559051620044e99183910162007948565b604051602081830303815290604052600290805190602001906200115b92919062005769565b81515160208301516060015151516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562004554573d6000803e3d6000fd5b508151516020830151606081015151516080909101516001600160a01b03909216916108fc91620045859162006b89565b6040518115909202916000818181858888f19350505050158015620045ae573d6000803e3d6000fd5b506020828101516060015151908101519051620045cc919062006b89565b81515260208281018051606090810151518301518451909301929092528051820151516040908101518451901515910152510151815162004611919060009062004ec8565b602082810182815291515160408401515283810151606001515181015191515101516200463f919062006b89565b6040828101805160209081019390935282840151518201519051901515908201528351015190830151606001516200467a91906000620028ef565b6200469081602001516000836040015162004ec8565b516040015115620046b35760008080556001819055620005d090600290620055fd565b815160400151620046c49062004eb0565b60008080556001819055620005d090600290620055fd565b620046e6620058ff565b600082602001516020015111620046ff57600062004708565b60208201515115155b156200450f5762004718620059b7565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152818601805183015160808087019190915281519094015160a0860152519092015160c08401526015600055436001559051620044e99183910162007959565b6200479a620058ff565b602082015151156200480257620047b062005a0a565b8251516001600160a01b039081168252835160209081015190911681830152808401805160409081015181850152905160609081015190840152601b6000554360015551620044e991839101620079c2565b8151516020830151604090810151515190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562004848573d6000803e3d6000fd5b508151516020830151604081015151516060909101516001600160a01b03909216916108fc91620048799162006b89565b6040518115909202916000818181858888f19350505050158015620048a2573d6000803e3d6000fd5b506020828101516040015151908101519051620048c0919062006b89565b8151526020828101805160409081015151830151845190930192909252805182015151820151835190151590830152510151815162004903919060009062004ec8565b60208281018281529151516040808501519190915284820151015151810151915151015162004933919062006b89565b60408281018051602090810193909352828401515182015190519015159082015283518201519184015101516200496d91906000620028ef565b6200498381602001516000836040015162004ec8565b516040015115620049a65760008080556001819055620005d090600290620055fd565b815160200151620046c49062004eb0565b620049c162005a2b565b815160800151602083015160a001511115620049df576000620049e6565b6020820151515b1562004ac357620049f662005a94565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151841681860152865160809081015181870152875160a09081015190870152875160c090810151861681880152848901805151151560e0808a019190915281518701516101008a015281518601516101208a0152815190940151909616610140880152855190910151610160870152845101516101808601529251909201516101a08401526016600055436001559051620044e99183910162007a08565b600082600001516020015160200151836020015160200151101562004aea57600162004aed565b60005b141562004c55578051651c185cdcd95960d21b905280518251604090810151905160008051602062008cb58339815191529262004b2c92909162006b70565b60405180910390a16064826020015160e0015162004b4b919062006b4d565b602080830182905283015160e0015162004b66919062006b89565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801562004bac573d6000803e3d6000fd5b5062004bb762005b2c565b8251516001600160a01b03908116825283516040908101516020808501919091528551606090810151841683860152865160a09081015182870152875160c0908101518616608088015283890180518501519288019290925281518501518188015281519092015190941660e08601529251909201516101008401528381015161012084015260056000554360015551620044e99183910162007b89565b81600001516020015161010001518260200151602001511062004dd257606081018051651c185cdcd95960d21b9052518251604090810151905160008051602062008cb58339815191529262004cad92909162006b70565b60405180910390a16064826020015160e0015162004ccc919062006b4d565b60808201819052602083015160e0015162004ce8919062006b89565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562004d2c573d6000803e3d6000fd5b5062004d3762005b2c565b8251516001600160a01b03908116825283516040908101516020808501919091528551606090810151841683860152865160a09081015182870152875160c0908101518616608088015283890180518501518389015280518601518289015280519093015190951660e087015290519093015161010085015291840151610120840152600b6000554360015551620044e99183910162007b89565b60c0810180516519985a5b195960d21b9052518251604090810151905160008051602062008cb58339815191529262004e0d92909162006b70565b60405180910390a162004e1f62005b9e565b8251516001600160a01b039081168252835160409081015160208085019190915285516060908101518416838601528187018051840151828701528051909101519093166080850152825160c09081015160a0860152925160e001519284019290925260116000554360015551620044e99183910162007b9a565b62004ea6828262005031565b620005d057600080fd5b62004ebb8162005115565b62004ec557600080fd5b50565b62004ed262005bec565b60005b600181101562004f285784816001811062004ef45762004ef462006aff565b602002015182826001811062004f0e5762004f0e62006aff565b60200201528062004f1f8162007bf1565b91505062004ed5565b508181846001811062004f3f5762004f3f62006aff565b60200201529392505050565b600062004f5b83853085620051c0565b90505b9392505050565b62004f6f620058ff565b60008260200151602001511162004f8857600062004f91565b60208201515115155b156200450f5762004fa162005955565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e086015251909201516101008401526010600055436001559051620044e99183910162007948565b6000806000846001600160a01b031660006342966c6860e01b866040516024016200505e91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516200509e919062007c0f565b60006040518083038185875af1925050503d8060008114620050dd576040519150601f19603f3d011682016040523d82523d6000602084013e620050e2565b606091505b5091509150620050f582826003620052a2565b50808060200190518101906200510c919062006530565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916200515e9162007c0f565b60006040518083038185875af1925050503d80600081146200519d576040519150601f19603f3d011682016040523d82523d6000602084013e620051a2565b606091505b5091509150620051b582826004620052a2565b506001949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391620052299162007c0f565b60006040518083038185875af1925050503d806000811462005268576040519150601f19603f3d011682016040523d82523d6000602084013e6200526d565b606091505b50915091506200528082826001620052a2565b508080602001905181019062005297919062006530565b979650505050505050565b60608315620052b357508162004f5e565b825115620052c45782518084602001fd5b60405163100960cb60e01b81526004810183905260240162004414565b60408051606081019091528060005b815260006020820181905260409091015290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060400160405280600081526020016200536462005c39565b905290565b6040518060400160405280600081526020016200536460405180602001604052806000151581525090565b6040518060400160405280600081526020016200536460408051808201909152600060208201908152815290565b604051806101600160405280620053d8620052e1565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016200543f60408051602081019091526000815290565b81526020016200536460408051602081019091526000815290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201929092529081905b81526020016200536462005c4e565b604051806101600160405280620054ba620052e1565b81526020016000815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016200543f60408051602081019091526000815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819062005495565b6040805160e081018252600060a0820181815260c083018290528252825160208082018552918152908201529081016200558b62005c78565b81526020016200543f604051806040016040528060008152602001600081525090565b6040805160808101825260009181018281526060820192909252908152602081016200536462005a0a565b6040518060400160405280620055ee62005c8d565b81526020016200536462005ced565b5080546200560b906200693b565b6000825580601f106200561c575050565b601f01602090049060005260206000209081019062004ec5919062005d38565b604080516101a08101825260006101808201818152825282516060808201855282825260208083018490528286018490528085019290925284518083018652838152848601528084018390526080840183905284519081018552828152908101829052928301529060a08201908152602001620056b862005bec565b81526040805160608101825260008082526020828101829052928201529101908152602001620056e762005bec565b815260408051606081018252600080825260208281018290529282015291019081526020016200543f62005bec565b6110878062007c2e83390190565b6040805160e081018252600080825260208201529081016200574562005d4f565b81526000602082018190526040820181905260608201526080016200536462005bec565b82805462005777906200693b565b90600052602060002090601f0160209004810192826200579b5760008555620057e6565b82601f10620057b657805160ff1916838001178555620057e6565b82800160010185558215620057e6579182015b82811115620057e6578251825591602001919060010190620057c9565b50620057f492915062005d38565b5090565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200582b62005bec565b8152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016200585e62005d4f565b81526000602082018190526040820181905260608201819052608082015260a0016200582b62005bec565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620058eb62005bec565b815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200593262005bec565b815260408051606081018252600080825260208281018290529282015291015290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016200582b62005bec565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016200582b62005bec565b60408051608081018252600080825260208201529081016200582b62005bec565b604080516101008101909152600060e0820190815281908152602001600081526020016000815260200162005a6b60408051602081019091526000815290565b815260200160008152602001600081526020016200536460408051602081019091526000815290565b604051806101c0016040528060006001600160a01b0316815260200162005aba62005d4f565b81526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016200582b62005bec565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016200582b62005bec565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016200582b5b60405180602001604052806001905b62005c22604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908162005bfb5790505090565b60405180602001604052806200536462005e48565b6040518060a001604052806000815260200160008152602001600081526020016200582b62005bec565b60405180602001604052806200536462005eab565b6040518060e0016040528060006001600160a01b0316815260200162005cb262005d4f565b81526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016200582b62005bec565b5b80821115620057f4576000815560010162005d39565b60408051610260810190915260006101a082018181526101c083018290526101e083018290526102008301829052610220830182905261024083019190915281908152602001600081526020016000815260200162005dd56040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200162005e1c60408051602081019091526000815290565b81526040805160208082018352600080835281850192909252825190810183529081529101906200582b565b6040805160808101909152806000815260200162005e79604051806040016040528060008152602001600081525090565b815260200162005e8862005c78565b815260200162005364604051806040016040528060008152602001600081525090565b6040518060c001604052806000815260200162005ed360408051602081019091526000815290565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a0820152910190620052f0565b6001600160a01b038116811462004ec557600080fd5b60006020828403121562005f6557600080fd5b813562004f5e8162005f3c565b634e487b7160e01b600052602160045260246000fd5b6002811062004ec55762004ec562005f72565b8151606082019062005fad8162005f88565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b60006040828403121562005fe857600080fd5b50919050565b6000604082840312156200600157600080fd5b62004f5e838362005fd5565b600080604083850312156200602157600080fd5b50508035926020909101359150565b6000610320828403121562005fe857600080fd5b81516060820190620060568162005f88565b8083525060208301511515602083015260408301511515604083015292915050565b6000602082840312156200608b57600080fd5b5035919050565b60006102a0828403121562005fe857600080fd5b60005b83811015620060c3578181015183820152602001620060a9565b838111156200115b5750506000910152565b60008151808452620060ef816020860160208601620060a6565b601f01601f19169290920160200192915050565b82815260406020820152600062004f5b6040830184620060d5565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156200615a576200615a6200611e565b60405290565b60405160a0810167ffffffffffffffff811182821017156200615a576200615a6200611e565b60405160c0810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6040805190810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6040516060810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6040516101a0810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6040516080810167ffffffffffffffff811182821017156200615a576200615a6200611e565b604051610120810167ffffffffffffffff811182821017156200615a576200615a6200611e565b60405160e0810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6040516101c0810167ffffffffffffffff811182821017156200615a576200615a6200611e565b604051610100810167ffffffffffffffff811182821017156200615a576200615a6200611e565b604051610140810167ffffffffffffffff811182821017156200615a576200615a6200611e565b6001600160601b03198116811462004ec557600080fd5b6000602082840312156200633157600080fd5b6200633b62006134565b905081356200634a8162006307565b815292915050565b69ffffffffffffffffffff198116811462004ec557600080fd5b600060a082840312156200637f57600080fd5b6200638962006160565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135620063bd8162006352565b608082015292915050565b600060c08284031215620063db57600080fd5b620063e562006186565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a0820135620064238162006307565b60a082015292915050565b803562000b0d8162005f3c565b60006101e082840312156200644f57600080fd5b6200645962006186565b9050813581526200646e83602084016200631e565b60208201526200648283604084016200636c565b6040820152620064968360e08401620063c8565b60608201526101a0820135620064ac8162005f3c565b60808201526101c0820135620064238162005f3c565b60006101e08284031215620064d657600080fd5b62004f5e83836200643b565b81516060820190620064f48162005f88565b808352506020830151151560208301526040830151604083015292915050565b801515811462004ec557600080fd5b805162000b0d8162006514565b6000602082840312156200654357600080fd5b815162004f5e8162006514565b600081830360408112156200656457600080fd5b6200656e620061ac565b8335815291506020601f19820112156200658757600080fd5b506200659262006134565b6020830135620065a28162006514565b8152602082015292915050565b600060408284031215620065c257600080fd5b62004f5e838362006550565b600060408284031215620065e157600080fd5b620065eb620061ac565b823581526020830135620065ff8162006514565b60208201529392505050565b600081830360408112156200661f57600080fd5b62006629620061ac565b833581526020601f19830112156200664057600080fd5b6200664a62006134565b91506200665662006134565b602094850135815282529283015250919050565b6000602082840312156200667d57600080fd5b6200668762006134565b9135825250919050565b6001600160c01b03198116811462004ec557600080fd5b600060208284031215620066bb57600080fd5b620066c562006134565b905081356200634a8162006691565b6000818303610320811215620066e957600080fd5b620066f3620061ac565b8335815261030080601f19840112156200670c57600080fd5b62006716620061d2565b6020860135620067268162006514565b81526102c0603f1985018113156200673d57600080fd5b62006747620061f8565b9450620067588860408901620063c8565b8552610100808801356020870152610120808901356040880152610140620067838b828c016200636c565b60608901526101e08a013560808901526102008a013560a0890152620067ad6102208b016200642e565b60c08901526102408a013560e08901526102608a013583890152620067d78b6102808c016200631e565b82890152620067eb8b6102a08c016200666a565b818901525050506200680088828901620066a8565b610160860152506102e0860135610180850152836020820152620068268287016200642e565b6040820152602083015250949350505050565b6000604082840312156200684c57600080fd5b62006856620061ac565b9050813581526020820135602082015292915050565b60008183036102a08112156200688157600080fd5b6200688b620061ac565b83358152610280601f1983011215620068a357600080fd5b620068ad62006134565b620068b76200621f565b602086013560038110620068ca57600080fd5b8152620068db876040880162006839565b60208201526101e0607f1985011215620068f457600080fd5b620068fe62006134565b93506200690f87608088016200643b565b84528360408201526200692787610260880162006839565b606082015281526020820152949350505050565b600181811c908216806200695057607f821691505b6020821081141562005fe857634e487b7160e01b600052602260045260246000fd5b805162000b0d8162005f3c565b600082601f8301126200699157600080fd5b6200699b62006134565b80606080850186811115620069af57600080fd5b855b8181101562006a0757828189031215620069cb5760008081fd5b620069d5620061d2565b8151815260208083015181830152604080840151620069f48162006514565b90830152908652909401938201620069b1565b50919695505050505050565b6000610160828403121562006a2757600080fd5b62006a3162006245565b905062006a3e8262006972565b81526020820151602082015262006a586040830162006972565b6040820152606082015160608201526080820151608082015262006a7f60a0830162006972565b60a082015260c082015160c082015262006a9d8360e084016200697f565b60e082015261014082015161010082015292915050565b6000610160828403121562006ac857600080fd5b62004f5e838362006a13565b6001600160a01b03831681526060810162004f5e602083018480518252602090810151511515910152565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161562006b485762006b4862006b15565b500290565b60008262006b6b57634e487b7160e01b600052601260045260246000fd5b500490565b91516001600160601b0319168252602082015260400190565b60008282101562006b9e5762006b9e62006b15565b500390565b6000610120828403121562006bb757600080fd5b62006bc16200626c565b825162006bce8162005f3c565b815260208381015190820152604083015162006bea8162005f3c565b6040820152606083015162006bff8162005f3c565b60608201526080838101519082015262006c1d8460a085016200697f565b60a0820152610100929092015160c083015250919050565b6000610120828403121562006c4957600080fd5b62006c536200626c565b825162006c608162005f3c565b815260208381015190820152604083015162006c7c8162005f3c565b604082015260608381015190820152608083015162006c9b8162005f3c565b608082015262006c1d8460a085016200697f565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060c0828403121562006cea57600080fd5b62006cf46200621f565b825162006d018162005f3c565b8152602083015162006d138162005f3c565b602082015262006d2784604085016200697f565b604082015260a09290920151606083015250919050565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526bffffffffffffffffffffffff1960a08201511660a08301525050565b6001600160a01b03838116825282516020808401919091528301515180516102c084019291906003811062006dfd5762006dfd62005f72565b60408501526020818101518051606087015290810151608086015250604081015151805160a08601526bffffffffffffffffffffffff196020820151511660c0860152604081015162006e5460e087018262006d3e565b50606081015162006e6a61018087018262006d7b565b506080810151831661024086015260a0015190911661026084015260600151805161028084015260208101516102a0840152509392505050565b86815285516001600160601b03191660208201526101e0810162006ecc604083018762006d3e565b62006edb60e083018662006d7b565b6001600160a01b039384166101a0830152919092166101c090920191909152949350505050565b600060c0828403121562006f1557600080fd5b62006f1f62006186565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a0820151620064238162006307565b600060a0828403121562006f7057600080fd5b62006f7a62006160565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151620063bd8162006352565b60006020828403121562006fc157600080fd5b62006fcb62006134565b905081516200634a8162006307565b60006020828403121562006fed57600080fd5b62006ff762006134565b9151825250919050565b6000602082840312156200701457600080fd5b6200701e62006134565b905081516200634a8162006691565b60006102c082840312156200704157600080fd5b6200704b620061f8565b905062007059838362006f02565b815260c0820151602082015260e08201516040820152610100620070808482850162006f5d565b60608301526101a083015160808301526101c083015160a0830152620070aa6101e0840162006972565b60c083015261020083015160e083015261022083015190820152620070d483610240840162006fae565b610120820152620070ea83610260840162006fda565b6101408201526200710083610280840162007001565b6101608201526102a082015161018082015292915050565b60006104a082840312156200712c57600080fd5b6200713662006292565b620071418362006972565b81526200715284602085016200702d565b60208201526102e0830151604082015262007171610300840162006972565b6060820152610320830151608082015261034083015160a08201526200719b610360840162006972565b60c0820152620071af610380840162006523565b60e08201526103a08301516101008201526103c0830151610120820152620071db6103e0840162006972565b610140820152610400830151610160820152620071fd8461042085016200697f565b61018082015261048092909201516101a083015250919050565b600082198211156200722d576200722d62006b15565b500190565b60006103e082840312156200724657600080fd5b62007250620062b9565b6200725b8362006972565b81526200726c84602085016200702d565b6020820152620072806102e0840162006972565b604082015261030083015160608201526200729f610320840162006972565b608082015261034083015160a0820152620072bf8461036085016200697f565b60c08201526103c0929092015160e083015250919050565b600060808284031215620072ea57600080fd5b620072f4620061ac565b6200730084846200697f565b81526060830151620065ff8162005f3c565b6200731f82825162006d7b565b602081015160c0830152604081015160e08301526060810151610100620073498185018362006d3e565b60808301516101a085015260a08301516101c085015260c08301516001600160a01b03166101e085015260e083015161020085015282015161022084015250610120810151516001600160601b03191661024083015261014081015151610260830152610160810151516001600160c01b03191661028083015261018001516102a090910152565b60006103408201905060018060a01b03808516835283516020840152602084015180511515604085015260208101516200740f606086018262007312565b508160408201511661032085015250509392505050565b60c0815260006200743b60c0830189620060d5565b82810360208401526200744f8189620060d5565b90508281036040840152620074658188620060d5565b905082810360608401526200747b8187620060d5565b6080840195909552505060a00152949350505050565b8060005b60018110156200115b57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162007495565b81516001600160a01b0390811682526020808401511515908301526040808401516103c084019291620075079085018262007312565b5060608401518116610300840152608084015161032084015260a08401511661034083015260c08301516200754161036084018262007491565b5092915050565b60006103c082840312156200755c57600080fd5b620075666200626c565b8251620075738162005f3c565b81526020830151620075858162006514565b60208201526200759984604085016200702d565b6040820152610300830151620075af8162005f3c565b60608201526103208301516080820152620075ce610340840162006972565b60a0820152620075e38461036085016200697f565b60c08201529392505050565b81516001600160a01b031681526020808301516103e0830191620076169084018262007312565b5060408301516001600160a01b039081166102e0840152606084015161030084015260808401511661032083015260a083015161034083015260c08301516200766461036084018262007491565b5060e08301516103c083015292915050565b600061018082840312156200768a57600080fd5b62007694620062e0565b9050620076a18262006972565b815260208201516020820152620076bb6040830162006972565b604082015260608201516060820152620076d86080830162006972565b608082015260a082015160a082015260c082015160c0820152620076ff60e0830162006972565b60e082015261010062007715848285016200697f565b818301525061016082015161012082015292915050565b600061018082840312156200774057600080fd5b62004f5e838362007676565b80516001600160a01b031682526020810151602083015260408101516200777e60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c0810151620077b860c08401826001600160a01b03169052565b5060e0810151620077cd60e084018262007491565b50610100810151610140830152610120015161016090910152565b6101808101620005a482846200774c565b600061018082840312156200780d57600080fd5b62007817620062e0565b9050620078248262006972565b8152602082015160208201526200783e6040830162006972565b6040820152606082015160608201526080820151608082015260a082015160a08201526200786f60c0830162006972565b60c0820152620078838360e084016200697f565b60e082015261014082015161010082015261016082015161012082015292915050565b60006101808284031215620078ba57600080fd5b62004f5e8383620077f9565b60018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a08101516200791960a08401826001600160a01b03169052565b5060c081015160c083015260e08101516200793860e084018262007491565b5061010001516101409190910152565b6101608101620005a48284620078c6565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152806060850151166060840152506080830151608083015260a0830151620079b060a084018262007491565b5060c083015161010083015292915050565b81516001600160a01b0390811682526020808401519091169082015260408083015160c0830191620079f79084018262007491565b50606083015160a083015292915050565b81516001600160a01b031681526104a08101602083015162007a2e602084018262007312565b5060408301516102e083015260608301516001600160a01b03908116610300840152608084015161032084015260a084015161034084015260c0840151811661036084015260e084015115156103808401526101008401516103a08401526101208401516103c0840152610140840151166103e083015261016083015161040083015261018083015162007ac761042084018262007491565b506101a083015161048083015292915050565b80516001600160a01b0316825260208101516020830152604081015162007b0c60408401826001600160a01b03169052565b5060608101516060830152608081015162007b3260808401826001600160a01b03169052565b5060a081015160a083015260c081015160c083015260e081015162007b6260e08401826001600160a01b03169052565b506101008082015162007b788285018262007491565b505061012001516101609190910152565b6101808101620005a4828462007ada565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152606084015160608401528060808501511660808401525060a0830151620079b060a084018262007491565b600060001982141562007c085762007c0862006b15565b5060010190565b6000825162007c23818460208701620060a6565b919091019291505056fe60806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220428002190887daca0e13855e543cbe1fc1c8459b55537a9de090b4a87121bede64736f6c634300080c00338e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220939d6a0449b4092f75c5399bbe266f0a1f40fba4f7f7f7f7c8e87eafd6938f2a64736f6c634300080c0033`,
  BytecodeLen: 37037,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:84:11:after expr stmt semicolon',
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
    at: './index.rsh:154:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:161:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:163:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:184:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:191:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:193:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:216:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:218:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  22: {
    at: './index.rsh:110:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  23: {
    at: './index.rsh:100:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:278:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:238:37:after expr stmt semicolon',
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
