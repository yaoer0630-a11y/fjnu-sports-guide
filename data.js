window.SPORTS_GUIDE = {
  meta: {
    updated: "2026-08-20",
    title: "福师大体育支持指南",
    disclaimer: "非学校官方网站；用于信息服务与研究测试。"
  },

  comicStories: [
    {
      id: "rumor-scholarship",
      title: "保健班不能申请奖学金？",
      short: "先别急着信，规则要分开看。",
      image: "assets/generated/pig-rumor-scholarship-rough_gpt-image-2.jpg",
      lead: "“加入保健班就一定不能申请奖学金”不能直接当作结论。课程成绩、体测免测和具体奖项的评审规则要分别核对。",
      sections: [
        { title: "漫画里的答案", items: ["保健体育是课程安排，奖学金或评优是另一套评审规则。", "福建师大《保健体育》办法提到，评优评先时对应学年课程成绩与体测成绩同时存在的择高选取。", "具体奖项仍以当年评审文件为准，网页不作绝对保证。"] }
      ], sourceIds: ["healthPolicy", "fitnessStandard"]
    },
    {
      id: "rumor-waiver",
      title: "免测就是保健班？",
      short: "两个手续，要分开办理。",
      image: "assets/generated/pig-rumor-waiver-rough_gpt-image-2.jpg",
      lead: "体测免测和保健体育有关联，但不是同一个手续。一个是体测例外申请，一个是课程安排。",
      sections: [
        { title: "漫画里的答案", items: ["申请保健体育后，仍要按学校要求另行填写体测免测申请。", "是否免测、材料怎么交、何时截止，以当学期体测通知和系统提示为准。"] }
      ], sourceIds: ["healthPolicy", "fitnessStandard", "fitnessSystem"]
    },
    {
      id: "rumor-help",
      title: "运动不舒服还要坚持？",
      short: "先停下，再找老师或医务人员。",
      image: "assets/generated/pig-emergency-help-rough_gpt-image-2.jpg",
      lead: "体育课或课外活动中出现明显不适时，先停止活动并求助，不用为了完成次数硬撑。",
      sections: [
        { title: "漫画里的答案", items: ["胸痛、晕厥、明显呼吸困难、意识异常或急性损伤时，立即停止并拨打120。", "同时联系现场教师、同学或校方应急人员。", "非紧急问题再联系任课教师、学院辅导员或校医院。"] }
      ], sourceIds: ["whoActivity"]
    },
    {
      id: "story-adjust",
      title: "动作做不了就不能上课？",
      short: "可以先沟通，再调整动作和负荷。",
      image: "assets/generated/pig-class-adjustment-rough_gpt-image-2.jpg",
      lead: "动作做不了不等于完全不能参与课堂。教师可以围绕相同学习目标，调整动作形式、负荷或参与方式。",
      sections: [
        { title: "漫画里的答案", items: ["先说明自己当前可以做什么、哪些动作需要避免。", "教师可依据学生身体状况开展分类教学和个别辅导。", "具体调整不能替代医学判断；出现明显不适时应停止活动并求助。"] }
      ], sourceIds: ["moeStandard", "healthPolicy"]
    }
  ],

  sources: {
    moeStandard: {
      title: "教育部《高等学校体育工作基本标准》",
      issuer: "教育部",
      date: "2014-06-11",
      url: "https://www.moe.gov.cn/srcsite/A17/moe_938/s3273/201406/t20140612_171180.html",
      status: "官方已核验"
    },
    fitnessStandard: {
      title: "国家学生体质健康标准（2014年修订）—节选",
      issuer: "福建师范大学体育科学学院转载国家标准",
      date: "2014-09-28",
      url: "https://tky.fjnu.edu.cn/21/51/c10998a205137/page.htm",
      status: "官方已核验"
    },
    healthPolicy: {
      title: "福建师范大学《保健体育》课程管理办法（师大教〔2024〕30号）",
      issuer: "福建师范大学教务处",
      date: "2024-06-14",
      url: "https://jwc.fjnu.edu.cn/d5/32/c18641a447794/page.htm",
      status: "官方正文已核验"
    },
    healthForm: {
      title: "福建师范大学学生体育保健班申请表",
      issuer: "福建师范大学校医院",
      date: "2018-09-07",
      url: "https://sdyy.fjnu.edu.cn/4e/37/c12387a216631/page.htm",
      status: "官方页面已核验"
    },
    healthProcess: {
      title: "学生办理体育保健班流程",
      issuer: "福建师范大学校医院",
      date: "2019-10-16",
      url: "https://sdyy.fjnu.edu.cn/4e/55/c11959a216661/page.htm",
      status: "官方页面已核验"
    },
    fitnessSchedule: {
      title: "关于福建师范大学2025-2026学年学生体质健康测试安排的通知",
      issuer: "福建师范大学体育科学学院",
      date: "2025-2026学年",
      url: "https://tky.fjnu.edu.cn/82/5f/c10998a426591/page.htm",
      status: "上一学年官方通知"
    },
    fitnessBooking: {
      title: "2025-2026学年第一学期体质测试预约说明",
      issuer: "福建师范大学体育科学学院",
      date: "2025-2026学年第一学期",
      url: "https://tky.fjnu.edu.cn/82/66/c10998a426598/page.htm",
      status: "上一学期官方说明"
    },
    fitnessSystem: {
      title: "福建师范大学体质测试系统",
      issuer: "福建师范大学",
      date: "持续更新",
      url: "https://tcxt.fjnu.edu.cn",
      status: "校内系统；可能需要校园网"
    },
    wiki: {
      title: "福建师范大学Wiki：体测、校园跑与保健班",
      issuer: "非官方学生Wiki",
      date: "页面持续更新",
      url: "https://fjnu.nekoark.com/study/physical-fitness/",
      status: "经验参照；用户已初步核对"
    },
    teacherDirectory: {
      title: "福建师范大学体育科学学院教师队伍",
      issuer: "福建师范大学体育科学学院",
      date: "持续更新",
      url: "https://tky.fjnu.edu.cn/jsdw_11073/list.htm",
      status: "官方目录"
    },
    weightGuide: {
      title: "体重管理指导原则（2024年版）",
      issuer: "国家卫生健康委员会",
      date: "2024年版",
      url: "https://www.nhc.gov.cn/ylyjs/zcwj/202412/75cb79c171c94def9e768193e65484f7/files/1736390749000_59785.pdf",
      status: "官方文件"
    },
    whoActivity: {
      title: "身体活动实况报道",
      issuer: "世界卫生组织",
      date: "2024-06-26",
      url: "https://www.who.int/zh/news-room/fact-sheets/detail/physical-activity",
      status: "官方健康科普"
    },
    comprehensiveAssessment: {
      title: "关于印发《福建师范大学学生综合素质测评规定》的通知",
      issuer: "福建师范大学学生工作部（处）",
      date: "2022-02-24",
      url: "https://stu.fjnu.edu.cn/cc/1d/c5741a314397/page.htm",
      status: "学校官网正式文件；师委学工〔2022〕5号"
    },
    wikiAssessment: {
      title: "福建师范大学Wiki：综合测评与校园活动经验",
      issuer: "非官方学生Wiki",
      date: "页面持续更新",
      url: "https://fjnu.nekoark.com/study/choose/",
      status: "经验参照；不能替代学院测评细则"
    }
  },

  homeServices: [
    "fitness-waiver", "health-class", "fitness-booking", "fitness-score",
    "campus-run", "venues", "teacher-support", "activities", "science-exercise", "emergency", "feedback"
  ],

  alerts: [
    { icon: "calendar-days", title: "保健体育申请窗口", summary: "2026年9月1日至9月23日，逾期不予办理。", serviceId: "health-class" },
    { icon: "file-warning", title: "申请材料存在版本差异", summary: "群通知与申请表要求不完全一致，提交前向学院或承办点确认。", serviceId: "health-class" },
    { icon: "badge-alert", title: "2026-2027学年体测安排", summary: "尚未录入正式通知；当前预约规则仅可参考上一学年文件。", serviceId: "fitness-booking" }
  ],

  services: [
    {
      id: "feedback",
      title: "留言反馈",
      category: "反馈",
      icon: "message-square-plus",
      status: "匿名问卷",
      summary: "告诉我们你需要哪些体育支持信息。",
      href: "https://v.wjx.cn/vm/tqTVLMc.aspx",
      kicker: "学生需求反馈",
      lead: "点击进入问卷星，反馈你在保健体育、体测、大学体育、校园跑、场馆或其他体育事项中遇到的问题。",
      sections: [
        { title: "填写前请知道", items: ["问卷用于了解学生体育信息需求和网站使用感受。", "不需要填写诊断证明、病历、身份证号等敏感信息。", "紧急身体不适请先联系现场教师、校医院或拨打120，不要等待问卷回复。"] }
      ]
    },
    {
      id: "activities",
      title: "课余活动",
      category: "支持指南",
      icon: "layers-3",
      status: "活动信息参照",
      summary: "校园跑、校运会、社团和适合自己的课外运动。",
      kicker: "学校体育支持",
      lead: "把校园体育活动集中到一个入口。活动安排以学校当学期通知为准，学生应根据自己的身体情况选择参与方式。",
      sections: [
        { title: "校园活动", items: ["校园跑、体育社团、校运会和课外锻炼的入口与注意事项。", "具体报名时间和活动名单请以学校、学院或社团正式通知为准。"] },
        { title: "怎么选择", items: ["久未运动或关节不适，可先从短时间步行、拉伸或低冲击活动开始。", "跑跳、对抗或长时间耐力活动是否适合自己，应先咨询校医院或任课教师。", "本站不根据疾病名称开具运动处方，只提供一般安全提示。"] },
        { title: "信息来源", items: ["学生Wiki的校园活动页面仅作经验参照，不能替代学校正式通知。"] }
      ],
      sourceIds: ["wiki", "whoActivity"]
    },
    {
      id: "fitness-booking",
      title: "体测预约",
      category: "体测",
      icon: "calendar-check-2",
      status: "过往办理参考",
      summary: "预约入口、测试项目、时间与证件提醒。",
      kicker: "体质健康测试",
      lead: "2026-2027学年的正式安排尚未录入。以下为上一学年官方通知和学生经验参照，新的测试时间必须以体育科学学院公告为准。",
      sections: [
        { title: "常见入口", items: ["通过福Star APP进入“体质测试”，或在校园网环境打开体测系统。", "在预约模块选择室内、室外项目和具体时段。", "参加测试时携带身份证原件。"] },
        { title: "预约注意", items: ["室内项目和室外项目不要安排在同一个半天。", "是否允许取消、取消次数和提前时间，以当学期预约说明为准。", "旗山与仓山测试安排可能分阶段进行，不要默认可以跨校区。"] }
      ],
      warning: "新学年通知发布前，不要把上一学年的时间段直接当作2026-2027学年安排。",
      sourceIds: ["fitnessSchedule", "fitnessBooking", "fitnessSystem", "wiki"]
    },
    {
      id: "fitness-waiver",
      title: "体测免测",
      category: "体测",
      icon: "file-check-2",
      status: "国家政策+办理参考",
      summary: "免予执行体测的对象、材料、线上提交与审核。",
      kicker: "免予执行国家学生体质健康标准",
      lead: "体测免测与转入保健体育课程是两项相关但不同的手续。教育部允许因病或残疾学生凭医疗证明申请免测，校内具体材料与线上步骤以当学期通知为准。",
      sections: [
        { title: "国家政策怎么说", items: ["因病或残疾不能参加测试的学生，可提交暂缓或免予执行申请。", "须有医疗单位证明，并经学校体育教学部门核准。", "免测不是口头说明，也不是加入保健体育后自动完成。"] },
        { title: "过往办理参考", items: ["准备与申请原因相对应的证明材料。", "从体测系统下载申请表，完成学院相关签字盖章。", "在体测系统新增免测申请并上传规定格式材料。", "查看审核状态；未通过时按通知补充材料或参加测试。"] },
        { title: "保健体育学生", items: ["《保健体育》课程管理办法规定：修读学生填写免予测试申请后，可免予参加国家学生体质健康标准测试。", "因此课程资格和体测免测申请应分别确认，不要理解为“进班即自动免测”。"] }
      ],
      warning: "本站不接收诊断证明、残疾证明、病历、身份证或联系电话。请只在学校正式系统和线下规定部门提交。",
      sourceIds: ["moeStandard", "fitnessStandard", "healthPolicy", "fitnessSchedule", "fitnessSystem"]
    },
    {
      id: "makeup-test",
      title: "缓测与补测",
      category: "体测",
      icon: "history",
      status: "过往办理参考",
      summary: "正测未参加、不及格和毕业补测的处理方向。",
      kicker: "体质健康测试",
      lead: "缓测、普通补测和毕业补测不是同一件事。是否自动进入名单、开放哪些项目、补测时间均以当学期名单和通知为准。",
      sections: [
        { title: "普通缓补测", items: ["过往经验为：正测未参加且未获免测的学生，通常进入缓补测范围。", "正测未达到60分的学生可关注下一学期补测安排。", "补测项目、成绩取值和是否必须参加，应查看当次正式通知。"] },
        { title: "毕业补测", items: ["国家标准规定，毕业时测试成绩低于50分会影响毕业结论。", "毕业班补测通常单独发布，不要用普通补测时间代替。"] }
      ],
      warning: "当前公开材料不足以确认2026-2027学年的补测名单生成规则，网页不会替学生判断是否已进入名单。",
      sourceIds: ["fitnessStandard", "fitnessSchedule", "wiki"]
    },
    {
      id: "fitness-score",
      title: "体测成绩",
      category: "成绩",
      icon: "chart-no-axes-combined",
      status: "官方规则",
      summary: "项目权重、等级、附加分与毕业成绩。",
      kicker: "国家学生体质健康标准",
      lead: "大学组学年总分由标准分和附加分组成，最高120分。本站核算页按官方权重计算，但不替代体测系统成绩。",
      sections: [
        { title: "七项权重", items: ["BMI 15%、肺活量15%、50米跑20%。", "坐位体前屈10%、立定跳远10%。", "男生引体向上/女生1分钟仰卧起坐10%。", "男生1000米/女生800米20%。"] },
        { title: "等级", items: ["90.0分及以上：优秀。", "80.0-89.9分：良好。", "60.0-79.9分：及格。", "59.9分及以下：不及格。"] },
        { title: "附加分", items: ["男生引体向上、女生1分钟仰卧起坐可产生力量附加分，最高10分。", "男生1000米、女生800米可产生耐力附加分，最高10分。"] }
      ],
      sourceIds: ["fitnessStandard"]
    },
    {
      id: "graduate-score",
      title: "毕业成绩",
      category: "成绩",
      icon: "graduation-cap",
      status: "官方公式+经验参照",
      summary: "毕业学年与其他学年的加权计算。",
      kicker: "体测毕业成绩",
      lead: "国家标准规定：毕业当年学年总分占50%，其他学年总分平均分占50%。免测学年的校内排除方式以体测系统最终结果为准。",
      sections: [
        { title: "标准公式", items: ["有完整四年成绩：前三学年平均分×50% + 大四成绩×50%。", "毕业成绩达到50分及以上，满足国家标准中的体测毕业要求。"] },
        { title: "免测学年", items: ["非官方Wiki提供了忽略免测学年再计算的样例。", "该处理属于校内经验参照，网页计算结果不会替代学校认定。"] }
      ],
      sourceIds: ["fitnessStandard", "wiki"]
    },
    {
      id: "health-class",
      title: "保健体育申请",
      category: "保健体育",
      icon: "heart-pulse",
      status: "2026年通知",
      summary: "对象、材料、地点、转入与退出。",
      kicker: "保健体育 / 调适体育",
      lead: "2026年通知的办理时间为9月1日至9月23日。学校正式制度名称为《保健体育》，教学现场如使用“调适体育”等称谓，应以教务系统课程名称为准。",
      sections: [
        { title: "本次通知对象", items: ["大一、大二需要申请保健体育的学生。", "大三、大四需要补大学体育1-4学分的学生。"] },
        { title: "办理步骤", items: ["填写《福建师范大学学生体育保健班申请表》。", "办理校医院保健科医生签名和盖章。", "办理学院辅导员签名和学院盖章。", "在9月23日前到鸣华武术馆二楼提交。"] },
        { title: "我是否适合申请", items: ["正式办法面向身体存在体育练习障碍的普通本科生。", "列举情形包括肢体残疾、不宜剧烈运动的心脏疾病、气喘或肺功能障碍、明显肥胖、视网膜脱落或眼压问题、椎间盘滑脱等难康复骨科伤病，以及经医学诊断必须参加的其他严重疾病。", "疾病名称本身不能替代医学判断，最终须由三甲医院诊断、校医院保健科复核并明确建议修读。", "急性伤病通常先考虑普通体育课缓修；预计在学业年限内不能康复时再按办法申请。"] },
        { title: "正式制度要求", items: ["申请者须提供三甲医院疾病诊断证明，由校医院保健科复核并明确建议上《保健体育》课。", "书面申请一份交校医院保健科，一份交体育科学学院公共体育教研部。", "课程申请、普通体育课退选和体测免测是不同手续，需要分别确认。"] },
        { title: "课程、成绩与显示名称", items: ["学时、学分和成绩计取方式与普通体育课一致。", "制度规定课程最高分不超过90分，良好率原则上不超过班级人数15%。", "学校正式制度称《保健体育》；用户确认教务/成绩单实际显示为“调适体育”，不显示“保健班”。此展示名称仍应以本人教务系统当学期页面为准。", "常见低冲击练习和考核项目来自学生经验参照，不代表每个班级固定相同。"] },
        { title: "体测、校园跑与评优", items: ["修读课程后仍须另行填写体测免测申请，并非自动免测。", "校园跑是否免除在正式办法中没有直接写明，应向任课教师确认当学期规则。", "评优时课程成绩与体测成绩同时存在的，办法规定择高选取；具体奖项仍按当年评审文件。"] },
        { title: "隐私与是否会被歧视", items: ["“保健班”是日常称呼，不是本站对学生身份的标签。", "本站不公开申请名单、病情、诊断证明或个人健康资料。", "不能保证现实中绝不会发生不当对待；若遇到公开病情、侮辱或排斥，可先记录事实并联系任课教师、学院辅导员或相关管理部门。"] },
        { title: "加入或退出", items: ["已选普通体育课的学生，成功加入后需到410办公室联系大体教秘办理退出。", "身体恢复后退出：提交书面申请和校医院康复证明，在规定期限内交体育科学学院。"] },
        { title: "时间地点", items: ["办理窗口：2026年9月1日至9月23日。", "办公时间：9:00-12:00、14:00-17:00。", "承办地点：福建省残疾人体育研究指导中心（鸣华武术馆二楼）。", "联系人：刘强；电话：0591-22868273（仅福州本地号码可拨）。"] }
      ],
      warning: "群通知和申请表对诊断材料、副书记签名、学院公章、一式两份等要求存在表述差异，提交前须向学院或承办点确认。",
      sourceIds: ["healthPolicy", "healthForm", "healthProcess"]
    },
    {
      id: "course-content",
      title: "课程与考核",
      category: "保健体育",
      icon: "notebook-tabs",
      status: "制度+经验参照",
      summary: "课程性质、学分、成绩与常见教学内容。",
      kicker: "保健体育课程",
      lead: "《保健体育》是为身体存在练习障碍的普通本科生开设的适应性体育课程，与普通体育课的学时、学分和成绩计取一致。",
      sections: [
        { title: "正式规定", items: ["课程成绩分为不及格（60分以下）、合格（60-80分）、良好（80-90分）。", "良好率原则上不超过班级人数的15%，最高分不超过90分。", "正式制度名称为《保健体育》；用户确认教务/成绩单实际显示为“调适体育”，具体以本人系统页面为准。", "评优评先时，对应学年课程成绩与体测成绩同时存在的，择高选取；两学期平均分达到80分认定为良好。"] },
        { title: "常见内容（经验参照）", items: ["学生Wiki记录的常见内容包括普拉提、八段锦等低冲击练习。", "曾出现十六分钟走、坐位体前屈、深蹲、单脚站立、百次拍击等考核项目。", "具体动作和考核会随学年、教师与学生身体情况调整，不应固定承诺。"] },
        { title: "合理调整", items: ["学生可向任课教师说明运动限制和可参与方式。", "动作替代、负荷调整和考核替代应由教师依据课程要求和学校已确认信息决定。"] }
      ],
      sourceIds: ["healthPolicy", "wiki"]
    },
    {
      id: "campus-run",
      title: "校园跑",
      category: "课程",
      icon: "footprints",
      status: "学期规则待更新",
      summary: "跑区、有效条件、次数与调适体育学生处理。",
      kicker: "步道乐跑",
      lead: "校园跑的学期起止时间和次数每年可能变化。这里保留稳定操作问题，2026-2027学期次数必须等待正式通知。",
      sections: [
        { title: "稳定操作提醒", items: ["使用步道乐跑APP，在学校允许跑区内完成。", "单次里程、配速、打卡点、跑区占比和有效时段共同决定是否有效。", "一天通常只计一次有效跑步；具体条件以当学期体育课程通知为准。"] },
        { title: "保健体育学生", items: ["学生Wiki记录：修读调适/保健体育课程的学生通常不要求校园跑。", "《保健体育》课程管理办法正文未直接写校园跑，因此仍须查看任课教师和当学期大学体育考核说明。"] },
        { title: "常见跑区（经验参照）", items: ["旗山校区西区田径场、南区田径场。", "仓山校区长安山田径场、小操场。"] }
      ],
      warning: "不要发布或使用代跑、轨迹模拟等作弊方法。APP权限与个人信息设置请由学生自行审慎判断。",
      sourceIds: ["wiki"]
    },
    {
      id: "theory-test",
      title: "体育理论考试",
      category: "课程",
      icon: "book-open-check",
      status: "经验参照",
      summary: "大学体育（一）理论考试的常见方式与题库入口。",
      kicker: "公共体育理论",
      lead: "学生Wiki记录公共体育理论考试通常是大学体育（一）的组成部分。考试平台、时间、次数和分值应以当学期任课教师通知为准。",
      sections: [
        { title: "常见形式", items: ["通常通过步道乐跑APP线上作答。", "考试窗口、作答次数和限时由当学期通知确定。", "不要把往年题库当作当年考试承诺。"] }
      ],
      sourceIds: ["wiki"]
    },
    {
      id: "venues",
      title: "场馆导航",
      category: "地点",
      icon: "map-pinned",
      status: "具体场馆",
      summary: "鸣华武术馆、体测场地与校园跑场地。",
      kicker: "体育地点",
      lead: "按旗山、仓山校区整理具体体育场馆名称、用途和浏览器地图入口，不要求安装指定地图App。",
      sections: [
        { title: "保健体育申请地点在哪里？", items: ["2026年通知列示承办地点为旗山校区鸣华武术馆二楼的福建省残疾人体育研究指导中心。"] },
        { title: "体测常用场地有哪些？", items: ["旗山校区常见体测地点包括体训馆室内田径场、南区田径场；仓山校区常见地点包括综合体育馆和长安山田径场。具体以当学年通知为准。"] },
        { title: "地图打不开怎么办？", items: ["可复制完整地点名称到手机自带地图或微信位置搜索；本站不虚构未经核验的经纬度。"] }
      ],
      sourceIds: ["fitnessSchedule", "wiki"]
    },
    {
      id: "teacher-support",
      title: "找老师帮忙",
      category: "教师端",
      icon: "user-round-cog",
      status: "教师端",
      summary: "政策查询、调整记录、风险提示和部门转介。",
      kicker: "教师与辅导员",
      lead: "教师端只提供政策、教学和风险信息，不进行医学诊断，也不保存学生病历。",
      sections: [
        { title: "课堂决策", items: ["先确认学生已获批的课程安排和运动限制信息。", "围绕动作、负荷、参与方式和考核方式记录必要调整。", "出现超出课堂判断范围的情况，转介校医院或相关管理部门。"] },
        { title: "信息边界", items: ["教师只接收教学所必需的功能限制和注意事项。", "不在普通网站、群聊或个人设备传播诊断证明和详细病史。"] }
      ],
      sourceIds: ["moeStandard", "healthPolicy"]
    },
    {
      id: "science-exercise",
      title: "科学运动",
      category: "健康科普",
      icon: "scale",
      status: "一般健康教育",
      summary: "运动前准备、强度、恢复、减脂和常见误区。",
      kicker: "运动健康科普",
      lead: "科学运动不只等于减脂，还包括安全准备、合适强度、恢复和长期坚持。",
      sections: [
        { title: "从能长期坚持的活动开始", items: ["世卫组织强调：任何数量的身体活动都比完全不活动好。", "成年人可把每周至少150分钟中等强度活动作为一般参考，并逐步增加。", "每周安排至少2次主要肌群力量练习，有助于维持肌肉和日常功能。", "久坐学习时定时起身走动，身体活动不仅限于跑步。"] },
        { title: "减脂不是越快越好", items: ["不要用极端节食、断水、催吐或超量运动追求短期体重下降。", "体重会受水分、盐分、睡眠和生理周期影响，观察连续趋势比盯住单日数字更有意义。", "饮料、零食和夜宵中的能量容易被忽略，先记录再调整。"] },
        { title: "运动怎么选", items: ["步行、骑车、游泳、球类和力量训练都可以消耗能量，关键是身体允许并能持续。", "体重基数较大、关节疼痛或久未运动时，优先选择低冲击活动并逐步增加。", "特殊体质、心肺疾病、急性伤病或术后恢复学生，应先咨询校医院或专业人员。"] },
        { title: "停止运动并求助", items: ["运动时出现胸痛、明显呼吸困难、晕厥或接近晕厥。", "出现持续加重的关节疼痛、肿胀或运动后功能明显下降。", "存在进食障碍、持续极端节食或对体重产生强烈焦虑。"] }
      ],
      warning: "本栏目只提供一般健康教育，不诊断肥胖或疾病，不提供个体减重处方。",
      sourceIds: ["weightGuide", "whoActivity"]
    },
    {
      id: "emergency",
      title: "紧急求助",
      category: "安全",
      icon: "siren",
      status: "安全提示",
      summary: "运动中不适、急性损伤和联系路径。",
      kicker: "运动安全与求助",
      lead: "遇到突发不适先停止运动并求助。本站不替代急救、校医院或专业医疗判断。",
      sections: [
        { title: "立即停止并求助", items: ["胸痛、晕厥或接近晕厥。", "明显呼吸困难、意识异常、抽搐或症状快速加重。", "急性扭伤、明显肿胀、出血或无法负重。"] },
        { title: "怎么联系", items: ["危及生命或无法判断时拨打120，并联系现场教师、同学或校方应急人员。", "非紧急的课程和身体限制问题，可联系任课教师、学院辅导员或校医院。", "本站不展示未经核验的校医院电话号码；请以校园卡、校医院官网和当学期通知为准。"] },
        { title: "现场处理边界", items: ["不要强行坚持、不自行服药，也不要让同学代替本人作医学判断。", "保留发生时间、地点和经过，便于向教师或医务人员说明。"] }
      ],
      warning: "如果你现在正在胸痛、晕厥、严重呼吸困难或发生急性伤情，请立即拨打120，不要等待网页回复。",
      sourceIds: ["whoActivity"]
    },
    {
      id: "sources",
      title: "信息来源与边界",
      category: "说明",
      icon: "shield-check",
      status: "持续核验",
      summary: "区分官方政策、校内通知、经验参照和待核验信息。",
      kicker: "核验说明",
      lead: "本站将信息分成官方已核验、当学期通知、经验参照和待核验四类。Wiki内容可帮助发现问题，但不能替代学校正式文件。",
      sections: [
        { title: "不会展示的内容", items: ["虚构教师姓名、评分、培训经历和通过率。", "未经核验的无障碍设施、医学诊断和自动审批承诺。", "奖学金、保研和毕业资格的绝对保证。"] },
        { title: "更新原则", items: ["每学期优先更新申请窗口、体测安排、校园跑次数和考核要求。", "事实变化时保留来源、日期和核验状态。"] }
      ],
      sourceIds: ["moeStandard", "fitnessStandard", "healthPolicy", "fitnessSchedule", "wiki"]
    }
  ],

  faq: [
    { q: "我能申请体测免测吗？", keywords: ["免测", "能不能", "资格", "申请对象"], answer: "因病或残疾不能参加《国家学生体质健康标准》测试的学生，可以凭医疗单位证明向学校提出暂缓或免予执行申请；是否获批由学校体育教学部门按正式材料核准。", status: "国家政策", sourceIds: ["fitnessStandard", "moeStandard"], serviceId: "fitness-waiver" },
    { q: "申请体测免测需要哪些材料？", keywords: ["免测", "材料", "证明", "申请表"], answer: "国家政策要求医疗单位证明和学校审核。申请表、学院签章、上传格式及证明时限属于校内操作要求，必须以当学期体测通知和体测系统提示为准。", status: "国家政策+本学期通知", sourceIds: ["fitnessStandard", "fitnessSystem"], serviceId: "fitness-waiver" },
    { q: "过往体测免测怎么办理？", keywords: ["免测", "过往", "往年", "流程"], answer: "过往公开流程可概括为：从体测系统查看或下载材料要求，完成学院相关手续，在系统新增免测申请并上传材料，随后查看审核状态。它只能帮助理解流程，不能直接替代2026-2027学年通知。", status: "过往办理参考", sourceIds: ["fitnessSchedule", "fitnessSystem"], serviceId: "fitness-waiver" },
    { q: "本学期免测通知在哪里看？", keywords: ["免测", "本学期", "通知", "哪里看"], answer: "优先查看福建师范大学体育科学学院体质健康栏目、体测系统及学院辅导员转发的正式通知。本站尚未录入2026-2027学年新的免测截止时间，不沿用上一学年日期。", status: "本学期信息待确认", sourceIds: ["fitnessSystem", "fitnessSchedule"], serviceId: "fitness-waiver" },
    { q: "体测免测审核不通过怎么办？", keywords: ["免测", "审核不通过", "退回", "补材料"], answer: "先在体测系统查看退回原因，再按当学期通知补齐或更正材料；若系统没有说明，应联系学院辅导员或体测负责部门确认。本站不能代替学校判断材料是否有效。", status: "一般操作说明，具体要求待当学期确认", sourceIds: ["fitnessSystem", "fitnessSchedule"], serviceId: "fitness-waiver" },
    { q: "体测免测问题联系谁？", keywords: ["免测", "联系谁", "电话", "咨询"], answer: "课程与体测属于不同事项。免测问题优先通过当学期体测通知公布的联系方式、体测系统或学院辅导员咨询；保健体育申请可使用本站保健体育专题公布的承办电话。", status: "联系路径说明", sourceIds: ["fitnessSchedule", "fitnessSystem", "healthPolicy"], serviceId: "fitness-waiver" },
    { q: "2026年保健体育什么时候申请？", keywords: ["保健", "申请", "时间", "截止", "什么时候"], answer: "2026年通知列示：9月1日开始，9月23日截止，逾期不予办理。办公时间为9:00-12:00、14:00-17:00。", status: "2026年通知", sourceIds: ["healthPolicy"], serviceId: "health-class" },
    { q: "保健体育在哪里办理？", keywords: ["保健", "哪里", "地点", "鸣华", "办理"], answer: "2026年通知列示承办地点为福建省残疾人体育研究指导中心（鸣华武术馆二楼）。地图页可直接搜索该场馆。", status: "2026年通知", sourceIds: ["healthProcess"], serviceId: "venues" },
    { q: "申请保健体育需要什么材料？", keywords: ["保健", "材料", "申请表", "证明", "盖章"], answer: "正式制度要求三甲医院疾病诊断证明、校医院保健科复核并明确建议上《保健体育》课，再提交书面申请。2026年群通知还要求校医院和学院签字盖章。群通知与申请表细项存在差异，提交前需确认。", status: "正式制度+2026年通知", sourceIds: ["healthPolicy", "healthForm"], serviceId: "health-class" },
    { q: "保健体育就是调适体育吗？", keywords: ["调适", "调试", "保健体育", "课程名称", "一样"], answer: "学校2024年正式制度名称为《保健体育》。教学现场或教务系统若显示“调适体育”等称谓，应以当学期教务系统和课程通知为准。", status: "名称说明", sourceIds: ["healthPolicy"], serviceId: "course-content" },
    { q: "保健体育学分和普通体育一样吗？", keywords: ["保健", "学分", "学时", "普通体育", "成绩"], answer: "《保健体育》课程管理办法明确：与普通体育课的学时、学分和成绩计取一致，成绩单体现《保健体育》课程名称及成绩。", status: "官方文件", sourceIds: ["healthPolicy"], serviceId: "course-content" },
    { q: "保健体育最高多少分？", keywords: ["保健", "最高分", "90", "良好率", "成绩"], answer: "2024年管理办法规定：最高分不超过90分，课程成绩良好率原则上不超过班级总人数的15%。", status: "官方文件", sourceIds: ["healthPolicy"], serviceId: "course-content" },
    { q: "保健体育上什么内容？", keywords: ["保健", "上课内容", "普拉提", "八段锦", "考核"], answer: "正式管理办法没有固定教学项目。学生Wiki记录的常见内容包括普拉提、八段锦，以及十六分钟走、坐位体前屈、深蹲、单脚站立等考核，但具体内容会随学年、教师和学生身体情况调整。", status: "经验参照", sourceIds: ["healthPolicy", "wiki"], serviceId: "course-content" },
    { q: "加入保健体育后还要体测吗？", keywords: ["保健", "体测", "免测", "还要", "自动"], answer: "不是自动免测。管理办法规定，修读《保健体育》的学生填写免予测试申请后，才可免予参加国家学生体质健康标准测试。课程转入和体测免测应分别确认。", status: "官方文件", sourceIds: ["healthPolicy"], serviceId: "fitness-waiver" },
    { q: "保健体育还要校园跑吗？", keywords: ["保健", "校园跑", "乐跑", "跑步", "调适"], answer: "学生Wiki记录修读调适/保健体育课程的学生通常不要求校园跑，但2024年《保健体育》管理办法正文没有直接规定校园跑。请以当学期任课教师和大学体育考核通知为准。", status: "经验参照，待学期确认", sourceIds: ["healthPolicy", "wiki"], serviceId: "campus-run" },
    { q: "体测免测和保健体育是一回事吗？", keywords: ["免测", "保健", "一样", "区别", "一回事"], answer: "不是。保健体育是课程安排，体测免测是国家学生体质健康标准的例外申请。两者有关联，但需要分别办理和确认。", status: "规则解释", sourceIds: ["fitnessStandard", "healthPolicy"], serviceId: "fitness-waiver" },
    { q: "体测免测怎么申请？", keywords: ["免测", "怎么", "申请", "材料", "系统"], answer: "国家政策要求医疗证明和学校审核。过往校内流程为：从体测系统下载申请表、完成学院手续、在系统新增免测申请并上传规定材料、等待体测中心审核。2026-2027学年的材料格式和截止时间需等待正式通知。", status: "国家政策+过往办理参考", sourceIds: ["fitnessStandard", "fitnessSchedule", "fitnessSystem"], serviceId: "fitness-waiver" },
    { q: "免测会不会影响奖学金或评优？", keywords: ["免测", "奖学金", "评优", "保研", "影响"], answer: "不能作绝对保证。国家标准规定确实丧失运动能力并获免测的残疾学生仍可参加评优评奖；福建师大《保健体育》办法规定，评优评先时对应学年课程成绩与体测成绩同时存在的择高选取。具体奖项仍须查看当年评审文件。", status: "需逐项核对", sourceIds: ["fitnessStandard", "healthPolicy"], serviceId: "fitness-waiver" },
    { q: "体测有哪些项目，各占多少？", keywords: ["体测", "项目", "占比", "权重", "多少"], answer: "大学组权重：BMI 15%、肺活量15%、50米20%、坐位体前屈10%、立定跳远10%、力量项目10%、耐力跑20%。力量和耐力项目还各有最高10分附加分。", status: "官方标准", sourceIds: ["fitnessStandard"], serviceId: "fitness-score" },
    { q: "体测多少分及格？", keywords: ["体测", "及格", "优秀", "良好", "多少分"], answer: "90.0分及以上优秀，80.0-89.9分良好，60.0-79.9分及格，59.9分及以下不及格。", status: "官方标准", sourceIds: ["fitnessStandard"], serviceId: "fitness-score" },
    { q: "毕业体测成绩怎么算？", keywords: ["毕业", "体测", "怎么算", "公式", "50%"], answer: "国家标准公式是：毕业当年学年总分×50% + 其他学年总分平均分×50%。免测学年的具体排除方式以学校体测系统结果为准。", status: "官方公式", sourceIds: ["fitnessStandard"], serviceId: "graduate-score" },
    { q: "正测没参加会自动进入补测吗？", keywords: ["正测", "没参加", "补测", "缓测", "自动"], answer: "学生Wiki记录过往通常会将未正测且未获免测的学生纳入缓补测范围，但2026-2027学年名单规则尚未核验，请查看体育科学学院正式名单和通知。", status: "待本学年确认", sourceIds: ["wiki", "fitnessSchedule"], serviceId: "makeup-test" },
    { q: "体测在哪里预约？", keywords: ["体测", "预约", "福Star", "系统", "哪里"], answer: "过往可通过福Star APP的“体质测试”进入预约，也可在校园网环境打开体测系统。新学年入口变更以体育科学学院通知为准。", status: "过往办理参考", sourceIds: ["fitnessBooking", "fitnessSystem"], serviceId: "fitness-booking" },
    { q: "体测要带什么证件？", keywords: ["体测", "身份证", "证件", "带什么"], answer: "过往官方预约说明要求参加测试时携带身份证原件。新学年如有变化，以当次通知为准。", status: "过往官方说明", sourceIds: ["fitnessBooking"], serviceId: "fitness-booking" },
    { q: "校园跑一次要跑多少？", keywords: ["校园跑", "乐跑", "一次", "多少", "公里", "配速"], answer: "单次里程、配速、打卡点和跑区占比会随学期规则变化。参考站记录过男生2.0公里、女生1.6公里等条件，但2026-2027学期正式要求尚未录入，不能直接沿用。", status: "待本学年通知", sourceIds: ["wiki"], serviceId: "campus-run" },
    { q: "老师能根据身体情况调整动作吗？", keywords: ["老师", "教师", "调整", "动作", "身体情况", "替代"], answer: "教育部《高等学校体育工作基本标准》要求学校根据学生身体状况实施分类教学和个别辅导。具体动作、负荷和考核替代由任课教师结合学校已确认信息和课程要求决定。", status: "上位政策", sourceIds: ["moeStandard", "healthPolicy"], serviceId: "teacher-support" },
    { q: "网站会保存病历吗？", keywords: ["病历", "隐私", "诊断证明", "上传", "保存"], answer: "不会。本站不接收或保存诊断证明、病历、残疾证明、身份证和个人健康档案。办理材料只提交到学校正式系统或指定线下部门。", status: "隐私边界", sourceIds: [], serviceId: "sources" },
    { q: "减肥是不是只要跑步？", keywords: ["减肥", "减脂", "跑步", "饮食", "力量训练"], answer: "不是。减脂需要把饮食、身体活动、力量训练、睡眠和长期行为习惯一起考虑。步行、骑车、游泳、球类和力量训练都可以参与，关键是身体允许且能持续。", status: "一般健康教育", sourceIds: ["weightGuide", "whoActivity"], serviceId: "science-exercise" },
    { q: "每周运动多久比较合适？", keywords: ["每周", "运动多久", "150分钟", "运动量", "减脂"], answer: "世卫组织将成年人每周至少150分钟中等强度身体活动作为全球一般建议，并强调任何活动都比完全不活动好。特殊体质、伤病或疾病学生需要根据专业意见调整。", status: "世界卫生组织建议", sourceIds: ["whoActivity"], serviceId: "science-exercise" }
    ,{ q: "体育活动会影响综合素质测评吗？", keywords: ["综测", "综合素质", "体育活动", "文体分", "影响"], answer: "可能作为体育测评或活动记录的参考，但不能理解为参加一次活动就自动加分。具体认定由学校规定和学院细则执行。", status: "学校规定+学院审核", sourceIds: ["comprehensiveAssessment", "wikiAssessment"], serviceId: "comprehensive-assessment" }
    ,{ q: "参加校运会、院运会能加多少分？", keywords: ["校运会", "院运会", "加分", "奖励分", "综测"], answer: "不能直接给出统一分值。校运会、院运会或社团活动是否计入奖励分、需要什么证明以及分值上限，都以本学院综合素质测评细则和审核结果为准。", status: "学院细则待核对", sourceIds: ["comprehensiveAssessment", "wikiAssessment"], serviceId: "comprehensive-assessment" }
    ,{ q: "保健体育或调适体育学生如何参加体育测评？", keywords: ["保健体育", "调适体育", "体育测评", "综测", "特殊体质"], answer: "课程成绩、体测免测和综合素质测评是不同事项。请向辅导员、任课教师或学院测评负责老师确认课程成绩、体育活动认定和替代参与方式。", status: "需向学院确认", sourceIds: ["comprehensiveAssessment", "healthPolicy"], serviceId: "comprehensive-assessment" }
    ,{ q: "综合素质测评结果有异议怎么办？", keywords: ["综测", "异议", "申诉", "更正", "测评结果"], answer: "在学院规定的公示或申诉期限内，先联系辅导员或学院测评负责老师，说明具体项目并申请核对、更正。网页不能代替学院审核。", status: "学院办理", sourceIds: ["comprehensiveAssessment"], serviceId: "comprehensive-assessment" }
  ],

  venues: [
    { id: "minghua", campus: "旗山", name: "鸣华武术馆", purpose: "保健体育申请承办点：福建省残疾人体育研究指导中心（二楼）。", keyword: "福建师范大学旗山校区鸣华武术馆" },
    { id: "training", campus: "旗山", name: "体训馆室内田径场", purpose: "体测室内项目常用地点，具体开放以当学年通知为准。", keyword: "福建师范大学旗山校区体训馆" },
    { id: "south-track", campus: "旗山", name: "南区田径场", purpose: "50米、800/1000米等室外体测及校园跑参考地点。", keyword: "福建师范大学旗山校区南区田径场" },
    { id: "west-track", campus: "旗山", name: "西区田径场", purpose: "校园跑允许跑区经验参照。", keyword: "福建师范大学旗山校区西区田径场" },
    { id: "cangshan-gym", campus: "仓山", name: "综合体育馆", purpose: "仓山校区体测室内项目参考地点。", keyword: "福建师范大学仓山校区综合体育馆" },
    { id: "changan-track", campus: "仓山", name: "长安山田径场", purpose: "50米、800/1000米等室外体测及校园跑参考地点。", keyword: "福建师范大学仓山校区长安山田径场" },
    { id: "small-track", campus: "仓山", name: "仓山小操场", purpose: "校园跑允许跑区经验参照。", keyword: "福建师范大学仓山校区小操场" }
  ],

  teacherTools: [
    { icon: "users", title: "学生基本情况（演示）", text: "这里只展示信息结构，不接入真实学生名单或健康档案。", items: ["课程名称：调适体育（演示数据，待录入）", "学生人数：待教师或教务系统确认", "教学提示：只记录完成课堂所需的功能限制"] },
    { icon: "heart-pulse", title: "禁忌与注意事项", text: "按功能限制和课堂风险提示进行教学沟通，不依据疾病名称自行诊断。", items: ["先确认学生当前可以做什么、需要避免什么。", "不适、症状变化或超出课堂判断范围时，停止活动并转介。", "不在公开群聊传播诊断证明、病历或个人健康信息。"] },
    { icon: "landmark", title: "开课前政策与流程核对", text: "确认课程资格、体测免测和普通体育课退选是不同手续。", items: ["确认学生已进入正确课程名单。", "只接收与教学有关的功能限制和注意事项。", "不代替校医院判断申请资格。"] },
    { icon: "messages-square", title: "第一次沟通问题清单", text: "用功能问题代替追问病史，降低标签化。", items: ["哪些动作目前可以完成？", "哪些动作或强度需要避免？", "不适时希望怎样暂停和求助？", "是否已有校医院或医生明确注意事项？"] },
    { icon: "clipboard-pen-line", title: "课堂调整与替代案例", text: "围绕动作、负荷、参与方式和考核做最小必要调整。", items: ["跑跳受限：改为低冲击行走、上肢或坐姿练习。", "耐力受限：缩短持续时间、增加间歇并观察反应。", "单一动作不宜：保留同类学习目标，替换动作形式。", "案例只是教学思路，不能直接当作医学运动处方。"] },
    { icon: "file-check-2", title: "考核与课堂记录", text: "记录调整依据和实际完成情况，便于持续教学。", items: ["日期、课程目标和学生可参与方式。", "采用的动作、负荷或考核替代。", "课堂不适、暂停和转介情况。", "避免记录完整诊断、病历照片和无关隐私。"] },
    { icon: "triangle-alert", title: "风险红旗与转介", text: "出现超出课堂判断范围的症状时，停止相关活动并求助。", items: ["胸痛、晕厥或接近晕厥。", "明显呼吸困难、意识异常或症状持续加重。", "急性损伤、明显肿胀或无法负重。", "紧急情况先按学校应急要求处理；非紧急问题联系校医院、学院或相应管理部门。"] },
    { icon: "shield-check", title: "隐私最小化", text: "教师只掌握完成教学和风险判断所必需的信息。", items: ["不在公开群聊传播诊断证明。", "不公开学生名单、病情或课程身份。", "课程体验可匿名收集，不做未经授权的实名教师评分。"] },
    { icon: "book-marked", title: "科研与访谈辅助", text: "为论文和教学改进提供匿名工具，不输出医学结论。", items: ["政策快速查询和编码索引。", "匿名学生反馈问题维度。", "教师访谈提纲和课堂观察记录模板。", "资料使用前仍需按学校研究伦理和知情同意要求执行。"] },
    { icon: "clipboard-check", title: "线上考勤与课后反馈（演示）", text: "当前版本只提供表单结构，不保存真实打卡、反馈或学生身份。", items: ["考勤字段：日期、课程、是否到课（待接入正式系统）。", "课后反馈：运动负荷感受、是否出现不适、希望调整的内容。", "正式上线前需完成隐私、权限和学校管理流程确认。"] },
    { icon: "book-open", title: "体育教师政策查询", text: "集中查看分类教学、个别辅导和安全责任的公开原则。", items: ["可以依据学生身体状况实施分类教学和个别辅导。", "动作、负荷和考核调整应服务于课程目标并记录必要依据。", "不能在没有医学或学校确认信息时擅自作诊断或承诺结果。"] },
    { icon: "gauge", title: "课程设计强度测量", text: "用课程时长×课后主观用力感（RPE 0-10）做教学参考，不是医学结论。", items: ["示例：45分钟×RPE 4=180训练负荷单位。", "连续出现胸痛、晕厥、明显呼吸困难等情况，不用计算结果替代求助。", "特殊体质学生的强度调整须结合教师观察和专业意见。"] }
  ],

  experienceDimensions: [
    { title: "说明是否清楚", text: "课程规则、考核和调整能否提前说明。" },
    { title: "沟通是否尊重", text: "是否允许学生表达限制与参与意愿。" },
    { title: "调整是否可行", text: "动作、负荷和考核替代是否真正可执行。" },
    { title: "风险处理是否明确", text: "不适时能否暂停、转介并说明下一步。" }
  ],

  scoreItems: [
    { id: "bmi", label: "BMI单项得分", weight: 0.15 },
    { id: "vital", label: "肺活量单项得分", weight: 0.15 },
    { id: "sprint", label: "50米单项得分", weight: 0.20 },
    { id: "sitReach", label: "坐位体前屈得分", weight: 0.10 },
    { id: "jump", label: "立定跳远得分", weight: 0.10 },
    { id: "strength", label: "力量项目得分", weight: 0.10 },
    { id: "endurance", label: "耐力跑单项得分", weight: 0.20 }
  ]
};

