import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetchMessAndFeedBackData } from '../../services/operations/CommonAPI';
import { useToast } from 'react-native-toast-notifications';
import AnimatedCardMessFeedback from '../../components/common/AnimatedCardMessFeedback';

const ViewMessFeedBack = () => {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const fetchData = async() => {
    const data = await dispatch(fetchMessAndFeedBackData(toast));
    if(!data) return;

    setData(data);
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
);

  return (
    <>
        {
            loading ? "" :
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                      <View style={styles.cardContainer}>
                          {data && data.map((data, index) => (
                          <AnimatedCardMessFeedback key={index} data={data} />
                          ))}
                      </View>
                    </View>
                </View>
            </ScrollView>
        }
    </>
  )
}

export default ViewMessFeedBack

const styles = StyleSheet.create({
  heading: {
    width: '100%',
    backgroundColor: '#ffb703',
    paddingVertical: 15,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 30,
  },
  subContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    gap: 20,
    paddingVertical: 30,
    paddingHorizontal: 0,
  },
});
