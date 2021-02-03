import React,{Component} from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    ScrollView, 
    View,
    TouchableOpacity,
    Alert
 } from 'react-native';
import styles from '../styles/styles.js';
import {Input,Checkbox,Select} from 'teaset';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';

const BabyInfo = (props) => {
    return(
        <View>
            <Text style={ [styles.primaryText, { marginTop: 30 },{color:`#000080`}]}>
                    Baby Info
            </Text>
                <Text style={ [styles.primaryText,{fontSize:10},{ marginTop: 10 },{color:`#000080`}]}>
                    ** means required fields
                </Text>
                <Input style={[{width: '100%'},{marginTop:20}]} 
                    placeholder="** Baby Name" placeholderTextColor = 'ddd'
                    onChangeText={text1 => this.setState({ text1 })}
                    value={this.state.text1}
                />
                <Input style={[{width: '100%'},{marginTop: 20}]} 
                    placeholder="Upload picture for your baby" placeholderTextColor = 'ddd'
                />
                <Text style={ [styles.primaryText, { marginTop: 20 },{color:`#000080`},{fontSize: 15}]}>
                    ** Boy or Girl?
                </Text>

                <View style={{flexDirection:'row', width:'40%',
                    backgroundColor:'#fff', marginBottom:10, justifyContent: 'space-between',
                    alignItems: 'center'}}>
                    <Checkbox style= {{marginTop:10}}
                        title='Boy'
                        checked={this.state.checked4}
                        onChange={checked4 => this.setState({checked4})}
                    />
                    <Checkbox style= {{marginTop:10}}
                        title='Girl'
                        checked={this.state.checked5}
                        onChange={checked5 => this.setState({checked5})}
                    />
                </View>
                <Text style={ [styles.primaryText, { marginTop: 20 },{color:`#000080`},{fontSize: 15}]}>
                    Birthday
                </Text>
                <DatePicker
                style={{width: 200,marginTop:10}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2000-01-01"
                maxDate="2021-02-17"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
                <View style={{ marginTop:10, zIndex:5}}>
                    <DropDownPicker
                        items={[
                            {label: 'Chinese', value: '1'},
                            {label: 'English', value: '2'},
                            {label:'Spanish', value:'3'},
                            {label:'Others',value:'4'},
                        ]}
                        defaultNull
                        placeholder="Select the language"
                        dropDownStyle={{backgroundColor:'#fff'}}
                        defaultIndex={0}
                        containerStyle={{height: 40}}
                        labelStyle={{fontSize: 14, color: '#000'}}
                        onChangeItem={item => console.log(item.label, item.value)}
                    />
                </View>
        </View>
    )
}
export default BabyInfo;