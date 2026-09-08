import "./App.css";
import photo from "./assets/photo.jpg";
import { Col, Row, Divider } from "antd";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">个人简历</h1>
          <p className="text-center text-sm text-gray-500">
            https://liu-hongrui.github.io/resume/
          </p>
        </div>
        <div className="flex items-center justify-center mb-20px">
          <div className="flex-1">
            <Row gutter={[24, 46]}>
              <Col span={8} className="whitespace-nowrap">姓名: 刘竑睿</Col>
              <Col span={8} className="whitespace-nowrap">性别: 男</Col>
              <Col span={8} className="whitespace-nowrap">电话: 18719803497</Col>
              <Col span={8} className="whitespace-nowrap">邮箱: 1638545312@qq.com</Col>
              <Col span={8} className="whitespace-nowrap">地址: 重庆</Col>
              <Col span={8} className="whitespace-nowrap">职业: 前端开发工程师</Col>
            </Row>
          </div>
          <div className="w-120px h-150px overflow-hidden border-2 border-gray-200 rounded shadow-sm">
            <img
              src={photo}
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mb-40px">
          <div className="Level2">技术技能</div>
          <Divider size="large" />
          <ul className="pl-20px">
            <li className="li-point">
              <p>精通HTML5，CSS3及JavaScript，具备扎实前端编程能力。</p>
            </li>
            <li className="li-point">
              <p>
                掌握VUE2/VUE3及其生态系统，包括Vue
                Router、Vuex、Element—Plus等，能够独立完成项目的开发，确保项目的质量和效率。
              </p>
            </li>
            <li className="li-point">
              <p>
                熟练使用Echarts,AntV等数据可视化库，拥有复杂数据大屏可视化项目的开发经验。
              </p>
            </li>
            <li className="li-point">
              <p>
                有丰富的SDK集成经验，能够独立完成第三方SDK的集成和配置，快速实现功能。
              </p>
            </li>
            <li className="li-point">
              <p>
                熟练运用Webpack、Vite前端构建工具搭建项目，配置项目基本依赖，如EsLint、Babel、Prettier等工具规范团队代码，保障代码质量。
              </p>
            </li>
            <li className="li-point">
              <p>
                参与过微前端项目开发，包括主/子应用的拆分，权限同步，路由与资源隔离。并增量迭代项目，确保项目的质量和效率。
              </p>
            </li>
            <li className="li-point">
              <p>
                有跨端开发经验，具备移动端、H5、uni-app、微信小程序开发能力。
              </p>
            </li>
            <li className="li-point">
              <p>
                熟练使用Git版本控制工具，确保项目代码的版本管理和团队协作。
              </p>
            </li>
            <li className="li-point">
              <p>
                具备一定的领导力，主动沟通与协调团队成员，并且Code Review，确保项目代码质量和团队合作效率。
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-40px">
          <div className="Level2">工作经历</div>
          <Divider size="large" />
          <ProjectCard projectName="音视频平台" />
          <ProjectCard projectName="主数据平台" />
          <ProjectCard projectName="能源大数据平台" />
          <ProjectCard projectName="数据底座" />
          <ProjectCard projectName="IRS运营管理系统" />
          <ProjectCard projectName="一体化智能化公共数据平台" />
          <ProjectCard projectName="能力组件系统" />
        </div>
      </div>
    </>
  );
}

export default App;
