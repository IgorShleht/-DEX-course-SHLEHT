import React, { ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте классовый компонент ClassComponent
// который отрисует div с текстом ClassComponent
class ClassComponent extends React.Component {
  render() {
    return <div>ClassComponent</div>;
  }
}

//TODO: Создайте функциональный компонент FuncComponent
// который отрисует div с текстом FuncComponent
const FuncComponent = () => {
  return <div>FuncComponent</div>;
};

//TODO: Перепишите компоненты выше на prop text
// в text передайте старые значения
interface IProps {
  text: string;
}
class ClassComponentText extends React.Component<IProps> {
  render() {
    return <div>{this.props.text}</div>;
  }
}

const FuncComponentText = (props: IProps) => {
  return <div>{props.text}</div>;
};

//TODO: Создайте компонент ConditionalComponent
// который показыать GoogleLogoComponent по значению prop'a flag
interface IFlag {
  flag: boolean;
}

const ConditionalComponent = (props: IFlag) => {
  if (props.flag) {
    return <GoogleLogoComponent />;
  }
  return null;
};

//TODO: Создайте компонент ComponentWithFunction
// который будет принимать prop func и отправлять в div onClick
interface IFunc {
  func: () => void;
}

const ComponentWithFunction = (props: IFunc) => {
  return <div onClick={props.func}></div>;
};

//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div
const ComponentWithChild: React.FC = (props) => {
  return <div>{props.children}</div>;
};

//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent
interface IFunc2 {
  renderFunc: React.FC;
  RenderComponent: React.ComponentType;
}

const ComponentWithRenders = (props: IFunc2) => {
  return (
    <div>
      <div>{props.renderFunc({})}</div>
      <props.RenderComponent />
    </div>
  );
};

const func = () => alert("pressed");
const renderFunc = () => <div>renderFunc</div>;
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}
// Добавьте prop timer и выведите его
interface ITimer {
  timer: number;
}

//TODO: Добавьте component RenderAll
export const RenderAll: React.FC<ITimer> = ({ timer }) => {
  return (
    <div>
      <ClassComponent />
      <FuncComponent />
      <ClassComponentText text="ClassComponentText" />
      <FuncComponentText text="FuncComponentText" />
      <ConditionalComponent flag={true} />
      <ComponentWithFunction func={func} />
      <ComponentWithChild>
        <div>Child</div>
      </ComponentWithChild>
      <ComponentWithRenders
        renderFunc={renderFunc}
        RenderComponent={TestComponent}
      />
      <div>Timer: {timer}</div>
    </div>
  );
};
