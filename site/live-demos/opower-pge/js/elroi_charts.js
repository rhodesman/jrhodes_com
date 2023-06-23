

    var usage_year_val1 = [
            {
                you:440,
                neigh:600,
                eff:382,
                cost:34.71,
                smb:7129,
                smb_cost:497.98
            }, {
                you:482,
                neigh:582,
                eff:285,
                cost:48.03,
                smb:4820,
                smb_cost:481.76
            }, {
                you:385,
                neigh:485,
                eff:260,
                cost:38.39,
                smb:3850,
                smb_cost:389.02
            }, {
                you:207,
                neigh:460,
                eff:242,
                cost:20.76,
                smb:2071,
                smb_cost:209.19
            }, {
                you:302,
                neigh:430,
                eff:353,
                cost:30.51,
                smb:3022,
                smb_cost:307.40
            }, {
                you:453,
                neigh:553,
                eff:348,
                cost:45.59,
                smb:4533,
                smb_cost:450.92
            }, {
                you:504,
                neigh:580,
                eff:248,
                cost:54.36,
                smb:2283,
                smb_cost:241.85
            }, {
                you:485,
                neigh:418,
                eff:148,
                cost:34.57,
                smb:3485,
                smb_cost:344.80
            }, {
                you:248,
                neigh:420,
                eff:311,
                cost:34.72,
                smb:3486,
                smb_cost:341.42
            }, {
                you:411,
                neigh:550,
                eff:318,
                cost:41.12,
                smb:4110,
                smb_cost:412.32
            }, {
                you:518,
                neigh:618,
                eff:380,
                cost:51.43,
                smb:5180,
                smb_cost:513.24,
                temp_f:avg_temp+11,
                temp_c:avg_temp+3
            }, {
                you:610,
                neigh:723,
                eff:409,
                cost:58.98,
                smb:7293,
                smb_cost:586.14
            }
        ],
        usage_year_val2 = usage_year_val1.splice(12-parseInt(peak_mod),12),
        usage_year_val  = usage_year_val2.concat(usage_year_val1),
        gas_usage_year_val1 = [
            {
                gas_you:101,
                gas_neigh:140,
                gas_eff:77,
                gas_cost:27.58
            }, {
                gas_you:80,
                gas_neigh:144,
                gas_eff:88,
                gas_cost:19.01
            }, {
                gas_you:40,
                gas_neigh:122,
                gas_eff:60,
                gas_cost:9.76
            },
            {
                gas_you:20,
                gas_neigh:80,
                gas_eff:40,
                gas_cost:4.44
            }, {
                gas_you:9,
                gas_neigh:40,
                gas_eff:11,
                gas_cost:3.52
            }, {
                gas_you:10,
                gas_neigh:20,
                gas_eff:5,
                gas_cost:4.34
            }, {
                gas_you:9,
                gas_neigh:21,
                gas_eff:6,
                gas_cost:5.12
            }, {
                gas_you:11,
                gas_neigh:30,
                gas_eff:10,
                gas_cost:3.51
            }, {
                gas_you:1,
                gas_neigh:44,
                gas_eff:14,
                gas_cost:2.55
            }, {
                gas_you:20,
                gas_neigh:69,
                gas_eff:23,
                gas_cost:6.03
            }, {
                gas_you:20,
                gas_neigh:98,
                gas_eff:30,
                gas_cost:10.88
            }, {
                gas_you:140,
                gas_neigh:100,
                gas_eff:66,
                gas_cost:29.02
            }
        ],
        gas_usage_year_val2 = gas_usage_year_val1.splice(12-parseInt(gas_peak_mod),12),
        gas_usage_year_val  = gas_usage_year_val2.concat(gas_usage_year_val1),
        weather_year_f_val1 = [
            avg_temp+12, avg_temp+4, avg_temp-4, avg_temp-10, avg_temp-22, avg_temp-36, avg_temp-33, avg_temp-27, avg_temp-9, avg_temp+1, avg_temp+7, avg_temp+17
        ],
        weather_year_f_val2 = weather_year_f_val1.splice(12-parseInt(warmest_month),12),
        weather_year_f_val  = weather_year_f_val2.concat(weather_year_f_val1),
        weather_year_c_val1 = [
            avg_temp+2, avg_temp+1, avg_temp-3, avg_temp-7, avg_temp-10, avg_temp-11, avg_temp-10, avg_temp-6, avg_temp-2, avg_temp+1, avg_temp+3, avg_temp+3
        ],
        weather_year_c_val2 = weather_year_c_val1.splice(12-parseInt(warmest_month),12),
        weather_year_c_val  = weather_year_c_val2.concat(weather_year_c_val1);


    var electricity_usage_year = [
        [
            {value: usage_year_val[0].you, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[1].you, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[2].you, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[3].you, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[4].you, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[5].you, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[6].you, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[7].you, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[8].you, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[9].you, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[10].you, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[11].you, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&usage&bill"}
        ]
      ];
    var electricity_usage_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"}
     ];
  var electricity_cost_year = [
        [
            {value: usage_year_val[0].cost, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[1].cost, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[2].cost, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[3].cost, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[4].cost, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[5].cost, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[6].cost, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[7].cost, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[8].cost, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[9].cost, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[10].cost, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[11].cost, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&cost&bill"}
        ]
      ];
  var electricity_cost_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"}
     ];
  var electricity_weather_year_f = [
        [
            {value: weather_year_f_val[0], endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[1], endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[2], endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[3], endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[4], endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[5], endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[6], endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[7], endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[8], endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[9], endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[10], endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_f_val[11], endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&weather&bill"}
        ]
      ];
  var electricity_weather_year_c = [
        [
            {value: weather_year_c_val[0], endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[1], endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[2], endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[3], endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[4], endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[5], endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[6], endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[7], endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[8], endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[9], endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[10], endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: weather_year_c_val[11], endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&weather&bill"}
        ]
      ];
    var electricity_solar_year = [
        [
            {value: 322, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 385, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 469, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 472, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 367, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 289, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 273, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 254, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 164, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 103, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 187, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&solar&bill"},
            {value: 191, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&solar&bill"}
        ]
      ];
  var electricity_weather_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"}
     ];
  var electricity_solar_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&bill",drillMessage: "View each day"}
     ];
  var electricity_comparison_year = [
        [
            {value: usage_year_val[0].you, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[1].you, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[2].you, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[3].you, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[4].you, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[5].you, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[6].you, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[7].you, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[8].you, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[9].you, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[10].you, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[11].you, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&comparison&bill"}
        ],
        [
            {value: usage_year_val[0].neigh, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[1].neigh, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[2].neigh, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[3].neigh, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[4].neigh, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[5].neigh, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[6].neigh, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[7].neigh, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[8].neigh, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[9].neigh, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[10].neigh, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[11].neigh, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&comparison&bill"}
        ],
        [
            {value: usage_year_val[0].eff, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[1].eff, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[2].eff, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[3].eff, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[4].eff, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[5].eff, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[6].eff, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[7].eff, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[8].eff, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[9].eff, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[10].eff, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&comparison&bill"},
            {value: usage_year_val[11].eff, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&comparison&bill"}
        ]
    ];
    var electricity_comparison_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&comparison&bill",drillMessage: "View each day"}
     ];
  var electricity_usage_bill = [
        [
            {value: 14, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 22, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 40, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 24, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 25, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 23, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 29, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 34, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 42, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 28, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 20, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 10, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 25, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 18, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 34, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 36, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 18, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 10, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 31, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 29, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 8, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 24, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ]
      ];
    var electricity_usage_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"}
     ];
  var electricity_usage_bill_rates = [
        [
            {value: 2.1, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.2, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3.4, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.6, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.1, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3.2, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.2, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5.1, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5.3, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.2, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.1, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3.7, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.3, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.2, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.5, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.1, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5.3, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.1, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.1, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3.3, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.5, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5.1, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2.2, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3.6, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.3, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4.1, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 1, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 3, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 5, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 1, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 2, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 0, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 3, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day",pointFlag:true},
            {value: 0, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 4, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day",pointFlag:true},
            {value: 0, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ]
    ];
  var electricity_usage_bill_rates_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
    ];
  var electricity_usage_day = [
        [
            {value: 0.2, date: "2013-07-10T00:00:00"},
            {value: 0.23, date: "2013-07-10T00:30:00"},
            {value: 0.22, date: "2013-07-10T01:00:00"},
            {value: 0.30, date: "2013-07-10T01:30:00"},
            {value: 0.28, date: "2013-07-10T02:00:00"},
            {value: 0.31, date: "2013-07-10T02:30:00"},
            {value: 0.30, date: "2013-07-10T03:00:00"},
            {value: 0.22, date: "2013-07-10T03:30:00"},
            {value: 0.39, date: "2013-07-10T04:00:00"},
            {value: 0.21, date: "2013-07-10T04:30:00"},
            {value: 0.18, date: "2013-07-10T05:00:00"},
            {value: 0.28, date: "2013-07-10T05:30:00"},
            {value: 0.34, date: "2013-07-10T06:00:00"},
            {value: 0.40, date: "2013-07-10T06:30:00"},
            {value: 0.51, date: "2013-07-10T07:00:00"},
            {value: 0.55, date: "2013-07-10T07:30:00"},
            {value: 0.58, date: "2013-07-10T08:00:00"},
            {value: 0.32, date: "2013-07-10T08:30:00"},
            {value: 0.70, date: "2013-07-10T09:00:00"},
            {value: 0.77, date: "2013-07-10T09:30:00"},
            {value: 0.46, date: "2013-07-10T10:00:00"},
            {value: 0.42, date: "2013-07-10T10:30:00"},
            {value: 0.32, date: "2013-07-10T11:00:00"},
            {value: 0.28, date: "2013-07-10T11:30:00"},
            {value: 0.26, date: "2013-07-10T12:00:00"},
            {value: 0.32, date: "2013-07-10T12:30:00"},
            {value: 0.33, date: "2013-07-10T13:00:00"},
            {value: 0.45, date: "2013-07-10T13:30:00"},
            {value: 0.54, date: "2013-07-10T14:00:00"},
            {value: 0.56, date: "2013-07-10T14:30:00"},
            {value: 0.78, date: "2013-07-10T15:00:00"},
            {value: 1.20, date: "2013-07-10T15:30:00"},
            {value: 1.23, date: "2013-07-10T16:00:00"},
            {value: 1.90, date: "2013-07-10T16:30:00"},
            {value: 1.82, date: "2013-07-10T17:00:00"},
            {value: 1.57, date: "2013-07-10T17:30:00"},
            {value: 1.63, date: "2013-07-10T18:00:00"},
            {value: 1.66, date: "2013-07-10T18:30:00"},
            {value: 1.54, date: "2013-07-10T19:00:00"},
            {value: 1.74, date: "2013-07-10T19:30:00"},
            {value: 1.71, date: "2013-07-10T20:00:00"},
            {value: 1.63, date: "2013-07-10T20:30:00"},
            {value: 1.43, date: "2013-07-10T21:00:00"},
            {value: 1.21, date: "2013-07-10T21:30:00"},
            {value: 1.31, date: "2013-07-10T22:00:00"},
            {value: 0.68, date: "2013-07-10T22:30:00"},
            {value: 0.44, date: "2013-07-10T23:00:00"},
            {value: 0.22, date: "2013-07-10T23:30:00"},
            {value: 0.22, date: "2013-07-11T00:00:00"}
        ]
      ];
  var electricity_usage_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh"}
    ];
  var electricity_usage_day_rates = [
        [
            {value: 0.02, date: "2013-07-10T00:00:00"},
            {value: 0.03, date: "2013-07-10T00:30:00"},
            {value: 0.05, date: "2013-07-10T01:00:00"},
            {value: 0.03, date: "2013-07-10T01:30:00"},
            {value: 0.02, date: "2013-07-10T02:00:00"},
            {value: 0.03, date: "2013-07-10T02:30:00"},
            {value: 0.02, date: "2013-07-10T03:00:00"},
            {value: 0.04, date: "2013-07-10T03:30:00"},
            {value: 0.03, date: "2013-07-10T04:00:00"},
            {value: 0.05, date: "2013-07-10T04:30:00"},
            {value: 0.07, date: "2013-07-10T05:00:00"},
            {value: 0.06, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0.06, date: "2013-07-10T06:00:00"},
            {value: 0.08, date: "2013-07-10T06:30:00"},
            {value: 0.15, date: "2013-07-10T07:00:00"},
            {value: 0.14, date: "2013-07-10T07:30:00"},
            {value: 0.22, date: "2013-07-10T08:00:00"},
            {value: 0.11, date: "2013-07-10T08:30:00"},
            {value: 0.10, date: "2013-07-10T09:00:00"},
            {value: 0.12, date: "2013-07-10T09:30:00"},
            {value: 0.10, date: "2013-07-10T10:00:00"},
            {value: 0.08, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 00, date: "2013-07-10T10:30:00"},
            {value: 0.08, date: "2013-07-10T11:00:00"},
            {value: 0.09, date: "2013-07-10T11:30:00"},
            {value: 0.11, date: "2013-07-10T12:00:00"},
            {value: 0.14, date: "2013-07-10T12:30:00"},
            {value: 0.13, date: "2013-07-10T13:00:00"},
            {value: 0.14, date: "2013-07-10T13:30:00"},
            {value: 0.18, date: "2013-07-10T14:00:00"},
            {value: 0.22, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0.26, date: "2013-07-10T15:00:00"},
            {value: 0.32, date: "2013-07-10T15:30:00"},
            {value: 0.42, date: "2013-07-10T16:00:00"},
            {value: 0.46, date: "2013-07-10T16:30:00"},
            {value: 0.60, date: "2013-07-10T17:00:00"},
            {value: 0.48, date: "2013-07-10T17:30:00"},
            {value: 0.40, date: "2013-07-10T18:00:00"},
            {value: 0.38, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0.31, date: "2013-07-10T19:00:00"},
            {value: 0.27, date: "2013-07-10T19:30:00"},
            {value: 0.20, date: "2013-07-10T20:00:00"},
            {value: 0.24, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0.22, date: "2013-07-10T21:00:00"},
            {value: 0.18, date: "2013-07-10T21:30:00"},
            {value: 0.13, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0.11, date: "2013-07-10T22:30:00"},
            {value: 0.05, date: "2013-07-10T23:00:00"},
            {value: 0.02, date: "2013-07-10T23:30:00"},
            {value: 0.04, date: "2013-07-11T00:00:00"}
        ]
    ];
  var electricity_usage_day_rates_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh",add:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh",add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh",add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",add:true}
    ];
  var electricity_cost_bill = [
        [
            {value: 2.1, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.4, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.2, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.2, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.1, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.3, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.2, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.7, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.3, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.5, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.3, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.1, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.3, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.5, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.1, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.6, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.3, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
    ];
  var electricity_cost_bill_rates = [
        [
            {value: 1.23, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.25, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.46, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.67, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.17, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.12, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.26, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.29, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.15, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.32, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.90, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.24, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.13, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.74, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.35, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.86, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.26, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.52, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.16, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.33, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.17, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.77, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.18, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.39, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.58, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.17, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.28, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.69, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.30, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.11, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 2.3, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.4, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.1, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.4, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.1, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.0, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1.9, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.2, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.7, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.1, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.3, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.8, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.9, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.4, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.6, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.7, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.8, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.2, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.9, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.2, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.4, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.5, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.3, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.7, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.8, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 4, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 1, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 0, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 7, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day",pointFlag:true},
            {value: 0, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 8, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day",pointFlag:true},
            {value: 0, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ]
    ];
  var electricity_cost_bill_rates_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 2",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 3",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 4",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 5",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 6",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 7",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 9",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 11",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 12",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 13",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 14",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 17",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 18",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 19",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 20",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 21",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 24",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 25",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 26",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 27",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 28",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
    ];
  var electricity_cost_day = [
        [
            {value: 0.02, date: "2013-07-10T00:00:00"},
            {value: 0.03, date: "2013-07-10T00:30:00"},
            {value: 0.05, date: "2013-07-10T01:00:00"},
            {value: 0.03, date: "2013-07-10T01:30:00"},
            {value: 0.02, date: "2013-07-10T02:00:00"},
            {value: 0.03, date: "2013-07-10T02:30:00"},
            {value: 0.02, date: "2013-07-10T03:00:00"},
            {value: 0.04, date: "2013-07-10T03:30:00"},
            {value: 0.03, date: "2013-07-10T04:00:00"},
            {value: 0.05, date: "2013-07-10T04:30:00"},
            {value: 0.07, date: "2013-07-10T05:00:00"},
            {value: 0.06, date: "2013-07-10T05:30:00"},
            {value: 0.10, date: "2013-07-10T06:00:00"},
            {value: 0.11, date: "2013-07-10T06:30:00"},
            {value: 0.12, date: "2013-07-10T07:00:00"},
            {value: 0.14, date: "2013-07-10T07:30:00"},
            {value: 0.13, date: "2013-07-10T08:00:00"},
            {value: 0.20, date: "2013-07-10T08:30:00"},
            {value: 0.21, date: "2013-07-10T09:00:00"},
            {value: 0.19, date: "2013-07-10T09:30:00"},
            {value: 0.31, date: "2013-07-10T10:00:00"},
            {value: 0.11, date: "2013-07-10T10:30:00"},
            {value: 0.19, date: "2013-07-10T11:00:00"},
            {value: 0.24, date: "2013-07-10T11:30:00"},
            {value: 0.25, date: "2013-07-10T12:00:00"},
            {value: 0.26, date: "2013-07-10T12:30:00"},
            {value: 0.40, date: "2013-07-10T13:00:00"},
            {value: 0.37, date: "2013-07-10T13:30:00"},
            {value: 0.35, date: "2013-07-10T14:00:00"},
            {value: 0.36, date: "2013-07-10T14:30:00"},
            {value: 0.44, date: "2013-07-10T15:00:00"},
            {value: 0.60, date: "2013-07-10T15:30:00"},
            {value: 0.49, date: "2013-07-10T16:00:00"},
            {value: 0.43, date: "2013-07-10T16:30:00"},
            {value: 0.42, date: "2013-07-10T17:00:00"},
            {value: 0.29, date: "2013-07-10T17:30:00"},
            {value: 0.32, date: "2013-07-10T18:00:00"},
            {value: 0.19, date: "2013-07-10T18:30:00"},
            {value: 0.10, date: "2013-07-10T19:00:00"},
            {value: 0.09, date: "2013-07-10T19:30:00"},
            {value: 0.01, date: "2013-07-10T20:00:00"},
            {value: 0.02, date: "2013-07-10T20:30:00"},
            {value: 0.03, date: "2013-07-10T21:00:00"},
            {value: 0.02, date: "2013-07-10T21:30:00"},
            {value: 0.06, date: "2013-07-10T22:00:00"},
            {value: 0.03, date: "2013-07-10T22:30:00"},
            {value: 0.01, date: "2013-07-10T23:00:00"},
            {value: 0.01, date: "2013-07-10T23:30:00"},
            {value: 0.01, date: "2013-07-11T00:00:00"}
        ],
    ];
  var electricity_cost_day_rates = [
        [
            {value: 0.03, date: "2013-07-10T00:00:00"},
            {value: 0.04, date: "2013-07-10T00:30:00"},
            {value: 0.06, date: "2013-07-10T01:00:00"},
            {value: 0.04, date: "2013-07-10T01:30:00"},
            {value: 0.03, date: "2013-07-10T02:00:00"},
            {value: 0.04, date: "2013-07-10T02:30:00"},
            {value: 0.05, date: "2013-07-10T03:00:00"},
            {value: 0.06, date: "2013-07-10T03:30:00"},
            {value: 0.05, date: "2013-07-10T04:00:00"},
            {value: 0.06, date: "2013-07-10T04:30:00"},
            {value: 0.07, date: "2013-07-10T05:00:00"},
            {value: 0.07, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0.16, date: "2013-07-10T06:00:00"},
            {value: 0.18, date: "2013-07-10T06:30:00"},
            {value: 0.25, date: "2013-07-10T07:00:00"},
            {value: 0.24, date: "2013-07-10T07:30:00"},
            {value: 0.22, date: "2013-07-10T08:00:00"},
            {value: 0.18, date: "2013-07-10T08:30:00"},
            {value: 0.20, date: "2013-07-10T09:00:00"},
            {value: 0.22, date: "2013-07-10T09:30:00"},
            {value: 0.20, date: "2013-07-10T10:00:00"},
            {value: 0.23, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 00, date: "2013-07-10T10:30:00"},
            {value: 0.36, date: "2013-07-10T11:00:00"},
            {value: 0.34, date: "2013-07-10T11:30:00"},
            {value: 0.33, date: "2013-07-10T12:00:00"},
            {value: 0.34, date: "2013-07-10T12:30:00"},
            {value: 0.33, date: "2013-07-10T13:00:00"},
            {value: 0.34, date: "2013-07-10T13:30:00"},
            {value: 0.38, date: "2013-07-10T14:00:00"},
            {value: 0.32, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0.52, date: "2013-07-10T15:00:00"},
            {value: 0.66, date: "2013-07-10T15:30:00"},
            {value: 0.68, date: "2013-07-10T16:00:00"},
            {value: 0.72, date: "2013-07-10T16:30:00"},
            {value: 0.80, date: "2013-07-10T17:00:00"},
            {value: 0.68, date: "2013-07-10T17:30:00"},
            {value: 0.70, date: "2013-07-10T18:00:00"},
            {value: 0.68, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0.26, date: "2013-07-10T19:00:00"},
            {value: 0.23, date: "2013-07-10T19:30:00"},
            {value: 0.20, date: "2013-07-10T20:00:00"},
            {value: 0.24, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0.12, date: "2013-07-10T21:00:00"},
            {value: 0.18, date: "2013-07-10T21:30:00"},
            {value: 0.13, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0.03, date: "2013-07-10T22:30:00"},
            {value: 0.04, date: "2013-07-10T23:00:00"},
            {value: 0.03, date: "2013-07-10T23:30:00"},
            {value: 0.03, date: "2013-07-11T00:00:00"}
        ]
    ];
  var electricity_cost_day_rates_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,add:true,cost:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,add:true,cost:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,add:true,cost:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,add:true,cost:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,add:true,cost:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,add:true,cost:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,add:true,cost:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,add:true,cost:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,add:true,cost:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,add:true,cost:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,add:true,cost:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,add:true,cost:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,add:true,cost:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,add:true,cost:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,add:true,cost:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,add:true,cost:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,add:true,cost:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,add:true,cost:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,add:true,cost:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,add:true,cost:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,add:true,cost:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,cost:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,add:true,cost:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,add:true,cost:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,add:true,cost:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,add:true,cost:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,add:true,cost:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,add:true,cost:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,add:true,cost:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,add:true,cost:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,add:true,cost:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,add:true,cost:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,add:true,cost:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,add:true,cost:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,add:true,cost:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,add:true,cost:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,add:true,cost:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,add:true,cost:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,add:true,cost:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,add:true,cost:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,add:true,cost:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,add:true,cost:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,add:true,cost:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,add:true,cost:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,cost:true}
    ];
  var electricity_weather_bill_f = [
        [
            {value: avg_temp, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+2, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+7, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+5, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+6, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+5, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+4, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+8, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+11, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+9, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+22, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+13, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+6, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+3, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+5, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+12, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+15, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+16, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+7, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+8, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+10, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+11, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+16, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+18, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+13, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+14, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+10, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+12, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+9, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp+6, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&weather&day"}
        ]
      ];
  var electricity_weather_bill_c = [
        [
            {value: avg_temp-10, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-10, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-12, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-11, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-10, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-11, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-11, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-12, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-15, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-10, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-10, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-7, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-7, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-10, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-7, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-8, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: avg_temp-9, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&weather&day"}
        ]
      ];
  var electricity_solar_bill = [
        [
            {value: 8.2, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 8.5, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.1, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 7.3, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 6.2, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.4, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.6, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.1, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.2, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.5, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 0.1, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 0.3, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 4.8, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.8, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 11.2, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 14.3, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 13.5, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 11.2, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 11.5, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 1.8, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.5, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.3, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.3, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 11.1, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 10.8, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 7.2, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 7.5, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.8, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.7, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&solar&day"},
            {value: 9.9, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&solar&day"}
        ]
      ];
  var electricity_solar_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,solar:true,unit: "kWh",drillLink: "&electricity&solar&day",drillMessage: "View each hour"},
     ];
  var electricity_weather_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
     ];
  var electricity_weather_day_f = [
        [
            {value: avg_temp-2, date: "2013-07-10T00:00:00"},
            {value: avg_temp-1, date: "2013-07-10T00:30:00"},
            {value: avg_temp-1, date: "2013-07-10T01:00:00"},
            {value: avg_temp-1, date: "2013-07-10T01:30:00"},
            {value: avg_temp, date: "2013-07-10T02:00:00"},
            {value: avg_temp+1, date: "2013-07-10T02:30:00"},
            {value: avg_temp+2, date: "2013-07-10T03:00:00"},
            {value: avg_temp+2, date: "2013-07-10T03:30:00"},
            {value: avg_temp+1, date: "2013-07-10T04:00:00"},
            {value: avg_temp, date: "2013-07-10T04:30:00"},
            {value: avg_temp+1, date: "2013-07-10T05:00:00"},
            {value: avg_temp+2, date: "2013-07-10T05:30:00"},
            {value: avg_temp+2, date: "2013-07-10T06:00:00"},
            {value: avg_temp+2, date: "2013-07-10T06:30:00"},
            {value: avg_temp+3, date: "2013-07-10T07:00:00"},
            {value: avg_temp+3, date: "2013-07-10T07:30:00"},
            {value: avg_temp+4, date: "2013-07-10T08:00:00"},
            {value: avg_temp+5, date: "2013-07-10T08:30:00"},
            {value: avg_temp+4, date: "2013-07-10T09:00:00"},
            {value: avg_temp+6, date: "2013-07-10T09:30:00"},
            {value: avg_temp+7, date: "2013-07-10T10:00:00"},
            {value: avg_temp+8, date: "2013-07-10T10:30:00"},
            {value: avg_temp+9, date: "2013-07-10T11:00:00"},
            {value: avg_temp+11, date: "2013-07-10T11:30:00"},
            {value: avg_temp+13, date: "2013-07-10T12:00:00"},
            {value: avg_temp+14, date: "2013-07-10T12:30:00"},
            {value: avg_temp+16, date: "2013-07-10T13:00:00"},
            {value: avg_temp+19, date: "2013-07-10T13:30:00"},
            {value: avg_temp+20, date: "2013-07-10T14:00:00"},
            {value: avg_temp+18, date: "2013-07-10T14:30:00"},
            {value: avg_temp+17, date: "2013-07-10T15:00:00"},
            {value: avg_temp+18, date: "2013-07-10T15:30:00"},
            {value: avg_temp+14, date: "2013-07-10T16:00:00"},
            {value: avg_temp+13, date: "2013-07-10T16:30:00"},
            {value: avg_temp+13, date: "2013-07-10T17:00:00"},
            {value: avg_temp+14, date: "2013-07-10T17:30:00"},
            {value: avg_temp+12, date: "2013-07-10T18:00:00"},
            {value: avg_temp+12, date: "2013-07-10T18:30:00"},
            {value: avg_temp+11, date: "2013-07-10T19:00:00"},
            {value: avg_temp+10, date: "2013-07-10T19:30:00"},
            {value: avg_temp+9, date: "2013-07-10T20:00:00"},
            {value: avg_temp+7, date: "2013-07-10T20:30:00"},
            {value: avg_temp+8, date: "2013-07-10T21:00:00"},
            {value: avg_temp+7, date: "2013-07-10T21:30:00"},
            {value: avg_temp+6, date: "2013-07-10T22:00:00"},
            {value: avg_temp+5, date: "2013-07-10T22:30:00"},
            {value: avg_temp+5, date: "2013-07-10T23:00:00"},
            {value: avg_temp+3, date: "2013-07-10T23:30:00"},
            {value: avg_temp+2, date: "2013-07-11T00:00:00"}
        ]
      ];
  var electricity_weather_day_c = [
        [
            {value: avg_temp-12, date: "2013-07-10T00:00:00"},
            {value: avg_temp-12, date: "2013-07-10T00:30:00"},
            {value: avg_temp-11, date: "2013-07-10T01:00:00"},
            {value: avg_temp-10, date: "2013-07-10T01:30:00"},
            {value: avg_temp-11, date: "2013-07-10T02:00:00"},
            {value: avg_temp-10, date: "2013-07-10T02:30:00"},
            {value: avg_temp-10, date: "2013-07-10T03:00:00"},
            {value: avg_temp-10, date: "2013-07-10T03:30:00"},
            {value: avg_temp-10, date: "2013-07-10T04:00:00"},
            {value: avg_temp-10, date: "2013-07-10T04:30:00"},
            {value: avg_temp-10, date: "2013-07-10T05:00:00"},
            {value: avg_temp-9, date: "2013-07-10T05:30:00"},
            {value: avg_temp-9, date: "2013-07-10T06:00:00"},
            {value: avg_temp-9, date: "2013-07-10T06:30:00"},
            {value: avg_temp-9, date: "2013-07-10T07:00:00"},
            {value: avg_temp-9, date: "2013-07-10T07:30:00"},
            {value: avg_temp-8, date: "2013-07-10T08:00:00"},
            {value: avg_temp-8, date: "2013-07-10T08:30:00"},
            {value: avg_temp-8, date: "2013-07-10T09:00:00"},
            {value: avg_temp-8, date: "2013-07-10T09:30:00"},
            {value: avg_temp-8, date: "2013-07-10T10:00:00"},
            {value: avg_temp-7, date: "2013-07-10T10:30:00"},
            {value: avg_temp-8, date: "2013-07-10T11:00:00"},
            {value: avg_temp-6, date: "2013-07-10T11:30:00"},
            {value: avg_temp-6, date: "2013-07-10T12:00:00"},
            {value: avg_temp-5, date: "2013-07-10T12:30:00"},
            {value: avg_temp-5, date: "2013-07-10T13:00:00"},
            {value: avg_temp-4, date: "2013-07-10T13:30:00"},
            {value: avg_temp-5, date: "2013-07-10T14:00:00"},
            {value: avg_temp-5, date: "2013-07-10T14:30:00"},
            {value: avg_temp-5, date: "2013-07-10T15:00:00"},
            {value: avg_temp-6, date: "2013-07-10T15:30:00"},
            {value: avg_temp-7, date: "2013-07-10T16:00:00"},
            {value: avg_temp-7, date: "2013-07-10T16:30:00"},
            {value: avg_temp-8, date: "2013-07-10T17:00:00"},
            {value: avg_temp-8, date: "2013-07-10T17:30:00"},
            {value: avg_temp-9, date: "2013-07-10T18:00:00"},
            {value: avg_temp-9, date: "2013-07-10T18:30:00"},
            {value: avg_temp-10, date: "2013-07-10T19:00:00"},
            {value: avg_temp-11, date: "2013-07-10T19:30:00"},
            {value: avg_temp-11, date: "2013-07-10T20:00:00"},
            {value: avg_temp-10, date: "2013-07-10T20:30:00"},
            {value: avg_temp-11, date: "2013-07-10T21:00:00"},
            {value: avg_temp-12, date: "2013-07-10T21:30:00"},
            {value: avg_temp-12, date: "2013-07-10T22:00:00"},
            {value: avg_temp-13, date: "2013-07-10T22:30:00"},
            {value: avg_temp-14, date: "2013-07-10T23:00:00"},
            {value: avg_temp-13, date: "2013-07-10T23:30:00"},
            {value: avg_temp-13, date: "2013-07-11T00:00:00"}
        ]
      ];
  var electricity_solar_day = [
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0.01, date: "2013-07-10T07:00:00"},
            {value: 0.02, date: "2013-07-10T07:30:00"},
            {value: 0.04, date: "2013-07-10T08:00:00"},
            {value: 0.08, date: "2013-07-10T08:30:00"},
            {value: 0.15, date: "2013-07-10T09:00:00"},
            {value: 0.24, date: "2013-07-10T09:30:00"},
            {value: 0.53, date: "2013-07-10T10:00:00"},
            {value: 0.89, date: "2013-07-10T10:30:00"},
            {value: 1.04, date: "2013-07-10T11:00:00"},
            {value: 1.11, date: "2013-07-10T11:30:00"},
            {value: 1.25, date: "2013-07-10T12:00:00"},
            {value: 1.42, date: "2013-07-10T12:30:00"},
            {value: 1.52, date: "2013-07-10T13:00:00"},
            {value: 1.53, date: "2013-07-10T13:30:00"},
            {value: 1.59, date: "2013-07-10T14:00:00"},
            {value: 1.48, date: "2013-07-10T14:30:00"},
            {value: 1.43, date: "2013-07-10T15:00:00"},
            {value: 1.37, date: "2013-07-10T15:30:00"},
            {value: 1.26, date: "2013-07-10T16:00:00"},
            {value: 1.18, date: "2013-07-10T16:30:00"},
            {value: 1.09, date: "2013-07-10T17:00:00"},
            {value: 0.87, date: "2013-07-10T17:30:00"},
            {value: 0.67, date: "2013-07-10T18:00:00"},
            {value: 0.56, date: "2013-07-10T18:30:00"},
            {value: 0.34, date: "2013-07-10T19:00:00"},
            {value: 0.17, date: "2013-07-10T19:30:00"},
            {value: 0.08, date: "2013-07-10T20:00:00"},
            {value: 0.03, date: "2013-07-10T20:30:00"},
            {value: 0.01, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ]
      ];
  var electricity_solar_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh",solar:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",solar:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",solar:true}
    ];
  var electricity_weather_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",temp:true}
    ];
  var electricity_comparison_bill = [
        [
            {value: 14, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 12, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 22, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 40, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 25, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 23, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 29, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 34, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 42, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 28, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 12, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 10, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 25, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 18, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 5, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 34, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 36, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 18, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 10, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 2, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 31, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 29, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 8, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&comparison&day"},
        ],
        [
            {value: 35, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 34, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 40, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 41, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 44, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 38, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 37, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 36, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 32, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 31, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 32, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 34, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 41, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 44, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 38, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 37, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 36, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 28, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 30, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 32, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 34, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 40, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 41, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 44, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 38, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 31, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&comparison&day"}
        ],
        [
            {value: 18, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 14, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 16, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 18, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 21, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 14, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 22, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 25, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 21, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 12, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 14, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 16, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 18, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 21, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 14, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 22, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 24, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 25, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 21, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 12, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 14, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 16, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 20, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 18, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&comparison&day"},
            {value: 21, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&comparison&day"}
        ]
    ];
    var electricity_comparison_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,allNeighbors:true,effNeighbors:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"}
     ];
    var smb_electricity_demand_year = [
        [
            {value: 27, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 22, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 22, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 22.1, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 22.2, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 22.3, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 24, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 24.5, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 25, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 25.6, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 26, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&demand&bill"},
            {value: 26.4, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&demand&bill"}
        ]
      ];
    var smb_electricity_demand_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "kWh",drillLink: "&electricity&demand&bill",drillMessage: "View each day"}
     ];
  var smb_electricity_demand_bill = [
        [
            {value: 21, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 21, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 24, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&demand&day"},
            {value: 20, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&demand&day"}
        ]
      ];
    var smb_electricity_demand_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,unit: "kW",drillLink: "&electricity&demand&day",drillMessage: "View each hour"}
     ];
  var smb_electricity_demand_day = [
        [
            {value: 16, date: "2013-07-10T00:00:00"},
            {value: 15, date: "2013-07-10T00:30:00"},
            {value: 16, date: "2013-07-10T01:00:00"},
            {value: 15, date: "2013-07-10T01:30:00"},
            {value: 16, date: "2013-07-10T02:00:00"},
            {value: 15, date: "2013-07-10T02:30:00"},
            {value: 16, date: "2013-07-10T03:00:00"},
            {value: 15, date: "2013-07-10T03:30:00"},
            {value: 16, date: "2013-07-10T04:00:00"},
            {value: 15, date: "2013-07-10T04:30:00"},
            {value: 16, date: "2013-07-10T05:00:00"},
            {value: 15, date: "2013-07-10T05:30:00"},
            {value: 16, date: "2013-07-10T06:00:00"},
            {value: 15, date: "2013-07-10T06:30:00"},
            {value: 16, date: "2013-07-10T07:00:00"},
            {value: 15, date: "2013-07-10T07:30:00"},
            {value: 19, date: "2013-07-10T08:00:00"},
            {value: 24, date: "2013-07-10T08:30:00"},
            {value: 23, date: "2013-07-10T09:00:00"},
            {value: 24, date: "2013-07-10T09:30:00"},
            {value: 23, date: "2013-07-10T10:00:00"},
            {value: 22, date: "2013-07-10T10:30:00"},
            {value: 23, date: "2013-07-10T11:00:00"},
            {value: 22, date: "2013-07-10T11:30:00"},
            {value: 23, date: "2013-07-10T12:00:00"},
            {value: 22, date: "2013-07-10T12:30:00"},
            {value: 23, date: "2013-07-10T13:00:00"},
            {value: 22, date: "2013-07-10T13:30:00"},
            {value: 19, date: "2013-07-10T14:00:00"},
            {value: 18, date: "2013-07-10T14:30:00"},
            {value: 19, date: "2013-07-10T15:00:00"},
            {value: 16, date: "2013-07-10T15:30:00"},
            {value: 19, date: "2013-07-10T16:00:00"},
            {value: 23, date: "2013-07-10T16:30:00"},
            {value: 22, date: "2013-07-10T17:00:00"},
            {value: 23, date: "2013-07-10T17:30:00"},
            {value: 22, date: "2013-07-10T18:00:00"},
            {value: 25, date: "2013-07-10T18:30:00"},
            {value: 23, date: "2013-07-10T19:00:00"},
            {value: 23, date: "2013-07-10T19:30:00"},
            {value: 22, date: "2013-07-10T20:00:00"},
            {value: 23, date: "2013-07-10T20:30:00"},
            {value: 22, date: "2013-07-10T21:00:00"},
            {value: 23, date: "2013-07-10T21:30:00"},
            {value: 22, date: "2013-07-10T22:00:00"},
            {value: 15, date: "2013-07-10T22:30:00"},
            {value: 16, date: "2013-07-10T23:00:00"},
            {value: 15, date: "2013-07-10T23:30:00"},
            {value: 16, date: "2013-07-11T00:00:00"}
        ]
      ];
  var smb_electricity_demand_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kW"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kW"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kW"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kW"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kW"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kW"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kW"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kW"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kW"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kW"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kW"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kW"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kW"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kW"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kW"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kW"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kW"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kW"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kW"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kW"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kW"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kW"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kW"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kW"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kW"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kW"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kW"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kW"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kW"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kW"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kW"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kW"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kW"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kW"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kW"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kW"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kW"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kW"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kW"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kW"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kW"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kW"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kW"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kW"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kW"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kW"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kW"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kW"}
    ];

/* gas */


    var gas_usage_year = [
        [
            {value: gas_usage_year_val[0].gas_you, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[1].gas_you, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[2].gas_you, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[3].gas_you, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[4].gas_you, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[5].gas_you, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[6].gas_you, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[7].gas_you, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[8].gas_you, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[9].gas_you, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[10].gas_you, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[11].gas_you, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&comparison&bill"}
        ]
      ];
    var gas_usage_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"}
     ];
  var gas_usage_day = [
        [
            {value: 0.0, date: "2013-07-10T00:00:00"},
            {value: 0.0, date: "2013-07-10T00:30:00"},
            {value: 0.0, date: "2013-07-10T01:00:00"},
            {value: 0.0, date: "2013-07-10T01:30:00"},
            {value: 0.0, date: "2013-07-10T02:00:00"},
            {value: 0.0, date: "2013-07-10T02:30:00"},
            {value: 0.0, date: "2013-07-10T03:00:00"},
            {value: 0.0, date: "2013-07-10T03:30:00"},
            {value: 0.0, date: "2013-07-10T04:00:00"},
            {value: 0.0, date: "2013-07-10T04:30:00"},
            {value: 0.0, date: "2013-07-10T05:00:00"},
            {value: 0.0, date: "2013-07-10T05:30:00"},
            {value: 0.01, date: "2013-07-10T06:00:00"},
            {value: 0.02, date: "2013-07-10T06:30:00"},
            {value: 0.08, date: "2013-07-10T07:00:00"},
            {value: 0.06, date: "2013-07-10T07:30:00"},
            {value: 0.04, date: "2013-07-10T08:00:00"},
            {value: 0.02, date: "2013-07-10T08:30:00"},
            {value: 0.02, date: "2013-07-10T09:00:00"},
            {value: 0.0, date: "2013-07-10T09:30:00"},
            {value: 0.0, date: "2013-07-10T10:00:00"},
            {value: 0.0, date: "2013-07-10T10:30:00"},
            {value: 0.0, date: "2013-07-10T11:00:00"},
            {value: 0.0, date: "2013-07-10T11:30:00"},
            {value: 0.0, date: "2013-07-10T12:00:00"},
            {value: 0.0, date: "2013-07-10T12:30:00"},
            {value: 0.0, date: "2013-07-10T13:00:00"},
            {value: 0.0, date: "2013-07-10T13:30:00"},
            {value: 0.0, date: "2013-07-10T14:00:00"},
            {value: 0.0, date: "2013-07-10T14:30:00"},
            {value: 0.0, date: "2013-07-10T15:00:00"},
            {value: 0.0, date: "2013-07-10T15:30:00"},
            {value: 0.0, date: "2013-07-10T16:00:00"},
            {value: 0.0, date: "2013-07-10T16:30:00"},
            {value: 0.0, date: "2013-07-10T17:00:00"},
            {value: 0.01, date: "2013-07-10T17:30:00"},
            {value: 0.02, date: "2013-07-10T18:00:00"},
            {value: 0.01, date: "2013-07-10T18:30:00"},
            {value: 0.03, date: "2013-07-10T19:00:00"},
            {value: 0.01, date: "2013-07-10T19:30:00"},
            {value: 0.0, date: "2013-07-10T20:00:00"},
            {value: 0.0, date: "2013-07-10T20:30:00"},
            {value: 0.0, date: "2013-07-10T21:00:00"},
            {value: 0.0, date: "2013-07-10T21:30:00"},
            {value: 0.0, date: "2013-07-10T22:00:00"},
            {value: 0.0, date: "2013-07-10T22:30:00"},
            {value: 0.0, date: "2013-07-10T23:00:00"},
            {value: 0.0, date: "2013-07-10T23:30:00"},
            {value: 0.0, date: "2013-07-11T00:00:00"}
        ]
      ];
  var gas_usage_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "therms"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "therms"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "therms"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "therms"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "therms"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "therms"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "therms"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "therms"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "therms"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "therms"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "therms"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "therms"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "therms"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "therms"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "therms"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "therms"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "therms"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "therms"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "therms"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "therms"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "therms"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "therms"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "therms"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "therms"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "therms"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "therms"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "therms"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "therms"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "therms"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "therms"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "therms"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "therms"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "therms"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "therms"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "therms"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "therms"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "therms"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "therms"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "therms"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "therms"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "therms"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "therms"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "therms"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms"}
    ];
  var gas_cost_year = [
        [
            {value: gas_usage_year_val[0].gas_cost, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[1].gas_cost, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[2].gas_cost, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[3].gas_cost, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[4].gas_cost, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[5].gas_cost, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[6].gas_cost, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[7].gas_cost, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[8].gas_cost, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[9].gas_cost, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[10].gas_cost, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: gas_usage_year_val[11].gas_cost, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&cost&bill"}
        ]
      ];
  var gas_cost_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"}
     ];
  var gas_weather_year_f = [
        [
            {value: 65, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 72, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 80, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 86, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 90, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 78, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 60, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 49, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 36, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 33, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 30, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 51, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&weather&bill"}
        ]
      ];
  var gas_weather_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"}
     ];
  var gas_comparison_year = [
        [
            {value: gas_usage_year_val[0].gas_you, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[1].gas_you, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[2].gas_you, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[3].gas_you, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[4].gas_you, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[5].gas_you, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[6].gas_you, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[7].gas_you, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[8].gas_you, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[9].gas_you, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[10].gas_you, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[11].gas_you, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&comparison&bill"}
        ],
        [
            {value: gas_usage_year_val[0].gas_neigh, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[1].gas_neigh, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[2].gas_neigh, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[3].gas_neigh, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[4].gas_neigh, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[5].gas_neigh, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[6].gas_neigh, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[7].gas_neigh, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[8].gas_neigh, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[9].gas_neigh, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[10].gas_neigh, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[11].gas_neigh, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&comparison&bill"}
        ],
        [
            {value: gas_usage_year_val[0].gas_eff, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[1].gas_eff, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[2].gas_eff, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[3].gas_eff, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[4].gas_eff, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[5].gas_eff, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[6].gas_eff, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[7].gas_eff, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[8].gas_eff, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[9].gas_eff, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[10].gas_eff, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&comparison&bill"},
            {value: gas_usage_year_val[11].gas_eff, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&comparison&bill"}
        ]
    ];
    var gas_comparison_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&comparison&bill",drillMessage: "View each day"}
     ];
  var gas_usage_bill = [
        [
            {value: 14, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 12, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 22, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 40, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 25, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 23, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 29, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 34, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 36, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 28, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 20, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 12, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 10, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 25, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 18, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 5, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 34, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 36, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 18, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 10, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 2, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 31, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 29, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 8, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&usage&day"}
        ]
      ];
    var gas_usage_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"}
     ];
  var gas_cost_bill = [
        [
            {value: 2.1, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.2, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3.4, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.6, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.1, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3.2, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.2, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5.1, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5.3, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.2, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.1, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3.7, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.3, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.2, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.5, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.1, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5.3, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.1, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.1, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3.3, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.5, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 5.1, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 2.2, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 3.6, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.3, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 4.1, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&cost&day"}
        ]
    ];
  var gas_cost_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 2",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 3",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 4",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 5",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 6",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 7",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 9",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 11",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 12",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 13",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 14",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 17",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 18",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 19",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 20",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 21",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 24",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 25",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 26",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 27",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 28",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
    ];
  var gas_cost_day = [
        [
            {value: 0.01, date: "2013-07-10T00:00:00"},
            {value: 0.01, date: "2013-07-10T00:30:00"},
            {value: 0.02, date: "2013-07-10T01:00:00"},
            {value: 0.01, date: "2013-07-10T01:30:00"},
            {value: 0.01, date: "2013-07-10T02:00:00"},
            {value: 0.01, date: "2013-07-10T02:30:00"},
            {value: 0.01, date: "2013-07-10T03:00:00"},
            {value: 0.01, date: "2013-07-10T03:30:00"},
            {value: 0.01, date: "2013-07-10T04:00:00"},
            {value: 0.01, date: "2013-07-10T04:30:00"},
            {value: 0.01, date: "2013-07-10T05:00:00"},
            {value: 0.01, date: "2013-07-10T05:30:00"},
            {value: 0.01, date: "2013-07-10T06:00:00"},
            {value: 0.12, date: "2013-07-10T06:30:00"},
            {value: 0.08, date: "2013-07-10T07:00:00"},
            {value: 0.09, date: "2013-07-10T07:30:00"},
            {value: 0.20, date: "2013-07-10T08:00:00"},
            {value: 0.22, date: "2013-07-10T08:30:00"},
            {value: 0.19, date: "2013-07-10T09:00:00"},
            {value: 0.18, date: "2013-07-10T09:30:00"},
            {value: 0.10, date: "2013-07-10T10:00:00"},
            {value: 0.02, date: "2013-07-10T10:30:00"},
            {value: 0.01, date: "2013-07-10T11:00:00"},
            {value: 0.01, date: "2013-07-10T11:30:00"},
            {value: 0.01, date: "2013-07-10T12:00:00"},
            {value: 0.01, date: "2013-07-10T12:30:00"},
            {value: 0.01, date: "2013-07-10T13:00:00"},
            {value: 0.01, date: "2013-07-10T13:30:00"},
            {value: 0.01, date: "2013-07-10T14:00:00"},
            {value: 0.01, date: "2013-07-10T14:30:00"},
            {value: 0.01, date: "2013-07-10T15:00:00"},
            {value: 0.01, date: "2013-07-10T15:30:00"},
            {value: 0.04, date: "2013-07-10T16:00:00"},
            {value: 0.1, date: "2013-07-10T16:30:00"},
            {value: 0.11, date: "2013-07-10T17:00:00"},
            {value: 0.22, date: "2013-07-10T17:30:00"},
            {value: 0.24, date: "2013-07-10T18:00:00"},
            {value: 0.04, date: "2013-07-10T18:30:00"},
            {value: 0.06, date: "2013-07-10T19:00:00"},
            {value: 0.01, date: "2013-07-10T19:30:00"},
            {value: 0.02, date: "2013-07-10T20:00:00"},
            {value: 0.01, date: "2013-07-10T20:30:00"},
            {value: 0.01, date: "2013-07-10T21:00:00"},
            {value: 0.01, date: "2013-07-10T21:30:00"},
            {value: 0.01, date: "2013-07-10T22:00:00"},
            {value: 0.01, date: "2013-07-10T22:30:00"},
            {value: 0.01, date: "2013-07-10T23:00:00"},
            {value: 0.01, date: "2013-07-10T23:30:00"},
            {value: 0.01, date: "2013-07-11T00:00:00"}
        ]
    ];
  var gas_cost_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,add:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,add:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,add:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,add:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,add:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,add:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,add:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,add:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,add:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,add:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,add:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,add:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,add:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,add:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,add:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,add:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,add:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,add:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,add:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,add:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,add:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,add:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,add:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,add:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,add:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,add:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,add:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,add:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,add:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,add:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,add:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,add:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,add:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,add:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,add:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,add:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,add:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,add:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,add:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,add:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,add:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true}
    ];
  var gas_weather_bill_f = [
        [
            {value: 78, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 77, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 82, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 79, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 83, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 86, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 84, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 88, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 78, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 90, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 91, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 82, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 83, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 85, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 86, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 91, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 97, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 88, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 89, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 85, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 84, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&weather&day"}
        ]
      ];
  var gas_weather_bill_c = [
        [
            {value: 29, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 29, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 31, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 31, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 31, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 32, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 31, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 32, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 29, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 29, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 27, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 31, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 27, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 29, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 28, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 29, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 30, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&weather&day"}
        ]
      ];
  var gas_weather_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
     ];
  var gas_weather_day_f = [
        [
            {value: 60, date: "2013-07-10T00:00:00"},
            {value: 60, date: "2013-07-10T00:30:00"},
            {value: 61, date: "2013-07-10T01:00:00"},
            {value: 61, date: "2013-07-10T01:30:00"},
            {value: 63, date: "2013-07-10T02:00:00"},
            {value: 64, date: "2013-07-10T02:30:00"},
            {value: 65, date: "2013-07-10T03:00:00"},
            {value: 65, date: "2013-07-10T03:30:00"},
            {value: 66, date: "2013-07-10T04:00:00"},
            {value: 67, date: "2013-07-10T04:30:00"},
            {value: 67, date: "2013-07-10T05:00:00"},
            {value: 66, date: "2013-07-10T05:30:00"},
            {value: 67, date: "2013-07-10T06:00:00"},
            {value: 70, date: "2013-07-10T06:30:00"},
            {value: 72, date: "2013-07-10T07:00:00"},
            {value: 75, date: "2013-07-10T07:30:00"},
            {value: 75, date: "2013-07-10T08:00:00"},
            {value: 76, date: "2013-07-10T08:30:00"},
            {value: 78, date: "2013-07-10T09:00:00"},
            {value: 77, date: "2013-07-10T09:30:00"},
            {value: 79, date: "2013-07-10T10:00:00"},
            {value: 82, date: "2013-07-10T10:30:00"},
            {value: 82, date: "2013-07-10T11:00:00"},
            {value: 83, date: "2013-07-10T11:30:00"},
            {value: 85, date: "2013-07-10T12:00:00"},
            {value: 88, date: "2013-07-10T12:30:00"},
            {value: 90, date: "2013-07-10T13:00:00"},
            {value: 92, date: "2013-07-10T13:30:00"},
            {value: 91, date: "2013-07-10T14:00:00"},
            {value: 87, date: "2013-07-10T14:30:00"},
            {value: 84, date: "2013-07-10T15:00:00"},
            {value: 85, date: "2013-07-10T15:30:00"},
            {value: 83, date: "2013-07-10T16:00:00"},
            {value: 80, date: "2013-07-10T16:30:00"},
            {value: 78, date: "2013-07-10T17:00:00"},
            {value: 77, date: "2013-07-10T17:30:00"},
            {value: 76, date: "2013-07-10T18:00:00"},
            {value: 76, date: "2013-07-10T18:30:00"},
            {value: 74, date: "2013-07-10T19:00:00"},
            {value: 73, date: "2013-07-10T19:30:00"},
            {value: 73, date: "2013-07-10T20:00:00"},
            {value: 67, date: "2013-07-10T20:30:00"},
            {value: 63, date: "2013-07-10T21:00:00"},
            {value: 63, date: "2013-07-10T21:30:00"},
            {value: 62, date: "2013-07-10T22:00:00"},
            {value: 62, date: "2013-07-10T22:30:00"},
            {value: 61, date: "2013-07-10T23:00:00"},
            {value: 61, date: "2013-07-10T23:30:00"},
            {value: 60, date: "2013-07-11T00:00:00"}
        ]
      ];
  var gas_weather_day_c = [
        [
            {value: 25, date: "2013-07-10T00:00:00"},
            {value: 25, date: "2013-07-10T00:30:00"},
            {value: 26, date: "2013-07-10T01:00:00"},
            {value: 26, date: "2013-07-10T01:30:00"},
            {value: 26, date: "2013-07-10T02:00:00"},
            {value: 27, date: "2013-07-10T02:30:00"},
            {value: 27, date: "2013-07-10T03:00:00"},
            {value: 27, date: "2013-07-10T03:30:00"},
            {value: 28, date: "2013-07-10T04:00:00"},
            {value: 28, date: "2013-07-10T04:30:00"},
            {value: 28, date: "2013-07-10T05:00:00"},
            {value: 29, date: "2013-07-10T05:30:00"},
            {value: 29, date: "2013-07-10T06:00:00"},
            {value: 29, date: "2013-07-10T06:30:00"},
            {value: 29, date: "2013-07-10T07:00:00"},
            {value: 29, date: "2013-07-10T07:30:00"},
            {value: 30, date: "2013-07-10T08:00:00"},
            {value: 30, date: "2013-07-10T08:30:00"},
            {value: 30, date: "2013-07-10T09:00:00"},
            {value: 30, date: "2013-07-10T09:30:00"},
            {value: 30, date: "2013-07-10T10:00:00"},
            {value: 31, date: "2013-07-10T10:30:00"},
            {value: 31, date: "2013-07-10T11:00:00"},
            {value: 31, date: "2013-07-10T11:30:00"},
            {value: 31, date: "2013-07-10T12:00:00"},
            {value: 31, date: "2013-07-10T12:30:00"},
            {value: 32, date: "2013-07-10T13:00:00"},
            {value: 32, date: "2013-07-10T13:30:00"},
            {value: 32, date: "2013-07-10T14:00:00"},
            {value: 32, date: "2013-07-10T14:30:00"},
            {value: 32, date: "2013-07-10T15:00:00"},
            {value: 32, date: "2013-07-10T15:30:00"},
            {value: 33, date: "2013-07-10T16:00:00"},
            {value: 32, date: "2013-07-10T16:30:00"},
            {value: 32, date: "2013-07-10T17:00:00"},
            {value: 31, date: "2013-07-10T17:30:00"},
            {value: 31, date: "2013-07-10T18:00:00"},
            {value: 30, date: "2013-07-10T18:30:00"},
            {value: 29, date: "2013-07-10T19:00:00"},
            {value: 28, date: "2013-07-10T19:30:00"},
            {value: 27, date: "2013-07-10T20:00:00"},
            {value: 26, date: "2013-07-10T20:30:00"},
            {value: 26, date: "2013-07-10T21:00:00"},
            {value: 26, date: "2013-07-10T21:30:00"},
            {value: 26, date: "2013-07-10T22:00:00"},
            {value: 26, date: "2013-07-10T22:30:00"},
            {value: 25, date: "2013-07-10T23:00:00"},
            {value: 25, date: "2013-07-10T23:30:00"},
            {value: 25, date: "2013-07-11T00:00:00"}
        ]
      ];
  var gas_weather_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms",temp:true}
    ];
  var gas_comparison_bill = [
        [
            {value: 14, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 12, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 22, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 40, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 25, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 23, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 29, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 34, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 36, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 28, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 12, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 10, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 25, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 18, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 5, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 34, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 36, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 18, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 10, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 2, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 31, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 29, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 8, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&comparison&day"},
        ],
        [
            {value: 35, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 34, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 40, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 41, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 44, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 38, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 37, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 36, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 32, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 31, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 32, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 34, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 41, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 44, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 38, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 37, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 36, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 28, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 30, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 32, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 34, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 40, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 41, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 44, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 38, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 31, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&comparison&day"}
        ],
        [
            {value: 18, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 14, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 16, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 18, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 21, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 14, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 22, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 25, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 21, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 12, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 14, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 16, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 18, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 21, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 14, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 22, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 24, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 25, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 21, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 12, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 14, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 16, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 20, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 18, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&comparison&day"},
            {value: 21, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&comparison&day"}
        ]
    ];
    var gas_comparison_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,allNeighbors:true,effNeighbors:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"}
     ];



    var smb_electricity_usage_year = [
        [
            {value: usage_year_val[0].smb, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[1].smb, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[2].smb, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[3].smb, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[4].smb, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[5].smb, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[6].smb, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[7].smb, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[8].smb, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[9].smb, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[10].smb, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&usage&bill"},
            {value: usage_year_val[11].smb, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&usage&bill"}
        ]
      ];
    var smb_electricity_usage_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "kWh",drillLink: "&electricity&usage&bill",drillMessage: "View each day"}
     ];
  var smb_electricity_cost_year = [
        [
            {value: usage_year_val[0].smb_cost, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[1].smb_cost, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[2].smb_cost, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[3].smb_cost, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[4].smb_cost, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[5].smb_cost, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[6].smb_cost, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[7].smb_cost, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[8].smb_cost, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[9].smb_cost, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[10].smb_cost, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&cost&bill"},
            {value: usage_year_val[11].smb_cost, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&cost&bill"}
        ]
      ];
  var smb_electricity_cost_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,add:true,cost:true,drillLink: "&electricity&cost&bill",drillMessage: "View each day"}
     ];
  var smb_electricity_weather_year_f = [
        [
            {value: 65, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 72, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 80, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 86, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 90, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 78, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 60, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 49, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 36, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 33, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 30, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 51, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&weather&bill"}
        ]
      ];
  var smb_electricity_weather_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&bill",drillMessage: "View each day"}
     ];
  var smb_electricity_usage_bill = [
        [
            {value: 444, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 325, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 306, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 127, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 88, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 90, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 254, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 340, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 299, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 348, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 90, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 283, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 242, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 205, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 409, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 401, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 109, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 243, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 254, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 185, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 402, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 344, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 490, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 402, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 108, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 255, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 315, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 298, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 190, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 244, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ]
      ];
    var smb_electricity_usage_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,unit: "kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"}
     ];
  var smb_electricity_usage_bill_rates = [
        [
            {value: 10.88, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.48, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 14.23, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 16.71, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.60, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.43, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.59, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.12, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.11, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.33, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 10.61, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.78, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.90, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 17.59, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.14, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 17.41, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.66, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 15.77, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.12, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.48, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.93, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 17.32, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.71, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.93, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 15.88, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.87, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12.32, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 16.10, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13.12, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11.15, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 11, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 12, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 15, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 26, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 21, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 10, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 28, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 26, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 38, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 22, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 21, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 25, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 16, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 17, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 24, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 21, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 11, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 22, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 34, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 36, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 48, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 25, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 43, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 13, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 16, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 27, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 31, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 34, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 48, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 43, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 31, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 37, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 16, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 48, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 59, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 31, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 21, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 23, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 15, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 26, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 27, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 32, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 44, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 26, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 30, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 30, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 48, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 29, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 25, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 14, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 33, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 45, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 36, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 28, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ],
        [
            {value: 0, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 35, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&usage&day",pointFlag:true},
            {value: 0, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 41, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&usage&day",pointFlag:true},
            {value: 0, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&usage&day"},
            {value: 0, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&usage&day"}
        ]
    ];
  var smb_electricity_usage_bill_rates_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 2",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 3",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 4",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 5",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 6",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 7",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 9",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 11",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 12",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 13",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 14",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 17",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 18",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 19",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 20",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 21",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 24",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 25",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 26",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 27",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 28",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,add:true,unit:"kWh",drillLink: "&electricity&usage&day",drillMessage: "View each hour"},
    ];
  var smb_electricity_usage_day = [
        [
            {value: 60, date: "2013-07-10T00:00:00"},
            {value: 56, date: "2013-07-10T00:30:00"},
            {value: 22, date: "2013-07-10T01:00:00"},
            {value: 30, date: "2013-07-10T01:30:00"},
            {value: 28, date: "2013-07-10T02:00:00"},
            {value: 31, date: "2013-07-10T02:30:00"},
            {value: 30, date: "2013-07-10T03:00:00"},
            {value: 22, date: "2013-07-10T03:30:00"},
            {value: 20, date: "2013-07-10T04:00:00"},
            {value: 21, date: "2013-07-10T04:30:00"},
            {value: 18, date: "2013-07-10T05:00:00"},
            {value: 28, date: "2013-07-10T05:30:00"},
            {value: 34, date: "2013-07-10T06:00:00"},
            {value: 40, date: "2013-07-10T06:30:00"},
            {value: 51, date: "2013-07-10T07:00:00"},
            {value: 55, date: "2013-07-10T07:30:00"},
            {value: 58, date: "2013-07-10T08:00:00"},
            {value: 32, date: "2013-07-10T08:30:00"},
            {value: 70, date: "2013-07-10T09:00:00"},
            {value: 77, date: "2013-07-10T09:30:00"},
            {value: 46, date: "2013-07-10T10:00:00"},
            {value: 42, date: "2013-07-10T10:30:00"},
            {value: 48, date: "2013-07-10T11:00:00"},
            {value: 60, date: "2013-07-10T11:30:00"},
            {value: 99, date: "2013-07-10T12:00:00"},
            {value: 113, date: "2013-07-10T12:30:00"},
            {value: 133, date: "2013-07-10T13:00:00"},
            {value: 120, date: "2013-07-10T13:30:00"},
            {value: 65, date: "2013-07-10T14:00:00"},
            {value: 98, date: "2013-07-10T14:30:00"},
            {value: 100, date: "2013-07-10T15:00:00"},
            {value: 120, date: "2013-07-10T15:30:00"},
            {value: 123, date: "2013-07-10T16:00:00"},
            {value: 190, date: "2013-07-10T16:30:00"},
            {value: 182, date: "2013-07-10T17:00:00"},
            {value: 189, date: "2013-07-10T17:30:00"},
            {value: 163, date: "2013-07-10T18:00:00"},
            {value: 166, date: "2013-07-10T18:30:00"},
            {value: 154, date: "2013-07-10T19:00:00"},
            {value: 174, date: "2013-07-10T19:30:00"},
            {value: 171, date: "2013-07-10T20:00:00"},
            {value: 163, date: "2013-07-10T20:30:00"},
            {value: 143, date: "2013-07-10T21:00:00"},
            {value: 121, date: "2013-07-10T21:30:00"},
            {value: 131, date: "2013-07-10T22:00:00"},
            {value: 98, date: "2013-07-10T22:30:00"},
            {value: 87, date: "2013-07-10T23:00:00"},
            {value: 100, date: "2013-07-10T23:30:00"},
            {value: 67, date: "2013-07-11T00:00:00"}
        ]
      ];
  var smb_electricity_usage_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh"}
    ];
  var smb_electricity_usage_day_rates = [
        [
            {value: 60, date: "2013-07-10T00:00:00"},
            {value: 056, date: "2013-07-10T00:30:00"},
            {value: 22, date: "2013-07-10T01:00:00"},
            {value: 30, date: "2013-07-10T01:30:00"},
            {value: 28, date: "2013-07-10T02:00:00"},
            {value: 31, date: "2013-07-10T02:30:00"},
            {value: 30, date: "2013-07-10T03:00:00"},
            {value: 22, date: "2013-07-10T03:30:00"},
            {value: 20, date: "2013-07-10T04:00:00"},
            {value: 21, date: "2013-07-10T04:30:00"},
            {value: 18, date: "2013-07-10T05:00:00"},
            {value: 28, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 34, date: "2013-07-10T06:00:00"},
            {value: 40, date: "2013-07-10T06:30:00"},
            {value: 51, date: "2013-07-10T07:00:00"},
            {value: 55, date: "2013-07-10T07:30:00"},
            {value: 58, date: "2013-07-10T08:00:00"},
            {value: 32, date: "2013-07-10T08:30:00"},
            {value: 70, date: "2013-07-10T09:00:00"},
            {value: 77, date: "2013-07-10T09:30:00"},
            {value: 46, date: "2013-07-10T10:00:00"},
            {value: 42, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 00, date: "2013-07-10T10:30:00"},
            {value: 48, date: "2013-07-10T11:00:00"},
            {value: 60, date: "2013-07-10T11:30:00"},
            {value: 99, date: "2013-07-10T12:00:00"},
            {value: 113, date: "2013-07-10T12:30:00"},
            {value: 133, date: "2013-07-10T13:00:00"},
            {value: 120, date: "2013-07-10T13:30:00"},
            {value: 65, date: "2013-07-10T14:00:00"},
            {value: 98, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 100, date: "2013-07-10T15:00:00"},
            {value: 120, date: "2013-07-10T15:30:00"},
            {value: 123, date: "2013-07-10T16:00:00"},
            {value: 190, date: "2013-07-10T16:30:00"},
            {value: 182, date: "2013-07-10T17:00:00"},
            {value: 189, date: "2013-07-10T17:30:00"},
            {value: 163, date: "2013-07-10T18:00:00"},
            {value: 166, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 154, date: "2013-07-10T19:00:00"},
            {value: 174, date: "2013-07-10T19:30:00"},
            {value: 171, date: "2013-07-10T20:00:00"},
            {value: 163, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 143, date: "2013-07-10T21:00:00"},
            {value: 121, date: "2013-07-10T21:30:00"},
            {value: 131, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 98, date: "2013-07-10T22:30:00"},
            {value: 87, date: "2013-07-10T23:00:00"},
            {value: 100, date: "2013-07-10T23:30:00"},
            {value: 67, date: "2013-07-11T00:00:00"}
        ]
    ];
  var smb_electricity_usage_day_rates_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,add:true,unit:"kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,unit:"kWh"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,unit:"kWh"}
    ];
  var smb_electricity_cost_bill = [
        [
            {value: 2.1, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.4, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.6, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.2, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.2, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.1, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.3, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.2, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.7, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.3, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.5, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.3, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.1, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.3, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.5, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.1, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 2.2, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.6, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.3, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.1, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
    ];
  var smb_electricity_cost_bill_rates = [
        [
            {value: 4.88, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.48, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.23, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.71, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.60, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.43, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.59, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.12, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.11, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.33, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.61, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.78, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.90, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.59, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.14, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 5.41, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.66, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.77, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.12, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.48, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.93, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.32, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.71, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 3.93, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.88, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.87, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.32, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.10, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.12, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 4.15, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 21, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 17, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 15, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 26, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 21, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 23, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 15, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 20, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 28, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 26, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 35, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 38, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 22, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 35, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 21, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 25, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 16, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 17, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 24, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 21, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 17, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 22, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 34, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 36, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 48, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 25, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 43, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 13, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 16, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 27, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 61, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 64, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 65, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 78, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 73, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 61, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 67, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 45, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 56, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 78, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 79, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 61, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 51, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 53, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 45, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 56, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 57, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 62, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 74, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 56, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 50, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 70, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 68, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 59, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 55, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 44, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 53, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 65, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 56, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 48, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ],
        [
            {value: 0, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 85, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&cost&day",pointFlag:true},
            {value: 0, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 71, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&cost&day",pointFlag:true},
            {value: 0, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&cost&day"},
            {value: 0, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&cost&day"}
        ]
    ];
  var smb_electricity_cost_bill_rates_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 2",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 3",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 4",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 5",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 6",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 7",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 9",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 11",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 12",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 13",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 14",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 17",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 18",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 19",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 20",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 21",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour",header:"Peak day"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 24",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 25",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 26",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 27",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 28",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,add:true,cost:true,drillLink: "&electricity&cost&day",drillMessage: "View each hour"},
    ];
  var smb_electricity_cost_day = [
        [
            {value: 0.02, date: "2013-07-10T00:00:00"},
            {value: 0.03, date: "2013-07-10T00:30:00"},
            {value: 0.05, date: "2013-07-10T01:00:00"},
            {value: 0.03, date: "2013-07-10T01:30:00"},
            {value: 0.02, date: "2013-07-10T02:00:00"},
            {value: 0.03, date: "2013-07-10T02:30:00"},
            {value: 0.02, date: "2013-07-10T03:00:00"},
            {value: 0.04, date: "2013-07-10T03:30:00"},
            {value: 0.03, date: "2013-07-10T04:00:00"},
            {value: 0.05, date: "2013-07-10T04:30:00"},
            {value: 0.07, date: "2013-07-10T05:00:00"},
            {value: 0.06, date: "2013-07-10T05:30:00"},
            {value: 0.10, date: "2013-07-10T06:00:00"},
            {value: 0.11, date: "2013-07-10T06:30:00"},
            {value: 0.12, date: "2013-07-10T07:00:00"},
            {value: 0.14, date: "2013-07-10T07:30:00"},
            {value: 0.13, date: "2013-07-10T08:00:00"},
            {value: 0.20, date: "2013-07-10T08:30:00"},
            {value: 0.21, date: "2013-07-10T09:00:00"},
            {value: 0.19, date: "2013-07-10T09:30:00"},
            {value: 0.31, date: "2013-07-10T10:00:00"},
            {value: 0.11, date: "2013-07-10T10:30:00"},
            {value: 0.19, date: "2013-07-10T11:00:00"},
            {value: 0.24, date: "2013-07-10T11:30:00"},
            {value: 0.25, date: "2013-07-10T12:00:00"},
            {value: 0.26, date: "2013-07-10T12:30:00"},
            {value: 0.40, date: "2013-07-10T13:00:00"},
            {value: 0.37, date: "2013-07-10T13:30:00"},
            {value: 0.35, date: "2013-07-10T14:00:00"},
            {value: 0.36, date: "2013-07-10T14:30:00"},
            {value: 0.44, date: "2013-07-10T15:00:00"},
            {value: 0.40, date: "2013-07-10T15:30:00"},
            {value: 0.49, date: "2013-07-10T16:00:00"},
            {value: 0.43, date: "2013-07-10T16:30:00"},
            {value: 0.62, date: "2013-07-10T17:00:00"},
            {value: 0.69, date: "2013-07-10T17:30:00"},
            {value: 0.52, date: "2013-07-10T18:00:00"},
            {value: 0.49, date: "2013-07-10T18:30:00"},
            {value: 0.50, date: "2013-07-10T19:00:00"},
            {value: 0.46, date: "2013-07-10T19:30:00"},
            {value: 0.38, date: "2013-07-10T20:00:00"},
            {value: 0.32, date: "2013-07-10T20:30:00"},
            {value: 0.28, date: "2013-07-10T21:00:00"},
            {value: 0.21, date: "2013-07-10T21:30:00"},
            {value: 0.16, date: "2013-07-10T22:00:00"},
            {value: 0.10, date: "2013-07-10T22:30:00"},
            {value: 0.08, date: "2013-07-10T23:00:00"},
            {value: 0.02, date: "2013-07-10T23:30:00"},
            {value: 0.01, date: "2013-07-11T00:00:00"}
        ],
    ];
  var smb_electricity_cost_day_rates = [
        [
            {value: 0.20, date: "2013-07-10T00:00:00"},
            {value: 0.2, date: "2013-07-10T00:30:00"},
            {value: 0.21, date: "2013-07-10T01:00:00"},
            {value: 0.23, date: "2013-07-10T01:30:00"},
            {value: 0.2, date: "2013-07-10T02:00:00"},
            {value: 0.24, date: "2013-07-10T02:30:00"},
            {value: 0.24, date: "2013-07-10T03:00:00"},
            {value: 0.25, date: "2013-07-10T03:30:00"},
            {value: 0.28, date: "2013-07-10T04:00:00"},
            {value: 0.3, date: "2013-07-10T04:30:00"},
            {value: 0.4, date: "2013-07-10T05:00:00"},
            {value: 0.41, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0.64, date: "2013-07-10T06:00:00"},
            {value: 0.82, date: "2013-07-10T06:30:00"},
            {value: 0.57, date: "2013-07-10T07:00:00"},
            {value: 0.43, date: "2013-07-10T07:30:00"},
            {value: 0.28, date: "2013-07-10T08:00:00"},
            {value: 0.11, date: "2013-07-10T08:30:00"},
            {value: 0.41, date: "2013-07-10T09:00:00"},
            {value: 0.23, date: "2013-07-10T09:30:00"},
            {value: 0.44, date: "2013-07-10T10:00:00"},
            {value: 0.89, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 00, date: "2013-07-10T10:30:00"},
            {value: 1.60, date: "2013-07-10T11:00:00"},
            {value: 1.45, date: "2013-07-10T11:30:00"},
            {value: 1.31, date: "2013-07-10T12:00:00"},
            {value: 1.43, date: "2013-07-10T12:30:00"},
            {value: 1.39, date: "2013-07-10T13:00:00"},
            {value: 1.44, date: "2013-07-10T13:30:00"},
            {value: 1.87, date: "2013-07-10T14:00:00"},
            {value: 2.24, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 6.45, date: "2013-07-10T15:00:00"},
            {value: 6.01, date: "2013-07-10T15:30:00"},
            {value: 5.07, date: "2013-07-10T16:00:00"},
            {value: 6.62, date: "2013-07-10T16:30:00"},
            {value: 5.41, date: "2013-07-10T17:00:00"},
            {value: 8.44, date: "2013-07-10T17:30:00"},
            {value: 7.91, date: "2013-07-10T18:00:00"},
            {value: 8.11, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 2.96, date: "2013-07-10T19:00:00"},
            {value: 2.43, date: "2013-07-10T19:30:00"},
            {value: 2.00, date: "2013-07-10T20:00:00"},
            {value: 2.64, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 1.72, date: "2013-07-10T21:00:00"},
            {value: 1.48, date: "2013-07-10T21:30:00"},
            {value: 1.63, date: "2013-07-10T22:00:00"},
            {value: 0, date: "2013-07-10T22:30:00"},
            {value: 0, date: "2013-07-10T23:00:00"},
            {value: 0, date: "2013-07-10T23:30:00"},
            {value: 0, date: "2013-07-11T00:00:00"}
        ],
        [
            {value: 0, date: "2013-07-10T00:00:00"},
            {value: 0, date: "2013-07-10T00:30:00"},
            {value: 0, date: "2013-07-10T01:00:00"},
            {value: 0, date: "2013-07-10T01:30:00"},
            {value: 0, date: "2013-07-10T02:00:00"},
            {value: 0, date: "2013-07-10T02:30:00"},
            {value: 0, date: "2013-07-10T03:00:00"},
            {value: 0, date: "2013-07-10T03:30:00"},
            {value: 0, date: "2013-07-10T04:00:00"},
            {value: 0, date: "2013-07-10T04:30:00"},
            {value: 0, date: "2013-07-10T05:00:00"},
            {value: 0, date: "2013-07-10T05:30:00"},
            {value: 0, date: "2013-07-10T06:00:00"},
            {value: 0, date: "2013-07-10T06:30:00"},
            {value: 0, date: "2013-07-10T07:00:00"},
            {value: 0, date: "2013-07-10T07:30:00"},
            {value: 0, date: "2013-07-10T08:00:00"},
            {value: 0, date: "2013-07-10T08:30:00"},
            {value: 0, date: "2013-07-10T09:00:00"},
            {value: 0, date: "2013-07-10T09:30:00"},
            {value: 0, date: "2013-07-10T10:00:00"},
            {value: 0, date: "2013-07-10T10:30:00"},
            {value: 0, date: "2013-07-10T11:00:00"},
            {value: 0, date: "2013-07-10T11:30:00"},
            {value: 0, date: "2013-07-10T12:00:00"},
            {value: 0, date: "2013-07-10T12:30:00"},
            {value: 0, date: "2013-07-10T13:00:00"},
            {value: 0, date: "2013-07-10T13:30:00"},
            {value: 0, date: "2013-07-10T14:00:00"},
            {value: 0, date: "2013-07-10T14:30:00"},
            {value: 0, date: "2013-07-10T15:00:00"},
            {value: 0, date: "2013-07-10T15:30:00"},
            {value: 0, date: "2013-07-10T16:00:00"},
            {value: 0, date: "2013-07-10T16:30:00"},
            {value: 0, date: "2013-07-10T17:00:00"},
            {value: 0, date: "2013-07-10T17:30:00"},
            {value: 0, date: "2013-07-10T18:00:00"},
            {value: 0, date: "2013-07-10T18:30:00"},
            {value: 0, date: "2013-07-10T19:00:00"},
            {value: 0, date: "2013-07-10T19:30:00"},
            {value: 0, date: "2013-07-10T20:00:00"},
            {value: 0, date: "2013-07-10T20:30:00"},
            {value: 0, date: "2013-07-10T21:00:00"},
            {value: 0, date: "2013-07-10T21:30:00"},
            {value: 0, date: "2013-07-10T22:00:00"},
            {value: 0.31, date: "2013-07-10T22:30:00"},
            {value: 0.54, date: "2013-07-10T23:00:00"},
            {value: 0.21, date: "2013-07-10T23:30:00"},
            {value: 0.49, date: "2013-07-11T00:00:00"}
        ]
    ];
  var smb_electricity_cost_day_rates_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,add:true,cost:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,add:true,cost:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,add:true,cost:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,add:true,cost:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,add:true,cost:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,add:true,cost:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,add:true,cost:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,add:true,cost:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,add:true,cost:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,add:true,cost:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,add:true,cost:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,add:true,cost:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,add:true,cost:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,add:true,cost:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,add:true,cost:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,add:true,cost:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,add:true,cost:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,add:true,cost:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,add:true,cost:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,add:true,cost:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,add:true,cost:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,cost:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,add:true,cost:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,add:true,cost:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,add:true,cost:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,add:true,cost:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,add:true,cost:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,add:true,cost:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,add:true,cost:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,add:true,cost:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,add:true,cost:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,add:true,cost:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,add:true,cost:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,add:true,cost:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,add:true,cost:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,add:true,cost:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,add:true,cost:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,add:true,cost:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,add:true,cost:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,add:true,cost:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,add:true,cost:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,add:true,cost:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,add:true,cost:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,add:true,cost:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true,cost:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true,cost:true}
    ];
  var smb_electricity_weather_bill_f = [
        [
            {value: 78, endDate: "2013-07-01T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 77, endDate: "2013-07-02T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 82, endDate: "2013-07-03T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 80, endDate: "2013-07-04T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 81, endDate: "2013-07-05T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 80, endDate: "2013-07-06T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 79, endDate: "2013-07-07T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 83, endDate: "2013-07-08T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 86, endDate: "2013-07-09T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 84, endDate: "2013-07-10T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 87, endDate: "2013-07-11T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 88, endDate: "2013-07-12T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 81, endDate: "2013-07-13T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 78, endDate: "2013-07-14T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 80, endDate: "2013-07-15T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 87, endDate: "2013-07-16T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 90, endDate: "2013-07-17T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 91, endDate: "2013-07-18T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 82, endDate: "2013-07-19T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 83, endDate: "2013-07-20T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 85, endDate: "2013-07-21T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 86, endDate: "2013-07-22T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 91, endDate: "2013-07-23T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 97, endDate: "2013-07-24T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 88, endDate: "2013-07-25T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 89, endDate: "2013-07-26T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 85, endDate: "2013-07-27T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 87, endDate: "2013-07-28T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 84, endDate: "2013-07-29T03:59:59",clickTarget:"&electricity&weather&day"},
            {value: 81, endDate: "2013-07-30T03:59:59",clickTarget:"&electricity&weather&day"}
        ]
      ];
  var smb_electricity_weather_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,temp:true,unit: "kWh",drillLink: "&electricity&weather&day",drillMessage: "View each hour"},
     ];
  var smb_electricity_weather_day_f = [
        [
            {value: 60, date: "2013-07-10T00:00:00"},
            {value: 60, date: "2013-07-10T00:30:00"},
            {value: 61, date: "2013-07-10T01:00:00"},
            {value: 61, date: "2013-07-10T01:30:00"},
            {value: 63, date: "2013-07-10T02:00:00"},
            {value: 64, date: "2013-07-10T02:30:00"},
            {value: 65, date: "2013-07-10T03:00:00"},
            {value: 65, date: "2013-07-10T03:30:00"},
            {value: 66, date: "2013-07-10T04:00:00"},
            {value: 67, date: "2013-07-10T04:30:00"},
            {value: 67, date: "2013-07-10T05:00:00"},
            {value: 66, date: "2013-07-10T05:30:00"},
            {value: 67, date: "2013-07-10T06:00:00"},
            {value: 70, date: "2013-07-10T06:30:00"},
            {value: 72, date: "2013-07-10T07:00:00"},
            {value: 75, date: "2013-07-10T07:30:00"},
            {value: 75, date: "2013-07-10T08:00:00"},
            {value: 76, date: "2013-07-10T08:30:00"},
            {value: 78, date: "2013-07-10T09:00:00"},
            {value: 77, date: "2013-07-10T09:30:00"},
            {value: 79, date: "2013-07-10T10:00:00"},
            {value: 82, date: "2013-07-10T10:30:00"},
            {value: 82, date: "2013-07-10T11:00:00"},
            {value: 83, date: "2013-07-10T11:30:00"},
            {value: 85, date: "2013-07-10T12:00:00"},
            {value: 88, date: "2013-07-10T12:30:00"},
            {value: 90, date: "2013-07-10T13:00:00"},
            {value: 92, date: "2013-07-10T13:30:00"},
            {value: 91, date: "2013-07-10T14:00:00"},
            {value: 87, date: "2013-07-10T14:30:00"},
            {value: 84, date: "2013-07-10T15:00:00"},
            {value: 85, date: "2013-07-10T15:30:00"},
            {value: 83, date: "2013-07-10T16:00:00"},
            {value: 80, date: "2013-07-10T16:30:00"},
            {value: 78, date: "2013-07-10T17:00:00"},
            {value: 77, date: "2013-07-10T17:30:00"},
            {value: 76, date: "2013-07-10T18:00:00"},
            {value: 76, date: "2013-07-10T18:30:00"},
            {value: 74, date: "2013-07-10T19:00:00"},
            {value: 73, date: "2013-07-10T19:30:00"},
            {value: 73, date: "2013-07-10T20:00:00"},
            {value: 67, date: "2013-07-10T20:30:00"},
            {value: 63, date: "2013-07-10T21:00:00"},
            {value: 63, date: "2013-07-10T21:30:00"},
            {value: 62, date: "2013-07-10T22:00:00"},
            {value: 62, date: "2013-07-10T22:30:00"},
            {value: 61, date: "2013-07-10T23:00:00"},
            {value: 61, date: "2013-07-10T23:30:00"},
            {value: 60, date: "2013-07-11T00:00:00"}
        ]
      ];
  var smb_electricity_weather_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "kWh",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "kWh",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "kWh",temp:true}
    ];
/* gas */


    var smb_gas_usage_year = [
        [
            {value: 909, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 774, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 909, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 670, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 1298, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 2098, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 1897, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 3098, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 3916, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 3189, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 2070, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&usage&bill"},
            {value: 2690, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&usage&bill"}
        ]
      ];
    var smb_gas_usage_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "therms",drillLink: "&gas&usage&bill",drillMessage: "View each day"}
     ];
  var smb_gas_usage_bill = [
        [
            {value: 45, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 69, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 30, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 22, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 23, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 25, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 56, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 29, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 34, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 11, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 13, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 20, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 30, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 12, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 10, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 25, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 18, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 23, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 34, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 36, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 18, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 19, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 23, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 31, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 29, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 28, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&usage&day"},
            {value: 24, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&usage&day"}
        ]
      ];
  var smb_gas_usage_day = [
        [
            {value: 1.12, date: "2013-07-10T00:00:00"},
            {value: 1.13, date: "2013-07-10T00:30:00"},
            {value: 1.27, date: "2013-07-10T01:00:00"},
            {value: 1.13, date: "2013-07-10T01:30:00"},
            {value: 1.43, date: "2013-07-10T02:00:00"},
            {value: 1.11, date: "2013-07-10T02:30:00"},
            {value: 1.42, date: "2013-07-10T03:00:00"},
            {value: 1.57, date: "2013-07-10T03:30:00"},
            {value: 1.40, date: "2013-07-10T04:00:00"},
            {value: 1.81, date: "2013-07-10T04:30:00"},
            {value: 1.22, date: "2013-07-10T05:00:00"},
            {value: 1.46, date: "2013-07-10T05:30:00"},
            {value: 1.01, date: "2013-07-10T06:00:00"},
            {value: 1.02, date: "2013-07-10T06:30:00"},
            {value: 1.08, date: "2013-07-10T07:00:00"},
            {value: 2.16, date: "2013-07-10T07:30:00"},
            {value: 4.44, date: "2013-07-10T08:00:00"},
            {value: 5.82, date: "2013-07-10T08:30:00"},
            {value: 7.02, date: "2013-07-10T09:00:00"},
            {value: 8.90, date: "2013-07-10T09:30:00"},
            {value: 5.10, date: "2013-07-10T10:00:00"},
            {value: 4.34, date: "2013-07-10T10:30:00"},
            {value: 3.56, date: "2013-07-10T11:00:00"},
            {value: 2.12, date: "2013-07-10T11:30:00"},
            {value: 1.98, date: "2013-07-10T12:00:00"},
            {value: 1.53, date: "2013-07-10T12:30:00"},
            {value: 1.60, date: "2013-07-10T13:00:00"},
            {value: 1.32, date: "2013-07-10T13:30:00"},
            {value: 1.21, date: "2013-07-10T14:00:00"},
            {value: 4.67, date: "2013-07-10T14:30:00"},
            {value: 2.50, date: "2013-07-10T15:00:00"},
            {value: 4.51, date: "2013-07-10T15:30:00"},
            {value: 3.27, date: "2013-07-10T16:00:00"},
            {value: 4.67, date: "2013-07-10T16:30:00"},
            {value: 4.59, date: "2013-07-10T17:00:00"},
            {value: 5.61, date: "2013-07-10T17:30:00"},
            {value: 8.10, date: "2013-07-10T18:00:00"},
            {value: 4.10, date: "2013-07-10T18:30:00"},
            {value: 3.09, date: "2013-07-10T19:00:00"},
            {value: 3.68, date: "2013-07-10T19:30:00"},
            {value: 4.67, date: "2013-07-10T20:00:00"},
            {value: 3.45, date: "2013-07-10T20:30:00"},
            {value: 1.34, date: "2013-07-10T21:00:00"},
            {value: 1.61, date: "2013-07-10T21:30:00"},
            {value: 1.56, date: "2013-07-10T22:00:00"},
            {value: 1.89, date: "2013-07-10T22:30:00"},
            {value: 1.51, date: "2013-07-10T23:00:00"},
            {value: 1.01, date: "2013-07-10T23:30:00"},
            {value: 0.09, date: "2013-07-11T00:00:00"}
        ]
      ];
  var smb_gas_usage_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "therms"},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "therms"},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "therms"},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "therms"},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "therms"},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "therms"},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "therms"},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "therms"},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "therms"},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "therms"},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "therms"},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "therms"},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "therms"},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "therms"},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "therms"},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "therms"},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "therms"},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "therms"},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "therms"},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "therms"},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "therms"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms"},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "therms"},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "therms"},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "therms"},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "therms"},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "therms"},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "therms"},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "therms"},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "therms"},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "therms"},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "therms"},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "therms"},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "therms"},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "therms"},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "therms"},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "therms"},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "therms"},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "therms"},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "therms"},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "therms"},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "therms"},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "therms"},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "therms"},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms"},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms"}
    ];
  var smb_gas_cost_year = [
        [
            {value: 208.52, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 317.40, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 209.27, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 340.51, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 200.55, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 581.03, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 491.88, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 691.02, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 703.58, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 620.01, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 319.76, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&cost&bill"},
            {value: 509.44, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&cost&bill"}
        ]
      ];
  var smb_gas_cost_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,add:true,cost:true,drillLink: "&gas&cost&bill",drillMessage: "View each day"}
     ];
  var smb_gas_weather_year_f = [
        [
            {value: 65, endDate: "2012-05-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 72, endDate: "2012-06-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 80, endDate: "2012-07-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 86, endDate: "2012-08-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 90, endDate: "2012-09-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 78, endDate: "2012-10-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 60, endDate: "2012-11-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 49, endDate: "2012-12-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 36, endDate: "2013-01-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 33, endDate: "2013-02-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 30, endDate: "2013-03-01T03:59:59",clickTarget:"&gas&weather&bill"},
            {value: 51, endDate: "2013-04-01T03:59:59",clickTarget:"&gas&weather&bill"}
        ]
      ];
  var gas_weather_year_c = [
        [
            {value: 23, endDate: "2012-05-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 28, endDate: "2012-06-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 31, endDate: "2012-07-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 32, endDate: "2012-08-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 27, endDate: "2012-09-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 23, endDate: "2012-10-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 16, endDate: "2012-11-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 12, endDate: "2012-12-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 6, endDate: "2013-01-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 4, endDate: "2013-02-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 11, endDate: "2013-03-01T03:59:59",clickTarget:"&electricity&weather&bill"},
            {value: 19, endDate: "2013-04-01T03:59:59",clickTarget:"&electricity&weather&bill"}
        ]
      ];
  var smb_gas_weather_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&bill",drillMessage: "View each day"}
     ];
    var smb_gas_usage_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 11",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 12",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 13",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 14",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 15",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 17",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 18",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 19",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 20",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 21",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 22",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 24",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 25",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 26",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 27",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 28",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 29",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,unit: "therms",drillLink: "&gas&usage&day",drillMessage: "View each hour"}
     ];
  var smb_gas_cost_bill = [
        [
            {value: 49.01, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 51.29, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 34.47, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 20.62, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 30.14, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 23.89, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 20.28, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 50.21, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 53.13, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 25.30, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 10.19, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 40.22, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 49.10, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 30.73, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 43.36, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 30.21, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 21.21, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 22.55, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 47.18, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 52.38, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 25.14, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 50.67, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 45.16, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 33.37, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 20.57, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 56.18, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 21.25, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 39.62, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 44.35, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&cost&day"},
            {value: 42.17, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&cost&day"}
        ]
    ];
  var smb_gas_cost_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 2",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 3",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 4",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 5",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 6",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 7",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 9",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 10",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 11",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 12",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 13",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 14",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 16",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 17",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 18",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 19",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 20",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 21",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 23",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 24",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 25",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 26",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 27",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 28",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 30",you:true,add:true,cost:true,drillLink: "&gas&cost&day",drillMessage: "View each hour"},
    ];
  var smb_gas_cost_day = [
        [
            {value: 1.45, date: "2013-07-10T00:00:00"},
            {value: 1.23, date: "2013-07-10T00:30:00"},
            {value: 1.45, date: "2013-07-10T01:00:00"},
            {value: 1.58, date: "2013-07-10T01:30:00"},
            {value: 1.37, date: "2013-07-10T02:00:00"},
            {value: 1.30, date: "2013-07-10T02:30:00"},
            {value: 1.10, date: "2013-07-10T03:00:00"},
            {value: 1.30, date: "2013-07-10T03:30:00"},
            {value: 1.20, date: "2013-07-10T04:00:00"},
            {value: 1.45, date: "2013-07-10T04:30:00"},
            {value: 1.34, date: "2013-07-10T05:00:00"},
            {value: 1.43, date: "2013-07-10T05:30:00"},
            {value: 1.98, date: "2013-07-10T06:00:00"},
            {value: 2.89, date: "2013-07-10T06:30:00"},
            {value: 3.89, date: "2013-07-10T07:00:00"},
            {value: 2.76, date: "2013-07-10T07:30:00"},
            {value: 2.34, date: "2013-07-10T08:00:00"},
            {value: 2.92, date: "2013-07-10T08:30:00"},
            {value: 1.99, date: "2013-07-10T09:00:00"},
            {value: 1.98, date: "2013-07-10T09:30:00"},
            {value: 1.30, date: "2013-07-10T10:00:00"},
            {value: 2.01, date: "2013-07-10T10:30:00"},
            {value: 1.34, date: "2013-07-10T11:00:00"},
            {value: 1.01, date: "2013-07-10T11:30:00"},
            {value: 0.78, date: "2013-07-10T12:00:00"},
            {value: 0.50, date: "2013-07-10T12:30:00"},
            {value: 0.34, date: "2013-07-10T13:00:00"},
            {value: 0.45, date: "2013-07-10T13:30:00"},
            {value: 0.93, date: "2013-07-10T14:00:00"},
            {value: 0.40, date: "2013-07-10T14:30:00"},
            {value: 0.12, date: "2013-07-10T15:00:00"},
            {value: 1.29, date: "2013-07-10T15:30:00"},
            {value: 3.28, date: "2013-07-10T16:00:00"},
            {value: 2.47, date: "2013-07-10T16:30:00"},
            {value: 2.55, date: "2013-07-10T17:00:00"},
            {value: 2.22, date: "2013-07-10T17:30:00"},
            {value: 1.24, date: "2013-07-10T18:00:00"},
            {value: 2.34, date: "2013-07-10T18:30:00"},
            {value: 3.20, date: "2013-07-10T19:00:00"},
            {value: 1.09, date: "2013-07-10T19:30:00"},
            {value: 0.78, date: "2013-07-10T20:00:00"},
            {value: 1.12, date: "2013-07-10T20:30:00"},
            {value: 1.65, date: "2013-07-10T21:00:00"},
            {value: 1.39, date: "2013-07-10T21:30:00"},
            {value: 1.13, date: "2013-07-10T22:00:00"},
            {value: 1.34, date: "2013-07-10T22:30:00"},
            {value: 1.17, date: "2013-07-10T23:00:00"},
            {value: 1.58, date: "2013-07-10T23:30:00"},
            {value: 1.30, date: "2013-07-11T00:00:00"}
        ]
    ];
  var smb_gas_cost_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,add:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,add:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,add:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,add:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,add:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,add:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,add:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,add:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,add:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,add:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,add:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,add:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,add:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,add:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,add:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,add:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,add:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,add:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,add:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,add:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,add:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,add:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,add:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,add:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,add:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,add:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,add:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,add:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,add:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,add:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,add:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,add:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,add:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,add:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,add:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,add:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,add:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,add:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,add:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,add:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,add:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,add:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,add:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,add:true}
    ];
  var smb_gas_weather_bill_f = [
        [
            {value: 78, endDate: "2013-07-01T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 77, endDate: "2013-07-02T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 82, endDate: "2013-07-03T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-04T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-05T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-06T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 79, endDate: "2013-07-07T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 83, endDate: "2013-07-08T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 86, endDate: "2013-07-09T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 84, endDate: "2013-07-10T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-11T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 88, endDate: "2013-07-12T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-13T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 78, endDate: "2013-07-14T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 80, endDate: "2013-07-15T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-16T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 90, endDate: "2013-07-17T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 91, endDate: "2013-07-18T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 82, endDate: "2013-07-19T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 83, endDate: "2013-07-20T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 85, endDate: "2013-07-21T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 86, endDate: "2013-07-22T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 91, endDate: "2013-07-23T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 97, endDate: "2013-07-24T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 88, endDate: "2013-07-25T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 89, endDate: "2013-07-26T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 85, endDate: "2013-07-27T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 87, endDate: "2013-07-28T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 84, endDate: "2013-07-29T03:59:59",clickTarget:"&gas&weather&day"},
            {value: 81, endDate: "2013-07-30T03:59:59",clickTarget:"&gas&weather&day"}
        ]
      ];
  var smb_gas_weather_bill_tooltips = [
         {dateRange: "Sat, "+peak_month+" 1",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 2",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 3",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 4",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 5",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 6",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 7",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 8",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 9",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 10",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 11",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 12",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 13",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 14",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 15",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 16",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 17",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 18",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 19",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 20",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 21",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 22",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 23",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Mon, "+peak_month+" 24",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Tue, "+peak_month+" 25",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Wed, "+peak_month+" 26",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Thu, "+peak_month+" 27",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Fri, "+peak_month+" 28",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sat, "+peak_month+" 29",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
         {dateRange: "Sun, "+peak_month+" 30",you:true,temp:true,unit: "therms",drillLink: "&gas&weather&day",drillMessage: "View each hour"},
     ];
  var smb_gas_weather_day_f = [
        [
            {value: 60, date: "2013-07-10T00:00:00"},
            {value: 60, date: "2013-07-10T00:30:00"},
            {value: 61, date: "2013-07-10T01:00:00"},
            {value: 61, date: "2013-07-10T01:30:00"},
            {value: 63, date: "2013-07-10T02:00:00"},
            {value: 64, date: "2013-07-10T02:30:00"},
            {value: 65, date: "2013-07-10T03:00:00"},
            {value: 65, date: "2013-07-10T03:30:00"},
            {value: 66, date: "2013-07-10T04:00:00"},
            {value: 67, date: "2013-07-10T04:30:00"},
            {value: 67, date: "2013-07-10T05:00:00"},
            {value: 66, date: "2013-07-10T05:30:00"},
            {value: 67, date: "2013-07-10T06:00:00"},
            {value: 70, date: "2013-07-10T06:30:00"},
            {value: 72, date: "2013-07-10T07:00:00"},
            {value: 75, date: "2013-07-10T07:30:00"},
            {value: 75, date: "2013-07-10T08:00:00"},
            {value: 76, date: "2013-07-10T08:30:00"},
            {value: 78, date: "2013-07-10T09:00:00"},
            {value: 77, date: "2013-07-10T09:30:00"},
            {value: 79, date: "2013-07-10T10:00:00"},
            {value: 82, date: "2013-07-10T10:30:00"},
            {value: 82, date: "2013-07-10T11:00:00"},
            {value: 83, date: "2013-07-10T11:30:00"},
            {value: 85, date: "2013-07-10T12:00:00"},
            {value: 88, date: "2013-07-10T12:30:00"},
            {value: 90, date: "2013-07-10T13:00:00"},
            {value: 92, date: "2013-07-10T13:30:00"},
            {value: 91, date: "2013-07-10T14:00:00"},
            {value: 87, date: "2013-07-10T14:30:00"},
            {value: 84, date: "2013-07-10T15:00:00"},
            {value: 85, date: "2013-07-10T15:30:00"},
            {value: 83, date: "2013-07-10T16:00:00"},
            {value: 80, date: "2013-07-10T16:30:00"},
            {value: 78, date: "2013-07-10T17:00:00"},
            {value: 77, date: "2013-07-10T17:30:00"},
            {value: 76, date: "2013-07-10T18:00:00"},
            {value: 76, date: "2013-07-10T18:30:00"},
            {value: 74, date: "2013-07-10T19:00:00"},
            {value: 73, date: "2013-07-10T19:30:00"},
            {value: 73, date: "2013-07-10T20:00:00"},
            {value: 67, date: "2013-07-10T20:30:00"},
            {value: 63, date: "2013-07-10T21:00:00"},
            {value: 63, date: "2013-07-10T21:30:00"},
            {value: 62, date: "2013-07-10T22:00:00"},
            {value: 62, date: "2013-07-10T22:30:00"},
            {value: 61, date: "2013-07-10T23:00:00"},
            {value: 61, date: "2013-07-10T23:30:00"},
            {value: 60, date: "2013-07-11T00:00:00"}
        ]
      ];
  var smb_gas_weather_day_tooltips = [
         {dateRange: "12 &ndash; 12:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "1 &ndash; 1:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "1:30 &ndash; 1:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "2 &ndash; 2:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "2:30 &ndash; 2:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "3 &ndash; 3:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "3:30 &ndash; 3:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "4 &ndash; 4:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "4:30 &ndash; 4:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "5 &ndash; 5:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "5:30 &ndash; 5:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "6 &ndash; 6:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "6:30 &ndash; 6:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "7 &ndash; 7:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "7:30 &ndash; 7:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "8 &ndash; 8:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "8:30 &ndash; 8:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "9 &ndash; 9:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "10:30 &ndash; 10:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "11 &ndash; 11:29 AM",you:true,unit: "therms",temp:true},
         {dateRange: "11:30 &ndash; 11:59 AM",you:true,unit: "therms",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "1 &ndash; 1:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "1:30 &ndash; 1:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "2 &ndash; 2:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "2:30 &ndash; 2:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "3 &ndash; 3:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "3:30 &ndash; 3:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "4 &ndash; 4:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "4:30 &ndash; 4:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "5 &ndash; 5:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "5:30 &ndash; 5:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "6 &ndash; 6:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "6:30 &ndash; 6:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "7:00 &ndash; 7:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "7:30 &ndash; 7:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "8 &ndash; 8:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "8:30 &ndash; 8:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "9 &ndash; 9:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "9:30 &ndash; 9:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "10 &ndash; 10:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "10:30 &ndash; 10:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "11 &ndash; 11:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "11:30 &ndash; 11:59 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12 &ndash; 12:29 PM",you:true,unit: "therms",temp:true},
         {dateRange: "12:30 &ndash; 12:59 PM",you:true,unit: "therms",temp:true}
    ];


/* water */


    var water_usage_year = [
        [
            {value: 9.12, endDate: "2012-05-01T03:59:59"},
            {value: 16.04, endDate: "2012-06-01T03:59:59"},
            {value: 14.55, endDate: "2012-07-01T03:59:59"},
            {value: 17.46, endDate: "2012-08-01T03:59:59"},
            {value: 12.98, endDate: "2012-09-01T03:59:59"},
            {value: 4.22, endDate: "2012-10-01T03:59:59"},
            {value: 5.34, endDate: "2012-11-01T03:59:59"},
            {value: 6.27, endDate: "2012-12-01T03:59:59"},
            {value: 1.45, endDate: "2013-01-01T03:59:59"},
            {value: 3.90, endDate: "2013-02-01T03:59:59"},
            {value: 4.07, endDate: "2013-03-01T03:59:59"},
            {value: 10.32, endDate: "2013-04-01T03:59:59"}
        ]
      ];
    var water_usage_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,unit: "hcf"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,unit: "hcf"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,unit: "hcf"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,unit: "hcf"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,unit: "hcf"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,unit: "hcf"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,unit: "hcf"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,unit: "hcf"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,unit: "hcf"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,unit: "hcf"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,unit: "hcf"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,unit: "hcf"}
     ];
  var water_cost_year = [
        [
            {value: 9.52, endDate: "2012-05-01T03:59:59"},
            {value: 14.34, endDate: "2012-06-01T03:59:59"},
            {value: 15.12, endDate: "2012-07-01T03:59:59"},
            {value: 7.51, endDate: "2012-08-01T03:59:59"},
            {value: 4.55, endDate: "2012-09-01T03:59:59"},
            {value: 6.03, endDate: "2012-10-01T03:59:59"},
            {value: 5.88, endDate: "2012-11-01T03:59:59"},
            {value: 4.02, endDate: "2012-12-01T03:59:59"},
            {value: 6.58, endDate: "2013-01-01T03:59:59"},
            {value: 4.01, endDate: "2013-02-01T03:59:59"},
            {value: 7.76, endDate: "2013-03-01T03:59:59"},
            {value: 10.44, endDate: "2013-04-01T03:59:59"}
        ]
      ];
  var water_cost_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,add:true},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,add:true},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,add:true},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,add:true},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,add:true},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,add:true},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,add:true},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,add:true},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,add:true},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,add:true},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,add:true},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,add:true}
     ];
  var water_weather_year_f = [
        [
            {value: 65, endDate: "2012-05-01T03:59:59"},
            {value: 72, endDate: "2012-06-01T03:59:59"},
            {value: 80, endDate: "2012-07-01T03:59:59"},
            {value: 86, endDate: "2012-08-01T03:59:59"},
            {value: 90, endDate: "2012-09-01T03:59:59"},
            {value: 78, endDate: "2012-10-01T03:59:59"},
            {value: 60, endDate: "2012-11-01T03:59:59"},
            {value: 49, endDate: "2012-12-01T03:59:59"},
            {value: 36, endDate: "2013-01-01T03:59:59"},
            {value: 33, endDate: "2013-02-01T03:59:59"},
            {value: 30, endDate: "2013-03-01T03:59:59"},
            {value: 51, endDate: "2013-04-01T03:59:59"}
        ]
      ];
  var water_weather_year_c = [
        [
            {value: 23, endDate: "2012-05-01T03:59:59"},
            {value: 28, endDate: "2012-06-01T03:59:59"},
            {value: 31, endDate: "2012-07-01T03:59:59"},
            {value: 32, endDate: "2012-08-01T03:59:59"},
            {value: 27, endDate: "2012-09-01T03:59:59"},
            {value: 23, endDate: "2012-10-01T03:59:59"},
            {value: 16, endDate: "2012-11-01T03:59:59"},
            {value: 12, endDate: "2012-12-01T03:59:59"},
            {value: 6, endDate: "2013-01-01T03:59:59"},
            {value: 4, endDate: "2013-02-01T03:59:59"},
            {value: 11, endDate: "2013-03-01T03:59:59"},
            {value: 19, endDate: "2013-04-01T03:59:59"}
        ]
      ];
  var water_weather_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,temp:true,unit: "hcf"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,temp:true,unit: "hcf"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,temp:true,unit: "hcf"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,temp:true,unit: "hcf"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,temp:true,unit: "hcf"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,temp:true,unit: "hcf"}
     ];
  var water_comparison_year = [
        [
            {value: 9.12, endDate: "2012-05-01T03:59:59"},
            {value: 16.04, endDate: "2012-06-01T03:59:59"},
            {value: 14.55, endDate: "2012-07-01T03:59:59"},
            {value: 17.46, endDate: "2012-08-01T03:59:59"},
            {value: 12.98, endDate: "2012-09-01T03:59:59"},
            {value: 4.22, endDate: "2012-10-01T03:59:59"},
            {value: 5.34, endDate: "2012-11-01T03:59:59"},
            {value: 6.27, endDate: "2012-12-01T03:59:59"},
            {value: 1.45, endDate: "2013-01-01T03:59:59"},
            {value: 3.90, endDate: "2013-02-01T03:59:59"},
            {value: 4.07, endDate: "2013-03-01T03:59:59"},
            {value: 10.32, endDate: "2013-04-01T03:59:59"}
        ],
        [
            {value: 10.40, endDate: "2012-05-01T03:59:59"},
            {value: 12.43, endDate: "2012-06-01T03:59:59"},
            {value: 14.76, endDate: "2012-07-01T03:59:59"},
            {value: 11.91, endDate: "2012-08-01T03:59:59"},
            {value: 9.60, endDate: "2012-09-01T03:59:59"},
            {value: 8.39, endDate: "2012-10-01T03:59:59"},
            {value: 6.65, endDate: "2012-11-01T03:59:59"},
            {value: 7.72, endDate: "2012-12-01T03:59:59"},
            {value: 6.92, endDate: "2013-01-01T03:59:59"},
            {value: 7.04, endDate: "2013-02-01T03:59:59"},
            {value: 8.73, endDate: "2013-03-01T03:59:59"},
            {value: 8.10, endDate: "2013-04-01T03:59:59"}
        ],
        [
            {value: 3.45, endDate: "2012-05-01T03:59:59"},
            {value: 5.12, endDate: "2012-06-01T03:59:59"},
            {value: 6.11, endDate: "2012-07-01T03:59:59"},
            {value: 4.76, endDate: "2012-08-01T03:59:59"},
            {value: 4.29, endDate: "2012-09-01T03:59:59"},
            {value: 2.45, endDate: "2012-10-01T03:59:59"},
            {value: 3.41, endDate: "2012-11-01T03:59:59"},
            {value: 2.98, endDate: "2012-12-01T03:59:59"},
            {value: 2.56, endDate: "2013-01-01T03:59:59"},
            {value: 2.04, endDate: "2013-02-01T03:59:59"},
            {value: 2.19, endDate: "2013-03-01T03:59:59"},
            {value: 2.67, endDate: "2013-04-01T03:59:59"}
        ]
    ];
    var water_comparison_year_tooltips = [
         {dateRange: "May 1 &ndash; May 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Jun 1 &ndash; Jun 30",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Jul 1 &ndash; Jul 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Aug 1 &ndash; Aug 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Sep 1 &ndash; Sep 30",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Oct 1 &ndash; Oct 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Nov 1 &ndash; Nov 30",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Dec 1 &ndash; Dec 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Jan 1 &ndash; Jan 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Feb 1 &ndash; Feb 28",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Mar 1 &ndash; Mar 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"},
         {dateRange: "Apr 1 &ndash; Apr 31",you:true,allNeighbors:true,effNeighbors:true,unit: "hcf"}
     ];

