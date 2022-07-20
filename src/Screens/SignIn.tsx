import {useState} from 'react'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import {VStack, Heading, Icon, useTheme} from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import Logo from '../assets/logo_primary.svg'

import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignIn (){

  
const { colors } = useTheme();

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

function handleSignIn(){
  if(!email || !password){
    return Alert.alert("Entrar", "Insira o seu e-mail e senha")
  }
}




  return(
   <VStack flex={1} alignItems = 'center' bg ='gray.600' px = {8} pt ={24}>

    <Logo />

    <Heading color = 'gray.100' fontSize = 'xl' mt = {20} mb = {6}>
      Acesse sua conta 
    </Heading>

    <Input 
    mb={4}
    placeholder = 'e-mail'
    InputLeftElement = {<Icon as ={<Envelope color = {colors.gray[300]}/>} ml = {4} />}
    onChangeText = {setEmail}/>

    <Input 
    placeholder = 'senha' 
    secureTextEntry
    InputLeftElement = {<Icon as ={<Key color = {colors.gray[300]}/>} 
    ml = {4} 
    />} 
    onChangeText = {setPassword}/>

    <Button title = 'Entrar' w='full' mt={12}/>
    
  </VStack>
    )
}