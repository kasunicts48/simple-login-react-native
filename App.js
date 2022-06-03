import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItems,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginScreen({ navigation }) {
  const [username, setUname] = useState('');
  const [password, setPword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./Src/components/images/logo.png')}
        />
        <Text style={styles.title1}> *An unlimiter market space for NFTs </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={(username) => setUname(username)}
          returnKeyType="next"
          style={styles.inputText}></TextInput>

        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={(password) => setPword(password)}
          returnKeyType="go"
          secureTextEntry
          style={styles.inputText}></TextInput>

        <TouchableOpacity
          style={styles.buttonContainerLogin}
          onPress={() => {
            if (username == 'Admin' && password == 'P@ssw0rd') {
              navigation.navigate('Home', { itemId: username });
            } else {
              Alert.alert('Error!, Please check the username and Password');
            }
          }}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginButton}>New to NFT Grabber?</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Singup');
          }}>
          <Text style={styles.loginButton}>Sing Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Singup({ navigation }) {
  const [username, setUname] = useState('');
  const [password, setPword] = useState('');
  const [repassword, setRepword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./Src/components/images/logo.png')}
        />
        <Text style={styles.title1}> *An unlimiter market space for NFTs </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={(text) => setUname(text)}
          returnKeyType="next"
          style={styles.inputText}></TextInput>

        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          onChangeText={(text) => setPword(text)}
          secureTextEntry
          style={styles.inputText}></TextInput>

        <TextInput
          placeholder="Retype Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          onChangeText={(text) => setRepword(text)}
          secureTextEntry
          style={styles.inputText}></TextInput>

        <TouchableOpacity
          style={styles.buttonContainerLogin}
          onPress={() => {
            if (username != '' && password != '' && password == repassword) {
              navigation.navigate('Login');
            }
          }}>
          <Text style={styles.loginButton}>Sing Up</Text>
        </TouchableOpacity>
        <Text style={styles.loginButton}>Back to Login</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation, route }) {
  const { itemId } = route.params;
  return (
    <Drawer.Navigator
      DrawerContent={(props) => <customDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#130f40',
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="NFT Grabber"
        component={HomePage}
        intialParams={{ itemId1: itemId }}
      />
      <Drawer.Screen name="Signout" component={LoginScreen} />
      <Drawer.Screen name="close drawer" component={HomePage} />
    </Drawer.Navigator>
  );
}

//HomePage - Tabs
const Tab = createBottomTabNavigator();

function HomePage({ route }) {
  const { itemId } = route.params;
  Alert.alert('Login Successful');
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Market') {
            return (
              <Ionicons
                name={focused ? 'image' : 'image'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Add Cart') {
            return (
              <Ionicons
                name={focused ? 'cart' : 'cart'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Offers') {
            return (
              <Ionicons
                name={focused ? 'gift' : 'gift'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ee1662',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        initialParams={{ itemId2: itemId }}
      />
      <Tab.Screen name="Market" component={ProductScreen} />
      <Tab.Screen name="Add Cart" component={CartScreen} />
      <Tab.Screen name="Offers" component={Offers} />
    </Tab.Navigator>
  );
}

//Products Screen
function ProductScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Our unique NFTs</Text>
        <View style={styles.imgContainer}>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/1.gif')}
            />
            <Text style={styles.normalText}>NFT001</Text>
          </View>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/2.gif')}
            />
            <Text style={styles.normalText}>NFT002</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/3.gif')}
            />
            <Text style={styles.normalText}>NFT003</Text>
          </View>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/4.gif')}
            />
            <Text style={styles.normalText}>NFT004</Text>
          </View>
        </View>
        <Text style={styles.nftTitle}>Our unique NFTs</Text>
        <View style={styles.imgContainer}>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/5.gif')}
            />
            <Text style={styles.normalText}>NFT005</Text>
          </View>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/6.gif')}
            />
            <Text style={styles.normalText}>NFT006</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/7.gif')}
            />
            <Text style={styles.normalText}>NFT007</Text>
          </View>
          <View>
            <Image
              style={styles.logo1}
              source={require('./Src/components/images/8.gif')}
            />
            <Text style={styles.normalText}>NFT008</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function HomeStackScreen({ navigation, route }) {
  const { itemId2 } = route.params;
  Alert.alert('Login Successfull');
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>
        Hi {itemId2}! Welcome to the NFT Grabber!
      </Text>
      <Image
        style={styles.homeicon}
        source={require('./Src/components/images/token.png')}
      />
      <Text style={styles.homePara}>WHAT YOU NEED TO KNOW?</Text>
      <Text style={styles.homePara}>
        * NFTS unique cryptographic tokens that exist on a blockchain and cannot
        be replicated.
      </Text>
      <Text style={styles.homePara}>
        * NFTS unique cryptographic tokens that exist on a blockchain and cannot
        be replicated.
      </Text>
      <Text style={styles.homePara}>
        * NFTS unique cryptographic tokens that exist on a blockchain and cannot
        be replicated.
      </Text>
      <Image
        style={styles.homedownImage}
        source={require('./Src/components/images/nftArt.jpg')}
      />
    </View>
  );
}

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CartScreen({ route, navigation }) {
  const [pcode, setPcode] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product Code"
        placeholderTextColor="#fff"
        onChangeText={(text) => setPcode(text)}
        defaultValue={pcode}
        returnKeyType="next"
        style={styles.inputS}></TextInput>

      <TextInput
        placeholder="E-Mail"
        placeholderTextColor="#fff"
        onChangeText={(text) => setEmail(text)}
        defaultValue={email}
        returnKeyType="next"
        style={styles.inputS}></TextInput>

      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => {
          Alert.alert(
            'NFT Art: ' + pcode + 'will be deliver to the Mail:' + email
          );
        }}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo2}
          source={require('./Src/components/images/wallet.png')}
        />
      </View>
    </View>
  );
}

function Offers({ route, navigation }) {
  const [pcode, setPcode] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product Code"
        placeholderTextColor="#fff"
        onChangeText={(pname) => setPcode(pname)}
        defaultValue={pcode}
        returnKeyType="next"
        style={styles.inputS}></TextInput>

      <TouchableOpacity
        style={{ backgroundColor: '#421269' }}
        onPress={() => {
          if (pcode == 'NFTOFF50') {
            Alert.alert('You have successfully redeemed the offer');
          } else {
            Alert.alert('invalid code');
          }
        }}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo2}
          source={require('./Src/components/images/gift-box.png')}
        />
      </View>
    </View>
  );
}

export default App;

//Stylesheet
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#000',
  },
  inputText: {
    height: 40,
    backgroundColor: '#808080',
    marginBottom: 10,
    fontSize: 20,
    color: '#ffffff',
    padding: 20,
    borderColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#40126A',
    textAlign: 'center',
  },
  buttonContainerLogin: {
    backgroundColor: '#ee1662',
    textAlign: 'center',
  },
  homeContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  logo: {
    width: 250,
    height: 200,
    alignItems: 'center',
  },
  logo1: {
    width: 120,
    height: 120,
    alignItems: 'center',
  },
  logo2: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButton: {
    fontSize: 20,
    color: '#fff',
    padding: 10,
  },
  title1: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  homeTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
  },
  homeicon: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 110,
  },
  homePara: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'left',
    color: '#fff',
  },
  imgContainer: {
    marginBottom: 35,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputS: {
    backgroundColor: '#808080',
    marginBottom: 10,
    padding: 10,
  },
  homedownImage: {
    height: 200,
    width: 300,
  },
  proceedButton: {
    backgroundColor: '#40126A',
    marginBottom: 10,
  },
  normalText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  nftTitle: {
    fontSize: 30,
    textAlign: 'left',
    color: '#fff',
  },
});
