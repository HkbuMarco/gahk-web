/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/form' },

  '/': 'NewsController.index',
  '/aboutus': { view: 'pages/aboutus/index' },
  '/aboutus/office-bearers': { view: 'pages/aboutus/bearers' },

  '/about-gymnastics': { view: 'pages/gymnastics/index' },
  '/about-gymnastics/rhythmic': { view: 'pages/gymnastics/rhythmic' },
  '/about-gymnastics/acrobatic': { view: 'pages/gymnastics/acrobatic' },
  '/about-gymnastics/trampoline': { view: 'pages/gymnastics/trampoline' },
  '/about-gymnastics/aerobic': { view: 'pages/gymnastics/aerobic' },
  '/about-gymnastics/general': { view: 'pages/gymnastics/general' },

  '/training': { view: 'pages/training' },
  '/coach': { view: 'pages/coach' },
  '/judge': { view: 'pages/judge' },
  '/competition': { view: 'pages/competition/1920' },
  '/competition/2019/20': { view: 'pages/competition/1920' },
  '/competition/2018/19': { view: 'pages/competition/1819' },
  '/competition/2017/18': { view: 'pages/competition/1718' },
  '/competition/2016/17': { view: 'pages/competition/1617' },
  '/competition/2015/16': { view: 'pages/competition/1516' },
  '/competition/2014/15': { view: 'pages/competition/1415' },
  '/competition/2013/14': { view: 'pages/competition/1314' },
  '/competition/2012/13': { view: 'pages/competition/1213' },
  //'/competition/2011/12': { view: 'pages/competition/1112' },
  //'/competition/2010/11': { view: 'pages/competition/1011' },
  //'/competition/2009/10': { view: 'pages/competition/0910' },
  //'/competition/2008/09': { view: 'pages/competition/0809' },
  //'/competition/2007/08': { view: 'pages/competition/0708' },
  //'/competition/2006/07': { view: 'pages/competition/0607' },
  //'/competition/2005/06': { view: 'pages/competition/0506' },
  //'/competition/2004/05': { view: 'pages/competition/0405' },
  '/contactus': { view: 'pages/contactus' },
  '/badge': { view: 'pages/badge' },
  '/downloads': { view: 'pages/downloads' },
  '/links': { view: 'pages/links' },
  




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝

  'GET /coach/update_coach/:id': 'CoachController.update_coach',
  'POST /coach/update_coach/:id': 'CoachController.update_coach',
  'GET /coach/coach_record': 'CoachController.coach_record',
  'POST /coach/coach_record': 'CoachController.coach_record',
  
  'GET /coach/coachform': 'CoachController.coachform',
  'POST /coach/coachform': 'CoachController.coachform',
  'GET /membership/confirm_Coach': 'CoachController.confirm',
  'POST /membership/confirm_Coach': 'CoachController.confirm',
  'GET /membership/coachformPreview': 'CoachController.coachformPreview',
  'POST /membership/coachformPreview': 'CoachController.coachformPreview',


  'GET /membership/admin/export.csv': 'MembershipController.csv',
  'GET /membership/chinesememberform_detail/:id': 'MembershipController.chineseMemberform_detail',
  'GET /membership/update_membership/:id': 'MembershipController.update_membership',
  'POST /membership/update_membership/:id': 'MembershipController.update_membership',
  '/membership/confirm_membership/:id' : 'MembershipController.confirm_membership',
  '/membership/canel_membership/:id' : 'MembershipController.canel_membership',

  'GET /athelete/athelete_detail/:id': 'AtheleteController.athelete_detail',
  'GET /athelete/athelete_record/export.csv': 'AtheleteController.csv',
  'GET /athelete/update_athelete/:id': 'AtheleteController.update_athelete',
  'POST /athelete/update_athelete/:id': 'AtheleteController.update_athelete',
  '/athelete/confirm_athelete/:id' : 'AtheleteController.confirm_athelete',
  '/athelete/canel_athelete/:id' : 'AtheleteController.canel_athelete',

//  'GET /coach/coach_record/export.csv': 'CoachController.csv',
  'GET /coach/coachform_detail/:id': 'CoachController.coachform_detail',
//  'GET /coach/update_coach/:id': 'CoachController.update_coach',
//  'POST /coach/update_coach/:id': 'CoachController.update_coach',
  '/coach/confirm_coach/:id' : 'CoachController.confirm_coach',
  '/coach/canel_coach/:id' : 'CoachController.canel_coach',
  '/coach/cancel_coach/:id' : 'CoachController.cancel_coach',
  '/coach/processing_coach/:id' : 'CoachController.processing_coach',
  '/index' : 'CoachController.coach_record',
  'GET /index': 'CoachController.coach_record',
  '/status' : 'CoachController.status',
  'GET /status': 'CoachController.status',


  '/index' : 'CoachController.coach_record',
  'GET /index': 'CoachController.coach_record',
  
  '/indexACRO' : 'CoachController.indexACRO',
  'GET /indexACRO': 'CoachController.indexACRO',

  '/indexAER' : 'CoachController.indexAER',
  'GET /indexAER': 'CoachController.indexAER',

  '/indexMAG' : 'CoachController.indexMAG',
  'GET /indexMAG': 'CoachController.indexMAG',

  '/indexRG' : 'CoachController.indexRG',
  'GET /indexRG': 'CoachController.indexRG',

  '/indexTRA' : 'CoachController.indexTRA',
  'GET /indexTRA': 'CoachController.indexTRA',

  '/indexWAG' : 'CoachController.indexWAG',
  'GET /indexWAG': 'CoachController.indexWAG',

  '/status' : 'CoachController.status',
  'GET /status': 'CoachController.status',


  'GET /user':'UserController.index',
  '/user/login':'UserController.login',
  '/user/update_user/:id': 'UserController.Update_User',
  'GET /user/detail/:id': 'UserController.detail',
  '/user/register': 'UserController.register',
  '/user/forgot-password': 'UserController.forgot',

  'GET /admin':'AdminController.index',

  'GET /admin/news':'AdminController.news_list',
  '/admin/news/detail':'AdminController.news_create',
  '/admin/news/detail/:id':'AdminController.news_detail',
  'DELETE /admin/news/detail/:id':'AdminController.news_delete',

  'GET /admin/email':'AdminController.email_list',
  'POST /admin/email/:id':'AdminController.email_detail',

  'GET /admin/user':'AdminController.user_list',
  'GET /coach/export_xlsx':'CoachController.export_xlsx',
  '/coach/export_xlsx': 'CoachController.export_xlsx',
  
};
