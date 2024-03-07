import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {

  

  return (
   <div className="App">

    <div className="sidebar">

      <div className="upperSide">

        <div className="upperSideTop">
          <img src={gptLogo} alt="logo" className="logo" />
          <span className="brand">
            ChatGPT
          </span>
        </div>
        <button className="midBtn">
          <img src={addBtn} alt="add" className="addBtn" />
          New Chat
        </button>
        <div className="upperSideBottom">
          <button className="query">
            <img src={msgIcon} alt="query" />
            What is programming ?
          </button>
          <button className="query">
            <img src={msgIcon} alt="query" />
            How to use an Api ?
          </button>
        </div>

      </div>
      <div className="lowerSide">
        <div className="listItems">
          <img src={home} alt="" className="listItemsImg" />
          Home
        </div>
        <div className="listItems">
          <img src={saved} alt="" className="listItemsImg" />
          Saved
        </div>
        <div className="listItems">
          <img src={rocket} alt="" className="listItemsImg" />
          Upgrade to Pro
        </div>
      </div>
    </div>

    <div className="main">

      <div className="chats">

        <div className="chat">
          <img src={userIcon} className="chatimg" alt="" />
          <p className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque excepturi exercitationem suscipit inventore blanditiis illo ullam, sed quia natus?
          </p>
        </div>
        <div className="chat bot">
          <img src={gptImgLogo} className="chatimg" alt="" />
          <p className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque excepturi exercitationem suscipit inventore blanditiis illo ullam, sed quia natus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error perspiciatis laboriosam iste repudiandae facere eaque pariatur vero rerum explicabo natus, possimus delectus molestiae ea fugiat similique dicta! Nam modi quos voluptate, placeat velit nulla id amet suscipit quidem! Nobis, explicabo eos ipsam asperiores cupiditate, repellendus vero qui iste at ratione officia architecto. Voluptatibus corrupti iste nam? At ipsam error corrupti voluptas accusamus. Voluptates quasi officia optio tenetur fugit, quos doloribus veniam. Totam provident possimus perferendis vel alias numquam iusto error!
          </p>
        </div>

      </div>

      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder="Send a message" />
          <button className="send">
            <img src={sendBtn} alt="" />
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui delectus magnam iure voluptatem, totam repudiandae dolor fuga quaerat laudantium.
        </p>
      </div>

    </div>

   </div>
  );
}

export default App;
