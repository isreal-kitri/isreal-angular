// 지도에 폴리곤으로 표시할 영역데이터 배열입니다
var areas = [
  {
    name : '서울특별시',
    path : [
      new daum.maps.LatLng(37.55418855285046,126.76771074586003),
      new daum.maps.LatLng(37.58160470552397,126.79367335609255),
      new daum.maps.LatLng(37.59506628871257,126.90187312038323),
      new daum.maps.LatLng(37.701057087223305,127.01591937724598),
      new daum.maps.LatLng(37.689166808661874,127.09495169527212),
      new daum.maps.LatLng(37.604577601147625,127.11801121523318),
      new daum.maps.LatLng(37.56094137372396,127.1819692544326),
      new daum.maps.LatLng(37.4741120690959,127.14340160232565),
      new daum.maps.LatLng(37.42901048359396,127.0110603289585),
      new daum.maps.LatLng(37.45538865064154,127.0110603289585),
      new daum.maps.LatLng(37.43411129656695,126.90278406196028),
      new daum.maps.LatLng(37.5406792814474,126.82214667655913),
      new daum.maps.LatLng(37.55418855285046,126.76771074586003)
    ]
  }, {
    name : '부산광역시',
    path : [
      new daum.maps.LatLng(35.32951391083865,129.30453092840983),
      new daum.maps.LatLng(35.319108484114516,129.2652765626877),
      new daum.maps.LatLng(35.186301234044684,129.22503788694002),
      new daum.maps.LatLng(35.15375586378792,129.13650135987362),
      new daum.maps.LatLng(35.063397911320706,129.087080607359),
      new daum.maps.LatLng(35.08568758815873,129.03427915846618),
      new daum.maps.LatLng(35.07703846060755,128.81212725139068),
      new daum.maps.LatLng(35.14191776294537,128.80213510350788),
      new daum.maps.LatLng(35.20171224662035,128.8703889783105),
      new daum.maps.LatLng(35.23438729442228,128.99760664208236),
      new daum.maps.LatLng(35.387869830801016,129.2029736842205),
      new daum.maps.LatLng(35.32951391083865,129.30453092840983)
    ]
  }, {
    name : '대구광역시',
    path : [
      new daum.maps.LatLng(35.68237968996974,128.5264143650007),
      new daum.maps.LatLng(35.63900300820401,128.5050873849236),
      new daum.maps.LatLng(35.611162891591924,128.37076523446862),
      new daum.maps.LatLng(35.72537798698848,128.43249633787926),
      new daum.maps.LatLng(35.76334511961917,128.38643578107937),
      new daum.maps.LatLng(35.84126184481913,128.4601193294232),
      new daum.maps.LatLng(35.92124615277793,128.4181015756973),
      new daum.maps.LatLng(35.93967478980474,128.53478025928592),
      new daum.maps.LatLng(36.00644913927351,128.61748298434688),
      new daum.maps.LatLng(36.01468675941665,128.69081192811063),
      new daum.maps.LatLng(35.96748450599775,128.74572199567615),
      new daum.maps.LatLng(35.865457448288026,128.76004400804484),
      new daum.maps.LatLng(35.7897911011877,128.68239903486617),
      new daum.maps.LatLng(35.73232567652021,128.69178604529293),
      new daum.maps.LatLng(35.68237968996974,128.5264143650007)
    ]
  }, {
    name : '인천광역시',
    path : [
      // 여기는 영종도
//                new daum.maps.LatLng(37.51797935111392,126.55527934184266),
//                new daum.maps.LatLng(37.42088863519855,126.44181217929),
//                new daum.maps.LatLng(37.503919537270676,126.43217335664022),
//                new daum.maps.LatLng(37.51797935111392,126.55527934184266),
      //여기가 인천
      new daum.maps.LatLng(37.58160470552397,126.79367335609255),
      new daum.maps.LatLng(37.55418855285046,126.76771074586003),
      new daum.maps.LatLng(37.46829082834495,126.7794558399299),
      new daum.maps.LatLng(37.39542663737156,126.73654159447487),
      new daum.maps.LatLng(37.342851601489635,126.61730674608486),
      new daum.maps.LatLng(37.42840669056054,126.58620916220161),
      new daum.maps.LatLng(37.49567391868329,126.60440015175806),
      new daum.maps.LatLng(37.58778423691911,126.57257901089662),
      new daum.maps.LatLng(37.6380043357631,126.6571081995475),
      new daum.maps.LatLng(37.58160470552397,126.79367335609255)
      // 여기는 강화도
//                new daum.maps.LatLng(37.830974821565384,126.42843441590901),
//                new daum.maps.LatLng(37.781691189258055,126.50847577633179),
//                new daum.maps.LatLng(37.62884293260435,126.53424539276739),
//                new daum.maps.LatLng(37.59439136324272,126.40270277492495),
//                new daum.maps.LatLng(37.672815655527295,126.4049338514384),
//                new daum.maps.LatLng(37.71570654168271,126.35109162226158),
//                new daum.maps.LatLng(37.789518734239415,126.35051623631642),
//                new daum.maps.LatLng(37.830974821565384,126.42843441590901)
    ]
  }, {
    name : '전라남도',
    path : [
      new daum.maps.LatLng(35.18800444445993,127.62155938940542),
      new daum.maps.LatLng(35.05044283067004,127.7686934085056),
      new daum.maps.LatLng(34.98810708858442,127.77777379774292),
      new daum.maps.LatLng(34.88359586128836,127.63941261807913),
      new daum.maps.LatLng(34.85981113694915,127.77500685740432),
      new daum.maps.LatLng(34.72035328617693,127.70406153657667),
      new daum.maps.LatLng(34.70145496484824,127.62405676752202),
      new daum.maps.LatLng(34.84995679977688,127.5226846569134),
      new daum.maps.LatLng(34.81658964435554,127.39766455421994),
      new daum.maps.LatLng(34.741520849516334,127.37328641203229),
      new daum.maps.LatLng(34.652152914097265,127.48703388213097),
      new daum.maps.LatLng(34.504279961587706,127.40091925182487),
      new daum.maps.LatLng(34.46773250712147,127.31910646610015),
      new daum.maps.LatLng(34.51914995793639,127.25706002833951),
      new daum.maps.LatLng(34.52888637301238,127.12287800368455),
      new daum.maps.LatLng(34.62706105592134,127.17243935582553),
      new daum.maps.LatLng(34.708260252963875,127.33368491607756),
      new daum.maps.LatLng(34.76224646447446,127.22879661434642),
      new daum.maps.LatLng(34.61461162921242,126.99447134022671),
      new daum.maps.LatLng(34.48731171362122,126.97661422270001),
      new daum.maps.LatLng(34.45265739264229,126.92555287052717),
      new daum.maps.LatLng(34.442767997373885,126.72472697074924),
      new daum.maps.LatLng(34.40197576850541,126.61789843755302),
      new daum.maps.LatLng(34.32129122335131,126.55760063844889),
      new daum.maps.LatLng(34.449638780552576,126.45804351713409),
      new daum.maps.LatLng(34.53207803385461,126.46011557920747),
      new daum.maps.LatLng(34.59639707927014,126.27900851939403),
      new daum.maps.LatLng(34.66411785829258,126.25503006246863),
      new daum.maps.LatLng(34.7585850737872,126.28607511298189),
      new daum.maps.LatLng(34.85195355975132,126.4069157300387),
      new daum.maps.LatLng(34.97081194690565,126.3330239373103),
      new daum.maps.LatLng(35.05780997868356,126.22261045387144),
      new daum.maps.LatLng(35.14205718594982,126.2573530896126),
      new daum.maps.LatLng(35.09167174643383,126.33505781754052),
      new daum.maps.LatLng(35.107541365262094,126.41963125999395),
      new daum.maps.LatLng(35.227372511178494,126.29749784920223),
      new daum.maps.LatLng(35.28935174668109,126.35839907995893),
      new daum.maps.LatLng(35.40649620089263,126.40460605351005),
      new daum.maps.LatLng(35.429806097109264,126.44756723606353),
      new daum.maps.LatLng(35.30747193298169,126.53118546139052),
      new daum.maps.LatLng(35.37632188115647,126.73095008179722),
      new daum.maps.LatLng(35.466043638411634,126.76404976545217),
      new daum.maps.LatLng(35.465979187330944,126.85061670270869),
      new daum.maps.LatLng(35.39514832649113,126.93275771239479),
      new daum.maps.LatLng(35.38980845791586,127.0305309142147),
      new daum.maps.LatLng(35.29957552188009,127.11573372715239),
      new daum.maps.LatLng(35.336704281704925,127.22265181630155),
      new daum.maps.LatLng(35.30336241951671,127.38466269763757),
      new daum.maps.LatLng(35.359531885064406,127.43132253132845),
      new daum.maps.LatLng(35.30895899198845,127.57744981067462)
    ],
    hole : [
      new daum.maps.LatLng(35.2553634473608,126.76346819725971),
      new daum.maps.LatLng(35.218850701876946,126.80569379638136),
      new daum.maps.LatLng(35.25887302916082,126.90571861260466),
      new daum.maps.LatLng(35.12440683008061,127.00907732745543),
      new daum.maps.LatLng(35.05238609675842,126.80371678613697),
      new daum.maps.LatLng(35.10712005940038,126.73068775114308),
      new daum.maps.LatLng(35.113384075606994,126.65708424311056),
      new daum.maps.LatLng(35.215180436544756,126.68688688430589),
      new daum.maps.LatLng(35.2553634473608,126.76346819725971)
    ]
  }, {
    name : '광주광역시',
    path : [
      new daum.maps.LatLng(35.2553634473608,126.76346819725971),
      new daum.maps.LatLng(35.218850701876946,126.80569379638136),
      new daum.maps.LatLng(35.25887302916082,126.90571861260466),
      new daum.maps.LatLng(35.12440683008061,127.00907732745543),
      new daum.maps.LatLng(35.05238609675842,126.80371678613697),
      new daum.maps.LatLng(35.10712005940038,126.73068775114308),
      new daum.maps.LatLng(35.113384075606994,126.65708424311056),
      new daum.maps.LatLng(35.215180436544756,126.68688688430589),
      new daum.maps.LatLng(35.2553634473608,126.76346819725971)
    ]
  }, {
    name : '대전광역시',
    path : [
      new daum.maps.LatLng(36.49161155098835,127.39566874403862),
      new daum.maps.LatLng(36.45569317903516,127.40262059825699),
      new daum.maps.LatLng(36.420746659458715,127.54239915140377),
      new daum.maps.LatLng(36.23809226058266,127.49276503953658),
      new daum.maps.LatLng(36.19405956809015,127.44280915922504),
      new daum.maps.LatLng(36.189116021208356,127.34065820604783),
      new daum.maps.LatLng(36.28342991968458,127.24945943795159),
      new daum.maps.LatLng(36.41453730402568,127.28231470411767),
      new daum.maps.LatLng(36.49161155098835,127.39566874403862)
    ]
  }, {
    name : '울산광역시',
    path : [
      new daum.maps.LatLng(35.6509484693828,129.4500081564331),
      new daum.maps.LatLng(35.48557832196146,129.4393219799994),
      new daum.maps.LatLng(35.4752996750707,129.38446583377626),
      new daum.maps.LatLng(35.35557252949865,129.35899001536157),
      new daum.maps.LatLng(35.32951391083865,129.30453092840983),
      new daum.maps.LatLng(35.387869830801016,129.2029736842205),
      new daum.maps.LatLng(35.49527512422195,129.10645005297718),
      new daum.maps.LatLng(35.52898945918501,128.99449906540846),
      new daum.maps.LatLng(35.62014176660784,129.00334629542954),
      new daum.maps.LatLng(35.6990719341709,129.0836896336939),
      new daum.maps.LatLng(35.71927596436368,129.186391211188),
      new daum.maps.LatLng(35.6509484693828,129.4500081564331)
    ]
  }, {
    name : '세종특별자치시',
    path : [
      new daum.maps.LatLng(36.69093405034259,127.28562590689509),
      new daum.maps.LatLng(36.583537112447274,127.3078737307855),
      new daum.maps.LatLng(36.54124046024966,127.4018246483892),
      new daum.maps.LatLng(36.49161155098835,127.39566874403862),
      new daum.maps.LatLng(36.41453730402568,127.28231470411767),
      new daum.maps.LatLng(36.44197525010109,127.20138964442249),
      new daum.maps.LatLng(36.5118652824823,127.17079059240449),
      new daum.maps.LatLng(36.70657777603391,127.13407446145786),
      new daum.maps.LatLng(36.733641288169906,127.16335774818353),
      new daum.maps.LatLng(36.69093405034259,127.28562590689509)
    ]
  }, {
    name : '충청북도',
    path : [
      new daum.maps.LatLng(37.065456865700284,128.65222772089592),
      new daum.maps.LatLng(36.927900346395234,128.44186829019844),
      new daum.maps.LatLng(36.81141639206393,128.42064591568314),
      new daum.maps.LatLng(36.8147605250796,128.21838862235276),
      new daum.maps.LatLng(36.8342428504348,128.13958784104238),
      new daum.maps.LatLng(36.79318233113398,128.0551212690279),
      new daum.maps.LatLng(36.725872267772424,128.02222193642814),
      new daum.maps.LatLng(36.706324876227605,127.93166668561419),
      new daum.maps.LatLng(36.61793655721901,127.93163914405775),
      new daum.maps.LatLng(36.612551182544216,127.82378689003924),
      new daum.maps.LatLng(36.493270565525634,127.88046639595917),
      new daum.maps.LatLng(36.357383783688206,127.89105182139778),
      new daum.maps.LatLng(36.30962200024858,127.84107459920045),
      new daum.maps.LatLng(36.209132948803315,128.01351740652416),
      new daum.maps.LatLng(36.0683891437827,127.96138622671619),
      new daum.maps.LatLng(36.02244194574912,127.87692624814713),
      new daum.maps.LatLng(36.014248963886686,127.78785268104352),
      new daum.maps.LatLng(36.06835941521555,127.63775557079079),
      new daum.maps.LatLng(36.133829970756906,127.59020275591028),
      new daum.maps.LatLng(36.21741320524556,127.59779700271694),
      new daum.maps.LatLng(36.23809226058266,127.49276503953658),
      new daum.maps.LatLng(36.420746659458715,127.54239915140377),
      new daum.maps.LatLng(36.45569317903516,127.40262059825699),
      new daum.maps.LatLng(36.49161155098835,127.39566874403862),
      new daum.maps.LatLng(36.54124046024966,127.4018246483892),
      new daum.maps.LatLng(36.583537112447274,127.3078737307855),
      new daum.maps.LatLng(36.69093405034259,127.28562590689509),
      new daum.maps.LatLng(36.795268714762386,127.40170316549589),
      new daum.maps.LatLng(36.893818800323515,127.28980186774325),
      new daum.maps.LatLng(36.96774897693452,127.40185675425022),
      new daum.maps.LatLng(37.054272916072186,127.48651150499201),
      new daum.maps.LatLng(37.04710823773653,127.56668540256842),
      new daum.maps.LatLng(37.13513547248652,127.68759105858759),
      new daum.maps.LatLng(37.216678398652604,127.74791916960619),
      new daum.maps.LatLng(37.14452909917481,127.78923903592758),
      new daum.maps.LatLng(37.15192338466081,127.90188453810782),
      new daum.maps.LatLng(37.225745913711684,127.92129035053397),
      new daum.maps.LatLng(37.258163053217004,127.9850536405436),
      new daum.maps.LatLng(37.18880686450643,128.0395007205308),
      new daum.maps.LatLng(37.24861300987745,128.20053329171233),
      new daum.maps.LatLng(37.16039350845341,128.26467533485845),
      new daum.maps.LatLng(37.146851332640516,128.40100010946418),
      new daum.maps.LatLng(37.11241553969775,128.42359520619718),
      new daum.maps.LatLng(37.065456865700284,128.65222772089592)
    ]
  }, {
    name : '충청남도',
    path : [
      new daum.maps.LatLng(36.90495360443457,126.90874862921208),
      new daum.maps.LatLng(36.95211477658767,127.20189088906172),
      new daum.maps.LatLng(36.893818800323515,127.28980186774325),
      new daum.maps.LatLng(36.795268714762386,127.40170316549589),
      new daum.maps.LatLng(36.69093405034259,127.28562590689509),
      new daum.maps.LatLng(36.733641288169906,127.16335774818353),
      new daum.maps.LatLng(36.70657777603391,127.13407446145786),
      new daum.maps.LatLng(36.5118652824823,127.17079059240449),
      new daum.maps.LatLng(36.44197525010109,127.20138964442249),
      new daum.maps.LatLng(36.41453730402568,127.28231470411767),
      new daum.maps.LatLng(36.28342991968458,127.24945943795159),
      new daum.maps.LatLng(36.189116021208356,127.34065820604783),
      new daum.maps.LatLng(36.19405956809015,127.44280915922504),
      new daum.maps.LatLng(36.23809226058266,127.49276503953658),
      new daum.maps.LatLng(36.21741320524556,127.59779700271694),
      new daum.maps.LatLng(36.133829970756906,127.59020275591028),
      new daum.maps.LatLng(36.06835941521555,127.63775557079079),
      new daum.maps.LatLng(35.99210707091796,127.53366804786091),
      new daum.maps.LatLng(35.98378423852239,127.45597544645369),
      new daum.maps.LatLng(36.125798279127935,127.3061779330679),
      new daum.maps.LatLng(36.06968287793115,127.13370162832935),
      new daum.maps.LatLng(36.142368536261785,127.04976204238719),
      new daum.maps.LatLng(36.140728177715424,126.89231893813577),
      new daum.maps.LatLng(36.06056958886257,126.86358231645258),
      new daum.maps.LatLng(36.00085091204893,126.73480076046907),
      new daum.maps.LatLng(36.01062776813392,126.66064252800221),
      new daum.maps.LatLng(36.12785577127267,126.59168517813684),
      new daum.maps.LatLng(36.15150449661619,126.51242328854705),
      new daum.maps.LatLng(36.26887679166651,126.54641856816885),
      new daum.maps.LatLng(36.58548266833503,126.4468232348932),
      new daum.maps.LatLng(36.673856610784775,126.2632351672325),
      new daum.maps.LatLng(36.67450516996478,126.19736002778151),
      new daum.maps.LatLng(36.77469706375576,126.12918318973074),
      new daum.maps.LatLng(36.90039570989593,126.20867195137367),
      new daum.maps.LatLng(36.92966892694072,126.29307550976948),
      new daum.maps.LatLng(36.85076157817919,126.36329529091738),
      new daum.maps.LatLng(36.907452653430155,126.40953888075015),
      new daum.maps.LatLng(36.95973813946178,126.33400725882323),
      new daum.maps.LatLng(37.01009359291108,126.3553456935679),
      new daum.maps.LatLng(37.065272905874146,126.49830155044346),
      new daum.maps.LatLng(36.998090558985425,126.63957536505912),
      new daum.maps.LatLng(36.97569398319051,126.78253314028741),
      new daum.maps.LatLng(36.896691120911505,126.81660117837741),
      new daum.maps.LatLng(36.90495360443457,126.90874862921208)
    ]
  }, {
    name : '전라북도',
    path : [
      new daum.maps.LatLng(36.06835941521555,127.63775557079079),
      new daum.maps.LatLng(36.014248963886686,127.78785268104352),
      new daum.maps.LatLng(36.02244194574912,127.87692624814713),
      new daum.maps.LatLng(35.914578921727475,127.88760998529825),
      new daum.maps.LatLng(35.75877145974027,127.66149574240903),
      new daum.maps.LatLng(35.710032045185734,127.6611707824),
      new daum.maps.LatLng(35.55416934621266,127.5910758210352),
      new daum.maps.LatLng(35.48566976067275,127.65272223811199),
      new daum.maps.LatLng(35.416656021711525,127.66197772850036),
      new daum.maps.LatLng(35.30895899198845,127.57744981067462),
      new daum.maps.LatLng(35.359531885064406,127.43132253132845),
      new daum.maps.LatLng(35.30336241951671,127.38466269763757),
      new daum.maps.LatLng(35.336704281704925,127.22265181630155),
      new daum.maps.LatLng(35.29957552188009,127.11573372715239),
      new daum.maps.LatLng(35.38980845791586,127.0305309142147),
      new daum.maps.LatLng(35.39514832649113,126.93275771239479),
      new daum.maps.LatLng(35.465979187330944,126.85061670270869),
      new daum.maps.LatLng(35.466043638411634,126.76404976545217),
      new daum.maps.LatLng(35.37632188115647,126.73095008179722),
      new daum.maps.LatLng(35.30747193298169,126.53118546139052),
      new daum.maps.LatLng(35.429806097109264,126.44756723606353),
      new daum.maps.LatLng(35.51910925669389,126.4830220317428),
      new daum.maps.LatLng(35.54107553942629,126.59469923567923),
      new daum.maps.LatLng(35.6339650620391,126.4650628016237),
      new daum.maps.LatLng(35.79943923956761,126.69926175008574),
      new daum.maps.LatLng(35.886078541268944,126.61512286621311),
      new daum.maps.LatLng(35.94267424048879,126.6149528503045),
      new daum.maps.LatLng(36.00085091204893,126.73480076046907),
      new daum.maps.LatLng(36.06056958886257,126.86358231645258),
      new daum.maps.LatLng(36.140728177715424,126.89231893813577),
      new daum.maps.LatLng(36.142368536261785,127.04976204238719),
      new daum.maps.LatLng(36.06968287793115,127.13370162832935),
      new daum.maps.LatLng(36.125798279127935,127.3061779330679),
      new daum.maps.LatLng(35.98378423852239,127.45597544645369),
      new daum.maps.LatLng(35.99210707091796,127.53366804786091),
      new daum.maps.LatLng(36.06835941521555,127.63775557079079)
    ]
  }, {
    name : '경상북도',
    path : [
      new daum.maps.LatLng(35.6509484693828,129.4500081564331),
      new daum.maps.LatLng(35.71927596436368,129.186391211188),
      new daum.maps.LatLng(35.6990719341709,129.0836896336939),
      new daum.maps.LatLng(35.62014176660784,129.00334629542954),
      new daum.maps.LatLng(35.63791347625359,128.9117616222302),
      new daum.maps.LatLng(35.568018862222864,128.75627391898203),
      new daum.maps.LatLng(35.6236536660915,128.5365029093047),
      new daum.maps.LatLng(35.68237968996974,128.5264143650007),
      new daum.maps.LatLng(35.73232567652021,128.69178604529293),
      new daum.maps.LatLng(35.7897911011877,128.68239903486617),
      new daum.maps.LatLng(35.865457448288026,128.76004400804484),
      new daum.maps.LatLng(35.96748450599775,128.74572199567615),
      new daum.maps.LatLng(36.01468675941665,128.69081192811063),
      new daum.maps.LatLng(36.00644913927351,128.61748298434688),
      new daum.maps.LatLng(35.93967478980474,128.53478025928592),
      new daum.maps.LatLng(35.92124615277793,128.4181015756973),
      new daum.maps.LatLng(35.84126184481913,128.4601193294232),
      new daum.maps.LatLng(35.76334511961917,128.38643578107937),
      new daum.maps.LatLng(35.72537798698848,128.43249633787926),
      new daum.maps.LatLng(35.611162891591924,128.37076523446862),
      new daum.maps.LatLng(35.655143301723506,128.30604854251976),
      new daum.maps.LatLng(35.64379506674617,128.2010183422375),
      new daum.maps.LatLng(35.754157851904864,128.1872669931136),
      new daum.maps.LatLng(35.822350695523916,128.12413151480996),
      new daum.maps.LatLng(35.828863479464246,128.01214365715353),
      new daum.maps.LatLng(35.914578921727475,127.88760998529825),
      new daum.maps.LatLng(36.02244194574912,127.87692624814713),
      new daum.maps.LatLng(36.0683891437827,127.96138622671619),
      new daum.maps.LatLng(36.209132948803315,128.01351740652416),
      new daum.maps.LatLng(36.30962200024858,127.84107459920045),
      new daum.maps.LatLng(36.357383783688206,127.89105182139778),
      new daum.maps.LatLng(36.493270565525634,127.88046639595917),
      new daum.maps.LatLng(36.612551182544216,127.82378689003924),
      new daum.maps.LatLng(36.61793655721901,127.93163914405775),
      new daum.maps.LatLng(36.706324876227605,127.93166668561419),
      new daum.maps.LatLng(36.725872267772424,128.02222193642814),
      new daum.maps.LatLng(36.79318233113398,128.0551212690279),
      new daum.maps.LatLng(36.8342428504348,128.13958784104238),
      new daum.maps.LatLng(36.8147605250796,128.21838862235276),
      new daum.maps.LatLng(36.81141639206393,128.42064591568314),
      new daum.maps.LatLng(36.927900346395234,128.44186829019844),
      new daum.maps.LatLng(37.065456865700284,128.65222772089592),
      new daum.maps.LatLng(37.08772009686231,128.78506184183564),
      new daum.maps.LatLng(37.04489763182982,128.89616512366052),
      new daum.maps.LatLng(37.09206894657519,128.92232373735848),
      new daum.maps.LatLng(37.04073562647372,129.19495765138078),
      new daum.maps.LatLng(37.116993294531504,129.27195914560068),
      new daum.maps.LatLng(37.14636173285517,129.36409556951807),
      new daum.maps.LatLng(37.06404728117778,129.4271946744875),
      new daum.maps.LatLng(36.88848917181799,129.41556571038663),
      new daum.maps.LatLng(36.815292615083905,129.45773465246492),
      new daum.maps.LatLng(36.69873835514864,129.47626935867487),
      new daum.maps.LatLng(36.6224329927129,129.4121962438946),
      new daum.maps.LatLng(36.55182230524681,129.44069928747035),
      new daum.maps.LatLng(36.42889895478553,129.43636507319775),
      new daum.maps.LatLng(36.33301506496391,129.3795332665426),
      new daum.maps.LatLng(36.189713263163384,129.37715757040448),
      new daum.maps.LatLng(36.09609316023081,129.44062669196737),
      new daum.maps.LatLng(36.06040682341414,129.38089515892264),
      new daum.maps.LatLng(35.927159790427964,129.518896456114),
      new daum.maps.LatLng(35.863573867228205,129.5276894431601),
      new daum.maps.LatLng(35.6509484693828,129.4500081564331)
    ]
  }, {
    name : '경상남도',
    path : [
      new daum.maps.LatLng(35.63900300820401,128.5050873849236),
      new daum.maps.LatLng(35.68237968996974,128.5264143650007),
      new daum.maps.LatLng(35.6236536660915,128.5365029093047),
      new daum.maps.LatLng(35.568018862222864,128.75627391898203),
      new daum.maps.LatLng(35.63791347625359,128.9117616222302),
      new daum.maps.LatLng(35.62014176660784,129.00334629542954),
      new daum.maps.LatLng(35.52898945918501,128.99449906540846),
      new daum.maps.LatLng(35.49527512422195,129.10645005297718),
      new daum.maps.LatLng(35.387869830801016,129.2029736842205),
      new daum.maps.LatLng(35.23438729442228,128.99760664208236),
      new daum.maps.LatLng(35.20171224662035,128.8703889783105),
      new daum.maps.LatLng(35.14191776294537,128.80213510350788),
      new daum.maps.LatLng(35.07703846060755,128.81212725139068),
      new daum.maps.LatLng(35.11581943611258,128.70050599480416),
      new daum.maps.LatLng(35.09757763660672,128.4678778071306),
      new daum.maps.LatLng(35.01433984171262,128.50282970624463),
      new daum.maps.LatLng(34.95683289906376,128.43324458536918),
      new daum.maps.LatLng(34.87193794868357,128.46731096123176),
      new daum.maps.LatLng(34.77947158165549,128.4356391642366),
      new daum.maps.LatLng(34.9444736431158,128.33390081540983),
      new daum.maps.LatLng(34.93669427955639,128.19598373488756),
      new daum.maps.LatLng(34.88773490691596,128.13272970256617),
      new daum.maps.LatLng(34.92849934217356,128.05525538309334),
      new daum.maps.LatLng(35.004193305266156,128.02050261987844),
      new daum.maps.LatLng(34.945735141299075,127.8656514778697),
      new daum.maps.LatLng(34.98810708858442,127.77777379774292),
      new daum.maps.LatLng(35.05044283067004,127.7686934085056),
      new daum.maps.LatLng(35.18800444445993,127.62155938940542),
      new daum.maps.LatLng(35.30895899198845,127.57744981067462),
      new daum.maps.LatLng(35.416656021711525,127.66197772850036),
      new daum.maps.LatLng(35.48566976067275,127.65272223811199),
      new daum.maps.LatLng(35.55416934621266,127.5910758210352),
      new daum.maps.LatLng(35.710032045185734,127.6611707824),
      new daum.maps.LatLng(35.75877145974027,127.66149574240903),
      new daum.maps.LatLng(35.914578921727475,127.88760998529825),
      new daum.maps.LatLng(35.828863479464246,128.01214365715353),
      new daum.maps.LatLng(35.822350695523916,128.12413151480996),
      new daum.maps.LatLng(35.754157851904864,128.1872669931136),
      new daum.maps.LatLng(35.64379506674617,128.2010183422375),
      new daum.maps.LatLng(35.655143301723506,128.30604854251976),
      new daum.maps.LatLng(35.611162891591924,128.37076523446862)
    ]
  }, {
    name : '제주특별자치도',
    path : [
      new daum.maps.LatLng(33.5671827939734,126.78053315117612),
      new daum.maps.LatLng(33.52631718190307,126.90242529719082),
      new daum.maps.LatLng(33.45240779679425,126.92652220420928),
      new daum.maps.LatLng(33.30869475201448,126.83600500618654),
      new daum.maps.LatLng(33.22252508184968,126.47031300260934),
      new daum.maps.LatLng(33.239980302641,126.33272960581516),
      new daum.maps.LatLng(33.20957341669934,126.26240587462564),
      new daum.maps.LatLng(33.258912480478706,126.18221758590857),
      new daum.maps.LatLng(33.34637471167083,126.16725678086475),
      new daum.maps.LatLng(33.43468522759215,126.25996467392193),
      new daum.maps.LatLng(33.530812755233526,126.53973807593867),
      new daum.maps.LatLng(33.5671827939734,126.78053315117612)
    ]
  }, {
    name : '경기도',
    path : [
      new daum.maps.LatLng(37.216678398652604,127.74791916960619),
      new daum.maps.LatLng(37.13513547248652,127.68759105858759),
      new daum.maps.LatLng(37.04710823773653,127.56668540256842),
      new daum.maps.LatLng(37.054272916072186,127.48651150499201),
      new daum.maps.LatLng(36.96774897693452,127.40185675425022),
      new daum.maps.LatLng(36.893818800323515,127.28980186774325),
      new daum.maps.LatLng(36.95211477658767,127.20189088906172),
      new daum.maps.LatLng(36.90495360443457,126.90874862921208),
      new daum.maps.LatLng(37.02917186716149,126.78905982429336),
      new daum.maps.LatLng(37.12789596217193,126.76873981756937),
      new daum.maps.LatLng(37.162111207994386,126.66065147287905),
      new daum.maps.LatLng(37.29230770240226,126.66117029941027),
      new daum.maps.LatLng(37.39542663737156,126.73654159447487),
      new daum.maps.LatLng(37.46829082834495,126.7794558399299),
      new daum.maps.LatLng(37.55418855285046,126.76771074586003),
      new daum.maps.LatLng(37.5406792814474,126.82214667655913),
      new daum.maps.LatLng(37.43411129656695,126.90278406196028),
      new daum.maps.LatLng(37.45538865064154,127.0110603289585),
      new daum.maps.LatLng(37.42901048359396,127.06567421459485),
      new daum.maps.LatLng(37.4741120690959,127.14340160232565),
      new daum.maps.LatLng(37.56094137372396,127.1819692544326),
      new daum.maps.LatLng(37.604577601147625,127.11801121523318),
      new daum.maps.LatLng(37.689166808661874,127.09495169527212),
      new daum.maps.LatLng(37.701057087223305,127.01591937724598),
      new daum.maps.LatLng(37.59506628871257,126.90187312038323),
      new daum.maps.LatLng(37.58160470552397,126.79367335609255),
      new daum.maps.LatLng(37.6380043357631,126.6571081995475),
      new daum.maps.LatLng(37.58778423691911,126.57257901089662),
      new daum.maps.LatLng(37.65297442793136,126.52895643549859),
      new daum.maps.LatLng(37.74839764154025,126.5278449957448),
      new daum.maps.LatLng(37.79015317747647,126.66215949338955),
      new daum.maps.LatLng(37.86718949384601,126.69141178487503),
      new daum.maps.LatLng(37.951970761231046,126.67068903365643),
      new daum.maps.LatLng(38.018563075721914,126.87254005350816),
      new daum.maps.LatLng(38.1278025444603,126.7480633194675),
      new daum.maps.LatLng(38.19820907808759,126.82578625833757),
      new daum.maps.LatLng(38.21212288819218,126.9839544298135),
      new daum.maps.LatLng(38.292037770275904,127.10928326728407),
      new daum.maps.LatLng(38.16069191607239,127.1899918680603),
      new daum.maps.LatLng(38.09522494247492,127.32119209688364),
      new daum.maps.LatLng(38.108172137725184,127.44100442418181),
      new daum.maps.LatLng(38.01623355879257,127.45798942498197),
      new daum.maps.LatLng(37.95509527225955,127.60299370898842),
      new daum.maps.LatLng(37.87462279280427,127.60110054786034),
      new daum.maps.LatLng(37.7913380477401,127.5215930246415),
      new daum.maps.LatLng(37.62844926779116,127.55898162684056),
      new daum.maps.LatLng(37.553211346165675,127.84944755618164),
      new daum.maps.LatLng(37.36704394149974,127.75948478326713),
      new daum.maps.LatLng(37.216678398652604,127.74791916960619)
    ]
  }, {
    name : '강원도',
    path : [
      new daum.maps.LatLng(37.14636173285517,129.36409556951807),
      new daum.maps.LatLng(37.116993294531504,129.27195914560068),
      new daum.maps.LatLng(37.04073562647372,129.19495765138078),
      new daum.maps.LatLng(37.09206894657519,128.92232373735848),
      new daum.maps.LatLng(37.04489763182982,128.89616512366052),
      new daum.maps.LatLng(37.08772009686231,128.78506184183564),
      new daum.maps.LatLng(37.065456865700284,128.65222772089592),
      new daum.maps.LatLng(37.11241553969775,128.42359520619718),
      new daum.maps.LatLng(37.146851332640516,128.40100010946418),
      new daum.maps.LatLng(37.16039350845341,128.26467533485845),
      new daum.maps.LatLng(37.24861300987745,128.20053329171233),
      new daum.maps.LatLng(37.18880686450643,128.0395007205308),
      new daum.maps.LatLng(37.258163053217004,127.9850536405436),
      new daum.maps.LatLng(37.225745913711684,127.92129035053397),
      new daum.maps.LatLng(37.15192338466081,127.90188453810782),
      new daum.maps.LatLng(37.14452909917481,127.78923903592758),
      new daum.maps.LatLng(37.216678398652604,127.74791916960619),
      new daum.maps.LatLng(37.36704394149974,127.75948478326713),
      new daum.maps.LatLng(37.553211346165675,127.84944755618164),
      new daum.maps.LatLng(37.62844926779116,127.55898162684056),
      new daum.maps.LatLng(37.7913380477401,127.5215930246415),
      new daum.maps.LatLng(37.87462279280427,127.60110054786034),
      new daum.maps.LatLng(37.95509527225955,127.60299370898842),
      new daum.maps.LatLng(38.01623355879257,127.45798942498197),
      new daum.maps.LatLng(38.108172137725184,127.44100442418181),
      new daum.maps.LatLng(38.09522494247492,127.32119209688364),
      new daum.maps.LatLng(38.16069191607239,127.1899918680603),
      new daum.maps.LatLng(38.292037770275904,127.10928326728407),
      new daum.maps.LatLng(38.33871941370269,127.24358622382793),
      new daum.maps.LatLng(38.3399992585832,127.38794035339806),
      new daum.maps.LatLng(38.303775909139,127.50847482254152),
      new daum.maps.LatLng(38.35376127646373,127.77754244179255),
      new daum.maps.LatLng(38.31351412535328,128.06348221672278),
      new daum.maps.LatLng(38.38225715357019,128.21560922478182),
      new daum.maps.LatLng(38.472047658453924,128.30143607437805),
      new daum.maps.LatLng(38.609582940386474,128.32126075504138),
      new daum.maps.LatLng(38.567149395928936,128.39718398564517),
      new daum.maps.LatLng(38.43000816708834,128.45819867909157),
      new daum.maps.LatLng(38.314212053173385,128.55106139415489),
      new daum.maps.LatLng(38.151122551605255,128.60959985638792),
      new daum.maps.LatLng(37.829662903142236,128.87927953768215),
      new daum.maps.LatLng(37.67577397838197,129.05652964693826),
      new daum.maps.LatLng(37.62144117686663,129.05430313818326),
      new daum.maps.LatLng(37.52080312471647,129.1222798014324),
      new daum.maps.LatLng(37.38098625148527,129.2505835287243),
      new daum.maps.LatLng(37.32267443669564,129.2698290123131),
      new daum.maps.LatLng(37.235494063115084,129.35684307715195),
      new daum.maps.LatLng(37.14636173285517,129.36409556951807)
    ]
  }
];
// 마커를 표시할 위치와 title 객체 배열입니다
var positions = [
  {
    title: '가야산국립공원',
    latlng: new daum.maps.LatLng(35.808458, 128.112730)
  },
  {
    title: '계룡산국립공원',
    latlng: new daum.maps.LatLng(36.357374, 127.209145)
  },
  {
    title: '내장산국립공원',
    latlng: new daum.maps.LatLng( 35.487610, 126.869100)
  },
  {
    title: '덕유산국립공원',
    latlng: new daum.maps.LatLng(35.876494, 127.756719)
  },
  {
    title: '무등산국립공원',
    latlng: new daum.maps.LatLng(35.128229, 127.004426)
  },
  {
    title: '변산반도국립공원',
    latlng: new daum.maps.LatLng(35.645374, 126.573265 )
  },
  {
    title: '북한산국립공원',
    latlng: new daum.maps.LatLng(37.676810, 126.992706)
  },
  {
    title: '설악산국립공원',
    latlng: new daum.maps.LatLng(38.144646, 128.417001)
  },
  {
    title: '소백산국립공원',
    latlng: new daum.maps.LatLng(36.969689, 128.510094)
  },
  {
    title: '속리산국립공원',
    latlng: new daum.maps.LatLng(36.545029, 127.857517)
  },
  {
    title: '오대산국립공원',
    latlng: new daum.maps.LatLng(37.781452, 128.596328)
  },
  {
    title: '월악산국립공원',
    latlng: new daum.maps.LatLng(36.849365, 128.149563)
  },
  {
    title: '월출산국립공원',
    latlng: new daum.maps.LatLng(34.759923, 126.686092)
  },
  {
    title: '주왕산국립공원',
    latlng: new daum.maps.LatLng(36.412806, 129.189237)
  }, {
    title: '지리산국립공원',
    latlng: new daum.maps.LatLng(35.313673, 127.624721)
  }, {
    title: '치악산국립공원',
    latlng: new daum.maps.LatLng(37.347371, 128.069207)
  }, {
    title: '태백산국립공원',
    latlng: new daum.maps.LatLng(37.117325, 128.933039)
  }, {
    title: '한라산국립공원',
    latlng: new daum.maps.LatLng(33.381207, 126.542284)
  }
];
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new daum.maps.LatLng(36.145029, 127.857517), // 지도의 중심좌표
    level: 13 // 지도의 확대 레벨
  };
