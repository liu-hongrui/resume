import "./index.css";

const projectInfo = [
  {
    companyName: "重庆智网科技信息通信分公司（英之豪）",
    projectName: "能源大数据平台",
    time: "2025.3 - 至今",
    techStack:
      "Vue3、TypeScript、Vite、Pinia、Vue-Router、Ant-Design、ECharts、ThreeJs、SWRV、Unocss、Less",
    S: "响应集团”能源一体化“战略，构建数据采集、监控、分析于一体的综合新数字化管理平台，应对城市及园区日益复杂的能源管理需求。",
    T: "负责平台前端技术选型，需求拆解，负责核心模块开发与团队管理，确保项目高质量交付。",
    A: "项目采用Monorepo架构,管理多个子应用（后台系统、城市大屏、园区大屏），实现代码高复用与协同开发，攻克复杂可视化难题，封装可复用组件库，提升开发效率。推动SWRV的引入，优化数据请求与缓存策略，实施代码分割，懒加载，虚拟滚动等优化措施。",
    R: "提升团队开发效率，显著缩短交付周期，首屏加载时间缩短20%，提高流畅度，平台成功上线，稳定服务与数字化部、发展部、营销部、安监部等核心部门。",
  },
  {
    companyName: "重庆智网科技信息通信分公司（英之豪）",
    projectName: "数据底座",
    time: "2025.3 - 至今",
    techStack: "React18、TypeScript、Redux Toolkit、AntV X6、Ant-Design",
    S: "为解决公司管理及资源分散构建的数据中台，实现统一接入、处理、分析和管理。",
    T: "实现从前端到后端的权限映射，登录认证、角色管理、接口权限控制。基于角色动态渲染菜单、按钮，确保系统安全性。",
    A: "开发API申请流程全链路功能，包括申请、审核等功能，基于业务封装独立的审批流程链路模块，实现审批流程的可视化管理。",
    R: "成功构建一个纵深防御的安全体系，有效保证数据资产在生命周期内的安全性，系统上线至今未出现权限泄露、数据泄露等安全事件，为上层数据提供可靠环境",
  },
  {
    companyName: "数字重庆大数据应用发展有限公司",
    projectName: "IRS运营管理系统",
    time: "2023.3 - 2025.3",
    techStack: "vue2、element-ui、vue-router、vuex、axios、viewUI、ECharts",
    S: "以业务场景为出发点，为用户提供简单、高效的操作界面，实现对业务的快速管理，提升用户满意度。",
    T: "场景化处理业务，拆分权限模块，实现细粒度的权限管理，确保系统安全性，增加单点登录功能，提升用户登录体验，针对工单场景，实现工单的快速处理。",
    A: "项目采用qiankong框架，独立部署与运行，开发了工单申请、工单处理、工单预警、工单导入导出功能。对接单点登录功能，配置权限路由。优化项目遗留问题，增量迭代新功能，提升系统稳定性和用户满意度。",
    R: "项目成功上线，为公司提供了高效、便捷的工单管理服务，提升了工单处理效率，减少了工单处理时间，为公司的业务发展提供了有力支持。",
  },
  {
    companyName: "数字重庆大数据应用发展有限公司",
    projectName: "一体化智能化公共数据平台",
    time: "2023.3 - 2025.3",
    techStack: "Vue3、Vite、Pinia、Vue-Router、Element-Plus、ECharts、Less",
    S: "集成应用、数据、云网、渝快证、渝快办、组件、感知板块数据采集、分析、可视化展示，为用户提供一站式数据服务的大屏可视化项目",
    T: "构建项目架构，负责核心模块开发与团队管理，确保项目高质量交付。",
    A: "负责搭建项目基础，封装板块样式组件，负责应用、数据、云网模块的开发,实现单点登录功能",
    R: "牵头急速开发并落地，压缩开发周期50%，高质量完成全流程开发并上线，积极响应甲方需求，支撑业务场景服务，项目获得甲方认可",
  },
  {
    companyName: "数字重庆大数据应用发展有限公司",
    projectName: "能力组件系统",
    time: "2023.3 - 2025.3",
    techStack: "Vue3、Vite、Pinia、Vue-Router、Element-Plus、ECharts、Less",
    S: "为支撑各个业务快速调用服用组件能力，搭建的统一的能力组件平台，打造标准化组件管理体系，提供标准API、SDK工具包，解决业务组件分散，接口不统一，继承效率低等问题。",
    T: "基于若依框架，搭建能力组件系统，负责项目的前端页面开发与模块功能实现。",
    A: "负责能力组件平台组件新增、组件上架、组件审批、消息中心等模块开发，实现组件上架模板功能，封装消息通知模块、对接消息推送功能，提供组件调用文档，为业务场景提供组件化服务。",
    R: "平台成功上线，配套网关系统，组件接入率提升60%，为业务场景提供了高效、便捷的组件调用服务，获得业务方好评。",
  },
  {
    companyName: "数字重庆大数据应用发展有限公司",
    projectName: "IRS数据看板",
    time: "2023.3 - 2025.3",
    techStack: "Vue2、Webpack、Vuex、Vue-Router、Element、ECharts、Less",
    S: "整合云网资源、数据资源、感知资源、组件资源、应用资源5大板块，为公司领导提供数据服务大屏可视化展示平台，为公司决策提供数据支持。",
    T: "负责项目功能模块开发，确保数据接入与展示的实时性和准确性，为用户提供及时、准确的数据分析服务。",
    A: "完成云网资源、应用资源、组件资源板块的开发任务，基于ECharts图表库，满足甲方需求，实现非标准特殊图表精准展示， 使用pdfjs库实现文件的预览功能。",
    R: "项目成功上线，数据展示直观性提升40%，高效支撑公司业务数据决策分析",
  },
  {
    companyName: "蜜梨网络科技有限公司",
    projectName: "销客管理系统",
    time: "2020.3 - 2023.3",
    techStack: "Vue2、Webpack、Vuex、Vue-Router、Element、Less",
    S: "针对资源、数据、报表、营销数据管理，包含用户数据、订单数据、营销数据等模块，提供后台管理系统数据支持。",
    T: "负责项目功能模块开发，实现数据的展示与交互。",
    A: "完成首页、用户管理、营销数据管理模块的开发，对接接口，实现数据的展示与交互。",
    R: "项目稳定运行，无重大故障，用户反馈良好，为公司提供了高效、便捷的管理服务。",
  },
];

function ProjectCard({ projectName }) {
  console.log(projectName);
  const project = projectInfo.find((item) => item.projectName === projectName);
  return (
    <>
      <div className="flex justify-between items-center mb-20px">
        <div className="text-18px color-[#000] font-700">
          {project.companyName}
        </div>
        <div className="text-14px color-[#666] font-400">{project.time}</div>
      </div>
      <div className="projectName">{project.projectName}</div>
      <div className="level3">项目描述</div>
      <div className="STAR">{project.S}</div>
      <div className="level3">技术栈</div>
      <div className="STAR">{project.techStack}</div>
      <div className="level3">核心职责</div>
      <div className="STAR">{project.T}</div>
      <div className="level3">行动</div>
      <div className="STAR">{project.A}</div>
      <div className="level3">成果</div>
      <div className="STAR">{project.R}</div>
    </>
  );
}

export default ProjectCard;
