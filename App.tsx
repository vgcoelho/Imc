import React {} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
    

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" }
        this.calcular = this.calcular.bind(this)
    }
    calcular() {
        let imc = this.state.massa / (this.state.altura * this.state.altura)
        let r = this.state
        r.resultado = imc
        if (r.resultado < 15) {
            r.resultadoText =  'Abaixo do peso'
        }
       
        else if (r.resultado > 40) {
            r.resultadoText = 'Obesidade'
        }
        
        this.setState(r)



    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.entrada}>
                    <TextInput autoCapitalize="nove" placeholder="Altura" keyboardType="numerico" style={styles.input} onChangeText={(altura) => { this.setState({ altura }) }} />
                    <TextInput autoCapitalize="nove" placeholder="Massa" keyboardType="numerico" style={styles.input} onChangeText={(massa) => { this.setState({ massa }) }} />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
                <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
                <Text style={[styles.resultado, { fontSize: 25 }]}>{this.state.resultadoText}</Text>

            </View>
        );
    }
}

const newLocal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    entrada: {
        flexDirection: 'red',
    },
    input: {
        height: 80,
        textAlign: "center",
        width: "50%",
        fontSize: 50,
        marginTop: 34,
    },
    button: {
        backgroundColor: "#9ACD32",
    },
    buttontext: {
        textAlign: "center",
        padding: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: "green",
    },
    resultado: {
        alignSelf: "center",
        color: "lightgray",
        fontSize: 45,
        fontWeight: 'bold',
        padding: 6,
    },
});
const styles = newLocal;