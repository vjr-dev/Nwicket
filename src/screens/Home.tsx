import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import second from 'react-native-image-picker'
import { back1, back2, image_back, camera } from "./assets";
import { pickImageFromCamera } from "../helper/ImagePicker";

export default function Home() {
  const [image,setImage] = useState('')
  const takePicture = () => {
    console.log("dsfgdgdgf")
    pickImageFromCamera().then((image: any)=>{
      setImage(image.data)
     
  })
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'gray' }}>
      <Text>Hi</Text>
          <TouchableOpacity
             
              onPress={() => takePicture()}
              style={{ height: 50, width: 50 }}>
              {image == "" ? <Image
                  source={camera}
                  style={{ height: "100%", width: "100%" }}
              /> : <Image
                  style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  source={{ uri: "data:image/jpeg;base64," + image }}
              />}
          </TouchableOpacity>
    </View>
  )
}