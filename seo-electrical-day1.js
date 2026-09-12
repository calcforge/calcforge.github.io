Object.assign(SEO_CONTENT,{
'ampacity':{primary:'ampacity calculator',intent:'Informational and calculation intent: users want a quick conductor-current reference and guidance on NEC ampacity checks.',keywords:['ampacity calculator','NEC ampacity calculator','wire ampacity calculator','conductor ampacity calculator','ampacity chart','copper wire ampacity','75°C ampacity','wire current rating','conductor current capacity','electrical ampacity','ampacity calculation','ampacity table','AWG ampacity','wire size ampacity','NEC wire ampacity','allowable ampacity','current carrying capacity wire','electrical conductor rating','copper conductor ampacity','ampacity correction factor','ampacity adjustment factor','ambient temperature ampacity','THHN ampacity','wire rating calculator'],article:`An ampacity calculator helps answer a common electrical design question: how much current can a conductor carry under a stated reference condition? CalcForge provides a quick copper-conductor reference so users can compare AWG sizes before doing the complete code calculation. The result is deliberately labeled as a preliminary reference because actual allowable ampacity depends on the conductor, insulation, installation method and adopted code.

### What conductor ampacity means
Ampacity is the maximum current a conductor is permitted to carry continuously under specified conditions without exceeding its temperature rating. It is not simply the physical size of the copper. Insulation, ambient temperature, conductor grouping and termination ratings can all affect the final allowable value.

### How this ampacity calculator works
The tool maps a selected copper AWG size to a simplified 75°C reference value. This makes it useful for comparing common conductor sizes and understanding the relationship between wire gauge and current capacity. It does not attempt to reproduce every NEC adjustment rule automatically.

### Ampacity formula and reference values
There is no single universal formula that replaces the electrical code ampacity tables. In this tool, the calculation is a lookup of a reference ampacity for the selected AWG. A real design may require applying ambient-temperature correction and adjustment factors to a base table value.

### Step-by-step ampacity check
Identify the conductor material and insulation temperature rating. Find the applicable base ampacity table, apply ambient-temperature correction and adjustment for current-carrying conductors, then check the equipment terminal limitations. Finally compare the resulting allowable ampacity with the actual load and overcurrent protection requirements.

### Why 60°C, 75°C and 90°C matter
Conductor ampacity tables can contain values associated with different temperature ratings. The insulation rating and terminal limitations determine which value may actually be used. A higher table number does not automatically mean a higher allowable field ampacity.

### Worked example and practical interpretation
For a 12 AWG copper conductor, this tool shows a 25 A 75°C reference value. That number should not be treated as an automatic 25 A installation rating. If the circuit has high ambient temperature, several current-carrying conductors, or terminals limited to a lower temperature rating, the permitted ampacity may be lower.

### Assumptions and limitations
This is a preliminary ampacity reference, not a code-compliance engine. Verify the current adopted NEC or other applicable standard, conductor manufacturer's data, correction and adjustment factors, termination ratings and installation method before specifying a conductor.`},
'wire-gauge':{primary:'wire gauge calculator',intent:'Calculation intent: users want the appropriate AWG size for a target current, often as a starting point before a full electrical sizing check.',keywords:['wire gauge calculator','AWG calculator','wire gauge size calculator','AWG wire size calculator','electrical wire gauge calculator','wire gauge for amps','wire gauge for current','AWG size for amperage','copper wire gauge calculator','wire size by amps','AWG ampacity calculator','wire gauge chart calculator','electrical wire size by current','what gauge wire do I need','what AWG wire for amps','wire gauge conversion','AWG conductor size','wire gauge selection','copper AWG size','branch circuit wire gauge','feeder wire gauge','wire gauge for 20 amps','wire gauge for 30 amps','wire gauge reference'],article:`A wire gauge calculator provides a fast starting point for choosing an American Wire Gauge (AWG) conductor from a target current. CalcForge uses a simplified copper ampacity reference to identify the smallest listed gauge that meets the requested current. The result is a preliminary sizing aid, not a substitute for the complete electrical design.

### What AWG means
American Wire Gauge is a standardized size system for electrical conductors. In AWG, a smaller number generally means a larger conductor. Gauge describes physical conductor size, while allowable ampacity depends on material, insulation, installation and temperature conditions.

### How the wire gauge calculator works
The calculator compares the entered target current with a reference ampacity table and returns the first AWG size whose reference value meets or exceeds that current. This makes the result easy to interpret: higher current generally requires a larger conductor.

### Wire gauge formula and variables
The tool is based on a reference lookup rather than a single resistance equation. The main variable is target current in amperes. The output is an AWG designation and its corresponding reference ampacity. Voltage drop and installation conditions are separate checks.

### Step-by-step wire gauge selection
Start with the actual calculated load current. Use the calculator to identify a preliminary AWG size, then verify conductor ampacity under the actual installation conditions. Check voltage drop for long runs, overcurrent protection, terminal temperature limits and the applicable electrical code.

### Wire gauge versus voltage drop
A conductor can have enough ampacity for a load but still produce excessive voltage drop on a long circuit. For that reason, wire selection should not stop at an AWG-by-amps lookup. CalcForge also provides separate wire-size and voltage-drop calculators for the next design check.

### Worked example
If the target current is 20 A, the reference table identifies 14 AWG at 20 A as the first listed match. That does not mean 14 AWG is automatically the correct installation conductor. The final selection depends on the applicable ampacity rules, terminal ratings, circuit conditions and voltage-drop requirements.

### Assumptions and limitations
This tool assumes copper and uses simplified reference ampacity values. It does not account for ambient-temperature correction, conductor bundling, insulation type, aluminum conductors or every code exception. Use it as a starting point and complete the actual code checks before installation.`},
'transformer-sizing':{primary:'transformer sizing calculator',intent:'Calculation intent: users want transformer kVA from voltage, current and phase before selecting a standard transformer rating.',keywords:['transformer sizing calculator','transformer kVA calculator','transformer size calculator','transformer sizing','electrical transformer calculator','transformer load calculator','single phase transformer sizing','three phase transformer sizing','transformer kVA sizing','transformer capacity calculator','transformer current calculator','transformer VA calculator','how to size a transformer','transformer size for load','transformer rating calculator','transformer load kVA','electrical transformer sizing','transformer primary current','transformer secondary current','transformer apparent power','kVA from volts and amps','3 phase transformer kVA','single phase transformer kVA','transformer sizing formula'],article:`Transformer sizing starts with apparent power. This transformer sizing calculator estimates the required kVA from system voltage, load current and phase configuration, giving users a practical starting point for selecting a standard transformer rating. Final transformer selection also depends on loading, voltage ratio, duty, temperature, harmonics and installation requirements.

### What transformer sizing calculates
The calculator converts volts and amps into apparent power in kVA. Single-phase systems use V × I, while three-phase systems use √3 × V × I. The result represents the electrical load apparent power before applying project-specific selection margins.

### Transformer kVA formulas
For single phase, kVA = V × I ÷ 1000. For balanced three phase, kVA = √3 × V × I ÷ 1000. Voltage is entered in volts and current in amperes. The calculator then reports apparent power in kilovolt-amperes.

### Variables and units
Enter the system voltage used by the selected phase formula and the load current in amperes. Select single phase or three phase. For a transformer with different primary and secondary voltages, calculate the relevant side current separately when checking conductor and protection requirements.

### Step-by-step transformer selection
Determine the calculated load, identify whether it is single or three phase, calculate kVA, then compare the result with available standard transformer ratings. Consider continuous loading, starting currents, future expansion, ambient temperature and the transformer's actual voltage ratio before making a final selection.

### Why transformer kVA is not the same as kW
Transformers are commonly rated in kVA because apparent power includes both real and reactive components. A load's kW depends on power factor. A transformer must be capable of supplying the required apparent power even when the load power factor is below unity.

### Worked example
A 240 V single-phase load drawing 40 A has an apparent load of 240 × 40 ÷ 1000 = 9.6 kVA. A designer would then compare that requirement with suitable standard transformer ratings and check the actual operating conditions rather than selecting solely from the calculated number.

### Assumptions and limitations
This calculator estimates apparent power only. It does not select a transformer voltage ratio, calculate inrush, evaluate harmonics, determine short-circuit performance or perform a complete NEC transformer installation check. Verify manufacturer data and applicable electrical requirements.`},
'breaker-size':{primary:'breaker size calculator',intent:'Calculation intent: users want a preliminary overcurrent-device rating from a known load current and applicable design factor.',keywords:['breaker size calculator','circuit breaker size calculator','electrical breaker calculator','breaker sizing calculator','circuit breaker sizing','breaker size for amps','breaker size for load','how to size a breaker','breaker amp calculator','overcurrent protection calculator','breaker rating calculator','NEC breaker sizing','circuit protection calculator','breaker size chart','amp breaker size','electrical load breaker size','125 percent breaker sizing','continuous load breaker','standard breaker sizes','overcurrent device sizing','branch circuit breaker size','wire and breaker sizing','breaker size for motor','electrical breaker selection'],article:`A breaker size calculator helps estimate a preliminary overcurrent-device rating from a load current and design factor. CalcForge keeps the factor visible instead of assuming that one percentage applies to every load. This is important because breaker selection depends on the type of load, conductor ampacity and the applicable electrical rules.

### What breaker sizing calculates
The tool multiplies the entered load current by a design factor and then selects the next available standard breaker size in its reference list. The result is intended as a starting point for evaluating overcurrent protection, not as an automatic code answer.

### Breaker sizing formula
Required rating = load current × design factor. A factor of 125% is commonly relevant to some continuous-load calculations, but the correct requirement depends on the circuit and governing code. The calculator lets the user change the factor when another design basis applies.

### Variables and units
Load current is entered in amperes and the design factor as a percentage. The output is the next standard breaker size at or above the calculated requirement. Conductor ampacity must be checked independently because a larger breaker cannot simply be used to solve an undersized conductor.

### Step-by-step breaker selection
Determine the actual calculated load and whether any continuous-load or equipment-specific rule applies. Apply the correct design factor, identify a permitted standard overcurrent device, then verify conductor ampacity, terminal ratings, short-circuit requirements and the equipment manufacturer's instructions.

### Breaker size and wire size relationship
Breaker and conductor sizing work together but answer different questions. The breaker protects the circuit from excessive current, while the conductor must be able to carry the permitted load under its installation conditions. A breaker selection should therefore be checked alongside the wire-size and ampacity calculations.

### Worked example
For a 20 A load with a 125% design factor, the calculated requirement is 25 A. The calculator returns a 25 A reference device. Whether that device is permitted depends on the actual circuit, equipment and applicable standard; the example is not a universal installation rule.

### Assumptions and limitations
This tool does not model every NEC exception, motor starting rule, fuse characteristic, AFCI/GFCI requirement or conductor limitation. Use the current adopted electrical code and equipment documentation for final overcurrent protection selection.`},
'3-phase-power':{primary:'3 phase power calculator',intent:'Calculation intent: users want three-phase kVA and kW from line voltage, current and power factor.',keywords:['3 phase power calculator','three phase power calculator','three phase kW calculator','three phase kVA calculator','3 phase electrical calculator','three phase power formula','3 phase power formula','three phase apparent power','three phase real power','three phase voltage current power','three phase watts calculator','three phase amps to kW','three phase amps to kVA','480V three phase power calculator','three phase load calculator','balanced three phase power','three phase power factor calculator','three phase electrical power','line voltage power calculator','three phase motor power','electrical kW calculator','electrical kVA calculator','three phase current calculator','three phase power calculation'],article:`A three-phase power calculator is useful for estimating apparent and real power from line-to-line voltage, line current and power factor. CalcForge uses the standard balanced three-phase relationship and clearly separates kVA from kW so the result can be interpreted correctly for electrical loads.

### What the three-phase calculator calculates
The tool calculates apparent power in kVA and estimated real power in kW. It assumes a balanced three-phase system and uses line-to-line voltage with line current. Power factor converts apparent power into an estimate of real power.

### Three-phase power formulas
Apparent power is kVA = √3 × V × I ÷ 1000. Real power is kW = √3 × V × I × PF ÷ 1000. V is line-to-line voltage, I is line current and PF is power factor between zero and one.

### Variables and units
Enter line voltage in volts, line current in amperes and power factor as a decimal such as 0.90. The calculator reports kVA and kW. If the available voltage is phase-to-neutral rather than line-to-line, use the appropriate three-phase relationship for the actual system instead of entering it directly as line voltage.

### Step-by-step power calculation
Confirm the system is three phase and balanced enough for the simplified method. Enter line-to-line voltage, measured or calculated line current and power factor. Calculate kVA first, then multiply by power factor to obtain the approximate real power in kW.

### kW versus kVA and power factor
kVA represents apparent electrical power, while kW represents real power delivered to the load. A lower power factor means more apparent power is required for the same real power. This distinction matters when evaluating transformers, generators, switchgear and feeder capacity.

### Worked example
For 480 V, 30 A and a 0.90 power factor, apparent power is approximately 24.9 kVA. Multiplying by 0.90 gives about 22.4 kW. This is a balanced-system estimate and should be compared with the actual equipment nameplate and operating conditions.

### Assumptions and limitations
The calculator assumes a balanced three-phase system and does not model harmonic currents, unbalance, reactive compensation, motor efficiency or detailed feeder losses. For equipment selection, verify the actual system data and applicable engineering requirements.`}
});