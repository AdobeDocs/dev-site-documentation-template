(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6muv":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("kYP4");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"reporting-api"},"Reporting API"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"/reports")," endpoint is the primary endpoint for reporting requests. In order to provide maximum flexibility,\nmany configuration options are available for requests."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"While the Adobe Analytics UI can help an analyst or digital marketer answer key questions, the Analytics API can\nautomate those answers by reporting to executive dashboards, custom reporting platforms, or tight Experience Cloud integrations.\nBecause the ",Object(a.b)("inlineCode",{parentName:"p"},"/reports")," endpoint uses the same API as the Analytics UI, you can configure it for many options."),Object(a.b)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),Object(a.b)("p",null,"Before you can use Analytics APIs, you need to obtain authentication and receive authorization. For more information,\nsee the ",Object(a.b)("a",r({parentName:"p"},{href:".."}),"Get Started guide."),"."),Object(a.b)("h2",{id:"reports-endpoint-description"},"/reports Endpoint description"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"/reports")," endpoint description is shown in our ",Object(a.b)("a",r({parentName:"p"},{href:"../../api"}),"Swagger UI"),". Use the Swagger UI to see endpoint summaries,\navailable methods, parameters, example values, models, and status codes, and to try out the API."),Object(a.b)("h2",{id:"best-practises"},"Best practises"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Please follow these guidelines when using Analytics APIs")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make multiple, smaller requests instead of a large, single request."),Object(a.b)("li",{parentName:"ul"},"Request data once and cache it."),Object(a.b)("li",{parentName:"ul"},"Do not poll for new data faster than a 30 minute interval."),Object(a.b)("li",{parentName:"ul"},"Pull historical data and increment it regularly instead of requesting the entire data set.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Discouraged practises")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Requesting as much data as possible in a single request."),Object(a.b)("li",{parentName:"ul"},"Requesting one year of data at day granularity everyday - just request the new day and merge it."),Object(a.b)("li",{parentName:"ul"},"Driving a web page with a site performance widget by making an API request every time the web page is called."),Object(a.b)("li",{parentName:"ul"},"Requesting a full year of day-level data every day to get a 12-months window.")),Object(a.b)("h2",{id:"time-series-reports"},"Time series reports"),Object(a.b)("p",null,"The Reports API includes the Time Series reports. These simple reports include information about the performance of a metric\n(or metrics) over a period of time."),Object(a.b)("p",null,"The following request example includes both a JSON message request body and a ",Object(a.b)("inlineCode",{parentName:"p"},"curl")," request for the ",Object(a.b)("strong",{parentName:"p"},"Page Views")," metric."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "rsid": "adbedocrsid",\n  "globalFilters": [\n    {\n      "type": "dateRange",\n      "dateRange": "2017-12-31T:00:00:00.000/2018-01-06T23:59:59.999"\n    }\n  ],\n  "metricsContainer": {\n    "metrics": [\n      {\n        "columnId": "0",\n        "id": "metrics/pageviews",\n        "filters": [\n          "0"\n        ] \n      }\n    ]\n  },\n  "rows": [\n    {\n      "value": "1"\n    },\n    {\n      "value": "2"\n    },\n    {\n      "value": "3"\n    }\n  ]\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The JSON message requests")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Page Views")," metric for the report suite ",Object(a.b)("inlineCode",{parentName:"li"},"adbedocrsid")," (line 12 and 2)."),Object(a.b)("li",{parentName:"ul"},"Time period From Dec. 31, 2017 00:00:00.000 - Jan. 06, 2018 23:59:59.999, using the report suite timezone ",Object(a.b)("inlineCode",{parentName:"li"},"variables/daterangeday granularity")," (line 26).\nWith seven days specified in this time period, you can expect seven numbers in the response."),Object(a.b)("li",{parentName:"ul"},"Sort response by ascending date, i.e. oldest to newest (line 28).")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The JSON response includes")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"rows")," section contains each report record. In the above example, you can see three rows, each with a ",Object(a.b)("inlineCode",{parentName:"li"},"value")," (lines 19-29)."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"value")," property contains the dimension value. Because the request includes a total of page views by day, the value of each row\nwill contain a date identifier for the day (e.g. line 25). For time series data, this identifier changes based on granularity. For example,\nif you request ",Object(a.b)("inlineCode",{parentName:"li"},"variables/daterangemonth")," instead, each value will contain a month/year identifier."),Object(a.b)("li",{parentName:"ul"},"You can also easily modify this example to get metrics for visits. Simply change the id property in the metrics section to metrics/visits (line 15).")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reporting-api-index-md-c9e1f50876c25d51e255.js.map