import { Component } from "react";

export default class Ex05 extends Component {
  render() {
    return (
      <div className="bg-[#d7f2fe] w-[400px] h-[300px] flex items-center justify-center rounded-[10px]">
        <div className="w-[350px] h-[250px] bg-[#b7e8fd] relative rounded">
          <div className="text-[#0b71aa] text-2xl p-2">Relative parent</div>
          <div className="bg-[#0ea5e9] text-white font-bold flex items-center justify-center 
                          w-[140px] h-[40px] rounded-[8px] absolute bottom-2 left-2">
            Absolute child
          </div>
        </div>
      </div>
    );
  }
}
