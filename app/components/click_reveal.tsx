'use client'

import clsx from 'clsx';
import React from "react";

type ClickRevealProps = {
  title: string,
  header: string,
  points: string[],
}

interface ClickRevealState {
  hide: boolean;
}

export default class ClickReveal extends React.Component<ClickRevealProps, ClickRevealState> {
  constructor(props: ClickRevealProps) {
    super(props);
    this.state = {hide: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // TODO: Fix the erratic movement!
    // this.setState({
    //   hide: !this.state.hide
    // })
  }

  render() {
    let sectionClass = clsx("bg-slate-400 px-6 pt-9 pb-6 rounded-lg text-white", {hidden: this.state.hide});

    return (
      <div className="content-start max-w-xl mt-5 col-span-1">
        <div className="inline my-4 py-2 px-4 rounded-lg text-white bg-orange-500 shadow-lg shadow-orange-500/50 hover:cursor-pointer hover:bg-orange-600 text-center" onClick={this.toggle}>{this.props.title}</div>

        <div className={sectionClass}>
          <h1 className="text-xl">{this.props.header}</h1>

          <ul className="list-disc m-4">
            {this.props.points.map(point => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}
