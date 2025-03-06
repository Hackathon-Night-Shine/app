import React from 'react';
import { TextField, Button, FormControlLabel, Checkbox, FormGroup, Box } from '@mui/material';
import { Patient } from '../../../types/patient';

interface Props {
  formData: Patient;
  setFormData: React.Dispatch<React.SetStateAction<Patient>>
}
const PatientForm: React.FC<Props> = ({ formData, setFormData }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('נתוני הטופס:', formData);
    // שליחת בקשה לדיבי
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto', padding: 2 }}>
      <TextField
        label="באיזה אירוע היה"
        variant="outlined"
        fullWidth
        name="event"
        value={formData.event}
        onChange={handleChange}
      />

      <TextField
        label=" סטטוס אישי"
        variant="outlined"
        fullWidth
        name="status"
        value={formData.status}
        onChange={handleChange}
      />
      <TextField
        label="מקום מגורים"
        variant="outlined"
        fullWidth
        name="livingPlace"
        value={formData.livingPlace}
        onChange={handleChange}
      />
      <TextField
        label="עם מי גר"
        variant="outlined"
        fullWidth
        name="livingWith"
        value={formData.livingWith}
        onChange={handleChange}
      />

      <TextField
        label="פוגש פסיכיאטר? באיזה אופן?"
        variant="outlined"
        fullWidth
        name="meetsPsychiatrist"
        value={formData.meetsPsychiatrist}
        onChange={handleChange}
      />

      <TextField
        label="נעזר בכדורים? אם כן לאיזו מטרה?"
        variant="outlined"
        fullWidth
        name="medicationPurpose"
        value={formData.medicationPurpose}
        onChange={handleChange}
      />

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox
            checked={formData.smokes}
            onChange={handleChange}
          />}
          label="מעשן?"
        />
        <FormControlLabel
          control={<Checkbox
            checked={formData.usesOtherSubstances}
            onChange={handleChange}
          />}
          label="צורך חומרים אחרים?"
        />
      </FormGroup>

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox
            checked={formData.treatedBefore}
            onChange={handleChange}
          />}
          label="טופל בעבר?"
        />
        <FormControlLabel
          control={<Checkbox
            checked={formData.hospitalizedBefore}
            onChange={handleChange}
          />}
          label="היה באשפוז פסיכיאטרי?"
        />
        <FormControlLabel
          control={<Checkbox
            checked={formData.tookPsychiatricMedication}
            onChange={handleChange}
          />}
          label="לקח תרופות פסיכיאטריות?"
        />
      </FormGroup>

      <TextField
        label="איך נראת שגרת היום יום?"
        variant="outlined"
        fullWidth
        name="dailyRoutine"
        value={formData.dailyRoutine}
        onChange={handleChange}
        multiline
        rows={4}
      />

      <TextField
        label="למה מגיע לריטריט? למה זקוק?"
        variant="outlined"
        fullWidth
        name="retreatReason"
        value={formData.retreatReason}
        onChange={handleChange}
        multiline
        rows={4}
      />

      <TextField
        label="משהו שחשוב לו להוסיף?"
        variant="outlined"
        fullWidth
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        multiline
        rows={4}
      />

      <TextField
        label="אלרגיות/ מגבלויות"
        variant="outlined"
        fullWidth
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
      />

      <TextField
        label="טלפון נוסף למקרה חירום"
        variant="outlined"
        fullWidth
        name="emergencyPhone"
        value={formData.emergencyPhone}
        onChange={handleChange}
      />

      <TextField
        label="מלל חופשי"
        variant="outlined"
        fullWidth
        name="openComments"
        value={formData.openComments}
        onChange={handleChange}
        multiline
        rows={4}
      />

      <Button type="submit" variant="contained" color="black" sx={{ borderRadius: 10, backgroundColor: '#edc68b' }}>
        שלח טופס
      </Button>
    </Box>
  );
};

export default PatientForm;
