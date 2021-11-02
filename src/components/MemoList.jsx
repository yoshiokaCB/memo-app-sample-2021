import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';
import Icon from './icon';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{String(item.updateAt)}</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={memos}
        /* eslint-disable-next-line */
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* {memos.map((memo) => (
        <TouchableOpacity
          key={memo.id}
          style={styles.memoListItem}
          onPress={() => { navigation.navigate('MemoDetail'); }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
            <Text style={styles.memoListItemDate}>{String(memo.updateAt)}</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Icon name="delete" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))} */}

    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updateAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0, 0.15),',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
