'use client'
import Layout from "@/layout";
import styled from "styled-components"
import Link from "next/link";
import { useEffect } from "react";
import { getProdutoApi } from "@/api/api";
const HomeConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const TextCenter = styled.p`
  color: #414141;
  font-size: 2rem;
`
const LinkStyled = styled(Link)`
  font-size: 1.5rem;
`
const ConteinerExcept = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 250px;
`

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchProdutos() {
      try {
        const produtosData = await getProdutoApi();
        console.log(produtosData);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    }

    fetchProdutos();
  }, []);
  
  return (
    <HomeConteiner>
      <Layout>
        <ConteinerExcept>
          <TextCenter>Seu estoque ainda está vazio, cadastre seus produtos...</TextCenter>
          <LinkStyled href={'/produto'}><u>Cadastrar produtos</u></LinkStyled>
        </ConteinerExcept>
      </Layout>
    </HomeConteiner>       
  );
}
