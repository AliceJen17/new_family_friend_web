import React , {Component}from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    ScrollView, 
    View,
    TouchableOpacity,
    Alert
 } from 'react-native';
import { Button,} from 'native-base';
import styles from '../styles/styles.js';
import {Input,Checkbox,Select} from 'teaset';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import {Actions} from 'react-native-router-flux';
import BabyInfo from './BabyInfo';


class SignUp2 extends Component{
    constructor(props) {
        super(props);
        this.state = { text1: "" , text2:"", text3:"",text:"",
            checked1: false, 
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            viewSection1 :false,
            viewSection2:false,
            viewSection3:false,
            count:0,
            date:"2000-01-01",
            date1:"2000-01-01",
            date2:"2000-01-01",
            date3:"2000-01-01"
        };
        
        this.items = ['PA','CA'];
    }
    renderBottomComponent1(){
        if(this.state.viewSection1) {
            return (
                <View style = {{zIndex:5}}>
                    <Text style={ [styles.primaryText, { marginTop: 30 },{color:`#000080`}]}>
                            Baby Info2
                    </Text>
                    <Text style={ [styles.primaryText,{fontSize:10},{ marginTop: 10 },{color:`#000080`}]}>
                        ** means required fields
                    </Text>
                    <Input style={[{width: '100%'},{marginTop:20}]} 
                        placeholder="** Baby Name" placeholderTextColor = 'ddd'
                        onChangeText={text2 => this.setState({ text2 })}
                        value={this.state.text2}
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
                    date={this.state.date1}
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
                    }}
                    onDateChange={(date) => {this.setState({date1: date})}}
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
            );
        }
    }
    renderBottomComponent2(){
        if(this.state.viewSection2) {
            return (
                <View style={{zIndex:5}}>
                <Text style={ [styles.primaryText, { marginTop: 30 },{color:`#000080`}]}>
                        Baby Info3
                </Text>
                <Text style={ [styles.primaryText,{fontSize:10},{ marginTop: 10 },{color:`#000080`}]}>
                    ** means required fields
                </Text>
                <Input style={[{width: '100%'},{marginTop:20}]} 
                    placeholder="** Baby Name" placeholderTextColor = 'ddd'
                    onChangeText={text3 => this.setState({ text3 })}
                    value={this.state.text3}
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
                date={this.state.date2}
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
                onDateChange={(date) => {this.setState({date2: date})}}
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
            );
        }
    }
    renderBottomComponent3(){
        if(this.state.viewSection3) {
            return (
                <View style = {{zIndex:5}}>
                    <Text style={ [styles.primaryText, { marginTop: 30 },{color:`#000080`}]}>
                            Baby Info4
                    </Text>
                    <Text style={ [styles.primaryText,{fontSize:10},{ marginTop: 10 },{color:`#000080`}]}>
                        ** means required fields
                    </Text>
                    <Input style={[{width: '100%'},{marginTop:20}]} 
                        placeholder="** Baby Name" placeholderTextColor = 'ddd'
                        onChangeText={text4 => this.setState({ text4 })}
                        value={this.state.text4}
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
                    date={this.state.date3}
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
                    }}
                    onDateChange={(date) => {this.setState({date3: date})}}
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
            );
        }
    }
    buttonPress=()=>{
        if(this.state.count == 0){
            this.setState({viewSection1:true});
            this.setState({count:1});
        }
        if(this.state.count == 1){
            this.setState({viewSection2:true});
            this.setState({count:2});
        }
        if(this.state.count == 2){
            this.setState({viewSection3:true});
            this.setState({count:3});
        }
        if(this.state.count == 3){
            Alert.alert('Maximum adding three babies');
        }
        // this.setState({count:1});
        // if(this.state.count == 1){
        //     this.setState({viewSection2: true});
        // }
    }
    
    render(){
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={ [styles.primaryText, { marginTop: 30 }]}>Sign Up---Step2 </Text>
                <Text style={ [styles.primaryText, { marginTop: 30 },{color:`#000080`}]}>
                    Parent Info 
                </Text>
                <Text style={ [styles.primaryText,{fontSize:10},{ marginTop: 10 },{color:`#000080`}]}>
                    ** means required fields
                </Text>
                <Input style={[{width: '100%'},{marginTop:20}]} 
                    placeholder="** Username" placeholderTextColor = 'ddd'
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Input style={[{width: '100%'},{marginTop: 20}]} 
                    placeholder="Upload picture for personal profile" placeholderTextColor = 'ddd'
                />
                <Text style={ [styles.primaryText, { marginTop: 20 },{color:`#000080`},{fontSize: 15}]}>
                    ** Mom or Dad?
                </Text>

                <View style={{flexDirection:'row', width:'100%',
                    backgroundColor:'#fff', marginBottom:10, justifyContent: 'space-between',
                    alignItems: 'center'}}>
                    <Checkbox style= {{marginTop:10}}
                        title='Mom'
                        checked={this.state.checked1}
                        onChange={checked1 => this.setState({checked1})}
                    />
                    <Checkbox style= {{marginTop:10}}
                        title='Dad'
                        checked={this.state.checked2}
                        onChange={checked2 => this.setState({checked2})}
                    />
                    <Checkbox style= {{marginTop:10}}
                        title='Others'
                        checked={this.state.checked3}
                        onChange={checked3 => this.setState({checked3})}
                    />
                </View>

                <Text style={ [styles.primaryText, { marginTop: 20 },{color:`#000080`},{fontSize: 15}]}>
                    ** Location
                </Text>
                <Input style={[{width: '100%'},{marginTop:10}]} 
                        placeholder="City" placeholderTextColor = 'ddd'/>
                <View style={{ marginTop:10, zIndex:5}}>
                    <DropDownPicker
                        items={[
                            {label: 'PA', value: '1'},
                            {label: 'VA', value: '2'},
                            {label:'CA', value:'3'},
                            {label:'NY',value:'4'},
                            {label:'GA',value:'5'},
                        ]}
                        defaultNull
                        placeholder="Select the State"
                        dropDownStyle={{backgroundColor:'#fff'}}
                        defaultIndex={0}
                        containerStyle={{height: 40}}
                        labelStyle={{fontSize: 14, color: '#000'}}
                        onChangeItem={item => console.log(item.label, item.value)}
                    />
                </View>
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
                {this.renderBottomComponent1()}
                {this.renderBottomComponent2()}
                {this.renderBottomComponent3()}
                <Button onPress={this.buttonPress} style = {[styles.primaryButton,{width:200},
                {marginTop:30},{marginBottom:40},{backgroundColor:`#f8f8ff`}]}>
                    <Text style = {{color:`#000080`,fontSize:17,textDecorationLine: 'underline'}}>Add a new baby</Text>
                </Button>
                {/* {this.renderBottomComponent()} */}
                <Button onPress={()=>Actions.welcome()} style={[styles.primaryButton, {width: 340}, 
                    {marginBottom:'40%'},{marginTop : 30}]}>
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}
                        >Register</Text> 
                </Button>
            </ScrollView> 
        ) 
    }
}

export default SignUp2;