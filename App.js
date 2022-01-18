import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: "Charlie",
//         job: "Janitor",
//       },
//       {
//         name: "Mac",
//         job: "Bouncer",
//       },
//       {
//         name: "Dee",
//         job: "Aspring actress",
//       },
//       {
//         name: "xuzexi",
//         job: "jobless",
//       },
//       {
//         name: "xuzecheng",
//         job: "Student",
//       },
//     ];

//     return (
//       <div className="container">
//         <Table charactersData={characters} />
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "xuzexi",
        job: "jobless",
      },
      {
        name: "xuzecheng",
        job: "Student",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    console.log(`删除前：${characters}`); //对象数组 [{...},{...},...{...}]

    this.setState({
      characters: characters.filter((character, i) => {
        if (i === index) console.log(`删除当前index: ${i}`);
        return i !== index;
      }),
    }); //更新状态，更新一遍就会调用render()重新渲染一遍组件
  };

  handleSubmit = (character) => {
    //前面的...是结构该类的characters状态属性,相当于[...[{...},{...}...{...}], {新加入}]
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state; //[]一个对象数组
    console.log("渲染一次"); //这里只要state被改变一次就会重新渲染一次
    return (
      // <div className="container">
      //   <Table
      //     characterData={characters}
      //     removeCharacter={this.removeCharacter}
      //   />
      // </div>

      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
