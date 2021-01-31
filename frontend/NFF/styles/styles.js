import React, {
    StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1,
        padding: 40,
    },
    body: {
        flex: 9,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
    },
    primaryButton: {
        margin: 10,
        padding: 15,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:"#67ADEE",
        width:200,
        borderRadius: 30
    },
    primaryText: {
        fontSize: 25, 
        color:'#4C5355',
    },
    inputBox:{    
        width: 320,
        height: 50,
        marginTop : 60,
        borderBottomColor:'#ddd',
        borderBottomWidth: 1,
        paddingBottom: 10,
        fontSize:16,
        color:'#ddd',
    },
});