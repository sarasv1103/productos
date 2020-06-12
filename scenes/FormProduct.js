import React, {Component} from 'react';
import {View, Text, StyleSheet, ImagePickerIOS} from 'react-native';
import {Form, Item, Input, Image, Button} from 'native-base'

export default class FormComponent extends Component {

    constructor(props) {
      super(props);
      this.handleChange= this.handleChange.bind(this);
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
      fetch('/addproduct', {
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
      fetch('/deleteproduct/'+this.state.id, {
        method: 'DELETE'
      });
    }

    updateRequest = () => {
      fetch('/updateproduct/'+this.state.id, {
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
      const {photo} = this.state;
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
            <Button title="Choose image" onPress={this.handleChoosePhoto} />
          </Item>
          <Item last>
            <Button title="Save" onPress={this.sendRequest} />
          </Item>
          <Item last>
            <Button title="Delete" onPress={this.deleteRequest} />
          </Item>
          <Item last>
            <Button title="Update" onPress={this.updateRequest} />
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