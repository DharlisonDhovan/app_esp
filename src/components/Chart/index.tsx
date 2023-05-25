import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    ImageBackground,
    Modal,
    ToastAndroid,
    Dimensions
  } from "react-native";
import styles from "./styles";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';

  export default function Chart() {
    return(
        <View style={styles.ChartContainer}>
            <LineChart
            
        data={{
          labels: ['January', 'February', 'March', 'April'],
          
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} 
        height={400}
        yAxisLabel={'º'}
        
        chartConfig={{
          decimalPlaces: 2, 
          color: (opacity = 255) => `#39ff14`,
          style: {
            borderRadius: 16,
            alignItems:'center',
            justifyContent:'center'
            
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          justifyContent:'center',
          alignItems:'center',
          
        }}
      />
        </View>
    )
  }