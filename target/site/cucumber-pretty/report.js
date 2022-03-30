$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As user i want to login to the sauce",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 24862043700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal Login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as username and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user see dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 3316281300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 1340969000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 478147500,
  "status": "passed"
});
formatter.after({
  "duration": 1292402100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cusername\u003e\" as username and \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"\u003cerrorMassage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMassage"
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "password",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "password",
        "Epic sadface: Username is requir"
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10603226400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"asd\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 163941400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 34
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 359194900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 328178200,
  "status": "passed"
});
formatter.after({
  "duration": 1202029100,
  "status": "passed"
});
formatter.before({
  "duration": 9167300200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as username and \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 63632700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 342226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 45696600,
  "status": "passed"
});
formatter.after({
  "duration": 966139000,
  "status": "passed"
});
formatter.before({
  "duration": 11750848300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username is requir\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 338379100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 31
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 341207000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is requir",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 50716200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...: Username is requir[]\u003e but was:\u003c...: Username is requir[ed]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat step_definitions.LoginSteps.verifyErorMassage(LoginSteps.java:47)\r\n\tat ✽.Then User see error \"Epic sadface: Username is requir\" on login page(features/HomePage.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2766689000,
  "status": "passed"
});
formatter.uri("features/LoginSauce.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As user i want to login to the sauce",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 13975779500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal Login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as username and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user see dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 50746300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 448335700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 110150900,
  "status": "passed"
});
formatter.after({
  "duration": 840567800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cusername\u003e\" as username and \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"\u003cerrorMassage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMassage"
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "password",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "password",
        "Epic sadface: Username is required"
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6535729700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"asd\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 58259300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 34
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 393443500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 48409700,
  "status": "passed"
});
formatter.after({
  "duration": 828855700,
  "status": "passed"
});
formatter.before({
  "duration": 8149829200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as username and \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 65300500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 340631700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 44199900,
  "status": "passed"
});
formatter.after({
  "duration": 845365400,
  "status": "passed"
});
formatter.before({
  "duration": 7876151000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 139766500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 31
    }
  ],
  "location": "LoginSteps.inputCreadential(String,String)"
});
formatter.result({
  "duration": 320140300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErorMassage(String)"
});
formatter.result({
  "duration": 49371100,
  "status": "passed"
});
formatter.after({
  "duration": 970430200,
  "status": "passed"
});
});