var map = new daum.maps.Map(mapContainer, mapOption),
  customOverlay = new daum.maps.CustomOverlay({}),
  infowindow = new daum.maps.InfoWindow({removable: true});
// 지도에 영역데이터를 폴리곤으로 표시합니다
for (var i = 0, len = areas.length; i < len; i++) {
  displayArea(areas[i]);
}
// 다각형을 생상하고 이벤트를 등록하는 함수입니다
function displayArea(area) {
  // 다각형을 생성합니다
  var polygon = new daum.maps.Polygon({
    map: map, // 다각형을 표시할 지도 객체
    path: area.path,
    strokeWeight: 1,
    strokeColor: '#004c80',
    strokeOpacity: 0.8,
    fillColor: '#ffffff',
    fillOpacity: 0.8
  });
  // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
  // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
  daum.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
    polygon.setOptions({fillColor: '#09f'});
    customOverlay.setContent('<div class="area">' + area.name + '</div>');
    customOverlay.setPosition(mouseEvent.latLng);
    customOverlay.setMap(map);
  });
  // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
  daum.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
    customOverlay.setPosition(mouseEvent.latLng);
  });
  // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
  // 커스텀 오버레이를 지도에서 제거합니다
  daum.maps.event.addListener(polygon, 'mouseout', function() {
    polygon.setOptions({fillColor: '#fff'});
    customOverlay.setMap(null);
  });
  // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
  daum.maps.event.addListener(polygon, 'click', function(mouseEvent) {
    var content = '<div class="info">' +
      '   <div class="title">' + area.name + '</div>' +
      '   <div class="size">총 면적 : 약 ' + Math.floor(polygon.getArea()) + ' m<sup>2</sup></area>' +
      '</div>';
    infowindow.setContent(content);
    infowindow.setPosition(mouseEvent.latLng);
    infowindow.setMap(map);
  });
}
var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
for (var i = 0; i <= positions.length; i ++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new daum.maps.Size(24, 35);
  // 마커 이미지를 생성합니다
  var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
  // 마커를 생성합니다
  var marker = new daum.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image : markerImage // 마커 이미지
  });
  daum.maps.event.addListener(marker, 'click', function() {
    // 현재 지도 레벨에서 1레벨 확대한 레벨
    var level = map.getLevel()-1;
    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map.setLevel(level, {anchor: cluster.getCenter()});
  });
  daum.maps.event.addListener(marker, 'click', function() {
    console.log('ㄷㄹㄷㄹ');
  });
}
