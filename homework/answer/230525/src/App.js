import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ModalPage from "./pages/ModalPage";

function App() {
	// 초기에 보여줄 게시글
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "제목 1",
			content:
				"국가는 청원에 대하여 심사할 의무를 진다. 국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.",
		},
		{
			id: 2,
			title: "제목 22",
			content:
				"이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.",
		},
		{
			id: 3,
			title: "제목 333",
			content:
				"국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
		},
		{
			id: 4,
			title: "제목 4444",
			content:
				"모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다.",
		},
	]);
	return (
		<BrowserRouter>
			<Routes>
				{/* 홈 화면에서 게시글을 보여줘야 하므로 props로 전달 */}
				<Route path="/" element={<HomePage posts={posts} />} />
				{/* 작성 화면에서 게시글 배열에 새로운 게시글을 추가해야 하므로 props로 전달 */}
				<Route
					path="/create"
					element={<CreatePage posts={posts} setPosts={setPosts} />}
				/>
				<Route path="/modal" element={<ModalPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
