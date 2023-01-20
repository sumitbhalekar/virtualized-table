import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { PropTypes } from "prop-types";
import * as React from "react";

export const CardView = (props) => {
  const {
    cardBody,
    cardTitle,
    showExpandIcon,
    cardHeight,
    cardWidth,
    headerRightIcon,
    handleExpandClick,
    expanded,
    showHeaderRightIcon,
    cardHeaderStyle,
    cardTitleStyle,
    cardStyle,
  } = props;

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;

    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card sx={[cardStyle, { maxWidth: cardWidth, maxHeight: cardHeight }]}>
      <div style={cardHeaderStyle}>
        <div style={cardTitleStyle}>{cardTitle}</div>
        <div>
          {showHeaderRightIcon && (
            <IconButton aria-label="settings">{headerRightIcon}</IconButton>
          )}
          {showExpandIcon && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon htmlColor="#fff" />
            </ExpandMore>
          )}
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{cardBody}</CardContent>
      </Collapse>
    </Card>
  );
};

CardView.propTypes = {
  cardBody: PropTypes.any,
  cardTitle: PropTypes.string,
  cardWidth: PropTypes.number,
  cardHeight: PropTypes.number,
  headerRightIcon: PropTypes.any,
  handleExpandClick: PropTypes.func,
  expanded: PropTypes.bool,
  showHeaderRightIcon: PropTypes.bool,
  cardHeaderStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  cardTitleStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  cardStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};
