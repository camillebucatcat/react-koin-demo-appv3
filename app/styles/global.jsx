import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
    text:{
        fontSize: 32
    },
    fdirection:{
        flexDirection: 'row'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    morebtn:{
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10
    },
    plusbtn:{
        backgroundColor: '#543D8A',
        padding: 10,
        borderRadius: 50
    },
    playercard:{
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 5,
    }
})