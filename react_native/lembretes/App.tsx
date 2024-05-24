import {
  useState
} from 'react';

import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  AntDesign
} from '@expo/vector-icons';


import {
  Ionicons
} from '@expo/vector-icons';


type Lembrete = {
  id?: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<Lembrete | null>(null)
  const [lembretes, setLembretes] = useState<Lembrete[]>([])
  const [editando, setEditando] = useState<boolean>(false)

  const adicionar = () => {
    if (lembrete?.texto.trim() === '') {
      return alert('Digite um lembrete.')
    }
    else {
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete!.texto
      }

      setLembretes(lembretesAtual => [
        novoLembrete,
        ...lembretesAtual,
      ])
      setLembrete({ texto: '' })
    }
  }

  const remover = (lembrete: Lembrete) => {
    // exibe um Alert para confirmar se o usuário quer mesmo remover
    // busca na lista pelo id do lembrete
    // remove da lista
    // atualiza o estado

    Alert.alert('Deletar?', 'Quer mesmo remover este lembrete?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          setLembretes(
            lembretesAtual => lembretesAtual.filter(item => item.id !== lembrete.id)
          )
        },
      }
    ])
  }

  const atualizar = () => {
    if (lembrete!.texto.trim() === '') {
      return alert('Digite um lembrete.')
    }
    else {
      setLembretes(
        lembretesAtual => lembretesAtual.map(item => {
          if (item.id === lembrete!.id) {
            return lembrete!
          }
          return item
        })
      )
      setLembrete({ texto: '' })
      setEditando(false)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Digite um lembrete..."
        value={lembrete?.texto}
        onChangeText={texto => setLembrete({ ...lembrete, texto: texto.toUpperCase() })}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          if (editando === false) {
            adicionar()
          }
        }}
        onLongPress={() => {
          if (editando === true) {
            atualizar()
          }
        }}
      >
        <Text
          style={styles.buttonText}
        >
          {editando ? 'Segure para atualizar o lembrete' : 'Aperte para adicionar o lembrete'}
        </Text>
      </Pressable>

      <FlatList
        keyExtractor={(item) => item.id!}
        style={styles.list}
        data={lembretes}
        renderItem={lembrete => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              {lembrete.item.texto}
            </Text>
            <View style={styles.listItemButtons}>
              <Pressable
                onPress={() => remover(lembrete.item)}
              >
                <AntDesign
                  name="delete"
                  size={24} />
              </Pressable>
              <Pressable
                onPress={() => {
                  setLembrete({ id: lembrete.item.id, texto: lembrete.item.texto })
                  setEditando(true)
                }}
              >
                <AntDesign
                  name="edit"
                  size={24}
                />
              </Pressable>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },

  listItemText: {
    width: '70%',
    textAlign: 'center',
    //alignSelf: 'center',   
  },

  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%',
  },

  iconsView: {
    flexDirection: 'row',
    padding: 12,
  },

  icons: {
    marginLeft: 8,
  },

});
