const SEO_CONTENT={
'wire-size':{keywords:['wire size calculator','wire gauge calculator','electrical wire size','NEC wire size','copper wire size','AWG wire size','conductor sizing','voltage drop wire size','electrical load calculator','ampacity','branch circuit sizing','feeder wire size','wire gauge chart','copper conductor','electrical calculations','residential wiring','commercial wiring','conductor ampacity'],article:`Choosing the correct electrical conductor is one of the most important steps in a safe and reliable electrical installation. A wire size calculator gives you a practical starting point by relating load current, system voltage, circuit distance and allowable voltage drop. For electricians, electrical engineers, contractors and maintenance teams, conductor sizing is more than simply picking an AWG number: the final selection must also satisfy ampacity, installation conditions and the requirements that apply to the project.

This CalcForge wire size calculator uses a transparent voltage-drop approach. Enter the load current, system voltage, one-way circuit distance and target voltage-drop percentage. The calculator estimates the required conductor area and maps that value to a common copper AWG size. This makes it useful for preliminary branch-circuit sizing, feeder planning and checking whether a proposed copper wire is likely to meet a voltage-drop target.

### How wire size is determined
The simplified calculation is based on the relationship between current, distance, conductor resistance and circular-mil area. A longer run produces more resistance and therefore more voltage drop. A higher current also increases voltage drop. Increasing conductor area reduces resistance, which is why a larger conductor may be needed even when the basic ampacity requirement appears acceptable.

### Understanding AWG and conductor area
American Wire Gauge numbers become smaller as conductor diameter increases. In electrical calculations, conductor area is often represented in circular mils because it makes resistance and voltage-drop formulas convenient. The calculator uses an AWG reference table to translate the required area into a practical copper wire gauge.

### Voltage drop and ampacity are different checks
A common mistake is treating voltage drop as the only wire-sizing requirement. It is not. Ampacity is the conductor's allowable current-carrying capacity under the applicable installation conditions. Voltage drop is a performance consideration that tells you how much voltage is lost along the circuit. A properly designed electrical circuit should satisfy both requirements, along with conductor insulation temperature, terminal ratings, ambient conditions, bundling and other applicable rules.

### How circuit distance affects wire size
Distance has a direct effect on conductor resistance. As a circuit gets longer, the same current travels through more conductor resistance and voltage drop increases. Long feeders, detached-building circuits and equipment runs may therefore need a larger conductor than a short circuit carrying the same load.

### Copper versus other conductor materials
This calculator is based on a copper resistivity constant. Aluminum conductors have different electrical resistance characteristics and installation considerations, so their sizing should use the appropriate material-specific data. The same AWG number does not automatically produce the same voltage-drop result across different conductor materials.

### When to use this calculator
Use the tool for preliminary electrical design, estimating conductor size for long runs, comparing copper wire gauges, reviewing a branch circuit, or explaining voltage-drop effects to a project team. For a final installation, verify the selected conductor using the applicable NEC requirements and the actual conductor manufacturer's data. The calculator intentionally exposes its formula so the assumptions are easy to review rather than hiding the calculation behind a single unexplained number.`},
'voltage-drop':{keywords:['voltage drop calculator','voltage drop formula','electrical voltage drop','wire voltage drop','copper voltage drop','voltage drop percentage','NEC voltage drop','branch circuit voltage drop','feeder voltage drop','AWG voltage drop','wire resistance','circuit voltage','electrical wire calculator','voltage loss','long wire run','electrical design','conductor impedance','voltage drop calculation'],article:`Voltage drop is the reduction in electrical potential that occurs as current travels through a conductor. It becomes especially important on long cable runs, higher-current circuits and systems where sensitive equipment needs a stable supply voltage. This voltage drop calculator provides a quick estimate for a copper circuit using load current, system voltage, conductor size and one-way distance.

The result is shown both as volts lost and as a percentage of the system voltage. That percentage is often the easiest way to compare different conductor sizes or evaluate a design target. A larger conductor has lower resistance, so it normally produces less voltage drop for the same current and distance.

### Voltage drop formula
The simplified resistance method used here is Vd = 2 × K × I × D ÷ CM. K is a copper resistivity constant, I is load current, D is one-way distance and CM is conductor area in circular mils. The factor of two represents the outgoing and returning conductor path in a typical two-wire calculation.

### What causes voltage drop?
The main factors are current, conductor resistance and circuit length. Higher current increases the voltage lost across a given resistance, while longer conductors add more resistance. Conductor size also matters because a larger cross-sectional area generally has lower resistance.

### Why voltage drop matters
Excessive voltage loss can cause poor equipment performance, dim lighting, motor starting problems, overheating and nuisance operation. The effect depends on the equipment and system, so a design should not rely on a single universal percentage. Check the applicable electrical code, project specification and equipment manufacturer's requirements.

### Voltage drop percentage explained
Voltage-drop percentage compares the calculated voltage loss with the nominal system voltage. The same number of lost volts represents a larger percentage on a lower-voltage circuit. Reporting both volts and percentage makes it easier to evaluate different circuit designs consistently.

### How to reduce voltage drop
The usual ways to reduce voltage drop are increasing conductor size, reducing circuit length, reducing load current where possible, or changing the system voltage where the overall design permits it. For detailed AC feeder calculations, conductor impedance, power factor, phase configuration and installation conditions may need to be included. Use this calculator as a clear preliminary tool, then perform the project-specific engineering check.`},
'conduit-fill':{keywords:['conduit fill calculator','conduit fill','NEC conduit fill','electrical conduit sizing','conduit size calculator','wire fill calculator','conductor fill','EMT conduit fill','PVC conduit fill','electrical raceway','wire count conduit','conduit area','cable fill','AWG conduit fill','raceway sizing','electrical installation','NEC Chapter 9','conductor area'],article:`Conduit fill determines how much of a raceway's usable cross-sectional area is occupied by conductors. A conduit fill calculator is useful when planning an electrical raceway because too many conductors or oversized conductors can make installation difficult and may violate the applicable fill limit. This CalcForge tool provides a quick preliminary estimate using conductor count, conductor size and conduit inside diameter.

### How conduit fill works
The basic idea is simple: add the cross-sectional area of the conductors, calculate the internal area of the conduit, and divide conductor area by conduit area. The result is expressed as a percentage. Different conductor counts have different permitted fill percentages under the NEC, so the number of conductors matters. This calculator uses 40% as a common reference for three or more conductors, but it should not be treated as a universal code limit for every installation.

### Understanding conductor area
Conductor fill depends on the actual outside dimensions of the conductors, not simply the number of wires. Larger AWG conductors occupy more space, and insulation thickness can change the outside diameter even when the conductor's nominal size is the same. Accurate raceway calculations therefore depend on reliable conductor dimensions.

### Why conductor dimensions matter
Two conductors with the same nominal AWG size can have different outside dimensions because insulation type and construction can differ. For code-compliant raceway sizing, use the applicable conductor dimensions and the NEC tables rather than assuming every wire of an AWG size occupies exactly the same area. Cable assemblies and special wiring methods may require additional considerations.

### Conduit fill percentage
The fill percentage is the conductor area divided by the usable internal conduit area, multiplied by 100. A higher percentage means less free space remains for pulling and arranging the conductors. The applicable code rule depends on conductor count and wiring method, so the calculated percentage should always be compared with the correct requirement.

### Practical conduit sizing workflow
Start with the complete conductor list, including grounding and other conductors that the applicable rules require you to count. Identify the actual conductor outside area, select a raceway material and trade size, then verify the resulting fill percentage. Also check pulling difficulty, bend requirements, box fill, derating and the installation method. A raceway that technically meets area requirements may still be impractical to install if the conductor arrangement is difficult.

### Final code verification
This calculator is therefore best used for early design and comparison. Before installation, confirm the result against the current NEC edition adopted by the project jurisdiction and the exact conductor and raceway data.`},
'cfm':{keywords:['CFM calculator','airflow calculator','HVAC CFM','CFM formula','air changes per hour','ACH calculator','room airflow','HVAC airflow','ventilation calculator','exhaust CFM','supply air CFM','room volume calculator','air changes calculator','HVAC design','duct airflow','indoor air quality','fan CFM','airflow requirements'],article:`CFM, or cubic feet per minute, is one of the most common airflow units used in HVAC work. A CFM calculator can help estimate how much air a room or space needs when an air-change requirement is known. This CalcForge tool uses room length, width, height and air changes per hour to estimate the required airflow.

### CFM and air changes per hour
The relationship is straightforward: CFM = room volume × ACH ÷ 60. First calculate the room volume in cubic feet. Then multiply by the desired air changes per hour and divide by 60 minutes per hour. The result is the approximate airflow required to replace the room's air at that rate.

### How room volume affects airflow
Room volume is calculated by multiplying length, width and height. A larger room contains more air, so the same ACH target requires a greater CFM value. This is why room dimensions should be measured carefully before using an air-change calculation.

### Example HVAC calculation
Imagine a room that is 12 feet long, 15 feet wide and 9 feet high. Its volume is 1,620 cubic feet. At 6 air changes per hour, the basic calculation gives 162 CFM. That number is an airflow target based on the selected ACH, not a complete HVAC equipment selection.

### CFM is not the same as cooling capacity
A major HVAC design mistake is assuming that airflow alone determines equipment size. Cooling and heating capacity depend on sensible and latent loads, outdoor conditions, envelope performance, solar gain, occupancy, equipment and other factors. Ventilation requirements may also be determined by occupancy and applicable standards rather than a simple room ACH assumption.

### Choosing a practical airflow target
The appropriate ACH depends on the room use, occupancy, ventilation strategy and applicable standards. A bedroom, classroom, workshop, bathroom and industrial space can have very different airflow requirements. The calculator should therefore be treated as an estimate based on the ACH value you provide, not as a universal design recommendation.

### When this calculator is useful
Use it for preliminary ventilation estimates, exhaust planning, classroom or workshop airflow checks, fan sizing comparisons and quick room-air-change calculations. For final HVAC design, combine airflow with load calculations, duct pressure loss, diffuser selection, filtration, ventilation requirements and equipment performance data.`},
'bearing-life':{keywords:['bearing life calculator','bearing life','L10 bearing life','bearing life formula','bearing calculation','ball bearing life','roller bearing life','dynamic load rating','equivalent dynamic load','bearing RPM','bearing service life','mechanical engineering calculator','bearing load','bearing fatigue life','machine design','rotating equipment','bearing selection','L10 life'],article:`Bearing life is a key consideration in rotating machinery because a bearing can experience millions of load cycles before fatigue becomes the limiting mechanism. This bearing life calculator estimates basic L10 rating life from the bearing dynamic load rating, equivalent dynamic load and rotational speed. It is intended for preliminary mechanical engineering work and for understanding how bearing load and speed affect expected rating life.

### What is L10 bearing life?
Basic rating life L10 is commonly expressed as the number of revolutions that 90% of an identical group of bearings are expected to achieve or exceed under defined operating conditions. The classic equation is L10 = (C/P)^p × 10^6 revolutions. For ball bearings, the exponent is 3; for roller bearings, the commonly used exponent is 10/3.

### Understanding dynamic load rating
The dynamic load rating C is a manufacturer-defined reference value used in bearing life calculations. The equivalent dynamic load P represents the effective load applied to the bearing for the calculation. Both values must be selected from appropriate bearing data and loading conditions.

### Why load has such a strong effect
Bearing life is nonlinear with load. Because the load ratio is raised to an exponent, a relatively small reduction in equivalent dynamic load can produce a large increase in calculated rating life. Conversely, excessive load can reduce calculated life dramatically. This is why bearing selection should consider the complete load spectrum rather than only the nominal shaft load.

### Ball bearings versus roller bearings
The life exponent differs between common bearing types. The calculator uses p = 3 for ball bearings and p = 10/3 for roller bearings. This distinction is important because changing the bearing type changes the relationship between load and calculated basic rating life.

### Converting bearing life to hours
Revolutions are converted to operating hours using shaft speed. At higher RPM, a bearing accumulates the same number of revolutions in less time, so its calculated life in hours decreases. A slow-moving bearing can therefore have a long operating time even when its life in revolutions is unchanged.

### What this calculator does not cover
Actual bearing service life can be affected by lubrication, contamination, mounting accuracy, misalignment, temperature, clearance, vibration, static load and variable operating conditions. For critical machinery, use the bearing manufacturer's detailed life methodology and application data. This calculator is a transparent basic-rating-life estimate, not a substitute for a complete bearing application analysis.`}
};