// v8 内容补充：把校园生活中与学校体育直接相关的入口集中起来。
// 学生 Wiki 只作为经验参照，具体日期、收费和开放状态以当年通知或现场为准。
(function enrichV8Content(guide) {
  const addSource = (id, source) => { if (!guide.sources[id]) guide.sources[id] = source; };
  addSource("wikiEvents", {
    title: "福建师范大学Wiki：校园活动与运动会",
    issuer: "非官方学生Wiki",
    date: "页面持续更新",
    url: "https://fjnu.nekoark.com/live/event/",
    status: "学生经验参照；具体时间以当年通知为准"
  });
  addSource("wikiHospital", {
    title: "福建师范大学Wiki：医疗与心理服务",
    issuer: "非官方学生Wiki",
    date: "页面持续更新",
    url: "https://fjnu.nekoark.com/live/hospital/",
    status: "学生经验参照；开放时间以校方通知为准"
  });
  addSource("wikiEat", {
    title: "福建师范大学Wiki：校园餐饮",
    issuer: "非官方学生Wiki",
    date: "页面持续更新",
    url: "https://fjnu.nekoark.com/live/eat/",
    status: "学生经验参照；餐厅安排以现场为准"
  });
  addSource("wikiFacilities", {
    title: "福建师范大学Wiki：校园设施",
    issuer: "非官方学生Wiki",
    date: "页面持续更新",
    url: "https://fjnu.nekoark.com/service/facilities/",
    status: "学生经验参照；设备位置和状态以现场为准"
  });

  const addService = (service) => {
    const existing = guide.services.find((item) => item.id === service.id);
    if (existing) Object.assign(existing, service);
    else guide.services.push(service);
  };

  guide.homeServices = [
    "fitness-waiver", "health-class", "university-pe", "fitness-booking",
    "fitness-score", "campus-run", "activities", "nutrition", "venues",
    "mental-health", "emergency", "teacher-support", "science-exercise", "comprehensive-assessment", "feedback"
  ];

  addService({
    id: "university-pe", title: "大学体育", category: "课程", icon: "book-open-check",
    status: "课程说明+经验参照", summary: "大学体育（一）至（八）、校园跑和游泳考核。",
    kicker: "普通体育课程", lead: "《大学体育》面向体育科学相关专业以外的本科生。课程安排、学分和考核以教务系统及当学期通知为准。",
    sections: [
      { title: "大学体育（一）至（八）", items: ["学生Wiki记录：大学体育（一）至（八）分别对应第1至第8学期，每门0.5学分；该学分信息目前作为学生经验参照，具体以教务系统为准。", "大学体育（一）至（四）通常涉及模块选课，选课时间以当学期教务通知为准。", "大学体育（五）至（八）常见安排为校园跑或线上课程替代，比例以当学期课程要求为准。"] },
      { title: "校园跑和理论考试", items: ["学生Wiki记录：校园跑在大学体育（一）至（四）中占一定比例，大学体育（五）至（八）可能占主要比例；不要把经验规则直接当作本学期要求。", "公共体育理论考试被学生Wiki记录为大学体育（一）的一部分，具体考试时间和占比以课程通知为准。", "调适体育学生的校园跑要求需向任课教师确认，不能仅凭网页判断。"] },
      { title: "游泳考核", items: ["学生Wiki记录大学体育（四）可能包含游泳考核，地点和项目以当学期课程安排为准。", "有慢性皮肤疾病、慢性中耳炎或宗教信仰等情况的游泳替代说法属于学生经验参照，是否可用1500米跑替代必须向任课教师和教务部门确认。"] },
      { title: "调适体育的关系", items: ["保健体育/调适体育是身体存在体育练习障碍学生的课程安排，与普通大学体育不是同一个选课入口。", "是否需要退选普通体育、体测免测或调整校园跑，均要按相应流程分别确认。"] }
    ], sourceIds: ["healthPolicy", "wiki"]
  });

  addService({
    id: "nutrition", title: "饮食与运动", category: "生活支持", icon: "utensils",
    status: "一般健康教育", summary: "运动前后怎么吃、怎么补水和查找食堂。",
    kicker: "吃好喝好，才能稳定运动", lead: "饮食与补水是学校体育支持的生活基础。本站只提供一般信息，不根据疾病提供饮食处方。",
    sections: [
      { title: "运动前", items: ["临近运动时避免吃得过饱，可选择容易消化的主食和适量蛋白质。", "不要用含糖饮料代替日常饮水；天气炎热或出汗较多时要及时补水。"] },
      { title: "运动后", items: ["先补水、休息，再按日常饮食补充主食、蔬菜和蛋白质。", "不要把极端节食、快速减重或保健品当作运动成绩的捷径。"] },
      { title: "校园餐饮入口", items: ["旗山、仓山校区均有食堂和餐厅；福Star APP曾提供食堂人流量参考，是否可用以当前校园服务为准。", "过敏、特殊饮食或运动中出现不适时，先咨询校医院或专业人员。"] }
    ], sourceIds: ["wikiEat", "weightGuide"]
  });

  addService({
    id: "comprehensive-assessment", title: "综合素质测评", category: "学生事务", icon: "badge-check",
    status: "学校规定+经验参照", summary: "体育活动、综测与奖励分怎么认定？",
    kicker: "综合素质测评 / 文体分", lead: "综合素质测评不是单看一次比赛或一次打卡。体育、美育、劳育部分如何计分，要结合学校规定、学院细则和当学期审核结果。",
    sections: [
      { title: "它是什么", items: ["本科生综合素质测评由德育测评×20%、智育测评×65%、体育/美育/劳育测评×15%构成。", "体育、美育、劳育测评分通常按基础分+奖励分-扣分计算；基础分和奖励分上限以学校及学院细则为准。", "测评结果由学院审核，学生不能自行把参加活动直接换算成固定分数。"] },
      { title: "体育部分看什么", items: ["体育意识、运动行为与习惯。", "体质水平、体育技能和健康生活方式。", "参加学校、学院、年级、班级组织的体育活动情况。"] },
      { title: "活动和奖励分", items: ["校运会、院运会、体育社团、班级或年级活动、日常锻炼可能作为测评参考。", "无故不参加集体体育文化、艺术或劳动活动，可能按学院细则扣分。", "参加活动不等于自动加分；奖励分项目、证明材料和上限由学院审核确认。"] },
      { title: "调适体育学生", items: ["调适体育/保健体育、体测免测、综合素质测评、奖学金和评优是不同事项，不能混为一谈。", "特殊体质学生应向辅导员、体育教师或学院测评负责老师确认课程成绩、体育活动认定和替代参与方式。", "网页不公开病情，也不承诺免测或保健体育一定影响或不影响某项评奖。"] },
      { title: "结果和异议", items: ["非毕业班测评成果通常在当年8月31日前完成，毕业班通常在当年3月1日前完成；具体节点以学院通知为准。", "结果原则上在下一学年开学两周内公布。", "对分数或认定有疑问，先按学院规定期限向辅导员、班级评议组织或学院测评负责老师申请核对、更正或申诉。"] },
      { title: "研究生说明", items: ["研究生使用本人的学院研究生综合素质测评实施细则。", "本科生体育/美育/劳育15%的比例不能直接套用到研究生。"] }
    ], sourceIds: ["comprehensiveAssessment", "wikiAssessment"]
  });

  addService({
    id: "mental-health", title: "心理健康", category: "求助", icon: "brain",
    status: "服务信息参照", summary: "心理咨询预约、地址和紧急情况处理。",
    kicker: "心理健康支持", lead: "主动咨询不等于“有问题”。如果体育学习、身体状况或同伴压力让你困扰，可以使用学校心理健康服务。",
    sections: [
      { title: "咨询与预约", items: ["学生Wiki记录的开放及预约时段为周一至周日9:00-12:00、14:00-17:00、18:30-21:30，具体以心理中心通知为准。", "旗山预约电话：0591-22867242；仓山预约电话：0591-83456404。", "可通过心理健康信息化管理平台预约，页面不收集或保存个人心理资料。"] },
      { title: "现场地址（经验参照）", items: ["旗山：榕苑生活区百草园食堂三楼。", "仓山：26号楼三楼。", "楼栋和开放状态可能调整，出发前请以学校通知或电话确认。"] },
      { title: "需要立即帮助时", items: ["出现自伤风险、意识异常或其他紧急危险时，先拨打120或联系现场老师、辅导员和保卫人员。", "一般咨询可预约心理中心，不必等到问题变得严重才求助。"] }
    ], sourceIds: ["wikiHospital"]
  });

  const update = (id, changes) => { const item = guide.services.find((service) => service.id === id); if (item) Object.assign(item, changes); };
  update("activities", {
    summary: "校运会、院运会、社团招新和适合自己的课余运动。",
    lead: "校园体育活动不只有课堂。特殊体质学生同样有了解活动、咨询参与方式和申请合理调整的权益，是否参加及参加项目要结合身体情况和当年通知。",
    sections: [
      { title: "校运会（经验参照）", items: ["学生Wiki记录：校运会大约在每年11月初于东区田径场举行，通常持续约3天。", "校运会分专业组和非专业组，具体项目、报名和停课安排以当年通知为准。", "不能参加竞技项目的学生，也可以关注开幕式、志愿服务、观赛或其他安全参与方式。"] },
      { title: "院运会（经验参照）", items: ["学生Wiki记录：院运会大约在每年4至5月于西区田径场举行，通常持续约2天。", "项目规模和停课安排由学院通知决定；报名或参与前可先咨询辅导员、任课教师。"] },
      { title: "社团招新 / 百团大战", items: ["学生Wiki记录：统一社团招新通常在每年10月下旬周末于共青团广场（翠竹园餐厅旁）举行。", "体育社团、兴趣社团和志愿服务都可以先了解再选择，活动强度和参与方式以社团说明为准。"] },
      { title: "怎么选运动", items: ["久未运动或有关节不适，可先从步行、拉伸、低冲击练习开始。", "跑跳、对抗和长时间耐力活动是否适合自己，应先咨询校医院或任课教师。", "本站不根据疾病名称开具运动处方，也不承诺所有学生都能参加所有项目。"] }
    ], sourceIds: ["wikiEvents", "whoActivity"]
  });
  update("emergency", {
    summary: "运动中不适、校医院、AED、饮水、无障碍设施与120求助。",
    lead: "紧急情况先保证人身安全，再处理课程或请假手续。网页不保存求助记录，也不替代学校应急流程。",
    sections: [
      { title: "运动中出现危险症状", items: ["胸痛、晕厥、明显呼吸困难、意识异常、急性损伤或无法负重：立即停止活动，拨打120，并联系现场教师或同学。", "不要为了完成次数、打卡或比赛继续坚持。"] },
      { title: "校医院（经验参照）", items: ["旗山校医院：嘉树园餐厅旁；仓山校医院：长安山田径场旁。非上班时间通常仅开放急诊科室，具体以校医院通知为准。", "就诊可按学校要求携带校园卡、公费卡和病历本；不要把证件或病历上传到本站。"] },
      { title: "AED急救设备（位置参照）", items: ["学生Wiki据不完全统计，旗山校区桂苑12号楼底、花香园餐厅南门、西区田径场入口卫生间、东区田径场2号入口卫生间旁等位置曾设置AED。", "AED只能作为现场急救辅助，不能替代拨打120；设备位置、数量和可用状态以现场为准。"] },
      { title: "饮水与无障碍厕所（位置参照）", items: ["学院楼群每层、教学楼群低楼层常见免费饮水机，运动后可先到就近楼宇补水；设备状态以现场为准。", "学生Wiki记录知明2一层、致广一层等位置曾有无障碍厕所，但清单不完整，使用前请现场确认。", "这些设施用于应急便利和日常支持，不能替代校医院或急救处理。"] },
      { title: "非紧急问题", items: ["课程问题联系任课教师或辅导员，身体问题联系校医院，心理困扰联系心理健康指导中心。", "需要导航时，可打开场馆导航页搜索具体地点。"] }
    ], sourceIds: ["wikiHospital", "wikiFacilities"]
  });
  update("venues", { summary: "田径场、游泳馆、健身房、AED、饮水机和无障碍设施。" });

  guide.venues = [
    ...guide.venues,
    { id: "east-track", campus: "旗山", name: "东区田径场", purpose: "校运会和部分室外体育活动参考地点。", keyword: "福建师范大学旗山校区东区田径场" },
    { id: "school-hospital-qishan", campus: "旗山", name: "旗山校医院", purpose: "嘉树园餐厅旁；开放状态和就诊安排以校医院通知为准。", keyword: "福建师范大学旗山校医院" },
    { id: "school-hospital-cangshan", campus: "仓山", name: "仓山校医院", purpose: "长安山田径场旁；开放状态和就诊安排以校医院通知为准。", keyword: "福建师范大学仓山校医院" },
    { id: "psych-qishan", campus: "旗山", name: "心理健康指导中心（旗山）", purpose: "榕苑生活区百草园食堂三楼，地址为学生Wiki经验参照。", keyword: "福建师范大学旗山 百草园食堂" },
    { id: "psych-cangshan", campus: "仓山", name: "心理健康指导中心（仓山）", purpose: "26号楼三楼，地址为学生Wiki经验参照。", keyword: "福建师范大学仓山校区26号楼" },
    { id: "swimming", campus: "旗山", name: "旗山室外游泳馆", purpose: "李苑11号楼南约100米。过往收费参考：教学需要0元，师生单次约10元，具体以现场公告为准。", keyword: "福建师范大学旗山室外游泳馆" },
    { id: "fitness-room", campus: "旗山", name: "校内健身房", purpose: "翠竹园食堂/天兴超市三楼；开放和收费信息以现场公告为准。", keyword: "福建师范大学旗山 翠竹园食堂" },
    { id: "aed-qishan", campus: "旗山", name: "AED设备（位置参照）", purpose: "桂苑12号楼底、花香园餐厅南门、西区田径场入口卫生间、东区田径场2号入口等位置曾有设备，据不完全统计；状态以现场为准。紧急时先拨打120。", keyword: "福建师范大学旗山校区共青团广场" },
    { id: "water", campus: "旗山", name: "免费取水/饮水机（位置参照）", purpose: "学院楼群每层、教学楼群低楼层常见饮水机；可先询问楼宇管理人员，设备状态以现场为准。", keyword: "福建师范大学旗山校区笃行楼" },
    { id: "accessible-toilet", campus: "旗山", name: "无障碍厕所（位置参照）", purpose: "知明2一层、致广一层等位置曾有无障碍厕所，清单不完整，使用前请现场确认。", keyword: "福建师范大学旗山校区知明楼" }
  ];
})(window.SPORTS_GUIDE);
