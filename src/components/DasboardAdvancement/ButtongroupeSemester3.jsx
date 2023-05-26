import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useTheme } from '@mui/material/styles';
import { useAcheivement } from '../../context/AcheivementContext';


export default function Buttongroup({buttonProps,handleChangeChapterId,onChapterButtonClick,handleScoreTypeChange}) {

  const { Chapter} = useAcheivement();

  // retrive chapter titles 
    const chapter1 = Chapter?.[0]?.name;
    const chapter2 = Chapter?.[1]?.name;
    const chapter3 = Chapter?.[2]?.name;
   
    const options = [chapter1, chapter2, chapter3];

    // retrive chapter id 

    const chapter1Id = Chapter?.[0]?.id;
    const chapter2Id = Chapter?.[1]?.id;
    const chapter3Id = Chapter?.[2]?.id;
   
    const ChapterId = [chapter1Id, chapter2Id, chapter3Id];
    

    const theme =useTheme();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    onChapterButtonClick();
    handleScoreTypeChange('semester');
  };

  const handleMenuItemClick = (chapterId) => {
    setSelectedIndex(chapterId);
    setOpen(false);
    onChapterButtonClick();
    handleChangeChapterId(ChapterId[chapterId]);
    handleScoreTypeChange('semester');
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);

  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="string" sx={{backgroundColor: theme.palette.secondary.myblue,color:theme.palette.secondary.white}} ref={anchorRef} aria-label="split button" >
        <Button sx={{color: theme.palette.secondary.white}}onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="قائمة المواد"
          aria-haspopup="menu"
          {...buttonProps} 
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                    
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}