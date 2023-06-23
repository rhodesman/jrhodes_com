(function(ng, $) {
  "use strict";

  $(document).foundation();

  //add custom font
  (function() {
    var path = '//easy.myfonts.net/v2/js?sid=87244(font-family=DIN+Mittel+Regular)&sid=87246(font-family=DIN+Mittel+Bold)&sid=196376(font-family=DIN+Mittel+Medium)&key=WhMl3XTL37',
      protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
      trial = document.createElement('script');
    trial.type = 'text/javascript';
    trial.async = true;
    trial.src = protocol + path;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(trial);
  })();


  var myApp = ng.module("app", ["ngRoute", "angularjs-dropdown-multiselect", "tc.chartjs", "ngAnimate", "mm.foundation", "rzModule", "angularCharts", "countTo"]);

  //tool tips
  myApp.config(['$tooltipProvider', function($tooltipProvider){
    $tooltipProvider.options({
      animation: true,
      placement: 'top',
      popupDelay: 1,
      appendToBody: true
    });
  }]);


//configure a global user type of business or not business user
    myApp.provider("OPowerUserType", function() {
        var _defaultIsResidentialUser = 'residential';

        this._currentUserType = _defaultIsResidentialUser;
        this.isBusinessUser = function()
        {
            return (this._currentUserType == 'business');
        }
        this.isCommercialUser = function()
        {
            return (this._currentUserType == 'commercial');
        }
        this.isResidentialUser = function()
        {
            return (this._currentUserType == 'residential');
        }

        this.setUserTypeBusiness = function() {
            this._currentUserType = 'business';
            console.debug("setting to business user");
        };

        this.setUserTypeResidential = function() {
            this._currentUserType = 'residential';
            console.debug("setting to residential user");
        };

        this.setUserTypeCommercial = function() {
            this._currentUserType = 'commercial';
            console.debug("setting to commercial user");
        };

        this.$get = function($injector) {
            var rScope = $injector.get('$rootScope');
            var rParams = $injector.get('$routeParams');
            if (rParams.usertype == 'residential') {
                this.setUserTypeResidential();
            } else if (rParams.usertype == 'business') {
                this.setUserTypeBusiness();
            } else if (rParams.usertype == 'commercial') {
                this.setUserTypeCommercial();
            }
            if (!rScope.userPrefs) {
                rScope.userPrefs = this;
            }
        };
    });

  // configure a default user mode for things that need to happen before viewing (without this it is config to residential)
  myApp.config([
    "OPowerUserTypeProvider",
    function(OPowerUserTypeProvider) {
      OPowerUserTypeProvider.setUserTypeResidential();
    }
  ]);

  // Angular
  myApp.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when('/:usertype?/pay-and-manage/biz-rate-tier', {
          templateUrl: 'partials/pay-and-manage/biz-rate-tier.html',
          title: "Pay & Manage",
          controller: "PayAndManageCtrl"
        })
        .when('/:usertype?/pay-and-manage', { //note the :usertype?, use this for routes that optionally need url routes of business or residential
          templateUrl: 'partials/pay-and-manage/billing-summary.html',
          title: "Pay & Manage",
          controller: "PayAndManageCtrl"
        })
        .when('/:usertype?/my-usage', {
          templateUrl: 'partials/my-usage/over-time.html',
          title: "My Usage",
          controller: "MyUsage",
          section: "my-usage"
        })
        .when('/:usertype?/my-usage/by-category', {
          templateUrl: 'partials/my-usage/by-category.html',
          title: "My Usage",
          controller: "MyUsage",
          section: "my-usage"
        })
        .when('/:usertype?/my-usage/by-category-post-audit', {
          templateUrl: 'partials/my-usage/by-category-post-audit.html',
          title: "My Usage",
          controller: "MyUsage",
          section: "my-usage"
        })
        .when('/:usertype?/my-usage/by-category-list-post-audit', {
          templateUrl: 'partials/my-usage/by-category-list-post-audit.html',
          title: "My Usage",
          controller: "MyUsage",
          section: "my-usage"
        })
        .when('/:usertype?/my-usage/by-category-list', {
          templateUrl: 'partials/my-usage/by-category-list.html',
          title: "My Usage",
          controller: "MyUsage",
          section: "my-usage"
        })
        .when('/:usertype?/ways-to-save', {
          templateUrl: 'partials/ways-to-save/about-rest-1of5.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/about-buisness-2of5', {
          templateUrl: 'partials/ways-to-save/about-rest-2of5.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/about-buisness-3of5', {
          templateUrl: 'partials/ways-to-save/about-biz-3of5.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/about-home-1of3', {
          templateUrl: 'partials/ways-to-save/about-home-1of3.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/about-home-2of3', {
          templateUrl: 'partials/ways-to-save/about-home-2of3.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/about-home-3of3', {
          templateUrl: 'partials/ways-to-save/about-home-3of3.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl",
          section: "audit"
        })
        .when('/:usertype?/ways-to-save/replace-lights', {
          templateUrl: 'partials/ways-to-save/replace-lights.html',
          title: "Ways to Save",
          controller: "WaysToSaveCtrl"
        })
        .when('/:usertype?/my-account/general', {
          templateUrl: 'partials/my-account/general.html',
          controller: 'MyAccountCtrl',
          title: "My Account",
          section: "general"
        })
        .when('/:usertype?/my-account/devices', {
          templateUrl: 'partials/my-account/devices.html',
          controller: 'MyAccountCtrl',
          title: "My Account",
          section: "devices"
        })
        .when('/:usertype?/my-account/alerts', {
          templateUrl: 'partials/my-account/alerts.html',
          controller: 'MyAccountCtrl',
          title: "My Account",
          section: "alerts"
        })
        .when('/:usertype?/community', {
          templateUrl: 'partials/community.html',
          title: "Community"
        })
        .when('/:usertype?/ways-to-save/smart-purchases', {
          templateUrl: 'partials/ways-to-save/my-savings-plan/smart-purchases.html',
          title: "Smart Purchases",
          tab: "ways-to-save",
          section: "my-savings-plan",
          controller: "SmartPurchasesCtrl"
        })
        .when('/:usertype?/ways-to-save/rewards/get-rewards', {
          templateUrl: 'partials/ways-to-save/rewards/get-rewards.html',
          title: "Get Rewards",
          tab: "ways-to-save",
          section: "get-rewards",
          controller: "RewardsCtrl"
        })
        .when('/:usertype?/ways-to-save/simple-habits', {
          templateUrl: 'partials/ways-to-save/my-savings-plan/simple-habits.html',
          title: "Simple Habits",
          tab: "ways-to-save",
          section: "my-savings-plan",
          controller: "SimpleHabitsCtrl"
        })
        .when('/:usertype?/ways-to-save/all', {
          templateUrl: 'partials/ways-to-save/all-ways-to-save.html',
          title: "All Ways to Save",
          tab: "ways-to-save",
          section: "all-ways"
        })
        .when('/:usertype?/ways-to-save/marketplace', {
          templateUrl: 'partials/ways-to-save/marketplace/thermostats.html',
          title: "Marketplace",
          tab: "ways-to-save",
          section: "marketplace",
          subSection: "products"
        })
        .when('/:usertype?/ways-to-save/marketplace/nest', {
          templateUrl: 'partials/ways-to-save/marketplace/nest.html',
          title: "Nest",
          tab: "ways-to-save",
          section: "marketplace",
          subSection: "products",
          controller: "nest"
        })
        .when('/:usertype?/ways-to-save/marketplace/services', {
          templateUrl: 'partials/ways-to-save/marketplace/services.html',
          controller: "ServicesCtrl",
          title: "Services",
          tab: "ways-to-save",
          section: "marketplace",
          subSection: "services"
        })
        .when('/:usertype?/ways-to-save/marketplace/services-ff', {
          templateUrl: 'partials/ways-to-save/marketplace/services-ff.html',
          controller: "ServicesCtrl",
          title: "Services",
          tab: "ways-to-save",
          section: "marketplace",
          subSection: "services"
        })
        .when('/alerts', {
          templateUrl: 'partials/alerts.html',
          title: "Alerts",
          controller: "AlertsCtrl"
        })
        .when('/:usertype?', {
          templateUrl: 'partials/overview.html',
          title: "Overview",
          controller: "OverviewCtrl"
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]).run([
    "$rootScope", "$window",
    function($rootScope, $window) {
      $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        if (current.$$route.section !== "audit" && current.$$route.section !== "my-usage") {
          $window.scrollTo(0,0);
        }
        if (current.$$route) {
          $rootScope.pageTitle = current.$$route.title || "";
          $rootScope.pageSection = current.$$route.section || "";
          $rootScope.subSection = current.$$route.subSection || "";
          $rootScope.pageTab = current.$$route.tab || "";
        } else {
          $rootScope.pageTitle = "";
          $rootScope.pageSection = "";
          $rootScope.subSection = "";
          $rootScope.pageTab = "";
        }
      });
    }
  ]);

  myApp.controller('MyAccountCtrl', ['$scope', '$timeout', 'OPowerUserType',
    function($scope, $timeout){
      $scope.viewDevice = 'input';

      $scope.connectDevice = function(){
        $('#add-device').text('Connecting...');
        $timeout(function() {
            $scope.viewDevice = 'view';
        }, 2000);
      };
    }
  ]);

  //Controllers to handle user type switching
  myApp.controller('MyUsage', ['$scope', '$rootScope','OPowerUserType',
    function($scope,$rootScope) {

      $scope.modalShown = true;
      $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
      };

      $scope.resetAudit = function(){
          $rootScope.shownAuditModal = false;
      };

    }
  ]);

  //Controllers to handle user type switching
  myApp.controller('SmartPurchasesCtrl', ['$scope', 'OPowerUserType',
    function() {}
  ]);

  myApp.controller('OverviewCtrl', ['$scope', 'OPowerUserType',
    function($scope) {

      $scope.businessLocations = [{
        name: "Osha Thai - 2nd St",
        lastPayment: "$758.82",
        amountDue: "$0.00",
        projectedBill: "$1,932.30",
        on_track: false
      }, {
        name: "Osha Thai - Embarcadero",
        lastPayment: "$530.31",
        amountDue: "$0.00",
        projectedBill: "$439.49",
        on_track: true
      }, {
        name: "Osha Thai - Mission",
        lastPayment: "$391.24",
        amountDue: "$0.00",
        projectedBill: "$481.32",
        on_track: true
      }];

    }
  ]);

  myApp.controller('PayAndManageCtrl', ['$scope', 'OPowerUserType',
    function($scope) {

      $scope.currentTotal = 24231;
      $scope.comparedTotal = 21489;
      $scope.comparedTotalA1 = 24531;
      $scope.efficientLightingShown = true;
      $scope.timerLightingShown = true;
      $scope.programmableThermostatShown = true;
      $scope.optionTriggered = false;

      $scope.calculateTotal = function(amount, itemIndex){
        $scope.currentTotal += amount;
        $scope.comparedTotal += amount;
        $scope.comparedTotalA1 += amount;
        $scope.optionTriggered = !$scope.optionTriggered;

        switch(itemIndex){
          case 1:
            $scope.efficientLightingShown = !$scope.efficientLightingShown;
            break;
          case 2:
            $scope.timerLightingShown = !$scope.timerLightingShown;
            break;
          case 3:
            $scope.programmableThermostatShown = !$scope.programmableThermostatShown;
            break;
        }
      };

      $scope.sliders = [
        {
          value: 'dollars',
          title: 'Dollars'
        },{
          value: 'percent',
          title: 'Percent'
        },{
          value: 'days',
          title: 'Days until tier change'
        }
      ];
      $scope.sliderSelection = $scope.sliders[0].value;

      $scope.priceSlider = {
        min: 0,
        max: 250,
        ceil: 400,
        floor: 0,
        step: 0
      };

      $scope.percentSlider = {
        min: 0,
        max: 200,
        ceil: 300,
        floor: 0,
        step: 0
      };

      $scope.daysSlider = {
        min: 0,
        max: 4,
        ceil: 9,
        floor: 0,
        step: 0
      };

    }
  ]);

  myApp.controller('nest', ['$scope',
    function($scope) {

    }
  ]);


  myApp.controller('WaysToSaveCtrl', ['$scope', 'OPowerUserType',
    function($scope) {
      $scope.tips = [{
        img: 'tip025_install_programmable_thermostat',
        title: 'Program your thermostat',
        completers: 167
      }, {
        img: 'tip029_insulate_outlets_light_switches',
        title: 'Insulate outlets and light switches',
        completers: 964
      }, {
        img: 'tip046_let_in_sun_for_warmth',
        title: 'Open your shades on winter days',
        completers: 452
      }, {
        img: 'tip070_reduce_water_heater_temperature',
        title: 'Reduce your water heater\'s temperature',
        completers: '1,978'
      }, {
        img: 'tip032_set_thermostat_wisely',
        title: 'Adjust your thermostat a few degrees',
        completers: 271
      }, {
        img: 'tip007_set_refrigerator_temperature',
        title: 'Set your refrigerator\'s temperature to 40°F',
        completers: 96
      }, {
        img: 'tip010_hang_dry_laundry',
        title: 'Hang laundry to dry',
        completers: 43
      }, {
        img: 'tip011_recycle_second_refrigerator',
        title: 'Recycle your second refrigerator',
        completers: 584
      }, {
        img: 'tip020_keep_out_solar_heat',
        title: 'Close your shades in the summer',
        completers: 319
      }, {
        img: 'tip021_let_ac_breathe',
        title: 'Clear the area around your AC',
        completers: '1,142'
      }, {
        img: 'tip033_clear_around_vents',
        title: 'Clear area around vents',
        completers: 828
      }, {
        img: 'tip069_install_efficient_showerheads',
        title: 'Install efficient showerheads',
        completers: 554
      }];
    }
  ]);

  myApp.controller('SimpleHabitsCtrl', ['$scope', 'OPowerUserType',
    function($scope) {
      $scope.items = [{
        title: "Set thermostat to 85°F during closed hours",
        popularity: '10,298',
        amount: '$102'
      }, {
        title: "Turn off extra lights and displays at night",
        popularity: '8,879',
        amount: '$86'
      }, {
        title: "Use power strips efficiently",
        popularity: '7,703',
        amount: '$74'
      }, {
        title: "Turn off cooking equipment when is not in use",
        popularity: '4,002',
        amount: '$70'
      }, {
        title: "Replace old or broken walk-in cooler gaskets",
        popularity: '3,703',
        amount: '$43'
      }, {
        title: "Repair leaky faucets",
        popularity: '24,443',
        amount: '$30'
      }, {
        title: "Seal air leaks arround windows and doors",
        popularity: '1,031',
        amount: '$27'
      }];
    }
  ]);

  myApp.controller('RewardsCtrl', ['$scope', 'OPowerUserType',
    function($scope) {
      $scope.rewardsItems = [{
        title: "$50 Amazon.com Gift Card",
        img: "amazon-card.jpg",
        points: "1,000"
      }, {
        title: "$10 at Restaurant.com",
        img: "restaurant-card.jpg",
        points: 200
      }, {
        title: "$10 Tango Card",
        img: "tango-card.png",
        points: 200
      }, {
        title: "$10 Blue Dolphin",
        img: "bluedolphin-card.jpg",
        points: 200
      }];
    }
  ]);

  var ModalInstanceCtrl = function($scope, $modalInstance, $timeout) {

    $scope.ok = function() {
      $modalInstance.close($scope.selectedModal);
    };
    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
    var delaySend = function() {
      $scope.rebateSent = true;
    };
    $scope.sendRebate = function() {
      var rebateSent = $scope.rebateSent;
      if (rebateSent) {
        $modalInstance.close($scope.selectedModal);
      }
      $scope.sendingRebate = true;
      $timeout(delaySend, 2200);
    };
    $timeout( function() {
      $scope.animationReady = true;
    }, 600);
    $timeout( function() {
      $scope.pieReady = true;
    }, 2500);
  };

  // finish audit modal
  myApp.controller('auditModalCtrl', ['$scope', '$modal','$rootScope',
    function($scope, $modal,$rootScope) {
      $scope.shownAuditModal = $rootScope.shownAuditModal;
      $scope.open = function() {
          $rootScope.shownAuditModal = true;
          var modalInstance = $modal.open({
              templateUrl: 'partials/my-usage/audit-modal.html',
              controller: ModalInstanceCtrl,
              windowClass: "small audit-complete"
          });
          modalInstance.result.then(function (selectedItem) {
              $scope.selectedModal = selectedItem;
          });
      };
    }
  ]);

  //rebate modal
  myApp.controller('rebateModalCtrl', ['$scope', '$modal',
    function($scope, $modal) {
      $scope.open = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/ways-to-save/marketplace/rebate-modal.html',
          controller: ModalInstanceCtrl,
          windowClass: "small rebate"
        });
        modalInstance.result.then(function(selectedItem) {
          $scope.selectedModal = selectedItem;
        });
      };
    }
  ]);

  // projection rate tier modal
  myApp.controller('projectionModalCtrl', ['$scope', '$modal',
    function($scope, $modal) {
      $scope.open = function() {
        var modalInstance = $modal.open({
          templateUrl: 'partials/projection-modal.html',
          controller: ModalInstanceCtrl,
          windowClass: "small projection"
        });
        modalInstance.result.then(function(selectedItem) {
          $scope.selectedModal = selectedItem;
        });
      };
    }
  ]);

  myApp.controller('ServicesCtrl', ['$scope', 'OPowerUserType',
    function($scope){
      $scope.contractorDropdown = [];

      $scope.selectedIndex = 13;

      $scope.translatedText = {
        buttonDefaultText: 'Energy Savings Analysis'
      };

      $scope.checkboxSettingsContractors = {
        showCheckAll: false,
        showUncheckAll: false,
        closeOnSelect: true
      };

      //contractor dropdown
      $scope.contractorDropdownData = [{
          id: 11,
          label: "Financing"
        }, {
          id: 12,
          label: "Recycling Program"
        }, {
          id: 13,
          label: "Energy Savings Analysis"
        }
      ];
    }
  ]);

  //charts controller
  myApp.controller('chartsController', ['$scope', '$location',
    function($scope, $location) {

      var hash = $location.hash();
    //   var tierHash = $tier.hash();

      $scope.chartOptions = [{
        value: 'last-year',
        title: 'Last year'
      }, {
        value: 'similar-homes',
        title: 'Similar Homes'
      }, {
        value: 'weather',
        title: 'Weather'
      }];
      $scope.chartSelection = (hash)? hash : $scope.chartOptions[0].value;

      $scope.tierOptions = [{
          value: 'a-1-small',
          title: 'A-1 Small General Service'
      }, {
          value: 'a-1-time',
          title: 'A-1 Time of Use'
      }, {
          value: 'a-6-time',
          title: 'A-6 Time of Use'
      }];
      $scope.tierSelectionCurrent = $scope.tierOptions[2].value;
      $scope.tierSelection = $scope.tierOptions[0].value;

      $scope.rateMod = 0;
      $scope.rateOption = true;
      $scope.smbRate = [220, 215, 225, 250, 245, 295, 300, 280, 330, 305, 295, 415];
      $scope.smbRateProj = [200, 215, 225, 255, 250, 300, 305, 305, 330, 325, 315, 425];
      $scope.smbRateProjTier = [195, 200, 220, 245, 205, 225, 270, 265, 285, 270, 235, 225];
      $scope.smbRateComp = $scope.smbRateProj;
      $scope.addValue = function() {
          $.each($scope.smbRate, function (i, val) {
              $scope.smbRate[i] += 10;
          });
          $.each($scope.smbRateProj, function (i, val) {
              $scope.smbRateProj[i] += 8;
          });
          $.each($scope.smbRateProjTier, function (i, val) {
              $scope.smbRate[i] += 7;
          });
          console.log($scope.smbRate);
          $scope.rateOption = !$scope.rateOption;
      };
      $scope.lowerValue = function() {
$.each($scope.smbRate, function (i, val) {
    $scope.smbRate[i] -= 10;
});
$.each($scope.smbRateProj, function (i, val) {
    $scope.smbRateProj[i] -= 8;
});
$.each($scope.smbRateProjTier, function (i, val) {
    $scope.smbRate[i] -= 7;
});
          $scope.rateOption = !$scope.rateOption;
      };
      var darkBlue = "#0099cc";
      var lightBlue = "#71c5ef";
      var gray = "#888";
      var orange = "rgba(255,161,0, 1)";
      var green = "#8cb941";

    $scope.smbRateNowNoOption = [220, 215, 225, 250, 245, 295, 300, 280, 330, 305, 295, 415];
    //   console.log(smbRateNow);

      Chart.defaults.global.responsive = true;
      Chart.defaults.global.tooltips = false;
      Chart.defaults.global.tooltipFillColor = 'rgba(0,0,0,0.8)';
      Chart.defaults.global.tooltipFontColor = '#fff';
      Chart.defaults.global.tooltipTitleFontColor = "#fff";
      Chart.defaults.global.tooltipTitleFontFamily = "Arial";
      Chart.defaults.global.tooltipFontFamily = "Arial";
      Chart.defaults.global.scaleFontFolor = gray;
      Chart.defaults.global.tooltipFontSize = 14;
      Chart.defaults.global.tooltipYPadding = 16;
      Chart.defaults.global.tooltipXPadding = 16;
      Chart.defaults.global.tooltipCaretSize = 8;
      Chart.defaults.global.multiTooltipTemplate = "<%= value %> kWh";
      Chart.defaults.global.showTooltips = false;
      //   Chart.defaults.global.scaleFontSize = 12;
      // smb year to year comparasin

      var resUse = [12, 14, 13, 29, 28, 16, 14, 28, 27, 35];
      var oshaMain = [15494,
    14696,
    14459,
    12757,
    12789,
    13334,
    11860,
    14159,
    13595,
    14939,
    17121,
    19143
  ];
      var osha3rd =  [9823,
9673,
8876,
7391,
6778,
7095,
6531,
8221,
8201,
9501,
9971,
10881];
      var oshaYear = [12286,
11902,
11971,
11384,
11350,
11624,
10759,
11847,
11587,
12162,
11867,
12221 ];
      var oshaEmbarc = [6942,
7492,
5293,
5304,
3011,
5021,
4021,
6841,
7131,
9132,
8202,
8921];
      var oshaCow = [
        9253,
9041,
8196,
7160,
6295,
6744,
5737,
7656,
7439,
8991,
9320,
10121

      ];
      var smbMonths = [

"Aug",
"Sep",
"Oct",
"Nov",
"Dec",
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"

      ];

      $scope.smbData = {
        labels: smbMonths,
        datasets: [{
          label: "This Year",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: oshaMain
        }, {
          label: "Last Year",
          strokeColor: lightBlue,
          pointColor: lightBlue,
          pointStrokeColor: lightBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: lightBlue,
          data: oshaYear
        }]
      };

      //smb with 3rd locatin
      $scope.smbData3rd = {
        labels: smbMonths,
        datasets: [{
          label: "This Year",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: oshaMain
        }, {
          label: "Osha 3rd",
          strokeColor: orange,
          pointColor: orange,
          pointStrokeColor: orange,
          pointHighlightFill: "#fff",
          pointHighlightStroke: orange,
          data: osha3rd
        }]
      };
      // smb 3rd and Embarcadero compare
      $scope.smbDataEmbarcadero = {
        labels: smbMonths,
        datasets: [{
          label: "This Year",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: oshaMain
      },{
          label: "Osha 3rd",
          strokeColor: orange,
          pointColor: orange,
          pointStrokeColor: orange,
          pointHighlightFill: "#fff",
          pointHighlightStroke: orange,
          data: osha3rd
      },
      {
        label: "Osha Embarcadero",
        strokeColor: lightBlue,
        pointColor: lightBlue,
        pointStrokeColor: lightBlue,
        pointHighlightFill: "#fff",
        pointHighlightStroke: lightBlue,
        data: oshaEmbarc
      }]
      };
      // smb 3rd and Embarcadero  and cow hollow compare
      $scope.smbDataCow = {
        labels: smbMonths,
        datasets: [{
          label: "This Year",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: oshaMain
        }, {
          label: "Osha 3rd",
          strokeColor: orange,
          pointColor: orange,
          pointStrokeColor: orange,
          pointHighlightFill: "#fff",
          pointHighlightStroke: orange,
          data: osha3rd
      },
      {
        label: "Osha Embarcadero",
        strokeColor: lightBlue,
        pointColor: lightBlue,
        pointStrokeColor: lightBlue,
        pointHighlightFill: "#fff",
        pointHighlightStroke: lightBlue,
        data: oshaEmbarc
    },
    {
      label: "Osha Cow Hollow",
      strokeColor: green,
      pointColor: green,
      pointStrokeColor: green,
      pointHighlightFill: "#fff",
      pointHighlightStroke: green,
      data: oshaCow
    }]
      };


      $scope.resNeighborData = {
        labels: ["Mon 14", "Wed 16", "Fri 18", "Sun 20", "Tue 22", "Thu 24", "Sat 26", "Mon 28", "Wed 30", "Fri 1"],
        datasets: [{
          label: "You",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: resUse
        }, {
          label: "All similar homes",
          strokeColor: gray,
          pointColor: gray,
          pointStrokeColor: gray,
          pointHighlightFill: "#fff",
          pointHighlightStroke: gray,
          data: [18, 20, 18, 24, 25, 19, 21, 22, 39, 38]
      }, {
        label: "Efficient Homes",
        strokeColor: green,
        pointColor: green,
        pointStrokeColor: green,
        pointHighlightFill: "#fff",
        pointHighlightStroke: green,
        data: [6, 7, 6, 8, 7, 7, 9, 5, 13, 16]
      }]

      };

      $scope.resYearData = {
        labels: ["Mon 14", "Wed 16", "Fri 18", "Sun 20", "Tue 22", "Thu 24", "Sat 26", "Mon 28", "Wed 30", "Fri 1"],
        datasets: [{
          label: "You",
          strokeColor: darkBlue,
          fillColor: "rgba(0,153,204,0.0)",
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: resUse
        }, {
          label: "Last Year",
          strokeColor: lightBlue,
          fillColor: "rgba(113,197,239,0.0)",
          pointColor: lightBlue,
          pointStrokeColor: lightBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: lightBlue,
          data: [14, 15, 16, 22, 15, 14, 17, 23, 15, 18]
      }]};

$scope.resWeatherData = {
  labels: ["Mon 14", "Wed 16", "Fri 18", "Sun 20", "Tue 22", "Thu 24", "Sat 26", "Mon 28", "Wed 30", "Fri 1"],
  datasets: [{
    label: "You",
    strokeColor: darkBlue,
    pointColor: "#fff",
    pointStrokeColor: darkBlue,
    pointHighlightFill: darkBlue,
    pointHighlightStroke: darkBlue,
    data: resUse
}]};

$scope.weatherData = {
  labels: ["Mon 14", "Wed 16", "Fri 18", "Sun 20", "Tue 22", "Thu 24", "Sat 26", "Mon 28", "Wed 30", "Fri 1"],
  datasets: [{
    label: "You",
    strokeColor: "rgb(187, 119, 177)",
    fillColor: "rgba(187, 119, 177, 0.4)",
    pointColor: "rgb(187, 119, 177)",
    pointStrokeColor: "rgb(187, 119, 177)",
    pointHighlightFill: "rgb(187, 119, 177)",
    pointHighlightStroke: "rgb(187, 119, 177)",
    data: [70, 69, 70, 75, 79, 76, 74, 73, 92, 96]
}]};

$scope.weatherOptions = {
  bezierCurve: false,
  datasetFill: true,
  scaleShowGridLines: false,
  showScale: false,
  datasetStrokeWidth: 2,
  scaleBeginAtZero: true,
  pointDotStrokeWidth: 2,
  scaleOverride: true,
  scaleSteps: 5,
  scaleStepWidth: 10,
  scaleStartValue: 50,
  scaleLabel: "<%=value%> kWh",
  responsive: false,
  showTooltips: true,

  tooltipFillColor: "rgba(0,0,0,0.0)",
  tooltipTemplate: "<%= value %>°",
  tooltipFontColor:"rgb(187, 119, 177)"
 };
      $scope.lineOptions = {
        bezierCurve: false,
        datasetFill: false,
        scaleShowGridLines: false,
        datasetStrokeWidth: 2,
        scaleBeginAtZero: true,
        pointDotStrokeWidth: 2,
        tooltips: false,
        scaleLineWidth: 0
      };

      $scope.resLineOptions = {
        bezierCurve: false,
        datasetFill: false,
        scaleShowGridLines: false,
        datasetStrokeWidth: 2,
        scaleBeginAtZero: true,
        pointDotStrokeWidth: 2,
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        tooltips: false,
        scaleLabel: "<%=value%> kWh"
      };

      $scope.bizLineOptionsLocation = {
        bezierCurve: false,
        datasetFill: false,
        scaleShowGridLines: false,
        datasetStrokeWidth: 2,
        scaleBeginAtZero: false,
        pointDotStrokeWidth: 2,
        scaleLineWidth: 0,
        tooltips: false,
        scaleLabel: "<%=value%> kWh",
        animation: false
      };

      $scope.smbLineOptions = {
        bezierCurve: false,
        datasetFill: false,
        scaleShowGridLines: false,
        datasetStrokeWidth: 2,
        scaleBeginAtZero: false,
        pointDotStrokeWidth: 2,
        scaleLineWidth: 0,
        scaleLabel: "<%=value%> kWh",
        animation: true
      };


      $scope.bizRateOptions = {
        bezierCurve: false,
        datasetFill: false,
        scaleShowGridLines: false,
        datasetStrokeWidth: 2,
        scaleBeginAtZero: true,
        scaleOverride: true,
        scaleSteps: 5,
        tooltips: false,
        scaleStepWidth: 100,
        scaleStartValue: 0,
        scaleLabel: "$<%=value%>",
        pointDotStrokeWidth: 2
      };

      $scope.tierData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Projected costs with A-6 Small General TOU",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: $scope.smbRate
        }, {
          label: "Projected costs with A-6 Small General TOU",
          strokeColor: orange,
          pointColor: "#fff",
          pointStrokeColor: orange,
          pointHighlightFill: orange,
          pointHighlightStroke: orange,
          data: $scope.smbRateComp
        }]
      };

      $scope.tierDataTime = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Projected costs with A-6 Small General TOU",
          strokeColor: darkBlue,
          pointColor: darkBlue,
          pointStrokeColor: darkBlue,
          pointHighlightFill: "#fff",
          pointHighlightStroke: darkBlue,
          data: $scope.smbRate
        }, {
          label: "Projected costs with A-6 Small General TOU",
          strokeColor: orange,
          pointColor: "#fff",
          pointStrokeColor: orange,
          pointHighlightFill: orange,
          pointHighlightStroke: orange,
          data: $scope.smbRateProjTier
        }]
      };
      //   $scope.resPieData = [
      //   {value: 40, color: lightBlue, label:"Electric"},
      //   {value: 5, color: "#8CB941", label: "Always On Appliances"},
      //   {value: 30, color: "#eee", label:"Electric"},
      //   {value: 25, color: "#ccc", label:"Gas"},
      //   ];
      //   $scope.smbPieData = [
      //   {value: 40, color: "#ff961d", label:"Electric"},
      //   {value: 20, color: "rgba(255, 204, 0, 0.4)", label: "Always On Appliances"},
      //   {value: 15, color: "rgba(255, 204, 0, 0.2)", label:"Electric"},
      //   {value: 15, color: "rgba(140, 185, 65, 0.4)", label:"Gas"},
      //   {value: 10, color: "rgba(105, 200, 250, 0.4)", label:"Gas"},
      //   {value: 10, color: "rgba(105, 200, 250, 0.6)", label:"Gas"}
      //   ];
      //   $scope.pieOptions = {
      //       segmentShowStroke : false,
      //       animationSteps : 70,
      //       animationEasing : "easeInCirc",
      //
      //       maintainAspectRatio: false
      //
      //   };

      //   $scope.pieConfig = {
      //     title: '',
      //     tooltips: false,
      //     labels: false,
      //     mouseover: function() {
      //         // $("g:first-of-type > .arc").attr('class', 'arc un-grow');
      //         $("g:first-of-type > .arc").attr('style', 'transform: scale(1)');
      //         $(".arc.active").attr('class','arc');
      //         $(".arc:hover").attr('class','arc active');
      //         if( $('g:nth-of-type(2) > .arc').attr('class') == 'arc active' ) {
      //             // $scope.resPostPieContent.center = 50;
      //         }
      //         $scope.apply;
      //     },
      //
      //     mouseout: function() {},
      //     click: function() {},
      //     "innerRadius": 0,
      //     legend: {
      //       display: false,
      //       //could be 'left, right'
      //       position: 'right'
      //     }
      //   };

      $scope.resPrePieConfig = {
        title: '',
        tooltips: false,
        labels: false,
        mouseover: function() {
          // $("g:first-of-type > .arc").attr('class', 'arc un-grow');
          // $("g:first-of-type > .arc").attr('style', 'transform: scale(1)');
          $(".arc.active").attr('class', 'arc');
          $(".arc:hover").attr('class', 'arc active');
           if ($('g:nth-of-type(1) > .arc').attr('class') == 'arc active') {
               $scope.resPrePieContent = {
                  amount: 120,
                  message: 'Cooling',
                  based: ['electricity use', 'cooling use trends']
                };

           } else if ($('g:nth-of-type(2) > .arc').attr('class') == 'arc active') {
            $scope.resPrePieContent = {
              amount: 29,
           message: 'Baseload',
               based: ['electricity use', 'natural gas use']
             };
          } else if ($('g:nth-of-type(3) > .arc').attr('class') == 'arc active') {
              $scope.resPrePieContent = {
                 amount: 94,
                 message: 'Uncategorized electricity',
                 based: ['electricity use']
               };

           } else if ($('g:nth-of-type(4) > .arc').attr('class') == 'arc active') {
               $scope.resPrePieContent = {
                  amount: 84,
                  message: 'Uncategorized natural gas',
                  based: ['natural gas use']
                };
            }
        //     else if ($('g:nth-of-type(5) > .arc').attr('class') == 'arc active') {
           //
        //    } else if ($('g:nth-of-type(6) > .arc').attr('class') == 'arc active') {
           //
        //    } else if ($('g:nth-of-type(7) > .arc').attr('class') == 'arc active') {
           //
        //    } else if ($('g:nth-of-type(8) > .arc').attr('class') == 'arc active') {
           //
        //    } else if ($('g:nth-of-type(9) > .arc').attr('class') == 'arc active') {
           //
        //    }
          $scope.$apply();
        },

        mouseout: function() {},
        click: function() {},
        "innerRadius": 0,
        legend: {
          display: false,
          //could be 'left, right'
          position: 'right'
        }
      };
      $scope.resPostPieConfig = {
        title: '',
        tooltips: false,
        labels: false,
        mouseover: function() {
          // $("g:first-of-type > .arc").attr('class', 'arc un-grow');
          // $("g:first-of-type > .arc").attr('style', 'transform: scale(1)');
          $(".arc.active").attr('class', 'arc');
          $(".arc:hover").attr('class', 'arc active');
          if ($('g:nth-of-type(1) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 120,
                message: 'Cooling',
                sub: '~$21 more than',
                based: ['electricity use', 'cooling use trends', 'central air conditioning', 'thermostat settings', 'new cooling unit'],
                comp: 'more'
              };
              $scope.$apply();
          } else if ($('g:nth-of-type(2) > .arc').attr('class') == 'arc active') {
            $scope.resPostPieContent = {
              amount: 45,
              message: 'Electric appliances',
              sub: '~$2 more than',
              based: ['electricity use', 'electric appliances'],
              comp: 'more'
            };
            $scope.$apply();
          } else if ($('g:nth-of-type(3) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 39,
                message: 'Electronics',
                sub: '~$14 less than',
                based: ['electricity use', 'home electronics'],
                comp: 'less'
              };

          } else if ($('g:nth-of-type(4) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 13,
                message: 'Lighting',
                sub: 'About the same as',
                based: ['electricity use', 'indoor lighting', 'outdoor lighting'],
                comp: 'same'
              };

          } else if ($('g:nth-of-type(5) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 9,
                message: 'Baseload electric',
                sub: 'About the same as',
                based: ['electricity use', 'alwasy-on electric aplliances'],
                comp: 'same'
              };

          } else if ($('g:nth-of-type(6) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 75,
                message: 'Hot water',
                sub: '~$19 less than',
                based: ['natural gas use', 'hot water settings'],
                comp: 'less'
              };

          } else if ($('g:nth-of-type(7) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 13,
                message: 'Gas appliances',
                sub: '~$3 more than',
                based: ['natural gas use', 'gas appliances'],
                comp: 'more'
              };

          } else if ($('g:nth-of-type(8) > .arc').attr('class') == 'arc active') {
              $scope.resPostPieContent = {
                amount: 3,
                message: 'Baseload gas',
                sub: 'About the same as',
                based:['natural gas use', 'always-on natural gas appliances'],
                comp: 'same'
              };

          } else if ($('g:nth-of-type(9) > .arc').attr('class') == 'arc active') {

          }
          $scope.$apply();
        },

        mouseout: function() {},
        click: function() {},
        "innerRadius": 0,
        legend: {
          display: false,
          //could be 'left, right'
          position: 'right'
        }
      };
      $scope.smbPrePieConfig = {
        title: '',
        tooltips: false,
        labels: false,
        mouseover: function() {
          // $("g:first-of-type > .arc").css('transform', 'scale(1)');
          $(".arc.active").attr('class', 'arc');
          $(".arc:hover").attr('class', 'arc active');
          if ($('.smbPre g:nth-of-type(1) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 363,
                message: 'Cooking',
                based: ['natural gas use']
              };

          } else if ($('.smbPre g:nth-of-type(2) > .arc').attr('class') == 'arc active') {
            $scope.smbPrePieContent = {
              amount: 205,
              message: 'Hot water',
              based: ['natural gas use']
            };
        } else if ($('.smbPre g:nth-of-type(3) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 37,
                message: 'Baseload (pilot lights)',
                based: ['natural gas use']
              };

          } else if ($('.smbPre g:nth-of-type(4) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 65,
                message: 'Lighting',
                based: ['electricity use']
              };

          } else if ($('.smbPre g:nth-of-type(5) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 93,
                message: 'Cooling',
                based: ['electricity use', 'cooling use trends']
              };

          } else if ($('.smbPre g:nth-of-type(6) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 121,
                message: 'Baseload (refrigeration)',
                based: ['electricity use']
              };

          } else if ($('.smbPre g:nth-of-type(7) > .arc').attr('class') == 'arc active') {
              $scope.smbPrePieContent = {
                amount: 46,
                message: 'Electronic appliance',
                based: ['electricity use']
              };

          }
          $scope.$apply();

        },
        mouseout: function() {},
        click: function() {},
        "innerRadius": 0,
        legend: {
          display: false,
          //could be 'left, right'
          position: 'right'
        }
      };

      $scope.smbPostPieConfig = {
        title: '',
        tooltips: false,
        labels: false,
        mouseover: function() {
          $(".arc.active").attr('class', 'arc');
          $(".arc:hover").attr('class', 'arc active');
          if ($('.smbPost g:nth-of-type(1) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 335,
                message: 'Cooking',
                sub: '~$84 more than',
                based: ['natural gas use', 'cooking hours', 'cooking appliances'],
                comp: 'more'
              };

          }
          else if ($('.smbPost g:nth-of-type(2) > .arc').attr('class') == 'arc active') {
            $scope.smbPostPieContent = {
              amount: 186,
              message: 'Hot water',
              sub: 'About the same as',
              based: ['natural gas use', 'hot water settings', 'hot water heater'],
              comp: 'same'
            };
        } else if ($('.smbPost g:nth-of-type(3) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 27,
                message: 'Pilot Lights',
                sub: 'About the same as',
                based: ['natural gas use', 'always-on natural gas appliances'],
                comp: 'same'
              };

          } else if ($('.smbPost g:nth-of-type(4) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 121,
                message: 'Lighting',
                sub: '~$18 more than',
                based: ['electricity use', 'open hours', 'indoor lighting', 'outdoor lighting'],
                comp: 'more'
              };
          }
          else if ($('.smbPost g:nth-of-type(5) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 139,
                message: 'Cooling',
                sub: 'About the same as',
                based: ['electricity use', 'cooling use trends', 'central air conditioning', 'thermostat settings', 'new cooling unit'],
                comp: 'same'
              };

          }else if ($('.smbPost g:nth-of-type(6) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 102,
                message: 'Baseload (refrigeration)',
                sub: '~$25 less than',
                based: ['electricy use, always-on electric cooking appliances'],
                comp: 'less'
              };

          } else if ($('.smbPost g:nth-of-type(7) > .arc').attr('class') == 'arc active') {
              $scope.smbPostPieContent = {
                amount: 18,
                message: 'Electronics',
                sub: '~$43 less than',
                based: ['electricity use', 'business electronic'],
                comp: 'less'
              };
          }

          $scope.$apply();

        },
        mouseout: function() {},
        click: function() {},
        "innerRadius": 0,
        legend: {
          display: false,
          //could be 'left, right'
          position: 'right'
        }
      };
      $scope.resPrePieData = {
        series: [],
        data: [{
          x: "",
          y: [37],
          tooltip: "this is tooltip"
        }, {
          x: "",
          y: [4]
        }, {
          x: "",
          y: [27]
        }, {
          x: "",
          y: [32]
        }]
      };

      $scope.resPostPieData = {
        series: [],
        data: [{
          x: "",
          y: [37],
          tooltip: "this is tooltip"
        }, {
          x: "",
          y: [15]
        }, {
          x: "",
          y: [12]
        }, {
          x: "",
          y: [5]
        }, {
          x: "",
          y: [3]
        }, {
          x: "",
          y: [23]
        }, {
          x: "",
          y: [4]
        }, {
          x: "",
          y: [1]
        }, {
          x: "",
          y: [0]

        }]
      };

      $scope.smbPrePieData = {
        series: [],
        data: [{
          x: "",
          y: [39],
          tooltip: "this is tooltip"
        }, {
          x: "",
          y: [22]
        }, {
          x: "",
          y: [4]
        }, {
          x: "",
          y: [7]
        }, {
          x: "",
          y: [10]
        }, {
          x: "",
          y: [13]
      },
      {
        x: "",
        y: [5]
      } ]
      };
      $scope.smbPostPieData = {
        series: [],
        data: [{
          x: "",
          y: [36],
          tooltip: "this is tooltip"
        }, {
          x: "",
          y: [20]
        }, {
          x: "",
          y: [3]
        }, {
          x: "",
          y: [13]
        }, {
          x: "",
          y: [15]
        }, {
          x: "",
          y: [11]
      }, {
          x: "",
          y: [2]
      }]
      };
      // delayed function to animate first pie chart slice
      setTimeout(function() {
        $("g:first-of-type > .arc").attr('class', 'arc active');
      }, 1000);

    $scope.dropdownCheckbox = [];
    $scope.checkboxSettings = {
      showCheckAll: false,
      showUncheckAll: false,
      closeOnSelect: true
    };

    $scope.selectedIndex = (hash)? hash : 1;

    $scope.eventsModel = {
      onItemSelect: function(item) {
        console.log("item - " + item.id);
        $scope.selectedIndex = item.id;
      }
    };
    $scope.translatedText = {
      buttonDefaultText: 'Last year'
    };
    //overtime dropdown
    $scope.dropdownCheckboxData = [{
        id: 1,
        label: "Last Year"
      }, {
        id: 2,
        label: "Similar Businesses"
      }, {
        id: 4,
        label: "Weather"
      }, {
        id: 5,
        label: "Osha Tenderloin"
      }, {
        id: 6,
        label: "Osha Mission"
      }, {
        id: 7,
        label: "Osha 3rd St"
      }, {
        id: 8,
        label: "Osha Embarcadero"
      }, {
        id: 9,
        label: "Osha Cow Hollow"
      }, {
        id: 10,
        label: "Osha Glen Park"
      }
    ];


      //pie chart hover content
      $scope.resPostPieContent = {
        amount: 120,
        init: 'Cooling was 37% of your energy use last period',
        sub: '$21.34 more'
      };
      $scope.resPrePieContent = {
        amount: 120,
        init: 'Cooling Cost You $120 Last Month',
        sub: '$21.34 more',
        based: ['electricity use', 'natural gas use']
      };

      $scope.smbPostPieContent = {
        amount: 363,
        init: 'Cooking Equipment Cost You $363 Last Billing Period',
        sub: '$193.56 more'
      };
      $scope.smbPrePieContent = {
        amount: 363,
        init: 'Cooking Equipment Cost You $363 Last Billing Period',
        sub: '$193.56 more',
        based: ['business information', 'cooking & refrigeration info' ,'average restaurants in your area']
      };
      //this is for the overview, it just show a sample pie with no real data.
      $scope.samplePieData = [{
        value: 10,
        color: "#7AAE32"
      }, {
        value: 10,
        color: "#ABCF49"
      }, {
        value: 10,
        color: "#FCC224"
      }, {
        value: 10,
        color: "#FDE328"
      }, {
        value: 10,
        color: "#FA841E"
      }, {
        value: 10,
        color: "#59BBF8"
      }, {
        value: 10,
        color: "#1E8EF4"
      }];
    }
  ]);


}(window.angular, window.jQuery));
