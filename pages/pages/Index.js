// Edit at https://sketchlabs.usepages.com/~
// Learn how to use this Panel in your React app
// at https://howto.usepanels.com
import { Panel, snapY } from 'panels-ui';
import React, { Component, PropTypes } from 'react';
import { Text, Input, Vertical, Horizontal } from 'usepages-blocks';

export default class PageIndex extends Component {
  render() {
    const { props } = this;

    return (
      <Panel
        _ref={$e => { this.$panel = $e }}
        style={{
          height: "100%",
          width: 360
        }}
      >
        {!props.isSubmitted && (
          <Vertical
            data-block={0}
            style={{
              marginTop: 10
            }}
          >
            {props.fields && props.fields.map((item, i) => (
              <Vertical
                data-block={1}
                key={i}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Text
                  data-block={2}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: 14
                  }}
                  text={item.name}
                />
                <Input
                  _ref={item.ref}
                  data-block={3}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: 14,
                    marginTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5
                  }}
                  type={item.type}
                />
              </Vertical>
            ))}
          </Vertical>
        )}
        {!props.isSubmitted && (
          <Horizontal
            data-block={4}
            onClick={props.submit}
            style={{
              backgroundColor: "#f2f2f2",
              border: 0,
              fontWeight: "700",
              marginTop: 10,
              alignSelf: "flex-start",
              marginLeft: 20,
              marginRight: 20,
              padding: 20,
              borderRadius: 5
            }}
          >
            <Text
              data-block={5}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: 14
              }}
              text={"Submit"}
            />
          </Horizontal>
        )}
        {props.isSubmitted && (
          <Text
            data-block={6}
            text={"Submitted!"}
          />
        )}
      </Panel>
    );
  }

  getChildContext = () => ({ scrollTo: this.scrollTo })

  scrollTo = (y, animate) => {
    animate ?
      snapY(this.$panel, y, typeof animate === 'boolean' ? {} : animate) :
      this.$panel.scrollTop = y;
  }
}
PageIndex.childContextTypes = {
  scrollTo: PropTypes.func
}