/* elroi stuffs */

    var electricity_comparison_year_args = {
          data:
          [
            {
              series:electricity_comparison_year,
              options: {
                maxYValue: 800,
                type:'line',
                showPoints:true
              }
            }
          ],
          options: {
            axes: {
              y1: {
                topUnit:"kWh"
              }
            },
          padding: {top:15, right:40, bottom:18, left:40}
        },
      tooltips: electricity_comparison_year_tooltips
    },
    electricity_comparison_bill_args = {
      data:
      [
        {
          series:electricity_comparison_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_comparison_bill_tooltips
    },
    electricity_comparison_day_args = {
      data:
      [
        {
          series:electricity_usage_day,
          options: {
            maxYValue: 2,
            type: 'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: electricity_usage_day_tooltips
    },
    electricity_usage_year_args = {
      data:
      [
        {
          series:electricity_usage_year,
          options: {
            type: 'bar',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_usage_year_tooltips
    },
    electricity_usage_bill_args = {
      data:
      [
        {
          series:electricity_usage_bill,
          options: {
            maxYValue: 50,
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_usage_bill_tooltips
    },
    electricity_usage_bill_rates_args = {
      data:
      [
        {
          series:electricity_usage_bill_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700'],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_usage_bill_rates_tooltips
    },
    electricity_usage_day_args = {
      data:
      [
        {
          series:electricity_usage_day,
          options: {
            maxYValue: 2,
            type:'bar',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        labelWidth: 10,
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_usage_day_tooltips
    },
    electricity_usage_day_rates_args = {
      data: [
        {
          series:electricity_usage_day_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700','#febb00','#ffed00','#9fcb00'],
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: electricity_usage_day_rates_tooltips
    },
    electricity_cost_year_args = {
      data:
      [
        {
          series:electricity_cost_year,
          options: {
            type:'bar'
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        tooltip: {
          width: 120
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_cost_year_tooltips
    },
    electricity_cost_bill_args = {
      data:
      [
        {
          series:electricity_cost_bill,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_cost_bill_rates_tooltips
    },
    electricity_cost_bill_rates_args = {
      data:
      [
        {
          series:electricity_cost_bill_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700'],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_cost_bill_rates_tooltips
    },
    electricity_cost_day_args = {
      data: [
        {
          series:electricity_cost_day,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: electricity_cost_day_rates_tooltips
    },
    electricity_cost_day_rates_args = {
      data: [
        {
          series:electricity_cost_day_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700','#febb00','#ffed00','#9fcb00'],
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: electricity_cost_day_rates_tooltips
    },
    electricity_weather_year_args = {
      data: [
        {
          series:eval('electricity_weather_year'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:electricity_usage_year,
          options: {
            maxYValue: 800,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_weather_year_tooltips
    },
    electricity_weather_bill_args = {
      data:
      [
        {
          series:eval('electricity_weather_bill'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:electricity_usage_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_weather_bill_tooltips
    },
    electricity_weather_day_args = {
      data:
      [
        {
          series:eval('electricity_weather_day'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:false,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:electricity_usage_day,
          options: {
            maxYValue: 2,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: electricity_weather_day_tooltips
    },
    electricity_demand_year_smb_args = {
      data:
      [
        {
          series:smb_electricity_demand_year,
          options: {
            maxYValue: 30,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"kW"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: smb_electricity_demand_year_tooltips
    },
    electricity_demand_bill_smb_args = {
      data:
      [
        {
          series:smb_electricity_demand_bill,
          options: {
            maxYValue: 30,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"kW"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_demand_bill_tooltips
    },
    electricity_demand_day_smb_args = {
      data:
      [
        {
          series:smb_electricity_demand_day,
          options: {
            maxYValue:30,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kW"
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: smb_electricity_demand_day_tooltips
    },
    electricity_solar_year_args = {
      data: [
        {
          series:electricity_solar_year,
          options: {
            fillLines:true,
            maxYValue: 800,
            type:'line',
            showPoints:true,
            fillPoints:true
          }
        }, {
          series:electricity_usage_year,
          options: {
            maxYValue: 800,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#FFBB11',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_solar_year_tooltips
    },
    electricity_solar_bill_args = {
      data:
      [
        {
          series:electricity_solar_bill,
          options: {
            fillLines:true,
            maxYValue: 50,
            type:'line',
            showPoints:true,
            fillPoints:true
          }
        }, {
          series:electricity_usage_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#FFBB11',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_solar_bill_tooltips
    },
    electricity_solar_day_args = {
      data:
      [
        {
          series:electricity_solar_day,
          options: {
            fillLines:true,
            maxYValue: 2,
            type:'line',
            showPoints:false,
            fillPoints:true
          }
        }, {
          series:electricity_usage_day,
          options: {
            maxYValue: 2,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#FFBB11',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: electricity_solar_day_tooltips
    },

    electricity_solar_year_smb_args = {
      data: [
        {
          series:electricity_solar_year,
          options: {
            fillLines:true,
            maxYValue: 800,
            type:'line',
            showPoints:true,
            fillPoints:true
          }
        }, {
          series:electricity_usage_year,
          options: {
            maxYValue: 800,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#FFBB11',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: electricity_solar_year_tooltips
    },
    electricity_solar_bill_smb_args = {
      data:
      [
        {
          series:electricity_solar_bill,
          options: {
            fillLines:true,
            maxYValue: 50,
            type:'line',
            showPoints:true,
            fillPoints:true
          }
        }, {
          series:electricity_usage_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#FFBB11',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: electricity_solar_bill_tooltips
    },
    electricity_solar_day_smb_args = {
      data:
      [
        {
          series:electricity_solar_day,
          options: {
            fillLines:true,
            maxYValue: 2,
            type:'line',
            showPoints:false,
            fillPoints:true
          }
        }, {
          series:electricity_usage_day,
          options: {
            maxYValue: 2,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#FFBB11',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            topUnit:'kWh'
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: electricity_solar_day_tooltips
    },
    gas_comparison_year_args = {
          data:
          [
            {
              series:gas_comparison_year,
              options: {
                maxYValue: 160,
                type:'line',
                showPoints:true
              }
            }
          ],
          options: {
            axes: {
              y1: {
                topUnit:"therms"
              }
            },
          padding: {top:15, right:40, bottom:18, left:40}
        },
      tooltips: gas_comparison_year_tooltips
    },
    gas_comparison_bill_args = {
      data:
      [
        {
          series:gas_comparison_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: gas_comparison_bill_tooltips
    },
    gas_comparison_day_args = {
      data:
      [
        {
          series:gas_usage_day,
          options: {
            maxYValue:0.1,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: electricity_usage_day_tooltips
    },
    gas_usage_year_args = {
      data:
      [
        {
          series:gas_usage_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: gas_usage_year_tooltips
    },
    gas_usage_bill_args = {
      data:
      [
        {
          series:gas_usage_bill,
          options: {
            maxYValue: 50,
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: gas_usage_bill_tooltips
    },
    gas_usage_day_args = {
      data:
      [
        {
          series:gas_usage_day,
          options: {
            maxYValue: 0.1,
            type:'bar',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: gas_usage_day_tooltips
    },
    gas_cost_year_args = {
      data:
      [
        {
          series:gas_cost_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        maxYValue: 50,
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        tooltip: {
          width: 120
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: gas_cost_year_tooltips
    },
    gas_cost_bill_args = {
      data:
      [
        {
          series:gas_cost_bill,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: gas_cost_bill_tooltips
    },
    gas_cost_day_args = {
      data: [
        {
          series:gas_cost_day,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: gas_cost_day_tooltips
    },
    gas_weather_year_args = {
      data: [
        {
          series:eval('gas_weather_year'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:gas_usage_year,
          options: {
            maxYValue: 160,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: gas_weather_year_tooltips
    },
    gas_weather_bill_args = {
      data:
      [
        {
          series:eval('gas_weather_bill'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:gas_usage_bill,
          options: {
            maxYValue: 50,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: gas_weather_bill_tooltips
    },
    gas_weather_day_args = {
      data:
      [
        {
          series:eval('electricity_weather_day'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:false,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:gas_usage_day,
          options: {
            maxYValue: 0.1,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips: gas_weather_day_tooltips
    },
    water_comparison_year_args = {
          data:
          [
            {
              series:water_comparison_year,
              options: {
                maxYValue: 20,
                type:'line',
                showPoints:true
              }
            }
          ],
          options: {
            axes: {
              y1: {
                topUnit:"hcf"
              }
            },
          padding: {top:15, right:40, bottom:18, left:40}
        },
      tooltips: water_comparison_year_tooltips
    },
    water_usage_year_args = {
      data:
      [
        {
          series:water_usage_year,
          options: {
            maxYValue: 20,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"hcf"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: water_usage_year_tooltips
    },
    water_cost_year_args = {
      data:
      [
        {
          series:water_cost_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        maxYValue: 50,
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        tooltip: {
          width: 120
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: water_cost_year_tooltips
    },
    water_weather_year_args = {
      data: [
        {
          series:eval('water_weather_year'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:water_usage_year,
          options: {
            maxYValue: 20,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'hcf'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: water_weather_year_tooltips
    },
    electricity_usage_year_smb_args = {
      data:
      [
        {
          series:smb_electricity_usage_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: smb_electricity_usage_year_tooltips
    },
    electricity_usage_bill_smb_args = {
      data:
      [
        {
          series:smb_electricity_usage_bill,
          options: {
            maxYValue: 600,
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_usage_bill_tooltips
    },
    electricity_usage_bill_rates_smb_args = {
      data:
      [
        {
          series:smb_electricity_usage_bill_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700'],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_usage_bill_rates_tooltips
    },
    electricity_usage_day_smb_args = {
      data:
      [
        {
          series:smb_electricity_usage_day,
          options: {
            maxYValue:200,
            type:'bar',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        labelWidth: 10,
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: smb_electricity_usage_day_tooltips
    },
    electricity_usage_day_rates_smb_args = {
      data: [
        {
          series:smb_electricity_usage_day_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        labelWidth: 10,
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700','#febb00','#ffed00','#9fcb00'],
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"kWh"
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: smb_electricity_usage_day_rates_tooltips
    },
    electricity_cost_year_smb_args = {
      data:
      [
        {
          series:smb_electricity_cost_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        tooltip: {
          width: 120
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: smb_electricity_cost_year_tooltips
    },
    electricity_cost_bill_smb_args = {
      data:
      [
        {
          series:smb_electricity_cost_bill,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_cost_bill_rates_tooltips
    },
    electricity_cost_bill_rates_smb_args = {
      data:
      [
        {
          series:smb_electricity_cost_bill_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700'],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_cost_bill_rates_tooltips
    },
    electricity_cost_day_smb_args = {
      data: [
        {
          series:smb_electricity_cost_day,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: smb_electricity_cost_day_rates_tooltips
    },
    electricity_cost_day_rates_smb_args = {
      data: [
        {
          series:smb_electricity_cost_day_rates,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        colors: ['#9fcb00','#ffed00','#febb00','#ea4700','#febb00','#ffed00','#9fcb00'],
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips: smb_electricity_cost_day_rates_tooltips
    },
    electricity_weather_year_smb_args = {
      data: [
        {
          series:eval('electricity_weather_year'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_electricity_usage_year,
          options: {
            maxYValue: 8000,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips: smb_electricity_weather_year_tooltips
    },
    electricity_weather_bill_smb_args = {
      data:
      [
        {
          series:eval('electricity_weather_bill'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_electricity_usage_bill,
          options: {
            maxYValue: 600,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips: smb_electricity_weather_bill_tooltips
    },
    electricity_weather_day_smb_args = {
      data:
      [
        {
          series:eval('electricity_weather_day'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:false,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_electricity_usage_day,
          options: {
            maxYValue: 200,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'kWh'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips:smb_electricity_weather_day_tooltips
    },
    gas_usage_year_smb_args = {
      data:
      [
        {
          series:smb_gas_usage_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips:smb_gas_usage_year_tooltips
    },
    gas_usage_bill_smb_args = {
      data:
      [
        {
          series:smb_gas_usage_bill,
          options: {
            maxYValue: 80,
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips:smb_gas_usage_bill_tooltips
    },
    gas_usage_day_smb_args = {
      data:
      [
        {
          series:smb_gas_usage_day,
          options: {
            maxYValue: 10,
            type:'bar',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        labelWidth: 10,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:"therms"
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips:smb_gas_usage_day_tooltips
    },
    gas_cost_year_smb_args = {
      data:
      [
        {
          series:smb_gas_cost_year,
          options: {
            type:'bar',
            showPoints:true
          }
        }
      ],
      options: {
        maxYValue: 50,
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        tooltip: {
          width: 120
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips:smb_gas_cost_year_tooltips
    },
    gas_cost_bill_smb_args = {
      data:
      [
        {
          series:smb_gas_cost_bill,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips:smb_gas_cost_bill_tooltips
    },
    gas_cost_day_smb_args = {
      data: [
        {
          series:smb_gas_cost_day,
          options: {
            type:'stackedBar',
            showPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        precision: 2,
        labelWidth: 10,
        dates : {
            format: 'h a'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            topUnit:currency+" ",
            prefixUnit: true
          }
        },
        padding: {top:15, right:48, bottom:18, left:32}
      },
      tooltips:smb_gas_cost_day_tooltips
    },
    gas_weather_year_smb_args = {
      data: [
        {
          series:eval('gas_weather_year'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_gas_usage_year,
          options: {
            maxYValue: 4400,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:40, bottom:18, left:40}
      },
      tooltips:smb_gas_weather_year_tooltips
    },
    gas_weather_bill_smb_args = {
      data:
      [
        {
          series:eval('gas_weather_bill'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:true,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_gas_usage_bill,
          options: {
            maxYValue: 80,
            type:'line',
            showPoints:true
          }
        }
      ],
      options: {
        colors: ['#bb77b1',linkColor],
        dates : {
            format: 'D/d'
        },
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:50, bottom:18, left:30}
      },
      tooltips:smb_gas_weather_bill_tooltips
    },
    gas_weather_day_smb_args = {
      data:
      [
        {
          series:eval('gas_weather_day'+temp_modifier),
          options: {
            fillLines:true,
            maxYValue: temp_max,
            minYValue: -10,
            type:'line',
            showPoints:false,
            fillPoints:true,
            labelPoints: true,
            pointLabelUnits: '&deg;'
          }
        }, {
          series:smb_gas_usage_day,
          options: {
            maxYValue: 10,
            type:'line',
            showPoints:true,
            pointStroke:false,
            fillPoints:true
          }
        }
      ],
      options: {
        showEvery: 12,
        dates : {
            format: 'h a'
        },
        colors: ['#bb77b1',linkColor],
        tooltip: {
          width: 120
        },
        axes: {
          y1: {
            seriesIndex:1,
            topUnit:'therms'
          },
          y2: {
            show:true,
            seriesIndex:0,
            unit:'&deg;',
            topUnit:'&deg;',
            maxYValue : 100,
          }
        },
        padding: {top:15, right:100, bottom:18, left:-20}
      },
      tooltips:smb_gas_weather_day_tooltips
    };


function buildGraph($container, args) {

  var graph = elroi(
      $container,
      args.data,
      args.options,
      args.tooltips
    );
  }
