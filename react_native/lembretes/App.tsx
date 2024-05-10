import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  useState
} from 'react';

import {
  Ionicons
} from '@expo/vector-icons';


type Lembrete = {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    if (lembrete.trim() === '') {
      return alert('Digite um lembrete.')
    }
    else {
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete
      }

      setLembretes(lembretesAtual => [
        novoLembrete,
        ...lembretesAtual,
      ])
      setLembrete('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Digite um lembrete..."
        value={lembrete}
        onChangeText={lembrete => setLembrete(lembrete.toUpperCase())}
      />

      <Pressable
        style={styles.button}
        onPress={adicionar}
        onLongPress={() => alert('Solte o botão para adicionar o lembrete.')}
      >
        <Text
          style={styles.buttonText}
        >
          Adicionar lembrete
        </Text>
      </Pressable>

      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={lembretes}
        renderItem={lembrete => (
          <View>
            <Text style={styles.listItem}>
              {lembrete.item.texto}
            </Text>
          </View>
        )}
      />

      <View style={styles.iconsView}>
        <Ionicons style={styles.icons} name="logo-instagram" size={25} color="purple" />
        <Ionicons style={styles.icons} name="logo-facebook" size={25} color="blue" />
        <Ionicons style={styles.icons} name="logo-whatsapp" size={25} color="green" />
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },

  inputs: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginBottom: 12,
  },

  button: {
    width: '80%',
    backgroundColor: '#0096F3', //material design
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  list: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width: '80%',
  },

  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    margin: 8,
  },

  iconsView: {
    flexDirection: 'row',
    padding: 12,
  },

  icons: {
    marginLeft: 8,
  },

});
