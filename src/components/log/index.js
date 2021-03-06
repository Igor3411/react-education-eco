import { connect } from "react-redux";
import Log from "./Log";

const arrCreate = log => {
  const arr = [];
  // eslint-disable-next-line guard-for-in
  for (const prop in log) {
    const now = new Date(prop);
    arr.push(`${now.toLocaleTimeString()}:${log[prop]}`);
  }
  return arr;
};

const mapStateToProps = store => ({
  log: store.world.log,
  logList: arrCreate(store.world.log)
});

export default connect(mapStateToProps)(Log);
