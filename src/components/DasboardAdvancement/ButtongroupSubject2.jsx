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

export default function Buttongroup({ onSubjectButtonClick ,handleScoreTypeChange,handlegetMistakesbySubject}) {

  const { Subjects} = useAcheivement();
  const {getMistakesbySubjects } = useAcheivement();


// retrive subject titles 
  const Arabic = Subjects?.[0]?.title;
  const Math = Subjects?.[1]?.title;
  const Science = Subjects?.[2]?.title;
  const Frensh = Subjects?.[3]?.title;
  const options = [Arabic, Math, Science, Frensh];
  
// retrive subject's id
const ArabicId = Subjects?.[0]?.id;
const MathId = Subjects?.[1]?.id;
const ScienceId = Subjects?.[2]?.id;
const FrenshId = Subjects?.[3]?.id;

const SubjectId = [ArabicId, MathId, ScienceId, FrenshId];
// console.log(SubjectId);
 

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    onSubjectButtonClick();
    handleScoreTypeChange('subject');  
    const selectedSubjectId = SubjectId[index]; 
    handlegetMistakesbySubject(selectedSubjectId); 
  };


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    onSubjectButtonClick();
    const selectedSubjectId = SubjectId[index]; // Get the selected subjectId
    handlegetMistakesbySubject(selectedSubjectId); // Pass selectedSubjectId
    handleScoreTypeChange('subject');

  };
  
console.log()
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
    
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="string"
        sx={{
          backgroundColor: theme.palette.secondary.myblue,
          color: theme.palette.secondary.white,
        }}
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
  size="small"
  aria-controls={open ? 'split-button-menu' : undefined}
  aria-expanded={open ? 'true' : undefined}
  aria-label="قائمة المواد"
  aria-haspopup="menu"
  onClick={handleToggle}
>
   <ArrowDropDownIcon />
</Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
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
                      onClick={event => handleMenuItemClick(event, index)}
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
