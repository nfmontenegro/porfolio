import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 120px;
  h1 {
    color: #d9e4e9;
    font-family: 'Cabin';
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    text-align: center;
    margin: 10px 10px;
  }
`

export const ProfileDescription = styled.div`
  font-size: 1.55rem;
  width: 900px;
  margin: 50px 0 0 100px;
  font-family: 'Titillium Web';
  line-height: 42px;
  color: #e7c296;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
    margin: 0px;
  }
`

export const ContentImageProfile = styled.div`
  width: 9rem;
  height: auto;
  text-align: left;
  display: -webkit-inline-box;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`

export const HeaderWelcome = styled.div`
  font-family: 'Cabin';
  position: relative;
  left: 10%;
  color: white;
  letter-spacing: 1px;
  font-size: 5rem;
  width: 1200px;
  bottom: 650px;
  text-shadow: rgba(255, 255, 255, 0.15) 0px 5px 35px;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 27px;
    left: 5%;
    top: -350px;
    width: 100%;
  }
`

export const HeaderPresentation = styled.div`
  position: relative;
  bottom: 600px;
  margin-left: 140px;
  font-family: 'Helvetica';
  color: rgb(255, 255, 255);
  font-size: 2.5rem;
  text-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px;
  @media (min-width: 320px) and (max-width: 768px) {
    position: absolute;
    font-size: 20px;
    width: 100%;
    left: 5%;
    bottom: 480px;
  }
`
