import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <di className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>ノート</h1>
            <button>追加</button>
        </div>
        <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                <div classsName="sidebar-note-title">
                    <strong>タイトル</strong>
                    <button>削除</button>
                </div>
                <p>ノートの内容です。</p>
                <small>最後の修正日：xx/xx</small>
            </div>
        </div>
    </di>
  )
}

export default Sidebar