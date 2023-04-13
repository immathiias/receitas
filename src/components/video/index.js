import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'

export function VideoView({ handleClose, videoUrl }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backBackground}>
                <TouchableOpacity style={styles.backButton} onPress={handleClose} activeOpacity={0.8}>
                    <Feather name="arrow-left" size={24} color="#fff" />
                    <Text style={styles.backText}>Voltar</Text>

                </TouchableOpacity>
            </View>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    backBackground: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        height: 48,
        justifyContent: 'center'
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14
    },
    backText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14
    },
    contentView: {
        flex: 1,
        width: '100%'
    }
})