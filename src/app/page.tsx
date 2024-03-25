'use client'
import Header from "@/components/Header";
import MainAside from "@/components/mainSide";

import styled from "styled-components"

const HomeConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export default function Home() {
  return (
    <HomeConteiner>
      <MainAside/>
      <Header/>
    </HomeConteiner>       
  );
}
