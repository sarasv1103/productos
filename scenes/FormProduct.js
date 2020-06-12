import React, {Component} from 'react';
import {View, Text, StyleSheet, ImagePickerIOS} from 'react-native';
import {Form, Item, Input, Image, Button} from 'native-base'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class product extends Component {
    constructor() {
      super()

      this.state = {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "stock": "",
        "code": "",
      };
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };

        ImagePicker.launchImageLibrary(options, response => {
            if(response.uri) {
                this.setState({photo: response.uri})
            }
            
        })
    }

    sendRequest = () => {
      fetch('localhost:400/addproduct', {
        method: 'POST',
        body: JSON.stringify({
          name : this.state.name,
          description : this.state.description,
          image : this.state.photo,
          price : this.state.price,
          stock : this.state.stock,
          code  : this.state.code
        })
      });
    }

    deleteRequest = () => {
      fetch('localhost:400/deleteproduct/'+this.state.id, {
        method: 'DELETE'
      });
    }

    updateRequest = () => {
      fetch('localhost:400/updateproduct/'+this.state.id, {
        method: 'POST',
        body: JSON.stringify({
          name : this.state.name,
          description : this.state.description,
          image : this.state.photo,
          price : this.state.price,
          stock : this.state.stock,
          code  : this.state.code
        })
      });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formText}>Create product</Text>

        <Form>
          <Item>
            <Input placeholder="Id" onChangeText={(id) => this.setState({id})}/>
          </Item>
          <Item>
            <Input placeholder="Name" onChangeText={(name) => this.setState({name})}/>
          </Item>
          <Item last>
            <Input placeholder="Description" onChangeText={(description) => this.setState({description})}  value={this.state.username}/>
          </Item>
          <Item>
            <Input placeholder="Price" onChangeText={(price) => this.setState({price})}/>
          </Item>
          <Item>
            <Input placeholder="Stock" onChangeText={(stock) => this.setState({stock})}/>
          </Item>
          <Item>
            <Input placeholder="Code" onChangeText={(code) => this.setState({code})}/>
          </Item>
          <Item last>
            <TouchableHighlight title="img" onPress={this.handleChoosePhoto}>
              <Text>Upload image</Text>
            </TouchableHighlight>
          </Item>
          <Item last>
            <TouchableHighlight title="Create" onPress={this.sendRequest}>
              <Text>Create</Text>
            </TouchableHighlight>
          </Item>
          <Item last>
            <TouchableHighlight title="Delete" onPress={this.deleteRequest}>
              <Text>Delete</Text>
            </TouchableHighlight>
          </Item>
          <Item last>
            <TouchableHighlight title="Update" onPress={this.updateRequest}>
              <Text>Update</Text>
            </TouchableHighlight>
          </Item>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    // padding: 30.8,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  formText: {
    color: '#2D3057',
    fontSize: 19,
    fontFamily: 'GoogleSan-Bol',
    margin: 10,
  },
});