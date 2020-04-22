/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const bcrypt = require('bcryptjs');

module.exports.bootstrap = async function(done) {

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  const admin = await User.findOne({Username:'admin1'});
  if (!admin) {
    await User.create({Username:'admin1', Password:await bcrypt.hash('hkbu123456', 10), role:'admin',ChiName:'管理員',EngName:'Administrator',Email:'kenny@admin.com',Date:new Date()});
    await User.create({Username:'admin2', Password:await bcrypt.hash('hkbu123456', 10), role:'admin',ChiName:'管理員',EngName:'Administrator',Email:'kennycheng@comp.hkbu.edu.hk',Date:new Date()});
    await User.create({Username:'coach1', Password:await bcrypt.hash('hkbu123456', 10), role:'coach',ChiName:'陳大文',EngName:'Coach',Email:'coach@coach.com',Date:new Date()});
    await User.create({Username:'coach2', Password:await bcrypt.hash('hkbu123456', 10), role:'coach',ChiName:'教練',EngName:'Coach',Email:'coach2@coach.com',Date:new Date()});
  }

  if (await Email.count() == 0) {
  await Email.createEach([
  {"title":"已成功報名","emailtitle":"已成功報名 %eventname%","emailcontent":"敬啟者﹕<P></P>閣下所報讀之%eventname%已被接納，敬請攜同收據於下列時間道體育館出席訓練班有關資料如下：<p></p>上課日期：%eventclassdate%<P></P>上課時間：%eventclasstime%<P></P>上課地點：%eventvenue%<P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會","emailtype":1},
  {"title":"暫列入候補名單", "emailtitle":"暫列入候補名單 %eventname%","emailcontent":"敬啟者﹕<P></P>本會已收到  閣下申請%eventname%的報名表，但該課程反應熱烈，申請暫列入侯補名單。<p></p>候補名單的申請有以下選擇﹕<br>1.   閣下可選擇繼續於候補名單，如有其他申請人退出，便有機會補上。<br>2.   閣下可通知本會轉讀其他課程，但需留意所轉讀之課程未必仍有空缺。 <P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會","emailtype":2},
  {"title":"已收到付款", "emailtitle":"已收到付款 %eventname%","emailcontent":"敬啟者﹕<P></P>本會已收到  閣下的支票，本會現正處理有關申請，請閣下耐心等待本會發出之確認信，最遲將於開班前兩星期收到通知。<P></P>如閣下未能收到任何通知，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會","emailtype":3},
  {"title":"由已成功報名名單改為候補名單", "emailtitle":"由已成功報名名單改為候補名單 %eventname%","emailcontent":"敬啟者﹕<P></P>本會已收到  閣下申請%eventname%的報名表，但該課程反應熱烈，改為暫列入候補名單。<p></p>候補名單的申請有以下選擇﹕<br>1.   閣下可選擇繼續於候補名單，如有其他申請人退出，便有機會補上。<br>2.   閣下可通知本會轉讀其他課程，但需留意所轉讀之課程未必仍有空缺。 <P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會","emailtype":4},
  {"title":"由候補名單改為已成功報名名單", "emailtitle":"由候補名單改為已成功報名名單 %eventname%","emailcontent":"<p>敬啟者﹕</p><p>閣下報讀之%eventname%付款詳情如下:&nbsp;</p><p>課程費用:%eventprice%&nbsp;</p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。</p><p>請最遲於開班前兩星期提交支票寄往香港郵政總局第1111 號信箱。支票抬頭請寫上「中國香港體操總會之付款」，否則將被取消資格。</p><p>中國香港體操總會</p>","emailtype":5},
  {"title":"付款詳情", "emailtitle":"%eventname%之付款詳情","emailcontent":"<p>敬啟者﹕&nbsp;</p><p>閣下報讀之%eventname%付款詳情如下:&nbsp;&nbsp;</p><p>課程費用:%eventprice%&nbsp;&nbsp;</p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。</p><p>請最遲於開班前兩星期提交支票寄往香港郵政總局第1111 號信箱。支票抬頭請寫上「中國香港體操總會之付款」，否則將被取消資格。</p><p>中國香港體操總會</p>","emailtype":6},,
]);

  }

  if (await News.count() == 0) {
    await News.createEach([
      {"category":"特別通告以及本會運動員及海外比賽消息", "startDate":new Date('2019-10-16'), "endDate":new Date("2020-10-16"), "content":"本會熱烈恭賀香港技巧體操隊員林曉勵、栗島晴楓在2019年10月7日至10月13日於烏茲別克舉辦之技巧體操亞洲錦標賽2019女子雙人決賽中以19.570分，取得第3名!", "link":"http://www.gahk.org.hk/doc/ACROasianchamp2019news.pdf"},
      {"category":"特別通告以及本會運動員及海外比賽消息", "startDate":new Date('2019-10-16'), "endDate":new Date("2020-10-16"), "content":"本會熱烈恭賀香港體操隊員石偉雄在2019年10月4日至10月13日於德國史特加舉辦之第49屆競技體操世界錦標賽男子跳馬決賽中以14.466分，取得第7名，這成績使其成功贏取東京奧運參賽資格！", "link":"http://www.gahk.org.hk/doc/Website_49thWorld%20Championships.pdf"},
      {"category":"特別通告以及本會運動員及海外比賽消息", "startDate":new Date('2019-09-24'), "endDate":new Date("2020-09-24"), "content":"恭喜香港健美體操隊在2019年9月10 日至15日於上海舉辦之2019年全國健美操聯賽第四站取得優異成績。 運動員葉慧雯、吳倩儀、吳浩嵐、胡栢賢及李泳怡於成人組精英組五人操進入決賽；葉慧雯、吳倩儀及吳浩嵐更以第七名的成績晉級決賽，成續優異。", "link":"http://www.gahk.org.hk/doc/website_AERShanghai.pdf"},
    ]);
  }

  return done();
};
