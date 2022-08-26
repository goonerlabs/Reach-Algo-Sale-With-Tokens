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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  return {
    log: [ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '48'));
  const ctc6 = stdlib.T_Object({
    PrivateSaleAmt: ctc1,
    contract: ctc2,
    description: ctc3,
    hardCap: ctc1,
    id: ctc1,
    link: ctc4,
    maxContribution: ctc1,
    minContribution: ctc1,
    owner: ctc0,
    softCap: ctc1,
    title: ctc5
    });
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc0
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc1
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
      1: [ctc0, ctc6, ctc1, ctc1, ctc7, ctc10],
      2: [ctc0, ctc6, ctc1, ctc7, ctc1, ctc10, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc0, ctc10, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc0, ctc10, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc10, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc0, ctc10, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc0, ctc10, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc10, ctc1],
      14: [ctc0, ctc1, ctc0, ctc1, ctc0, ctc10, ctc1],
      17: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc10, ctc1],
      18: [ctc0, ctc6, ctc1, ctc1, ctc1, ctc0, ctc8, ctc1, ctc1, ctc0, ctc1, ctc10, ctc1]
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
export async function _Contributors_claimRefund17(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund17 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimRefund17 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
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
  
  
  const [v753, v760, v826, v834, v1164, v1171, v1172] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'), [ctc1, ctc3, ctc1, ctc1, ctc3, ctc8, ctc3]);
  const v1180 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:176:8:application call to [unknown function] (defined at: ./index.rsh:176:8:function exp)', 'at ./index.rsh:176:8:application call to [unknown function] (defined at: ./index.rsh:176:8:function exp)'],
    msg: 'in',
    who: 'Contributors_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v753, v760, v826, v834, v1164, v1171, v1172, v1180],
    evt_cnt: 1,
    funcNum: 14,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:176:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1184], secs: v1186, time: v1185, didSend: v532, from: v1183 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimRefund"
        });
      ;
      const v1188 = null;
      const v1189 = await txn1.getOutput('Contributors_claimRefund', 'v1188', ctc0, v1188);
      
      const v1195 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1183), null);
      let v1196;
      switch (v1195[0]) {
        case 'None': {
          const v1197 = v1195[1];
          v1196 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1198 = v1195[1];
          v1196 = v1198;
          
          break;
          }
        }
      const v1199 = stdlib.ge(v1172, v1196);
      const v1200 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1183), null);
      let v1201;
      switch (v1200[0]) {
        case 'None': {
          const v1202 = v1200[1];
          v1201 = false;
          
          break;
          }
        case 'Some': {
          const v1203 = v1200[1];
          v1201 = true;
          
          break;
          }
        }
      const v1204 = v1199 ? v1201 : false;
      if (v1204) {
        let v1206;
        switch (v1195[0]) {
          case 'None': {
            const v1207 = v1195[1];
            v1206 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1208 = v1195[1];
            v1206 = v1208;
            
            break;
            }
          }
        const v1209 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1183), null);
        let v1210;
        switch (v1209[0]) {
          case 'None': {
            const v1211 = v1209[1];
            v1210 = v834;
            
            break;
            }
          case 'Some': {
            const v1212 = v1209[1];
            v1210 = v1212;
            
            break;
            }
          }
        const v1216 = stdlib.sub(v1172, v1206);
        sim_r.txns.push({
          kind: 'from',
          to: v1210,
          tok: undefined /* Nothing */
          });
        const v1217 = stdlib.sub(v1164, stdlib.checkedBigNumberify('./index.rsh:181:25:decimal', stdlib.UInt_max, '1'));
        const v1843 = v1217;
        const v1845 = v1171;
        const v1846 = v1216;
        const v1847 = stdlib.gt(v1217, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
        const v1848 = stdlib.gt(v1216, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
        const v1849 = v1847 ? v1848 : false;
        if (v1849) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          const v1850 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
          const v1851 = v1850[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v826,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1224 = 'refundFailed        ';
        null;
        const v1853 = v1164;
        const v1855 = v1171;
        const v1856 = v1172;
        const v1857 = stdlib.gt(v1164, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
        const v1858 = stdlib.gt(v1172, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
        const v1859 = v1857 ? v1858 : false;
        if (v1859) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          const v1860 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
          const v1861 = v1860[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v826,
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
    tys: [ctc1, ctc3, ctc1, ctc1, ctc3, ctc8, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1184], secs: v1186, time: v1185, didSend: v532, from: v1183 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1188 = null;
  const v1189 = await txn1.getOutput('Contributors_claimRefund', 'v1188', ctc0, v1188);
  if (v532) {
    stdlib.protect(ctc0, await interact.out(v1184, v1189), {
      at: './index.rsh:176:9:application',
      fs: ['at ./index.rsh:176:9:application call to [unknown function] (defined at: ./index.rsh:176:9:function exp)', 'at ./index.rsh:177:11:application call to "notify" (defined at: ./index.rsh:176:35:function exp)', 'at ./index.rsh:176:35:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
      msg: 'out',
      who: 'Contributors_claimRefund'
      });
    }
  else {
    }
  
  const v1195 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1183), null);
  let v1196;
  switch (v1195[0]) {
    case 'None': {
      const v1197 = v1195[1];
      v1196 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1198 = v1195[1];
      v1196 = v1198;
      
      break;
      }
    }
  const v1199 = stdlib.ge(v1172, v1196);
  const v1200 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1183), null);
  let v1201;
  switch (v1200[0]) {
    case 'None': {
      const v1202 = v1200[1];
      v1201 = false;
      
      break;
      }
    case 'Some': {
      const v1203 = v1200[1];
      v1201 = true;
      
      break;
      }
    }
  const v1204 = v1199 ? v1201 : false;
  if (v1204) {
    let v1206;
    switch (v1195[0]) {
      case 'None': {
        const v1207 = v1195[1];
        v1206 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1208 = v1195[1];
        v1206 = v1208;
        
        break;
        }
      }
    const v1209 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1183), null);
    let v1210;
    switch (v1209[0]) {
      case 'None': {
        const v1211 = v1209[1];
        v1210 = v834;
        
        break;
        }
      case 'Some': {
        const v1212 = v1209[1];
        v1210 = v1212;
        
        break;
        }
      }
    const v1216 = stdlib.sub(v1172, v1206);
    ;
    const v1217 = stdlib.sub(v1164, stdlib.checkedBigNumberify('./index.rsh:181:25:decimal', stdlib.UInt_max, '1'));
    const v1843 = v1217;
    const v1845 = v1171;
    const v1846 = v1216;
    const v1847 = stdlib.gt(v1217, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
    const v1848 = stdlib.gt(v1216, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
    const v1849 = v1847 ? v1848 : false;
    if (v1849) {
      return;
      }
    else {
      ;
      const v1850 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      const v1851 = v1850[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      ;
      return;
      }}
  else {
    const v1224 = 'refundFailed        ';
    null;
    const v1853 = v1164;
    const v1855 = v1171;
    const v1856 = v1172;
    const v1857 = stdlib.gt(v1164, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
    const v1858 = stdlib.gt(v1172, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
    const v1859 = v1857 ? v1858 : false;
    if (v1859) {
      return;
      }
    else {
      ;
      const v1860 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      const v1861 = v1860[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      ;
      return;
      }}
  
  
  };
export async function _Contributors_claimToken8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken8 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
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
  
  
  const [v753, v760, v818, v826, v832, v834, v932, v939, v940] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc1, ctc3, ctc3, ctc1, ctc3, ctc1, ctc3, ctc8, ctc3]);
  const v949 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:127:8:application call to [unknown function] (defined at: ./index.rsh:127:8:function exp)', 'at ./index.rsh:127:8:application call to [unknown function] (defined at: ./index.rsh:127:8:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v753, v760, v818, v826, v832, v834, v932, v939, v940, v949],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:127:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v953], secs: v955, time: v954, didSend: v301, from: v952 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v957 = null;
      const v958 = await txn1.getOutput('Contributors_claimToken', 'v957', ctc0, v957);
      
      const v964 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v952), null);
      let v965;
      switch (v964[0]) {
        case 'None': {
          const v966 = v964[1];
          v965 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v967 = v964[1];
          v965 = v967;
          
          break;
          }
        }
      const v968 = stdlib.ge(v940, v965);
      const v969 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v952), null);
      let v970;
      switch (v969[0]) {
        case 'None': {
          const v971 = v969[1];
          v970 = false;
          
          break;
          }
        case 'Some': {
          const v972 = v969[1];
          v970 = true;
          
          break;
          }
        }
      const v973 = v968 ? v970 : false;
      if (v973) {
        const v974 = v939[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
        const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
        const v976 = stdlib.mul(v975, v832);
        const v978 = stdlib.div(v976, v818);
        let v980;
        switch (v964[0]) {
          case 'None': {
            const v981 = v964[1];
            v980 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v982 = v964[1];
            v980 = v982;
            
            break;
            }
          }
        const v983 = stdlib.mul(v978, v980);
        const v984 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v952), null);
        let v985;
        switch (v984[0]) {
          case 'None': {
            const v986 = v984[1];
            v985 = v834;
            
            break;
            }
          case 'Some': {
            const v987 = v984[1];
            v985 = v987;
            
            break;
            }
          }
        const v991 = stdlib.sub(v940, v983);
        sim_r.txns.push({
          kind: 'from',
          to: v985,
          tok: undefined /* Nothing */
          });
        const v992 = stdlib.sub(v932, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '1'));
        const v1863 = v975;
        const v1865 = v939;
        const v1866 = v991;
        const v1867 = stdlib.gt(v975, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
        const v1868 = stdlib.gt(v992, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
        const v1869 = v1867 ? v1868 : false;
        if (v1869) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v826,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1000 = 'claimFailed         ';
        null;
        const v1001 = v939[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
        const v1002 = v1001[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
        const v1873 = v1002;
        const v1875 = v939;
        const v1876 = v940;
        const v1877 = stdlib.gt(v1002, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
        const v1878 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
        const v1879 = v1877 ? v1878 : false;
        if (v1879) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v826,
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
    tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc1, ctc3, ctc8, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v953], secs: v955, time: v954, didSend: v301, from: v952 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v957 = null;
  const v958 = await txn1.getOutput('Contributors_claimToken', 'v957', ctc0, v957);
  if (v301) {
    stdlib.protect(ctc0, await interact.out(v953, v958), {
      at: './index.rsh:127:9:application',
      fs: ['at ./index.rsh:127:9:application call to [unknown function] (defined at: ./index.rsh:127:9:function exp)', 'at ./index.rsh:128:11:application call to "notify" (defined at: ./index.rsh:127:34:function exp)', 'at ./index.rsh:127:34:application call to [unknown function] (defined at: ./index.rsh:127:34:function exp)'],
      msg: 'out',
      who: 'Contributors_claimToken'
      });
    }
  else {
    }
  
  const v964 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v952), null);
  let v965;
  switch (v964[0]) {
    case 'None': {
      const v966 = v964[1];
      v965 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v967 = v964[1];
      v965 = v967;
      
      break;
      }
    }
  const v968 = stdlib.ge(v940, v965);
  const v969 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v952), null);
  let v970;
  switch (v969[0]) {
    case 'None': {
      const v971 = v969[1];
      v970 = false;
      
      break;
      }
    case 'Some': {
      const v972 = v969[1];
      v970 = true;
      
      break;
      }
    }
  const v973 = v968 ? v970 : false;
  if (v973) {
    const v974 = v939[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
    const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
    const v976 = stdlib.mul(v975, v832);
    const v978 = stdlib.div(v976, v818);
    let v980;
    switch (v964[0]) {
      case 'None': {
        const v981 = v964[1];
        v980 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v982 = v964[1];
        v980 = v982;
        
        break;
        }
      }
    const v983 = stdlib.mul(v978, v980);
    const v984 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v952), null);
    let v985;
    switch (v984[0]) {
      case 'None': {
        const v986 = v984[1];
        v985 = v834;
        
        break;
        }
      case 'Some': {
        const v987 = v984[1];
        v985 = v987;
        
        break;
        }
      }
    const v991 = stdlib.sub(v940, v983);
    ;
    const v992 = stdlib.sub(v932, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '1'));
    const v1863 = v975;
    const v1865 = v939;
    const v1866 = v991;
    const v1867 = stdlib.gt(v975, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
    const v1868 = stdlib.gt(v992, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
    const v1869 = v1867 ? v1868 : false;
    if (v1869) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    const v1000 = 'claimFailed         ';
    null;
    const v1001 = v939[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
    const v1002 = v1001[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
    const v1873 = v1002;
    const v1875 = v939;
    const v1876 = v940;
    const v1877 = stdlib.gt(v1002, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
    const v1878 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
    const v1879 = v1877 ? v1878 : false;
    if (v1879) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function _Contributors_claimToken13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_claimToken13 expects to receive an interact object as its second argument.`));}
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
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
  
  
  const [v753, v760, v818, v826, v832, v834, v1061, v1068, v1069] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc1, ctc3, ctc3, ctc1, ctc3, ctc1, ctc3, ctc8, ctc3]);
  const v1078 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:154:8:application call to [unknown function] (defined at: ./index.rsh:154:8:function exp)', 'at ./index.rsh:154:8:application call to [unknown function] (defined at: ./index.rsh:154:8:function exp)'],
    msg: 'in',
    who: 'Contributors_claimToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v753, v760, v818, v826, v832, v834, v1061, v1068, v1069, v1078],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1082], secs: v1084, time: v1083, didSend: v429, from: v1081 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_claimToken"
        });
      ;
      const v1086 = null;
      const v1087 = await txn1.getOutput('Contributors_claimToken', 'v1086', ctc0, v1086);
      
      const v1093 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1081), null);
      let v1094;
      switch (v1093[0]) {
        case 'None': {
          const v1095 = v1093[1];
          v1094 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1096 = v1093[1];
          v1094 = v1096;
          
          break;
          }
        }
      const v1097 = stdlib.ge(v1069, v1094);
      const v1098 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1081), null);
      let v1099;
      switch (v1098[0]) {
        case 'None': {
          const v1100 = v1098[1];
          v1099 = false;
          
          break;
          }
        case 'Some': {
          const v1101 = v1098[1];
          v1099 = true;
          
          break;
          }
        }
      const v1102 = v1097 ? v1099 : false;
      if (v1102) {
        const v1103 = v1068[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
        const v1104 = v1103[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
        const v1105 = stdlib.mul(v1104, v832);
        const v1107 = stdlib.div(v1105, v818);
        let v1109;
        switch (v1093[0]) {
          case 'None': {
            const v1110 = v1093[1];
            v1109 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1111 = v1093[1];
            v1109 = v1111;
            
            break;
            }
          }
        const v1112 = stdlib.mul(v1107, v1109);
        const v1113 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1081), null);
        let v1114;
        switch (v1113[0]) {
          case 'None': {
            const v1115 = v1113[1];
            v1114 = v834;
            
            break;
            }
          case 'Some': {
            const v1116 = v1113[1];
            v1114 = v1116;
            
            break;
            }
          }
        const v1120 = stdlib.sub(v1069, v1112);
        sim_r.txns.push({
          kind: 'from',
          to: v1114,
          tok: undefined /* Nothing */
          });
        const v1123 = stdlib.sub(v1061, stdlib.checkedBigNumberify('./index.rsh:159:43:decimal', stdlib.UInt_max, '1'));
        const v1883 = v1123;
        const v1885 = v1068;
        const v1886 = v1120;
        const v1887 = stdlib.gt(v1123, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
        const v1888 = stdlib.gt(v1104, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
        const v1889 = v1887 ? v1888 : false;
        if (v1889) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v826,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1129 = 'claimFailed         ';
        null;
        const v1130 = v1068[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
        const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
        const v1893 = v1061;
        const v1895 = v1068;
        const v1896 = v1069;
        const v1897 = stdlib.gt(v1061, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
        const v1898 = stdlib.gt(v1131, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
        const v1899 = v1897 ? v1898 : false;
        if (v1899) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v826,
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
    tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc1, ctc3, ctc8, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1082], secs: v1084, time: v1083, didSend: v429, from: v1081 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1086 = null;
  const v1087 = await txn1.getOutput('Contributors_claimToken', 'v1086', ctc0, v1086);
  if (v429) {
    stdlib.protect(ctc0, await interact.out(v1082, v1087), {
      at: './index.rsh:154:9:application',
      fs: ['at ./index.rsh:154:9:application call to [unknown function] (defined at: ./index.rsh:154:9:function exp)', 'at ./index.rsh:155:11:application call to "notify" (defined at: ./index.rsh:154:34:function exp)', 'at ./index.rsh:154:34:application call to [unknown function] (defined at: ./index.rsh:154:34:function exp)'],
      msg: 'out',
      who: 'Contributors_claimToken'
      });
    }
  else {
    }
  
  const v1093 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1081), null);
  let v1094;
  switch (v1093[0]) {
    case 'None': {
      const v1095 = v1093[1];
      v1094 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1096 = v1093[1];
      v1094 = v1096;
      
      break;
      }
    }
  const v1097 = stdlib.ge(v1069, v1094);
  const v1098 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1081), null);
  let v1099;
  switch (v1098[0]) {
    case 'None': {
      const v1100 = v1098[1];
      v1099 = false;
      
      break;
      }
    case 'Some': {
      const v1101 = v1098[1];
      v1099 = true;
      
      break;
      }
    }
  const v1102 = v1097 ? v1099 : false;
  if (v1102) {
    const v1103 = v1068[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
    const v1104 = v1103[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
    const v1105 = stdlib.mul(v1104, v832);
    const v1107 = stdlib.div(v1105, v818);
    let v1109;
    switch (v1093[0]) {
      case 'None': {
        const v1110 = v1093[1];
        v1109 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v1111 = v1093[1];
        v1109 = v1111;
        
        break;
        }
      }
    const v1112 = stdlib.mul(v1107, v1109);
    const v1113 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1081), null);
    let v1114;
    switch (v1113[0]) {
      case 'None': {
        const v1115 = v1113[1];
        v1114 = v834;
        
        break;
        }
      case 'Some': {
        const v1116 = v1113[1];
        v1114 = v1116;
        
        break;
        }
      }
    const v1120 = stdlib.sub(v1069, v1112);
    ;
    const v1123 = stdlib.sub(v1061, stdlib.checkedBigNumberify('./index.rsh:159:43:decimal', stdlib.UInt_max, '1'));
    const v1883 = v1123;
    const v1885 = v1068;
    const v1886 = v1120;
    const v1887 = stdlib.gt(v1123, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
    const v1888 = stdlib.gt(v1104, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
    const v1889 = v1887 ? v1888 : false;
    if (v1889) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    const v1129 = 'claimFailed         ';
    null;
    const v1130 = v1068[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
    const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
    const v1893 = v1061;
    const v1895 = v1068;
    const v1896 = v1069;
    const v1897 = stdlib.gt(v1061, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
    const v1898 = stdlib.gt(v1131, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
    const v1899 = v1897 ? v1898 : false;
    if (v1899) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function _Contributors_contribute18(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributors_contribute18 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributors_contribute18 expects to receive an interact object as its second argument.`));}
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
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '48'));
  const ctc10 = stdlib.T_Object({
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
    title: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc11]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc14 = stdlib.T_Tuple([ctc3]);
  
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
  
  
  const [v753, v754, v760, v813, v818, v826, v831, v832, v833, v834, v835, v841, v842] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'), [ctc1, ctc10, ctc3, ctc3, ctc3, ctc1, ctc11, ctc3, ctc3, ctc1, ctc3, ctc13, ctc3]);
  const v854 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:96:39:application call to [unknown function] (defined at: ./index.rsh:96:39:function exp)', 'at ./index.rsh:96:39:application call to [unknown function] (defined at: ./index.rsh:96:39:function exp)'],
    msg: 'in',
    who: 'Contributors_contribute'
    });
  const v855 = v854[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v753, v754, v760, v813, v818, v826, v831, v832, v833, v834, v835, v841, v842, v854],
    evt_cnt: 1,
    funcNum: 15,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v855, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v862], secs: v864, time: v863, didSend: v187, from: v861 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributors_contribute"
        });
      const v866 = v862[stdlib.checkedBigNumberify('./index.rsh:96:7:spread', stdlib.UInt_max, '0')];
      const v868 = stdlib.add(v842, v866);
      sim_r.txns.push({
        amt: v866,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v871 = null;
      const v872 = await txn1.getOutput('Contributors_contribute', 'v871', ctc0, v871);
      
      await stdlib.simMapSet(sim_r, 0, v861, v861);
      await stdlib.simMapSet(sim_r, 2, v861, null);
      await stdlib.simMapSet(sim_r, 1, v861, v866);
      const v879 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:103:20:decimal', stdlib.UInt_max, '1'));
      const v880 = stdlib.add(v832, v866);
      const v881 = v754.hardCap;
      const v883 = stdlib.ge(v880, v881);
      const v884 = v883 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v885 = stdlib.eq(v884, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v1902 = v885;
      const v1903 = v880;
      const v1904 = v879;
      const v1905 = v861;
      const v1906 = v863;
      const v1908 = v841;
      const v1909 = v868;
      const v1910 = stdlib.le(v835, v813);
      const v1911 = v1910 ? v885 : false;
      if (v1911) {
        sim_r.isHalt = false;
        }
      else {
        const v1915 = stdlib.eq(v884, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v1915) {
          const v1916 = 'passed              ';
          null;
          const v1917 = stdlib.div(v868, stdlib.checkedBigNumberify('./index.rsh:114:28:decimal', stdlib.UInt_max, '100'));
          const v1918 = stdlib.sub(v868, v1917);
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }
        else {
          const v1978 = v754.softCap;
          const v1979 = stdlib.ge(v880, v1978);
          if (v1979) {
            const v1980 = 'passed              ';
            null;
            const v1981 = stdlib.div(v868, stdlib.checkedBigNumberify('./index.rsh:141:29:decimal', stdlib.UInt_max, '100'));
            const v1982 = stdlib.sub(v868, v1981);
            sim_r.txns.push({
              kind: 'from',
              to: v753,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v2042 = 'failed              ';
            null;
            sim_r.isHalt = false;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc10, ctc3, ctc3, ctc3, ctc1, ctc11, ctc3, ctc3, ctc1, ctc3, ctc13, ctc3, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v862], secs: v864, time: v863, didSend: v187, from: v861 } = txn1;
  undefined /* setApiDetails */;
  const v866 = v862[stdlib.checkedBigNumberify('./index.rsh:96:7:spread', stdlib.UInt_max, '0')];
  const v868 = stdlib.add(v842, v866);
  ;
  const v871 = null;
  const v872 = await txn1.getOutput('Contributors_contribute', 'v871', ctc0, v871);
  if (v187) {
    stdlib.protect(ctc0, await interact.out(v862, v872), {
      at: './index.rsh:96:8:application',
      fs: ['at ./index.rsh:96:8:application call to [unknown function] (defined at: ./index.rsh:96:8:function exp)', 'at ./index.rsh:99:10:application call to "notify" (defined at: ./index.rsh:98:29:function exp)', 'at ./index.rsh:98:29:application call to [unknown function] (defined at: ./index.rsh:98:29:function exp)'],
      msg: 'out',
      who: 'Contributors_contribute'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v861, v861);
  await stdlib.mapSet(map2, v861, null);
  await stdlib.mapSet(map1, v861, v866);
  const v879 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:103:20:decimal', stdlib.UInt_max, '1'));
  const v880 = stdlib.add(v832, v866);
  const v881 = v754.hardCap;
  const v883 = stdlib.ge(v880, v881);
  const v884 = v883 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v885 = stdlib.eq(v884, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v1902 = v885;
  const v1903 = v880;
  const v1904 = v879;
  const v1905 = v861;
  const v1906 = v863;
  const v1908 = v841;
  const v1909 = v868;
  const v1910 = stdlib.le(v835, v813);
  const v1911 = v1910 ? v885 : false;
  if (v1911) {
    return;
    }
  else {
    const v1915 = stdlib.eq(v884, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v1915) {
      const v1916 = 'passed              ';
      null;
      const v1917 = stdlib.div(v868, stdlib.checkedBigNumberify('./index.rsh:114:28:decimal', stdlib.UInt_max, '100'));
      const v1918 = stdlib.sub(v868, v1917);
      ;
      return;
      }
    else {
      const v1978 = v754.softCap;
      const v1979 = stdlib.ge(v880, v1978);
      if (v1979) {
        const v1980 = 'passed              ';
        null;
        const v1981 = stdlib.div(v868, stdlib.checkedBigNumberify('./index.rsh:141:29:decimal', stdlib.UInt_max, '100'));
        const v1982 = stdlib.sub(v868, v1981);
        ;
        return;
        }
      else {
        const v2042 = 'failed              ';
        null;
        return;
        }}}
  
  
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
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '48'));
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
  const ctc14 = stdlib.T_Token;
  const ctc15 = stdlib.T_Tuple([ctc3]);
  const ctc16 = stdlib.T_Bool;
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3, ctc16]);
  const ctc18 = stdlib.T_Array(ctc17, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc19 = stdlib.T_Tuple([]);
  
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
  
  
  const v720 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v721 = [v720];
  const v732 = stdlib.protect(ctc8, interact.getParams, 'for Deployer\'s interact field getParams');
  const v733 = v732.name;
  const v734 = v732.symbol;
  const v735 = v732.tokenid;
  const v736 = stdlib.protect(ctc13, interact.getProject, 'for Deployer\'s interact field getProject');
  
  const txn1 = await (ctc.sendrecv({
    args: [v736, v733, v734, v735],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13, ctc6, ctc7, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v754, v755, v756, v757], secs: v759, time: v758, didSend: v63, from: v753 } = txn1;
      
      ;
      const v760 = v754.id;
      const v761 = 'created             ';
      null;
      const v762 = '                                                                                                ';
      const v763 = '                                ';
      const v764 = stdlib.simTokenNew(sim_r, v755, v756, v762, v763, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v765 = await txn1.getOutput('internal', 'v764', ctc14, v764);
      const v775 = v721[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
      const v777 = v775[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '1')];
      const v778 = v775[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '2')];
      const v779 = [stdlib.UInt_max, v777, v778];
      const v780 = stdlib.Array_set(v721, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v779);
      const v782 = v780[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
      const v783 = v782[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
      const v785 = v782[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '2')];
      const v786 = [v783, stdlib.UInt_max, v785];
      const v787 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v786);
      const v788 = v787[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
      const v789 = v788[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
      const v790 = v788[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '1')];
      const v792 = [v789, v790, false];
      const v793 = stdlib.Array_set(v787, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v792);
      const v794 = 'tokenCreated        ';
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v754, v755, v756, v757], secs: v759, time: v758, didSend: v63, from: v753 } = txn1;
  ;
  const v760 = v754.id;
  const v761 = 'created             ';
  null;
  const v762 = '                                                                                                ';
  const v763 = '                                ';
  const v764 = undefined /* TokenNew */;
  const v765 = await txn1.getOutput('internal', 'v764', ctc14, v764);
  const v775 = v721[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
  const v777 = v775[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '1')];
  const v778 = v775[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '2')];
  const v779 = [stdlib.UInt_max, v777, v778];
  const v780 = stdlib.Array_set(v721, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v779);
  const v782 = v780[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
  const v783 = v782[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
  const v785 = v782[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '2')];
  const v786 = [v783, stdlib.UInt_max, v785];
  const v787 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v786);
  const v788 = v787[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
  const v789 = v788[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0')];
  const v790 = v788[stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '1')];
  const v792 = [v789, v790, false];
  const v793 = stdlib.Array_set(v787, stdlib.checkedBigNumberify('./index.rsh:64:25:application', stdlib.UInt_max, '0'), v792);
  const v794 = 'tokenCreated        ';
  null;
  const v795 = v793[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '0')];
  const v796 = v795[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v753, v754, v758, v760, v765, v793],
    evt_cnt: 0,
    funcNum: 1,
    lct: v758,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '0'), [[v796, v765]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v799, time: v798, didSend: v91, from: v797 } = txn2;
      
      const v800 = v793[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '0')];
      const v801 = v800[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '1')];
      ;
      const v803 = v800[stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '0')];
      const v804 = stdlib.add(v803, v801);
      const v808 = v800[stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '2')];
      const v809 = [v804, v801, v808];
      const v810 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '0'), v809);
      sim_r.txns.push({
        amt: v801,
        kind: 'to',
        tok: v765
        });
      const v813 = stdlib.add(v758, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc13, ctc3, ctc3, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v799, time: v798, didSend: v91, from: v797 } = txn2;
  const v800 = v793[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '0')];
  const v801 = v800[stdlib.checkedBigNumberify('./index.rsh:68:38:application', stdlib.UInt_max, '1')];
  ;
  const v803 = v800[stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '0')];
  const v804 = stdlib.add(v803, v801);
  const v808 = v800[stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '2')];
  const v809 = [v804, v801, v808];
  const v810 = stdlib.Array_set(v793, stdlib.checkedBigNumberify('./index.rsh:68:11:dot', stdlib.UInt_max, '0'), v809);
  ;
  const v811 = stdlib.addressEq(v753, v797);
  stdlib.assert(v811, {
    at: './index.rsh:68:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v813 = stdlib.add(v758, stdlib.checkedBigNumberify('./index.rsh:5:18:decimal', stdlib.UInt_max, '20'));
  const txn3 = await (ctc.sendrecv({
    args: [v753, v754, v760, v765, v798, v810, v813],
    evt_cnt: 0,
    funcNum: 2,
    lct: v798,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v816, time: v815, didSend: v98, from: v814 } = txn3;
      
      ;
      const v818 = v754.PrivateSaleAmt;
      const v819 = v810[stdlib.checkedBigNumberify('./index.rsh:76:37:application', stdlib.UInt_max, '0')];
      const v820 = v819[stdlib.checkedBigNumberify('./index.rsh:76:37:application', stdlib.UInt_max, '0')];
      const v821 = stdlib.gt(v818, v820);
      if (v821) {
        const v825 = stdlib.sub(v820, v818);
        const v826 = v754.owner;
        const v830 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:54:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v825);
        sim_r.txns.push({
          kind: 'from',
          to: v826,
          tok: undefined /* Nothing */
          });
        const v831 = true;
        const v832 = stdlib.checkedBigNumberify('./index.rsh:93:21:decimal', stdlib.UInt_max, '0');
        const v833 = stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '0');
        const v834 = v753;
        const v835 = v815;
        const v836 = v798;
        const v841 = v810;
        const v842 = v830;
        
        if (await (async () => {
          const v846 = stdlib.le(v836, v813);
          const v847 = v846 ? v831 : false;
          
          return v847;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v896 = v754.hardCap;
          const v897 = stdlib.ge(v832, v896);
          const v898 = v897 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v899 = stdlib.eq(v898, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v899) {
            const v901 = 'passed              ';
            null;
            const v903 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:114:28:decimal', stdlib.UInt_max, '100'));
            const v907 = stdlib.sub(v842, v903);
            sim_r.txns.push({
              kind: 'from',
              to: v753,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            const v1027 = v754.softCap;
            const v1028 = stdlib.ge(v832, v1027);
            if (v1028) {
              const v1030 = 'passed              ';
              null;
              const v1032 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:141:29:decimal', stdlib.UInt_max, '100'));
              const v1036 = stdlib.sub(v842, v1032);
              sim_r.txns.push({
                kind: 'from',
                to: v753,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }
            else {
              const v1157 = 'failed              ';
              null;
              sim_r.isHalt = false;
              }}}}
      else {
        const v1252 = v754.owner;
        const v1256 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:54:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v820);
        sim_r.txns.push({
          kind: 'from',
          to: v1252,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v753,
          tok: undefined /* Nothing */
          });
        const v1263 = v819[stdlib.checkedBigNumberify('./index.rsh:81:26:application', stdlib.UInt_max, '1')];
        stdlib.simTokenBurn(sim_r, v765, v1263);
        stdlib.simTokenDestroy(sim_r, v765);
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
    tys: [ctc1, ctc13, ctc3, ctc14, ctc3, ctc18, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v816, time: v815, didSend: v98, from: v814 } = txn3;
  ;
  const v817 = stdlib.addressEq(v753, v814);
  stdlib.assert(v817, {
    at: './index.rsh:75:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v818 = v754.PrivateSaleAmt;
  const v819 = v810[stdlib.checkedBigNumberify('./index.rsh:76:37:application', stdlib.UInt_max, '0')];
  const v820 = v819[stdlib.checkedBigNumberify('./index.rsh:76:37:application', stdlib.UInt_max, '0')];
  const v821 = stdlib.gt(v818, v820);
  if (v821) {
    const v825 = stdlib.sub(v820, v818);
    const v826 = v754.owner;
    const v830 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:54:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v825);
    ;
    let v831 = true;
    let v832 = stdlib.checkedBigNumberify('./index.rsh:93:21:decimal', stdlib.UInt_max, '0');
    let v833 = stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '0');
    let v834 = v753;
    let v835 = v815;
    let v836 = v798;
    let v841 = v810;
    let v842 = v830;
    
    while (await (async () => {
      const v846 = stdlib.le(v836, v813);
      const v847 = v846 ? v831 : false;
      
      return v847;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 15,
        out_tys: [ctc15],
        timeoutAt: ['time', v813],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v753, v754, v760, v813, v818, v826, v831, v832, v833, v834, v835, v841, v842],
          evt_cnt: 0,
          funcNum: 16,
          lct: v835,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v890, time: v889, didSend: v225, from: v888 } = txn5;
            
            ;
            const v893 = 'timeout             ';
            null;
            const cv831 = v831;
            const cv832 = v832;
            const cv833 = v833;
            const cv834 = v834;
            const cv835 = v889;
            const cv836 = v835;
            const cv841 = v841;
            const cv842 = v842;
            
            await (async () => {
              const v831 = cv831;
              const v832 = cv832;
              const v833 = cv833;
              const v834 = cv834;
              const v835 = cv835;
              const v836 = cv836;
              const v841 = cv841;
              const v842 = cv842;
              
              if (await (async () => {
                const v846 = stdlib.le(v836, v813);
                const v847 = v846 ? v831 : false;
                
                return v847;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v896 = v754.hardCap;
                const v897 = stdlib.ge(v832, v896);
                const v898 = v897 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v899 = stdlib.eq(v898, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                if (v899) {
                  const v901 = 'passed              ';
                  null;
                  const v903 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:114:28:decimal', stdlib.UInt_max, '100'));
                  const v907 = stdlib.sub(v842, v903);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v753,
                    tok: undefined /* Nothing */
                    });
                  sim_r.isHalt = false;
                  }
                else {
                  const v1027 = v754.softCap;
                  const v1028 = stdlib.ge(v832, v1027);
                  if (v1028) {
                    const v1030 = 'passed              ';
                    null;
                    const v1032 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:141:29:decimal', stdlib.UInt_max, '100'));
                    const v1036 = stdlib.sub(v842, v1032);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v753,
                      tok: undefined /* Nothing */
                      });
                    sim_r.isHalt = false;
                    }
                  else {
                    const v1157 = 'failed              ';
                    null;
                    sim_r.isHalt = false;
                    }}}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc13, ctc3, ctc3, ctc3, ctc1, ctc16, ctc3, ctc3, ctc1, ctc3, ctc18, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v890, time: v889, didSend: v225, from: v888 } = txn5;
        ;
        const v891 = stdlib.addressEq(v753, v888);
        stdlib.assert(v891, {
          at: './index.rsh:107:12:dot',
          fs: ['at ./index.rsh:106:33:application call to [unknown function] (defined at: ./index.rsh:106:33:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v893 = 'timeout             ';
        null;
        const cv831 = v831;
        const cv832 = v832;
        const cv833 = v833;
        const cv834 = v834;
        const cv835 = v889;
        const cv836 = v835;
        const cv841 = v841;
        const cv842 = v842;
        
        v831 = cv831;
        v832 = cv832;
        v833 = cv833;
        v834 = cv834;
        v835 = cv835;
        v836 = cv836;
        v841 = cv841;
        v842 = cv842;
        
        continue;
        }
      else {
        const {data: [v862], secs: v864, time: v863, didSend: v187, from: v861 } = txn4;
        undefined /* setApiDetails */;
        const v866 = v862[stdlib.checkedBigNumberify('./index.rsh:96:7:spread', stdlib.UInt_max, '0')];
        const v868 = stdlib.add(v842, v866);
        ;
        const v871 = null;
        await txn4.getOutput('Contributors_contribute', 'v871', ctc0, v871);
        await stdlib.mapSet(map0, v861, v861);
        await stdlib.mapSet(map2, v861, null);
        await stdlib.mapSet(map1, v861, v866);
        const v879 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:103:20:decimal', stdlib.UInt_max, '1'));
        const v880 = stdlib.add(v832, v866);
        const v881 = v754.hardCap;
        const v883 = stdlib.ge(v880, v881);
        const v884 = v883 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v885 = stdlib.eq(v884, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const cv831 = v885;
        const cv832 = v880;
        const cv833 = v879;
        const cv834 = v861;
        const cv835 = v863;
        const cv836 = v835;
        const cv841 = v841;
        const cv842 = v868;
        
        v831 = cv831;
        v832 = cv832;
        v833 = cv833;
        v834 = cv834;
        v835 = cv835;
        v836 = cv836;
        v841 = cv841;
        v842 = cv842;
        
        continue;}
      
      }
    const v896 = v754.hardCap;
    const v897 = stdlib.ge(v832, v896);
    const v898 = v897 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    const v899 = stdlib.eq(v898, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    if (v899) {
      const v901 = 'passed              ';
      null;
      const v903 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:114:28:decimal', stdlib.UInt_max, '100'));
      const v907 = stdlib.sub(v842, v903);
      ;
      const txn4 = await (ctc.sendrecv({
        args: [v753, v760, v818, v826, v832, v833, v834, v841, v907],
        evt_cnt: 0,
        funcNum: 4,
        lct: v835,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:116:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v910, time: v909, didSend: v246, from: v908 } = txn4;
          
          ;
          const v917 = stdlib.sub(v907, v907);
          sim_r.txns.push({
            kind: 'from',
            to: v826,
            tok: undefined /* Nothing */
            });
          const v918 = v841[stdlib.checkedBigNumberify('./index.rsh:119:19:application', stdlib.UInt_max, '0')];
          const v919 = v918[stdlib.checkedBigNumberify('./index.rsh:119:19:application', stdlib.UInt_max, '0')];
          const v920 = stdlib.div(v919, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '100'));
          const v924 = stdlib.sub(v917, v920);
          sim_r.txns.push({
            kind: 'from',
            to: v753,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v910, time: v909, didSend: v246, from: v908 } = txn4;
      ;
      const v911 = stdlib.addressEq(v753, v908);
      stdlib.assert(v911, {
        at: './index.rsh:116:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v917 = stdlib.sub(v907, v907);
      ;
      const v918 = v841[stdlib.checkedBigNumberify('./index.rsh:119:19:application', stdlib.UInt_max, '0')];
      const v919 = v918[stdlib.checkedBigNumberify('./index.rsh:119:19:application', stdlib.UInt_max, '0')];
      const v920 = stdlib.div(v919, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '100'));
      const v924 = stdlib.sub(v917, v920);
      ;
      const txn5 = await (ctc.sendrecv({
        args: [v753, v760, v818, v826, v832, v833, v834, v841, v919, v924],
        evt_cnt: 0,
        funcNum: 5,
        lct: v909,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:123:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v927, time: v926, didSend: v263, from: v925 } = txn5;
          
          ;
          const v931 = v919;
          const v932 = v833;
          const v933 = v926;
          const v939 = v841;
          const v940 = v924;
          
          if (await (async () => {
            const v944 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
            const v945 = stdlib.gt(v931, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
            const v946 = v944 ? v945 : false;
            
            return v946;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v753,
              tok: undefined /* Nothing */
              });
            const v1012 = v939[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
            const v1013 = v1012[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v826,
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
        tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v927, time: v926, didSend: v263, from: v925 } = txn5;
      ;
      const v928 = stdlib.addressEq(v753, v925);
      stdlib.assert(v928, {
        at: './index.rsh:123:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      let v931 = v919;
      let v932 = v833;
      let v933 = v926;
      let v939 = v841;
      let v940 = v924;
      
      while (await (async () => {
        const v944 = stdlib.gt(v932, stdlib.checkedBigNumberify('./index.rsh:126:25:decimal', stdlib.UInt_max, '0'));
        const v945 = stdlib.gt(v931, stdlib.checkedBigNumberify('./index.rsh:126:50:decimal', stdlib.UInt_max, '0'));
        const v946 = v944 ? v945 : false;
        
        return v946;})()) {
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc19],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v953], secs: v955, time: v954, didSend: v301, from: v952 } = txn6;
        undefined /* setApiDetails */;
        ;
        const v957 = null;
        await txn6.getOutput('Contributors_claimToken', 'v957', ctc0, v957);
        const v964 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v952), null);
        let v965;
        switch (v964[0]) {
          case 'None': {
            const v966 = v964[1];
            v965 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v967 = v964[1];
            v965 = v967;
            
            break;
            }
          }
        const v968 = stdlib.ge(v940, v965);
        const v969 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v952), null);
        let v970;
        switch (v969[0]) {
          case 'None': {
            const v971 = v969[1];
            v970 = false;
            
            break;
            }
          case 'Some': {
            const v972 = v969[1];
            v970 = true;
            
            break;
            }
          }
        const v973 = v968 ? v970 : false;
        if (v973) {
          const v974 = v939[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
          const v975 = v974[stdlib.checkedBigNumberify('./index.rsh:130:22:application', stdlib.UInt_max, '0')];
          const v976 = stdlib.mul(v975, v832);
          const v978 = stdlib.div(v976, v818);
          let v980;
          switch (v964[0]) {
            case 'None': {
              const v981 = v964[1];
              v980 = stdlib.checkedBigNumberify('./index.rsh:121:50:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v982 = v964[1];
              v980 = v982;
              
              break;
              }
            }
          const v983 = stdlib.mul(v978, v980);
          const v984 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v952), null);
          let v985;
          switch (v984[0]) {
            case 'None': {
              const v986 = v984[1];
              v985 = v834;
              
              break;
              }
            case 'Some': {
              const v987 = v984[1];
              v985 = v987;
              
              break;
              }
            }
          const v991 = stdlib.sub(v940, v983);
          ;
          const v992 = stdlib.sub(v932, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '1'));
          const cv931 = v992;
          const cv932 = v975;
          const cv933 = v954;
          const cv939 = v939;
          const cv940 = v991;
          
          v931 = cv931;
          v932 = cv932;
          v933 = cv933;
          v939 = cv939;
          v940 = cv940;
          
          continue;}
        else {
          const v1000 = 'claimFailed         ';
          null;
          const v1001 = v939[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
          const v1002 = v1001[stdlib.checkedBigNumberify('./index.rsh:135:34:application', stdlib.UInt_max, '0')];
          const cv931 = v932;
          const cv932 = v1002;
          const cv933 = v954;
          const cv939 = v939;
          const cv940 = v940;
          
          v931 = cv931;
          v932 = cv932;
          v933 = cv933;
          v939 = cv939;
          v940 = cv940;
          
          continue;}
        
        }
      ;
      const v1012 = v939[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      const v1013 = v1012[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
      ;
      return;
      
      
      
      
      }
    else {
      const v1027 = v754.softCap;
      const v1028 = stdlib.ge(v832, v1027);
      if (v1028) {
        const v1030 = 'passed              ';
        null;
        const v1032 = stdlib.div(v842, stdlib.checkedBigNumberify('./index.rsh:141:29:decimal', stdlib.UInt_max, '100'));
        const v1036 = stdlib.sub(v842, v1032);
        ;
        const txn4 = await (ctc.sendrecv({
          args: [v753, v760, v818, v826, v832, v833, v834, v841, v1036],
          evt_cnt: 0,
          funcNum: 8,
          lct: v835,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:143:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1039, time: v1038, didSend: v374, from: v1037 } = txn4;
            
            ;
            const v1046 = stdlib.sub(v1036, v1036);
            sim_r.txns.push({
              kind: 'from',
              to: v826,
              tok: undefined /* Nothing */
              });
            const v1047 = v841[stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, '0')];
            const v1048 = v1047[stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, '0')];
            const v1049 = stdlib.div(v1048, stdlib.checkedBigNumberify('./index.rsh:146:33:decimal', stdlib.UInt_max, '100'));
            const v1053 = stdlib.sub(v1046, v1049);
            sim_r.txns.push({
              kind: 'from',
              to: v753,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1039, time: v1038, didSend: v374, from: v1037 } = txn4;
        ;
        const v1040 = stdlib.addressEq(v753, v1037);
        stdlib.assert(v1040, {
          at: './index.rsh:143:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1046 = stdlib.sub(v1036, v1036);
        ;
        const v1047 = v841[stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, '0')];
        const v1048 = v1047[stdlib.checkedBigNumberify('./index.rsh:146:20:application', stdlib.UInt_max, '0')];
        const v1049 = stdlib.div(v1048, stdlib.checkedBigNumberify('./index.rsh:146:33:decimal', stdlib.UInt_max, '100'));
        const v1053 = stdlib.sub(v1046, v1049);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v753, v760, v818, v826, v832, v833, v834, v841, v1048, v1053],
          evt_cnt: 0,
          funcNum: 9,
          lct: v1038,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1056, time: v1055, didSend: v391, from: v1054 } = txn5;
            
            ;
            const v1060 = v1048;
            const v1061 = v833;
            const v1062 = v1055;
            const v1068 = v841;
            const v1069 = v1053;
            
            if (await (async () => {
              const v1073 = stdlib.gt(v1061, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
              const v1074 = stdlib.gt(v1060, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
              const v1075 = v1073 ? v1074 : false;
              
              return v1075;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v753,
                tok: undefined /* Nothing */
                });
              const v1141 = v1068[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
              const v1142 = v1141[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v826,
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
          tys: [ctc1, ctc3, ctc3, ctc1, ctc3, ctc3, ctc1, ctc18, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1056, time: v1055, didSend: v391, from: v1054 } = txn5;
        ;
        const v1057 = stdlib.addressEq(v753, v1054);
        stdlib.assert(v1057, {
          at: './index.rsh:150:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1060 = v1048;
        let v1061 = v833;
        let v1062 = v1055;
        let v1068 = v841;
        let v1069 = v1053;
        
        while (await (async () => {
          const v1073 = stdlib.gt(v1061, stdlib.checkedBigNumberify('./index.rsh:153:25:decimal', stdlib.UInt_max, '0'));
          const v1074 = stdlib.gt(v1060, stdlib.checkedBigNumberify('./index.rsh:153:50:decimal', stdlib.UInt_max, '0'));
          const v1075 = v1073 ? v1074 : false;
          
          return v1075;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 11,
            out_tys: [ctc19],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1082], secs: v1084, time: v1083, didSend: v429, from: v1081 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v1086 = null;
          await txn6.getOutput('Contributors_claimToken', 'v1086', ctc0, v1086);
          const v1093 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1081), null);
          let v1094;
          switch (v1093[0]) {
            case 'None': {
              const v1095 = v1093[1];
              v1094 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1096 = v1093[1];
              v1094 = v1096;
              
              break;
              }
            }
          const v1097 = stdlib.ge(v1069, v1094);
          const v1098 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1081), null);
          let v1099;
          switch (v1098[0]) {
            case 'None': {
              const v1100 = v1098[1];
              v1099 = false;
              
              break;
              }
            case 'Some': {
              const v1101 = v1098[1];
              v1099 = true;
              
              break;
              }
            }
          const v1102 = v1097 ? v1099 : false;
          if (v1102) {
            const v1103 = v1068[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
            const v1104 = v1103[stdlib.checkedBigNumberify('./index.rsh:157:22:application', stdlib.UInt_max, '0')];
            const v1105 = stdlib.mul(v1104, v832);
            const v1107 = stdlib.div(v1105, v818);
            let v1109;
            switch (v1093[0]) {
              case 'None': {
                const v1110 = v1093[1];
                v1109 = stdlib.checkedBigNumberify('./index.rsh:148:50:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1111 = v1093[1];
                v1109 = v1111;
                
                break;
                }
              }
            const v1112 = stdlib.mul(v1107, v1109);
            const v1113 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1081), null);
            let v1114;
            switch (v1113[0]) {
              case 'None': {
                const v1115 = v1113[1];
                v1114 = v834;
                
                break;
                }
              case 'Some': {
                const v1116 = v1113[1];
                v1114 = v1116;
                
                break;
                }
              }
            const v1120 = stdlib.sub(v1069, v1112);
            ;
            const v1123 = stdlib.sub(v1061, stdlib.checkedBigNumberify('./index.rsh:159:43:decimal', stdlib.UInt_max, '1'));
            const cv1060 = v1104;
            const cv1061 = v1123;
            const cv1062 = v1083;
            const cv1068 = v1068;
            const cv1069 = v1120;
            
            v1060 = cv1060;
            v1061 = cv1061;
            v1062 = cv1062;
            v1068 = cv1068;
            v1069 = cv1069;
            
            continue;}
          else {
            const v1129 = 'claimFailed         ';
            null;
            const v1130 = v1068[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
            const v1131 = v1130[stdlib.checkedBigNumberify('./index.rsh:162:21:application', stdlib.UInt_max, '0')];
            const cv1060 = v1131;
            const cv1061 = v1061;
            const cv1062 = v1083;
            const cv1068 = v1068;
            const cv1069 = v1069;
            
            v1060 = cv1060;
            v1061 = cv1061;
            v1062 = cv1062;
            v1068 = cv1068;
            v1069 = cv1069;
            
            continue;}
          
          }
        ;
        const v1141 = v1068[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
        const v1142 = v1141[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
        ;
        return;
        
        
        
        
        }
      else {
        const v1157 = 'failed              ';
        null;
        const txn4 = await (ctc.sendrecv({
          args: [v753, v760, v826, v833, v834, v841, v842],
          evt_cnt: 0,
          funcNum: 12,
          lct: v835,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:172:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1160, time: v1159, didSend: v494, from: v1158 } = txn4;
            
            ;
            const v1163 = v842;
            const v1164 = v833;
            const v1165 = v1159;
            const v1171 = v841;
            const v1172 = v842;
            
            if (await (async () => {
              const v1175 = stdlib.gt(v1164, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
              const v1176 = stdlib.gt(v1163, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
              const v1177 = v1175 ? v1176 : false;
              
              return v1177;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v753,
                tok: undefined /* Nothing */
                });
              const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
              const v1236 = v1235[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v826,
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
          tys: [ctc1, ctc3, ctc1, ctc3, ctc1, ctc18, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1160, time: v1159, didSend: v494, from: v1158 } = txn4;
        ;
        const v1161 = stdlib.addressEq(v753, v1158);
        stdlib.assert(v1161, {
          at: './index.rsh:172:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1163 = v842;
        let v1164 = v833;
        let v1165 = v1159;
        let v1171 = v841;
        let v1172 = v842;
        
        while (await (async () => {
          const v1175 = stdlib.gt(v1164, stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'));
          const v1176 = stdlib.gt(v1163, stdlib.checkedBigNumberify('./index.rsh:175:44:decimal', stdlib.UInt_max, '0'));
          const v1177 = v1175 ? v1176 : false;
          
          return v1177;})()) {
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 14,
            out_tys: [ctc19],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v1184], secs: v1186, time: v1185, didSend: v532, from: v1183 } = txn5;
          undefined /* setApiDetails */;
          ;
          const v1188 = null;
          await txn5.getOutput('Contributors_claimRefund', 'v1188', ctc0, v1188);
          const v1195 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1183), null);
          let v1196;
          switch (v1195[0]) {
            case 'None': {
              const v1197 = v1195[1];
              v1196 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1198 = v1195[1];
              v1196 = v1198;
              
              break;
              }
            }
          const v1199 = stdlib.ge(v1172, v1196);
          const v1200 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1183), null);
          let v1201;
          switch (v1200[0]) {
            case 'None': {
              const v1202 = v1200[1];
              v1201 = false;
              
              break;
              }
            case 'Some': {
              const v1203 = v1200[1];
              v1201 = true;
              
              break;
              }
            }
          const v1204 = v1199 ? v1201 : false;
          if (v1204) {
            let v1206;
            switch (v1195[0]) {
              case 'None': {
                const v1207 = v1195[1];
                v1206 = stdlib.checkedBigNumberify('./index.rsh:170:50:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v1208 = v1195[1];
                v1206 = v1208;
                
                break;
                }
              }
            const v1209 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1183), null);
            let v1210;
            switch (v1209[0]) {
              case 'None': {
                const v1211 = v1209[1];
                v1210 = v834;
                
                break;
                }
              case 'Some': {
                const v1212 = v1209[1];
                v1210 = v1212;
                
                break;
                }
              }
            const v1216 = stdlib.sub(v1172, v1206);
            ;
            const v1217 = stdlib.sub(v1164, stdlib.checkedBigNumberify('./index.rsh:181:25:decimal', stdlib.UInt_max, '1'));
            const cv1163 = v1216;
            const cv1164 = v1217;
            const cv1165 = v1185;
            const cv1171 = v1171;
            const cv1172 = v1216;
            
            v1163 = cv1163;
            v1164 = cv1164;
            v1165 = cv1165;
            v1171 = cv1171;
            v1172 = cv1172;
            
            continue;}
          else {
            const v1224 = 'refundFailed        ';
            null;
            const cv1163 = v1172;
            const cv1164 = v1164;
            const cv1165 = v1185;
            const cv1171 = v1171;
            const cv1172 = v1172;
            
            v1163 = cv1163;
            v1164 = cv1164;
            v1165 = cv1165;
            v1171 = cv1171;
            v1172 = cv1172;
            
            continue;}
          
          }
        ;
        const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
        const v1236 = v1235[stdlib.checkedBigNumberify('./index.rsh:190:18:application', stdlib.UInt_max, '0')];
        ;
        return;
        
        
        }}}
  else {
    const v1252 = v754.owner;
    const v1256 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:54:8:after expr stmt semicolon', stdlib.UInt_max, '0'), v820);
    ;
    ;
    const v1263 = v819[stdlib.checkedBigNumberify('./index.rsh:81:26:application', stdlib.UInt_max, '1')];
    undefined /* TokenBurn */;
    undefined /* TokenDestroy */;
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
  if (step == 17) {return _Contributors_claimRefund17(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_claimToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_claimToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Contributors_claimToken8(ctcTop, interact);}
  if (step == 13) {return _Contributors_claimToken13(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Contributors_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributors_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 18) {return _Contributors_contribute18(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Contributors_claimRefund()byte[0]`, `Contributors_claimToken()byte[0]`, `Contributors_contribute(uint64)byte[0]`, `_Contributors_claimToken11()byte[0]`, `_Contributors_claimToken7()byte[0]`],
    pure: [],
    sigs: [`Contributors_claimRefund()byte[0]`, `Contributors_claimToken()byte[0]`, `Contributors_contribute(uint64)byte[0]`, `_Contributors_claimToken11()byte[0]`, `_Contributors_claimToken7()byte[0]`]
    },
  appApproval: `BiAwAAEgEQjQAyhQkQHwA/gDBYAEiAQJWGQEAgsSDv0Cf/wDK5HX1rAJuZnxiAv2nfDsDAe18YyGBQwQqQSxBNkE4QTyBNgBgQENeAqZAfgCA6CNBgYmCQEAAQEAAQIBAwEEGLUOO3JjbGFpbUZhaWxlZAAAAAAAAAAAAAj//////////xi1DjtycGFzc2VkAAAAAAAAAAAAAAAAAAAiNQAxGEEPyCpkSSJbNQEhBFs1AjEZIxJBAAoxACghGa9mQg+UNhoAF0lBAGMiNQQjNQZJIRoMQAA5SSEbDEAAF0khHAxAAAghHBJEKkIGVyEbEkQqQgIKIRoSRDQBSSETDEAAByETEkRCABIhHRJEQv/ZSSEeDEAACCEeEkQqQgOKgdSjpeECEkQ2GgFCANo2GgIXNQQ2GgM2GgEXSSEEDEAF7UkhHwxAA1JJgQ8MQAGoSSEgDEAAsCEgEkQhFDQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSVcAIDX/IQlbNf4hCls1/YAEAEVqjrAyBjT9D0Q0/zEAEkSAGLUOO3J0aW1lb3V0AAAAAAAAAAAAAAAAADT+FlCwNP80AyQhBVg0/jT9NAMhDFs0AyENJFg0A4GoBCNYFzQDISFbNAMhIls0A4G5BCRYMgY0AyEjWzQDISQlWDQDISVbQgrmSCEUNAESRDQESSISTDQCEhFEKGQpZFArZFAnBGRQJwVkUEk1A0kkIQVYNf8hCls1/kk1BTX9gASYP1RKNP1QsDIGNP4MRDT9FzX8NPyIDkSACAAAAAAAAANnsCo1BzEAKDEAiA4fKTEAUDX7VyEKNPtMUGYxACgxAIgOCSOBKkxWZjEAKDEAiA37KTT8FlA1+0lXACE0+1BMVyoBUGY0AyEhWzT8CDX7NANXACA0/zQDIQlbNP40AyEMWzQDIQ0kWCMiNPs0/yEmWw9NIxI0+zQDISJbIwgxADIGNAMhI1s0AyEkJVg0AyElWzT8CEIJ9UkhFQxAAURIJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JFs1/lcoIDX9V0ggNfyBaFs1+1dwETX6ISdbNflJNQU1+IAEyzb4/jT4ULCACAAAAAAAAASksCo1BzEAiA0sVyEJSTX3IlVAAAYiNfZCAAw09yNbSTX1NfZCAAAxAIgNClcqAUk19CJVQAAGIjX1QgAGIzX1QgAANPk09g809RBBAGs09yJVQAAGIjX0QgAMNPcjW0k18zX0QgAAMQCIDMpXACFJNfIiVUAABzT8NfNCAA008lcBIEk18TXzQgAANPk09Ak18rEisgE09LIII7IQNPOyB7M0/zT+NP00/DTyNPsjCTIGNPo08kILmYAYtQ47cnJlZnVuZEZhaWxlZAAAAAAAAAAANP4WULA0/zT+NP00/DT5NPsyBjT6NPlCC2UhHxJEIRU0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/yEnWzX+gATKq843sDT/MQASRDT/NAMkWzQDVyggNANXUCA0/jQDgUhbMgY0A1dwETT+QgsNSSEODEABwEkhEwxAAVdIISg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQZbNf1XMCA1/CEHWzX7V1ggNfohKVs1+VeAETX4IQhbNfdJNQU19oAEn9ybtTT2ULCACAAAAAAAAAQ+sCo1BzEAiAt2VyEJSTX1IlVAAAYiNfRCAAw09SNbSTXzNfRCAAAxAIgLVFcqAUk18iJVQAAGIjXzQgAGIzXzQgAANPc09A808xBBAIE0+FcAESJbNfI09SJVQAAGIjXxQgAMNPUjW0k18DXxQgAANPI0+ws0/Qo08Qs18DEAiAr+VwAhSTXuIlVAAAc0+jXvQgANNO5XASBJNe0170IAALEisgE08LIII7IQNO+yB7M0/zT+NP00/DT7NPo08jT5IwkyBjT4NPc08AlCCUonBjT+FlCwNP80/jT9NPw0+zT6NPhXABEiWzT5MgY0+DT3QgklIQ4SRCEqNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrA0/zEAEkQ0/zQDJFs0AyEGWzQDVzAgNAMhB1s0A1dgIDQDIQhbNAMhD1syBjQDV4ARNAMhK1tCCMNIIQ40ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8kWzX+IQZbNf1XMCA1/CEHWzX7IQ9bNfpXYCA1+VeAETX4IQhbNfeABBf82y6wNP8xABJEsSKyATT3sggjshA0/LIHszT4VwARIltJNfYhEAo19TT3SQk09Qk19LEisgE09bIII7IQNP+yB7M0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+VA0+FA09hZQNPQWUChLAVcAf2cpSwFXfyJnSCEqNQEyBjUCQgkLSSERDEAClEkhCwxAAcBJIR0MQAFXSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEGWzX9VzAgNfwhB1s1+1dYIDX6ISlbNflXgBE1+CEIWzX3STUFNfaABNyqJt409lCwgAgAAAAAAAADvbAqNQcxAIgI21chCUk19SJVQAAGIjX0QgAMNPUjW0k18zX0QgAAMQCICLlXKgFJNfIiVUAABiI180IABiM180IAADT3NPQPNPMQQQCBNPhXABEiWzXyNPUiVUAABiI18UIADDT1I1tJNfA18UIAADTyNPsLNP0KNPELNfAxAIgIY1cAIUk17iJVQAAHNPo170IADTTuVwEgSTXtNe9CAACxIrIBNPCyCCOyEDTvsgezNP80/jT9NPw0+zT6NPkjCTTyMgY0+DT3NPAJQgYsJwY0/hZQsDT/NP40/TT8NPs0+jT5NPhXABEiWzIGNPg090IGByELEkQhCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABMyZklywNP8xABJENP80AyRbNAMhBls0A1cwIDQDIQdbNANXYCA0AyEIWzQDIQ9bMgY0A1eAETQDIStbQgWlSCERNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JFs1/iEGWzX9VzAgNfwhB1s1+yEPWzX6V2AgNflXgBE1+CEIWzX3gASRJzTzsDT/MQASRLEisgE097III7IQNPyyB7M0+FcAESJbSTX2IRAKNfU090kJNPUJNfSxIrIBNPWyCCOyEDT/sgezNP80/hZQNP0WUDT8UDT7FlA0+hZQNPlQNPhQNPYWUDT0FlAoSwFXAH9nKUsBV38iZ0ghCzUBMgY1AkIGcEkjDEABuUkhEgxAAOQhEhJEIRI0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFAnBWRQSTUDSUpXACA1/yQhBVg1/iEKWzX9IQ0lWDX8gARBsUBNsDT/MQASRDT+Ils1+zT8VwARSTX6Ils1+TT7NPkNQQBHNPk0+wk1+DT+ISwkWDX3sSKyATT4sggjshA097IHszT/NP40AyEJWzQDgZkEWzT7NPcjIiI0/zIGNAMhDFs0/CI0+AlCAmixIrIBNPmyCCOyEDT+ISwkWLIHs7EisgEiNPkJsggjshA0/7IHs7EisgEhLbIQNP2yIbNCBWNIIzQBEkQ0BEkiEkw0AhIRRChkKWRQK2RQJwRkUCcFZFBJNQNJSklXACA1/yQhBVg1/iEKWzX9IQxbNfwhDSVYNfuABJqLkXSwNPtXABFJNfohBFs1+TT6Ils0+QgWNPkWUDT6VxABUDX4NPk0/IgFhzT/MQASRDQDIQlbgRQINfc0/zT+UDT9FlA0/BZQMgYWUDT4UDT3FlAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBIRYhF1hnJwVLASEYgSVYZ0ghEjUBMgY1AkIEsUghLogFDCI0ARJENARJIhJMNAISEURJNQVJSiIhBVg1/yEFJFg1/iEJIQRYNf0hCls1/IAE28uQRDT/UDT+UDT9UDT8FlCwJa81+zT/geABWzX6gBi1DjtyY3JlYXRlZAAAAAAAAAAAAAAAAAA0+hZQsCEuiASbsSKyASEtshCB////////////AbIiIS+yIzT9siU0/rImgWCvsicyA7IoMgqyKbO0PDX5gAgAAAAAAAAC/DT5FlCwNPk1+DT7VwARNfcnBzT3VwgIUDT3VxABUEk19lcAEUk19VcACCcHUDT1VxABUEk19FcAEUk181cACDTzVwgIUChQNfKAGLUOO3J0b2tlbkNyZWF0ZWQAAAAAAAAAADT8FlCwMQA0/1AyBhZQNPoWUDT4FlA08lAoSwFXAH9nKUsBV39/ZytLAVf+f2cnBEsBIRYhF1hnJwVLASEYgR1YZ0gjNQEyBjUCQgNNNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT9NPUONPgQQQBmNPI081A09BZQNPUWUDT2FlA091A0+BZRBwhQNPkWUDT6FlA0+1A0/BZQNP5QNP8WUChLAVcAf2cpSwFXf39nK0sBV/5/ZycESwEhFiEXWGcnBUsBIRiBflhnSCEUNQEyBjUCQgLAIyI0+TTzISZbD00iEkEAXicINPQWULA0/yEQCjXxNP808Qk18LEisgE08bIII7IQNPKyB7M08jT0FlA09hZQNPdQNPkWUDT6FlA0+1A0/lA08BZQKEsBVwB/ZylLAVd/GmdIIRE1ATIGNQJCAlI0+TTzgZgDWw9BAF4nCDT0FlCwNP8hEAo18TT/NPEJNfCxIrIBNPGyCCOyEDTysgezNPI09BZQNPYWUDT3UDT5FlA0+hZQNPtQNP5QNPAWUChLAVcAf2cpSwFXfxpnSCEONQEyBjUCQgHogBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA09BZQsDTyNPQWUDT3UDT6FlA0+1A0/lA0/xZQKEsBVwB/ZylLAVd/CmdIIRU1ATIGNQJCAZg1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPwiDTT7Ig0QQQA5NPU09hZQNPcWUDT4UDT5FlA0+lA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfxpnSCEENQEyBjUCQgE9sSKyATT/sggjshA09bIHs7EisgE0/lcAESJbsggjshA0+LIHs0IA+TX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/CINNPsiDRBBADk09TT2FlA09xZQNPhQNPkWUDT6UDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/GmdIISg1ATIGNQJCALqxIrIBNP+yCCOyEDT1sgezsSKyATT+VwARIluyCCOyEDT4sgezQgB2Nf81/jX9Nfw1+zX6Nfk1+DX3NPwiDTT7Ig0QQQAwNPc0+BZQNPlQNPpQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38KZ0glNQEyBjUCQgBEsSKyATT/sggjshA097IHs7EisgE0/lcAESJbsggjshA0+bIHs0IAADEZIQsSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhLzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghGa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhERJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 5,
  stateSize: 634,
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
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
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
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes16",
                        "name": "elem1",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v754",
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
                "internalType": "struct T12",
                "name": "v755",
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
                "internalType": "struct T13",
                "name": "v756",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v757",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
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
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes16",
                        "name": "elem1",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v754",
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
                "internalType": "struct T12",
                "name": "v755",
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
                "internalType": "struct T13",
                "name": "v756",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v757",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T18",
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
                "name": "v1082",
                "type": "bool"
              }
            ],
            "internalType": "struct T38",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T39",
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
        "internalType": "struct T18",
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
                "name": "v1184",
                "type": "bool"
              }
            ],
            "internalType": "struct T44",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T45",
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
                "internalType": "struct T46",
                "name": "v862",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
                "name": "v953",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
    "name": "_reach_oe_v1086",
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
    "name": "_reach_oe_v1188",
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
    "name": "_reach_oe_v764",
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
    "name": "_reach_oe_v871",
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
    "name": "_reach_oe_v957",
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
        "internalType": "struct T18",
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
                "name": "v1082",
                "type": "bool"
              }
            ],
            "internalType": "struct T38",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T39",
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
        "internalType": "struct T18",
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
                "name": "v1184",
                "type": "bool"
              }
            ],
            "internalType": "struct T44",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T45",
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
                "internalType": "struct T46",
                "name": "v862",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
                "name": "v953",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
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
        "internalType": "struct T18",
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
        "internalType": "struct T18",
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
  Bytecode: `0x6080604052604051620073ff380380620073ff833981016040819052620000269162000a62565b600080554360035562000038620004ab565b7fe1627044e7f1dfd2feba5614c9dc2c665be89bfbe0add71b8671f94ac604507033836040516200006b92919062000cc9565b60405180910390a180516000908190528151602090810182905282516040019190915281519082015152620000a334156007620003fe565b604081810180516618dc99585d195960ca1b9052516020848101515160800151835192516001600160601b031916835290820152600080516020620073df833981519152910160405180910390a1606081018051600090819052815160209081018290529151604090810182905260808401519190915283820151820151518151928301520160408051808303601f1901815282825260208581015190920151516001600160c01b031916918301919091529060280160408051808303601f1901815282825260608581015180516020808301519286015190870191909152938501528301919091529060800160408051601f19818403018152828252608086015151602084015291016040516020818303038152906040526000196012604051620001cf90620005d7565b620001e09695949392919062000d95565b604051809103906000f080158015620001fd573d6000803e3d6000fd5b506001600160a01b031660a0820181905260c082018190526040519081527fd716ac55108d12eb76bda3face62e6189b05c7fc31e5ab65d55450b49ccbe5c79060200160405180910390a160e0810180516000199052602080830180515182015183519092019190915280515160409081015183519015159101525190516200028a919060009062000428565b610100820181815290515161012083018051919091528051600019602090910152815151604090810151825190151591015290519051620002cf919060009062000428565b610140820181815290515161016083018051919091528151516020908101518251909101528051600060409091018190529151905162000310929062000428565b6101808201526101a0810180516b1d1bdad95b90dc99585d195960a21b905251602083810151606001516040805193516001600160601b031916845291830152600080516020620073df833981519152910160405180910390a162000374620005e5565b338152602080840180515182840152436040808501829052915151608090810151606086015260c08601516001600160a01b03169085015261018085015160a0850152600160008190555551620003ce9183910162000e00565b60405160208183030381529060405260029080519060200190620003f4929190620006e7565b5050505062000f05565b81620004245760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200043262000776565b60005b6001811015620004885784816001811062000454576200045462000d2f565b60200201518282600181106200046e576200046e62000d2f565b6020020152806200047f8162000e9e565b91505062000435565b50818184600181106200049f576200049f62000d2f565b60200201529392505050565b60408051610220810190915260006101c082018181526101e08301829052610200830191909152815260208101620004e262000776565b815260408051602080820183526000808352818501929092528251606080820185528382528183018490528185018490528486019190915283518083018552838152818601526080850183905260a08501839052835190810184528281529081018290529182015260c082015260e0016200055c62000776565b815260408051606081018252600080825260208281018290529282015291019081526020016200058b62000776565b81526040805160608101825260008082526020828101829052928201529101908152602001620005ba62000776565b81526040805160208181019092526000815291015290565b905290565b611087806200635883390190565b6040518060c0016040528060006001600160a01b03168152602001620006ba604080516101608101825260008082526020808301829052835160e080820186528382528183018490528186018490526060808301859052608080840186905260a080850187905260c0808601889052888a0195909552828801879052818801879052885191820189528682528186018790528189018790529181018690529086015290840183905283018290526101008301829052610120830182905283518085019094528184528301529061014082015290565b8152602001600081526020016000815260200160006001600160a01b03168152602001620005d262000776565b828054620006f59062000ec8565b90600052602060002090601f01602090048101928262000719576000855562000764565b82601f106200073457805160ff191683800117855562000764565b8280016001018555821562000764579182015b828111156200076457825182559160200191906001019062000747565b5062000772929150620007c3565b5090565b60405180602001604052806001905b620007ac604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620007855790505090565b5b80821115620007725760008155600101620007c4565b604051608081016001600160401b03811182821017156200080b57634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b03811182821017156200080b57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200080b57634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b03811182821017156200080b57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620008bd57600080fd5b919050565b80516001600160c01b031981168114620008bd57600080fd5b600060e08284031215620008ee57600080fd5b60405160e081016001600160401b03811182821017156200091f57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526200096b60c08401620008c2565b60c08201525092915050565b6000608082840312156200098a57600080fd5b62000994620007da565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b600060408284031215620009d157600080fd5b620009db62000811565b8251815260208301519091506001600160801b031981168114620009fe57600080fd5b602082015292915050565b60006020828403121562000a1c57600080fd5b62000a2662000842565b9151825250919050565b60006020828403121562000a4357600080fd5b62000a4d62000842565b905062000a5a82620008c2565b815292915050565b600081830361032081121562000a7757600080fd5b62000a8162000811565b83518152601f19820191506103008083121562000a9d57600080fd5b62000aa7620007da565b6102a084121562000ab757600080fd5b62000ac162000873565b93506020860151845262000ad860408701620008a5565b602085015262000aec8760608801620008db565b6040850152610140808701516060860152610160870151608086015262000b1888610180890162000977565b60a086015261020087015160c086015261022087015160e086015262000b426102408801620008a5565b61010086015261026087015161012086015262000b64886102808901620009be565b9085015283815262000b7b876102c0880162000a09565b602082015262000b90876102e0880162000a30565b604082015294015160608501526020810193909352509092915050565b80518252602081015162000bcc60208401826001600160a01b03169052565b50604081015162000c266040840182805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0808201519083015260c0908101516001600160c01b031916910152565b506060818101516101208481019190915260808301516101408086019190915260a0840151805161016087015260208082015161018088015260408201516101a08801529301516101c086015260c08401516101e086015260e08401516102008601526101008401516001600160a01b03166102208601529083015161024085015290910151805161026084015201516001600160801b03191661028090910152565b60006103408201905060018060a01b038416825282516020830152602083015162000cf960408401825162000bad565b6020810151516102e08401526040810151516001600160c01b031916610300840152606001516103209092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000d6d5760208185018101518683018201520162000d4f565b8181111562000d80576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000daa60c083018962000d45565b828103602084015262000dbe818962000d45565b9050828103604084015262000dd4818862000d45565b9050828103606084015262000dea818762000d45565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151610380840192919062000e2b8286018262000bad565b506040808601516102c08601526060808701516102e08701528360808801511661030087015260a08701519350610320860160005b600181101562000e92578551805183528581015186840152840151151584830152948401949082019060010162000e60565b50505050505092915050565b600060001982141562000ec157634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000edd57607f821691505b6020821081141562000eff57634e487b7160e01b600052602260045260246000fd5b50919050565b6154438062000f156000396000f3fe6080604052600436106101385760003560e01c806383230757116100b0578063a7661d541161006c578063a7661d54146102af578063ab53f2c6146102c2578063cadc2e7a146102e5578063de73699814610312578063e533a29d14610325578063f19b43521461033857005b80638323075714610246578063891a587f1461025b5780638e3147691461026e5780638f3c54f414610281578063928eb35114610294578063972b44481461029c57005b806339b777f0116100ff57806339b777f0146101b65780633bc5b7bf146101be5780634b7ab545146101eb5780636d700906146101fe5780637eea518c14610206578063817d57f31461021957005b806311faee8c146101415780631601377914610154578063190bbe9f146101675780631e93b0f1146101845780632c10a159146101a357005b3661013f57005b005b61013f61014f3660046141cf565b61034b565b61013f6101623660046141cf565b61036f565b61016f61038f565b60405190151581526020015b60405180910390f35b34801561019057600080fd5b506003545b60405190815260200161017b565b61013f6101b13660046141cf565b6103be565b61016f6103de565b3480156101ca57600080fd5b506101de6101d9366004614200565b6104bd565b60405161017b9190614251565b61013f6101f93660046141cf565b6104e9565b61016f610509565b61013f6102143660046141cf565b610535565b34801561022557600080fd5b50610239610234366004614200565b610555565b60405161017b9190614289565b34801561025257600080fd5b50600154610195565b61013f6102693660046141cf565b61057b565b61013f61027c3660046141cf565b61059b565b61013f61028f3660046141cf565b6105bb565b61016f6105db565b61016f6102aa3660046142bb565b61060a565b61013f6102bd3660046141cf565b61063a565b3480156102ce57600080fd5b506102d761065a565b60405161017b929190614300565b3480156102f157600080fd5b50610305610300366004614200565b6106f7565b60405161017b919061433a565b61013f6103203660046141cf565b61071d565b61013f6103333660046141cf565b61073d565b61013f6103463660046141cf565b61075d565b610353613aac565b61036b610365368490038401846144a8565b8261077d565b5050565b610377613aac565b61036b61038936849003840184614554565b82610936565b6000610399613ada565b6020810151600090526103aa613aac565b6103b48282610936565b6060015192915050565b6103c6613aac565b61036b6103d8368490038401846144a8565b82610e87565b60008054600714806103f25750600054600b145b6103fb57600080fd5b6000546007141561046f57306001600160a01b031663928eb3516040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610446573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046a919061457b565b905090565b600054600b14156104ba57306001600160a01b031663190bbe9f6040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610446573d6000803e3d6000fd5b90565b60408051606081018252600080825260208201819052918101919091526104e3826110ef565b92915050565b6104f1613aac565b61036b61050336849003840184614598565b826111cb565b6000610513613ada565b602081015160009052610524613aac565b61052e82826114c6565b5192915050565b61053d613aac565b61036b61054f368490038401846144a8565b8261198f565b60408051606081018252600080825260208201819052918101919091526104e382611ce5565b610583613aac565b61036b61059536849003840184614554565b826114c6565b6105a3613aac565b61036b6105b5368490038401846144a8565b82611dae565b6105c3613aac565b61036b6105d536849003840184614554565b82611f76565b60006105e5613ada565b6020810151600090526105f6613aac565b6106008282611f76565b6040015192915050565b6000610614613b09565b602081015151839052610625613aac565b61062f82826111cb565b608001519392505050565b610642613aac565b61036b610654368490038401846144a8565b826124b9565b60006060600054600280805461066f906145ef565b80601f016020809104026020016040519081016040528092919081815260200182805461069b906145ef565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526104e382612749565b610725613aac565b61036b610737368490038401846144a8565b8261280c565b610745613aac565b61036b610757368490038401846144a8565b826129d4565b610765613aac565b61036b610777368490038401846144a8565b82612c64565b61078d600e600054146029612ec6565b81516107a89015806107a157508251600154145b602a612ec6565b6000808055600280546107ba906145ef565b80601f01602080910402602001604051908101604052809291908181526020018280546107e6906145ef565b80156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b505050505080602001905181019061084b91906146b8565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338460405161087e92919061473f565b60405180910390a161089234156027612ec6565b80516108aa906001600160a01b031633146028612ec6565b6108b2613b36565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526080808601518551941660609485015260c0860180518487018051919091528588015181519095019490945283514393019290925260a08601518351909401939093525190519091015261093081612eec565b50505050565b610946600d600054146025612ec6565b815161096190158061095a57508251600154145b6026612ec6565b600080805560028054610973906145ef565b80601f016020809104026020016040519081016040528092919081815260200182805461099f906145ef565b80156109ec5780601f106109c1576101008083540402835291602001916109ec565b820191906000526020600020905b8154815290600101906020018083116109cf57829003601f168201915b5050505050806020019051810190610a0491906147fd565b9050610a0e613b6f565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b7891392733385604051610a3f92919061481a565b60405180910390a1610a5334156024612ec6565b604051600081527f882fa68ac03b3fa79f3936461f4afc8b07b8affac4f977ccfab42c24839a3c309060200160405180910390a160006020840152610a9733612749565b815260008151516001811115610aaf57610aaf61421d565b1415610ac15760006020820152610af1565b60018151516001811115610ad757610ad761421d565b1415610af157805160409081015190820181905260208201525b6000610afc33611ce5565b516001811115610b0e57610b0e61421d565b1415610b205760006060820152610b4b565b6001610b2b33611ce5565b516001811115610b3d57610b3d61421d565b1415610b4b57600160608201525b80602001518261010001511015610b63576000610b69565b80606001515b15610d9e5760008151516001811115610b8457610b8461421d565b1415610b965760006080820152610bc5565b60018151516001811115610bac57610bac61421d565b1415610bc55780516040015160a0820181905260808201525b8060800151826040015183608001518460e00151600060018110610beb57610beb614844565b602002015151610bfb9190614870565b610c05919061488f565b610c0f9190614870565b60c08201526000610c1f336110ef565b516001811115610c3157610c3161421d565b1415610c4f5760a08201516001600160a01b031660e0820152610c96565b6001610c5a336110ef565b516001811115610c6c57610c6c61421d565b1415610c9657610c7b336110ef565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015610cd7573d6000803e3d6000fd5b50610ce0613be3565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845190841691015260808086015184519091015260a0808601518451931692019190915260e08401515151908201515260c0830151610d4f906001906148b1565b602080830180519091019190915280514360409091015260e084015190516060015260c0820151610100840151610d8691906148b1565b602082015160800152610d9881613065565b50610930565b610120810180516a18db185a5b51985a5b195960aa1b90525160208301516040516000805160206153ee83398151915292610dda9290916148c8565b60405180910390a1610dea613be3565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260e087018051515184870180519190915260c08901518151909501949094528351439301929092529051825190910152610100850151905190910152610e8081613065565b5050505050565b610e97600160005414600b612ec6565b8151610eb2901580610eab57508251600154145b600c612ec6565b600080805560028054610ec4906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef0906145ef565b8015610f3d5780601f10610f1257610100808354040283529160200191610f3d565b820191906000526020600020905b815481529060010190602001808311610f2057829003601f168201915b5050505050806020019051810190610f559190614acf565b9050610f5f613c22565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610f9092919061473f565b60405180910390a1610fa434156008612ec6565b60a08201515160208101519051610fbb9190614b6a565b81515260a082018051516020908101518351909101528051516040908101518351901515910152518151610ff29190600090613193565b6020820152608082015160a08301516110239161101c913391906000602002015160200151613207565b6009612ec6565b815161103b906001600160a01b03163314600a612ec6565b6014826040015161104c9190614b6a565b6040820152611059613c60565b82516001600160a01b0390811682526020808501518184015260608086015160408086019190915260808088015190941691850191909152439284018390528482015160a08501528481015160c0850152600260005560019290925590516110c391839101614ce8565b604051602081830303815290604052600290805190602001906110e7929190613cae565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561113b5761113b61421d565b14156111bb576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561117c5761117c61421d565b600181111561118d5761118d61421d565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b6111db601260005414602f612ec6565b81516111f69015806111ef57508251600154145b6030612ec6565b600080805560028054611208906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611234906145ef565b80156112815780601f1061125657610100808354040283529160200191611281565b820191906000526020600020905b81548152906001019060200180831161126457829003601f168201915b50505050508060200190518101906112999190614d58565b90506112b16040518060200160405280600081525090565b6112c2826060015143106031612ec6565b60408051338152855160208083019190915286015151518183015290517fb9297d4b7f10b499fc5f315d265282570f2fa0e1c922922d1a20415e3ee7e5429181900360600190a16020840151515161131d903414602e612ec6565b604051600081527f59e5d16248053f76716bb281c5ad4ba6a87e3aa344c52e82358bcf04f635d0809060200160405180910390a1600060808401819052338082526004602090815260408084208054600161ff01600160b01b031990911662010000909502949094178417905560068252808420805462ff00ff19168417905560058252909220805460ff191682178155918601515151910181905560e08301516113c89190614b6a565b81526113d2613d32565b825181516001600160a01b03918216905260208085018051845190920191909152604080860151845190910152606080860151845182015260808087015185519091015260a080870151855194169301929092525101518251600191111561143b57600161143e565b60005b602083810180519290931490915283519151015261010083015161146490600190614b6a565b6020808301805160400192909252815133606090910152815143608090910152610140850151825160a00152610160850151915160c0019190915285015151516101808401516114b49190614b6a565b602082015160e00152610e808161321f565b6114d6601160005414602c612ec6565b81516114f19015806114ea57508251600154145b602d612ec6565b600080805560028054611503906145ef565b80601f016020809104026020016040519081016040528092919081815260200182805461152f906145ef565b801561157c5780601f106115515761010080835404028352916020019161157c565b820191906000526020600020905b81548152906001019060200180831161155f57829003601f168201915b50505050508060200190518101906115949190614e33565b905061159e613b6f565b7f1ed6ed56f0470e1af9be4761b3c156f20b39129ee8d14c41b9e55de5c2b8afb033856040516115cf92919061481a565b60405180910390a16115e33415602b612ec6565b604051600081527fa6ff35c2fb74d5340f39bd9ceb8c4e5f5d627046c60c464c80ff42d4cf4ad8709060200160405180910390a16000835261162433612749565b81526000815151600181111561163c5761163c61421d565b141561164e576000602082015261167e565b600181515160018111156116645761166461421d565b141561167e57805160409081015190820181905260208201525b600061168933611ce5565b51600181111561169b5761169b61421d565b14156116ad57600060608201526116d8565b60016116b833611ce5565b5160018111156116ca576116ca61421d565b14156116d857600160608201525b80602001518260c0015110156116ef5760006116f5565b80606001515b156118c257600081515160018111156117105761171061421d565b14156117225760006080820152611751565b600181515160018111156117385761173861421d565b14156117515780516040015160a0820181905260808201525b600061175c336110ef565b51600181111561176e5761176e61421d565b141561178c5760608201516001600160a01b031660c08201526117d2565b6001611797336110ef565b5160018111156117a9576117a961421d565b14156117d2576117b8336110ef565b604001516001600160a01b031660e0820181905260c08201525b80608001518260c001516117e691906148b1565b61010082015260c081015160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561182c573d6000803e3d6000fd5b50611835613b36565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845193169201919091526101008301519082015152608083015161188b906001906148b1565b602080830180519091019190915280514360409091015260a0840151815160600152610100830151905160800152610d9881612eec565b610120810180516b1c99599d5b9911985a5b195960a21b90525160208301516040516000805160206153ee833981519152926118ff9290916148c8565b60405180910390a161190f613b36565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855194169381019390935260c08601805183860180519190915260808089015182519095019490945280514393019290925260a0870151825190940193909352915191510152610e8081612eec565b61199f600260005414600f612ec6565b81516119ba9015806119b357508251600154145b6010612ec6565b6000808055600280546119cc906145ef565b80601f01602080910402602001604051908101604052809291908181526020018280546119f8906145ef565b8015611a455780601f10611a1a57610100808354040283529160200191611a45565b820191906000526020600020905b815481529060010190602001808311611a2857829003601f168201915b5050505050806020019051810190611a5d9190614ea2565b9050611a756040518060200160405280600081525090565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503385604051611aa692919061473f565b60405180910390a1611aba3415600d612ec6565b8151611ad2906001600160a01b03163314600e612ec6565b60a082015151516020830151511115611c005760208201515160a08301515151611afc91906148b1565b808252602083015161010001516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611b3e573d6000803e3d6000fd5b50611b47613d32565b825181516001600160a01b039182169052602080850180518451830152604080870151855182015260c0808801518651606090810191909152835151875160809081019190915293516101000151875190871660a091820152858801805160019052805160009701879052805190940186905289518451971696909101959095528151439084015291870151815185015292860151925101919091528251611bee916148b1565b602082015160e00152610d988161321f565b816020015161010001516001600160a01b03166108fc8360a00151600060018110611c2d57611c2d614844565b6020020151516040518115909202916000818181858888f19350505050158015611c5b573d6000803e3d6000fd5b50815160a083015151516001600160a01b03909116906108fc90611c809060006148b1565b6040518115909202916000818181858888f19350505050158015611ca8573d6000803e3d6000fd5b50606082015160a08301515160200151611cc29190613737565b611ccf826060015161374a565b6000808055600181905561093090600290613d52565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115611d3157611d3161421d565b14156111bb576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611d7257611d7261421d565b6001811115611d8357611d8361421d565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b611dbe6005600054146017612ec6565b8151611dd9901580611dd257508251600154145b6018612ec6565b600080805560028054611deb906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611e17906145ef565b8015611e645780601f10611e3957610100808354040283529160200191611e64565b820191906000526020600020905b815481529060010190602001808311611e4757829003601f168201915b5050505050806020019051810190611e7c9190614fce565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051611eaf92919061473f565b60405180910390a1611ec334156015612ec6565b8051611edb906001600160a01b031633146016612ec6565b611ee3613be3565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190851690820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e0850151835190910152610120840151915101526109308161375c565b611f86600860005414601a612ec6565b8151611fa1901580611f9a57508251600154145b601b612ec6565b600080805560028054611fb3906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611fdf906145ef565b801561202c5780601f106120015761010080835404028352916020019161202c565b820191906000526020600020905b81548152906001019060200180831161200f57829003601f168201915b505050505080602001905181019061204491906147fd565b905061204e613b6f565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d338560405161207f92919061481a565b60405180910390a161209334156019612ec6565b604051600081527fbee49fb15ee6d3a639471cff0b1cdc2265157c64425ebb2f28576779dc4fd5609060200160405180910390a1600060208401526120d733612749565b8152600081515160018111156120ef576120ef61421d565b14156121015760006020820152612131565b600181515160018111156121175761211761421d565b141561213157805160409081015190820181905260208201525b600061213c33611ce5565b51600181111561214e5761214e61421d565b1415612160576000606082015261218b565b600161216b33611ce5565b51600181111561217d5761217d61421d565b141561218b57600160608201525b806020015182610100015110156121a35760006121a9565b80606001515b156123d457600081515160018111156121c4576121c461421d565b14156121d65760006080820152612205565b600181515160018111156121ec576121ec61421d565b14156122055780516040015160a0820181905260808201525b8060800151826040015183608001518460e0015160006001811061222b5761222b614844565b60200201515161223b9190614870565b612245919061488f565b61224f9190614870565b60c0820152600061225f336110ef565b5160018111156122715761227161421d565b141561228f5760a08201516001600160a01b031660e08201526122d6565b600161229a336110ef565b5160018111156122ac576122ac61421d565b14156122d6576122bb336110ef565b604001516001600160a01b0316610100820181905260e08201525b8060e001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015612317573d6000803e3d6000fd5b50612320613be3565b825181516001600160a01b039182169052602080850151835190910152604080850151835190910152606080850151835190831691015260808085015183519091015260a0808501518351921691015260c0830151612381906001906148b1565b602082810180519290925260e08501805151518351909201919091528151436040909101525190516060015260c08201516101008401516123c291906148b1565b602082015160800152610d988161375c565b610120810180516a18db185a5b51985a5b195960aa1b90525160208301516040516000805160206153ee833981519152926124109290916148c8565b60405180910390a1612420613be3565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c087015183860180519190915260e08801805151518251909501949094528051439301929092529151815190920191909152610100850151905190910152610e808161375c565b6124c96004600054146013612ec6565b81516124e49015806124dd57508251600154145b6014612ec6565b6000808055600280546124f6906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054612522906145ef565b801561256f5780601f106125445761010080835404028352916020019161256f565b820191906000526020600020905b81548152906001019060200180831161255257829003601f168201915b5050505050806020019051810190612587919061506a565b90506125a6604051806040016040528060008152602001600081525090565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233856040516125d792919061473f565b60405180910390a16125eb34156011612ec6565b8151612603906001600160a01b031633146012612ec6565b81606001516001600160a01b03166108fc8361010001519081150290604051600060405180830381858888f19350505050158015612645573d6000803e3d6000fd5b5060e082015151516126599060649061488f565b80825261010083015161266c90806148b1565b61267691906148b1565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156126b5573d6000803e3d6000fd5b506126be613d8c565b82516001600160a01b03908116825260208085015181840152604080860151818501526060808701518416908501526080808701519085015260a0808701519085015260c0808701519093169284019290925260e08086018051918501919091525151516101008401528381015161012084015260056000554360015590516110c39183910161511f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156127955761279561421d565b14156111bb576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156127d6576127d661421d565b60018111156127e7576127e761421d565b81528154610100900460ff161515602082015260019091015460409091015292915050565b61281c600a600054146022612ec6565b815161283790158061283057508251600154145b6023612ec6565b600080805560028054612849906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054612875906145ef565b80156128c25780601f10612897576101008083540402835291602001916128c2565b820191906000526020600020905b8154815290600101906020018083116128a557829003601f168201915b50505050508060200190518101906128da9190614fce565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338460405161290d92919061473f565b60405180910390a161292134156020612ec6565b8051612939906001600160a01b031633146021612ec6565b612941613be3565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855190851690820152608080870151865182015260c08701518651951660a0958601526101008701518487018051919091529487015185519094019390935283514392019190915260e08501518351909101526101208401519151015261093081613065565b6129e4600960005414601e612ec6565b81516129ff9015806129f857508251600154145b601f612ec6565b600080805560028054612a11906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054612a3d906145ef565b8015612a8a5780601f10612a5f57610100808354040283529160200191612a8a565b820191906000526020600020905b815481529060010190602001808311612a6d57829003601f168201915b5050505050806020019051810190612aa2919061506a565b9050612ac1604051806040016040528060008152602001600081525090565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763385604051612af292919061473f565b60405180910390a1612b063415601c612ec6565b8151612b1e906001600160a01b03163314601d612ec6565b81606001516001600160a01b03166108fc8361010001519081150290604051600060405180830381858888f19350505050158015612b60573d6000803e3d6000fd5b5060e08201515151612b749060649061488f565b808252610100830151612b8790806148b1565b612b9191906148b1565b6020820152815181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612bd0573d6000803e3d6000fd5b50612bd9613d8c565b82516001600160a01b03908116825260208085015181840152604080860151818501526060808701518416908501526080808701519085015260a0808701519085015260c0808701519093169284019290925260e080860180519185019190915251515161010084015283810151610120840152600a6000554360015590516110c39183910161511f565b612c746012600054146034612ec6565b8151612c8f901580612c8857508251600154145b6035612ec6565b600080805560028054612ca1906145ef565b80601f0160208091040260200160405190810160405280929190818152602001828054612ccd906145ef565b8015612d1a5780601f10612cef57610100808354040283529160200191612d1a565b820191906000526020600020905b815481529060010190602001808311612cfd57829003601f168201915b5050505050806020019051810190612d329190614d58565b9050612d4f60408051808201909152600060208201908152815290565b612d6182606001514310156036612ec6565b7fda00a95c1dcc12171d6effb435667fe1e6639deaf742996695658fb05741b8d73385604051612d9292919061473f565b60405180910390a1612da634156032612ec6565b8151612dbe906001600160a01b031633146033612ec6565b8051661d1a5b595bdd5d60ca1b9052805160408084015190516000805160206153ee83398151915292612df29290916148c8565b60405180910390a1612e02613d32565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551820152608080880151865182015260a08089015187519087169082015260c0808a0151868901805191151590915260e0808c01518251909801979097526101008b01518151909601959095526101208a015185519716969093019590955282514391015261014087015182519094019390935261016086015181519093019290925261018085015191510152610e808161321f565b8161036b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600081602001516020015111612f03576000612f0c565b60208101515115155b15612fb857612f19613e00565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190931683850152818501805183015160808087019190915281519094015160a0860152519092015160c08401526011600055436001559051612f8f9183910161512e565b60405160208183030381529060405260029080519060200190612fb3929190613cae565b505050565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612ffa573d6000803e3d6000fd5b508051604001516020820151606001516001600160a01b03909116906108fc9060005b6020020151516040518115909202916000818181858888f1935050505015801561304b573d6000803e3d6000fd5b506000808055600181905561306290600290613d52565b50565b60008160200151602001511161307c576000613085565b60208101515115155b1561312057613092613e51565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015181870152865160a09081015190951694860194909452828601805184015160c087015280519091015160e08601525190920151610100840152600d600055436001559051612f8f91839101615214565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613162573d6000803e3d6000fd5b508060000151606001516001600160a01b03166108fc82602001516060015160006001811061301d5761301d614844565b61319b613ead565b60005b60018110156131e7578481600181106131b9576131b9614844565b60200201518282600181106131d0576131d0614844565b6020020152806131df81615223565b91505061319e565b50818184600181106131fb576131fb614844565b60200201529392505050565b600061321583853085613817565b90505b9392505050565b6132766040805161010081018252600060e08201818152825260208083018290528284018290528351808201855282815260608401526080830182905260a08301829052835190810190935282529060c082015290565b815160600151602083015160a001511115613292576000613299565b6020820151515b1561338c576132a6613ef8565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152865160809081015181870152875160a090810151861690870152838801805151151560c080890191909152815186015160e0808a019190915282518601516101008a015282519094015190961661012088015280519091015161014087015280519094015161016086015292519092015161018084015260126000554360015590516133689183910161523e565b60405160208183030381529060405260029080519060200190610930929190613cae565b60008260000151602001516060015183602001516020015110156133b15760016133b4565b60005b1415613509578051651c185cdcd95960d21b90528051825160409081015190516000805160206153ee833981519152926133ef9290916148c8565b60405180910390a16064826020015160e0015161340c919061488f565b602080830182905283015160e0015161342591906148b1565b604080830191909152825151602083015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561346a573d6000803e3d6000fd5b50613473613f7c565b8251516001600160a01b0390811682528351604090810151602080850191909152855160809081015183860152865160a09081015185166060808801919091528389018051850151938801939093528251850151918701919091528151015190931660c08086019190915292519092015160e084015283810151610100840152600460005543600155516133689183910161536d565b81600001516020015161012001518260200151602001511061367157606081018051651c185cdcd95960d21b905251825160409081015190516000805160206153ee8339815191529261355d9290916148c8565b60405180910390a16064826020015160e0015161357a919061488f565b60808201819052602083015160e0015161359491906148b1565b60a082015281515160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156135d7573d6000803e3d6000fd5b506135e0613f7c565b8251516001600160a01b0390811682528351604090810151602080850191909152855160809081015183860152865160a09081015185166060808801919091528389018051850151938801939093528251850151828801528251015190941660c0808701919091529051015160e085015291840151610100840152600960005543600155516133689183910161536d565b60c0810180516519985a5b195960d21b905251825160409081015190516000805160206153ee833981519152926136a99290916148c8565b60405180910390a16136b9613fdc565b8251516001600160a01b0390811682528351604090810151602080850191909152855160a0908101518416838601528187018051840151606080880191909152815101519094166080860152835160c09081015191860191909152925160e0015192840192909252600e60005543600155516133689183910161537c565b61374182826138f1565b61036b57600080fd5b613753816139cc565b61306257600080fd5b60008160200151602001511161377357600061377c565b60208101515115155b1561312057613789613e51565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151841681860152855160809081015181870152865160a09081015190951694860194909452828601805184015160c087015280519091015160e086015251909201516101008401526008600055436001559051612f8f91839101615214565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161387e916153d1565b60006040518083038185875af1925050503d80600081146138bb576040519150601f19603f3d011682016040523d82523d6000602084013e6138c0565b606091505b50915091506138d182826001613a71565b50808060200190518101906138e6919061457b565b979650505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240161391d91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161395b91906153d1565b60006040518083038185875af1925050503d8060008114613998576040519150601f19603f3d011682016040523d82523d6000602084013e61399d565b606091505b50915091506139ae82826003613a71565b50808060200190518101906139c3919061457b565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391613a13916153d1565b60006040518083038185875af1925050503d8060008114613a50576040519150601f19603f3d011682016040523d82523d6000602084013e613a55565b606091505b5091509150613a6682826004613a71565b506001949350505050565b60608315613a80575081613218565b825115613a905782518084602001fd5b60405163100960cb60e01b815260048101839052602401612ee3565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806040016040528060008152602001613b0460405180602001604052806000151581525090565b905290565b604051806040016040528060008152602001613b0460408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b8152602001613b0461402d565b604080516101a081018252600061014082018181526101608301829052610180830182905282526020808301829052828401829052606083018290526080830182905260a0830182905260c0830182905260e083018290526101008301829052835190810190935282529061012082015290565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908190613b62565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101613c53613ead565b8152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001613c83614055565b81526020016000815260200160006001600160a01b0316815260200160008152602001613c53613ead565b828054613cba906145ef565b90600052602060002090601f016020900481019282613cdc5760008555613d22565b82601f10613cf557805160ff1916838001178555613d22565b82800160010185558215613d22579182015b82811115613d22578251825591602001919060010190613d07565b50613d2e92915061410b565b5090565b6040518060400160405280613d45614120565b8152602001613b0461416e565b508054613d5e906145ef565b6000825580601f10613d6e575050565b601f016020900490600052602060002090810190613062919061410b565b60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001613dec613ead565b815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001613c53613ead565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001613c535b60405180602001604052806001905b613ee2604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613ebc5790505090565b604051806101a0016040528060006001600160a01b03168152602001613f1c614055565b815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001613c53613ead565b60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001613c53613ead565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001613c53613ead565b6040518060a00160405280600081526020016000815260200160008152602001613c53613ead565b604080516101608101825260008082526020808301829052835160e080820186528382528183018490528186018490526060808301859052608080840186905260a080850187905260c0808601889052888a0195909552828801879052818801879052885191820189528682528186018790528189018790529181018690529086015290840183905283018290526101008301829052610120830182905283518085019094528184528301529061014082015290565b5b80821115613d2e576000815560010161410c565b6040518060c0016040528060006001600160a01b03168152602001614143614055565b815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b604051806101000160405280600015158152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001613c53613ead565b6000604082840312156141c957600080fd5b50919050565b6000604082840312156141e157600080fd5b61321883836141b7565b6001600160a01b038116811461306257600080fd5b60006020828403121561421257600080fd5b8135613218816141eb565b634e487b7160e01b600052602160045260246000fd5b6002811061306257634e487b7160e01b600052602160045260246000fd5b8151606082019061426181614233565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b8151606082019061429981614233565b8083525060208301511515602083015260408301511515604083015292915050565b6000602082840312156142cd57600080fd5b5035919050565b60005b838110156142ef5781810151838201526020016142d7565b838111156109305750506000910152565b82815260406020820152600082518060408401526143258160608501602087016142d4565b601f01601f1916919091016060019392505050565b8151606082019061434a81614233565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156143a2576143a261436a565b60405290565b604051602081016001600160401b03811182821017156143a2576143a261436a565b604051606081016001600160401b03811182821017156143a2576143a261436a565b60405160e081016001600160401b03811182821017156143a2576143a261436a565b60405161012081016001600160401b03811182821017156143a2576143a261436a565b60405161016081016001600160401b03811182821017156143a2576143a261436a565b6040516101a081016001600160401b03811182821017156143a2576143a261436a565b60405161014081016001600160401b03811182821017156143a2576143a261436a565b801515811461306257600080fd5b6000604082840312156144ba57600080fd5b6144c2614380565b8235815260208301356144d48161449a565b60208201529392505050565b600081830360408112156144f357600080fd5b6144fb614380565b8335815291506020601f198201121561451357600080fd5b50604051602081018181106001600160401b03821117156145365761453661436a565b60405260208301356145478161449a565b8152602082015292915050565b60006040828403121561456657600080fd5b61321883836144e0565b80516111c68161449a565b60006020828403121561458d57600080fd5b81516132188161449a565b600081830360408112156145ab57600080fd5b6145b3614380565b833581526020601f19830112156145c957600080fd5b6145d16143a8565b91506145db6143a8565b602094850135815282529283015250919050565b600181811c9082168061460357607f821691505b602082108114156141c957634e487b7160e01b600052602260045260246000fd5b80516111c6816141eb565b600082601f83011261464057600080fd5b6146486143a8565b8060608085018681111561465b57600080fd5b855b818110156146ac578281890312156146755760008081fd5b61467d6143ca565b815181526020808301518183015260408084015161469a8161449a565b9083015290865290940193820161465d565b50919695505050505050565b600061012082840312156146cb57600080fd5b6146d36143ec565b82516146de816141eb565b81526020838101519082015260408301516146f8816141eb565b6040820152606083810151908201526080830151614715816141eb565b60808201526147278460a0850161462f565b60a0820152610100929092015160c083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b6000610160828403121561477a57600080fd5b61478261440e565b905061478d82614624565b815260208201516020820152604082015160408201526147af60608301614624565b6060820152608082015160808201526147ca60a08301614624565b60a082015260c082015160c08201526147e68360e0840161462f565b60e082015261014082015161010082015292915050565b6000610160828403121561481057600080fd5b6132188383614767565b6001600160a01b038316815260608101613218602083018480518252602090810151511515910152565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561488a5761488a61485a565b500290565b6000826148ac57634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156148c3576148c361485a565b500390565b91516bffffffffffffffffffffffff19168252602082015260400190565b600060e082840312156148f857600080fd5b6149006143ec565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c08201516001600160401b0360c01b8116811461495557600080fd5b60c082015292915050565b60006080828403121561497257600080fd5b604051608081018181106001600160401b03821117156149945761499461436a565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000604082840312156149d757600080fd5b6149df614380565b90508151815260208201516fffffffffffffffffffffffffffffffff1981168114614a0957600080fd5b602082015292915050565b60006102a08284031215614a2757600080fd5b614a2f614431565b905081518152614a4160208301614624565b6020820152614a5383604084016148e6565b6040820152610120808301516060830152610140808401516080840152614a7e856101608601614960565b60a08401526101e084015160c084015261020084015160e0840152614aa66102208501614624565b61010084015261024084015182840152614ac48561026086016149c5565b908301525092915050565b60006103808284031215614ae257600080fd5b60405160c081018181106001600160401b0382111715614b0457614b0461436a565b6040528251614b12816141eb565b8152614b218460208501614a14565b60208201526102c083015160408201526102e08301516060820152610300830151614b4b816141eb565b6080820152614b5e84610320850161462f565b60a08201529392505050565b60008219821115614b7d57614b7d61485a565b500190565b805182526020810151614ba060208401826001600160a01b03169052565b506040810151614bfe6040840182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301526001600160401b0360c01b60c08201511660c08301525050565b506060818101516101208481019190915260808301516101408086019190915260a0840151805161016087015260208082015161018088015260408201516101a08801529301516101c086015260c08401516101e086015260e08401516102008601526101008401516001600160a01b03166102208601529083015161024085015290910151805161026084015201516fffffffffffffffffffffffffffffffff191661028090910152565b8060005b6001811015610930578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614cae565b81516001600160a01b0390811682526020808401516103a084019291614d1090850182614b82565b5060408401516102c08401526060840151166102e0830152608083015161030083015260a0830151614d46610320840182614caa565b5060c083015161038083015292915050565b60006104608284031215614d6b57600080fd5b614d73614454565b614d7c83614624565b8152614d8b8460208501614a14565b60208201526102c083015160408201526102e083015160608201526103008301516080820152614dbe6103208401614624565b60a0820152614dd06103408401614570565b60c082015261036083015160e0820152610380830151610100820152614df96103a08401614624565b6101208201526103c0830151610140820152614e19846103e0850161462f565b610160820152610440929092015161018083015250919050565b60006101208284031215614e4657600080fd5b614e4e6143ec565b8251614e59816141eb565b8152602083810151908201526040830151614e73816141eb565b60408201526060830151614e86816141eb565b6060820152608083810151908201526147278460a0850161462f565b60006103a08284031215614eb557600080fd5b614ebd6143ec565b8251614ec8816141eb565b8152614ed78460208501614a14565b60208201526102c083015160408201526102e0830151614ef6816141eb565b60608201526103008301516080820152614f1484610320850161462f565b60a0820152610380929092015160c083015250919050565b60006101808284031215614f3f57600080fd5b614f47614477565b9050614f5282614624565b81526020820151602082015260408201516040820152614f7460608301614624565b60608201526080820151608082015260a082015160a0820152614f9960c08301614624565b60c0820152614fab8360e0840161462f565b60e082015261014082015161010082015261016082015161012082015292915050565b60006101808284031215614fe157600080fd5b6132188383614f2c565b60006101608284031215614ffe57600080fd5b61500661440e565b905061501182614624565b8152602082015160208201526040820151604082015261503360608301614624565b60608201526080820151608082015260a082015160a082015261505860c08301614624565b60c08201526147e68360e0840161462f565b6000610160828403121561507d57600080fd5b6132188383614feb565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516150c260608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c08101516150f160c08401826001600160a01b03169052565b5060e081015161510460e0840182614caa565b50610100810151610140830152610120015161016090910152565b61018081016104e38284615087565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152806060850151166060840152506080830151608083015260a083015161518360a0840182614caa565b5060c083015161010083015292915050565b60018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a08101516151e760a08401826001600160a01b03169052565b5060c081015160c083015260e081015161520460e0840182614caa565b5061010001516101409190910152565b61016081016104e38284615195565b60006000198214156152375761523761485a565b5060010190565b81516001600160a01b03168152610460810160208301516152626020840182614b82565b5060408301516102c083015260608301516102e0830152608083015161030083015260a08301516001600160a01b0390811661032084015260c0840151151561034084015260e0840151610360840152610100840151610380840152610120840151166103a08301526101408301516103c08301526101608301516152eb6103e0840182614caa565b5061018083015161044083015292915050565b60018060a01b038082511683526020820151602084015260408201516040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015161535a60c08401826001600160a01b03169052565b5060e081015161520460e0840182614caa565b61016081016104e382846152fe565b60006101208201905060018060a01b0380845116835260208401516020840152806040850151166040840152606084015160608401528060808501511660808401525060a083015161518360a0840182614caa565b600082516153e38184602087016142d4565b919091019291505056fe8e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220b73888de180aa2a6dcee6dec03144c90f9c0acf56d8a1144fc340fa53cf61ac664736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220c9f893ce0a3e7116cd5e8288caba9de6ce4cb1343db66e32c9d4c86b19b8660664736f6c634300080c00338e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4d`,
  BytecodeLen: 29695,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:66:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:73:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:122:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:191:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:124:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:142:12:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:149:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:191:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:151:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:171:12:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:191:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:173:53:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:93:16:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:83:13:after expr stmt semicolon',
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
  "Deployer": Deployer
  };
export const _APIs = {
  Contributors: {
    claimRefund: Contributors_claimRefund,
    claimToken: Contributors_claimToken,
    contribute: Contributors_contribute
    }
  };
